"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Building,
  DollarSign,
  Calendar,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { PropertyItem } from "./MapCanvas";

// 1. INVEST NOW MODAL
interface InvestModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: PropertyItem | null;
}

export function InvestModal({ isOpen, onClose, property }: InvestModalProps) {
  const [shares, setShares] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen || !property) return null;

  // Numerical share price parser
  const unitPrice = parseInt(property.pricePerShare.replace(/[^0-9]/g, "")) || 20000;
  const totalPrice = unitPrice * shares;
  const projectedReturn = Math.round(totalPrice * 0.108); // 10.8% avg return

  const handleConfirm = () => {
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-xs select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-zinc-100 relative overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-zinc-950">Investment Confirmed!</h3>
            <p className="text-zinc-500 text-sm mt-2 max-w-xs">
              You now own {shares} share{shares > 1 ? "s" : ""} in {property.title}.
              Your portfolio dashboard will update shortly.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3.5 mb-6">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#F43F5E] uppercase tracking-wider">
                  Fractional Ownership
                </span>
                <h3 className="text-lg font-black text-zinc-950 leading-tight">
                  {property.title}
                </h3>
                <p className="text-xs text-zinc-500 font-medium">
                  {property.location} • {property.sqft}
                </p>
              </div>
            </div>

            {/* Share Counter */}
            <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-zinc-100 mb-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-zinc-700">Number of Shares</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setShares(Math.max(1, shares - 1))}
                    className="w-8 h-8 rounded-full bg-white border border-zinc-200 text-zinc-800 font-bold flex items-center justify-center hover:bg-zinc-100 cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-base font-black text-zinc-950 w-6 text-center">
                    {shares}
                  </span>
                  <button
                    onClick={() => setShares(shares + 1)}
                    className="w-8 h-8 rounded-full bg-white border border-zinc-200 text-zinc-800 font-bold flex items-center justify-center hover:bg-zinc-100 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price Calculation */}
              <div className="mt-4 pt-3 border-t border-zinc-200/60 flex items-center justify-between text-xs">
                <span className="text-zinc-500">Price per share</span>
                <span className="font-bold text-zinc-900">{property.pricePerShare}</span>
              </div>
              <div className="mt-1 flex items-center justify-between text-xs">
                <span className="text-zinc-500">Estimated Annual Yield</span>
                <span className="font-bold text-emerald-600">10.8% APY (~${projectedReturn.toLocaleString()}/yr)</span>
              </div>
              <div className="mt-2 pt-2 border-t border-zinc-200/60 flex items-center justify-between">
                <span className="text-sm font-bold text-zinc-950">Total Investment</span>
                <span className="text-xl font-black text-zinc-950">
                  ${totalPrice.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Confirmation CTA */}
            <button
              onClick={handleConfirm}
              className="w-full py-3.5 bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-sm rounded-full transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
            >
              Complete Investment • ${totalPrice.toLocaleString()}
            </button>
            <p className="text-[10px] text-zinc-400 text-center mt-3">
              Protected by SEC-qualified real estate trusts. Instant liquidity options available.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}

// 2. FIND THE BEST FOR YOU / QUIZ MODAL
interface FindBestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onMatched: (matchedProperty: PropertyItem) => void;
}

