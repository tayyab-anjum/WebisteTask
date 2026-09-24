"use client";

import React from "react";
import { motion } from "framer-motion";

interface SetReminderRowProps {
  reminderSet: boolean;
  onToggleReminder: () => void;
}

export function SetReminderRow({
  reminderSet,
  onToggleReminder,
}: SetReminderRowProps) {
  return (
    <div className="mt-4 md:mt-5 flex items-center justify-between py-1 px-0.5">
      <div className="flex flex-col pr-3">
        <span className="text-[15px] font-bold text-[#18181B] leading-snug">
          Set Reminder
        </span>
        <span className="text-[12.5px] text-[#71717A] leading-relaxed mt-0.5">
          Get notified 10 minutes before pickup
          <br />
          so you&apos;re ready on time.
        </span>
      </div>
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.94 }}
        onClick={onToggleReminder}
        className={`px-6 py-2.5 rounded-full text-[14px] font-semibold transition-all shrink-0 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-900 ${
          reminderSet
            ? "bg-[#16A34A] text-white shadow-xs"
            : "bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#18181B]"
        }`}
      >
        {reminderSet ? "Set ✓" : "Set"}
      </motion.button>
    </div>
  );
}
