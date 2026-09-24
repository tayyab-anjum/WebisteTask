"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Can I switch between monthly and annual plans?",
      a: "Yes, you can upgrade, downgrade, or switch between monthly and annual billing cycles at any time from your account settings. Pro-rated adjustments are applied automatically.",
    },
    {
      q: "What is included in the Free tier?",
      a: "The Free plan provides access to our fundamental toolset with standard exports and community support. It never expires and requires no credit card.",
    },
    {
      q: "How does 24/7 dedicated support work on Personal?",
      a: "Personal subscribers get priority email and chat response times under 15 minutes, access to private workflow templates, and weekly feature releases.",
    },
    {
      q: "What payment methods are supported?",
      a: "We support all major credit cards (Visa, Mastercard, American Express), Apple Pay, Google Pay, and bank transfers for annual contracts.",
    },
  ];

  return (
    <section className="w-full pb-24 sm:pb-32 select-none relative z-10">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight mb-8 sm:mb-10 text-center">
            Frequently Asked Questions
          </h2>

          <div className="w-full space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.q}
                  className="bg-white rounded-2xl border border-zinc-200/80 p-5 sm:p-6 transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left cursor-pointer focus:outline-hidden"
                  >
                    <span className="text-sm sm:text-base font-bold text-zinc-900">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-zinc-900" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="text-xs sm:text-sm text-zinc-500 font-normal leading-relaxed mt-3 pt-3 border-t border-zinc-100">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
