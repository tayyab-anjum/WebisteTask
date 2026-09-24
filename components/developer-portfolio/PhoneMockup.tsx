"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export function PhoneMockup() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="relative w-full flex items-center justify-center select-none py-4">
      {/* Concentric Celestial Orbit Rings in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] sm:w-[720px] sm:h-[720px] lg:w-[920px] lg:h-[920px] rounded-full border border-zinc-200/60 pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] sm:w-[980px] sm:h-[980px] lg:w-[1250px] lg:h-[1250px] rounded-full border border-zinc-200/40 pointer-events-none -z-10" />
      <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px] rounded-full border border-zinc-200/25 pointer-events-none -z-10" />

      {/* Realistic iPhone Device Container */}
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        {/* Hardware Side Buttons - Left (Silent Switch + Volume Up + Volume Down) */}
        <div className="absolute -left-[5px] top-24 w-[5px] h-7 bg-zinc-300 rounded-l-sm" />
        <div className="absolute -left-[5px] top-38 w-[5px] h-12 bg-zinc-300 rounded-l-sm" />
        <div className="absolute -left-[5px] top-54 w-[5px] h-12 bg-zinc-300 rounded-l-sm" />

        {/* Hardware Side Button - Right (Power / Sleep Button) */}
        <div className="absolute -right-[5px] top-32 w-[5px] h-16 bg-zinc-300 rounded-r-sm" />

        {/* iPhone Chassis Outer Shell */}
        <div className="w-[315px] sm:w-[350px] md:w-[375px] lg:w-[395px] xl:w-[415px] bg-[#F7F7F8] rounded-[50px] sm:rounded-[56px] p-2.5 sm:p-3 shadow-[0_35px_90px_-15px_rgba(0,0,0,0.18),0_15px_30px_-5px_rgba(0,0,0,0.08)] border-[3.5px] border-zinc-200 ring-1 ring-zinc-300/70 relative">
          
          {/* Inner Phone Screen Display */}
          <div
            className={`w-full rounded-[40px] sm:rounded-[46px] pt-0 px-6 sm:px-7 pb-6 transition-colors duration-300 overflow-hidden relative min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex flex-col justify-between ${
              isDarkMode ? "bg-zinc-950 text-white" : "bg-white text-zinc-950"
            }`}
          >
            {/* Top iPhone Notch */}
            <div className="relative w-full flex justify-center mb-5">
              <div className="w-36 sm:w-44 h-6 sm:h-7 bg-[#F7F7F8] border-b border-x border-zinc-200/90 rounded-b-2xl flex items-center justify-center gap-2.5 z-20">
                {/* Speaker Receiver Slit */}
                <div className="w-14 sm:w-16 h-1 sm:h-1.5 bg-zinc-300 rounded-full" />
                {/* Camera Lens Circle */}
                <div className="w-2.5 h-2.5 bg-zinc-400 rounded-full ring-1 ring-zinc-300" />
              </div>
            </div>

            {/* Screen Body Content */}
            <div className="flex-1 flex flex-col">
              {/* Top Right: Elevated Sun/Moon Mode Toggle */}
              <div className="flex justify-end mb-2">
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center transition-all cursor-pointer shadow-[0_6px_16px_rgba(0,0,0,0.08)] border ${
                    isDarkMode
                      ? "bg-zinc-900 border-zinc-800 text-amber-400 hover:bg-zinc-800"
                      : "bg-white border-zinc-100 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50"
                  }`}
                  title="Toggle theme"
                  aria-label="Toggle phone theme"
                >
                  {isDarkMode ? (
                    <Sun className="w-4 h-4 text-amber-400 stroke-[2.2]" />
                  ) : (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" strokeLinecap="round" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Developer Circular Avatar */}
              <div className="relative w-15 h-15 sm:w-17 sm:h-17 rounded-full overflow-hidden border border-zinc-200/90 shadow-sm mb-5">
                <Image
                  src="/developer/felix-avatar.webp"
                  alt="Tayyab - Software Designer"
                  fill
                  className="object-cover"
                  sizes="70px"
                  priority
                />
              </div>

              {/* Mobile Headline matching reference */}
              <h2
                className={`text-xl sm:text-2xl md:text-[25px] font-black tracking-tight leading-[1.14] mb-3.5 ${
                  isDarkMode ? "text-white" : "text-zinc-950"
                }`}
              >
                Software designer, <br />
                founder, and amateur <br />
                astronaut.
              </h2>

              {/* Mobile Bio Paragraph matching reference */}
              <p
                className={`text-xs sm:text-[13.5px] leading-relaxed mb-6 font-normal ${
                  isDarkMode ? "text-zinc-400" : "text-zinc-500"
                }`}
              >
                I&apos;m Tayyab, a software designer and entrepreneur based in New York
                City. I&apos;m currently working on a new project called Stage.
              </p>

              {/* Social Media Links Row */}
              <div className="flex items-center gap-4 text-zinc-400">
                {/* Twitter / X */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
                  aria-label="Twitter profile"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
                  aria-label="Instagram profile"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
                  aria-label="GitHub profile"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
                  aria-label="LinkedIn profile"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Bottom iPhone Home Indicator Bar */}
            <div className="w-28 sm:w-32 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full mx-auto mt-6 shrink-0" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
