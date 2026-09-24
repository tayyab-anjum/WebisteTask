"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Sparkles, Terminal, Copy, Check, Send } from "lucide-react";

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GetStartedModal({ isOpen, onClose }: GetStartedModalProps) {
  const [handle, setHandle] = useState("");
  const [email, setEmail] = useState("");
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState(false);

  if (!isOpen) return null;

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    const generated = `stg_live_${Math.random().toString(36).substring(2, 10)}${Math.random().toString(36).substring(2, 8)}`;
    setApiKey(generated);
  };

  const handleCopy = () => {
    if (apiKey) {
      navigator.clipboard.writeText(apiKey);
      setCopiedKey(true);
      setTimeout(() => setCopiedKey(false), 2000);
    }
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

        {apiKey ? (
          <div className="py-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-zinc-950 tracking-tight">
              API Key Generated!
            </h3>
            <p className="text-xs text-zinc-500 mt-1 mb-5">
              Your handle <strong>stage.dev/{handle || "developer"}</strong> is reserved.
              Use your secret key to publish data.
            </p>

            <div className="bg-zinc-950 p-4 rounded-2xl text-xs font-mono text-zinc-200 flex items-center justify-between gap-3 mb-6">
              <span className="truncate">{apiKey}</span>
              <button
                onClick={handleCopy}
                className="text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 p-1.5 rounded-lg shrink-0 cursor-pointer"
              >
                {copiedKey ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3.5 bg-zinc-950 text-white font-bold text-sm rounded-xl hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              Done & Launch Studio
            </button>
          </div>
        ) : (
          <div>
            <div className="w-11 h-11 rounded-2xl bg-zinc-950 text-white flex items-center justify-center mb-4">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-black text-zinc-950 tracking-tight">
              Claim Your Developer API
            </h3>
            <p className="text-xs text-zinc-500 mt-1 mb-5">
              Publish projects, blog entries, and metrics directly via REST or GraphQL.
            </p>

            <form onSubmit={handleGenerate} className="space-y-4">
              <div>
                <label className="text-[11px] font-bold text-zinc-700 block mb-1">
                  Choose Username Handle
                </label>
                <div className="flex items-center rounded-xl border border-zinc-200 overflow-hidden focus-within:border-zinc-950">
                  <span className="bg-zinc-50 px-3 py-2.5 text-xs text-zinc-500 border-r border-zinc-200 font-mono">
                    stage.dev/
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="tayyab"
                    value={handle}
                    onChange={(e) => setHandle(e.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, ""))}
                    className="w-full px-3 py-2.5 text-xs font-medium text-zinc-900 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-zinc-700 block mb-1">
                  Work Email (for API alerts)
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@acme.dev"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-xs font-medium text-zinc-900 focus:outline-hidden focus:border-zinc-950"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-sm rounded-xl transition-all cursor-pointer shadow-md"
              >
                Create API Token
              </button>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}

interface ExperienceFutureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ExperienceFutureModal({ isOpen, onClose }: ExperienceFutureModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-xs select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-zinc-100 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-11 h-11 rounded-2xl bg-zinc-950 text-white flex items-center justify-center mb-4">
          <Sparkles className="w-5 h-5 text-amber-400" />
        </div>

        <h3 className="text-2xl font-black text-zinc-950 tracking-tight">
          Experience the Future
        </h3>
        <p className="text-xs text-zinc-500 mt-1 mb-6">
          Stage turns your code commits, star history, and achievements into an automatic living portfolio.
        </p>

        {/* Live Interactive Simulation */}
        <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3 mb-6 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-200">
            <span className="font-bold text-zinc-900">Next.js 15 App Router</span>
            <span className="text-emerald-600 font-mono font-bold">Connected</span>
          </div>
          <div className="flex items-center justify-between pb-2 border-b border-zinc-200">
            <span className="font-bold text-zinc-900">Edge Cache TTL</span>
            <span className="text-zinc-600 font-mono">60s stale-while-revalidate</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-bold text-zinc-900">Recruiter Open Rate</span>
            <span className="text-zinc-900 font-mono font-black">78.4% (+14%)</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3.5 bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-sm rounded-xl transition-all cursor-pointer"
        >
          Close Preview
        </button>
      </motion.div>
    </div>
  );
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [sent, setSent] = useState(false);
  const [msg, setMsg] = useState("");

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 1800);
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

        {sent ? (
          <div className="py-6 flex flex-col items-center text-center">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mb-3" />
            <h3 className="text-xl font-black text-zinc-950">Message Sent!</h3>
            <p className="text-xs text-zinc-500 mt-1">
              Our engineering team will get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-black text-zinc-950 tracking-tight">
              Get in Touch
            </h3>
            <p className="text-xs text-zinc-500 mt-1 mb-5">
              Have questions about enterprise custom blocks or high-volume API quotas?
            </p>

            <form onSubmit={handleSend} className="space-y-4">
              <div>
                <label className="text-[11px] font-bold text-zinc-700 block mb-1">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="How can we help your team?"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  className="w-full p-3 rounded-xl border border-zinc-200 text-xs font-medium text-zinc-900 focus:outline-hidden focus:border-zinc-950 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-sm rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}
