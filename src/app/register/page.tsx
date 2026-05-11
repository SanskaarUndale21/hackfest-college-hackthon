"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Phone, Mail, School, BookOpen, Hash, Plus, Trash2, Upload, CheckCircle2, Users, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

const YEAR_OPTIONS = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
const BRANCH_OPTIONS = [
  "AI & DS",
  "Computer Science",
  "Information Science",
  "Electronics & Communication",
  "Mechanical",
  "Civil",
  "Electrical",
  "Other",
];

const PROBLEM_STATEMENTS = [
  "PS 1 - Digital Paint Brush App",
  "PS 2 - Smart Campus Navigator",
  "PS 3 - Waste Management System",
  "PS 4 - Health Monitoring Dashboard",
  "PS 5 - Open Innovation",
];

interface Member {
  name: string;
  email: string;
  phone: string;
  usn: string;
  branch: string;
  year: string;
}

const defaultMember = (): Member => ({
  name: "",
  email: "",
  phone: "",
  usn: "",
  branch: "",
  year: "1st Year",
});

// ────────────────────────────────────────────────────────────────
// Reusable input / select components
// ────────────────────────────────────────────────────────────────
const inputCls =
  "w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/20 focus:ring-2 focus:ring-amber-500/50 outline-none text-sm transition";

