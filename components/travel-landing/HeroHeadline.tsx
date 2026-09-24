"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export function HeroHeadline() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-full text-center px-4 pt-6 sm:pt-10 md:pt-14 pb-2 sm:pb-4 select-none relative z-10">
      <motion.h1
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="font-extrabold text-[38px] xs:text-[46px] sm:text-[62px] md:text-[76px] lg:text-[90px] xl:text-[96px] tracking-[-0.04em] text-white leading-[1.04] max-w-5xl mx-auto drop-shadow-sm"
      >
        Place for your
        <br />
        tickets, booking
        <br />
        <span className="opacity-80 transition-opacity">and documents</span>
      </motion.h1>
    </div>
  );
}
