"use client";

import React, { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

/**
 * CTA COMPONENT (TypeScript Version)
 * Fixes: "Property 'getContext' does not exist on type 'never'"
 * Fixes: Component export issue and naming convention for preview environment.
 */

const CTASection: React.FC = () => {
  // Explicitly type the ref to avoid 'never' inference
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const brandOrange = "#F26522";
  const router = useRouter();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resize = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    class Particle {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      speedX: number = 0;
      speedY: number = 0;
      alpha: number = 0;

      constructor() {
        this.reset();
      }

      reset() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.alpha = Math.random() * 0.5 + 0.1;
      }

      update() {
        if (!canvas) return;
        this.x += this.speedX;
        this.y += this.speedY;

        if (
          this.x < 0 ||
          this.x > canvas.width ||
          this.y < 0 ||
          this.y > canvas.height
        ) {
          this.reset();
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.fillStyle = brandOrange;
        context.globalAlpha = this.alpha;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
      }
    }

    const init = () => {
      if (!canvas) return;
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    init();
    animate();

    const handleResize = () => {
      resize();
      init();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center py-20 overflow-hidden">
      {/* Particle Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
      />

      <div className="relative z-10 container mx-auto md:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center p-5">
          {/* Left Column: Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-[#F26522]" />
                <span className="text-[#F26522] font-bold tracking-[0.3em] uppercase text-xs">
                  Start Your Growth Journey
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-[1.1]">
                Still Guessing Your Marketing?
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F26522] to-orange-400">
                  Let’s change that.
                </span>
              </h2>

              <p className="text-neutral-400 text-lg md:text-xl max-w-md leading-relaxed">
                Book a demo and turn confusion into clear growth. Connect with
                our digital experts and explore strategies designed to achieve
                your business goals.
              </p>
            </div>

            <div className="pt-4">
              <motion.button
                onClick={() => router.push("/contact")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-6 bg-white text-black px-8 py-5 font-bold uppercase tracking-widest text-sm transition-all hover:bg-[#F26522] hover:text-white cursor-pointer"
              >
                Book a Demo Call
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-2"
                />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
            className="relative aspect-square w-full max-w-[550px] mx-auto lg:ml-auto group"
          >
            {/* Design Accents */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-[#F26522] z-20 transition-all group-hover:-top-2 group-hover:-left-2" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-[#F26522] z-20 transition-all group-hover:-bottom-2 group-hover:-right-2" />

            <div className="relative z-10 w-full h-full overflow-hidden bg-neutral-900 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
                alt="Digital Strategy Session"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Subtle Brand Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Experience Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 bg-black border border-neutral-800 p-6 backdrop-blur-md z-30 min-w-[250px]"
            >
              <div className="flex items-center gap-4">
                <div className="text-[#F26522] font-black text-4xl">3+</div>
                <div className="text-[10px] text-neutral-400 uppercase font-bold tracking-[0.2em] leading-tight">
                  Years of Digital <br /> Excellence
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
