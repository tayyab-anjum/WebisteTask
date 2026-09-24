"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mic, Volume2, PhoneOff } from "lucide-react";

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
  driverName: string;
  vehicle: string;
  plate: string;
}

export function CallModal({
  isOpen,
  onClose,
  driverName,
  vehicle,
  plate,
}: CallModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-neutral-950/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-sm bg-neutral-900 text-white rounded-3xl p-8 flex flex-col justify-between shadow-2xl"
          >
            <div className="text-center mt-4 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#F472B6]/20 border-2 border-[#F472B6] flex items-center justify-center mb-4 animate-pulse">
                <Phone className="w-9 h-9 text-[#F472B6] fill-current" />
              </div>
              <h3 className="text-2xl font-bold">{driverName}</h3>
              <p className="text-neutral-400 text-sm mt-1">Calling driver...</p>
              <p className="text-xs text-neutral-500 mt-0.5">
                {vehicle} • Plate {plate}
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-10">
              <div className="flex justify-around text-neutral-400">
                <div className="flex flex-col items-center gap-2">
                  <button className="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 cursor-pointer">
                    <Mic className="w-6 h-6" />
                  </button>
                  <span className="text-xs">Mute</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <button className="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 cursor-pointer">
                    <Volume2 className="w-6 h-6" />
                  </button>
                  <span className="text-xs">Speaker</span>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={onClose}
                  className="w-16 h-16 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center shadow-lg transition-transform active:scale-90 cursor-pointer"
                >
                  <PhoneOff className="w-7 h-7 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