const SelectField = ({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) => (
  <div className="space-y-1">
    <label className="text-amber-100/70 font-pirata text-xs tracking-widest uppercase">
      {label}
    </label>
    <div className="relative">
      <select
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${inputCls} appearance-none pr-10 cursor-pointer`}
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-[#111827]">
            {o}
          </option>
        ))}
      </select>
      <ChevronDown
        size={14}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
      />
    </div>
  </div>
);

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Leader / team details
  const [formData, setFormData] = useState({
    teamName: "",
    leaderName: "",
    email: "",
    phone: "",
    college: "SGBIT",
    branch: "",
    year: "1st Year",
    usn: "",
    problemStatement: "",
    transactionId: "",
  });

  const [paymentScreenshot, setPaymentScreenshot] = useState<File | null>(null);
  const [members, setMembers] = useState<Member[]>([defaultMember()]);

  const addMember = () => {
    if (members.length < 3) setMembers([...members, defaultMember()]);
  };

  const removeMember = (index: number) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  const updateMember = (index: number, field: keyof Member, value: string) => {
    const updated = [...members];
    updated[index] = { ...updated[index], [field]: value };
    setMembers(updated);
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!paymentScreenshot) {
      setErrorMessage("Please upload your payment screenshot.");
      return;
    }
    if (!formData.transactionId) {
      setErrorMessage("Please enter the transaction ID.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // 1. Upload screenshot to Supabase Storage
      const fileExt = paymentScreenshot.name.split(".").pop();
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `screenshots/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("payments")
        .upload(filePath, paymentScreenshot);

      if (uploadError) {
        console.error("Supabase Storage Upload Error:", uploadError);
        throw new Error(`Failed to upload payment screenshot: ${uploadError.message}`);
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from("payments").getPublicUrl(filePath);

      // 2. Insert into registrations table
      const { error: dbError } = await supabase.from("registrations").insert([
        {
          team_name: formData.teamName,
          leader_name: formData.leaderName,
          leader_email: formData.email,
          leader_phone: formData.phone,
          leader_college: formData.college,
          leader_branch: formData.branch,
          leader_year: formData.year,
          leader_usn: formData.usn,
          problem_statement: formData.problemStatement,
          members: members,
          transaction_id: formData.transactionId,
          payment_screenshot_url: publicUrl,
        },
      ]);

      if (dbError) throw new Error(`Database error: ${dbError.message}`);

      setSubmitStatus("success");
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || "An unexpected error occurred.");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative w-full min-h-screen flex items-center justify-center p-4 pt-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[#082f49]">
        <Image src="/images/water-texture.png" alt="" fill className="object-cover opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl overflow-hidden"
        >
          {submitStatus === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center text-center py-12"
            >
              <CheckCircle2 className="w-24 h-24 text-green-500 mb-6 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
              <h2 className="text-4xl font-pirata text-amber-400 mb-4 tracking-widest">
                Registration Successful!
              </h2>
              <p className="text-white/70 font-crimson text-lg mb-8 max-w-md">
                Your voyage log has been recorded. The Captains will review your payment and contact you soon.
              </p>
              <Link href="/">
                <button className="px-8 py-3 bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/20 transition-colors">
                  Return to Shore
                </button>
              </Link>
            </motion.div>
          ) : (
            <>
              {/* Header */}
              <div className="mb-8 text-center">
                <div className="inline-block px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-pirata tracking-[0.2em] mb-4 uppercase">
                  {step === 1 ? "Phase I: Team Details" : "Phase II: Payment"}
                </div>
                <h1 className="text-4xl md:text-5xl font-pirata text-[#f0e6d2] tracking-widest mb-2 uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                  Join the Crew
                </h1>
                <p className="text-[#94a3b8] font-crimson text-sm md:text-base italic">
                  {step === 1
                    ? "Only the Captain (Leader) shall register the crew."
                    : "Scan to pay and seal the pact."}
                </p>
              </div>

              {/* Step Progress */}
              <div className="flex items-center gap-2 mb-8">
                {[1, 2].map((s) => (
                  <React.Fragment key={s}>
                    <div
                      className={`h-1.5 flex-1 rounded-full transition-colors duration-500 ${
                        step >= s ? "bg-amber-500" : "bg-white/10"
                      }`}
                    />
                  </React.Fragment>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {/* ── STEP 1: Team & Leader Details ── */}
                {step === 1 ? (
                  <motion.form
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    onSubmit={(e) => {
                      e.preventDefault();
                      setStep(2);
                    }}
                    className="space-y-6"
                  >
                    {/* Team Name */}
                    <div className="bg-black/20 p-4 rounded-xl border border-white/5 space-y-4">
                      <h3 className="text-amber-500 font-pirata text-xl uppercase flex items-center gap-2">
                        <Users size={18} /> Team Identity
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1 md:col-span-2">
                          <label className="text-amber-100/70 font-pirata text-xs tracking-widest uppercase">
                            Team Name
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="e.g. Team Odyssey"
                            className={inputCls}
                            value={formData.teamName}
                            onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                          />
                        </div>
                        <SelectField
                          label="Problem Statement"
                          value={formData.problemStatement}
                          onChange={(v) => setFormData({ ...formData, problemStatement: v })}
                          options={PROBLEM_STATEMENTS}
                        />
                      </div>
                    </div>

                    {/* Leader Details */}
                    <div className="bg-black/20 p-4 rounded-xl border border-white/5 space-y-4">
                      <h3 className="text-amber-500 font-pirata text-xl uppercase flex items-center gap-2">
                        <User size={18} /> Captain's Log (Leader)
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-amber-100/70 font-pirata text-xs tracking-widest uppercase">
                            Full Name
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="Leader's full name"
                            className={inputCls}
                            value={formData.leaderName}
                            onChange={(e) => setFormData({ ...formData, leaderName: e.target.value })}
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-amber-100/70 font-pirata text-xs tracking-widest uppercase">
                            Email
                          </label>
                          <input
                            required
                            type="email"
                            placeholder="leader@college.edu"
                            className={inputCls}
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-amber-100/70 font-pirata text-xs tracking-widest uppercase">
                            Phone (10 digits)
                          </label>
                          <input
                            required
                            type="tel"
                            pattern="[0-9]{10}"
                            maxLength={10}
                            placeholder="9XXXXXXXXX"
                            className={inputCls}
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })}
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-amber-100/70 font-pirata text-xs tracking-widest uppercase">
                            USN
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="1SG24CS001"
                            className={`${inputCls} uppercase`}
                            value={formData.usn}
                            onChange={(e) => setFormData({ ...formData, usn: e.target.value.toUpperCase() })}
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-amber-100/70 font-pirata text-xs tracking-widest uppercase">
                            College
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="College Name"
                            className={inputCls}
                            value={formData.college}
                            onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                          />
                        </div>
                        <SelectField
                          label="Branch"
                          value={formData.branch}
                          onChange={(v) => setFormData({ ...formData, branch: v })}
                          options={BRANCH_OPTIONS}
                        />
                        <SelectField
                          label="Year"
                          value={formData.year}
                          onChange={(v) => setFormData({ ...formData, year: v })}
                          options={YEAR_OPTIONS}
                        />
                      </div>
                    </div>

                    {/* Members */}
                    <div className="bg-black/20 p-4 rounded-xl border border-white/5 space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-amber-500 font-pirata text-xl uppercase flex items-center gap-2">
                          <Users size={18} /> The Crew (Members)
                        </h3>
                        {members.length < 3 && (
                          <button
                            type="button"
                            onClick={addMember}
                            className="flex items-center gap-1 text-xs font-pirata tracking-widest text-white/70 hover:text-amber-400 uppercase"
                          >
                            <Plus size={14} /> Add Mate
                          </button>
                        )}
                      </div>

                      {members.map((member, idx) => (
                        <div key={idx} className="bg-black/20 rounded-lg p-3 space-y-3 border border-white/5">
                          <div className="flex justify-between items-center">
                            <span className="text-amber-400/80 font-pirata text-sm uppercase tracking-widest">
                              Member {idx + 1}
                            </span>
                            {idx > 0 && (
                              <button
                                type="button"
                                onClick={() => removeMember(idx)}
                                className="p-1 text-red-400 hover:text-red-500 transition-colors"
                              >
                                <Trash2 size={16} />
                              </button>
                            )}
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="space-y-1">
                              <label className="text-amber-100/50 font-pirata text-xs tracking-widest uppercase">
                                Full Name
                              </label>
                              <input
                                required
                                type="text"
                                placeholder="Member name"
                                className={inputCls}
                                value={member.name}
                                onChange={(e) => updateMember(idx, "name", e.target.value)}
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-amber-100/50 font-pirata text-xs tracking-widest uppercase">
                                Email
                              </label>
                              <input
                                required
                                type="email"
                                placeholder="member@college.edu"
                                className={inputCls}
                                value={member.email}
                                onChange={(e) => updateMember(idx, "email", e.target.value)}
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-amber-100/50 font-pirata text-xs tracking-widest uppercase">
                                Phone (10 digits)
                              </label>
                              <input
                                required
                                type="tel"
                                pattern="[0-9]{10}"
                                maxLength={10}
                                placeholder="9XXXXXXXXX"
                                className={inputCls}
                                value={member.phone}
                                onChange={(e) => updateMember(idx, "phone", e.target.value.replace(/\D/g, ""))}
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-amber-100/50 font-pirata text-xs tracking-widest uppercase">
                                USN
                              </label>
                              <input
                                required
                                type="text"
                                placeholder="1SG24CS002"
                                className={`${inputCls} uppercase`}
                                value={member.usn}
                                onChange={(e) => updateMember(idx, "usn", e.target.value.toUpperCase())}
                              />
                            </div>
                            <SelectField
                              label="Branch"
                              value={member.branch}
                              onChange={(v) => updateMember(idx, "branch", v)}
                              options={BRANCH_OPTIONS}
                            />
                            <SelectField
                              label="Year"
                              value={member.year}
                              onChange={(v) => updateMember(idx, "year", v)}
                              options={YEAR_OPTIONS}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <button
                      type="submit"
                      className="w-full relative px-6 py-4 font-pirata text-xl font-bold transition-all duration-300 rounded-xl hover:scale-[1.02] active:scale-95 shadow-[0_10px_20px_-5px_rgba(245,158,11,0.3)] bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#f59e0b] bg-[length:200%_100%]"
                    >
                      <span className="relative z-10 text-[#78350f] uppercase tracking-[0.2em] drop-shadow-sm">
                        Proceed to Payment →
                      </span>
                    </button>
                  </motion.form>
                ) : (
                  /* ── STEP 2: Payment ── */
                  <motion.form
                    key="step2"
                    onSubmit={handleFinalSubmit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col items-center text-center space-y-6"
                  >
                    <div className="p-4 bg-white rounded-2xl shadow-2xl relative w-64 h-64 border-4 border-amber-500 overflow-hidden">
                      <Image
                        src="/whatsapp-qr.jpeg"
                        alt="Payment QR Code"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain p-2"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-pirata text-white mb-2">Scan & Pay ₹200</h3>
                      <p className="text-white/50 font-crimson">
                        Please scan the QR code above using any UPI app to complete your registration.
                      </p>
                    </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="w-full space-y-1 text-left">
                        <label className="text-amber-100/70 font-pirata text-xs tracking-widest uppercase">
                          Transaction ID
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Enter UPI Ref No."
                          className={`${inputCls} py-3`}
                          value={formData.transactionId}
                          onChange={(e) => setFormData({ ...formData, transactionId: e.target.value })}
                        />
                      </div>

                      <div className="w-full space-y-1 text-left">
                        <label className="text-amber-100/70 font-pirata text-xs tracking-widest uppercase">
                          Upload Screenshot
                        </label>
                        <div className="relative">
                          <input
                            required
                            type="file"
                            accept="image/*"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            onChange={(e) => {
                              if (e.target.files && e.target.files[0])
                                setPaymentScreenshot(e.target.files[0]);
                            }}
                          />
                          <div className="w-full bg-black/40 border border-white/10 border-dashed rounded-lg px-4 py-3 flex items-center justify-between text-white/50 hover:bg-black/60 transition-colors">
                            <span className="truncate max-w-[150px] text-sm">
                              {paymentScreenshot ? paymentScreenshot.name : "Choose image…"}
                            </span>
                            <Upload size={18} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {errorMessage && (
                      <p className="text-red-400 text-sm font-crimson">{errorMessage}</p>
                    )}

                    <div className="flex w-full gap-4 pt-4">
                      <button
                        type="button"
                        disabled={isSubmitting}
                        onClick={() => setStep(1)}
                        className="px-6 py-3 border border-white/20 text-white rounded-xl font-pirata hover:bg-white/5 transition-colors disabled:opacity-50"
                      >
                        ← Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 flex items-center justify-center bg-gradient-to-r from-cyan-600 to-cyan-500 text-white rounded-xl font-pirata text-xl uppercase tracking-widest hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:hover:scale-100 py-3"
                      >
                        {isSubmitting ? "Uploading…" : "Submit Registration"}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

              <div className="mt-8 flex items-center justify-center">
                <Link
                  href="/"
                  className="text-white/40 hover:text-white transition-colors font-crimson text-sm uppercase tracking-widest"
                >
                  ← Return to Shore
                </Link>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </main>
  );
}
