"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plane, Radio, Clock, CloudSun, MapPin } from "lucide-react";

interface FlightRadarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FlightRadarModal({ isOpen, onClose }: FlightRadarModalProps) {
  const [progress, setProgress] = useState(64);

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 98 ? 64 : prev + 1));
    }, 1200);
    return () => clearInterval(interval);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-neutral-950/60 z-50 flex items-center justify-center p-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 10 }}
            className="w-full max-w-lg bg-[#09090b] text-white rounded-3xl p-6 sm:p-7 shadow-2xl relative border border-white/10 overflow-hidden"
          >
            {/* Background Map Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-zinc-400 hover:text-white p-1 rounded-full cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-2 text-sky-400 mb-1">
              <Radio className="w-4 h-4 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Live Flight Radar • WE1786
              </span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight">
              New Jersey (EWR) → California (LAX)
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Boeing 787-9 Dreamliner • On schedule
            </p>

            {/* Live Progress Bar with Plane Icon */}
            <div className="my-6 p-4 rounded-2xl bg-white/5 border border-white/10 relative">
              <div className="flex justify-between text-xs text-zinc-300 font-semibold mb-2">
                <span>Departed 5:23 PM</span>
                <span className="text-sky-400 font-mono">{progress}% Complete</span>
                <span>Est. Arrival 8:43 PM</span>
              </div>

              {/* Progress Line */}
              <div className="w-full h-2 bg-white/10 rounded-full relative overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-sky-500 to-sky-400 rounded-full transition-all duration-700"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Moving Plane Indicator */}
              <div
                className="absolute top-[27px] -translate-y-1/2 transition-all duration-700"
                style={{ left: `calc(${progress}% - 8px)` }}
              >
                <div className="w-6 h-6 rounded-full bg-sky-500 shadow-[0_0_12px_#38bdf8] flex items-center justify-center">
                  <Plane className="w-3.5 h-3.5 text-white rotate-90" />
                </div>
              </div>
            </div>

            {/* Flight Telemetry Grid */}
            <div className="grid grid-cols-3 gap-3 text-center my-4">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[10px] text-zinc-400 uppercase font-semibold">
                  Altitude
                </div>
                <div className="text-base font-bold text-white mt-0.5">34,000 ft</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[10px] text-zinc-400 uppercase font-semibold">
                  Speed
                </div>
                <div className="text-base font-bold text-white mt-0.5">542 mph</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[10px] text-zinc-400 uppercase font-semibold">
                  Remaining
                </div>
                <div className="text-base font-bold text-sky-400 mt-0.5">1h 12m</div>
              </div>
            </div>

            {/* Destination Weather */}
            <div className="p-3.5 rounded-2xl bg-sky-950/40 border border-sky-800/40 flex items-center justify-between text-xs text-sky-200 mb-6">
              <div className="flex items-center gap-2">
                <CloudSun className="w-4 h-4 text-sky-400" />
                <span>Los Angeles (LAX) Weather: Sunny, 72°F</span>
              </div>
              <span className="font-semibold text-white">Terminal 4, Gate 42B</span>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 bg-white text-zinc-950 hover:bg-zinc-100 rounded-full font-bold text-xs tracking-tight transition-colors cursor-pointer"
            >
              Close Radar View
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
