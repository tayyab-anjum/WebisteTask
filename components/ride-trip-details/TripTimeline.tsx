"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export interface TimelineStop {
  id: number;
  type: string;
  location: string;
  time: string;
  badge: string | null;
  dotType: "pickup" | "hollow-blue" | "hollow-gray" | "dot-gray";
  address: string;
}

interface TripTimelineProps {
  stops: TimelineStop[];
  activeStop: number | null;
  onSelectStop: (id: number) => void;
  mounted: boolean;
}

export function TripTimeline({
  stops,
  activeStop,
  onSelectStop,
  mounted,
}: TripTimelineProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="mt-2.5 sm:mt-4 md:mt-6">
      <div className="flex items-center justify-between mb-1.5 sm:mb-2.5 md:mb-3.5">
        <h2 className="text-[14px] sm:text-[15px] md:text-[18px] font-bold text-[#18181B] tracking-tight">
          Trip Info
        </h2>
        <span className="text-xs text-neutral-400 font-medium hidden md:inline">
          Estimated 25 min total duration
        </span>
      </div>

      <div className="relative pl-0.5 sm:pl-1 flex flex-col gap-2 sm:gap-3.5 md:gap-5">
        {stops.map((stop, index) => {
          const isLast = index === stops.length - 1;
          return (
            <motion.div
              key={stop.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.25,
                delay: mounted && !prefersReducedMotion ? index * 0.05 : 0,
              }}
              onClick={() => onSelectStop(stop.id)}
              className="relative flex items-start gap-3 sm:gap-4 group cursor-pointer"
            >
              {/* Left Dot & Capsule Connector Line */}
              <div className="relative flex flex-col items-center shrink-0 pt-0.5">
                {stop.dotType === "pickup" && (
                  <div className="w-4 h-4 sm:w-[18px] sm:h-[18px] rounded-full border-[2.5px] sm:border-[3px] border-[#3B82F6] bg-white flex items-center justify-center z-10">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#3B82F6]" />
                  </div>
                )}
                {stop.dotType === "hollow-blue" && (
                  <div className="w-4 h-4 sm:w-[18px] sm:h-[18px] rounded-full border-[2px] sm:border-[2.5px] border-[#93C5FD] bg-white z-10" />
                )}
                {stop.dotType === "hollow-gray" && (
                  <div className="w-4 h-4 sm:w-[18px] sm:h-[18px] rounded-full border-[2px] sm:border-[2.5px] border-[#D4D4D8] bg-white z-10" />
                )}
                {stop.dotType === "dot-gray" && (
                  <div className="w-4 h-4 sm:w-[18px] sm:h-[18px] rounded-full border-[2px] sm:border-[2.5px] border-[#D4D4D8] bg-white flex items-center justify-center z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4D4D8]" />
                  </div>
                )}

                {/* Special Capsule Connector between Stop 1 and Stop 2 */}
                {index === 0 && (
                  <div className="absolute top-1.5 -bottom-2.5 sm:-bottom-4 md:-bottom-5.5 w-[11px] sm:w-[14px] bg-[#BFDBFE]/80 rounded-full flex justify-center">
                    <div className="w-[1.5px] sm:w-[2px] h-full bg-[#3B82F6]" />
                  </div>
                )}

                {/* Thin Light Gray Line from Stop 2 downwards */}
                {index > 0 && !isLast && (
                  <div className="w-[1.5px] absolute top-2.5 -bottom-2.5 sm:-bottom-4 md:-bottom-5.5 bg-[#E4E4E7]" />
                )}
              </div>

              {/* Stop Info (Location + Time) */}
              <div className="flex-1 flex items-start justify-between min-w-0 pr-0.5">
                <div className="flex flex-col">
                  <span className="text-[11px] sm:text-[12px] md:text-[12.5px] text-[#71717A] font-normal leading-none mb-0.5 sm:mb-1">
                    {stop.type}
                  </span>
                  <span className="text-[13.5px] sm:text-[15px] md:text-[16px] font-bold text-[#18181B] truncate group-hover:text-blue-600 transition-colors">
                    {stop.location}
                  </span>
                  <span className="text-xs text-neutral-400 mt-0.5 hidden md:block">
                    {stop.address}
                  </span>
                </div>

                <div className="flex flex-col items-end shrink-0 pl-2">
                  <span className="text-[13.5px] sm:text-[15px] md:text-[16px] font-bold text-[#18181B] tabular-nums leading-none mb-0.5 sm:mb-1">
                    {stop.time}
                  </span>
                  {stop.badge && (
                    <span className="text-[11px] sm:text-[12px] text-[#8E8E93] font-normal leading-none">
                      {stop.badge}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
