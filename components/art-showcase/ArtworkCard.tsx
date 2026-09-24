"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export interface CardData {
  id: number;
  title: string;
  artist: string;
  rotation: number;
  imageSrc: string;
  tag?: {
    name: string;
    color: "blue" | "green";
  };
}

interface ArtworkCardProps {
  card: CardData;
  index: number;
  offsetFromCenter: number;
  spacing: number;
  isMobile: boolean;
  isHovered: boolean;
  isOtherHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onSelect: () => void;
}

export function ArtworkCard({
  card,
  index,
  offsetFromCenter,
  spacing,
  isMobile,
  isHovered,
  isOtherHovered,
  onHoverStart,
  onHoverEnd,
  onSelect,
}: ArtworkCardProps) {
  const prefersReducedMotion = useReducedMotion();

  // Left-to-right stacking matching original web app reference:
  // Each card sits cleanly over the previous one
  const baseZIndex = index + 10;

  // X position:
  // - On desktop: exact 105px spread from original approved web app design
  // - On mobile: tight overlap spacing (34px) so cards sit on each other within 375px
  const targetX = isMobile ? offsetFromCenter * spacing : offsetFromCenter * 105;

  // Resting Y position:
  // - Smooth, unified arc with all cards together (card 4 sits with all in natural arc)
  const normalY = isMobile
    ? Math.abs(offsetFromCenter) * 4
    : Math.abs(offsetFromCenter) * 8 - 4;

  const normalRotate = card.rotation;
  const normalScale = 1.0;

  // Hover states:
  // Lifts up, straightens, slight scale boost, and jumps to highest zIndex
  const targetY = isHovered ? normalY - (isMobile ? 20 : 26) : normalY;
  const targetRotate = isHovered ? 0 : normalRotate;
  const targetScale = isHovered ? (isMobile ? 1.08 : 1.1) : normalScale;
  const targetOpacity = isOtherHovered ? 0.9 : 1.0;

  return (
    <motion.div
      onClick={onSelect}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onTouchStart={onHoverStart}
      initial={
        prefersReducedMotion
          ? false
          : {
              x: targetX,
              y: normalY + 20,
              rotate: 0,
              opacity: 0,
            }
      }
      animate={{
        x: targetX,
        y: targetY,
        rotate: targetRotate,
        scale: targetScale,
        opacity: targetOpacity,
        zIndex: isHovered ? 100 : baseZIndex,
      }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 22,
        mass: 0.8,
        delay: prefersReducedMotion ? 0 : index * 0.02,
      }}
      whileTap={{ scale: 0.97 }}
      style={{
        zIndex: isHovered ? 100 : baseZIndex,
      }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer select-none group origin-bottom"
    >
      {/* Speech Bubble Tag (@coplin on card 2, @andrea on card 7) */}
      {card.tag && (
        <div className="absolute -top-10 md:-top-13 left-1/2 -translate-x-1/2 z-50 pointer-events-none whitespace-nowrap">
          <div
            className={`px-3 md:px-4 py-1 md:py-1.5 rounded-full text-white text-[11.5px] md:text-[13px] font-semibold tracking-tight shadow-md flex items-center justify-center relative ${
              card.tag.color === "blue" ? "bg-[#2563EB]" : "bg-[#10B981]"
            }`}
          >
            <span>{card.tag.name}</span>
            {/* Bubble Tail */}
            <div
              className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 ${
                card.tag.color === "blue" ? "bg-[#2563EB]" : "bg-[#10B981]"
              }`}
            />
          </div>
        </div>
      )}

      {/* Main Card Body */}
      <div
        className={`
          w-[128px] h-[172px] xs:w-[136px] xs:h-[182px] sm:w-[150px] sm:h-[200px] md:w-[175px] md:h-[235px] lg:w-[190px] lg:h-[255px]
          rounded-[20px] md:rounded-[26px] overflow-hidden
          relative bg-neutral-900
          transition-all duration-300
          shadow-[0_12px_30px_-6px_rgba(0,0,0,0.22)] border border-black/[0.08]
          ${
            isHovered
              ? "!shadow-[0_28px_55px_-10px_rgba(0,0,0,0.42)] !border-black/20"
              : ""
          }
        `}
      >
        {/* Real Generated AI Artwork Image */}
        <img
          src={card.imageSrc}
          alt={card.title}
          className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
          draggable={false}
        />

        {/* Specular highlight & soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 pointer-events-none" />
      </div>
    </motion.div>
  );
}