export function FindBestModal({ isOpen, onClose, onMatched }: FindBestModalProps) {
  const [selectedGoal, setSelectedGoal] = useState("High Dividend Yield");
  const [selectedBudget, setSelectedBudget] = useState("$1,000 - $5,000");

  if (!isOpen) return null;

  const handleMatch = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-xs select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-zinc-100 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-bold text-[#F43F5E] mb-1">
          <Sparkles className="w-4 h-4" />
          <span>AI Property Matcher</span>
        </div>
        <h3 className="text-2xl font-black text-zinc-950 tracking-tight">
          Find Your Perfect Match
        </h3>
        <p className="text-xs text-zinc-500 mt-1">
          Answer two quick questions to let our algorithms pinpoint your ideal real estate assets.
        </p>

        {/* Question 1: Investment Goal */}
        <div className="mt-5">
          <label className="text-xs font-bold text-zinc-800 block mb-2">
            What is your primary investment goal?
          </label>
          <div className="flex flex-col gap-2">
            {[
              "High Dividend Yield (8-12%)",
              "Long-Term Capital Appreciation",
              "Tax Optimization & Balanced Growth",
            ].map((goal) => (
              <button
                key={goal}
                onClick={() => setSelectedGoal(goal)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  selectedGoal === goal
                    ? "border-zinc-950 bg-zinc-950 text-white"
                    : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300"
                }`}
              >
                {goal}
              </button>
            ))}
          </div>
        </div>

        {/* Question 2: Initial Allocation */}
        <div className="mt-5">
          <label className="text-xs font-bold text-zinc-800 block mb-2">
            Initial Capital Allocation
          </label>
          <div className="grid grid-cols-2 gap-2">
            {["$500 - $1,000", "$1,000 - $5,000", "$5,000 - $20,000", "$20,000+"].map(
              (budget) => (
                <button
                  key={budget}
                  onClick={() => setSelectedBudget(budget)}
                  className={`text-center py-2.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    selectedBudget === budget
                      ? "border-zinc-950 bg-zinc-950 text-white"
                      : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300"
                  }`}
                >
                  {budget}
                </button>
              )
            )}
          </div>
        </div>

        <button
          onClick={handleMatch}
          className="w-full mt-6 py-3.5 bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-sm rounded-full transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
        >
          <span>Show My Tailored Properties</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>
    </div>
  );
}

// 3. JOIN / SIGNUP MODAL
interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function JoinModal({ isOpen, onClose }: JoinModalProps) {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setJoined(true);
    setTimeout(() => {
      setJoined(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-xs select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-sm bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-zinc-100 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {joined ? (
          <div className="py-8 flex flex-col items-center text-center">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mb-3" />
            <h3 className="text-xl font-bold text-zinc-950">Welcome to Brickwise!</h3>
            <p className="text-xs text-zinc-500 mt-1">
              Check your inbox to verify your accredited investor account.
            </p>
          </div>
        ) : (
          <div>
            <div className="w-10 h-10 rounded-2xl bg-zinc-950 text-white flex items-center justify-center mb-4">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-black text-zinc-950 tracking-tight">
              Join Brickwise
            </h3>
            <p className="text-xs text-zinc-500 mt-1">
              Start building a fractional real estate portfolio with high-yield US properties.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-xs font-medium text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden focus:border-zinc-950"
              />

              <button
                type="submit"
                className="w-full py-3 bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs rounded-full transition-all cursor-pointer shadow-md"
              >
                Create Free Account
              </button>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}

// 4. "WHAT IS ARRIVED?" EXPLANATION MODAL
interface WhatIsArrivedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WhatIsArrivedModal({ isOpen, onClose }: WhatIsArrivedModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-xs select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-zinc-100 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C]" />
          <span className="text-xs font-bold text-zinc-800 uppercase tracking-wider">
            Fractional Real Estate
          </span>
        </div>

        <h3 className="text-2xl font-black text-zinc-950 tracking-tight">
          What is Fractional Investing?
        </h3>

        <div className="mt-4 space-y-3.5 text-xs text-zinc-600 leading-relaxed">
          <p>
            Traditionally, purchasing residential rental homes and oceanfront villas required hundreds of thousands of dollars in down payments, mortgages, and tenant management.
          </p>
          <p>
            With <strong>Brickwise</strong>, properties are securitized into fractional shares starting as low as $500. You earn proportional rental income directly deposited each month, plus benefit from long-term property appreciation.
          </p>
          <div className="bg-[#F8FAFC] p-3.5 rounded-2xl border border-zinc-100 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <p className="text-[11px] text-zinc-600">
              Fully SEC-compliant, hands-off property management, and professional maintenance handled end-to-end.
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-6 py-3 bg-zinc-950 text-white font-bold text-xs rounded-full cursor-pointer hover:bg-zinc-800 transition-colors"
        >
          Got It, Thanks!
        </button>
      </motion.div>
    </div>
  );
}
