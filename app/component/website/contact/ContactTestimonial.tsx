// "use client";

// import { useState, useEffect, useCallback, useRef } from "react";
// import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
// import Image from "next/image";

// interface Testimonial {
//   id: number;
//   name: string;
//   title: string;
//   company: string;
//   rating: number;
//   text: string;
//   avatar: string;
//   initials: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: "Ramesh Yadav",
//     title: "Chief Marketing Officer",
//     company: "Baidyanath",
//     rating: 5,
//     text: "The agency came up with great ideas and analytics to make the brand resonate more with its target audience and become more search friendly when consumers are looking for our categories of products for their problems.",
//     avatar: "",
//     initials: "RY",
//   },
//   {
//     id: 2,
//     name: "Mr. Vineet Tandon",
//     title: "Head of Marketing",
//     company: "HCL Technologies",
//     rating: 5,
//     text: "Brand Visage have been our growth partner in terms of creative services, performance and lead nurturing. We are very happy with their creative & prompt ideas helping us reach out & engage with target audience and increase our brand awareness.",
//     avatar: "",
//     initials: "VT",
//   },
//   {
//     id: 3,
//     name: "Ruchin Khanduja",
//     title: "Head Marketing",
//     company: "HSIL Consumer Products Division",
//     rating: 5,
//     text: "Brand Visage has been a highly engaged partner in our marketing journey. Their team's proactive engagement to understand our products and customers and to raise the visibility of Digy4 in the marketplace is instrumental.",
//     avatar: "",
//     initials: "RK",
//   },
//   {
//     id: 4,
//     name: "Priya Sharma",
//     title: "VP Brand Strategy",
//     company: "Marico Limited",
//     rating: 5,
//     text: "Working with Brand Visage has transformed our digital presence entirely. Their data-driven approach combined with creative storytelling has helped us achieve a 3x increase in qualified leads and significantly improved our brand recall across key markets.",
//     avatar: "",
//     initials: "PS",
//   },
//   {
//     id: 5,
//     name: "Arjun Mehta",
//     title: "Director of Growth",
//     company: "Nykaa",
//     rating: 5,
//     text: "Brand Visage understands the nuances of digital marketing like no other agency we've worked with. Their holistic approach — from SEO to performance campaigns — has consistently delivered results that exceed our expectations quarter after quarter.",
//     avatar: "",
//     initials: "AM",
//   },
//   {
//     id: 6,
//     name: "Deepika Nair",
//     title: "Chief Digital Officer",
//     company: "Titan Company",
//     rating: 5,
//     text: "The team at Brand Visage brings both creativity and analytical rigor to every campaign. They've helped us bridge the gap between our traditional brand equity and modern digital consumers, resulting in stronger engagement across all touchpoints.",
//     avatar: "",
//     initials: "DN",
//   },
// ];

// const AVATAR_COLORS = [
//   "bg-[#8B1A4A]",
//   "bg-[#6B2D6B]",
//   "bg-[#1A5276]",
//   "bg-[#1B4332]",
//   "bg-[#7B341E]",
//   "bg-[#2C3E70]",
// ];

// export default function ContactTestimonial() {
//   const [current, setCurrent] = useState(0);
//   const [animating, setAnimating] = useState(false);
//   const [direction, setDirection] = useState<"left" | "right">("right");
//   const [visible, setVisible] = useState(true);
//   const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

//   const total = testimonials.length;

//   const goTo = useCallback(
//     (index: number, dir: "left" | "right") => {
//       if (animating) return;
//       setAnimating(true);
//       setDirection(dir);
//       setVisible(false);

//       setTimeout(() => {
//         setCurrent(index);
//         setVisible(true);
//         setTimeout(() => setAnimating(false), 400);
//       }, 350);
//     },
//     [animating],
//   );

//   const next = useCallback(() => {
//     goTo((current + 1) % total, "right");
//   }, [current, total, goTo]);

//   const prev = useCallback(() => {
//     goTo((current - 1 + total) % total, "left");
//   }, [current, total, goTo]);

//   useEffect(() => {
//     autoPlayRef.current = setInterval(() => {
//       next();
//     }, 3000);
//     return () => {
//       if (autoPlayRef.current) clearInterval(autoPlayRef.current);
//     };
//   }, [next]);

//   const resetAutoPlay = useCallback(() => {
//     if (autoPlayRef.current) clearInterval(autoPlayRef.current);
//     autoPlayRef.current = setInterval(() => {
//       next();
//     }, 3000);
//   }, [next]);

//   const handlePrev = () => {
//     prev();
//     resetAutoPlay();
//   };

//   const handleNext = () => {
//     next();
//     resetAutoPlay();
//   };

//   const handleDot = (i: number) => {
//     if (i === current) return;
//     goTo(i, i > current ? "right" : "left");
//     resetAutoPlay();
//   };

//   const t = testimonials[current];

//   const slideStyle: React.CSSProperties = {
//     transition: "opacity 0.35s ease, transform 0.35s ease",
//     opacity: visible ? 1 : 0,
//     transform: visible
//       ? "translateX(0) scale(1)"
//       : direction === "right"
//         ? "translateX(-40px) scale(0.97)"
//         : "translateX(40px) scale(0.97)",
//   };

//   return (
//     <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
//       {/* Heading */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
//           READ WHAT OUR!{" "}
//           <span className="text-[#f26522]">CLIENTS HAVE TO SAY</span>
//         </h2>
//       </div>

