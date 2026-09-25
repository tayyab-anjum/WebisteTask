"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, ArrowDown, ArrowLeftRight, Check } from "lucide-react";

interface AnalyticsSectionProps {
  onSend: () => void;
  onReceive: () => void;
  onConvert: () => void;
}

export function AnalyticsSection({
  onSend,
  onReceive,
  onConvert,
}: AnalyticsSectionProps) {
  const chartBars = [
    { height: 40 },
    { height: 60 },
    { height: 100, isActive: true }, // Highlighted gradient bar
    { height: 50 },
    { height: 75 },
    { height: 35 },
  ];

  return (
    <section className="w-full max-w-[1460px] mx-auto px-4 sm:px-10 lg:px-16 py-14 sm:py-28 select-none">
      {/* Section Headline matching exact reference copy and color */}
      <div className="text-center mb-10 sm:mb-20">
        <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-[54px] font-black tracking-[-0.035em] text-zinc-950 leading-[1.08] sm:leading-[1.06]">
          <span className="text-[#2563EB]">Empower </span>
          <span>Your Financial</span>
          <br />
          <span>Future with us</span>
        </h2>
      </div>

      {/* Large Rounded Bento Showcase Container */}
      <div className="rounded-[28px] sm:rounded-[44px] bg-[#F8FAFC] border border-zinc-200/90 p-4 xs:p-6 sm:p-12 lg:p-16 shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Lime Green My Balance Dock & Bar Chart */}
          <div className="lg:col-span-6 relative flex flex-col items-center w-full max-w-xl mx-auto">
            {/* Vibrant Lime Green My Balance Dock with signature counter-clockwise tilt */}
            <motion.div
              whileHover={{ y: -4, rotate: -2, scale: 1.01 }}
              className="w-full bg-[#A3E635] text-zinc-950 rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-7 shadow-xl sm:shadow-2xl relative z-20 border border-lime-300 rotate-[-1.5deg] sm:rotate-[-4deg] lg:rotate-[-5deg] transform origin-center sm:origin-bottom-left"
            >
              <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-3 sm:gap-4">
                <div className="min-w-0">
                  <div className="text-[11px] sm:text-xs font-bold text-zinc-800 uppercase tracking-wider">
                    My Balance
                  </div>
                  <div className="text-2xl xs:text-3xl sm:text-4xl md:text-[42px] font-black text-zinc-950 tracking-tight mt-0.5 sm:mt-1">
                    $9,823,28
                  </div>
                  <div className="text-[11px] xs:text-xs sm:text-sm text-zinc-800/90 font-medium sm:font-semibold mt-1 leading-snug">
                    Your made an extra $2,832.19 in this month.
                  </div>
                </div>

                {/* White Action Buttons */}
                <div className="flex items-center gap-2 sm:gap-3 shrink-0 self-start xs:self-center">
                  <button
                    onClick={onSend}
                    className="flex flex-col items-center gap-1 group cursor-pointer"
                  >
                    <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-zinc-50 shadow-xs flex items-center justify-center text-zinc-900 transition-transform group-hover:scale-105">
                      <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-zinc-800">Send</span>
                  </button>

                  <button
                    onClick={onReceive}
                    className="flex flex-col items-center gap-1 group cursor-pointer"
                  >
                    <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-zinc-50 shadow-xs flex items-center justify-center text-zinc-900 transition-transform group-hover:scale-105">
                      <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-zinc-800">Receive</span>
                  </button>

                  <button
                    onClick={onConvert}
                    className="flex flex-col items-center gap-1 group cursor-pointer"
                  >
                    <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-zinc-50 shadow-xs flex items-center justify-center text-zinc-900 transition-transform group-hover:scale-105">
                      <ArrowLeftRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-zinc-800">Convert</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Underlying White Bar Chart Card */}
            <div className="w-full bg-white rounded-2xl sm:rounded-3xl p-3 xs:p-5 sm:p-8 shadow-sm border border-zinc-100 -mt-3 sm:-mt-6 pt-7 sm:pt-14 z-10 relative overflow-hidden">
              <div className="flex items-end justify-between h-44 xs:h-52 sm:h-64 relative px-1 sm:px-4">
                {/* Y-axis guidelines */}
                <div className="absolute inset-x-1 sm:inset-x-3 bottom-[85%] border-b border-dashed border-zinc-100 text-[10px] sm:text-[11px] text-zinc-400 font-medium">
                  125K
                </div>
                <div className="absolute inset-x-1 sm:inset-x-3 bottom-[68%] border-b border-dashed border-zinc-100 text-[10px] sm:text-[11px] text-zinc-400 font-medium">
                  100K
                </div>
                <div className="absolute inset-x-1 sm:inset-x-3 bottom-[51%] border-b border-dashed border-zinc-100 text-[10px] sm:text-[11px] text-zinc-400 font-medium">
                  75K
                </div>
                <div className="absolute inset-x-1 sm:inset-x-3 bottom-[34%] border-b border-dashed border-zinc-100 text-[10px] sm:text-[11px] text-zinc-400 font-medium">
                  50K
                </div>
                <div className="absolute inset-x-1 sm:inset-x-3 bottom-[17%] border-b border-dashed border-zinc-100 text-[10px] sm:text-[11px] text-zinc-400 font-medium">
                  25K
                </div>

                {/* Bars */}
                {chartBars.map((bar, i) => (
                  <div
                    key={i}
                    className="flex-1 flex items-end justify-center h-full px-0.5 xs:px-1 sm:px-2 z-1"
                  >
                    <div
                      className={`w-5 xs:w-7 sm:w-9 md:w-10 rounded-full transition-all ${
                        bar.isActive
                          ? "bg-gradient-to-t from-[#A3E635] via-[#2563EB] to-[#9333EA] shadow-md"
                          : "bg-zinc-100 hover:bg-zinc-200"
                      }`}
                      style={{ height: `${bar.height}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Title, Copy & 2x2 Feature Checklist */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h3 className="text-3xl sm:text-4xl md:text-[46px] lg:text-[50px] font-black text-zinc-950 tracking-tight leading-[1.08]">
              <span>Comprehensive </span>
              <br />
              <span className="text-[#2563EB]">Financial Analytics </span>
              <br />
              <span>Dashboard</span>
            </h3>

            <p className="text-zinc-500 text-base sm:text-lg font-normal leading-relaxed my-7 max-w-xl">
              Gain real-time visibility into your financial performance with intuitive dashboards.
            </p>

            {/* 2x2 Checklist Grid matching reference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 w-full max-w-lg pt-2">
              <div className="flex items-center gap-3 text-sm sm:text-base font-bold text-zinc-900">
                <div className="w-5 h-5 rounded-full bg-zinc-950 text-white flex items-center justify-center p-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Keep tracking balance</span>
              </div>

              <div className="flex items-center gap-3 text-sm sm:text-base font-bold text-zinc-900">
                <div className="w-5 h-5 rounded-full bg-zinc-950 text-white flex items-center justify-center p-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Send money easily</span>
              </div>

              <div className="flex items-center gap-3 text-sm sm:text-base font-bold text-zinc-900">
                <div className="w-5 h-5 rounded-full bg-zinc-950 text-white flex items-center justify-center p-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Receive money easily</span>
              </div>

              <div className="flex items-center gap-3 text-sm sm:text-base font-bold text-zinc-900">
                <div className="w-5 h-5 rounded-full bg-zinc-950 text-white flex items-center justify-center p-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Convert currency</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
