"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Home } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const events = [
  { day: "11", month: "MAY", year: "2026", title: "Day 1: Training & Sessions", description: "First day of teaching: diving into frontend, backend, AI, ML, GitHub, LinkedIn, and resume building.", accent: "#34d399", accentRgb: "52,211,153", tag: "LEARN" },
  { day: "12", month: "MAY", year: "2026", title: "Day 2: Advanced Concepts", description: "Second day of teaching: mastering frontend, backend, AI, ML, and preparing your developer profile.", accent: "#60a5fa", accentRgb: "96,165,250", tag: "PREPARE" },
  { day: "13", month: "MAY", year: "2026", title: "Day 3: The 6-Hour Hackathon", description: "The ultimate 6-hour showdown! Put your skills to the test and build something amazing.", accent: "#eab308", accentRgb: "234,179,8", tag: "BUILD" },
];

function Timeline2D() {
  return (
    <div className="relative w-full min-h-screen overflow-y-auto pt-28 pb-24 px-4 z-10">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-pirata text-transparent bg-clip-text bg-gradient-to-b from-[#f0e6d2] to-[#8B6914] tracking-wider drop-shadow-2xl">Voyage Logs</h1>
          <p className="mt-4 text-lg text-[#94a3b8] font-pirata tracking-wide">Chart your course through the treacherous waters</p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="w-full h-full bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent" />
          </div>
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent" />

          <div className="flex flex-col gap-20 md:gap-28">
            {events.map((event, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className={cn("relative flex items-center", isLeft ? "md:flex-row" : "md:flex-row-reverse")}>
                  <div className="hidden md:block w-1/2" />
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20">
                    <div className="absolute w-24 h-24 rounded-full opacity-20" style={{ background: `radial-gradient(circle, ${event.accent} 0%, transparent 70%)` }} />
                    <div className="w-14 h-14 rounded-full bg-black/80 border-2 flex items-center justify-center z-10 shadow-lg" style={{ borderColor: event.accent }}>
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: event.accent }} />
                    </div>
                  </div>
                  <div className={cn("w-full md:w-1/2 pl-20 md:pl-0", isLeft ? "md:pr-14" : "md:pl-14")}>
                    <motion.div initial={{ x: isLeft ? -20 : 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
                      <div className="relative overflow-hidden bg-card backdrop-blur-md border rounded-sm transition-all duration-500 hover:-translate-y-1 group" style={{ borderColor: `rgba(${event.accentRgb}, 0.2)`, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)" }}>
                        <div className={cn("flex items-center gap-4 p-6 md:p-8 pb-2 md:pb-3", isLeft ? "md:flex-row-reverse md:text-right" : "")}>
                          <span className="text-6xl md:text-7xl font-pirata leading-none shrink-0" style={{ color: event.accent, textShadow: `0 0 20px rgba(${event.accentRgb}, 0.4)` }}>{event.day}</span>
                          <div className={cn("flex flex-col", isLeft ? "md:items-end" : "")}>
                            <span className="text-xl md:text-2xl font-pirata font-bold tracking-[0.15em] text-[#f0e6d2]">{event.month}</span>
                            <span className="text-sm font-crimson text-white/40 tracking-widest">{event.year}</span>
                          </div>
                        </div>
                        <div className="mx-6 md:mx-8 h-px" style={{ backgroundColor: `rgba(${event.accentRgb}, 0.15)` }} />
                        <div className={cn("p-6 md:p-8 pt-4 md:pt-5", isLeft ? "md:text-right" : "")}>
                          <div className={cn("flex flex-wrap gap-2 mb-3", isLeft ? "md:justify-end" : "")}>
                            {event.tag && (
                              <span className="px-3 py-1 rounded-full text-[10px] font-pirata tracking-[0.2em] uppercase border" style={{ color: event.accent, borderColor: `rgba(${event.accentRgb}, 0.3)`, backgroundColor: `rgba(${event.accentRgb}, 0.05)` }}>
                                {event.tag}
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl md:text-2xl font-pirata font-bold text-[#f0e6d2] mb-2">{event.title}</h3>
                          <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-crimson">{event.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TimelinePage() {
  return (
    <div className="relative w-full min-h-screen bg-background overflow-x-hidden">
      {/* Background Texture Detail */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image
          src="/images/water-texture.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* 2D Timeline Layer */}
      <Timeline2D />
    </div>
  );
}
