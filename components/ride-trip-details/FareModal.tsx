"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface FareModalProps {
  isOpen: boolean;
  onClose: () => void;
  ridersCount: number;
  onSelectRiders: (count: number) => void;
  totalFare: number;
}

export function FareModal({
  isOpen,
  onClose,
  ridersCount,
  onSelectRiders,
  totalFare,
}: FareModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-neutral-950/40 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 backdrop-blur-xs"
        >
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl flex flex-col gap-4"
          >
            <div className="w-10 h-1 bg-neutral-300 rounded-full mx-auto sm:hidden" />
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-neutral-900">
                Adjust Fare Split
              </h3>
              <button
                onClick={onClose}
                className="p-1 rounded-full text-neutral-400 hover:text-neutral-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-neutral-500">
              Total route fare is ${totalFare.toFixed(2)}. Select riders sharing this trip:
            </p>

            <div className="grid grid-cols-4 gap-2 pt-1">
              {[1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  onClick={() => onSelectRiders(num)}
                  className={`py-3 rounded-xl border flex flex-col items-center gap-1 transition-all cursor-pointer ${
                    ridersCount === num
                      ? "border-emerald-600 bg-emerald-50 text-emerald-950 font-bold shadow-xs"
                      : "border-neutral-200 hover:border-neutral-300 text-neutral-700"
                  }`}
                >
                  <span className="text-base">{num}</span>
                  <span className="text-[11px] text-neutral-500">
                    ${(totalFare / num).toFixed(2)}/ea
                  </span>
                </button>
              ))}
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl font-semibold text-sm mt-2 cursor-pointer"
            >
              Done
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
