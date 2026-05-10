"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Loader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 800);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#050505] overflow-hidden"
        >
          {/* Background radial gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent_50%)] opacity-80 pointer-events-none" />

          {/* SGBIT Logo Top Left */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute top-8 left-8 z-20 md:top-12 md:left-12"
          >
            <div className="relative w-16 h-16 md:w-20 md:h-20 opacity-90 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">
              <Image src="/logos/sgbit-logo.png" alt="SGBIT Logo" fill className="object-contain" />
            </div>
          </motion.div>

          {/* Logo Top Right */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute top-8 right-8 z-20 md:top-12 md:right-12"
          >
            <div className="relative w-16 h-16 md:w-20 md:h-20 opacity-90 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">
              <Image src="/logos/logowithglow.webp" alt="Logo" fill className="object-contain" />
            </div>
          </motion.div>

          {/* Center Content */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1 }}
              className="relative w-72 md:w-[35rem] h-auto flex flex-col items-center"
            >
              <Image
                src="/logo11.webp"
                alt="HackRush Logo"
                width={600}
                height={200}
                className="object-contain w-full h-auto drop-shadow-[0_0_30px_rgba(245,158,11,0.4)] mb-8"
              />
              
              {/* Progress Text & Bar */}
              <div className="w-full flex flex-col items-center gap-4 mt-4">
                <div className="text-amber-500 font-pirata text-2xl tracking-[0.3em] uppercase animate-pulse">
                  Preparing the Voyage
                </div>
                
                <div className="w-full max-w-md h-1 bg-white/10 rounded-full overflow-hidden relative">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-200 shadow-[0_0_10px_rgba(251,191,36,0.8)]"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "easeOut", duration: 0.2 }}
                  />
                </div>
                
                <div className="font-crimson text-white/50 text-sm tracking-widest mt-2 tabular-nums">
                  {progress}% Complete
                </div>
              </div>
            </motion.div>
          </div>

          {/* Ship wheel spinner bottom right */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 right-8 z-20 md:bottom-12 md:right-12"
          >
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                className="w-full h-full"
              >
                <Image src="/steering.png" alt="Loading..." fill className="object-contain opacity-60" />
              </motion.div>
            </div>
          </motion.div>

          {/* Lat/Long - Bottom Left */}
          <div className="absolute bottom-10 left-10 hidden md:block text-[10px] font-crimson text-white/20 tracking-[0.2em]">
            LAT: 18°18&apos;02.0&quot;N <br /> LON: 64°49&apos;32.2&quot;W
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
