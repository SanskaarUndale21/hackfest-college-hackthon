"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, User, Compass, Trophy, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FloatingCreatures } from "@/components/FloatingCreatures";

const events = [
  {
    id: "hackrush",
    title: "HackRush'26",
    subtitle: "The Ultimate 6-Hour Sprint",
    image: "/images/hackathon_poster.png",
    date: "May 13, 2026",
    time: "10:00 AM - 04:00 PM",
    venue: "Sambargimath Seminar Hall",
    eligibility: "Open to All Departments",
    teamSize: "2 - 4 Members",
    prizes: "Prizes, Goodies & Glory!",
    color: "#facc15",
    description: "A high-octane hackathon where innovation meets execution. CODE. COLLABORATE. CONQUER. Build, break, and innovate!",
    tag: "MAIN EVENT",
    details: [
      "Registration fee: Rs 200",
      "Min Team Size: 2 Members",
      "Max Team Size: 4 Members",
      "AI Tools: Explicitly allowed for use",
      "Swag Kits: Exclusive goodies for all participants"
    ]
  }
];

export default function EventsPage() {
  return (
    <main className="relative w-full min-h-screen pt-32 pb-24 px-4 overflow-hidden bg-[#0a9396]">
      {/* Underwater Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#94d2bd]/40 via-[#0a9396] to-[#005f73]">
        
        {/* Sun Rays */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            background: "repeating-linear-gradient(105deg, transparent, transparent 10%, rgba(255,255,255,0.8) 15%, transparent 20%)"
          }}
        />

        {/* Animated Bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={`bubble-${i}`}
              className="absolute bg-white/20 border border-white/40 rounded-full"
              style={{
                width: Math.random() * 20 + 5,
                height: Math.random() * 20 + 5,
                left: `${Math.random() * 100}%`,
                top: "100%",
              }}
              animate={{
                y: ["0vh", "-120vh"],
                x: [0, Math.random() * 50 - 25, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 10,
              }}
            />
          ))}
        </div>

        {/* Floating Fish */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          <FloatingCreatures count={6} />
        </div>

        {/* Coral / Seaweed bottom layer */}
        <div 
          className="absolute bottom-0 w-full h-[40vh] mix-blend-overlay opacity-60 z-10"
          style={{
            backgroundImage: "url('/images/corals_cropped.png')",
            backgroundSize: "contain",
            backgroundRepeat: "repeat-x",
            backgroundPosition: "bottom"
          }}
        />

        {/* Sunken Ship (Left) */}
        <motion.div 
          className="absolute bottom-10 left-5 md:left-20 text-[#003f4f] opacity-80 z-20"
          animate={{ rotate: [-5, -3, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ShipIcon className="w-48 h-48 md:w-72 md:h-72 drop-shadow-2xl" />
        </motion.div>

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
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#001219]/90 via-[#001219]/20 to-transparent z-30 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-pirata tracking-[0.2em] mb-4 uppercase">
            Quest Manifest
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-pirata text-transparent bg-clip-text bg-gradient-to-b from-[#f0e6d2] to-[#8B6914] tracking-wider drop-shadow-2xl uppercase">
            HackRush'26
          </h1>
          <p className="mt-4 text-[#94a3b8] font-crimson text-lg md:text-xl italic max-w-3xl mx-auto px-2">
            "Where ideas set sail and innovation leads the way!"
          </p>
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-6 mt-6">
             <span className="text-amber-500 font-pirata tracking-widest text-base md:text-lg uppercase">Build</span>
             <span className="text-white/20 font-pirata text-base md:text-lg">•</span>
             <span className="text-amber-500 font-pirata tracking-widest text-base md:text-lg uppercase">Break</span>
             <span className="text-white/20 font-pirata text-base md:text-lg">•</span>
             <span className="text-amber-500 font-pirata tracking-widest text-base md:text-lg uppercase">Innovate</span>
          </div>
        </motion.div>

        {/* Event Cards Grid */}
        <div className="flex justify-center">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col md:flex-row bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-500 shadow-2xl max-w-5xl w-full"
            >
              {/* Poster Image Area */}
              <div className="relative h-64 md:h-auto md:w-2/5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 to-transparent z-10" />
                
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                />
                
                {/* Tag Overlay */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-pirata tracking-widest text-white uppercase">
                    {event.tag}
                  </span>
                </div>
              </div>

              {/* Details Area */}
              <div className="relative p-8 md:p-12 flex flex-col flex-grow md:w-3/5">
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-4xl md:text-5xl font-pirata text-[#f0e6d2] tracking-wider uppercase drop-shadow-md">
                      {event.title}
                    </h3>
                  </div>
                  <p className="text-amber-500 font-pirata text-lg tracking-[0.3em] uppercase">
                    Code. Collaborate. Conquer.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                  <div className="flex items-center gap-3 text-white/60">
                    <Calendar size={18} className="text-amber-500" />
                    <span className="text-base font-crimson">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60">
                    <Clock size={18} className="text-amber-500" />
                    <span className="text-base font-crimson">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60">
                    <MapPin size={18} className="text-amber-500" />
                    <span className="text-base font-crimson">{event.venue}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60">
                    <Users size={18} className="text-amber-500" />
                    <span className="text-base font-crimson">{event.teamSize}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60 sm:col-span-2">
                    <Trophy size={18} className="text-amber-500" />
                    <span className="text-base font-pirata tracking-widest text-amber-200 uppercase">{event.prizes}</span>
                  </div>
                </div>

                <div className="mb-8 p-6 bg-amber-500/5 rounded-xl border border-amber-500/10">
                   <h4 className="text-amber-500 font-pirata tracking-widest text-sm uppercase mb-4">Mission Briefing</h4>
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {event.details?.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-white/40 text-sm font-crimson italic">
                           <span className="text-amber-500">•</span>
                           {detail}
                        </li>
                      ))}
                   </ul>
                   <div className="pt-4 border-t border-amber-500/10">
                      <p className="text-amber-500 font-pirata text-sm tracking-widest uppercase leading-relaxed text-center">
                         <strong>NOTE: ONLY 1ST YEARs FROM SGBIT COLLEGE CAN PARTICIPATE IN THIS EVENT</strong>
                      </p>
                   </div>
                </div>

                {/* Button */}
                <Link href="/register" className="mt-auto">
                  <button className="w-full relative group flex items-center justify-center gap-4 py-5 rounded-xl overflow-hidden transition-all duration-300 active:scale-95 shadow-[0_20px_40px_-15px_rgba(245,158,11,0.2)]">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8B6914] to-[#f0e6d2] opacity-90 group-hover:opacity-100 transition-opacity" />
                    <Compass className="relative z-10 w-6 h-6 text-black animate-spin-slow" />
                    <span className="relative z-10 text-black font-pirata text-2xl tracking-[0.2em] uppercase">
                      Claim Your Spot
                    </span>
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

function ShipIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.26 1.44 4.19 3.42 4.93" />
      <path d="M12 4v6" />
      <path d="M12 4 8 7" />
      <path d="M12 4l4 3" />
    </svg>
  );
}
