"use client";

import React from "react";
import Link from "next/link";

export function PrizePool() {
  return (
    <section className="flex flex-col items-center justify-center relative px-4 py-24 bg-black/40">
      <div className="relative z-10 flex flex-col items-center text-center w-full">
        <h2 className="text-5xl md:text-7xl font-pirata font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600 drop-shadow-[0_0_15px_rgba(250,204,21,0.4)] tracking-wide">
          Prize Pool
        </h2>

        <div className="relative mb-12 flex flex-col items-center">
          {/* Decorative Circles */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-[600px] md:h-[600px] rounded-full border border-yellow-500/5 animate-[pulse_4s_infinite]" />
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-[400px] md:h-[400px] rounded-full border border-yellow-500/10 animate-[pulse_3s_infinite]" />
          
          <span className="text-sm md:text-xl font-crimson font-bold tracking-[0.5em] text-yellow-400/40 uppercase mb-4">
            REWARDS
          </span>
          
          <div className="relative text-center px-4">
            <span 
              className="text-5xl md:text-7xl lg:text-9xl font-black font-pirata leading-tight tracking-wider text-amber-500 uppercase"
              style={{ 
                textShadow: '0 0 30px rgba(234,179,8,0.3), 0 0 60px rgba(234,179,8,0.1)'
              }}
            >
              Prizes, Goodies <br className="hidden md:block" /> & Glory!
            </span>
          </div>

          <Link href="/events" className="mt-12">
            <button className="group relative px-10 py-4 bg-[#1a0f0a] border-2 border-amber-600 hover:border-amber-400 text-amber-500 rounded-full font-pirata font-bold text-2xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:shadow-[0_0_40px_rgba(234,179,8,0.4)] overflow-hidden focus:outline-none tracking-wide">
              <span className="relative z-10 uppercase tracking-widest">Claim Your Bounty</span>
              <div className="absolute inset-0 bg-amber-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
