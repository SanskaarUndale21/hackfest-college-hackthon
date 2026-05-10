"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const events = [
  { day: "11", month: "MAY", year: "2026", title: "Registration Begins", description: "Hoist the colors and join the crew! The docks are open for the bold.", accent: "#facc15", accentRgb: "250,204,21", tag: "START" },
  { day: "11", month: "MAY", year: "2026", title: "Session for CSBS & CSE", description: "First wave of training and orientation for the Masters of Code.", accent: "#34d399", accentRgb: "52,211,153", tag: "CSBS, CSE" },
  { day: "12", month: "MAY", year: "2026", title: "Session for AIDS, EEE & ECE", description: "Second wave of exploration for the Navigators of Systems.", accent: "#60a5fa", accentRgb: "96,165,250", tag: "AIDS, EEE, ECE" },
  { day: "12", month: "MAY", year: "2026", title: "Registration Ends", description: "The docks are sealed. No more ships shall set sail for this voyage.", accent: "#f87171", accentRgb: "248,113,113", tag: "CLOSE" },
  { day: "13", month: "MAY", year: "2026", title: "The Grand Hackathon", description: "The ultimate 7-hour showdown! (10:00 AM - 05:00 PM) - Legends are born here.", accent: "#eab308", accentRgb: "234,179,8", tag: "10:00 - 17:00" },
];

export function TimelineSection() {
  return (
    <section id="timeline" className="relative w-full py-24 px-4 overflow-hidden bg-black/40">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: -30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-pirata text-transparent bg-clip-text bg-gradient-to-b from-[#f0e6d2] to-[#8B6914] tracking-wider drop-shadow-2xl uppercase">
            Voyage Logs
          </h2>
          <p className="mt-4 text-lg text-[#94a3b8] font-crimson italic tracking-wide uppercase">
            Chart your course through the treacherous waters
          </p>
          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-amber-600 rounded-full opacity-50" />
          </div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="w-full h-full bg-gradient-to-b from-transparent via-amber-500/30 to-transparent" />
          </div>
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-500/30 to-transparent" />

          <div className="flex flex-col gap-16 md:gap-24">
            {events.map((event, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className={cn("relative flex items-center", isLeft ? "md:flex-row" : "md:flex-row-reverse")}>
                  <div className="hidden md:block w-1/2" />
                  
                  {/* Indicator Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20">
                    <div className="absolute w-16 h-16 rounded-full opacity-20 animate-pulse" style={{ background: `radial-gradient(circle, ${event.accent} 0%, transparent 70%)` }} />
                    <div className="w-10 h-10 rounded-full bg-[#0a0a0a] border-2 flex items-center justify-center z-10 shadow-lg group" style={{ borderColor: event.accent }}>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: event.accent }} />
                    </div>
                  </div>

                  <div className={cn("w-full md:w-1/2 pl-16 md:pl-0", isLeft ? "md:pr-12" : "md:pl-12")}>
                    <motion.div 
                      initial={{ x: isLeft ? -20 : 20, opacity: 0 }} 
                      whileInView={{ x: 0, opacity: 1 }} 
                      transition={{ duration: 0.5, delay: 0.1 }} 
                      viewport={{ once: true }}
                    >
                      <div className="relative overflow-hidden bg-[#111827]/40 backdrop-blur-md border border-white/5 rounded-xl transition-all duration-500 hover:border-amber-500/30 group">
                        <div className={cn("flex items-center gap-4 p-6 pb-2", isLeft ? "md:flex-row-reverse md:text-right" : "")}>
                          <span className="text-5xl md:text-6xl font-pirata leading-none shrink-0" style={{ color: event.accent, textShadow: `0 0 20px rgba(${event.accentRgb}, 0.3)` }}>
                            {event.day}
                          </span>
                          <div className={cn("flex flex-col", isLeft ? "md:items-end" : "")}>
                            <span className="text-xl font-pirata font-bold tracking-widest text-[#f0e6d2]">{event.month}</span>
                            <span className="text-xs font-crimson text-white/40 tracking-widest">{event.year}</span>
                          </div>
                        </div>
                        
                        <div className="mx-6 h-px bg-white/5" />
                        
                        <div className={cn("p-6 pt-4", isLeft ? "md:text-right" : "")}>
                          <div className={cn("flex flex-wrap gap-2 mb-3", isLeft ? "md:justify-end" : "")}>
                            {event.tag && (
                              <span className="px-2 py-0.5 rounded-full text-[9px] font-pirata tracking-widest uppercase border" style={{ color: event.accent, borderColor: `rgba(${event.accentRgb}, 0.3)`, backgroundColor: `rgba(${event.accentRgb}, 0.05)` }}>
                                {event.tag}
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl font-pirata font-bold text-[#f0e6d2] mb-2 uppercase tracking-wider">{event.title}</h3>
                          <p className="text-white/60 text-sm leading-relaxed font-crimson italic">{event.description}</p>
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
    </section>
  );
}
