"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";


export function Footer() {
  return (
    <footer className="relative z-20 w-full flex flex-col bg-black">
      {/* Coral decorative banner */}
      <div className="relative h-44 w-full overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 z-10 bg-transparent bg-repeat-x pointer-events-none transition-all duration-1000"
          style={{
            backgroundImage: "url('/images/corals_cropped.png')",
            backgroundSize: "auto 100%",
            backgroundPosition: "left top",
            filter: "brightness(0.6) saturate(0.8) hue-rotate(-5deg) contrast(1.0)",
          }}
        />
      </div>

      {/* Main footer body */}
      <div className="relative z-20 w-full flex-col overflow-hidden border-t transition-colors duration-1000 bg-gradient-to-b md:backdrop-blur-md border-sky-300/40 from-[#8e8071] via-[#6b5e50] to-[#42392f]">
        {/* Noise texture overlay */}
        <div
          className="hidden md:block absolute inset-0 pointer-events-none z-0 mix-blend-overlay transition-opacity duration-1000"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 flex h-full flex-col items-center justify-evenly space-y-12 p-4 py-8 lg:flex-row">
          {/* Top amber line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent to-transparent blur-sm transition-colors duration-1000 via-amber-300/60" />

          {/* Left Column: Logos */}
          <div className="flex flex-col items-center gap-6 z-10">
            <div className="flex flex-row items-center justify-center gap-6">
              <Link className="relative z-50 pointer-events-auto" href="/">
                <Image
                  src="/logos/logowithglow.webp"
                  alt="Logo - HackFest"
                  width={95}
                  height={50}
                  className="transition-all duration-1000 drop-shadow-[0_0_15px_rgba(251,191,36,0.6)]"
                />
              </Link>
              <Link className="relative z-50 pointer-events-auto" href="https://sgbit.edu.in/" target="_blank">
                <Image
                  src="/logos/sgbit-logo.png"
                  alt="Logo - SGBIT"
                  width={75}
                  height={50}
                  className="opacity-85 hover:opacity-100 transition-all duration-1000"
                />
              </Link>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-[#f0e6d2] font-pirata tracking-widest text-xl lg:text-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                SGBIT <span className="text-amber-500 font-sans mx-2">|</span> AI &amp; DS
              </span>
            </div>
          </div>

          {/* Right Column: College Info + Sponsor */}
          <div className="flex flex-col items-center gap-8 z-10">
            <div className="flex flex-col items-center justify-center gap-4">
              {/* Address */}
              <div className="flex flex-col gap-2 text-center">
                <a
                  href="https://sgbit.edu.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg font-bold transition-colors duration-300 text-amber-100 hover:text-white underline underline-offset-4"
                >
                  SG Balekundri Institute of Technology
                </a>
                <p className="text-sm font-medium transition-colors duration-1000 text-amber-50/80">
                  Belagavi, Karnataka
                </p>
              </div>
            </div>


          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-8 xl:mt-12 pt-6 border-t border-amber-200/20 text-center relative z-20">
          <p>2026 © HackRush | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
