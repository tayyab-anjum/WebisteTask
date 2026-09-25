"use client";

import React from "react";
import { X, Car } from "lucide-react";

interface NavbarProps {
  onReset: () => void;
}

export function Navbar({ onReset }: NavbarProps) {
  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:flex border-b border-neutral-200/80 bg-white/95 sticky top-0 z-30 backdrop-blur-md px-6 lg:px-12 py-3.5 items-center justify-between">
        <div className="flex items-center gap-8 max-w-7xl mx-auto w-full justify-between">
          <div className="flex items-center gap-8">
            {/* Car Logo + Glide Name */}
            <div className="flex items-center gap-2.5 select-none cursor-pointer">
              <div className="w-8 h-8 rounded-xl bg-[#18181B] flex items-center justify-center text-white shadow-xs">
                <Car className="w-4.5 h-4.5 text-white stroke-[2.2]" />
              </div>

              <span className="font-extrabold text-[23px] tracking-tight text-[#18181B]">
                Glide
              </span>
            </div>

            <nav className="flex items-center gap-6 text-sm font-medium text-neutral-600">
              <span className="text-[#18181B] font-semibold cursor-pointer">
                Ride Details
              </span>
              <span className="hover:text-[#18181B] cursor-pointer transition-colors">
                Find Rides
              </span>
              <span className="hover:text-[#18181B] cursor-pointer transition-colors">
                Safety & Badges
              </span>
              <span className="hover:text-[#18181B] cursor-pointer transition-colors">
                Support
              </span>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-700 bg-neutral-100 px-3.5 py-1.5 rounded-full border border-neutral-200/60">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>CyberEV Model X en route</span>
            </div>
            <button
              onClick={onReset}
              aria-label="Reset trip"
              className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Top Navigation */}
      <div className="md:hidden flex items-center justify-between pt-1.5 pb-1 px-4">
        <div className="flex items-center gap-2 select-none">
          <div className="w-6.5 h-6.5 rounded-lg bg-[#18181B] flex items-center justify-center text-white shadow-xs">
            <Car className="w-3.5 h-3.5 text-white stroke-[2.2]" />
          </div>

          <span className="font-extrabold text-[20px] tracking-tight text-[#18181B]">
            Glide
          </span>
        </div>

        <button
          type="button"
          onClick={onReset}
          aria-label="Close trip details"
          className="w-7 h-7 rounded-full flex items-center justify-center text-[#18181B] hover:bg-neutral-100 active:scale-90 transition-all focus:outline-hidden cursor-pointer"
        >
          <X className="w-4.5 h-4.5 stroke-[2.4]" />
        </button>
      </div>

      {/* Center Drag Handle matching reference mockup */}
      <div className="md:hidden w-14 h-1 bg-[#18181B] rounded-full mx-auto mt-0.5 mb-2" />
    </>
  );
}
