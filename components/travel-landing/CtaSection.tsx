"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Check, Download } from "lucide-react";

interface CtaSectionProps {
  onDownload: () => void;
}

export function CtaSection({ onDownload }: CtaSectionProps) {
  const [downloaded, setDownloaded] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    // Fire celebratory confetti
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#ffffff", "#38bdf8", "#0284c7"],
    });

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3500);
    onDownload();
  };

  return (
    <div className="w-full text-center px-4 pt-5 xs:pt-6 sm:pt-2 pb-8 sm:pb-6 flex flex-col items-center select-none relative z-20">
      {/* Subtitle matching exact reference copy */}
      <p className="text-white/90 text-[13.5px] xs:text-[14.5px] sm:text-[15.5px] md:text-[16px] font-normal leading-relaxed max-w-md mx-auto mb-5 sm:mb-4.5 text-center drop-shadow-xs">
        Everything related to travelling
        <br />
        stored in one place. Never
        <br />
        forget anything important.
      </p>

      {/* Primary Apple Download Button */}
      <motion.button
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.96 }}
        onClick={handleClick}
        className="bg-white hover:bg-zinc-50 text-zinc-950 font-bold px-7 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-[0_12px_30px_-5px_rgba(0,0,0,0.22)] flex items-center justify-center gap-2.5 text-[13.5px] sm:text-[14.5px] tracking-tight transition-all cursor-pointer border border-white/60 active:shadow-md"
      >
        {downloaded ? (
          <>
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Added to Travel Wallet & App!</span>
          </>
        ) : (
          <>
            {/* Lookalike Mobile App Badge Icon */}
            <svg
              className="w-4 h-4 fill-current mb-0.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.64-.78 1.08-1.87.96-2.96-.93.04-2.06.62-2.72 1.4-.58.67-1.09 1.77-.95 2.83 1.04.08 2.07-.49 2.71-1.27z" />
            </svg>
            <span>Download for Mobile</span>
          </>
        )}
      </motion.button>
    </div>
  );
}
