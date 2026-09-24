"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plane, Hotel, FileText, Ticket, CheckCircle2, UploadCloud } from "lucide-react";

interface AddDocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddDocumentModal({ isOpen, onClose }: AddDocumentModalProps) {
  const [selectedType, setSelectedType] = useState<"flight" | "hotel" | "passport" | "ticket">("flight");
  const [title, setTitle] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 1400);
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
            initial={{ scale: 0.94, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 10 }}
            className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl relative border border-zinc-100"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-900 p-1 rounded-full cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900">
              Add Your Stuff
            </h3>
            <p className="text-xs text-zinc-500 mt-1 mb-5">
              Sync documents, boarding passes, or bookings directly into SkyHop.
            </p>

            {/* Type Selector */}
            <div className="grid grid-cols-4 gap-2 mb-5">
              {[
                { type: "flight", label: "Flight", icon: Plane },
                { type: "hotel", label: "Hotel", icon: Hotel },
                { type: "passport", label: "ID/Pass", icon: FileText },
                { type: "ticket", label: "Ticket", icon: Ticket },
              ].map((item) => {
                const Icon = item.icon;
                const active = selectedType === item.type;
                return (
                  <button
                    key={item.type}
                    type="button"
                    onClick={() => setSelectedType(item.type as any)}
                    className={`p-2.5 rounded-2xl border text-center flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                      active
                        ? "bg-sky-50 border-sky-500 text-sky-700 shadow-xs"
                        : "border-zinc-200 text-zinc-600 hover:bg-zinc-50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-[11px] font-semibold">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1">
                  Trip / Document Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Flight to Tokyo, Hotel Excelsior"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                />
              </div>

              {/* Upload Drag Drop Area */}
              <div className="border-2 border-dashed border-zinc-200 rounded-2xl p-4 text-center hover:bg-sky-50/50 hover:border-sky-300 transition-colors cursor-pointer">
                <UploadCloud className="w-6 h-6 text-zinc-400 mx-auto mb-1" />
                <div className="text-xs font-semibold text-zinc-700">
                  Drop PDF, Apple PKPass, or image here
                </div>
                <div className="text-[10px] text-zinc-400">
                  Supports boarding passes, confirmations up to 25MB
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 bg-[#18181B] hover:bg-zinc-800 text-white rounded-full font-semibold text-xs tracking-tight transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                {isSaved ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Added to SkyHop!</span>
                  </>
                ) : (
                  <span>Add to SkyHop</span>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
