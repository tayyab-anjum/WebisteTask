"use client";

import React from "react";
import { motion } from "framer-motion";

export function StatsSection() {
  const stats = [
    {
      value: "$1B+",
      labelLine1: "TOTAL",
      labelLine2: "INVESTED",
    },
    {
      value: "20K+",
      labelLine1: "HAPPY",
      labelLine2: "CUSTOMERS",
    },
    {
      value: "150K+",
      labelLine1: "PROPERTY",
      labelLine2: "LISTED",
    },
    {
      value: "8-12%",
      labelLine1: "AVERAGE",
      labelLine2: "RETURN VALUE",
    },
  ];

  return (
    <section className="w-full bg-[#FAFAFA]/80 border-y border-zinc-200/80 py-16 sm:py-22 select-none">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-14 items-center justify-between">
          {stats.map((item, index) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-3 sm:gap-4 md:gap-5 justify-start lg:justify-center"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-zinc-950 tracking-tight leading-none whitespace-nowrap shrink-0">
                {item.value}
              </span>
              <div className="text-[10px] sm:text-xs md:text-sm font-bold text-zinc-400 uppercase tracking-wider leading-tight shrink-0">
                <div>{item.labelLine1}</div>
                <div>{item.labelLine2}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
