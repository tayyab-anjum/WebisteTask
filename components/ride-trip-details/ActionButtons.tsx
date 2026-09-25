"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, CheckCircle2 } from "lucide-react";

interface ActionButtonsProps {
  hasJoined: boolean;
  onCall: () => void;
  onJoin: () => void;
}

export function ActionButtons({
  hasJoined,
  onCall,
  onJoin,
}: ActionButtonsProps) {
  return (
    <div className="pt-2 sm:pt-3.5 md:pt-5 pb-0.5 flex items-center gap-2.5 sm:gap-3">
      {/* Phone Call Button */}
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.92 }}
        onClick={onCall}
        aria-label="Call Lara Larsson"
        className="w-11 h-11 sm:w-13 sm:h-13 md:w-15 md:h-15 rounded-2xl md:rounded-[22px] bg-[#F3F4F6] hover:bg-[#E5E7EB] active:bg-[#D1D5DB] flex items-center justify-center text-[#18181B] transition-colors shrink-0 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-900 cursor-pointer"
      >
        <Phone className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-current rotate-[12deg]" />
      </motion.button>

      {/* Join Ride Main Button */}
      <motion.button
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.97 }}
        onClick={onJoin}
        className={`flex-1 h-11 sm:h-13 md:h-15 rounded-full text-[14px] sm:text-[15px] md:text-[16px] font-semibold tracking-tight transition-all flex items-center justify-center gap-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-900 cursor-pointer ${
          hasJoined
            ? "bg-[#16A34A] text-white shadow-md shadow-green-600/20"
            : "bg-[#373737] hover:bg-[#252525] text-white shadow-sm"
        }`}
      >
        {hasJoined ? (
          <>
            <CheckCircle2 className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
            <span>Ride Joined!</span>
          </>
        ) : (
          "Join Ride"
        )}
      </motion.button>
    </div>
  );
}
