"use client";

import React from "react";

export function PartnerLogos() {
  return (
    <div className="w-full mt-14 select-none">
      <p className="text-xs sm:text-[13px] font-bold text-zinc-950 tracking-tight mb-5">
        Built with feedback from amazing engineers at
      </p>

      {/* 2-Row or Wrapped Logos Grid matching exact reference */}
      <div className="flex flex-wrap items-center gap-x-8 sm:gap-x-10 gap-y-5 text-zinc-700">
        {/* 1. Uber */}
        <div className="flex items-center">
          <span className="text-2xl sm:text-[26px] font-bold tracking-tight text-zinc-800 font-sans">
            Uber
          </span>
        </div>

        {/* 2. Zillow */}
        <div className="flex items-center gap-1.5">
          {/* Zillow roof zig-zag mark */}
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-zinc-800">
            <path d="M12 3L2 12h3v8h14v-8h3L12 3zm4 11l-3 3-2-2-3 3-1.4-1.4 4.4-4.4 2 2 3-3L16 14z" />
          </svg>
          <span className="text-2xl sm:text-[26px] font-bold tracking-tight text-zinc-800 font-sans">
            Zillow
          </span>
        </div>

        {/* 3. Miro Geometric Mark */}
        <div className="flex items-center">
          <svg viewBox="0 0 32 32" className="w-6 h-6 fill-zinc-800">
            <path d="M 6.5 22.5 L 10.5 9 L 14 9 L 11.2 16.5 L 15.5 9 L 19 9 L 16.2 16.5 L 20.5 9 L 24 9 L 19.8 22.5 L 16.5 22.5 L 19.2 15 L 15 22.5 L 11.5 22.5 L 14.2 15 L 10 22.5 Z" />
          </svg>
        </div>

        {/* 4. Google */}
        <div className="flex items-center">
          <span className="text-2xl sm:text-[26px] font-medium tracking-tight text-zinc-800 font-sans">
            Google
          </span>
        </div>

        {/* Row Break / Line 2 on mobile & desktop */}
        <div className="w-full hidden sm:block h-0" />

        {/* 5. Drupal Water Droplet Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 border-2 border-zinc-800 rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-zinc-800">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
          </div>
          <span className="text-2xl sm:text-[26px] font-bold tracking-tight text-zinc-800 font-sans">
            Drupal
          </span>
        </div>

        {/* 6. Golang (=GO) */}
        <div className="flex items-center gap-1">
          <div className="flex flex-col gap-1 w-4">
            <div className="h-1 bg-zinc-800 rounded-full" />
            <div className="h-1 bg-zinc-800 rounded-full" />
          </div>
          <span className="text-2xl sm:text-[28px] font-black tracking-tighter text-zinc-800 font-sans italic">
            GO
          </span>
        </div>

        {/* 7. Sync / Git circular arrows mark */}
        <div className="flex items-center">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-zinc-800 stroke-2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
          </svg>
        </div>
      </div>
    </div>
  );
}
