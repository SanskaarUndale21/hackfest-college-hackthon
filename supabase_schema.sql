-- ============================================================
-- HackFest 2K26 — Supabase Schema
-- Run this in the Supabase SQL Editor
-- ============================================================

-- ─────────────────────────────────────────────────────────────
-- 1. REGISTRATIONS TABLE
--    Stores the team leader details + team members as JSONB
-- ─────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS registrations (
  id                    uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at            timestamptz DEFAULT now() NOT NULL,

  -- Team Identity
  team_name             text NOT NULL,

  -- Team Leader
  leader_name           text NOT NULL,
  leader_email          text NOT NULL,
  leader_phone          text NOT NULL CHECK (char_length(leader_phone) = 10),
  leader_college        text NOT NULL DEFAULT 'SGBIT',
  leader_branch         text NOT NULL,
  leader_year           text NOT NULL DEFAULT '1st Year',
  leader_usn            text NOT NULL,

  -- Problem Statement chosen
  problem_statement     text NOT NULL,

  -- Team Members (array of objects: name, email, phone, usn, branch, year)
  -- Example: [{"name":"Alice","email":"a@x.com","phone":"9876543210","usn":"1SG24AI001","branch":"AI&DS","year":"2nd Year"}]
  members               jsonb DEFAULT '[]'::jsonb,

  -- Payment
  transaction_id        text NOT NULL,
  payment_screenshot_url text NOT NULL,  -- URL from Supabase Storage bucket 'payments'

  -- Status
  status                text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'rejected'))
);

-- Index for quick email lookups
CREATE INDEX IF NOT EXISTS idx_registrations_leader_email ON registrations (leader_email);
CREATE INDEX IF NOT EXISTS idx_registrations_status ON registrations (status);
CREATE INDEX IF NOT EXISTS idx_registrations_team_name ON registrations (team_name);

-- ─────────────────────────────────────────────────────────────
-- 2. ROW LEVEL SECURITY
-- ─────────────────────────────────────────────────────────────
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to INSERT (register)
CREATE POLICY "Allow anon insert" ON registrations
  FOR INSERT TO anon
  WITH CHECK (true);

-- Allow authenticated admins to SELECT/UPDATE (admin dashboard)
CREATE POLICY "Allow auth select" ON registrations
  FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "Allow auth update" ON registrations
  FOR UPDATE TO authenticated
  USING (true);

-- ─────────────────────────────────────────────────────────────
-- 3. STORAGE BUCKETS
-- ─────────────────────────────────────────────────────────────

-- 3a. 'payments' bucket — payment screenshots uploaded at registration
INSERT INTO storage.buckets (id, name, public)
VALUES ('payments', 'payments', true)
ON CONFLICT DO NOTHING;

-- Allow anonymous uploads to the payments bucket
CREATE POLICY "Allow anon upload to payments" ON storage.objects
  FOR INSERT TO anon
  WITH CHECK (bucket_id = 'payments');

-- Allow public reads (so screenshots can be viewed by admins)
CREATE POLICY "Allow public read payments" ON storage.objects
  FOR SELECT TO public
  USING (bucket_id = 'payments');

-- 3b. 'participant-photos' bucket — optional team member photos
INSERT INTO storage.buckets (id, name, public)
VALUES ('participant-photos', 'participant-photos', true)
ON CONFLICT DO NOTHING;

CREATE POLICY "Allow anon upload to participant-photos" ON storage.objects
  FOR INSERT TO anon
  WITH CHECK (bucket_id = 'participant-photos');

CREATE POLICY "Allow public read participant-photos" ON storage.objects
  FOR SELECT TO public
  USING (bucket_id = 'participant-photos');

-- ─────────────────────────────────────────────────────────────
-- 4. HELPER VIEW: Flat registration list for admin dashboard
-- ─────────────────────────────────────────────────────────────
CREATE OR REPLACE VIEW registration_summary AS
SELECT
  id,
  created_at,
  team_name,
  leader_name,
  leader_email,
  leader_phone,
  leader_college,
  leader_branch,
  leader_year,
  leader_usn,
  problem_statement,
  jsonb_array_length(members) AS member_count,
  transaction_id,
  payment_screenshot_url,
  status
FROM registrations
ORDER BY created_at DESC;

-- ─────────────────────────────────────────────────────────────
-- MIGRATION: If table already exists, add team_name column
-- (Run only if upgrading an existing deployment)
-- ─────────────────────────────────────────────────────────────
-- ALTER TABLE registrations ADD COLUMN IF NOT EXISTS team_name text NOT NULL DEFAULT 'Team Unknown';

-- ─────────────────────────────────────────────────────────────
-- EXAMPLE INSERT (for testing)
-- ─────────────────────────────────────────────────────────────
/*
INSERT INTO registrations (
  team_name,
  leader_name, leader_email, leader_phone, leader_college,
  leader_branch, leader_year, leader_usn, problem_statement,
  members, transaction_id, payment_screenshot_url
) VALUES (
  'Team Odyssey',
  'Ayman Dehalvi',
  'ayman@sgbit.edu.in',
  '9886936558',
  'SGBIT',
  'AI & DS',
  '1st Year',
  '1SG24AI001',
  'PS 1 - Digital Paint Brush App',
  '[
    {"name":"Amol Kumbhar","email":"amol@sgbit.edu.in","phone":"6360591740","usn":"1SG24AI002","branch":"AI & DS","year":"1st Year"},
    {"name":"Sanskaar","email":"sanskaar@sgbit.edu.in","phone":"9999999999","usn":"1SG24AI003","branch":"AI & DS","year":"1st Year"}
  ]'::jsonb,
  'TXN123456789',
  'https://<project>.supabase.co/storage/v1/object/public/payments/screenshot.jpg'
);
*/
