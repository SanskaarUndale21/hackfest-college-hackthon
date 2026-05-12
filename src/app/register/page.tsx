"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function RegisterPage() {
  return (
    <main className="relative w-full min-h-screen flex items-center justify-center p-4 pt-28 overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0 bg-[#082f49]">
        <Image
          src="/images/water-texture.png"
          alt=""
          fill
          className="object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col items-center text-center py-10"
          >
            {/* Floating anchor */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-8xl mb-6 drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]"
            >
              ⚓
            </motion.div>

            {/* Status badge */}
            <div className="inline-block px-4 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-pirata tracking-[0.2em] mb-6 uppercase">
              Port Closed
            </div>

            <h1 className="text-4xl md:text-5xl font-pirata text-[#f0e6d2] tracking-widest mb-4 uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
              Registrations Closed
            </h1>

            <p className="text-white/60 font-crimson text-lg mb-4 max-w-md leading-relaxed">
              The crew roster is full — all hands are aboard! Registrations for{" "}
              <span className="text-amber-400 font-semibold">HackFest 2026</span>{" "}
              have officially closed.
            </p>

            <p className="text-white/40 font-crimson text-sm mb-10 max-w-sm italic">
              Stay tuned to our updates for future voyages and upcoming events.
            </p>

            {/* Decorative divider */}
            <div className="flex items-center gap-4 w-full max-w-xs mb-10">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-500/40" />
              <span className="text-amber-500/60 text-lg">⚔</span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-500/40" />
            </div>

            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-[#78350f] font-pirata text-lg uppercase tracking-widest rounded-xl shadow-[0_8px_20px_-5px_rgba(245,158,11,0.4)] hover:shadow-[0_12px_25px_-5px_rgba(245,158,11,0.5)] transition-shadow"
              >
                ← Return to Shore
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
