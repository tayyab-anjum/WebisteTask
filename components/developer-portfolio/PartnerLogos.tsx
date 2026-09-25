"use client";

import React from "react";

export function PartnerLogos() {
  return (
    <div className="w-full mt-6 sm:mt-8 select-none">
      <p className="text-xs sm:text-[13px] font-medium text-zinc-400 tracking-tight mb-3 sm:mb-4">
        Built with feedback from amazing engineers at
      </p>

      {/* 2-Row or Wrapped Logos Grid matching exact reference */}
      <div className="flex flex-wrap items-center gap-x-8 sm:gap-x-10 gap-y-4 text-zinc-400">
        {/* 1. Velo (Lookalike to Uber) */}
        <div className="flex items-center opacity-85 hover:opacity-100 transition-opacity">
          <span className="text-2xl sm:text-[26px] font-bold tracking-tight text-zinc-400 font-sans">
            Velo
          </span>
        </div>

        {/* 2. Haven (Lookalike to Zillow) */}
        <div className="flex items-center gap-1.5 opacity-85 hover:opacity-100 transition-opacity">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-zinc-400">
            <path d="M12 3L2 12h3v8h14v-8h3L12 3zm4 11l-3 3-2-2-3 3-1.4-1.4 4.4-4.4 2 2 3-3L16 14z" />
          </svg>
          <span className="text-2xl sm:text-[26px] font-bold tracking-tight text-zinc-400 font-sans">
            Haven
          </span>
        </div>

        {/* 3. Prism (Lookalike to Miro) */}
        <div className="flex items-center opacity-85 hover:opacity-100 transition-opacity">
          <svg viewBox="0 0 32 32" className="w-6 h-6 fill-zinc-400">
            <path d="M 6.5 22.5 L 10.5 9 L 14 9 L 11.2 16.5 L 15.5 9 L 19 9 L 16.2 16.5 L 20.5 9 L 24 9 L 19.8 22.5 L 16.5 22.5 L 19.2 15 L 15 22.5 L 11.5 22.5 L 14.2 15 L 10 22.5 Z" />
          </svg>
          <span className="text-xl font-bold tracking-tight text-zinc-400 font-sans ml-1">
            Prism
          </span>
        </div>

        {/* 4. Orbit (Lookalike to Google) */}
        <div className="flex items-center opacity-85 hover:opacity-100 transition-opacity">
          <span className="text-2xl sm:text-[26px] font-medium tracking-tight text-zinc-400 font-sans">
            Orbit
          </span>
        </div>

        {/* Row Break / Line 2 on mobile & desktop */}
        <div className="w-full hidden sm:block h-0" />

        {/* 5. Drop (Lookalike to Drupal) */}
        <div className="flex items-center gap-2 opacity-85 hover:opacity-100 transition-opacity">
          <div className="w-6 h-6 border-2 border-zinc-400 rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-zinc-400">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
          </div>
          <span className="text-2xl sm:text-[26px] font-bold tracking-tight text-zinc-400 font-sans">
            Drop
          </span>
        </div>

        {/* 6. DEV (Lookalike to GO) */}
        <div className="flex items-center gap-1 opacity-85 hover:opacity-100 transition-opacity">
          <div className="flex flex-col gap-1 w-4">
            <div className="h-1 bg-zinc-400 rounded-full" />
            <div className="h-1 bg-zinc-400 rounded-full" />
          </div>
          <span className="text-2xl sm:text-[28px] font-black tracking-tighter text-zinc-400 font-sans italic">
            DEV
          </span>
        </div>

        {/* 7. Sync */}
        <div className="flex items-center opacity-85 hover:opacity-100 transition-opacity">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-zinc-400 stroke-2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
          </svg>
        </div>
      </div>
    </div>
  );
}
