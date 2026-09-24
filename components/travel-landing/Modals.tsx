"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, CheckCircle2 } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2000);
  };

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
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            className="w-full max-w-sm bg-white rounded-3xl p-6 sm:p-7 shadow-2xl relative border border-zinc-100 text-center"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-900 p-1 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Dual Orb Logo */}
            <div className="flex items-center justify-center gap-1.5 mb-3">
              <div className="w-4 h-4 rounded-full bg-sky-500 shadow-xs" />
              <div className="w-4 h-4 rounded-full bg-sky-300 -ml-2" />
            </div>

            <h3 className="text-xl font-bold text-zinc-900">
              Welcome to Capsule
            </h3>
            <p className="text-xs text-zinc-500 mt-1 mb-6">
              Access your synced flights, passports & itineraries.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="relative">
                <Mail className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-zinc-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#18181B] hover:bg-zinc-800 text-white rounded-full font-semibold text-xs tracking-tight transition-colors cursor-pointer"
              >
                {sent ? "Magic link sent!" : "Continue with Email"}
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-zinc-100 text-[11px] text-zinc-400">
              By continuing you agree to Capsule Terms of Service.
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PricingModal({ isOpen, onClose }: PricingModalProps) {
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
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl relative border border-zinc-100"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-900 p-1 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold text-zinc-900">
              Simple, transparent pricing
            </h3>
            <p className="text-xs text-zinc-500 mt-1 mb-6">
              Store all your documents and flights with zero ads and total privacy.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {/* Free Plan */}
              <div className="p-5 rounded-2xl border border-zinc-200 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase text-zinc-400 tracking-wider">
                    Free
                  </div>
                  <div className="text-2xl font-black text-zinc-900 mt-1">$0</div>
                  <p className="text-[11px] text-zinc-500 mt-1 mb-4">
                    For occasional travelers
                  </p>
                  <ul className="text-xs text-zinc-600 space-y-2">
                    <li className="flex items-center gap-1.5">✓ Up to 5 active trips</li>
                    <li className="flex items-center gap-1.5">✓ Basic flight tracking</li>
                    <li className="flex items-center gap-1.5">✓ Offline document storage</li>
                  </ul>
                </div>
                <button
                  onClick={onClose}
                  className="w-full mt-5 py-2.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 rounded-full font-semibold text-xs cursor-pointer"
                >
                  Current Plan
                </button>
              </div>

              {/* Nomad Pro */}
              <div className="p-5 rounded-2xl border-2 border-sky-500 bg-sky-50/30 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-3 right-3 text-[10px] font-bold bg-sky-500 text-white px-2 py-0.5 rounded-full">
                  POPULAR
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-sky-600 tracking-wider">
                    Nomad Pro
                  </div>
                  <div className="text-2xl font-black text-zinc-900 mt-1">
                    $4.99<span className="text-xs font-medium text-zinc-400">/mo</span>
                  </div>
                  <p className="text-[11px] text-zinc-500 mt-1 mb-4">
                    For frequent flyers & nomads
                  </p>
                  <ul className="text-xs text-zinc-600 space-y-2">
                    <li className="flex items-center gap-1.5 font-medium text-zinc-800">
                      ✓ Unlimited trips & passes
                    </li>
                    <li className="flex items-center gap-1.5 font-medium text-zinc-800">
                      ✓ Live radar delay alerts
                    </li>
                    <li className="flex items-center gap-1.5 font-medium text-zinc-800">
                      ✓ Apple Wallet auto-sync
                    </li>
                    <li className="flex items-center gap-1.5 font-medium text-zinc-800">
                      ✓ Priority customer care
                    </li>
                  </ul>
                </div>
                <button
                  onClick={onClose}
                  className="w-full mt-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-full font-semibold text-xs cursor-pointer shadow-sm"
                >
                  Start 14-Day Free Trial
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
