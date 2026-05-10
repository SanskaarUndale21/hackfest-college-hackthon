"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { FloatingCreatures } from "./FloatingCreatures";

const tracks = [
  {
    id: "ps1",
    name: "PS 1",
    label: "Digital Paint Brush App",
    description: "Create a simple drawing app where users can draw using different colors and brush sizes.",
  },
  {
    id: "ps2",
    name: "PS 2",
    label: "Basic Calculator",
    description: "Build a calculator that performs addition, subtraction, multiplication, and division.",
  },
  {
    id: "ps3",
    name: "PS 3",
    label: "Simple Notes App",
    description: "Develop an app to write, save, edit, and delete notes.",
  },
  {
    id: "ps4",
    name: "PS 4",
    label: "Weather Checker",
    description: "Create a website/app that shows current weather using a weather API.",
  },
  {
    id: "ps5",
    name: "PS 5",
    label: "Quiz Game",
    description: "Build a quiz app with score tracking and multiple-choice questions.",
  },
  {
    id: "ps6",
    name: "PS 6",
    label: "Typing Speed Tester",
    description: "Develop a tool that checks typing speed and accuracy.",
  },
];

export function Tracks() {
  const [activeTrack, setActiveTrack] = useState(tracks[0]);

  return (
    <section className="relative w-full pt-8 pb-16 px-4 bg-black/40 overflow-hidden">
      {/* Underwater Shipwreck Theme Background */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        {/* Fish swimming underwater */}
        <FloatingCreatures count={4} />
        {/* Coral / Seaweed bottom layer */}
        <div 
          className="absolute bottom-0 w-full h-[30vh] mix-blend-overlay opacity-60 z-10"
          style={{
            backgroundImage: "url('/images/corals_cropped.png')",
            backgroundSize: "contain",
            backgroundRepeat: "repeat-x",
            backgroundPosition: "bottom"
          }}
        />

        {/* Sunken Ship (Left) */}
        <div className="absolute bottom-10 left-5 md:left-20 text-[#003f4f] opacity-80 z-20 transform -rotate-6">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-48 h-48 md:w-72 md:h-72 drop-shadow-2xl">
            <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
            <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.26 1.44 4.19 3.42 4.93" />
            <path d="M12 4v6" />
            <path d="M12 4 8 7" />
            <path d="M12 4l4 3" />
          </svg>
        </div>

        {/* Cannon (Right) */}
        <div className="absolute bottom-5 right-10 md:right-32 text-[#002f3a] opacity-80 z-20">
          <svg width="120" height="80" viewBox="0 0 120 80" fill="currentColor" className="drop-shadow-2xl scale-x-[-1]">
            <rect x="20" y="30" width="80" height="20" rx="10" transform="rotate(-15 20 30)" />
            <circle cx="95" cy="15" r="12" />
            <rect x="40" y="50" width="60" height="30" rx="5" fill="#001a20" />
            <circle cx="50" cy="70" r="10" fill="#000f14" />
            <circle cx="90" cy="70" r="10" fill="#000f14" />
          </svg>
        </div>

        {/* Anchor (Center) */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[#002f3a] opacity-70 z-20">
          <svg width="80" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-xl rotate-12">
            <circle cx="12" cy="5" r="3" />
            <line x1="12" y1="22" x2="12" y2="8" />
            <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
            <path d="M12 22 9 19" />
            <path d="M12 22l3-3" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl z-10">
        <h2 className="text-6xl md:text-7xl font-pirata font-black text-center mb-12 text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-[#8B6914] drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] tracking-wider uppercase">
          Problem Statements
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center min-h-[500px] w-full justify-between">
          {/* Left — Track list buttons */}
          <div className="w-full lg:w-[30%] flex flex-col gap-3">
            {tracks.map((track) => {
              const isActive = activeTrack.id === track.id;
              return (
                <button
                  key={track.id}
                  onClick={() => setActiveTrack(track)}
                  className={cn(
                    "relative group text-left px-6 py-4 rounded-xl w-full transition-all duration-300 border",
                    isActive 
                      ? "bg-amber-500/10 border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.1)]" 
                      : "bg-black/20 border-white/5 hover:border-amber-500/20"
                  )}
                >
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-10 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                  )}
                  <span
                    className={cn(
                      "relative z-10 text-2xl md:text-3xl font-pirata tracking-wider pl-4 transition-colors",
                      isActive ? "text-amber-400" : "text-white/40 group-hover:text-white/70"
                    )}
                  >
                    {track.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right — Combined display panel */}
          <div className="flex-1 w-full bg-black/40 backdrop-blur-xl rounded-2xl p-8 lg:p-12 border border-amber-900/30 shadow-2xl min-h-[400px] flex flex-col md:flex-row items-center gap-10">
            {/* Visual Icon */}
            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
              <div className="w-full h-full relative rounded-full border-2 border-amber-500/20 flex items-center justify-center">
                <div className="absolute inset-4 rounded-full border border-amber-500/10 animate-[spin_10s_linear_infinite]" />
                <span className="text-5xl md:text-7xl font-pirata text-amber-500/30 select-none drop-shadow-2xl text-center leading-tight">
                  {activeTrack.name}
                </span>
              </div>
            </div>

            {/* Description Text */}
            <div className="flex-1 flex flex-col justify-center">
              <span className="text-sm font-mono text-amber-500/60 uppercase tracking-widest mb-1">{activeTrack.name}</span>
              <h4 className="text-3xl font-pirata text-amber-400 mb-4 uppercase tracking-widest">
                {(activeTrack as typeof tracks[0]).label}
              </h4>
              <p className="text-xl md:text-2xl font-crimson text-amber-100/70 italic leading-relaxed">
                &ldquo;{activeTrack.description}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
