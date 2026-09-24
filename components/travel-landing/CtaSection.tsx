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
            <span>Added to Apple Wallet & App Store!</span>
          </>
        ) : (
          <>
            {/* Apple Logo SVG */}
            <svg
              className="w-4 h-4 fill-current mb-0.5"
              viewBox="0 0 170 170"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.69-7.85-11.96-14.42-7.51-11.53-13.1-24.62-16.77-39.29-3.67-14.67-5.5-28.52-5.5-41.56 0-16.1 4.25-29.47 12.76-40.11 8.51-10.64 19.14-16.14 31.89-16.5 4.35 0 9.4 1.16 15.15 3.48 5.75 2.33 9.77 3.55 12.06 3.67 1.86 0 5.8-1.22 11.83-3.67 6.03-2.45 10.96-3.56 14.8-3.35 10.87.64 19.98 4.41 27.34 11.31 7.36 6.9 12.35 15.54 14.98 25.92-9.59 5.8-14.4 13.97-14.43 24.52-.03 8.35 3.18 15.42 9.63 21.2 6.45 5.79 14.19 9.14 23.23 10.05-2.01 6.2-4.45 12.44-7.32 18.73zM119.22 33.15c0-6.73 2.5-12.96 7.5-18.7 5-5.74 11.23-9.35 18.7-10.84.44 2.83.65 5.56.65 8.2 0 6.64-2.58 13.06-7.75 19.26-5.17 6.2-11.37 9.87-18.6 11.01-.22-2.94-.5-5.91-.5-8.93z" />
            </svg>
            <span>Download for iOS</span>
          </>
        )}
      </motion.button>
    </div>
  );
}
