"use client";

import React from "react";
import Image from "next/image";
import { Download } from "lucide-react";

export function CaptainsLog() {
  return (
    <section className="w-full py-12 mt-6 flex flex-col items-center justify-center relative overflow-visible">
      {/* Background glow */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[300px] bg-amber-900/10 blur-3xl rounded-full pointer-events-none mix-blend-screen" />

      <div className="relative z-10 max-w-5xl px-8 w-full">
        <div className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-black/40 md:bg-transparent md:backdrop-blur-sm shadow-[0_0_30px_rgba(245,158,11,0.1)] group">
          <div className="relative z-10 flex flex-col items-center text-center p-10 md:p-16 gap-8">
            
            {/* Content */}
            <div className="flex flex-col items-center gap-6">
              <div className="text-center">
                <h3 className="text-5xl md:text-7xl font-pirata text-transparent bg-clip-text bg-gradient-to-b from-amber-100 to-[#8B6914] drop-shadow-md mb-4 uppercase tracking-widest">
                  Captain&apos;s Log
                </h3>
                <p className="text-amber-200/60 font-crimson text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto italic">
                  "The complete map to the treasure. Uncover the schedule, rules, and secrets of the voyage."
                </p>
              </div>

              {/* Action Button */}
              <div className="relative shrink-0 mt-4">
                <div className="absolute inset-0 bg-amber-500/20 blur-2xl rounded-full scale-110 animate-pulse" />
                <a
                  href="/Hackfest_2K26_v2 - converted.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center gap-6 px-12 py-6 bg-gradient-to-b from-[#8B6914] to-amber-900 text-black rounded-xl font-pirata text-3xl tracking-widest border-t border-amber-400 shadow-[0_15px_30px_rgba(0,0,0,0.6),0_0_25px_rgba(245,158,11,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(251,191,36,0.6)] active:scale-95 overflow-hidden uppercase"
                >
                  <span className="relative z-10 font-bold">View HackFest PDF</span>
                  <Download className="w-8 h-8 relative z-10 animate-bounce" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  <div className="absolute inset-0 bg-amber-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
