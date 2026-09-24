"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Sparkles } from "lucide-react";
import { CardData } from "./ArtworkCard";

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function JoinModal({ isOpen, onClose }: JoinModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-neutral-950/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl relative"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-neutral-400 hover:text-neutral-900 p-1 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-teal-600 mb-2">
              <Sparkles className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Artist Membership
              </span>
            </div>

            <h3 className="text-2xl font-bold text-neutral-900">
              Join Pallet Ross Pro
            </h3>
            <p className="text-sm text-neutral-500 mt-1">
              Showcase your portfolio, sell directly to global art collectors, and get featured.
            </p>

            <div className="my-6 p-4 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-baseline justify-between">
              <div>
                <span className="text-3xl font-black text-neutral-900">$9.99</span>
                <span className="text-sm text-neutral-500 font-medium">/month</span>
              </div>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-full">
                7-day free trial
              </span>
            </div>

            <div className="flex flex-col gap-2.5 text-xs text-neutral-600 mb-6">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Unlimited 4K artwork uploads & custom gallery layout</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>0% commission on direct buyer transactions</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Custom verified profile tag (like @coplin, @andrea)</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white rounded-full font-semibold text-sm transition-all cursor-pointer shadow-md"
            >
              Start 7-Day Free Trial
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface ArtworkModalProps {
  card: CardData | null;
  onClose: () => void;
}

export function ArtworkModal({ card, onClose }: ArtworkModalProps) {
  return (
    <AnimatePresence>
      {card && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-neutral-950/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl relative flex flex-col items-center"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 p-1 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-1">
              Featured Artwork
            </div>
            <h3 className="text-xl font-bold text-neutral-900 text-center mb-1">
              {card.title}
            </h3>
            <p className="text-xs text-neutral-500 mb-4">By {card.artist}</p>

            <div className="w-48 h-64 rounded-2xl overflow-hidden shadow-lg border border-neutral-200 mb-5 relative bg-neutral-900">
              <img
                src={card.imageSrc}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full font-medium text-xs cursor-pointer"
              >
                Inquire & Purchase
              </button>
              <button
                onClick={onClose}
                className="px-4 py-3 border border-neutral-200 hover:bg-neutral-50 rounded-full font-medium text-xs cursor-pointer text-neutral-700"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
