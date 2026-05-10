"use client";

import React from "react";
import { Ship, Scroll, Telescope, Anchor, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

const events = [
  {
    date: "11",
    month: "MAY",
    year: "2026",
    title: "Day 1: Training & Sessions",
    description: "First day of teaching: diving into frontend, backend, AI, ML, GitHub, LinkedIn, and resume building.",
    icon: Ship,
    color: "#34d399",
    tag: "LEARN",
    align: "left",
  },
  {
    date: "12",
    month: "MAY",
    year: "2026",
    title: "Day 2: Advanced Concepts",
    description: "Second day of teaching: mastering frontend, backend, AI, ML, and preparing your developer profile.",
    icon: Telescope,
    color: "#60a5fa",
    tag: "PREPARE",
    align: "right",
  },
  {
    date: "13",
    month: "MAY",
    year: "2026",
    title: "Day 3: The 6-Hour Hackathon",
    description: "The ultimate 6-hour showdown! Put your skills to the test and build something amazing.",
    icon: Anchor,
    color: "#eab308",
    tag: "BUILD",
    align: "left",
  },
];

export function VoyageLogs() {
  return (
    <section className="relative w-full py-24 bg-black/80 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-900/5 rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/5 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-pirata font-black text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 to-blue-600 tracking-wider">
            Voyage Logs
          </h2>
          <p className="mt-4 text-lg md:text-xl text-cyan-200/60 font-pirata tracking-wide">
            Chart your course through the treacherous waters
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="w-full h-full bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent" />
            <div className="absolute inset-0 w-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-pulse" />
          </div>
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-px">
            <div className="w-full h-full bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent" />
          </div>

          <div className="flex flex-col gap-20 md:gap-28">
            {events.map((event, index) => {
              const Icon = event.icon;
              return (
                <div 
                  key={index}
                  className={cn(
                    "relative flex items-center flex-row",
                    event.align === "right" ? "md:flex-row-reverse" : "md:flex-row"
                  )}
                >
                  <div className="hidden md:block w-1/2" />
                  
                  {/* Timeline Dot/Icon */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div 
                      className="absolute w-24 h-24 rounded-full opacity-20" 
                      style={{ background: `radial-gradient(circle, ${event.color} 0%, transparent 70%)` }}
                    />
                    <div 
                      className="w-14 h-14 rounded-full bg-black/80 border-2 flex items-center justify-center z-10 shadow-lg"
                      style={{ borderColor: event.color }}
                    >
                      <Icon className="w-6 h-6" style={{ color: event.color }} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={cn(
                    "w-full md:w-1/2 pl-20 md:pl-0",
                    event.align === "left" ? "md:pr-14" : "md:pl-14"
                  )}>
                    <div className="relative group">
                      <div 
                        className="relative overflow-hidden bg-black/40 border rounded-2xl transition-all duration-500 hover:scale-[1.02]"
                        style={{ borderColor: `${event.color}33` }}
                      >
                        <div className={cn(
                          "flex items-center gap-4 p-6 md:p-8 pb-2 md:pb-3",
                          event.align === "left" ? "md:flex-row-reverse md:text-right" : "flex-row text-left"
                        )}>
                          <div className="relative shrink-0">
                            <span 
                              className="text-6xl md:text-8xl font-black font-pirata leading-none tracking-tight block"
                              style={{ 
                                color: event.color,
                                textShadow: `0 0 20px ${event.color}33, 0 0 40px ${event.color}1a`
                              }}
                            >
                              {event.date}
                            </span>
                          </div>
                          <div className={cn(
                            "flex flex-col",
                            event.align === "left" ? "md:items-end" : "items-start"
                          )}>
                            <span className="text-2xl md:text-3xl font-pirata font-bold tracking-[0.15em] leading-tight" style={{ color: event.color }}>
                              {event.month}
                            </span>
                            <span className="text-sm font-crimson text-white/30 tracking-widest">
                              {event.year}
                            </span>
                            {event.tag && (
                              <span className="text-[10px] font-crimson font-bold tracking-[0.3em] px-2 py-0.5 rounded border mt-1" 
                                style={{ 
                                  color: event.color, 
                                  borderColor: `${event.color}4d`,
                                  backgroundColor: `${event.color}14`
                                }}
                              >
                                {event.tag}
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <div className="mx-6 md:mx-8 h-px opacity-20" style={{ backgroundColor: event.color }} />
                        
                        <div className={cn(
                          "p-6 md:p-8 pt-4 md:pt-5",
                          event.align === "left" ? "md:text-right" : "text-left"
                        )}>
                          <h3 className="text-xl md:text-2xl font-pirata font-bold text-white mb-2">
                            {event.title}
                          </h3>
                          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            {event.description}
                          </p>
                        </div>

                        {/* Hover Gradient */}
                        <div 
                          className={cn(
                            "hidden md:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl",
                            event.align === "left" ? "bg-gradient-to-l" : "bg-gradient-to-r"
                          )}
                          style={{ 
                            backgroundImage: `radial-gradient(ellipse at ${event.align === 'left' ? '100% 30%' : '0% 30%'}, ${event.color}10, transparent 70%)` 
                          }}
                        />
                      </div>
                    </div>
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
