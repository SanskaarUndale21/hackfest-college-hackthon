"use client";

import React from "react";
import { motion } from "framer-motion";

interface ScrollAnimationProps {
  children: React.ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number;
}

export function ScrollAnimation({
  children,
  direction = "up",
  delay = 0,
}: ScrollAnimationProps) {
  const initial =
    direction === "up"
      ? { opacity: 0, y: 60, filter: "blur(6px)" }
      : direction === "left"
      ? { opacity: 0, x: -60, filter: "blur(6px)" }
      : { opacity: 0, x: 60, filter: "blur(6px)" };

  const animate =
    direction === "up"
      ? { opacity: 1, y: 0, filter: "blur(0px)" }
      : { opacity: 1, x: 0, filter: "blur(0px)" };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.08 }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
