"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, User } from "lucide-react";

// --- Types ---
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Mehta",
    role: "CEO",
    company: "Gujarat Tech Solutions",
    content:
      "Marketrixa transformed our outdated site into a lead-generating machine. Their attention to detail in responsive design is unmatched in the region.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Founder",
    company: "EcoStyle Wear",
    content:
      "The dynamic features they built for our e-commerce platform have increased our user engagement by 40%. It's fast, stylish, and exactly what we needed.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Marketing Director",
    company: "BrightPath Education",
    content:
      "Their SEO-friendly approach from day one helped us rank on the first page within months of the new site launch. Highly professional team!",
    rating: 5,
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "Product Manager",
    company: "Nexus AI",
    content:
      "The clean code and scalable architecture Marketrixa provides meant we could add new features effortlessly as our startup grew. Simply brilliant.",
    rating: 5,
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Proprietor",
    company: "Singh & Sons Enterprises",
    content:
      "The redesign was flawless. They captured our brand essence perfectly while making the user journey intuitive and smooth for our clients.",
    rating: 5,
  },
];

const AUTO_PLAY_INTERVAL = 5000;

const WebTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const dragConstraintsRef = useRef(null);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  }, []);

  // Auto-play Logic
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextTestimonial, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [isPaused, nextTestimonial]);

  // Framer Motion Variants
  const cardVariants: Variants = {
    initial: (direction: number) => ({
      opacity: 0,
      scale: 0.9,
      x: direction > 0 ? 100 : -100,
      filter: "blur(10px)",
    }),
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any },
    },
    exit: (direction: number) => ({
      opacity: 0,
      scale: 0.9,
      x: direction > 0 ? -100 : 100,
      filter: "blur(10px)",
      transition: { duration: 0.4 },
    }),
  };

  // Helper for direction tracking
  const [[page, direction], setPage] = useState([0, 0]);
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    if (newDirection > 0) nextTestimonial();
    else prevTestimonial();
  };

  return (
    <section
      className="py-14 px-6 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#F26522]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Side: Header & Controls */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#F26522] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                Client Success Stories
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
                What our clients say <br />
                <span className="text-gray-500">about Marketrixa.</span>
              </h2>

              <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-md">
                We've helped hundreds of businesses build their digital
                presence. Hear from the leaders who trusted us.
              </p>

              {/* Navigation Controls & Pagination */}
              <div className="flex flex-col gap-8">
                <div className="flex gap-4 items-center">
                  <button
                    onClick={() => paginate(-1)}
                    className="p-4 rounded-full cursor-pointer border border-white/10 text-white hover:bg-white hover:text-black transition-all z-20 active:scale-95 bg-white/5"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={() => paginate(1)}
                    className="p-4 rounded-full cursor-pointer bg-[#F26522] text-white hover:scale-110 transition-all shadow-[0_10px_20px_rgba(242,101,34,0.3)] z-20 active:scale-95"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>

                {/* Progress Bar & Dots */}
                <div className="space-y-4 max-w-[200px]">
                  <div className="flex gap-2">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          const dir = idx > currentIndex ? 1 : -1;
                          setPage([idx, dir]);
                          setCurrentIndex(idx);
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === currentIndex
                            ? "w-8 bg-[#F26522]"
                            : "w-2 bg-white/20"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#F26522]"
                      initial={{ width: "0%" }}
                      animate={{
                        width: `${
                          ((currentIndex + 1) / testimonials.length) * 100
                        }%`,
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Swipeable Card Container */}
          <div
            className="lg:col-span-7 relative h-[480px] md:h-[420px] flex items-center group"
            ref={dragConstraintsRef}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = offset.x;
                  if (swipe < -50) paginate(1);
                  else if (swipe > 50) paginate(-1);
                }}
                className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl flex flex-col justify-between cursor-grab active:cursor-grabbing select-none"
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-4 bg-[#F26522]/10 rounded-2xl">
                      <Quote className="text-[#F26522] w-8 h-8" />
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonials[currentIndex].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="fill-yellow-500 text-yellow-500"
                          />
                        ),
                      )}
                    </div>
                  </div>
                  <p className="text-white text-lg md:text-2xl font-medium leading-relaxed italic">
                    "{testimonials[currentIndex].content}"
                  </p>
                </div>

                <div className="flex items-center gap-6 mt-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center border border-white/10 shrink-0">
                    <User className="text-gray-400 w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-xl leading-tight">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-500 text-xs md:text-sm font-bold uppercase tracking-widest mt-1">
                      {testimonials[currentIndex].role} —{" "}
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Visual Decoration Stack */}
            <div className="absolute -z-10 top-6 left-6 -right-4 -bottom-4 bg-white/[0.02] rounded-[2.5rem] border border-white/5" />
          </div>
        </div>

        {/* Footer Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-24 pt-12 border-t border-white/5 flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
        >
          <div className="flex items-center gap-3 text-white font-bold text-sm">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black">
              G
            </div>
            Google Reviews 5.0
          </div>
          <div className="flex items-center gap-3 text-white font-bold text-sm">
            <div className="w-8 h-8 bg-[#00D084] rounded-lg flex items-center justify-center font-black">
              C
            </div>
            Clutch Top Agency
          </div>
          <div className="flex items-center gap-3 text-white font-bold text-sm">
            <div className="w-12 h-8 bg-white text-black rounded-lg flex items-center justify-center font-black text-xs">
              TRUST
            </div>
            Trustpilot Verified
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WebTestimonials;
