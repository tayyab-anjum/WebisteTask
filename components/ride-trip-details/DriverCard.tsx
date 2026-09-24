"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface DriverCardProps {
  name: string;
  vehicle: string;
  rating: string;
  totalRides: number;
  plate: string;
}

export function DriverCard({
  name,
  vehicle,
  rating,
  totalRides,
  plate,
}: DriverCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#F8F8FA] rounded-[24px] p-4 md:p-5 flex flex-col gap-2 border border-neutral-100 shadow-2xs"
    >
      {/* Row 1: Avatar + Name & Vehicle */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#FDE8EF] flex items-center justify-center shrink-0">
            <svg
              className="w-4.5 h-4.5 md:w-5 md:h-5 text-[#F472B6] fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <span className="font-semibold text-[15.5px] md:text-[17px] text-[#18181B] tracking-tight">
            {name}
          </span>
        </div>
        <div className="text-[13px] md:text-[14px] text-[#8E8E93] font-normal">
          {vehicle}
        </div>
      </div>

      {/* Row 2: Rating + Plate number */}
      <div className="flex items-center justify-between text-[13px] md:text-[14px]">
        <div className="flex items-center gap-1 pl-0.5">
          <span className="text-[#2563EB] font-bold text-[14px]">★</span>
          <span className="font-semibold text-[#2563EB] text-[13.5px] md:text-[14px]">
            {rating}
          </span>
          <span className="text-[#8E8E93] text-[13px]">• ({totalRides} rides)</span>
        </div>
        <div className="text-[13px] md:text-[14px]">
          <span className="text-[#8E8E93]">Plate: </span>
          <span className="font-medium text-[#18181B]">{plate}</span>
        </div>
      </div>
    </motion.div>
  );
}
