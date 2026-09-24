"use client";

import React from "react";
import { Navigation2 } from "lucide-react";

export function LiveRouteMap() {
  return (
    <div className="hidden md:flex flex-col mt-8 border border-neutral-200 rounded-3xl overflow-hidden bg-neutral-50 shadow-xs">
      <div className="px-5 py-3 bg-neutral-100/70 border-b border-neutral-200 flex items-center justify-between text-xs text-neutral-600 font-medium">
        <div className="flex items-center gap-2">
          <Navigation2 className="w-4 h-4 text-blue-600" />
          <span className="font-semibold text-neutral-900">
            Live Route Overview
          </span>
        </div>
        <span>Drive Shared Pool #402</span>
      </div>
      <div className="relative h-44 w-full bg-[#E5E9EC] flex items-center justify-center overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-60"
          viewBox="0 0 600 200"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 100 Q 150 40 300 120 T 600 80"
            stroke="#CBD5E1"
            strokeWidth="16"
            fill="none"
          />
          <path
            d="M 50 140 Q 200 180 350 100 T 550 160"
            stroke="#CBD5E1"
            strokeWidth="12"
            fill="none"
          />
          <path
            d="M 100 95 Q 250 80 400 110 T 500 90"
            stroke="#3B82F6"
            strokeWidth="6"
            strokeDasharray="8 6"
            fill="none"
          />
        </svg>

        <div className="absolute left-[18%] top-[45%] flex flex-col items-center">
          <span className="px-2 py-0.5 rounded-md bg-blue-600 text-white text-[11px] font-bold shadow-md">
            Pickup (8:15)
          </span>
          <div className="w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow-sm mt-0.5 animate-ping" />
        </div>
        <div className="absolute right-[22%] top-[40%] flex flex-col items-center">
          <span className="px-2 py-0.5 rounded-md bg-neutral-900 text-white text-[11px] font-bold shadow-md">
            Dropoff (8:40)
          </span>
          <div className="w-3 h-3 bg-neutral-900 rounded-full border-2 border-white shadow-sm mt-0.5" />
        </div>
      </div>
    </div>
  );
}
