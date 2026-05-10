"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

// Fish SVG
function FishSVG({ size = 36, color = "#38bdf8" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size * 0.5} viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M55 15C55 22 42 30 28 30C14 30 5 22 0 30L7 15L0 0C5 8 14 0 28 0C42 0 55 8 55 15Z" fill={color} />
      <circle cx="44" cy="12" r="3" fill="white" />
      <circle cx="44.5" cy="12" r="1.5" fill="#0f172a" />
      {/* Fin */}
      <path d="M28 0 Q22 -7 16 0" stroke={color} strokeWidth="2" fill="none" opacity="0.6" />
    </svg>
  );
}

const FISH_COLORS = ["#38bdf8", "#818cf8", "#f472b6", "#34d399", "#fb923c", "#a78bfa"];

interface FloatingFishProps {
  count?: number;
}

export function FloatingCreatures({ count = 5 }: FloatingFishProps) {
  const fishData = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      color: FISH_COLORS[i % FISH_COLORS.length],
      size: 38 + (i % 4) * 14,
      top: 30 + (i * 13) % 60,
      duration: 18 + (i * 5) % 20,
      delay: (i * 3.7) % 16,
      yWave: i % 2 === 0 ? 45 : -45,
      fromRight: i % 3 === 2,
    })), [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
      {fishData.map((f, i) => (
        <motion.div
          key={`fish-${i}`}
          className="absolute"
          style={{
            top: `${f.top}%`,
            left: f.fromRight ? "110%" : "-12%",
            scaleX: f.fromRight ? -1 : 1,
          }}
          animate={{
            x: f.fromRight ? ["-10vw", "-130vw"] : ["0vw", "130vw"],
            y: [0, f.yWave, 0, -f.yWave * 0.6, 0],
          }}
          transition={{
            duration: f.duration,
            repeat: Infinity,
            ease: "linear",
            delay: f.delay,
          }}
        >
          <motion.div
            animate={{ rotate: [0, 4, 0, -4, 0] }}
            transition={{ duration: 1.0, repeat: Infinity, ease: "easeInOut" }}
          >
            <FishSVG size={f.size} color={f.color} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
