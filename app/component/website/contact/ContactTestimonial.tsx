"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  initials: string;
  avatarBg: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mohit",
    role: "Founder, Granth Dream Home",
    text: "Working with the team completely transformed our digital presence. From branding to lead generation campaigns, every strategy was tailored perfectly for the real estate market. We saw a major increase in quality inquiries and stronger engagement across all platforms.",
    initials: "M",
    avatarBg: "#6B1A3A",
  },
  {
    id: 2,
    name: "Harshjyot",
    role: "Marketing Head, Bigwig",
    text: "Their creative direction and performance marketing expertise helped us scale much faster than expected. The team understands audience behavior deeply and consistently delivers campaigns that generate real business growth.",
    initials: "H",
    avatarBg: "#1A3A6B",
  },
  {
    id: 3,
    name: "Sandeep",
    role: "Director, Mondus",
    text: "The professionalism, speed, and creative quality of the team have been exceptional. From website optimization to digital campaigns, they handled everything seamlessly and helped us improve both visibility and conversions.",
    initials: "S",
    avatarBg: "#1A5C3A",
  },
  {
    id: 4,
    name: "Diksha",
    role: "Brand Manager, BDFX",
    text: "Their marketing strategies brought a fresh perspective to our brand. The combination of strong design, targeted advertising, and consistent optimization resulted in noticeable growth in our customer engagement and online reach.",
    initials: "D",
    avatarBg: "#5C3A1A",
  },
  {
    id: 5,
    name: "Rahul",
    role: "Founder, Lalit Forex",
    text: "The team has been instrumental in building our digital identity. Their ability to combine branding with lead-focused campaigns helped us attract more relevant clients and strengthen trust in our services.",
    initials: "R",
    avatarBg: "#3A1A6B",
  },
  {
    id: 6,
    name: "Rahul",
    role: "Market Analyst, KB Stocks",
    text: "From social media strategy to performance marketing, every campaign was executed with precision. Their analytical approach and creative execution helped us grow our audience and improve overall engagement significantly.",
    initials: "R",
    avatarBg: "#1A5C5C",
  },
  {
    id: 7,
    name: "Mansha",
    role: "Operations Lead, Lion",
    text: "The team consistently delivered high-quality creative work and innovative campaign ideas. Their understanding of digital trends and customer psychology helped us establish a stronger and more professional online presence.",
    initials: "M",
    avatarBg: "#6B3A1A",
  },
  {
    id: 8,
    name: "Rohinton Billimoria",
    role: "Director, ILN",
    text: "Their strategic approach towards branding and digital growth exceeded our expectations. They focused not just on visibility, but on creating meaningful engagement that translated into measurable business results.",
    initials: "RB",
    avatarBg: "#1A4B6B",
  },
  {
    id: 9,
    name: "Amit Pal",
    role: "Managing Partner, DBN",
    text: "One of the most reliable and creative digital teams we have worked with. Their ability to understand our business goals and execute campaigns with clarity and consistency made a huge difference to our growth journey.",
    initials: "AP",
    avatarBg: "#3A5C1A",
  },
];

function usePerView() {
  const [perView, setPerView] = useState(3);
  useEffect(() => {
    function update() {
      if (window.innerWidth <= 640) setPerView(1);
      else if (window.innerWidth <= 1024) setPerView(2);
      else setPerView(3);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return perView;
}

export default function ContactTestimonial() {
  const perView = usePerView();
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = testimonials.length;
  const maxStart = total - perView;
  const pages = Math.ceil(total / perView);
  const activePage = Math.floor(current / perView);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1 > maxStart ? 0 : c + 1));
  }, [maxStart]);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? maxStart : c - 1));
  }, [maxStart]);

  const goTo = useCallback(
    (idx: number) => {
      setCurrent(Math.max(0, Math.min(idx, maxStart)));
    },
    [maxStart],
  );

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 3000);
  }, [next]);

  useEffect(() => {
    timerRef.current = setInterval(next, 3000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next]);

  useEffect(() => {
    setCurrent(0);
  }, [perView]);

  const cardWidthPct = 100 / perView;
  const translateX = -(current * cardWidthPct);

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight text-white">
          READ WHAT OUR!{" "}
          <span style={{ color: "#f26522" }}>CLIENTS HAVE TO SAY</span>
        </h2>
      </div>

      {/* Slider */}
      <div className="relative max-w-7xl mx-auto">
        {/* Left accent bar */}
        <div
          className="absolute left-0 top-[10%] h-[80%] w-[3px] rounded-sm"
          style={{ backgroundColor: "#f26522" }}
        />

        {/* Prev */}
        <button
          onClick={() => {
            prev();
            resetTimer();
          }}
          aria-label="Previous"
          className="absolute left-[-44px] sm:left-[-52px] top-1/2 -translate-y-1/2 z-10
            w-10 h-10 rounded-full flex items-center justify-center
            border border-white/20 bg-white/5 text-white
            hover:border-[#f26522] transition-all duration-300 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Viewport */}
        <div className="overflow-hidden w-full">
          <div
            className="flex"
            style={{
              transform: `translateX(${translateX}%)`,
              transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                style={{ flex: `0 0 ${cardWidthPct}%` }}
                className="px-3"
              >
                <div
                  className="rounded-2xl p-7 text-center h-full flex flex-col items-center"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.09)",
                  }}
                >
                  {/* Avatar + Quote Badge */}
                  <div className="relative inline-block mb-4">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                      style={{
                        background: t.avatarBg,
                        border: "2px dotted #f26522",
                      }}
                    >
                      {t.initials}
                    </div>
                    <div
                      className="absolute -top-1.5 -right-2.5 w-8 h-8 flex items-center justify-center"
                      style={{
                        backgroundColor: "#f26522",
                        borderRadius: "8px 8px 0 8px",
                      }}
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                      </svg>
                    </div>
                  </div>

                  <p className="text-white font-bold text-base mb-1">
                    {t.name}
                  </p>
                  <p
                    className="text-sm mb-3 min-h-[36px] flex items-center justify-center leading-snug"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {t.role}
                  </p>

                  <div className="flex gap-0.5 mb-3 justify-center">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span
                        key={s}
                        className="text-yellow-400 text-lg leading-none"
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <div
                    className="w-10 h-0.5 rounded mb-3"
                    style={{ backgroundColor: "#f26522" }}
                  />

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {t.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next */}
        <button
          onClick={() => {
            next();
            resetTimer();
          }}
          aria-label="Next"
          className="absolute right-[-44px] sm:right-[-52px] top-1/2 -translate-y-1/2 z-10
            w-10 h-10 rounded-full flex items-center justify-center
            border border-white/20 bg-white/5 text-white
            hover:border-[#f26522] transition-all duration-300 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            aria-label={`Page ${i + 1}`}
            onClick={() => {
              goTo(i * perView);
              resetTimer();
            }}
            className="rounded-full border-none cursor-pointer p-0 transition-all duration-300"
            style={{
              width: i === activePage ? "24px" : "10px",
              height: "10px",
              background:
                i === activePage ? "#f26522" : "rgba(255,255,255,0.25)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
