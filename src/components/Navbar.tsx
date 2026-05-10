"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Timeline", href: "/timeline" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed left-1/2 -translate-x-1/2 z-[100] w-[95%] md:w-[95%] lg:w-[85%] xl:w-[75%] max-w-6xl pointer-events-auto transition-all duration-500 ease-out top-6">
      {/* Leather background */}
      <div className="absolute inset-0 w-full h-full shadow-2xl drop-shadow-xl rounded-lg overflow-hidden -z-10 bg-black/10">
        <Image
          src="/teal-leather.webp"
          alt="Leather Background"
          fill
          className="object-cover scale-[1.3]"
          priority
        />
        <div className="absolute inset-0 transition-all duration-700 ease-in-out pointer-events-none bg-black/10" />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        <div className="absolute inset-1.5 border-2 border-dashed border-amber-100/30 rounded-md pointer-events-none" />
        <div className="absolute inset-0.5 border border-white/10 rounded-lg pointer-events-none" />
      </div>

      <div className="relative flex items-center justify-between px-4 py-2 md:px-6 lg:px-8 xl:px-12 md:py-3 xl:py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="group relative shrink-0 transition-transform hover:scale-105 active:scale-95">
            <div className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
              <div className="w-16 h-16 md:w-16 md:h-16 xl:w-20 xl:h-5 rounded-full blur-3xl opacity-100 transition-colors duration-700 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500" />
            </div>
            <div className="relative w-12 h-12 md:w-12 md:h-12 xl:w-14 xl:h-14">
              <Image
                src="/logos/logowithglow.webp"
                alt="HackRush Logo"
                fill
                className="object-contain drop-shadow-[0_0_12px_rgba(255,191,0,0.7)]"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative font-pirata text-lg xl:text-xl font-bold tracking-wide transition-colors duration-500",
                  isActive
                    ? "text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                    : "text-amber-100/80 hover:text-white"
                )}
              >
                {link.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 w-full transition-transform duration-300 origin-left rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)]",
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </Link>
            );
          })}
        </div>

        {/* Right side: Theme Toggle + Register Button */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-white/10 transition-colors pointer-events-auto"
            aria-label="Toggle theme"
          >
            {mounted && (resolvedTheme === "dark" ? (
              <Sun className="w-5 h-5 text-amber-200" />
            ) : (
              <Moon className="w-5 h-5 text-blue-900" />
            ))}
          </button>

          <Link href="/register">
            <button
              type="button"
              className="group relative px-6 py-2 font-pirata text-lg xl:text-xl font-bold transition-all duration-500 cursor-pointer overflow-hidden hover:scale-105 active:scale-95"
              style={{
                clipPath: "polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)"
              }}
            >
              {/* Leather Background */}
              <div className="absolute inset-0 bg-[#3d2b1f]">
                <Image
                  src="/teal-leather.webp"
                  alt=""
                  fill
                  className="object-cover opacity-80 mix-blend-overlay"
                />
              </div>
              
              {/* Stitched Border - clipped to follow the shape */}
              <div 
                className="absolute inset-0 border-2 border-dashed border-amber-200/30 pointer-events-none"
                style={{
                  clipPath: "polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)"
                }}
              />
              
              <span className="relative z-10 text-amber-100 group-hover:text-white transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                Register Now
              </span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="md:hidden relative z-20 p-2 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5 justify-center items-center w-8">
            <span
              className={cn(
                "block h-0.5 w-full rounded-full transition-all duration-300 bg-amber-400",
                mobileOpen && "rotate-45 translate-y-2"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-full rounded-full transition-all duration-300 bg-amber-400",
                mobileOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-full rounded-full transition-all duration-300 bg-amber-400",
                mobileOpen && "-rotate-45 -translate-y-2"
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 rounded-lg overflow-hidden border border-amber-200/20 bg-black/90 backdrop-blur-md z-50">
          <div className="flex flex-col py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "px-6 py-3 font-pirata text-lg font-bold tracking-wide transition-colors",
                    isActive ? "text-amber-400" : "text-amber-100/80 hover:text-amber-300"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="px-6 pt-2 pb-4">
              <Link href="/register" onClick={() => setMobileOpen(false)}>
                <button
                  type="button"
                  className="w-full relative py-3 font-pirata text-lg font-bold transition-all duration-300 overflow-hidden"
                  style={{
                    clipPath: "polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)"
                  }}
                >
                  {/* Leather Background */}
                  <div className="absolute inset-0 bg-[#3d2b1f]">
                    <Image
                      src="/teal-leather.webp"
                      alt=""
                      fill
                      className="object-cover opacity-80 mix-blend-overlay"
                    />
                  </div>
                  
                  {/* Stitched Border */}
                  <div 
                    className="absolute inset-0 border-2 border-dashed border-amber-200/30 pointer-events-none"
                    style={{
                      clipPath: "polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)"
                    }}
                  />
                  
                  <span className="relative z-10 text-amber-100">Register Now</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
