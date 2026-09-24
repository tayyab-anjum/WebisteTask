"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, ArrowDown, ArrowLeftRight, Check, Sparkles } from "lucide-react";

interface FloatingDashboardProps {
  onSend: () => void;
  onReceive: () => void;
  onConvert: () => void;
}

export function FloatingDashboard({
  onSend,
  onReceive,
  onConvert,
}: FloatingDashboardProps) {
  const [selectedBar, setSelectedBar] = useState(3);
  const [netflixActive, setNetflixActive] = useState(true);
  const [spotifyActive, setSpotifyActive] = useState(true);

  const chartData = [
    { label: "Mon", value: 45, amount: "$1,820.40" },
    { label: "Tue", value: 65, amount: "$2,940.10" },
    { label: "Wed", value: 50, amount: "$2,150.00" },
    { label: "Thu", value: 92, amount: "$4,239.12", active: true },
    { label: "Fri", value: 40, amount: "$1,620.50" },
    { label: "Sat", value: 55, amount: "$2,410.80" },
    { label: "Sun", value: 35, amount: "$1,380.00" },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none select-none">
      {/* Outer Browser Window Mockup */}
      <div className="rounded-[32px] bg-[#F8FAFC] border border-zinc-200/90 p-6 sm:p-8 lg:p-9 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.14)] relative overflow-visible">
        {/* Top Browser Traffic Light Window Dots */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
          <div className="w-3 h-3 rounded-full bg-[#EAB308]" />
          <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
        </div>

        {/* Floating Subscriptions Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-7 relative">
          {/* Netflix Subscription Card */}
          <motion.div
            whileHover={{ y: -3 }}
            className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-zinc-100 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                {/* Netflix Icon */}
                <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center font-black text-[#E50914] text-lg">
                  N
                </div>
                <span className="font-bold text-zinc-900 text-sm sm:text-base">Netflix</span>
              </div>

              {/* Toggle Switch */}
              <button
                onClick={() => setNetflixActive(!netflixActive)}
                className={`w-8 h-4.5 rounded-full p-0.5 transition-colors cursor-pointer ${
                  netflixActive ? "bg-zinc-900" : "bg-zinc-200"
                }`}
              >
                <div
                  className={`w-3.5 h-3.5 rounded-full bg-white transition-transform ${
                    netflixActive ? "translate-x-3.5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            <div>
              <span className="text-2xl font-extrabold text-zinc-900">$24</span>
              <span className="text-xs text-zinc-400 font-medium ml-1">/month</span>
            </div>
          </motion.div>

          {/* Spotify Vibrant Blue Floating Card with signature counter-clockwise tilt */}
          <motion.div
            whileHover={{ y: -6, rotate: -2, scale: 1.04 }}
            className="bg-[#2563EB] text-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-blue-400/30 flex flex-col justify-between relative sm:-mr-4 sm:-mt-3 z-10 -rotate-6 transform origin-bottom-right"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                {/* Spotify Wave Icon */}
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  </div>
                </div>
                <span className="font-bold text-white text-sm sm:text-base">Spotify</span>
              </div>

              {/* Pill Switch Toggle with Checkmark */}
              <div
                onClick={() => setSpotifyActive(!spotifyActive)}
                className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center cursor-pointer transition-colors"
              >
                <Check className="w-3.5 h-3.5 text-white" />
              </div>
            </div>

            <div>
              <span className="text-2xl font-extrabold text-white">$13</span>
              <span className="text-xs text-white/80 font-medium ml-1">/month</span>
            </div>
          </motion.div>
        </div>

        {/* My Balance Header & Action Controls */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-zinc-100 mb-7">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div>
              <div className="text-xs sm:text-sm font-semibold text-zinc-400 uppercase tracking-wider">
                My Balance
              </div>
              <div className="text-4xl sm:text-5xl font-black text-zinc-950 tracking-tight mt-1">
                $9,823,28
              </div>
              <div className="text-xs sm:text-sm text-zinc-500 font-medium mt-1.5">
                Your made an extra <span className="font-semibold text-emerald-600">$2,832.19</span> in this month.
              </div>
            </div>

            {/* Quick Action Circles */}
            <div className="flex items-center gap-3.5">
              <button
                onClick={onSend}
                className="flex flex-col items-center gap-1 group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-full bg-zinc-100 group-hover:bg-zinc-200 transition-colors flex items-center justify-center text-zinc-800 shadow-xs">
                  <ArrowUp className="w-4.5 h-4.5" />
                </div>
                <span className="text-xs font-bold text-zinc-700">Send</span>
              </button>

              <button
                onClick={onReceive}
                className="flex flex-col items-center gap-1 group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-full bg-zinc-100 group-hover:bg-zinc-200 transition-colors flex items-center justify-center text-zinc-800 shadow-xs">
                  <ArrowDown className="w-4.5 h-4.5" />
                </div>
                <span className="text-xs font-bold text-zinc-700">Receive</span>
              </button>

              <button
                onClick={onConvert}
                className="flex flex-col items-center gap-1 group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-full bg-zinc-100 group-hover:bg-zinc-200 transition-colors flex items-center justify-center text-zinc-800 shadow-xs">
                  <ArrowLeftRight className="w-4.5 h-4.5" />
                </div>
                <span className="text-xs font-bold text-zinc-700">Convert</span>
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Bar Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-100">
          <div className="flex items-end justify-between h-56 pt-10 pb-2 px-3 relative">
            {/* Y-Axis Reference Guidelines */}
            <div className="absolute inset-x-3 top-3 border-b border-dashed border-zinc-100 flex justify-between text-[11px] text-zinc-400">
              <span>150K</span>
            </div>
            <div className="absolute inset-x-3 top-20 border-b border-dashed border-zinc-100 flex justify-between text-[11px] text-zinc-400">
              <span>125K</span>
            </div>
            <div className="absolute inset-x-3 top-36 border-b border-dashed border-zinc-100 flex justify-between text-[11px] text-zinc-400">
              <span>100K</span>
            </div>

            {/* Bars Column Rendering */}
            {chartData.map((bar, idx) => {
              const isSelected = selectedBar === idx;

              return (
                <div
                  key={bar.label}
                  onClick={() => setSelectedBar(idx)}
                  className="flex-1 flex flex-col items-center justify-end h-full cursor-pointer relative group"
                >
                  {/* Tooltip Pill on Active / Selected Bar */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeTooltip"
                      className="absolute -top-7 z-30 whitespace-nowrap"
                    >
                      <div className="bg-[#18181B] text-white px-2.5 py-1 rounded-full text-[11px] font-bold shadow-md relative">
                        {bar.amount}
                        {/* Triangle Tail */}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#18181B] rotate-45" />
                      </div>
                    </motion.div>
                  )}

                  {/* Bar Body */}
                  <div className="w-7 sm:w-8 flex items-end justify-center h-full">
                    <div
                      className={`w-full rounded-full transition-all duration-300 ${
                        isSelected
                          ? "bg-gradient-to-t from-[#2563EB] to-[#9333EA] shadow-[0_0_15px_rgba(147,51,234,0.35)]"
                          : "bg-zinc-100 group-hover:bg-zinc-200"
                      }`}
                      style={{ height: `${bar.value}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
