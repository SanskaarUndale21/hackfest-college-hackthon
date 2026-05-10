"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, User, Anchor, Ship } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const facultyConvenors = [
    { name: "Dr. Shailaja Mali", role: "Convenor" },
    { name: "Prof. Neha Jadhav", role: "Convenor" },
  ];

  const studentCoordinators = [
    { name: "Ayman Dehalvi", phone: "9886936558" },
    { name: "Amol Kumbhar", phone: "6360591740" },
  ];

  return (
    <main className="relative w-full min-h-screen flex flex-col items-center pt-32 pb-20 px-4 overflow-hidden">
      {/* Background with texture */}
      <div className="absolute inset-0 z-0 bg-[#082f49]">
        <Image
          src="/images/water-texture.png"
          alt=""
          fill
          className="object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-pirata text-transparent bg-clip-text bg-gradient-to-b from-[#f0e6d2] to-[#8B6914] tracking-widest mb-4 uppercase">
            Summon the Crew
          </h1>
          <p className="text-[#94a3b8] font-crimson text-xl italic max-w-2xl mx-auto">
            Need directions to the hidden treasure or help with your vessel? Reach out to our quartermasters.
          </p>
          <div className="flex justify-center mt-6">
            <div className="w-48 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent rounded-full opacity-50" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Faculty Convenors Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-amber-500/10 rounded-full border border-amber-500/20">
                <Anchor className="text-amber-500" size={24} />
              </div>
              <h2 className="text-3xl font-pirata text-[#f0e6d2] tracking-wider uppercase">Faculty Convenors</h2>
            </div>

            <div className="grid gap-6">
              {facultyConvenors.map((convenor, index) => (
                <div
                  key={index}
                  className="group relative p-6 bg-[#111827]/60 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-amber-500/40 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-pirata text-[#f0e6d2] mb-1">{convenor.name}</h3>
                      <p className="text-amber-500/80 font-crimson text-sm tracking-widest uppercase">{convenor.role}</p>
                    </div>
                    <User className="text-white/20 group-hover:text-amber-500/40 transition-colors" size={32} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Student Coordinators Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-amber-500/10 rounded-full border border-amber-500/20">
                <Ship className="text-amber-500" size={24} />
              </div>
              <h2 className="text-3xl font-pirata text-[#f0e6d2] tracking-wider uppercase">Student Coordinators</h2>
            </div>

            <div className="grid gap-6">
              {studentCoordinators.map((student, index) => (
                <div
                  key={index}
                  className="group relative p-6 bg-[#111827]/60 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-amber-500/40 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-bl from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-pirata text-[#f0e6d2] mb-1">{student.name}</h3>
                      <div className="flex items-center gap-2 text-amber-100/60 font-sans group-hover:text-amber-100 transition-colors">
                        <Phone size={14} className="text-amber-500" />
                        <a href={`tel:${student.phone}`} className="hover:underline tracking-widest">{student.phone}</a>
                      </div>
                    </div>
                    <Phone className="text-white/20 group-hover:text-amber-500/40 transition-colors" size={32} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Simple Return Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 flex justify-center"
        >
          <Link href="/">
            <button className="px-8 py-3 bg-[#1a0f0a]/60 backdrop-blur-sm border border-amber-900/40 rounded-full font-pirata text-xl text-amber-100 hover:bg-amber-900/40 hover:scale-105 transition-all shadow-2xl">
              Return to Shore
            </button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
