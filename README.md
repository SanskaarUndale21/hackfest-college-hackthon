# HackFest 2K26 🏴‍☠️

> **A 6-Hour Hackathon** organized by the Department of Artificial Intelligence & Data Science  
> **SG Balekundri Institute of Technology (SGBIT), Belagavi, Karnataka**

---

## 🌊 About

**HackFest 2K26** is a first-edition, 6-hour hackathon where first-year students from SGBIT dive into the world of software development. Teams of 2–4 build real projects from scratch — no experience required, only ambition.

- 📅 **Event Dates:** May 11–13, 2026  
- ⏱️ **Hackathon:** May 13, 2026 · 10:00 AM – 4:00 PM  
- 📍 **Venue:** Sambargimath Seminar Hall, SGBIT  
- 👥 **Team Size:** 2–4 Members  
- 🎯 **Eligibility:** 1st Year Students of SGBIT Only  
- 💰 **Registration Fee:** ₹200 per team  

---

## 🗓️ Schedule

| Day | Date | Theme |
|-----|------|--------|
| Day 1 | May 11, 2026 | Training & Sessions — Frontend, Backend, AI/ML, GitHub |
| Day 2 | May 12, 2026 | Advanced Concepts — Full stack, Dev profiles |
| Day 3 | May 13, 2026 | **The 6-Hour Hackathon** — Build. Break. Innovate. |

---

## 🧩 Problem Statements

| PS | Title |
|----|-------|
| PS 1 | Digital Paint Brush App |
| PS 2 | Basic Calculator |
| PS 3 | Simple Notes App |
| PS 4 | Weather Checker |
| PS 5 | Quiz Game |
| PS 6 | Typing Speed Tester |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router + Turbopack) |
| Language | TypeScript |
| Styling | TailwindCSS v4 |
| Animations | Framer Motion |
| UI Components | shadcn/ui, Radix UI |
| 3D / Canvas | Three.js, @react-three/fiber |
| Database | [Supabase](https://supabase.com/) (PostgreSQL) |
| Storage | Supabase Storage Buckets |
| Payments | Razorpay |
| Fonts | Pirata One, Crimson Text, Plus Jakarta Sans |

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 24
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/amolk5223g/HACKFEST.git
cd HACKFEST

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Fill in your Supabase URL, anon key, and Razorpay keys

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

---

## 🗄️ Database Setup (Supabase)

Run the SQL in `supabase_schema.sql` in your Supabase SQL Editor.

Buckets required:
- `payments` — stores payment screenshot uploads
- `participant-photos` — stores team member photos (optional)

See [`supabase_schema.sql`](./supabase_schema.sql) for full schema including RLS policies.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── about/          # About page
│   ├── events/         # Events page
│   ├── register/       # Registration form
│   ├── contact/        # Contact page
│   ├── timeline/       # Timeline page
│   ├── layout.tsx      # Root layout + metadata
│   ├── page.tsx        # Home page
│   └── template.tsx    # Page transition wrapper
├── components/
│   ├── Hero.tsx
│   ├── Tracks.tsx      # Problem Statements section
│   ├── VoyageLogs.tsx  # Event timeline
│   ├── TheCrew.tsx     # Faculty & Student coordinators
│   ├── PrizePool.tsx
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── FloatingCreatures.tsx  # Animated fish
│   └── ...
public/
├── images/             # Section images & decorations
├── logos/              # SGBIT & HackFest logos
├── captions/           # Team member photos
└── videos/             # Background videos
```

---

## 📦 Available Scripts

```bash
npm run dev        # Start dev server (Turbopack)
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
npm run typecheck  # TypeScript type check
npm run check      # Lint + typecheck + build
```

---

## 👥 The Crew

| Name | Role |
|------|------|
| Ayman | Web Designer |
| Amol Kumbhar | Chatbot Developer |
| Aanchal | Graphics Designer |
| Sanskaar | Backend Developer |

**Faculty Convenors:** Dr. Santosh · Prof. Mallikarjun  
**Student Coordinators:** Ayman Dehalvi · Amol Kumbhar

---

## 📄 License

MIT © SGBIT AI & DS Department, 2026
