"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Shield } from "lucide-react";

export function BadgesRow() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="flex items-center gap-2.5 mt-3">
      <motion.div
        initial={prefersReducedMotion ? false : { scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 450, damping: 22 }}
        className="inline-flex items-center gap-1.5 bg-[#EFF6FF] text-[#2563EB] px-3.5 py-1.5 rounded-full select-none cursor-default"
      >
        <div className="w-4 h-4 rounded-full bg-[#2563EB] flex items-center justify-center shrink-0">
          <Check className="w-2.5 h-2.5 text-white stroke-[3.2]" />
        </div>
        <span className="text-[13px] font-semibold tracking-tight">
          Verified ID
        </span>
      </motion.div>

      <motion.div
        initial={prefersReducedMotion ? false : { scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 450, damping: 22, delay: 0.08 }}
        className="inline-flex items-center gap-1.5 bg-[#ECFDF5] text-[#16A34A] px-3.5 py-1.5 rounded-full select-none cursor-default"
      >
        <Shield className="w-3.5 h-3.5 text-[#16A34A] fill-current shrink-0" />
        <span className="text-[13px] font-semibold tracking-tight">
          Safe Driver
        </span>
      </motion.div>
    </div>
  );
}
