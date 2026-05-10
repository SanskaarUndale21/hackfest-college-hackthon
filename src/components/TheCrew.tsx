"use client";

import React from "react";
import Image from "next/image";

const facultyConvenors = [
  {
    name: "Dr. Santosh",
    role: "Faculty Convenor",
    image: "/images/faculty_convenor_1.png",
  },
];

const facultyConvenorsLast = [
  {
    name: "Prof. Mallikarjun",
    role: "Faculty Convenor",
    image: "/images/faculty_convenor_2.png",
  },
];

const studentLeads = [
  {
    name: "Ayman Dehalvi",
    role: "Student Coordinator",
    contact: "9886936558",
    image: "/images/student_lead_ayman.png",
  },
  {
    name: "Amol Kumbhar",
    role: "Student Coordinator",
    contact: "6360591740",
    image: "/images/student_lead_amol.png",
  },
];

export function TheCrew() {
  return (
    <section id="the-crew" className="relative w-full py-24 bg-black/40 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Faculty Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-pirata text-[#f0e6d2] drop-shadow-lg tracking-widest mb-4 uppercase">
            Faculty Convenors
          </h2>
          <div className="flex flex-wrap justify-center gap-12 lg:gap-16 mt-12">
            {facultyConvenors.map((member, index) => (
              <div key={index} className="group relative flex flex-col items-center">
                <div className="relative w-48 h-48 mb-6 transform transition-transform duration-500 group-hover:scale-105">
                  <div className="absolute inset-0 rounded-full border-2 border-amber-500/40 shadow-xl group-hover:shadow-amber-500/20 transition-shadow" />
                  <div className="absolute inset-1.5 rounded-full overflow-hidden bg-black/40 backdrop-blur-sm border border-amber-500/60">
                    <div className="absolute inset-0 bg-amber-900/10 flex items-center justify-center">
                      <span className="text-4xl font-pirata text-amber-500/20">{member.name.charAt(0)}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-pirata text-[#f0e6d2] uppercase">{member.name}</h3>
                <p className="text-amber-500/70 font-crimson text-sm italic">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Student Section */}
        <div className="text-center mb-16 mt-24">
          <h2 className="text-5xl md:text-6xl font-pirata text-[#f0e6d2] drop-shadow-lg tracking-widest mb-4 uppercase">
            Student Coordinators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-4xl mx-auto mt-12">
            {studentLeads.map((member, index) => (
              <div key={index} className="group relative flex flex-col items-center bg-[#1a0f0a]/60 p-8 rounded-2xl border border-amber-900/30 backdrop-blur-md transition-all hover:border-amber-500/40">
                <div className="relative w-40 h-40 mb-6">
                  <div className="absolute inset-0 rounded-full border-4 border-amber-900/40 shadow-2xl" />
                  <div className="absolute inset-1.5 rounded-full overflow-hidden bg-black/60 border-2 border-amber-500/40">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl font-pirata text-amber-500/20">{member.name.split(' ')[0][0]}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-3xl font-pirata text-[#f0e6d2] group-hover:text-amber-400 transition-colors uppercase">{member.name}</h3>
                <p className="text-amber-600 font-crimson text-xl italic mb-2">{member.role}</p>
                <div className="flex items-center gap-2 text-amber-100/60 font-mono text-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  {member.contact}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Faculty — shown last */}
        <div className="text-center mb-16 mt-24">
          <div className="flex flex-wrap justify-center gap-12 lg:gap-16 mt-12">
            {facultyConvenorsLast.map((member, index) => (
              <div key={index} className="group relative flex flex-col items-center">
                <div className="relative w-48 h-48 mb-6 transform transition-transform duration-500 group-hover:scale-105">
                  <div className="absolute inset-0 rounded-full border-2 border-amber-500/40 shadow-xl group-hover:shadow-amber-500/20 transition-shadow" />
                  <div className="absolute inset-1.5 rounded-full overflow-hidden bg-black/40 backdrop-blur-sm border border-amber-500/60">
                    <div className="absolute inset-0 bg-amber-900/10 flex items-center justify-center">
                      <span className="text-4xl font-pirata text-amber-500/20">{member.name.charAt(0)}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-pirata text-[#f0e6d2] uppercase">{member.name}</h3>
                <p className="text-amber-500/70 font-crimson text-sm italic">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Transition line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent" />
    </section>
  );
}
