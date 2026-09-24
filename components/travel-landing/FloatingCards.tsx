"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PlusCircle, Plane, ArrowUpRight, ArrowDownRight, Compass } from "lucide-react";

interface FloatingCardsProps {
  onAddStuff: () => void;
  onCheckLive: () => void;
}

export function FloatingCards({ onAddStuff, onCheckLive }: FloatingCardsProps) {
  const prefersReducedMotion = useReducedMotion();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isSmallMobile = windowWidth < 480;

  // Responsive offsets:
  // Desktop: wide spread matching reference screenshot
  // Mobile (375px): tight overlap so all 4 cards sit on each other with 47px side margins
  const cardPositions = isMobile
    ? [
        { id: 1, x: isSmallMobile ? -68 : -85, y: 15, rotate: -6, z: 10 },
        { id: 2, x: isSmallMobile ? -22 : -28, y: -8, rotate: -2, z: 15 },
        { id: 3, x: isSmallMobile ? 22 : 28, y: 4, rotate: 3, z: 25 },
        { id: 4, x: isSmallMobile ? 68 : 85, y: 18, rotate: 6, z: 20 },
      ]
    : [
        { id: 1, x: -330, y: 20, rotate: -8, z: 10 },
        { id: 2, x: -115, y: -12, rotate: -3, z: 15 },
        { id: 3, x: 60, y: 8, rotate: 3, z: 25 },
        { id: 4, x: 285, y: 22, rotate: 8, z: 20 },
      ];

  return (
    <div className="w-full relative py-6 sm:py-10 md:py-14 flex items-center justify-center select-none overflow-visible">
      {/* Cards Deck Container */}
      <div className="relative flex items-center justify-center h-[260px] xs:h-[280px] sm:h-[310px] md:h-[350px] lg:h-[380px] w-full max-w-5xl mx-auto overflow-visible">
        {/* CARD 1: Manage flights, bookings & documents */}
        <motion.div
          onMouseEnter={() => setHoveredCard(1)}
          onMouseLeave={() => setHoveredCard(null)}
          animate={
            prefersReducedMotion
              ? {}
              : {
                  x: cardPositions[0].x,
                  y:
                    hoveredCard === 1
                      ? cardPositions[0].y - 24
                      : [cardPositions[0].y, cardPositions[0].y - 6, cardPositions[0].y],
                  rotate: hoveredCard === 1 ? 0 : cardPositions[0].rotate,
                  scale: hoveredCard === 1 ? (isMobile ? 1.08 : 1.05) : 1,
                  zIndex: hoveredCard === 1 ? 50 : cardPositions[0].z,
                }
          }
          transition={{
            y:
              hoveredCard === 1
                ? { type: "spring", stiffness: 300, damping: 20 }
                : { repeat: Infinity, duration: 4.8, ease: "easeInOut" },
            default: { type: "spring", stiffness: 300, damping: 22 },
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer origin-bottom"
          style={{ zIndex: hoveredCard === 1 ? 50 : cardPositions[0].z }}
        >
          <div className="w-[155px] xs:w-[170px] sm:w-[195px] md:w-[225px] lg:w-[245px] p-4 sm:p-5 rounded-3xl bg-white shadow-[0_20px_45px_-8px_rgba(0,0,0,0.18)] border border-black/[0.06] flex flex-col justify-between h-[185px] xs:h-[195px] sm:h-[220px] md:h-[245px] transition-shadow hover:shadow-[0_28px_60px_-10px_rgba(0,0,0,0.3)]">
            {/* Top Text Content with emojis matching reference */}
            <div className="text-zinc-900 font-semibold text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] leading-snug">
              Manage your flights, <span className="inline-block">✈️</span>
              <br />
              bookings and documents <span className="inline-block">🪪</span>
              <br />
              directly in one app <span className="inline-block">📱</span>
            </div>

            {/* Bottom Pill Button: Add your stuff */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddStuff();
              }}
              className="w-full py-2 sm:py-2.5 px-3 rounded-full bg-[#18181B] hover:bg-zinc-800 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs active:scale-95"
            >
              <PlusCircle className="w-3.5 h-3.5 text-zinc-300" />
              <span>Add your stuff</span>
            </button>
          </div>
        </motion.div>

        {/* CARD 2: Norway 12 Days */}
        <motion.div
          onMouseEnter={() => setHoveredCard(2)}
          onMouseLeave={() => setHoveredCard(null)}
          animate={
            prefersReducedMotion
              ? {}
              : {
                  x: cardPositions[1].x,
                  y:
                    hoveredCard === 2
                      ? cardPositions[1].y - 24
                      : [cardPositions[1].y, cardPositions[1].y - 7, cardPositions[1].y],
                  rotate: hoveredCard === 2 ? 0 : cardPositions[1].rotate,
                  scale: hoveredCard === 2 ? (isMobile ? 1.08 : 1.05) : 1,
                  zIndex: hoveredCard === 2 ? 50 : cardPositions[1].z,
                }
          }
          transition={{
            y:
              hoveredCard === 2
                ? { type: "spring", stiffness: 300, damping: 20 }
                : { repeat: Infinity, duration: 5.2, ease: "easeInOut", delay: 0.4 },
            default: { type: "spring", stiffness: 300, damping: 22 },
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer origin-bottom"
          style={{ zIndex: hoveredCard === 2 ? 50 : cardPositions[1].z }}
        >
          <div className="w-[145px] xs:w-[160px] sm:w-[185px] md:w-[210px] lg:w-[230px] p-4 sm:p-5 rounded-3xl bg-white shadow-[0_20px_45px_-8px_rgba(0,0,0,0.18)] border border-black/[0.06] flex flex-col justify-between h-[180px] xs:h-[190px] sm:h-[215px] md:h-[240px] transition-shadow hover:shadow-[0_28px_60px_-10px_rgba(0,0,0,0.3)]">
            {/* Top Row: Norway Flag */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                {/* Clean Norway Flag SVG */}
                <div className="w-5 h-3.5 rounded-xs overflow-hidden shadow-xs relative bg-[#ba0c2f] flex items-center justify-center shrink-0">
                  <div className="absolute w-full h-[3px] bg-white flex items-center">
                    <div className="w-full h-[1.5px] bg-[#00205b]" />
                  </div>
                  <div className="absolute h-full w-[3px] bg-white flex justify-center left-[35%]">
                    <div className="h-full w-[1.5px] bg-[#00205b]" />
                  </div>
                </div>
              </div>

              <div className="text-[11px] sm:text-[12px] font-semibold text-zinc-500 tracking-tight">
                Norway
              </div>
              <div className="text-[24px] xs:text-[26px] sm:text-[30px] md:text-[34px] font-black text-zinc-900 tracking-tight leading-tight mt-0.5">
                12 Days
              </div>
            </div>

            {/* Bottom Date */}
            <div className="pt-2 border-t border-zinc-100 flex items-center justify-between text-zinc-400 text-[11px] sm:text-[12px] font-medium">
              <span>Thu, 5 Dec</span>
              <Compass className="w-3.5 h-3.5 text-zinc-300" />
            </div>
          </div>
        </motion.div>

        {/* CARD 3: Jet Black USA 25 Days Centerpiece */}
        <motion.div
          onMouseEnter={() => setHoveredCard(3)}
          onMouseLeave={() => setHoveredCard(null)}
          animate={
            prefersReducedMotion
              ? {}
              : {
                  x: cardPositions[2].x,
                  y:
                    hoveredCard === 3
                      ? cardPositions[2].y - 24
                      : [cardPositions[2].y, cardPositions[2].y - 8, cardPositions[2].y],
                  rotate: hoveredCard === 3 ? 0 : cardPositions[2].rotate,
                  scale: hoveredCard === 3 ? (isMobile ? 1.08 : 1.06) : 1,
                  zIndex: hoveredCard === 3 ? 50 : cardPositions[2].z,
                }
          }
          transition={{
            y:
              hoveredCard === 3
                ? { type: "spring", stiffness: 300, damping: 20 }
                : { repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.8 },
            default: { type: "spring", stiffness: 300, damping: 22 },
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer origin-bottom"
          style={{ zIndex: hoveredCard === 3 ? 50 : cardPositions[2].z }}
        >
          <div className="w-[155px] xs:w-[170px] sm:w-[195px] md:w-[225px] lg:w-[245px] p-4 sm:p-5 rounded-3xl bg-[#09090b] text-white shadow-[0_24px_55px_-6px_rgba(0,0,0,0.38)] border border-white/12 flex flex-col justify-between h-[185px] xs:h-[195px] sm:h-[220px] md:h-[245px] relative overflow-hidden transition-shadow hover:shadow-[0_32px_70px_-10px_rgba(0,0,0,0.5)]">
            {/* Glossy radial gradient highlight */}
            <div className="absolute top-0 right-0 w-28 h-28 bg-radial from-white/10 to-transparent pointer-events-none rounded-full blur-xl" />

            {/* Header: US Flag & Flight Number */}
            <div className="flex items-center justify-between">
              {/* US Flag SVG */}
              <div className="w-5 h-3.5 rounded-xs overflow-hidden shadow-xs relative bg-[#B22234] shrink-0 flex flex-col justify-between">
                <div className="h-[2px] bg-white" />
                <div className="h-[2px] bg-white" />
                <div className="h-[2px] bg-white" />
                <div className="absolute top-0 left-0 w-2 h-2 bg-[#3C3B6E] flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-white/80" />
                </div>
              </div>

              {/* Codes matching reference */}
              <div className="text-right">
                <div className="text-[11px] sm:text-[12px] font-bold text-zinc-200 tracking-wider">
                  WE1786
                </div>
                <div className="text-[9px] sm:text-[10px] text-zinc-500 font-mono">
                  #WE975333
                </div>
              </div>
            </div>

            {/* Middle: USA, 25 Days & Dual Airplane Flight Track */}
            <div className="flex items-end justify-between my-auto">
              <div>
                <div className="text-[11px] sm:text-[12px] font-semibold text-zinc-400 tracking-wider uppercase">
                  USA
                </div>
                <div className="text-[24px] xs:text-[26px] sm:text-[30px] md:text-[34px] font-black text-white tracking-tight leading-tight mt-0.5">
                  25 Days
                </div>
                <div className="text-[11px] sm:text-[12px] text-zinc-400 font-medium mt-1">
                  Fri, 18 Dec
                </div>
              </div>

              {/* Flight Vector Route with Two Blue Planes */}
              <div className="flex flex-col items-center gap-3 relative py-1">
                {/* Airplane 1 Flying Up */}
                <Plane className="w-4 h-4 text-[#38BDF8] rotate-0 drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]" />
                {/* Dashed track */}
                <div className="w-[1.5px] h-6 border-l border-dashed border-sky-400/40" />
                {/* Airplane 2 Flying Down */}
                <Plane className="w-4 h-4 text-[#38BDF8] rotate-180 drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* CARD 4: New Jersey -> California Boarding Pass */}
        <motion.div
          onMouseEnter={() => setHoveredCard(4)}
          onMouseLeave={() => setHoveredCard(null)}
          animate={
            prefersReducedMotion
              ? {}
              : {
                  x: cardPositions[3].x,
                  y:
                    hoveredCard === 4
                      ? cardPositions[3].y - 24
                      : [cardPositions[3].y, cardPositions[3].y - 6, cardPositions[3].y],
                  rotate: hoveredCard === 4 ? 0 : cardPositions[3].rotate,
                  scale: hoveredCard === 4 ? (isMobile ? 1.08 : 1.05) : 1,
                  zIndex: hoveredCard === 4 ? 50 : cardPositions[3].z,
                }
          }
          transition={{
            y:
              hoveredCard === 4
                ? { type: "spring", stiffness: 300, damping: 20 }
                : { repeat: Infinity, duration: 5.0, ease: "easeInOut", delay: 0.2 },
            default: { type: "spring", stiffness: 300, damping: 22 },
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer origin-bottom"
          style={{ zIndex: hoveredCard === 4 ? 50 : cardPositions[3].z }}
        >
          <div className="w-[155px] xs:w-[170px] sm:w-[195px] md:w-[225px] lg:w-[245px] p-4 sm:p-5 rounded-3xl bg-white shadow-[0_20px_45px_-8px_rgba(0,0,0,0.18)] border border-black/[0.06] flex flex-col justify-between h-[185px] xs:h-[195px] sm:h-[220px] md:h-[245px] transition-shadow hover:shadow-[0_28px_60px_-10px_rgba(0,0,0,0.3)]">
            {/* Origin & Departure */}
            <div>
              <div className="flex items-center justify-between text-zinc-900 font-bold text-[13px] sm:text-[14px]">
                <span>New Jersey</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </div>
              <div className="flex items-center gap-1.5 text-sky-600 font-medium text-[11px] sm:text-[12px] mt-0.5">
                <Plane className="w-3 h-3 rotate-45" />
                <span>5:23pm</span>
              </div>
            </div>

            {/* Flight Path Connector with Midpoint Time */}
            <div className="relative pl-1.5 py-1">
              <div className="w-[1.5px] h-6 border-l border-dashed border-zinc-200" />
              <span className="text-[10px] text-zinc-400 font-medium ml-2 absolute top-1/2 -translate-y-1/2">
                8:43pm
              </span>
            </div>

            {/* Destination */}
            <div>
              <div className="flex items-center justify-between text-zinc-900 font-bold text-[13px] sm:text-[14px]">
                <span>California</span>
                <ArrowDownRight className="w-3.5 h-3.5 text-zinc-400" />
              </div>
            </div>

            {/* Bottom Pill Button: Check it live */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onCheckLive();
              }}
              className="w-full py-2 sm:py-2.5 px-3 rounded-full bg-[#18181B] hover:bg-zinc-800 text-white text-[11px] sm:text-[12px] font-semibold text-center transition-colors cursor-pointer shadow-xs active:scale-95"
            >
              Check it live
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
