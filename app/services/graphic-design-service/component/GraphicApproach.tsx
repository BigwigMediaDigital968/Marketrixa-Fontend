import React from "react";
import { motion, HTMLMotionProps, Variants } from "framer-motion";
import {
  Check,
  Palette,
  Share2,
  Megaphone,
  Briefcase,
  ChevronRight,
  Target,
  Layers,
} from "lucide-react";

/**
 * TYPE RESOLUTION:
 * We define the variants using the 'Variants' type from framer-motion.
 * This ensures 'ease' is recognized as a valid Easing literal.
 */
const fadeLeftVariant: Variants = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
};

const fadeUpVariant: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
};

const commonTransition = (delay: number) => ({
  duration: 0.8,
  delay,
  ease: "easeOut" as const, // 'as const' ensures string literal type safety
});

const viewportSettings = { once: true, margin: "-50px" };

const CircleRing: React.FC<{ size: number; className?: string }> = ({
  size,
  className,
}) => (
  <div
    className={`absolute rounded-full border border-[#f26522]/10 pointer-events-none ${className}`}
    style={{ width: size, height: size }}
  />
);

const GraphicApproach: React.FC = () => {
  const designServices = [
    {
      title: "Brand Identity Design",
      desc: "A strong brand starts with a strong identity. We create complete branding solutions that define how your business is perceived.",
      icon: <Palette className="w-5 h-5" />,
      items: [
        "Logo design and brand mark creation",
        "Color palette selection",
        "Typography system development",
        "Brand guidelines and usage standards",
      ],
    },
    {
      title: "Social Media Design",
      desc: "In today’s digital-first world, social media presence plays a key role. We design engaging content for all major platforms.",
      icon: <Share2 className="w-5 h-5" />,
      items: [
        "Post creatives and templates",
        "Campaign-based visual content",
        "Promotional banners",
        "Story and reel cover designs",
      ],
    },
    {
      title: "Marketing & Advertising",
      desc: "We create impactful marketing visuals that help businesses communicate their message effectively across campaigns.",
      icon: <Megaphone className="w-5 h-5" />,
      items: [
        "Digital advertising creatives",
        "Print advertisements",
        "Flyers and brochures",
        "Posters and banners",
      ],
    },
    {
      title: "Corporate & Business",
      desc: "We specialize in professional design solutions for corporate communication and high-stakes business needs.",
      icon: <Briefcase className="w-5 h-5" />,
      items: [
        "Business presentations",
        "Company profiles",
        "Pitch decks",
        "Internal communication designs",
      ],
    },
  ];

  return (
    <div className="min-h-screen text-white overflow-hidden">
      <section className="relative py-14 overflow-hidden">
        {/* Background Decorations */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute"
            style={{
              top: "20%",
              left: "-10%",
              width: "600px",
              height: "600px",
              background:
                "radial-gradient(circle, rgba(242,101,34,0.07) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
        </div>
        <CircleRing size={600} className="-top-48 -right-48 opacity-40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Text Content */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <motion.div
                initial="initial"
                whileInView="whileInView"
                viewport={viewportSettings}
                variants={fadeLeftVariant}
                transition={commonTransition(0)}
                className="flex items-center gap-3 mb-6"
              >
                <div className="h-[1px] w-8 bg-[#f26522]" />
                <span className="uppercase tracking-[0.2em] text-[#f26522] text-xs font-bold">
                  Our Approach
                </span>
              </motion.div>

              <motion.h2
                initial="initial"
                whileInView="whileInView"
                viewport={viewportSettings}
                variants={fadeLeftVariant}
                transition={commonTransition(0.1)}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1] tracking-tight"
              >
                Our Approach to <br />
                <span className="text-[#f26522]">Graphic Design</span>
              </motion.h2>

              <motion.p
                initial="initial"
                whileInView="whileInView"
                viewport={viewportSettings}
                variants={fadeLeftVariant}
                transition={commonTransition(0.2)}
                className="text-neutral-400 text-lg leading-relaxed mb-10 max-w-md font-light"
              >
                Every brand has a unique story, and our goal is to translate
                that story into powerful visuals. At Marketrix, we follow a
                structured design process that ensures clarity, consistency, and
                quality in every project. We begin by understanding your brand,
                audience, and communication goals. Based on this, we create
                design concepts that align with your identity and market
                positioning. Every visual element is carefully crafted to
                maintain balance between creativity and purpose.
              </motion.p>

              <div className="space-y-4">
                {[
                  "Understanding your brand, audience, and goals",
                  "Creating design concepts aligned with your identity",
                  "Balancing creativity with strategic purpose",
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={viewportSettings}
                    variants={fadeLeftVariant}
                    transition={commonTransition(0.3 + i * 0.1)}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#f26522]/10 border border-[#f26522]/20 flex items-center justify-center text-[#f26522] flex-shrink-0 mt-1">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-neutral-300 text-sm py-2 leading-snug">
                      {step}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Strategy Badge */}
              <motion.div
                initial="initial"
                whileInView="whileInView"
                viewport={viewportSettings}
                variants={fadeLeftVariant}
                transition={commonTransition(0.6)}
                className="mt-16 p-5 rounded-2xl bg-white/[0.02] border border-white/5 inline-flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f26522] flex items-center justify-center shadow-[0_8px_20px_rgba(242,101,34,0.3)]">
                  <Target className="text-black w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">
                    Strategic Design
                  </p>
                  <p className="text-neutral-500 text-[11px] uppercase tracking-wider">
                    Creativity meets purpose
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Service Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              {designServices.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={viewportSettings}
                  variants={fadeUpVariant}
                  transition={commonTransition(0.1 * idx)}
                  className="group relative p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-[#f26522]/30 transition-all duration-500"
                >
                  <div className="mb-6 w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-[#f26522] group-hover:bg-[#f26522] group-hover:text-white transition-all duration-500">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#f26522] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  <div className="space-y-2.5 pt-5 border-t border-white/5">
                    {service.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-[12px] text-neutral-400"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-[#f26522] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="absolute bottom-6 right-8 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity pointer-events-none">
                    <Layers className="w-12 h-12" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraphicApproach;
