"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FloatingDashboard } from "./FloatingDashboard";
import { ArrowUpRight } from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
  onSend: () => void;
  onReceive: () => void;
  onConvert: () => void;
}

export function HeroSection({
  onGetStarted,
  onSend,
  onReceive,
  onConvert,
}: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="w-full max-w-[1460px] mx-auto px-6 sm:px-10 lg:px-16 pt-10 sm:pt-16 pb-16 sm:pb-24 select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Column: Headline & Value Proposition */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          {/* Top Category Badge */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5EEFF] border border-[#E9D5FF] text-[#9333EA] text-xs sm:text-sm font-semibold tracking-tight mb-6"
          >
            <span>Finance Solutions for You</span>
          </motion.div>

          {/* Main Giant Headline */}
          <motion.h1
            initial={prefersReducedMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-[46px] xs:text-[54px] sm:text-[68px] lg:text-[76px] xl:text-[84px] font-black text-zinc-950 tracking-[-0.035em] leading-[1.04]"
          >
            <span className="inline-flex items-center flex-wrap gap-2.5">
              <span>Maximize</span>
              {/* Dual Orb Badge: Black Circle + Lime Circle with Upward Arrow */}
              <span className="inline-flex items-center -space-x-2 my-auto align-middle">
                <span className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-zinc-950 flex items-center justify-center shadow-sm" />
                <span className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#A3E635] flex items-center justify-center shadow-sm text-zinc-950">
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
                </span>
              </span>
            </span>
            <br />
            <span>Your </span>
            {/* "Financial" in vibrant electric blue with underline scribble */}
            <span className="text-[#2563EB] relative inline-block">
              Financial
              {/* Hand-drawn energetic brush underline swoosh matching reference */}
              <svg
                className="absolute -bottom-3 sm:-bottom-3.5 left-0 w-full overflow-visible pointer-events-none"
                height="16"
                viewBox="0 0 220 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Main energetic curved arc */}
                <path
                  d="M 3 9 C 45 14, 130 15, 218 5.5"
                  stroke="#2563EB"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Secondary natural marker accent */}
                <path
                  d="M 28 12.5 C 75 15.5, 155 15, 198 10"
                  stroke="#2563EB"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.8"
                />
              </svg>
            </span>
            <br />
            <span>Potential</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-zinc-500 text-[15px] sm:text-[17px] font-normal leading-relaxed max-w-md mt-6 mb-8"
          >
            Welcome to FinSuite, where financial management meets simplicity and efficiency.
          </motion.p>

          {/* Primary Action Button */}
          <motion.button
            initial={prefersReducedMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onGetStarted}
            className="bg-[#09090b] hover:bg-zinc-800 text-white font-bold px-8 sm:px-9 py-3.5 sm:py-4 rounded-full text-sm sm:text-base tracking-tight shadow-md transition-all cursor-pointer"
          >
            Get Started
          </motion.button>
        </div>

        {/* Right Column: 3D Floating Dashboard Canvas */}
        <div className="lg:col-span-6 relative">
          <FloatingDashboard
            onSend={onSend}
            onReceive={onReceive}
            onConvert={onConvert}
          />
        </div>
      </div>
    </section>
  );
}
