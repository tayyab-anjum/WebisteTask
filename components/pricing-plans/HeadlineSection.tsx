"use client";

import React from "react";
import { motion } from "framer-motion";

interface HeadlineSectionProps {
  isAnnual: boolean;
  onToggleAnnual: () => void;
}

export function HeadlineSection({
  isAnnual,
  onToggleAnnual,
}: HeadlineSectionProps) {
  return (
    <section className="w-full pt-8 sm:pt-14 md:pt-16 pb-8 sm:pb-14 select-none">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-10 lg:px-16 flex flex-col items-start">
        {/* Outlined [PRICING] Tag Badge */}
        <div className="mb-4 sm:mb-7">
          <span className="inline-block border border-zinc-400/90 rounded px-2.5 py-0.5 text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-zinc-700 font-mono">
            PRICING
          </span>
        </div>

        {/* Main Headline: Small on phone, enormous on web */}
        <div className="text-left max-w-full md:max-w-5xl">
          <h1 className="text-[26px] xs:text-3xl sm:text-5xl md:text-7xl lg:text-[76px] xl:text-[84px] leading-[1.12] sm:leading-[1.08] tracking-[-0.038em]">
            {/* Line 1 */}
            <span className="block text-zinc-400 font-medium">
              Better tools
            </span>

            {/* Line 2 with 3D App Badges */}
            <span className="flex items-center flex-wrap gap-1.5 xs:gap-2 sm:gap-3.5 my-1">
              <span className="text-zinc-400 font-medium">smooth</span>

              {/* 3D Elevated Overlapping Colorful App Tiles with oval corners (no circles) */}
              <span className="inline-flex items-center align-middle px-0.5 sm:px-1">
                {/* 1. Colorful Creative Studio Tile (Corner-oval rounded rectangle) */}
                <motion.span
                  whileHover={{ y: -5, rotate: -10, scale: 1.15, zIndex: 30 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="w-7 h-7 xs:w-8.5 xs:h-8.5 sm:w-11 sm:h-11 md:w-13 md:h-13 rounded-[6px] xs:rounded-[7px] sm:rounded-[12px] md:rounded-[15px] bg-white shadow-[0_6px_16px_-2px_rgba(0,0,0,0.14)] sm:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.18)] border border-zinc-100 flex items-center justify-center transform -rotate-6 cursor-pointer relative z-10"
                >
                  <svg viewBox="0 0 32 32" className="w-4.5 h-4.5 xs:w-5 xs:h-5 sm:w-7 sm:h-7 md:w-8 md:h-8">
                    {/* Vibrant Solid Magenta-Pink Rounded Rectangle (Corner Oval, no circle) */}
                    <rect x="3" y="3" width="26" height="26" rx="6.5" fill="#E8308A" />
                    {/* Elegant Lookalike Spiral Curves */}
                    <path
                      d="M 6 12 C 12 14, 18 12, 26 8"
                      fill="none"
                      stroke="#881337"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 7 22 C 12 17, 19 16, 26 17"
                      fill="none"
                      stroke="#881337"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 13 5 C 15 13, 18 20, 20 27"
                      fill="none"
                      stroke="#881337"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.span>

                {/* 2. Vibrant Royal Blue Creative Studio Tile (Corner-oval rounded rectangle) */}
                <motion.span
                  whileHover={{ y: -5, rotate: 0, scale: 1.15, zIndex: 30 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="w-7 h-7 xs:w-8.5 xs:h-8.5 sm:w-11 sm:h-11 md:w-13 md:h-13 rounded-[6px] xs:rounded-[7px] sm:rounded-[12px] md:rounded-[15px] bg-white shadow-[0_8px_18px_-2px_rgba(0,0,0,0.18)] sm:shadow-[0_14px_28px_-4px_rgba(0,0,0,0.22)] border border-zinc-100 flex items-center justify-center transform rotate-1 -translate-x-1 sm:-translate-x-2 cursor-pointer relative z-20"
                >
                  <svg viewBox="0 0 40 32" className="w-4.5 h-4.5 xs:w-5 xs:h-5 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="#0057FF">
                    <rect x="23" y="6" width="11" height="2.8" rx="1.2" />
                    {/* Lookalike 'Cr' Lettermark */}
                    <path d="M 18 11.5 C 17 9.5, 14.5 8, 12 8 C 8 8, 5 11, 5 16 C 5 21, 8 24, 12 24 C 14.5 24, 17 22.5, 18 20.5 L 14.5 19 C 14 20, 13 20.8, 12 20.8 C 9.8 20.8, 8.2 18.8, 8.2 16 C 8.2 13.2, 9.8 11.2, 12 11.2 C 13 11.2, 14 12, 14.5 13 Z" />
                    <path d="M 23 11 L 26.5 11 L 26.5 13.5 C 27.5 11.8, 29.5 11, 31.5 11 L 31.5 14.5 C 31 14.3, 30.2 14.2, 29.5 14.2 C 27.8 14.2, 26.5 15.5, 26.5 17.5 L 26.5 24 L 23 24 Z" />
                  </svg>
                </motion.span>

                {/* 3. Bold Black Geometric Tile (Corner-oval rounded rectangle) */}
                <motion.span
                  whileHover={{ y: -5, rotate: 14, scale: 1.15, zIndex: 30 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="w-7 h-7 xs:w-8.5 xs:h-8.5 sm:w-11 sm:h-11 md:w-13 md:h-13 rounded-[6px] xs:rounded-[7px] sm:rounded-[12px] md:rounded-[15px] bg-white shadow-[0_6px_16px_-2px_rgba(0,0,0,0.14)] sm:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.18)] border border-zinc-100 flex items-center justify-center transform rotate-8 -translate-x-2 sm:-translate-x-4 cursor-pointer relative z-10"
                >
                  <svg viewBox="0 0 32 32" className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="#09090B">
                    {/* Modern 4-pillar angled geometry */}
                    <path d="M 5 21 L 9 8 L 12.5 8 L 10 21 Z M 11.5 21 L 15.5 8 L 19 8 L 16.5 21 Z M 18 21 L 22 8 L 25.5 8 L 23 21 Z" />
                  </svg>
                </motion.span>
              </span>

              {/* workflow in bold black */}
              <span className="text-zinc-950 font-black">
                workflow
              </span>
            </span>

            {/* Line 3 */}
            <span className="block text-zinc-400 font-medium my-1">
              including same great deal,
            </span>

            {/* Line 4 with Gradient Toggle and annually */}
            <span className="inline-flex items-center gap-2 xs:gap-2.5 sm:gap-4 flex-wrap mt-1">
              {/* Vibrant Gradient Toggle Switch */}
              <button
                onClick={onToggleAnnual}
                type="button"
                role="switch"
                aria-checked={isAnnual}
                className="relative w-13 xs:w-15 sm:w-20 md:w-24 h-7 xs:h-8 sm:h-10 md:h-12 rounded-full p-0.5 sm:p-1 cursor-pointer bg-gradient-to-r from-[#60A5FA] via-[#C084FC] to-[#F472B6] shadow-md hover:shadow-lg transition-shadow align-middle"
              >
                {/* Knob */}
                <motion.div
                  layout
                  transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  className={`w-5.5 h-5.5 xs:w-6.5 xs:h-6.5 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white shadow-xl flex items-center justify-center text-zinc-400 ${
                    isAnnual ? "ml-auto" : "mr-auto"
                  }`}
                >
                  {/* Subtle double grip lines inside knob */}
                  <div className="flex flex-col gap-[2px] sm:gap-[3px]">
                    <div className="w-2 sm:w-2.5 h-[1.5px] bg-zinc-300 rounded-full" />
                    <div className="w-2 sm:w-2.5 h-[1.5px] bg-zinc-300 rounded-full" />
                  </div>
                </motion.div>
              </button>

              {/* annually in bold black */}
              <span 
                onClick={onToggleAnnual}
                className="text-zinc-950 font-black cursor-pointer hover:opacity-90 transition-opacity"
              >
                annually.
              </span>

              {isAnnual && (
                <span className="text-[10px] sm:text-xs font-black text-emerald-600 bg-emerald-50 border border-emerald-200/80 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full uppercase tracking-wider ml-1 animate-pulse">
                  Save 20%
                </span>
              )}
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
