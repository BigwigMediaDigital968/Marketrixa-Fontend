// components/FAQ.tsx
"use client";

import { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  eyebrow?: string; // small label above title, e.g. "Got questions?"
  title?: string; // main heading (the part before PARTNERS in your design)
  items: FAQItem[]; // array of Q&A pairs
  className?: string; // optional extra wrapper class
}

export default function FAQ({
  eyebrow = "Got questions?",
  title = "Frequently Asked Questions",
  items,
  className = "",
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      className={`w-full px-5 py-16 md:py-24 ${className}`}
      aria-label="Frequently asked questions"
    >
      <div className="max-w-[900px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          {eyebrow && (
            <p className="text-[#F26522] text-xs font-medium uppercase tracking-[0.15em] mb-3">
              {eyebrow}
            </p>
          )}
          <h2 className="text-[clamp(24px,4vw,42px)] font-black tracking-tight text-gray-100 mb-5">
            {title}
          </h2>
          {/* Decorative divider — three dashes in brand color */}
          <div className="flex items-center justify-center gap-1.5">
            <span className="block h-0.5 w-10 rounded-full bg-[#F26522]" />
            <span className="block h-0.5 w-5 rounded-full bg-[#F26522]" />
            <span className="block h-0.5 w-8 rounded-full bg-[#F26522]" />
          </div>
        </div>

        {/* Accordion list */}
        <div className="flex flex-col gap-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`border rounded-lg bg-white overflow-hidden transition-colors duration-200 ${
                  isOpen
                    ? "border-[#F26522]/40"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F26522] focus-visible:ring-offset-1 rounded-lg cursor-pointer"
                >
                  <span className="text-[15px] font-bold text-gray-900 leading-snug">
                    {item.question}
                  </span>

                  {/* +/× icon */}
                  <span
                    className={`shrink-0 w-[22px] h-[22px] flex items-center justify-center border rounded text-lg leading-none transition-all duration-250 ${
                      isOpen
                        ? "bg-[#F26522] border-[#F26522] text-white rotate-45"
                        : "border-[#F26522] text-[#F26522]"
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {/* Animated answer panel */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 pt-4 text-sm text-gray-500 leading-relaxed border-t border-gray-100">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
