"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

export function Sponsors() {
  return (
    <section className="flex flex-col items-center justify-start pt-12 relative px-4 bg-black">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50 pointer-events-none z-0" />

      <div className="w-full max-w-6xl relative z-10">
        <h2 className="text-5xl md:text-7xl font-pirata font-bold text-center mb-16 drop-shadow-[0_0_15px_rgba(0,200,255,0.8)] text-cyan-200 tracking-wide">
          Our Sponsor
        </h2>

        <div className="flex flex-col items-center mb-4">
          <Link target="_blank" href="https://nitte.edu.in/nmamit/">
            <div className="group relative w-72 md:w-96 aspect-video bg-white/70 border-2 border-cyan-400/50 rounded-2xl flex items-center justify-center hover:border-cyan-300 transition-all duration-500 overflow-hidden hover:shadow-[0_0_40px_rgba(0,200,255,0.4)]">
              <Image
                src="/logos/nitte.png"
                alt="NITTE"
                width={300}
                height={100}
                className="w-3/4 h-auto object-contain scale-90 group-hover:scale-95 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>
          <span className="mt-3 text-sm font-crimson font-semibold tracking-[0.3em] uppercase text-cyan-300/80">
            Executive Sponsor
          </span>
        </div>
      </div>
    </section>
  );
}
