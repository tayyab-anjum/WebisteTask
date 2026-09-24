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
    <section className="w-full pt-10 sm:pt-16 pb-12 sm:pb-18 select-none">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-10 lg:px-16 flex flex-col items-start">
        {/* Outlined [PRICING] Tag Badge */}
        <div className="mb-6 sm:mb-8">
          <span className="inline-block border border-zinc-400/90 rounded px-2.5 py-0.5 text-[11px] font-black uppercase tracking-widest text-zinc-700 font-mono">
            PRICING
          </span>
        </div>

        {/* Main Headline matching reference */}
        <div className="text-left max-w-5xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] leading-[1.08] sm:leading-[1.08] tracking-[-0.038em]">
            {/* Line 1 */}
            <span className="block text-zinc-400 font-medium">
              Better tools
            </span>

            {/* Line 2 with 3D App Badges */}
            <span className="flex items-center flex-wrap gap-2.5 sm:gap-3.5 my-1">
              <span className="text-zinc-400 font-medium">smooth</span>

              {/* 3D Elevated Overlapping Colorful App Tiles */}
              <span className="inline-flex items-center align-middle px-1">
                {/* 1. Colorful Dribbble Ball Tile */}
                <motion.span
                  whileHover={{ y: -5, rotate: -10, scale: 1.15, zIndex: 30 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl sm:rounded-3xl bg-white shadow-[0_12px_24px_-4px_rgba(0,0,0,0.18)] border border-zinc-100 flex items-center justify-center transform -rotate-6 cursor-pointer relative z-10"
                >
                  <svg viewBox="0 0 32 32" className="w-7 h-7 sm:w-8 sm:h-8">
                    {/* Vibrant Solid Magenta-Pink Circle */}
                    <circle cx="16" cy="16" r="14" fill="#E8308A" />
                    {/* Darker Seam Lines matching reference */}
                    <path
                      d="M 4.5 10.5 C 11.5 12.5, 19.5 10.5, 27 6"
                      fill="none"
                      stroke="#881337"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 6.5 23.5 C 11 16, 20 15, 27.5 16"
                      fill="none"
                      stroke="#881337"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 12 3 C 14 12, 17.5 20, 20.5 29"
                      fill="none"
                      stroke="#881337"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.span>

                {/* 2. Vibrant Royal Blue Behance Tile (Overlapping) */}
                <motion.span
                  whileHover={{ y: -5, rotate: 0, scale: 1.15, zIndex: 30 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl sm:rounded-3xl bg-white shadow-[0_14px_28px_-4px_rgba(0,0,0,0.22)] border border-zinc-100 flex items-center justify-center transform rotate-1 -translate-x-2 cursor-pointer relative z-20"
                >
                  <svg viewBox="0 0 40 32" className="w-7 h-7 sm:w-8 sm:h-8" fill="#0057FF">
                    <rect x="23" y="6" width="11" height="2.8" rx="1.2" />
                    <path d="M 6 6 L 15 6 C 18 6, 20 7.5, 20 9.8 C 20 11.2, 19.2 12.2, 18 12.8 C 19.6 13.5, 20.6 14.8, 20.6 16.6 C 20.6 19.2, 18.2 21, 15 21 L 6 21 Z M 10.5 9.2 L 10.5 12 L 14.2 12 C 15.2 12, 16 11.4, 16 10.6 C 16 9.8, 15.2 9.2, 14.2 9.2 Z M 10.5 15 L 10.5 18 L 14.5 18 C 15.6 18, 16.4 17.3, 16.4 16.5 C 16.4 15.7, 15.6 15, 14.5 15 Z" />
                    <path d="M 28.5 11 C 24.5 11, 22 13.5, 22 17 C 22 20.5, 24.5 22.8, 28.5 22.8 C 31.5 22.8, 33.5 21.4, 34.2 19.2 L 31.2 19.2 C 30.8 20, 29.8 20.5, 28.5 20.5 C 26.5 20.5, 25.2 19.2, 25.1 17.5 L 34.8 17.5 C 34.9 17.2, 35 16.8, 35 16.4 C 35 13.2, 32.5 11, 28.5 11 Z M 25.2 15.5 C 25.5 14, 26.8 13, 28.5 13 C 30.2 13, 31.4 14, 31.7 15.5 Z" />
                  </svg>
                </motion.span>

                {/* 3. Bold Black Miro Tile (Overlapping) */}
                <motion.span
                  whileHover={{ y: -5, rotate: 14, scale: 1.15, zIndex: 30 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl sm:rounded-3xl bg-white shadow-[0_12px_24px_-4px_rgba(0,0,0,0.18)] border border-zinc-100 flex items-center justify-center transform rotate-8 -translate-x-4 cursor-pointer relative z-10"
                >
                  <svg viewBox="0 0 32 32" className="w-6 h-6 sm:w-7 sm:h-7" fill="#09090B">
                    <path d="M 6.5 22.5 L 10.5 9 L 14 9 L 11.2 16.5 L 15.5 9 L 19 9 L 16.2 16.5 L 20.5 9 L 24 9 L 19.8 22.5 L 16.5 22.5 L 19.2 15 L 15 22.5 L 11.5 22.5 L 14.2 15 L 10 22.5 Z" />
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
            <span className="inline-flex items-center gap-3 sm:gap-4 flex-wrap mt-1">
              {/* Vibrant Gradient Toggle Switch */}
              <button
                onClick={onToggleAnnual}
                type="button"
                role="switch"
                aria-checked={isAnnual}
                className="relative w-20 sm:w-24 h-10 sm:h-12 rounded-full p-1 cursor-pointer bg-gradient-to-r from-[#60A5FA] via-[#C084FC] to-[#F472B6] shadow-md hover:shadow-lg transition-shadow align-middle"
              >
                {/* Knob */}
                <motion.div
                  layout
                  transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-xl flex items-center justify-center text-zinc-400 ${
                    isAnnual ? "ml-auto" : "mr-auto"
                  }`}
                >
                  {/* Subtle double grip lines inside knob */}
                  <div className="flex flex-col gap-[3px]">
                    <div className="w-2.5 h-[1.5px] bg-zinc-300 rounded-full" />
                    <div className="w-2.5 h-[1.5px] bg-zinc-300 rounded-full" />
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
                <span className="text-xs font-black text-emerald-600 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full uppercase tracking-wider ml-1 animate-pulse">
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