//       {/* Slider Container */}
//       <div className="relative max-w-3xl mx-auto">
//         {/* Left Arrow */}
//         <button
//           onClick={handlePrev}
//           aria-label="Previous testimonial"
//           className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 sm:-translate-x-14 z-10
//             w-10 h-10 rounded-full flex items-center justify-center
//             border border-white/20 bg-white/5 backdrop-blur-sm
//             hover:bg-[#f26522]/20 hover:border-[#f26522]/50
//             transition-all duration-300 text-white/70 hover:text-white cursor-pointer"
//         >
//           <ChevronLeft className="w-5 h-5" />
//         </button>

//         {/* Card */}
//         <div
//           className="glass rounded-2xl p-8 sm:p-10 mx-6 sm:mx-0 text-center"
//           style={slideStyle}
//         >
//           {/* Quote Icon */}
//           <div
//             className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6"
//             style={{ backgroundColor: "#8B1A4A" }}
//           >
//             <Quote className="w-5 h-5 text-white fill-white" />
//           </div>

//           {/* Avatar */}
//           <div className="flex justify-center mb-4">
//             <div
//               className={`w-20 h-20 rounded-full flex items-center justify-center text-white text-xl font-bold border-2 border-[#f26522]/40 ${
//                 AVATAR_COLORS[t.id - 1] || "bg-[#8B1A4A]"
//               }`}
//             >
//               {t.initials}
//             </div>
//             <div></div>
//           </div>

//           {/* Name & Role */}
//           <h3 className="text-white font-bold text-xl mb-1">{t.name}</h3>
//           <p className="text-white/50 text-sm mb-1">{t.title}</p>
//           <p className="text-[#f26522] text-sm font-medium mb-4">{t.company}</p>

//           {/* Stars */}
//           <div className="flex justify-center gap-1 mb-6">
//             {Array.from({ length: t.rating }).map((_, i) => (
//               <span key={i} className="text-yellow-400 text-lg">
//                 ★
//               </span>
//             ))}
//           </div>

//           {/* Testimonial Text */}
//           <p className="text-white/70 text-base leading-relaxed italic">
//             &ldquo;{t.text}&rdquo;
//           </p>
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={handleNext}
//           aria-label="Next testimonial"
//           className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 sm:translate-x-14 z-10
//             w-10 h-10 rounded-full flex items-center justify-center
//             border border-white/20 bg-white/5 backdrop-blur-sm
//             hover:bg-[#f26522]/20 hover:border-[#f26522]/50
//             transition-all duration-300 text-white/70 hover:text-white cursor-pointer"
//         >
//           <ChevronRight className="w-5 h-5" />
//         </button>
//       </div>

//       {/* Navigation Dots */}
//       <div className="flex justify-center gap-2 mt-8">
//         {testimonials.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => handleDot(i)}
//             aria-label={`Go to testimonial ${i + 1}`}
//             className="transition-all duration-300 rounded-full"
//             style={{
//               width: i === current ? "24px" : "10px",
//               height: "10px",
//               backgroundColor:
//                 i === current ? "#f26522" : "rgba(255,255,255,0.25)",
//             }}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

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
    name: "Ramesh Yadav",
    role: "Chief Marketing Officer at Baidyanath",
    text: "The agency came up with great ideas and analytics to make the brand resonate more with its target audience and become more search friendly when consumers are looking for our categories of products for their problems.",
    initials: "RY",
    avatarBg: "#6B1A3A",
  },
  {
    id: 2,
    name: "Mr. Vineet Tandon",
    role: "Marketing, HCL",
    text: "Brand Visage have been our growth partner in terms of creative services, performance and lead nurturing. We are very happy with their creative & prompt ideas helping us reach out & engage with target audience and increase our brand awareness.",
    initials: "VT",
    avatarBg: "#1A3A6B",
  },
  {
    id: 3,
    name: "Ruchin Khanduja",
    role: "Head Marketing, HSIL Consumer Products Division",
    text: "Brand Visage has been a highly engaged partner in our marketing journey. Their team's proactive engagement to understand our products and customers and to raise the visibility of Digy4 in the marketplace is instrumental.",
    initials: "RK",
    avatarBg: "#1A5C3A",
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "VP Brand Strategy, Marico Limited",
    text: "Working with Brand Visage transformed our digital presence entirely. Their data-driven approach combined with creative storytelling helped us achieve a 3x increase in qualified leads and improved brand recall across key markets.",
    initials: "PS",
    avatarBg: "#5C3A1A",
  },
  {
    id: 5,
    name: "Arjun Mehta",
    role: "Director of Growth, Nykaa",
    text: "Brand Visage understands the nuances of digital marketing like no other agency. Their holistic approach from SEO to performance campaigns has consistently delivered results that exceed our expectations quarter after quarter.",
    initials: "AM",
    avatarBg: "#3A1A6B",
  },
  {
    id: 6,
    name: "Deepika Nair",
    role: "Chief Digital Officer, Titan Company",
    text: "The team at Brand Visage brings both creativity and analytical rigor to every campaign. They've helped us bridge the gap between traditional brand equity and modern digital consumers, resulting in stronger engagement.",
    initials: "DN",
    avatarBg: "#1A5C5C",
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
      <div className="relative max-w-[1200px] mx-auto">
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
