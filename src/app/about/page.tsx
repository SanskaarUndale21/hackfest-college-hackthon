"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, MapPin, Mail, Anchor, Ship, Globe } from "lucide-react";

const stats = [
  { value: "6", label: "Hours of Hacking", icon: Anchor },
  { value: "30+", label: "Teams", icon: Ship },
  { value: "Tons", label: "Of Goodies", icon: Globe },
  { value: "1st", label: "Edition", icon: MapPin },
];

const teamMembers = [
  { id: 1, name: "Ayman", role: "Web Designer", image: "/captions/1.jpeg" },
  { id: 2, name: "Sanskaar", role: "Backend Developer", image: "/captions/3.jpeg" },
  { id: 3, name: "Aanchal", role: "Graphics Designer", image: "/captions/4.jpeg" },
  { id: 4, name: "Amol Kumbhar", role: "Chatbot Developer", image: "/captions/2.jpeg" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black/80 text-white pt-28 pb-24 px-4 relative overflow-hidden">
      {/* Decorative background orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* Hero heading */}
        <div className="text-center mb-20">
          <p className="text-amber-400/60 font-crimson tracking-[0.5em] uppercase text-sm mb-4">About Us</p>
          <h1 className="text-6xl md:text-8xl font-pirata text-transparent bg-clip-text bg-gradient-to-b from-[#f0e6d2] to-[#8B6914] tracking-wider mb-6">
            HackFest
          </h1>
          <p className="text-2xl md:text-3xl font-pirata text-amber-300/80 tracking-widest">
            The Grand Voyage
          </p>
          <div className="flex justify-center mt-6">
            <div className="w-64 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
          </div>
          <p className="mt-6 text-lg font-crimson text-white/50 tracking-[0.3em] uppercase">
            6 Hour Sprint
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-6 rounded-2xl border border-amber-500/10 bg-white/5 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-500 hover:scale-105"
              >
                <Icon className="w-6 h-6 text-amber-400/60 mb-3" />
                <span className="text-4xl md:text-5xl font-pirata text-amber-400 mb-1" style={{ textShadow: "0 0 20px rgba(251,191,36,0.3)" }}>
                  {stat.value}
                </span>
                <span className="text-xs font-crimson tracking-widest text-white/40 uppercase text-center">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Two Column: What is Hackfest + About SGBIT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">

          {/* What is HackRush */}
          <div className="relative rounded-3xl border border-cyan-500/20 bg-black/40 backdrop-blur-md p-8 md:p-10 hover:border-cyan-500/40 transition-all duration-500 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/5 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                  <Anchor className="w-5 h-5 text-cyan-400" />
                </div>
                <h2 className="text-3xl font-pirata text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-500 tracking-wide">
                  What is HackFest?
                </h2>
              </div>
              <p className="text-white/70 font-crimson text-lg md:text-xl leading-relaxed">
                S.G. Balekundri Institute of Technology presents{" "}
                <span className="text-cyan-300 font-semibold">HackFest 2K26</span> — a{" "}
                <span className="text-cyan-300 font-semibold">6-hour hackathon</span> where teams
                gather to foster innovation and showcase their skills in a marathon of code and creativity.
              </p>
              <p className="mt-4 text-white/50 font-crimson text-base leading-relaxed">
                Organized by the Department of Artificial Intelligence &amp; Data Science, HackFest
                is a platform for students to push the boundaries of technology and build solutions
                that matter.
              </p>
            </div>
          </div>

          {/* About SGBIT */}
          <div className="relative rounded-3xl border border-amber-500/20 bg-black/40 backdrop-blur-md p-8 md:p-10 hover:border-amber-500/40 transition-all duration-500 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/5 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-10 h-10 rounded-full bg-white overflow-hidden border border-amber-500/30 shrink-0">
                  <Image src="/logos/sgbit-logo.png" alt="SGBIT" fill className="object-contain p-0.5" />
                </div>
                <h2 className="text-3xl font-pirata text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 tracking-wide">
                  About SGBIT
                </h2>
              </div>
              <p className="text-white/70 font-crimson text-lg md:text-xl leading-relaxed">
                S.G. Balekundri Institute of Technology, Belagavi — an AICTE-approved institution
                affiliated with Visvesvaraya Technological University, known for producing top-tier
                engineering talent and fostering innovation in Karnataka.
              </p>
              <p className="mt-4 text-white/50 font-crimson text-base leading-relaxed">
                The Department of AI &amp; Data Science leads the charge in cutting-edge research
                and technology education, preparing students for the challenges of tomorrow.
              </p>
            </div>
          </div>
        </div>

        {/* Brochure + Contact Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">

          {/* Download Brochure */}
          <div className="relative rounded-3xl border border-cyan-500/20 bg-black/40 backdrop-blur-md p-8 flex flex-col items-center text-center overflow-hidden hover:border-cyan-500/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6">
                <Download className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-pirata text-cyan-200 mb-3 tracking-wide">Captain&apos;s Log</h3>
              <p className="text-white/50 font-crimson mb-6 text-base">
                The complete map to the treasure — schedule, rules, and secrets of the voyage.
              </p>
              <a
                href="/Hackfest_2K26_v2 - converted.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-cyan-700 to-cyan-600 text-white rounded-full font-pirata text-lg tracking-wide border-t border-cyan-400/40 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300"
              >
                View HackFest PDF <Download className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact / Location */}
          <div className="relative rounded-3xl border border-amber-500/20 bg-black/40 backdrop-blur-md p-8 overflow-hidden hover:border-amber-500/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl font-pirata text-amber-200 mb-6 tracking-wide">Set Your Course</h3>

              <div className="flex items-start gap-4 mb-5">
                <MapPin className="w-5 h-5 text-amber-400 mt-1 shrink-0" />
                <div>
                  <p className="font-crimson text-white/70 text-base leading-relaxed">
                    S.G. Balekundri Institute of Technology<br />
                    Belagavi, Karnataka, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <Mail className="w-5 h-5 text-amber-400 mt-1 shrink-0" />
                <div>
                  <p className="font-crimson text-white/50 text-sm mb-1 uppercase tracking-widest">Interested to sponsor?</p>
                  <a
                    href="mailto:hackrush@sgbit.edu.in"
                    className="font-crimson text-amber-400 hover:text-amber-300 transition-colors text-base"
                  >
                    hackrush@sgbit.edu.in
                  </a>
                </div>
              </div>

              <Link href="/register">
                <button className="w-full py-3 bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-full font-pirata text-lg tracking-wide border-t border-amber-400/40 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all duration-300">
                  Register Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* The Crew / About Us Flip Cards */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-pirata text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 tracking-wide">
              The Captains
            </h2>
            <p className="text-white/50 font-crimson mt-4">Meet the minds behind the voyage.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group relative w-64 h-80 [perspective:1000px]">
                <div className="w-full h-full absolute transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front: Pirate Card */}
                  <div className="absolute w-full h-full [backface-visibility:hidden] rounded-2xl border-2 border-amber-900/50 bg-[#2b1b17] flex flex-col items-center justify-center shadow-xl overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('/teal-leather.webp')] bg-cover mix-blend-overlay" />
                    <Image src="/logo11.webp" alt="Pirate Logo" width={100} height={100} className="drop-shadow-lg opacity-80" />
                    <p className="mt-4 font-pirata text-amber-500 text-xl tracking-widest">Hover to Reveal</p>
                  </div>
                  {/* Back: Person Details */}
                  <div className="absolute w-full h-full [backface-visibility:hidden] rounded-2xl border-2 border-amber-500/50 bg-black/80 flex flex-col items-center justify-center [transform:rotateY(180deg)] shadow-[0_0_20px_rgba(245,158,11,0.2)] overflow-hidden p-4 text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)] bg-white">
                      <Image src={member.image} alt={member.name} width={96} height={96} className="object-cover w-full h-full" />
                    </div>
                    <h3 className="font-pirata text-2xl text-amber-300">{member.name}</h3>
                    <p className="text-base font-crimson text-white/90 mt-2 mb-4 leading-relaxed font-semibold">
                      {member.role}
                    </p>
                    <div className="flex gap-4">
                      <a href="#" className="text-white/50 hover:text-cyan-400 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      </a>
                      <a href="#" className="text-white/50 hover:text-blue-500 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </a>
                      <a href="#" className="text-white/50 hover:text-pink-500 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom divider */}
        <div className="flex justify-center">
          <div className="w-48 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        </div>
      </div>
    </div>
  );
}
