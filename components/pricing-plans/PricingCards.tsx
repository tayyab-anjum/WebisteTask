"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Zap, Sparkles } from "lucide-react";

interface PricingCardsProps {
  isAnnual: boolean;
  onSelectPlan: (planName: string, price: string) => void;
}

export function PricingCards({ isAnnual, onSelectPlan }: PricingCardsProps) {
  const personalPrice = isAnnual ? "$55" : "$69";

  return (
    <section className="w-full pb-16 sm:pb-24 relative z-10">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch">
          {/* CARD 1: FREE PLAN */}
          <div
            className="w-full bg-white rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] p-6 sm:p-8 lg:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] border border-zinc-200/70 flex flex-col justify-between h-full transition-all duration-300 md:hover:-translate-y-1.5 md:hover:shadow-xl relative"
          >
            <div>
              {/* Header: Icon + Plan Name + Price */}
              <div className="flex items-center justify-between gap-3 sm:gap-4">
                {/* 3D Black Squircle Icon + Name */}
                <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                  <motion.div
                    whileHover={{ y: -3, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-[20px] sm:rounded-[22px] bg-gradient-to-b from-[#343438] via-[#1E1E22] to-[#0A0A0C] text-white flex items-center justify-center shrink-0 border-t border-white/35 border-x border-white/10 border-b border-black shadow-[0_16px_28px_-6px_rgba(0,0,0,0.45),0_8px_16px_-4px_rgba(0,0,0,0.35),inset_0_1.5px_1px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.6)] cursor-pointer"
                  >
                    <svg viewBox="0 0 32 32" className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                      {/* Solid White Rounded Diamond Tag */}
                      <rect
                        x="6"
                        y="6"
                        width="20"
                        height="20"
                        rx="5.5"
                        transform="rotate(45 16 16)"
                        fill="white"
                      />
                      {/* Inner dark details matching exact reference */}
                      <circle cx="11.5" cy="16" r="1.4" fill="#09090B" />
                      <line
                        x1="16"
                        y1="12"
                        x2="16"
                        y2="20"
                        stroke="#09090B"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <circle cx="20.5" cy="16" r="1.4" fill="#09090B" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight truncate">
                    Free
                  </h3>
                </div>

                {/* Price */}
                <div className="text-right shrink-0">
                  <span className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight whitespace-nowrap">
                    $0
                  </span>
                  <span className="text-sm sm:text-base font-medium text-zinc-400 ml-1 whitespace-nowrap">
                    /month
                  </span>
                </div>
              </div>

              {/* Action CTA Button */}
              <button
                onClick={() => onSelectPlan("Free", "$0")}
                className="w-full py-3.5 sm:py-4 rounded-2xl bg-zinc-100/70 hover:bg-zinc-100 border border-zinc-200/80 text-zinc-900 font-bold text-sm sm:text-base transition-colors cursor-pointer shadow-2xs my-6 sm:my-8 text-center"
              >
                Get Started
              </button>

              {/* Features List */}
              <div className="space-y-3.5 sm:space-y-4 pt-1">
                <div className="flex items-center gap-3 text-sm sm:text-base font-semibold text-zinc-800">
                  <Check className="w-4 h-4 text-zinc-950 stroke-[2.5] shrink-0" />
                  <span>Nothing but a Hug</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: PERSONAL PLAN */}
          <div
            className="w-full bg-white rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] p-6 sm:p-8 lg:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] border border-zinc-200/70 flex flex-col justify-between h-full transition-all duration-300 md:hover:-translate-y-1.5 md:hover:shadow-xl relative"
          >
            <div>
              {/* Header: Icon + Plan Name + Price */}
              <div className="flex items-center justify-between gap-3 sm:gap-4">
                {/* 3D Black Squircle Icon with Lightning Bolt + Name */}
                <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                  <motion.div
                    whileHover={{ y: -3, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-[20px] sm:rounded-[22px] bg-gradient-to-b from-[#343438] via-[#1E1E22] to-[#0A0A0C] text-white flex items-center justify-center shrink-0 border-t border-white/35 border-x border-white/10 border-b border-black shadow-[0_16px_28px_-6px_rgba(0,0,0,0.45),0_8px_16px_-4px_rgba(0,0,0,0.35),inset_0_1.5px_1px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.6)] cursor-pointer"
                  >
                    <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight truncate">
                    Personal
                  </h3>
                </div>

                {/* Price */}
                <div className="text-right shrink-0">
                  <span className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight whitespace-nowrap">
                    {personalPrice}
                  </span>
                  <span className="text-sm sm:text-base font-medium text-zinc-400 ml-1 whitespace-nowrap">
                    /month
                  </span>
                </div>
              </div>

              {/* Action CTA Button */}
              <button
                onClick={() => onSelectPlan("Personal", personalPrice)}
                className="w-full py-3.5 sm:py-4 rounded-2xl bg-zinc-100/70 hover:bg-zinc-100 border border-zinc-200/80 text-zinc-900 font-bold text-sm sm:text-base transition-colors cursor-pointer shadow-2xs my-6 sm:my-8 text-center"
              >
                View Pricing
              </button>

              {/* Features List */}
              <div className="space-y-3.5 sm:space-y-4 pt-1">
                <div className="flex items-center gap-3 text-sm sm:text-base font-semibold text-zinc-800">
                  <Check className="w-4 h-4 text-zinc-950 stroke-[2.5] shrink-0" />
                  <span>Full access to tools, 24/7 support</span>
                </div>

                <div className="flex items-center gap-3 text-sm sm:text-base font-semibold text-zinc-800">
                  <Check className="w-4 h-4 text-zinc-950 stroke-[2.5] shrink-0" />
                  <span>Monthly updates</span>
                </div>

                <div className="flex items-center gap-3 text-sm sm:text-base font-semibold text-zinc-800">
                  <Check className="w-4 h-4 text-zinc-950 stroke-[2.5] shrink-0" />
                  <span>Customization options</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
