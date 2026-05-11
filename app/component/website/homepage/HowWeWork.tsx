"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Discover & Audit",
    content:
      "We conduct a deep-dive audit of your brand, competitors, audience, and current digital presence. This forms the intelligence foundation of everything we build for you.",
    color: "#38bdf8",
    position: "bottom" as const, // card sits BELOW the center line
  },
  {
    id: 2,
    title: "Strategise & Plan",
    content:
      "Our certified strategists craft a custom, multi-channel digital marketing blueprint aligned with your business goals, budget, and timeline.",
    color: "#818cf8",
    position: "top" as const, // card sits ABOVE the center line
  },
  {
    id: 3,
    title: "Execute & Launch",
    content:
      "From creative production to campaign activation, our team of 13+ specialists executes with speed and precision across every channel simultaneously.",
    color: "#2dd4bf",
    position: "bottom" as const,
  },
  {
    id: 4,
    title: "Optimise & Scale",
    content:
      "We track every metric, analyse what's working, eliminate what's not, and continuously optimise to scale your results month over month.",
    color: "#f26522",
    position: "top" as const,
  },
];

const AUTOPLAY_INTERVAL = 2000;

export default function App() {
  const [activeStep, setActiveStep] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimers = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
  };

  const startAutoPlay = useCallback(() => {
    clearTimers();
    setProgress(0);

    // Progress bar tick every 20ms → 100 ticks over 2000ms
    progressRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) return 100;
        return p + 100 / (AUTOPLAY_INTERVAL / 20);
      });
    }, 20);

    intervalRef.current = setInterval(() => {
      setActiveStep((prev) => (prev < steps.length ? prev + 1 : 1));
      setProgress(0);
    }, AUTOPLAY_INTERVAL);
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    } else {
      clearTimers();
      setProgress(0);
    }
    return clearTimers;
  }, [isAutoPlaying, activeStep, startAutoPlay]);

  const handleManualStep = (id: number) => {
    setActiveStep(id);
  };

  return (
    <section className="min-h-screen py-24 px-4 md:px-10 flex flex-col items-center justify-center overflow-hidden bg-transparent">
      {/* ── Header ── */}
      <div className="max-w-4xl w-full text-center mb-12 md:mb-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[#f26522] font-bold tracking-[0.3em] text-xs md:text-sm uppercase mb-4 block font-poppins"
        >
          OUR PROCESS
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight font-outfit text-white"
        >
          A Proven Framework Built for <br className="hidden md:block" />
          <span className="text-[#f26522]">Scalable Growth</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-base md:text-lg max-w-4xl mx-auto leading-relaxed font-poppins"
        >
          At MarketRixa, the most trusted digital marketing company in
          Ahmedabad, we follow a structured, four-phase engagement model that
          eliminates guesswork and ensures every campaign we launch is primed
          for maximum ROI from day one.
        </motion.p>
      </div>

      {/* ── Timeline ── */}
      <div
        className="relative w-full max-w-6xl px-10 md:px-16 select-none py-16"
        style={{ touchAction: "pan-y" }}
      >
        {/* ── Desktop layout (md+) ── */}
        <div className="hidden md:block relative" style={{ height: 480 }}>
          {/* Center baseline */}
          <div
            className="absolute left-0 right-0 bg-white/10"
            style={{ top: "50%", height: 2, transform: "translateY(-50%)" }}
          />

          {/* Coloured progress segments between dots */}
          {steps.map((step, idx) => {
            if (idx === 0) return null;
            const leftPct = ((idx - 1) / (steps.length - 1)) * 100;
            const widthPct = (1 / (steps.length - 1)) * 100;
            const isSegmentActive = activeStep > idx;
            return (
              <div
                key={`seg-${idx}`}
                className="absolute"
                style={{
                  left: `${leftPct}%`,
                  width: `${widthPct}%`,
                  top: "50%",
                  height: 3,
                  transform: "translateY(-50%)",
                  background: isSegmentActive
                    ? `linear-gradient(to right, ${steps[idx - 1].color}, ${
                        step.color
                      })`
                    : "rgba(255,255,255,0.08)",
                  transition: "background 0.6s ease",
                  zIndex: 10,
                }}
              />
            );
          })}

          {/* Steps */}
          {steps.map((step, idx) => {
            const isCurrent = activeStep === step.id;
            const isActive = activeStep >= step.id;
            const leftPct = (idx / (steps.length - 1)) * 100;
            const isAbove = step.position === "top";

            return (
              <div
                key={step.id}
                className="absolute flex flex-col items-center"
                style={{
                  left: `${leftPct}%`,
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 20,
                  width: 220,
                }}
              >
                {/* Card – above or below the center line */}
                <motion.div
                  animate={{
                    opacity: isCurrent ? 1 : 0.35,
                    scale: isCurrent ? 1.05 : 0.95,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute rounded-2xl p-5 border"
                  style={{
                    ...(isAbove
                      ? { bottom: "calc(50% + 32px)" }
                      : { top: "calc(50% + 32px)" }),
                    background: isCurrent
                      ? "rgba(255,255,255,0.05)"
                      : "rgba(255,255,255,0.02)",
                    borderColor: isCurrent
                      ? `${step.color}55`
                      : "rgba(255,255,255,0.06)",
                    boxShadow: isCurrent ? `0 0 30px ${step.color}22` : "none",
                    width: "300px",
                  }}
                >
                  <span
                    className="text-[14px] font-bold uppercase tracking-widest mb-1 block font-poppins"
                    style={{ color: step.color }}
                  >
                    Step 0{step.id}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-white font-outfit leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-poppins">
                    {step.content}
                  </p>
                </motion.div>

                {/* Connector stem */}
                <div
                  className="absolute"
                  style={{
                    width: 2,
                    height: 28,
                    background: isActive
                      ? `linear-gradient(to ${isAbove ? "bottom" : "top"}, ${
                          step.color
                        }88, transparent)`
                      : "rgba(255,255,255,0.08)",
                    ...(isAbove ? { bottom: "50%" } : { top: "50%" }),
                  }}
                />

                {/* Dot */}
                <motion.div
                  animate={{
                    boxShadow: isCurrent ? `0 0 22px ${step.color}88` : "none",
                    borderColor: isActive
                      ? step.color
                      : "rgba(255,255,255,0.15)",
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute w-9 h-9 rounded-full border-2 bg-[#0b0f1a] flex items-center justify-center"
                  style={{ top: "50%", transform: "translateY(-50%)" }}
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full transition-colors duration-500"
                    style={{
                      backgroundColor: isActive ? step.color : "#2a2a3a",
                    }}
                  />
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* ── Mobile layout (< md) ── */}
        <div className="flex md:hidden flex-col gap-5 py-4">
          {steps.map((step, idx) => {
            const isCurrent = activeStep === step.id;
            const isActive = activeStep >= step.id;

            return (
              <motion.div
                key={step.id}
                animate={{
                  opacity: isCurrent ? 1 : 0.4,
                  scale: isCurrent ? 1 : 0.97,
                }}
                transition={{ duration: 0.4 }}
                className="flex items-start gap-4"
              >
                {/* Left: dot + vertical line */}
                <div className="flex flex-col items-center pt-1">
                  <div
                    className="w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                    style={{
                      borderColor: isActive
                        ? step.color
                        : "rgba(255,255,255,0.15)",
                      boxShadow: isCurrent
                        ? `0 0 18px ${step.color}66`
                        : "none",
                      backgroundColor: "#0b0f1a",
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: isActive ? step.color : "#2a2a3a",
                      }}
                    />
                  </div>
                  {idx < steps.length - 1 && (
                    <div
                      className="w-0.5 flex-1 mt-1 min-h-[40px]"
                      style={{
                        background: isActive
                          ? `linear-gradient(to bottom, ${step.color}, ${
                              steps[idx + 1].color
                            })`
                          : "rgba(255,255,255,0.08)",
                        transition: "background 0.6s",
                      }}
                    />
                  )}
                </div>

                {/* Right: card */}
                <div
                  className="flex-1 rounded-xl p-4 border mb-2"
                  style={{
                    background: isCurrent
                      ? "rgba(255,255,255,0.05)"
                      : "rgba(255,255,255,0.02)",
                    borderColor: isCurrent
                      ? `${step.color}55`
                      : "rgba(255,255,255,0.06)",
                  }}
                >
                  <span
                    className="text-[14px] font-bold uppercase tracking-widest mb-1 block font-poppins"
                    style={{ color: step.color }}
                  >
                    Step 0{step.id}
                  </span>
                  <h3 className="text-xl font-bold mb-1.5 text-white font-outfit">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-poppins">
                    {step.content}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Progress bar + dot indicators ── */}
      <div className="mt-10 w-full max-w-xs flex flex-col items-center gap-4">
        {/* Autoplay progress bar */}
        {isAutoPlaying && (
          <div className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                background: steps[activeStep - 1].color,
              }}
            />
          </div>
        )}

        {/* Step dots */}
        <div className="flex gap-3 items-center">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => handleManualStep(step.id)}
              aria-label={`Go to step ${step.id}`}
              className="h-2 rounded-full transition-all duration-500 cursor-pointer"
              style={{
                width: activeStep === step.id ? 32 : 8,
                backgroundColor:
                  activeStep === step.id
                    ? step.color
                    : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
