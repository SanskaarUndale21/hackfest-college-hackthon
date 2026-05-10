"use client";

import React from "react";
import Link from "next/link";
import { Compass as CompassIcon } from "lucide-react";

export function Compass() {
  return (
    <Link
      href="/compass"
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50 group flex items-center"
      aria-label="Open Compass"
    >
      <div className="relative flex items-center pl-2 pr-4 py-3 bg-gradient-to-r from-amber-500/90 to-orange-600/90 hover:from-amber-500 hover:to-orange-500 text-white rounded-r-full shadow-[5px_0_20px_-5px_rgba(245,158,11,0.5)] backdrop-blur-md border border-l-0 border-amber-400/30 transition-all duration-300 group-hover:pl-3 group-hover:pr-5 group-hover:scale-105">
        <CompassIcon
          className="h-6 w-6 sm:h-7 sm:w-7 drop-shadow-md"
          strokeWidth={1.5}
          aria-hidden="true"
        />
        <span className="font-pirata text-lg sm:text-xl tracking-wider ml-2 opacity-0 max-w-0 overflow-hidden whitespace-nowrap group-hover:opacity-100 group-hover:max-w-[100px] transition-all duration-500 ease-in-out">
          Compass
        </span>
      </div>
    </Link>
  );
}
