"use client";

import React from "react";
import { motion } from "framer-motion";

interface CtaButtonsProps {
  onJoin: () => void;
  onReadMore: () => void;
}

export function CtaButtons({ onJoin, onReadMore }: CtaButtonsProps) {
  return (
    <div className="w-full max-w-2xl mx-auto text-center px-4 flex flex-col items-center">
      {/* Subtitle matching exact copy with responsive sizing */}
      <p className="text-[14px] sm:text-[15px] md:text-[16.5px] text-[#52525B] leading-relaxed max-w-md md:max-w-lg mx-auto mb-6 md:mb-8 font-normal">
        Artists can display their masterpieces, and buyers can discover and purchase works that resonate with them.
      </p>

      {/* Two Buttons */}
      <div className="flex items-center justify-center gap-4 sm:gap-6">
        {/* Join for $9.99/m Primary Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onJoin}
          className="rounded-full bg-[#18181B] hover:bg-[#27272A] text-white px-7 sm:px-8 py-3 sm:py-3.5 text-[14px] sm:text-[15px] font-semibold shadow-sm transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-900 cursor-pointer"
        >
          Join for $9.99/m
        </motion.button>

        {/* Read More Secondary Button */}
        <motion.button
          whileHover={{ x: 2 }}
          whileTap={{ scale: 0.97 }}
          onClick={onReadMore}
          className="text-[14px] sm:text-[15px] font-semibold text-[#18181B] hover:text-neutral-600 px-4 py-3 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-900 cursor-pointer"
        >
          Read more
        </motion.button>
      </div>
    </div>
  );
}
