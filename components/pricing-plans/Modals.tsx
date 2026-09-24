"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Calendar, Clock, CreditCard, Sparkles } from "lucide-react";

interface ScheduleCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ScheduleCallModal({ isOpen, onClose }: ScheduleCallModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("Tomorrow at 2:00 PM");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/50 backdrop-blur-xs select-none">
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

        {submitted ? (
          <div className="py-8 flex flex-col items-center text-center">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mb-3" />
            <h3 className="text-xl font-black text-zinc-950">Call Scheduled!</h3>
            <p className="text-xs text-zinc-500 mt-1 max-w-xs">
              We have sent a calendar invite to <strong>{email}</strong> for {date}.
            </p>
          </div>
        ) : (
          <div>
            <div className="w-10 h-10 rounded-2xl bg-zinc-950 text-white flex items-center justify-center mb-4">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-black text-zinc-950 tracking-tight">
              Schedule a Call
            </h3>
            <p className="text-xs text-zinc-500 mt-1">
              Discuss enterprise custom workflows, API limits, and dedicated team onboarding.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
              <div>
                <label className="text-[11px] font-bold text-zinc-700 block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Sarah Connor"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-xs font-medium text-zinc-900 focus:outline-hidden focus:border-zinc-950"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-zinc-700 block mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="sarah@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-xs font-medium text-zinc-900 focus:outline-hidden focus:border-zinc-950"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-zinc-700 block mb-1">
                  Preferred Time
                </label>
                <select
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-xs font-medium text-zinc-900 focus:outline-hidden focus:border-zinc-950"
                >
                  <option>Tomorrow at 10:00 AM</option>
                  <option>Tomorrow at 2:00 PM</option>
                  <option>In 2 days at 11:30 AM</option>
                  <option>In 3 days at 4:00 PM</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs rounded-full transition-all cursor-pointer shadow-md"
              >
                Confirm Call Booking
              </button>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}

interface PlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  price: string;
  isAnnual: boolean;
}

export function PlanModal({
  isOpen,
  onClose,
  planName,
  price,
  isAnnual,
}: PlanModalProps) {
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = () => {
    setConfirmed(true);
    setTimeout(() => {
      setConfirmed(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/50 backdrop-blur-xs select-none">
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

        {confirmed ? (
          <div className="py-8 flex flex-col items-center text-center">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mb-3" />
            <h3 className="text-xl font-black text-zinc-950">Subscription Active!</h3>
            <p className="text-xs text-zinc-500 mt-1">
              You are now subscribed to the <strong>{planName}</strong> plan.
            </p>
          </div>
        ) : (
          <div>
            <div className="w-10 h-10 rounded-2xl bg-zinc-950 text-white flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-black text-zinc-950 tracking-tight">
              {planName} Plan
            </h3>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="text-3xl font-black text-zinc-950">{price}</span>
              <span className="text-xs text-zinc-400 font-medium">
                {isAnnual ? "/month (billed annually)" : "/month"}
              </span>
            </div>

            <div className="my-6 p-4 rounded-2xl bg-zinc-50 border border-zinc-100 space-y-2 text-xs text-zinc-600">
              <div className="flex justify-between">
                <span>Instant activation</span>
                <span className="font-bold text-zinc-900">Yes</span>
              </div>
              <div className="flex justify-between">
                <span>Cancel anytime</span>
                <span className="font-bold text-zinc-900">Yes</span>
              </div>
              <div className="flex justify-between">
                <span>Full tool suite</span>
                <span className="font-bold text-zinc-900">Included</span>
              </div>
            </div>

            <button
              onClick={handleConfirm}
              className="w-full py-3 bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs rounded-full transition-all cursor-pointer shadow-md"
            >
              Confirm Subscription
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
