"use client";

import React from "react";
import { X } from "lucide-react";

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
            {/* Bunny logo + Drive name */}
            <div className="flex items-center gap-2.5 select-none cursor-pointer">
              <svg
                className="w-8 h-8 text-[#18181B]"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse cx="18" cy="27" rx="14" ry="4" fill="#18181B" />
                <path
                  d="M13 14C11.5 14 10.5 16 10.5 18.5V24.5C11.5 25.8 13.5 26.5 18 26.5C22.5 26.5 24.5 25.8 25.5 24.5V18.5C25.5 16 24.5 14 23 14C21.8 14 21 15.2 20.8 17.5V20.5H15.2V17.5C15 15.2 14.2 14 13 14Z"
                  fill="white"
                  stroke="#18181B"
                  strokeWidth="2.4"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.5 14V7.5C12.5 5.5 13.5 4.5 14.5 4.5C15.5 4.5 16.5 5.5 16.5 7.5V14.5M23.5 14V7.5C23.5 5.5 22.5 4.5 21.5 4.5C20.5 4.5 19.5 5.5 19.5 7.5V14.5"
                  fill="white"
                  stroke="#18181B"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="15.5" cy="21" r="1.3" fill="#18181B" />
                <circle cx="20.5" cy="21" r="1.3" fill="#18181B" />
                <circle cx="18" cy="23" r="0.9" fill="#18181B" />
              </svg>

              <span className="font-extrabold text-[23px] tracking-tight text-[#18181B]">
                Drive
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
              <span>Tesla Model X en route</span>
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
      <div className="md:hidden flex items-center justify-between py-2 px-5">
        <div className="flex items-center gap-2 select-none">
          <svg
            className="w-8 h-8 text-[#18181B]"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="18" cy="27" rx="14" ry="4" fill="#18181B" />
            <path
              d="M13 14C11.5 14 10.5 16 10.5 18.5V24.5C11.5 25.8 13.5 26.5 18 26.5C22.5 26.5 24.5 25.8 25.5 24.5V18.5C25.5 16 24.5 14 23 14C21.8 14 21 15.2 20.8 17.5V20.5H15.2V17.5C15 15.2 14.2 14 13 14Z"
              fill="white"
              stroke="#18181B"
              strokeWidth="2.4"
              strokeLinejoin="round"
            />
            <path
              d="M12.5 14V7.5C12.5 5.5 13.5 4.5 14.5 4.5C15.5 4.5 16.5 5.5 16.5 7.5V14.5M23.5 14V7.5C23.5 5.5 22.5 4.5 21.5 4.5C20.5 4.5 19.5 5.5 19.5 7.5V14.5"
              fill="white"
              stroke="#18181B"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="15.5" cy="21" r="1.3" fill="#18181B" />
            <circle cx="20.5" cy="21" r="1.3" fill="#18181B" />
            <circle cx="18" cy="23" r="0.9" fill="#18181B" />
          </svg>

          <span className="font-extrabold text-[23px] tracking-tight text-[#18181B]">
            Drive
          </span>
        </div>

        <button
          type="button"
          onClick={onReset}
          aria-label="Close trip details"
          className="w-8 h-8 rounded-full flex items-center justify-center text-[#18181B] hover:bg-neutral-100 active:scale-90 transition-all focus:outline-hidden cursor-pointer"
        >
          <X className="w-5 h-5 stroke-[2.4]" />
        </button>
      </div>

      {/* 3-Segment Top Progress Indicator (Mobile only) */}
      <div className="md:hidden grid grid-cols-3 gap-2 px-6 mt-1 mb-4 items-center">
        <div className="h-[2px] bg-neutral-200/90 rounded-full" />
        <div className="h-[4.5px] bg-[#18181B] rounded-full" />
        <div className="h-[2px] bg-neutral-200/90 rounded-full" />
      </div>
    </>
  );
}
