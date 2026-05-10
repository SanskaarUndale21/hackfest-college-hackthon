"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import OceanScene from "./OceanScene";
import { useTheme } from "next-themes";

export function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <section className={`relative h-screen w-full overflow-hidden ${isDark ? "bg-[#00050a]" : "bg-[#87CEEB]"}`}>
      {/* Dynamic 3D Ocean Background */}
      <div className="absolute inset-0 z-0">
        <OceanScene />
        <div 
          className={`absolute inset-0 ${
            isDark 
              ? "bg-gradient-to-b from-black/60 via-transparent to-black/60" 
              : "bg-gradient-to-b from-[#87CEEB]/40 via-transparent to-transparent"
          }`} 
        />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="flex h-screen flex-col items-center justify-center relative p-4 pt-28 text-center w-full">
          <div className="z-10 flex flex-col items-center w-full max-w-5xl mx-auto">
            <div className="relative pointer-events-auto flex flex-col items-center w-full">
              {/* SGBIT Text + Presents */}
              <div className="flex flex-col items-center mb-4 md:mb-6">
                <div className="flex flex-row items-center justify-center gap-3 md:gap-5">
                  {/* Left Side: Logo + SGBIT */}
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 bg-white rounded-full overflow-hidden drop-shadow-xl shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                      <Image
                        src="/logos/sgbit-logo.png"
                        alt="SGBIT Logo"
                        fill
                        className="object-contain p-1.5"
                      />
                    </div>
                    <span className="text-white font-sans font-bold tracking-widest text-2xl md:text-4xl uppercase">
                      SGBIT
                    </span>
                  </div>

                  {/* Vertical Divider */}
                  <div className="h-16 md:h-20 w-[2px] bg-white/70" />

                  {/* Right Side: Department */}
                  <div className="flex flex-col items-start justify-center text-left">
                    <span className="text-white font-sans font-medium tracking-widest text-[10px] md:text-sm uppercase leading-tight">
                      Department Of Artificial
                    </span>
                    <span className="text-white font-sans font-medium tracking-widest text-[10px] md:text-sm uppercase leading-tight">
                      Intelligence & Data Science
                    </span>
                  </div>
                </div>

                {/* Presents */}
                <span className="text-[#f0e6d2] font-serif tracking-[0.5em] font-semibold uppercase text-[10px] md:text-xs mt-3 drop-shadow-md ml-2">
                  Presents
                </span>
              </div>

              {/* Main HF Logo */}
              <Image
                src="/logo11.webp"
                alt="HF Logo"
                width={600}
                height={200}
                className="w-64 md:w-80 xl:w-[28rem] h-auto drop-shadow-2xl mb-4 hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Theme Tagline — parchment scroll */}
            <div className="mt-2 md:mt-4 flex flex-col items-center pointer-events-auto">
              <div
                className="relative px-4 py-4 md:py-6 transform -rotate-2 animate-[float_4s_ease-in-out_infinite]"
                style={{ filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.5))" }}
              >
                {/* Parchment background */}
                <div
                  className="absolute inset-0 bg-[#34211e] rounded-sm"
                  style={{
                    clipPath: "polygon(2% 0%, 98% 5%, 100% 100%, 0% 95%)",
                    backgroundImage:
                      "repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 12px), repeating-linear-gradient(0deg, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 1px, transparent 1px, transparent 20px)",
                  }}
                />
                <div
                  className="absolute inset-0 bg-black/20"
                  style={{ clipPath: "polygon(2% 0%, 98% 5%, 100% 100%, 0% 95%)" }}
                />
                {/* Rivets */}
                <div className="absolute top-2 left-4 w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#1a0f0a] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.2)]" />
                <div className="absolute top-3 right-5 w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#1a0f0a] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.2)]" />
                {/* Text */}
                <div className="relative z-10">
                  <p
                    className="text-lg md:text-xl xl:text-2xl font-crimson font-bold italic text-[#d7ccc8] tracking-widest drop-shadow-md opacity-90"
                    style={{ transform: "rotate(1deg)" }}
                  >
                    Codequest: The Grand Voyage
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-0 z-20 pointer-events-auto">
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <p className="text-xs font-crimson tracking-[0.3em] uppercase text-white/70">
                Dive Deeper
              </p>
              <div className="text-xl xl:text-3xl font-bold text-white/70">Scroll Down</div>
              <svg
                className="w-6 h-6 text-white/70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                role="img"
                aria-label="Scroll down arrow"
              >
                <title>Scroll down arrow</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Lat/Long - Bottom Left (matches Loader) */}
        <div className="absolute bottom-10 left-10 hidden md:block text-[10px] font-crimson text-white/20 tracking-widest uppercase pointer-events-none">
          LAT: 18°18&apos;02.0&quot;N <br /> LON: 64°49&apos;32.2&quot;W
        </div>
      </div>
    </section>
  );
}
