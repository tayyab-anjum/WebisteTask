"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Bed,
  Bath,
  Maximize2,
  ArrowUpRight,
  X,
} from "lucide-react";

export interface PropertyItem {
  id: string;
  pinNumber?: number;
  title: string;
  location: string;
  sqft: string;
  beds: string;
  baths: string;
  pricePerShare: string;
  image: string;
  isNew?: boolean;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
}

interface MapCanvasProps {
  properties: PropertyItem[];
  selectedProperty: PropertyItem;
  onSelectProperty: (property: PropertyItem) => void;
  onInvestNow: (property: PropertyItem) => void;
}

export function MapCanvas({
  properties,
  selectedProperty,
  onSelectProperty,
  onInvestNow,
}: MapCanvasProps) {
  const [isMobileCardOpen, setIsMobileCardOpen] = useState(true);

  const handleSelectPin = (prop: PropertyItem) => {
    onSelectProperty(prop);
    setIsMobileCardOpen(true);
  };

  return (
    <div className="relative w-full h-[750px] sm:h-[840px] lg:h-[920px] overflow-hidden select-none bg-gradient-to-b from-white via-[#FAFBFD] to-white">
      {/* Elegant, Clean Minimalist Architectural & Topographic Map Canvas */}
      <svg
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Subtle Dot Matrix Pattern */}
          <pattern id="dotMatrix" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1.2" fill="#E2E8F0" />
          </pattern>

          {/* Soft Top/Bottom Fade Vignette */}
          <linearGradient id="softEdgeFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="12%" stopColor="#FFFFFF" stopOpacity="0.0" />
            <stop offset="88%" stopColor="#FFFFFF" stopOpacity="0.0" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.95" />
          </linearGradient>

          {/* Water Gradient */}
          <linearGradient id="waterGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#EEF4FA" />
            <stop offset="100%" stopColor="#E2EAF2" />
          </linearGradient>
        </defs>

        {/* Ambient Base Canvas */}
        <rect width="1920" height="1080" fill="#FAFBFD" />
        <rect width="1920" height="1080" fill="url(#dotMatrix)" opacity="0.7" />

        {/* Serene Coastline & Coastal Water Channel */}
        <path
          d="M 840 -60 
             C 860 180, 890 380, 940 550 
             C 990 710, 1050 860, 1100 1160 
             L 1280 1160 
             C 1220 860, 1150 710, 1080 550 
             C 1020 380, 980 180, 960 -60 Z"
          fill="url(#waterGrad)"
          stroke="#CBD5E1"
          strokeWidth="1.5"
        />

        {/* Gentle Estuary Inlet */}
        <path
          d="M 940 550 
             C 810 590, 640 640, 500 720 
             C 430 760, 390 810, 320 880
             L 370 930
             C 430 860, 480 810, 540 770
             C 670 690, 830 640, 970 590 Z"
          fill="url(#waterGrad)"
          stroke="#CBD5E1"
          strokeWidth="1.5"
        />

        {/* Smooth Topographic Elevation Contours (Organic Architectural Flow) */}
        <g stroke="#E2E8F0" strokeWidth="1.2" fill="none" opacity="0.85">
          <path d="M -50 220 Q 420 180, 820 250 T 1650 260 T 1980 240" />
          <path d="M -50 340 Q 460 300, 840 370 T 1670 380 T 1980 360" />
          <path d="M -50 480 Q 480 430, 860 500 T 1680 520 T 1980 490" />
          <path d="M -50 640 Q 520 600, 900 660 T 1700 680 T 1980 650" />
          <path d="M -50 800 Q 540 760, 940 820 T 1720 840 T 1980 810" />

          {/* Organic Concentric Curves around West Hills */}
          <ellipse cx="360" cy="420" rx="220" ry="140" strokeDasharray="3 3" />
          <ellipse cx="360" cy="420" rx="140" ry="90" />
          <ellipse cx="360" cy="420" rx="70" ry="45" />

          {/* Organic Concentric Curves around East Coastline */}
          <ellipse cx="1540" cy="460" rx="260" ry="160" strokeDasharray="3 3" />
          <ellipse cx="1540" cy="460" rx="170" ry="105" />
          <ellipse cx="1540" cy="460" rx="85" ry="55" />
        </g>

        {/* Subtle, Elegant Bridge Connectors */}
        <g stroke="#94A3B8" strokeWidth="3" strokeLinecap="round">
          <line x1="885" y1="318" x2="985" y2="328" />
          <line x1="920" y1="522" x2="1015" y2="532" />
          <line x1="1035" y1="845" x2="1130" y2="855" />
        </g>

        {/* Clean, Understated District Typography */}
        <g fill="#94A3B8" fontSize="13" fontWeight="700" letterSpacing="0.12em" opacity="0.75" fontFamily="sans-serif">
          <text x="680" y="960">JERSEY CITY</text>
          <text x="1280" y="970">NEW YORK</text>
          <text x="320" y="320">OAKRIDGE HILLS</text>
          <text x="1460" y="310">QUEENS DISTRICT</text>
          <text x="460" y="780">HUDSON HARBOR</text>
          <text x="1500" y="720">BROOKLYN COAST</text>
        </g>

        {/* Top & Bottom Soft Blend Vignette */}
        <rect width="1920" height="1080" fill="url(#softEdgeFade)" />
      </svg>

      {/* Scattered Circular Thumbnail Property Pins */}
      {properties.map((prop) => {
        const isSelected = selectedProperty.id === prop.id;
        return (
          <div
            key={prop.id}
            style={{ left: `${prop.x}%`, top: `${prop.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <motion.button
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSelectPin(prop)}
              className={`relative cursor-pointer group focus:outline-hidden transition-all duration-300 ${
                isSelected ? "scale-110" : "opacity-90 hover:opacity-100"
              }`}
            >
              {/* Outer Pulse Ring when selected */}
              {isSelected && (
                <span className="absolute -inset-2 rounded-full bg-zinc-950/15 animate-ping" />
              )}

              {/* Circular Photo Pin with crisp white ring and soft shadow */}
              <div
                className={`w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full p-[2.5px] sm:p-[3px] bg-white shadow-lg transition-all ${
                  isSelected
                    ? "ring-3 ring-zinc-950 shadow-xl"
                    : "hover:ring-2 hover:ring-zinc-400 shadow-md"
                }`}
              >
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src={prop.image}
                    alt={prop.title}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Pin price tag pill underneath */}
              <div className="mt-1 bg-white/95 backdrop-blur-xs border border-zinc-200/80 text-zinc-900 text-[10px] sm:text-[11px] font-black px-2 py-0.5 rounded-full shadow-xs whitespace-nowrap pointer-events-none text-center">
                {prop.pricePerShare}
              </div>

              {/* Hover Tooltip showing title and location (Desktop) */}
              <div className="hidden sm:block absolute left-1/2 -bottom-9 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap bg-zinc-900 text-white text-xs font-semibold px-2.5 py-1 rounded-lg shadow-xl z-30">
                {prop.title} • {prop.location}
              </div>
            </motion.button>
          </div>
        );
      })}

      {/* Central Active Location Pin with badge "20" (Matching reference) */}
      <div
        style={{ left: `${selectedProperty.x}%`, top: `${selectedProperty.y + 4}%` }}
        className="absolute -translate-x-1/2 -translate-y-1/2 z-25 pointer-events-none transition-all duration-500 ease-out"
      >
        <div className="relative flex flex-col items-center">
          {/* Black Circular Pin with "20" */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-950 text-white font-black text-xs sm:text-sm flex items-center justify-center shadow-2xl border-2 border-white">
            {selectedProperty.pinNumber || 20}
          </div>
          {/* Downward pointer triangle */}
          <div className="w-0 h-0 border-l-[5px] sm:border-l-[6px] border-l-transparent border-r-[5px] sm:border-r-[6px] border-r-transparent border-t-[7px] sm:border-t-[8px] border-t-zinc-950 -mt-[1px]" />
          {/* Pulsing ground shadow */}
          <div className="w-5 sm:w-6 h-1.5 sm:h-2 bg-zinc-950/20 rounded-full blur-[2px] mt-0.5" />
        </div>
      </div>

      {/* DESKTOP SPOTLIGHT PROPERTY CARD (Centered above pin on sm screens and up) */}
      <div className="hidden sm:block absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 z-30 w-full max-w-[400px] lg:max-w-[430px] px-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProperty.id}
            initial={{ opacity: 0, y: 15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="w-full bg-white rounded-3xl p-4 sm:p-5 shadow-2xl border border-zinc-200/90 hover:shadow-3xl transition-shadow"
          >
            {/* Top Property Image with "New" Badge */}
            <div className="relative w-full h-48 sm:h-54 md:h-60 rounded-2xl overflow-hidden group">
              <Image
                src={selectedProperty.image}
                alt={selectedProperty.title}
                fill
                priority
                loading="eager"
                sizes="(max-width: 640px) 360px, 430px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* "New" Badge on top right */}
              {selectedProperty.isNew && (
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-zinc-950 font-black text-xs px-3 py-1 rounded-full shadow-md">
                  New
                </div>
              )}
            </div>

            {/* Property Information */}
            <div className="pt-4 pb-1 px-1">
              <h3 className="text-base sm:text-lg md:text-xl font-black text-zinc-950 tracking-tight leading-tight">
                {selectedProperty.title}
              </h3>

              {/* Location */}
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-zinc-500 font-semibold mt-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>{selectedProperty.location}</span>
              </div>

              {/* Specs: sqft, bed, bath */}
              <div className="flex items-center gap-4 text-xs sm:text-sm text-zinc-600 font-semibold mt-3 py-2 border-y border-zinc-100">
                <div className="flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{selectedProperty.sqft}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Bed className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{selectedProperty.beds}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Bath className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{selectedProperty.baths}</span>
                </div>
              </div>

              {/* Price & Invest Now CTA Button */}
              <div className="flex items-center justify-between mt-4 pt-1">
                <div>
                  <span className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight">
                    {selectedProperty.pricePerShare}
                  </span>
                  <span className="text-xs sm:text-sm text-zinc-400 font-semibold ml-1.5">
                    /share
                  </span>
                </div>

                <button
                  onClick={() => onInvestNow(selectedProperty)}
                  className="bg-zinc-950 hover:bg-zinc-800 text-white text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-150 shadow-sm hover:shadow-lg cursor-pointer active:scale-95 flex items-center gap-1.5"
                >
                  <span>Invest Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* MOBILE COMPACT SPOTLIGHT DOCK (Anchored at the bottom so other pins are 100% visible!) */}
      <div className="sm:hidden absolute bottom-4 inset-x-3 z-35">
        <AnimatePresence>
          {isMobileCardOpen && (
            <motion.div
              key={selectedProperty.id}
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-full bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-2xl border border-zinc-200/90 flex items-center justify-between gap-3 relative"
            >
              {/* Dismiss Button so user can explore map freely */}
              <button
                onClick={() => setIsMobileCardOpen(false)}
                className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-zinc-900 text-white flex items-center justify-center shadow-md text-xs cursor-pointer hover:bg-zinc-800"
                aria-label="Close preview"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              {/* Thumbnail + Info */}
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-zinc-100">
                  <Image
                    src={selectedProperty.image}
                    alt={selectedProperty.title}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                  {selectedProperty.isNew && (
                    <span className="absolute top-1 right-1 bg-zinc-950 text-white text-[8px] font-black px-1.5 py-0.5 rounded-xs">
                      New
                    </span>
                  )}
                </div>

                <div className="min-w-0">
                  <h4 className="text-xs font-black text-zinc-950 truncate">
                    {selectedProperty.title}
                  </h4>
                  <div className="flex items-center gap-1 text-[10px] text-zinc-500 font-semibold mt-0.5">
                    <MapPin className="w-3 h-3 text-zinc-400 shrink-0" />
                    <span className="truncate">{selectedProperty.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-xs font-black text-zinc-950">
                      {selectedProperty.pricePerShare}
                    </span>
                    <span className="text-[10px] text-zinc-400 font-semibold">/share</span>
                  </div>
                </div>
              </div>

              {/* Mobile CTA */}
              <button
                onClick={() => onInvestNow(selectedProperty)}
                className="bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold px-3.5 py-2 rounded-full shrink-0 shadow-xs flex items-center gap-1 cursor-pointer"
              >
                <span>Invest</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
