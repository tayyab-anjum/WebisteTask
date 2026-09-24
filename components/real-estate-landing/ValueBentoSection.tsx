"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Search,
  ShieldCheck,
  MapPin,
  TrendingUp,
  Sparkles,
} from "lucide-react";

interface ValueBentoSectionProps {
  onFindBestForYou?: () => void;
  onSelectPropertyFromBento?: () => void;
}

export function ValueBentoSection({
  onFindBestForYou,
  onSelectPropertyFromBento,
}: ValueBentoSectionProps) {
  const [aiQuery, setAiQuery] = useState("");
  const [activePromptIndex, setActivePromptIndex] = useState(0);

  const samplePrompts = [
    'search with "AI"',
    '"oceanfront high-yield under $1k"',
    '"prime city center 12% ROI"',
  ];

  return (
    <section className="w-full bg-white py-24 sm:py-32 select-none">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-18 items-start">
          {/* Left Column: Heading, Subtitle & Primary CTA */}
          <div className="lg:col-span-5 flex flex-col items-start pt-2">
            {/* Category Subtitle Tag */}
            <div className="text-xs sm:text-sm font-black text-[#F43F5E] flex items-center gap-2 mb-4 tracking-wide uppercase">
              <span className="w-4 h-[2px] bg-[#F43F5E]" />
              <span>Reason to choose us</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-[64px] font-black text-zinc-950 tracking-[-0.038em] leading-[1.06]">
              <span>Discover the value</span>
              <br />
              <span>behind smart property</span>
              <br />
              <span>investments</span>
            </h2>

            {/* Description */}
            <p className="text-zinc-500 text-base sm:text-lg md:text-xl font-normal leading-relaxed my-8 max-w-xl">
              We handle the heavy lifting by conducting in-depth research, analyzing the
              numbers, and finding high-performing properties for you.
            </p>

            {/* CTA Pill Button */}
            <button
              onClick={onFindBestForYou}
              className="group inline-flex items-center gap-2.5 bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-xl cursor-pointer active:scale-95"
            >
              <span>Find the best for you</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Column: 3 Bento Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {/* Card 1 (Top Left): Smart Suggestions */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-[#F8FAFC] border border-zinc-200/80 rounded-[32px] sm:rounded-[36px] p-7 sm:p-8 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow group"
            >
              {/* Simulated Floating AI Search Bar */}
              <div className="w-full bg-white rounded-2xl p-3.5 sm:p-4 shadow-sm border border-zinc-200/80 flex items-center gap-3 transition-shadow group-hover:shadow-md">
                <Search className="w-4 h-4 text-zinc-400 shrink-0" />
                <input
                  type="text"
                  placeholder={samplePrompts[activePromptIndex]}
                  value={aiQuery}
                  onChange={(e) => setAiQuery(e.target.value)}
                  className="w-full text-xs sm:text-sm font-semibold text-zinc-800 placeholder:text-zinc-400 bg-transparent focus:outline-hidden"
                />
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0 opacity-80" />
              </div>

              {/* Text Info */}
              <div className="mt-10">
                <h3 className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight">
                  Smart Suggestions
                </h3>
                <p className="text-sm sm:text-base text-zinc-500 font-normal leading-relaxed mt-1.5">
                  AI scans listings to find your best-fit property.
                </p>
              </div>
            </motion.div>

            {/* Card 2 (Top Right): 99% Trusted Investor */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-[#F8FAFC] border border-zinc-200/80 rounded-[32px] sm:rounded-[36px] p-7 sm:p-8 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow group"
            >
              {/* Black Rounded Squircle Badge with Shield Icon */}
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-zinc-950 text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6 text-white stroke-[2.2]" />
              </div>

              {/* Text Info */}
              <div className="mt-10">
                <h3 className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight">
                  99% Trusted Investor
                </h3>
                <p className="text-sm sm:text-base text-zinc-500 font-normal leading-relaxed mt-1.5">
                  Users trust our picks and return for more deals.
                </p>
              </div>
            </motion.div>

            {/* Card 3 (Bottom Spanning): Invest Where It Matters */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="sm:col-span-2 bg-[#F8FAFC] border border-zinc-200/80 rounded-[32px] sm:rounded-[40px] p-7 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xs hover:shadow-md transition-shadow group"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Left Side of Card: Radar / Heatmap Visualization */}
                <div className="md:col-span-6 relative h-48 sm:h-56 flex items-center justify-center">
                  {/* Subtle Grid and Radar Concentric Circles */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none opacity-65"
                    viewBox="0 0 340 180"
                    fill="none"
                  >
                    {/* Concentric Radar Rings */}
                    <circle cx="110" cy="90" r="35" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 3" />
                    <circle cx="110" cy="90" r="70" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="3 3" />
                    <circle cx="110" cy="90" r="105" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="4 4" />

                    {/* Curved Route to Stacked Cards */}
                    <path
                      d="M 110 90 Q 200 50, 270 95"
                      stroke="#F43F5E"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      fill="none"
                    />
                  </svg>

                  {/* Pulsing Hotspot Marker "147" */}
                  <div className="relative z-10 flex items-center gap-2 bg-[#EF4444] text-white text-xs sm:text-sm font-black px-4 py-1.5 rounded-full shadow-xl -translate-x-10">
                    <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                    <span>147</span>
                  </div>
                </div>

                {/* Right Side of Card: 3D Scattered & Fanned Property Cards */}
                <div className="md:col-span-6 relative flex items-center justify-center md:justify-end py-4 pr-0 sm:pr-4">
                  <div className="relative w-72 sm:w-80 h-56 sm:h-64 flex items-center justify-center">
                    {/* Card 1: Left Tilted Card (Fully Visible) */}
                    <motion.div
                      whileHover={{ y: -8, rotate: -14, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="absolute w-44 sm:w-48 h-40 sm:h-44 bg-white rounded-2xl shadow-md border border-zinc-200/80 p-2 flex flex-col justify-between transform -rotate-10 -translate-x-12 sm:-translate-x-16 -translate-y-2 z-10 cursor-pointer"
                    >
                      <div className="relative w-full h-24 sm:h-28 rounded-xl overflow-hidden">
                        <Image
                          src="/real-estate/modern-residence.jpg"
                          alt="Skyline Glass Residence"
                          fill
                          sizes="192px"
                          className="object-cover"
                        />
                      </div>
                      <div className="pt-1 px-0.5">
                        <div className="text-[11px] font-black text-zinc-900 truncate">
                          Skyline Glass Residence
                        </div>
                        <div className="text-[9px] text-zinc-500 font-semibold">
                          New York, NY • $30,000/share
                        </div>
                      </div>
                    </motion.div>

                    {/* Card 2: Right Tilted Card (Fully Visible) */}
                    <motion.div
                      whileHover={{ y: -8, rotate: 12, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="absolute w-44 sm:w-48 h-40 sm:h-44 bg-white rounded-2xl shadow-md border border-zinc-200/80 p-2 flex flex-col justify-between transform rotate-8 translate-x-12 sm:translate-x-16 translate-y-3 z-10 cursor-pointer"
                    >
                      <div className="relative w-full h-24 sm:h-28 rounded-xl overflow-hidden">
                        <Image
                          src="/real-estate/pin-3.jpg"
                          alt="Sunset Boulevard Residence"
                          fill
                          sizes="192px"
                          className="object-cover"
                        />
                      </div>
                      <div className="pt-1 px-0.5">
                        <div className="text-[11px] font-black text-zinc-900 truncate">
                          Sunset Boulevard Residence
                        </div>
                        <div className="text-[9px] text-zinc-500 font-semibold">
                          Miami, FL • $24,000/share
                        </div>
                      </div>
                    </motion.div>

                    {/* Card 3: Front Primary Card (Centered, Elevated) */}
                    <motion.div
                      whileHover={{ y: -8, scale: 1.06 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      onClick={onSelectPropertyFromBento}
                      className="absolute w-48 sm:w-52 h-44 sm:h-48 bg-white rounded-2xl shadow-2xl border border-zinc-200/90 p-2.5 flex flex-col justify-between transform -rotate-1 z-20 cursor-pointer hover:shadow-3xl"
                    >
                      <div className="relative w-full h-28 sm:h-30 rounded-xl overflow-hidden">
                        <Image
                          src="/real-estate/architectural-villa.jpg"
                          alt="Modern Architectural Villa"
                          fill
                          sizes="208px"
                          className="object-cover"
                        />
                        <span className="absolute top-1.5 right-1.5 bg-zinc-950/90 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-xs">
                          High Growth
                        </span>
                      </div>
                      <div className="pt-1.5 px-0.5">
                        <div className="text-xs font-black text-zinc-900 truncate">
                          Modern Architectural Villa
                        </div>
                        <div className="text-[10px] text-zinc-500 font-semibold mt-0.5">
                          Nashville, TN • $22,000/share
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Bottom Text Info */}
              <div className="mt-6 pt-4 border-t border-zinc-200/60">
                <h3 className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight">
                  Invest Where It Matters
                </h3>
                <p className="text-sm sm:text-base text-zinc-500 font-normal leading-relaxed mt-1.5 max-w-2xl">
                  We pinpoint high-demand, high-growth areas backed by market data.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
