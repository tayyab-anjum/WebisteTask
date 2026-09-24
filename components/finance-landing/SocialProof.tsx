"use client";

import React from "react";
import { Star } from "lucide-react";

export function SocialProof() {
  return (
    <section className="w-full bg-[#FAFAFA] border-y border-zinc-100 py-12 sm:py-16 select-none">
      <div className="max-w-[1460px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
        {/* Subtitle */}
        <p className="text-sm sm:text-base font-semibold text-[#2563EB] tracking-normal mb-10">
          Trusted by users across the platform
        </p>

        {/* 3 Metrics Rating Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-16 lg:gap-28 items-center justify-center">
          {/* Item 1: Chrome Store */}
          <div className="flex items-center justify-center gap-4">
            <span className="text-4xl sm:text-5xl font-black text-zinc-950 tracking-tight">
              4.8
            </span>
            <div className="text-left">
              <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-900 mb-1">
                {/* Chrome Color Icon */}
                <div className="w-4 h-4 rounded-full border-2 border-red-500 relative flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                </div>
                <span>Chrome store</span>
              </div>
              {/* 5 Golden Yellow Stars */}
              <div className="flex items-center gap-0.5 text-[#EAB308]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
          </div>

          {/* Item 2: Producthunt */}
          <div className="flex items-center justify-center gap-4">
            <span className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
              4.9
            </span>
            <div className="text-left">
              <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-900 mb-1">
                {/* Producthunt Orange Icon */}
                <div className="w-4 h-4 rounded-full bg-[#DA552F] text-white flex items-center justify-center font-bold text-[9px]">
                  P
                </div>
                <span>Producthunt</span>
              </div>
              {/* 5 Orange-Red Stars */}
              <div className="flex items-center gap-0.5 text-[#DA552F]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
          </div>

          {/* Item 3: Trustpilot */}
          <div className="flex items-center justify-center gap-4">
            <span className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
              4.8
            </span>
            <div className="text-left">
              <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-900 mb-1">
                {/* Trustpilot Green Star Icon */}
                <div className="w-3.5 h-3.5 text-[#00B67A] flex items-center justify-center">
                  ★
                </div>
                <span>Trustpilot</span>
              </div>
              {/* 5 Emerald Green Stars */}
              <div className="flex items-center gap-0.5 text-[#00B67A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
