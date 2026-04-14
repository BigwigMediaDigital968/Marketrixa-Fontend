"use client";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Send, Phone, Mail } from "lucide-react";

const ContactHero = () => {
  const brandOrange = "#F26522";
  const [formState, setFormState] = useState("idle"); // idle, loading, success

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setFormState("loading");
    // Simulate API call
    setTimeout(() => setFormState("success"), 1500);
  };

  // Define variants with explicit type to avoid ease string mismatch
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut", // TypeScript now accepts this with Variants type
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white py-20 px-6 sm:px-12 lg:px-20">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img-5.png"
          alt="Contact Background"
          className="w-full h-full object-cover opacity-40"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-[1280px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
      >
        {/* Left Column: Heading & Content */}
        <div className="space-y-8">
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4"
          >
            <div
              className="w-12 h-[2px]"
              style={{ backgroundColor: brandOrange }}
            />
            <span className="uppercase tracking-[0.4em] text-xs font-bold text-gray-400">
              Get In Touch
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter"
          >
            Discuss Your Vision With <br />
            <span style={{ color: brandOrange }}>The Industry’s Best</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg sm:text-xl max-w-lg leading-relaxed"
          >
            Ready to gain your competitive edge? Our team of experts is standing
            by to transform your vision into market-leading reality.
          </motion.p>

          <motion.div variants={itemVariants} className="space-y-6 pt-4">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-[#F26522]/20 transition-colors">
                <Phone className="w-5 h-5" style={{ color: brandOrange }} />
              </div>
              <span className="text-lg font-medium">+1 (800) EDGE-PRO</span>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-[#F26522]/20 transition-colors">
                <Mail className="w-5 h-5" style={{ color: brandOrange }} />
              </div>
              <span className="text-lg font-medium">
                hello@businessedge.com
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Lead Form */}
        <motion.div variants={itemVariants} className="relative group">
          {/* Decorative Glow */}
          <div
            className="absolute -inset-1 rounded-2xl blur-2xl opacity-20 transition duration-1000 group-hover:opacity-40"
            style={{ backgroundColor: brandOrange }}
          />

          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-10 rounded-2xl shadow-2xl">
            {formState === "success" ? (
              <div className="py-20 text-center space-y-4">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold">Message Sent!</h3>
                <p className="text-gray-400">
                  We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="mt-6 text-sm uppercase tracking-widest font-bold underline"
                  style={{ color: brandOrange }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-gray-500">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 focus:outline-none focus:border-[#F26522] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-gray-500">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 focus:outline-none focus:border-[#F26522] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-500">
                    Subject
                  </label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 focus:outline-none focus:border-[#F26522] transition-colors appearance-none">
                    <option className="bg-black">Market Entry Strategy</option>
                    <option className="bg-black">Performance Analytics</option>
                    <option className="bg-black">Digital Infrastructure</option>
                    <option className="bg-black">Other Inquiries</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-500">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 focus:outline-none focus:border-[#F26522] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="w-full py-5 rounded-lg font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 transition-all active:scale-[0.98] cursor-pointer"
                  style={{
                    backgroundColor: brandOrange,
                    boxShadow: `0 10px 30px -10px ${brandOrange}66`,
                  }}
                >
                  {formState === "loading" ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactHero;
