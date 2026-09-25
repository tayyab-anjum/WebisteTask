"use client";

import React from "react";
import { motion } from "framer-motion";

interface FareSplitCardProps {
  farePerSeat: string;
  ridersCount: number;
  onOpenModal: () => void;
}

export function FareSplitCard({
  farePerSeat,
  ridersCount,
  onOpenModal,
}: FareSplitCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={onOpenModal}
      style={{
        background:
          "linear-gradient(180deg, #E6F7ED 0%, #F3FAF6 55%, #FAFCFB 100%)",
      }}
      className="rounded-2xl sm:rounded-[28px] py-2 sm:py-3.5 md:py-5 px-3.5 sm:px-6 text-center cursor-pointer relative overflow-hidden group select-none transition-all shadow-xs border border-emerald-100/80 hover:border-emerald-200"
    >
      <div className="text-[11.5px] sm:text-[13px] font-medium text-[#2E7D32] tracking-wide mb-0.5 sm:mb-1">
        Fare Split
      </div>
      <div className="flex items-baseline justify-center">
        <span className="text-[26px] sm:text-[34px] md:text-[42px] font-black text-[#18181B] tracking-tight leading-none">
          ${farePerSeat}
        </span>
        <span className="text-[14px] sm:text-[16px] md:text-[17px] font-medium text-[#4B5563] ml-1">
          /seat
        </span>
      </div>
      <div className="mt-1 sm:mt-2 md:mt-2.5 inline-block bg-neutral-200/60 hover:bg-neutral-200 transition-colors px-2.5 sm:px-3.5 py-0.5 rounded-full text-[11px] sm:text-[12px] text-[#6B7280] font-normal">
        × {ridersCount} riders (click to adjust)
      </div>
    </motion.div>
  );
}
