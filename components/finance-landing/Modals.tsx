"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUp, ArrowDown, ArrowLeftRight, Check, QrCode, Copy } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SendModal({ isOpen, onClose }: ModalProps) {
  const [amount, setAmount] = useState("250.00");
  const [recipient, setRecipient] = useState("alex@finsuite.io");
  const [sent, setSent] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-neutral-950/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs select-none"
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl relative border border-zinc-100"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-900 p-1 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-10 h-10 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center mb-3">
              <ArrowUp className="w-5 h-5" />
            </div>

            <h3 className="text-xl font-bold text-zinc-950">Send Money Instantly</h3>
            <p className="text-xs text-zinc-500 mt-1 mb-5">
              Available balance: $9,823.28 (0% transfer fee)
            </p>

            <form onSubmit={handleSend} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1">
                  Recipient Email or FinTag
                </label>
                <input
                  type="text"
                  required
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1">
                  Amount (USD)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-zinc-400">
                    $
                  </span>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full pl-8 pr-3.5 py-2.5 rounded-xl border border-zinc-200 text-lg font-bold text-zinc-900 focus:outline-hidden focus:ring-2 focus:ring-[#2563EB]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 bg-[#09090b] hover:bg-zinc-800 text-white rounded-full font-semibold text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {sent ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Sent Successfully!</span>
                  </>
                ) : (
                  <span>Send ${amount}</span>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ReceiveModal({ isOpen, onClose }: ModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-neutral-950/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs select-none"
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl relative border border-zinc-100 text-center"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-900 p-1 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-3">
              <ArrowDown className="w-5 h-5" />
            </div>

            <h3 className="text-xl font-bold text-zinc-950">Receive Money</h3>
            <p className="text-xs text-zinc-500 mt-1 mb-5">
              Scan QR code or share your personal deposit link.
            </p>

            <div className="w-44 h-44 mx-auto p-4 bg-zinc-50 rounded-2xl border border-zinc-200 flex flex-col items-center justify-center mb-4">
              <QrCode className="w-32 h-32 text-zinc-900" />
            </div>

            <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200 flex items-center justify-between text-xs text-zinc-600 mb-4">
              <span className="font-mono truncate">finsuite.me/@alex_vault</span>
              <button
                onClick={handleCopy}
                className="text-[#2563EB] hover:text-blue-700 font-semibold flex items-center gap-1 cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="w-full py-2.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 rounded-full font-semibold text-xs transition-colors cursor-pointer"
            >
              Done
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ConvertModal({ isOpen, onClose }: ModalProps) {
  const [fromAmount, setFromAmount] = useState("1000");
  const rate = 0.92; // USD to EUR
  const toAmount = (parseFloat(fromAmount || "0") * rate).toFixed(2);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-neutral-950/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs select-none"
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl relative border border-zinc-100"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-900 p-1 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-10 h-10 rounded-full bg-purple-50 text-[#9333EA] flex items-center justify-center mb-3">
              <ArrowLeftRight className="w-5 h-5" />
            </div>

            <h3 className="text-xl font-bold text-zinc-950">Currency Exchange</h3>
            <p className="text-xs text-zinc-500 mt-1 mb-5">
              Live mid-market rate: 1 USD = 0.92 EUR
            </p>

            <div className="flex flex-col gap-3 mb-5">
              <div className="p-3 bg-zinc-50 rounded-2xl border border-zinc-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-zinc-400">
                    You Send
                  </span>
                  <input
                    type="number"
                    value={fromAmount}
                    onChange={(e) => setFromAmount(e.target.value)}
                    className="w-28 text-xl font-black text-zinc-900 bg-transparent focus:outline-hidden"
                  />
                </div>
                <span className="text-sm font-bold bg-white px-3 py-1 rounded-full border border-zinc-200">
                  USD 🇺🇸
                </span>
              </div>

              <div className="p-3 bg-zinc-50 rounded-2xl border border-zinc-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-zinc-400">
                    You Get
                  </span>
                  <div className="text-xl font-black text-emerald-600">{toAmount}</div>
                </div>
                <span className="text-sm font-bold bg-white px-3 py-1 rounded-full border border-zinc-200">
                  EUR 🇪🇺
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 bg-[#09090b] hover:bg-zinc-800 text-white rounded-full font-semibold text-xs tracking-tight transition-all cursor-pointer"
            >
              Confirm Conversion
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function GetStartedModal({ isOpen, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-neutral-950/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs select-none"
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            className="w-full max-w-md bg-white rounded-3xl p-7 shadow-2xl relative border border-zinc-100"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-900 p-1 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold text-zinc-950">Start with ApexVault</h3>
            <p className="text-xs text-zinc-500 mt-1 mb-6">
              Create your financial management account in under 2 minutes.
            </p>

            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#2563EB]"
              />
              <input
                type="email"
                placeholder="Work Email"
                className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#2563EB]"
              />
              <input
                type="password"
                placeholder="Create Password"
                className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#2563EB]"
              />
              <button
                onClick={onClose}
                className="w-full mt-2 py-3 bg-[#09090b] hover:bg-zinc-800 text-white rounded-full font-semibold text-sm transition-all cursor-pointer shadow-md"
              >
                Create Free Account
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
