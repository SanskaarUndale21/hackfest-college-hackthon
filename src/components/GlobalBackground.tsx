"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useTheme } from "next-themes";
import { motion, useScroll, useTransform } from "framer-motion";

export function GlobalBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setMounted(true);
  }, []);

  const yOffset = useTransform(scrollYProgress, [0, 1], [0, -400]);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
      {/* Base Depth Color */}
      <div 
        className="absolute inset-0 transition-colors duration-1000" 
        style={{ backgroundColor: isDark ? "#021124" : "#0f5a8a" }} 
      />

      {/* Sun Rays */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-overlay"
        style={{
          background: "repeating-linear-gradient(115deg, transparent, transparent 8%, rgba(255,255,255,0.4) 12%, transparent 18%)",
          transform: "scale(1.5) translate(-10%, -10%)"
        }}
      />

      {/* Floating Elements Container mapped to scroll */}
      <motion.div style={{ y: yOffset }} className="absolute inset-x-0 top-0 h-[200vh] w-full">
        
        {/* Giant Manta Ray */}
        <motion.div
          className={`absolute ${isDark ? "text-[#062442]" : "text-[#15466b]"} opacity-80`}
          style={{ top: '30vh', left: '10vw' }}
          animate={{
            y: [0, -30, 0],
            x: [0, 40, 0],
            rotate: [-15, -10, -15],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Custom SVG Manta Ray */}
          <svg width="600" height="400" viewBox="0 0 200 150" fill="currentColor" className="drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] mix-blend-multiply">
            <path d="M100 20 C130 30, 180 50, 190 70 C195 80, 170 85, 140 80 C110 75, 105 120, 100 140 C95 120, 90 75, 60 80 C30 85, 5 80, 10 70 C20 50, 70 30, 100 20 Z" />
            <path d="M85 10 C90 15, 95 20, 100 20 C105 20, 110 15, 115 10 C110 12, 105 15, 100 15 C95 15, 90 12, 85 10 Z" fill="rgba(255,255,255,0.1)" />
            {/* Tail */}
            <path d="M100 140 C102 160, 110 180, 115 190 C110 180, 100 160, 100 140" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </motion.div>

        {/* Schools of Fish */}
        {Array.from({ length: 5 }).map((_, schoolIdx) => (
          <motion.div
            key={`school-${schoolIdx}`}
            className="absolute"
            style={{
              top: `${Math.random() * 80 + 40}vh`,
              left: `${Math.random() * 80}vw`,
            }}
            animate={{
              x: ["-20vw", "120vw"],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 30,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 20,
            }}
          >
            {/* Individual fish in a school */}
            {Array.from({ length: 8 }).map((_, fishIdx) => (
              <motion.div
                key={`fish-${schoolIdx}-${fishIdx}`}
                className={`absolute ${isDark ? "text-cyan-900/40" : "text-blue-900/30"}`}
                style={{
                  top: `${Math.random() * 40 - 20}px`,
                  left: `${Math.random() * 60 - 30}px`,
                  scale: Math.random() * 0.4 + 0.6,
                }}
                animate={{
                  y: [0, Math.random() * 10 - 5, 0],
                }}
                transition={{
                  duration: Math.random() * 2 + 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg width="30" height="15" viewBox="0 0 40 20" fill="currentColor">
                  <path d="M40 10C40 15 30 20 20 20C10 20 5 15 0 20L5 10L0 0C5 5 10 0 20 0C30 0 40 5 40 10Z" />
                </svg>
              </motion.div>
            ))}
          </motion.div>
        ))}

        {/* Small floating particles/bubbles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-cyan-200/20"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 200}vh`,
            }}
            animate={{
              y: ["0vh", "-50vh"],
              x: [0, Math.random() * 20 - 10, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>

      {/* Deep Ocean Fog / Gradient Overlay */}
      <div className={isDark 
        ? "absolute inset-0 bg-gradient-to-b from-[#021124]/40 via-transparent to-[#010812]/90" 
        : "absolute inset-0 bg-gradient-to-b from-[#0f5a8a]/40 via-transparent to-[#073654]/90"
      } />

    </div>
  );
}
