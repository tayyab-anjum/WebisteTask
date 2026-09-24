"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface NavbarProps {
  onScheduleCall: () => void;
}

export function Navbar({ onScheduleCall }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-zinc-200/80 transition-all">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-10 lg:px-16 h-20 sm:h-22 flex items-center justify-between">
        {/* Brand / Home Link */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-zinc-950 flex items-center justify-center text-white shadow-xs font-black text-sm">
            ✦
          </div>
          <span className="font-extrabold text-xl text-zinc-950 tracking-tight font-sans">
            Workflow
          </span>
        </div>

        {/* Schedule a Call CTA */}
        <button
          onClick={onScheduleCall}
          className="group inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-zinc-900 hover:text-zinc-600 transition-colors cursor-pointer px-4 py-2 rounded-full hover:bg-zinc-100/80"
        >
          <span>Schedule a Call</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </header>
  );
}
