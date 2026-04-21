"use client";
import React from "react";
import { motion, Transition } from "framer-motion";
import {
  BarChart3,
  Users,
  Zap,
  TrendingUp,
  Globe,
  Target,
  ShieldCheck,
  DollarSign,
  Rocket,
  Search,
  UserCheck,
  Settings,
  LineChart,
  ChevronRight,
  LucideProps,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface BenefitItem {
  title: string;
  icon: React.ReactElement<LucideProps>;
  desc: string;
}

interface ProcessStep {
  step: number;
  title: string;
  desc: string;
  icon: React.ReactElement<LucideProps>;
}

// ─── Animation helpers ────────────────────────────────────────────────────────

const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, ease: EASE, delay } satisfies Transition,
});

// ─── Data ─────────────────────────────────────────────────────────────────────

const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Business & Market Analysis",
    desc: "Our first step is to get to know your business model, audience and competitive environment, which help us in devising a solid affiliate growth plan.",
    icon: <Search className="w-5 h-5" />,
  },
  {
    step: 2,
    title: "Affiliate Discovery & Onboarding",
    desc: "We locate and sign up excellent affiliates who not only fit your niche but also have the potential of bringing in relevant and highly motivated traffic.",
    icon: <UserCheck className="w-5 h-5" />,
  },
  {
    step: 3,
    title: "Campaign Setup & Asset Creation",
    desc: "We work on the creation of all necessary promotional materials, including creatives, landing pages, and other brand collateral to make sure that affiliates have all they need to promote your brand most effectively.",
    icon: <Settings className="w-5 h-5" />,
  },
  {
    step: 4,
    title: "Performance Monitoring & Optimization",
    desc: "With regularly analyzing the results and making necessary adjustments to partnerships and campaigns, we are able to enhance efficiency and achieve the highest levels of output.",
    icon: <BarChart3 className="w-5 h-5" />,
  },
  {
    step: 5,
    title: "Reporting & Growth Insights",
    desc: "You are provided with straightforward and well-supported data reports along with solid recommendations to help you track your performance and confidently expand your business.",
    icon: <LineChart className="w-5 h-5" />,
  },
];

