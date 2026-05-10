"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is the registration charge?",
    answer: "The registration fee is Rs 200 per team.",
  },
  {
    question: "Who can participate in HackRush'26?",
    answer: "This event is exclusively for 1st Year students from SGBIT College. Only the boldest freshmen may set sail!",
  },
  {
    question: "What is the required team size?",
    answer: "A crew must consist of a minimum of 2 members and a maximum of 4 members.",
  },
  {
    question: "Are AI tools allowed to be used?",
    answer: "Yes, AI tools are explicitly allowed and encouraged for innovation and rapid development during the hackathon.",
  },
  {
    question: "Can students from different colleges form a team?",
    answer: "No, since this event is exclusive to SGBIT, all team members must be first-year students from SGBIT College.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full py-24 px-4 bg-black/40 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-900/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-pirata font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-[#8B6914] tracking-wider uppercase">
            FAQ
          </h2>
          <p className="mt-4 text-lg md:text-xl text-amber-200/60 font-pirata tracking-wide uppercase">
            Answers from the captain&apos;s quarters
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="overflow-hidden bg-neutral-900/40 border border-amber-500/10 rounded-2xl transition-all duration-500 hover:border-amber-500/30 group"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-5 md:px-8 md:py-6 text-left focus:outline-none group"
              >
                <span className="text-lg md:text-xl font-pirata font-bold text-white tracking-wide pr-4 uppercase">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 text-amber-500 shrink-0 transition-transform duration-300",
                    openIndex === index && "rotate-180"
                  )} 
                />
              </button>
              
              <div 
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="mx-6 md:mx-8 h-px bg-amber-500/10" />
                  <div className="px-6 pb-5 md:px-8 md:pb-6 pt-4">
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed font-crimson italic">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 overflow-hidden bg-neutral-900/40 border border-amber-500/10 rounded-2xl p-8 flex flex-col items-center transition-all duration-500 hover:border-amber-500/30">
          <p className="text-center text-lg md:text-xl font-pirata font-bold text-white tracking-wide uppercase">
            Have additional questions or facing any issues?
          </p>
          <button className="group relative mt-6 px-10 py-4 bg-[#8B6914] hover:bg-amber-600 text-black rounded-full font-pirata font-bold text-2xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(139,105,20,0.3)] overflow-hidden focus:outline-none tracking-wide uppercase">
            <span className="relative z-10">Signal the Crew</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
