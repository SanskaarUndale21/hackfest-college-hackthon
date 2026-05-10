"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

function ParrotSVG({ size = 48, color = "#22c55e" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="32" cy="38" rx="14" ry="18" fill={color} />
      <ellipse cx="20" cy="36" rx="10" ry="6" fill="#16a34a" transform="rotate(-30 20 36)" />
      <ellipse cx="44" cy="36" rx="10" ry="6" fill="#15803d" transform="rotate(30 44 36)" />
      <circle cx="32" cy="20" r="12" fill={color} />
      <circle cx="37" cy="18" r="3" fill="white" />
      <circle cx="38" cy="18" r="1.5" fill="#1e293b" />
      <path d="M40 22 L48 25 L40 27 Z" fill="#f59e0b" />
      <path d="M32 54 Q26 62 20 68 Q32 60 44 68 Q38 62 32 54Z" fill="#15803d" />
      <ellipse cx="26" cy="22" rx="5" ry="4" fill="#ef4444" opacity="0.7" />
    </svg>
  );
}

const PARROT_COLORS = ["#22c55e", "#a3e635", "#4ade80", "#f97316", "#facc15", "#fb923c"];

export function GlobalParrots() {
  const parrotData = useMemo(() =>
    Array.from({ length: 5 }, (_, i) => ({
      color: PARROT_COLORS[i % PARROT_COLORS.length],
      size: 34 + (i % 3) * 10,
      // parrots fly in the top 30% of viewport (sky area)
      topVh: 4 + (i * 6) % 26,
      duration: 16 + (i * 4) % 14,
      delay: (i * 5) % 18,
      yWave: i % 2 === 0 ? 25 : -25,
      fromRight: i % 3 === 2,
    })), []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[60]">
      {parrotData.map((p, i) => (
        <motion.div
          key={`global-parrot-${i}`}
          className="absolute"
          style={{
            top: `${p.topVh}vh`,
            left: p.fromRight ? "110%" : "-15%",
            scaleX: p.fromRight ? -1 : 1,
          }}
          animate={{
            x: p.fromRight ? ["-10vw", "-130vw"] : ["0vw", "130vw"],
            y: [0, p.yWave, 0, -p.yWave, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
            y: {
              duration: p.duration / 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          {/* Wing flap */}
          <motion.div
            animate={{ rotate: [0, 10, 0, -10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ParrotSVG size={p.size} color={p.color} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