const benefits: BenefitItem[] = [
  {
    title: "Revenue-Driven Growth",
    icon: <DollarSign />,
    desc: "Drive steady sales by working with affiliates who focus on your performance.",
  },
  {
    title: "Wider Brand Exposure",
    icon: <Globe />,
    desc: "Get your brand seen on well-trusted platforms and among the right audience segments.",
  },
  {
    title: "Expanded Audience Reach",
    icon: <Users />,
    desc: "Explore new potential customers with high purchasing intent beyond your current channels.",
  },
  {
    title: "Cost-Efficient Marketing",
    icon: <Zap />,
    desc: "Pay only for successful transactions, making this channel very optimized and scalable.",
  },
  {
    title: "Enhanced Brand Trust",
    icon: <ShieldCheck />,
    desc: "Partner with trustworthy affiliates to improve brand perception and increase authority.",
  },
  {
    title: "High-Quality Traffic",
    icon: <Target />,
    desc: "Bring in those users who will most likely interact, convert and carry out the desired action.",
  },
  {
    title: "Improved Conversion Rates",
    icon: <TrendingUp />,
    desc: "Higher user intent matching and better conversions come from targeted promotions.",
  },
  {
    title: "Low-Risk Growth Model",
    icon: <Rocket />,
    desc: "Keep your risks low upfront while still having the ability to perform well in the long run.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <span
    className="inline-block uppercase tracking-[0.22em] mb-3"
    style={{ fontSize: "0.98rem", color: "#f26522" }}
  >
    {children}
  </span>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const AffProcessBenifit: React.FC = () => {
  return (
    <div
      className="w-full overflow-x-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0b0f1a 0%, #1a1410 35%, #0f172a 65%, #1a1410 100%)",
      }}
    >
      {/* ════════════════════════════════════════
          SECTION 1 — PROCESS
      ════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 md:py-36">
        {/* Global ambient glow */}
        <div
          className="pointer-events-none absolute"
          style={{
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "900px",
            height: "500px",
            background:
              "radial-gradient(ellipse, rgba(242,101,34,0.055) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ── Header ── */}
          <div className="max-w-3xl mb-16 md:mb-20">
            <motion.div {...fadeUp(0)}>
              <SectionLabel>Step-by-Step Framework</SectionLabel>
            </motion.div>

            <motion.h2
              {...fadeUp(0.07)}
              className="font-bold text-white mb-5 leading-[1.08]"
              style={{
                fontSize: "clamp(1.9rem, 4.5vw, 3.5rem)",
                fontFamily: "var(--font-outfit, sans-serif)",
              }}
            >
              Our Affiliate Marketing{" "}
              <span style={{ color: "#f26522" }}>Process</span>
            </motion.h2>

            <motion.p
              {...fadeUp(0.12)}
              className="text-neutral-400 leading-relaxed"
              style={{
                fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
                maxWidth: "60ch",
              }}
            >
              Through a structured and performance-driven approach, we develop
              affiliate systems that generate consistent traffic, strong
              conversions, as well as measurable returns.
            </motion.p>
          </div>

          {/* ── Process Steps — alternating timeline layout ── */}
          <div className="relative">
            {/* Vertical spine (desktop only) */}
            <div
              className="hidden lg:block absolute"
              style={{
                left: "50%",
                top: 0,
                bottom: 0,
                width: 1,
                background:
                  "linear-gradient(to bottom, transparent, rgba(242,101,34,0.25) 10%, rgba(242,101,34,0.25) 90%, transparent)",
                transform: "translateX(-50%)",
              }}
            />

            <div className="flex flex-col gap-8 md:gap-10 lg:gap-12">
              {processSteps.map((step, i) => {
                const isEven = i % 2 === 0;
                return (
                  <motion.div
                    key={step.step}
                    {...fadeUp(i * 0.08)}
                    className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-0 ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Card */}
                    <motion.div
                      whileHover={{
                        borderColor: "rgba(242,101,34,0.4)",
                        y: -4,
                        boxShadow: "0 24px 56px rgba(242,101,34,0.1)",
                      }}
                      transition={{ duration: 0.35 }}
                      className="group w-full lg:w-[45%] relative overflow-hidden"
                      style={{
                        padding: "clamp(1.5rem, 2.5vw, 2rem)",
                        borderRadius: "1.5rem",
                        border: "1px solid rgba(255,255,255,0.07)",
                        background:
                          "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 100%)",
                        backdropFilter: "blur(20px)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                        transition:
                          "border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease",
                      }}
                    >
                      {/* Hover glow */}
                      <div
                        className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 pointer-events-none"
                        style={{
                          background:
                            "radial-gradient(ellipse 80% 60% at 0% 100%, rgba(242,101,34,0.08) 0%, transparent 70%)",
                          transition: "opacity 0.5s ease",
                        }}
                      />

                      {/* Watermark number */}
                      <span
                        className="absolute top-3 right-5 font-mono font-black select-none pointer-events-none"
                        style={{
                          fontSize: "clamp(4rem, 7vw, 6rem)",
                          color: "rgba(242,101,34,0.055)",
                          lineHeight: 1,
                        }}
                      >
                        {String(step.step).padStart(2, "0")}
                      </span>

                      <div className="relative z-10 flex flex-col gap-3">
                        {/* Icon + step */}
                        <div className="flex items-center gap-3">
                          <div
                            className="flex items-center justify-center rounded-xl text-black flex-shrink-0"
                            style={{
                              width: 42,
                              height: 42,
                              background: "#f26522",
                              boxShadow: "0 0 18px rgba(242,101,34,0.4)",
                            }}
                          >
                            {step.icon}
                          </div>
                          <span
                            className="font-mono font-bold text-xs"
                            style={{ color: "#f26522" }}
                          >
                            Step {String(step.step).padStart(2, "0")}
                          </span>
                        </div>

                        <h3
                          className="font-bold text-white leading-snug"
                          style={{
                            fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
                            fontFamily: "var(--font-outfit, sans-serif)",
                          }}
                        >
                          {step.title}
                        </h3>

                        <p
                          className="text-neutral-400 group-hover:text-neutral-300 leading-relaxed"
                          style={{
                            fontSize: "clamp(0.8rem, 1.1vw, 0.88rem)",
                            transition: "color 0.4s ease",
                          }}
                        >
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>

                    {/* Centre dot on timeline */}
                    <div
                      className="hidden lg:flex items-center justify-center w-[10%] flex-shrink-0 relative z-10"
                      style={{ pointerEvents: "none" }}
                    >
                      <div
                        className="relative flex items-center justify-center"
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: "50%",
                          background: "#f26522",
                          boxShadow:
                            "0 0 0 6px rgba(242,101,34,0.15), 0 0 20px rgba(242,101,34,0.3)",
                        }}
                      >
                        <span
                          className="font-mono font-bold text-black"
                          style={{ fontSize: "0.7rem" }}
                        >
                          {step.step}
                        </span>
                      </div>
                    </div>

                    {/* Empty counterpart to maintain grid */}
                    <div className="hidden lg:block lg:w-[45%]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 2 — BENEFITS
      ════════════════════════════════════════ */}
      <section className="relative md:py-20">
        {/* Decorative glows */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 15% 85%, rgba(242,101,34,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 85% 15%, rgba(242,101,34,0.04) 0%, transparent 55%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ── Header row ── */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-12 mb-14 md:mb-20">
            {/* LEFT CONTENT */}
            <div className="w-full lg:w-3/5 flex flex-col justify-end">
              <motion.div {...fadeUp(0)}>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-[#F26522] font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
                >
                  Our Expertise
                </motion.span>
              </motion.div>

              <motion.h2
                {...fadeUp(0.07)}
                className="font-bold text-white mt-3"
                style={{
                  fontSize: "clamp(1.9rem, 5vw, 3.75rem)",
                  fontFamily: "var(--font-outfit, sans-serif)",
                  lineHeight: 1.1,
                }}
              >
                Key Benefits of <br className="hidden sm:block" />
                <span
                  style={{
                    color: "#f26522",
                    fontStyle: "italic",
                  }}
                >
                  Affiliate Marketing
                </span>
                <span
                  className="block mt-2"
                  style={{
                    fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                    color: "rgba(255,255,255,0.5)",
                    fontWeight: 400,
                    fontFamily: "var(--font-poppins, sans-serif)",
                  }}
                >
                  for Your Business
                </span>
              </motion.h2>
            </div>

            {/* CTA */}
            <motion.div
              {...fadeUp(0.15)}
              className="w-full lg:w-auto flex lg:items-end"
            >
              <motion.a
                href="/contact"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 46px rgba(242,101,34,0.6)",
                }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-2.5 font-bold rounded-xl w-full sm:w-auto"
                style={{
                  background: "#f26522",
                  color: "#000",
                  padding: "0.9rem 2.25rem",
                  fontSize: "clamp(0.8rem, 1.2vw, 0.92rem)",
                  boxShadow: "0 0 30px rgba(242,101,34,0.35)",
                  transition: "box-shadow 0.35s ease",
                  letterSpacing: "0.06em",
                  whiteSpace: "nowrap",
                  fontFamily: "var(--font-poppins, sans-serif)",
                  textDecoration: "none",
                }}
              >
                START YOUR SUCCESS JOURNEY
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </motion.div>
          </div>

          {/* ── Benefits Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-10">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                {...fadeUp((i % 4) * 0.07)}
                whileHover={{
                  borderColor: "rgba(242,101,34,0.38)",
                  y: -5,
                  boxShadow: "0 20px 48px rgba(242,101,34,0.12)",
                }}
                className="group relative overflow-hidden cursor-default"
                style={{
                  padding: "clamp(1.2rem, 1.8vw, 1.6rem)",
                  borderRadius: "1.4rem",
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "rgba(255,255,255,0.025)",
                  backdropFilter: "blur(12px)",
                  transition:
                    "border-color 0.4s ease, background 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-[inherit] opacity-0 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 70% at 0% 100%, rgba(242,101,34,0.09) 0%, transparent 70%)",
                    transition: "opacity 0.5s ease",
                  }}
                />

                {/* Watermark icon */}
                <div
                  className="absolute -bottom-2 -right-2 pointer-events-none opacity-0 group-hover:opacity-100"
                  style={{
                    color: "rgba(242,101,34,0.07)",
                    transition: "opacity 0.5s ease",
                  }}
                >
                  {React.cloneElement(benefit.icon, {
                    size: 80,
                  } as LucideProps)}
                </div>

                {/* Icon badge */}
                <div
                  className="flex items-center justify-center rounded-xl mb-4 relative z-10 flex-shrink-0 group-hover:[background:#f26522] group-hover:[color:#000]"
                  style={{
                    width: 44,
                    height: 44,
                    background: "rgba(242,101,34,0.1)",
                    color: "#f26522",
                    border: "1px solid rgba(242,101,34,0.18)",
                    transition:
                      "background 0.3s ease, color 0.3s ease, border-color 0.3s ease",
                  }}
                >
                  {React.cloneElement(benefit.icon, {
                    size: 19,
                  } as LucideProps)}
                </div>

                <h4
                  className="text-white font-bold mb-2 leading-snug relative z-10"
                  style={{
                    fontSize: "clamp(0.88rem, 1.35vw, 1rem)",
                    fontFamily: "var(--font-outfit, sans-serif)",
                  }}
                >
                  {benefit.title}
                </h4>

                <p
                  className="text-neutral-500 group-hover:text-neutral-300 leading-relaxed relative z-10"
                  style={{
                    fontSize: "clamp(0.72rem, 0.95vw, 0.8rem)",
                    transition: "color 0.4s ease",
                  }}
                >
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* ── Bottom CTA bar ── */}
          <motion.div
            {...fadeUp(0.1)}
            className="mt-16 md:mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl overflow-hidden"
            style={{
              padding: "clamp(1.5rem, 3vw, 2.5rem) clamp(1.5rem, 4vw, 3rem)",
              background:
                "linear-gradient(135deg, rgba(242,101,34,0.12) 0%, rgba(242,101,34,0.04) 100%)",
              border: "1px solid rgba(242,101,34,0.2)",
            }}
          >
            <div>
              <p
                className="font-bold text-white mb-1"
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.35rem)",
                  fontFamily: "var(--font-outfit, sans-serif)",
                }}
              >
                Ready to scale through affiliate marketing?
              </p>
              <p
                className="text-neutral-400"
                style={{ fontSize: "clamp(0.8rem, 1.1vw, 0.875rem)" }}
              >
                Let&apos;s build a programme that drives consistent, measurable
                growth.
              </p>
            </div>

            <motion.a
              href="/contact"
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 46px rgba(242,101,34,0.55)",
              }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2.5 font-bold rounded-xl flex-shrink-0"
              style={{
                background: "#f26522",
                color: "#000",
                padding: "0.85rem 2rem",
                fontSize: "clamp(0.8rem, 1.1vw, 0.9rem)",
                boxShadow: "0 0 28px rgba(242,101,34,0.3)",
                letterSpacing: "0.05em",
                whiteSpace: "nowrap",
                fontFamily: "var(--font-poppins, sans-serif)",
                textDecoration: "none",
                transition: "box-shadow 0.35s ease",
              }}
            >
              GET STARTED
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AffProcessBenifit;
