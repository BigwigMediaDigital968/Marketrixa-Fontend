"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  User,
  Mail,
  Phone,
  Building2,
  Users,
  MessageSquare,
  ChevronLeft,
} from "lucide-react";

export default function LeadForm() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+91",
    companyName: "",
    service: "",
    note: "",
  });

  const handleNext = () => step < 2 && setStep(step + 1);
  const handlePrev = () => step > 1 && setStep(step - 1);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="glass py-24 px-6 min-h-[700px] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Brand Logo & Tagline */}
            <div className="flex flex-col gap-4">
              <p className="text-[#F26522] font-bold tracking-[0.2em] text-xs uppercase">
                Let's connect
              </p>
            </div>

            {/* Heading with Fixed Highlight Visibility */}
            <h2 className="text-3xl md:text-5xl font-bold text-[#F26522] leading-[1.2]">
              Build. Scale. <br />
              <span className="italic">Dominate Your Space</span>
            </h2>

            <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
              Fill the form and our experts will connect with you within 24
              hours with a strategy built only for your business.
            </p>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center gap-8 pt-8">
              <div className="flex flex-col gap-2">
                <div className="flex gap-1 text-yellow-500 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-white text-xs font-bold uppercase tracking-widest">
                  TrustRadius
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-1 text-yellow-500 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-white text-xs font-bold uppercase tracking-widest">
                  G2 Crowd
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-1 text-yellow-500 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-white text-xs font-bold uppercase tracking-widest">
                  SoftwareReviews
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Step-by-Step Lead Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-[#111] border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative z-10 overflow-hidden">
              {/* Progress Indicator */}
              {!isSubmitted && (
                <div className="flex items-center justify-between mb-10">
                  <div className="flex gap-2 flex-grow mr-6">
                    <div
                      className={`h-1.5 flex-grow rounded-full transition-all duration-500 ${step >= 1 ? "bg-[#F26522]" : "bg-white/10"}`}
                    />
                    <div
                      className={`h-1.5 flex-grow rounded-full transition-all duration-500 ${step >= 2 ? "bg-[#F26522]" : "bg-white/10"}`}
                    />
                  </div>
                  <span className="text-[10px] font-black text-[#F26522] uppercase tracking-[0.2em] whitespace-nowrap">
                    Step 0{step} / 02
                  </span>
                </div>
              )}

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-[#F26522]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="text-[#F26522] w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Request Received!
                    </h3>
                    <p className="text-gray-400">
                      Our team will reach out to you within 24 hours to schedule
                      your session.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setStep(1);
                      }}
                      className="mt-8 text-sm text-[#F26522] font-bold underline"
                    >
                      Send another request
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {step === 1 ? (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-5"
                      >
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            Let's get started
                          </h3>
                          <p className="text-gray-500 text-sm mb-6">
                            Enter your contact details to continue.
                          </p>
                        </div>

                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                          <input
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-[#F26522] transition-all outline-none placeholder:text-gray-700"
                            placeholder="Full Name"
                          />
                        </div>

                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                          <input
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-[#F26522] transition-all outline-none placeholder:text-gray-700"
                            placeholder="Work Email Address"
                          />
                        </div>

                        <div className="flex gap-3">
                          <div className="relative w-28">
                            <select
                              name="countryCode"
                              value={formData.countryCode}
                              onChange={handleChange}
                              className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-3 pr-10 text-white focus:border-[#F26522] hover:border-white/20 transition-all outline-none appearance-none cursor-pointer backdrop-blur-md text-sm"
                            >
                              <option value="+91" className="bg-[#111]">
                                🇮🇳 +91
                              </option>
                              <option value="+1" className="bg-[#111]">
                                🇺🇸 +1
                              </option>
                              <option value="+44" className="bg-[#111]">
                                🇬🇧 +44
                              </option>
                              <option value="+971" className="bg-[#111]">
                                🇦🇪 +971
                              </option>
                            </select>

                            {/* Custom Arrow */}
                            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white/50">
                              <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="relative flex-grow">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                            <input
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-[#F26522] transition-all outline-none placeholder:text-gray-700"
                              placeholder="Mobile Number"
                            />
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={handleNext}
                          className="w-full bg-[#F26522] text-black font-black py-5 rounded-2xl flex items-center justify-center gap-2 hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all mt-6 shadow-lg shadow-[#F26522]/10"
                        >
                          NEXT STEP <ArrowRight size={20} />
                        </button>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-5"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                              Business info
                            </h3>
                            <p className="text-gray-500 text-sm">
                              Tell us a bit about your company.
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={handlePrev}
                            className="p-2 text-gray-500 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                          >
                            <ChevronLeft size={24} />
                          </button>
                        </div>

                        <div className="relative">
                          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                          <input
                            name="companyName"
                            required
                            value={formData.companyName}
                            onChange={handleChange}
                            className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-[#F26522] transition-all outline-none placeholder:text-gray-700"
                            placeholder="Company Name"
                          />
                        </div>

                        <div className="relative">
                          <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                          <div className="relative">
                            {/* Select */}
                            <select
                              name="service"
                              required
                              value={formData.service}
                              onChange={handleChange}
                              className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-5 pr-12 text-white focus:border-[#F26522] hover:border-white/20 transition-all outline-none appearance-none cursor-pointer backdrop-blur-md"
                            >
                              <option
                                value=""
                                disabled
                                className="bg-[#111] text-gray-500"
                              >
                                Service You Need
                              </option>
                              <option
                                value="Website Development"
                                className="bg-[#111]"
                              >
                                Website Development
                              </option>
                              <option value="SEO" className="bg-[#111]">
                                SEO
                              </option>
                              <option
                                value="Social Media"
                                className="bg-[#111]"
                              >
                                Social Media
                              </option>
                              <option
                                value="Performance Marketing"
                                className="bg-[#111]"
                              >
                                Performance Marketing
                              </option>
                            </select>

                            {/* Custom Arrow */}
                            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white/50">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                            <ArrowRight size={16} className="rotate-90" />
                          </div>
                        </div>

                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-6 text-gray-500 w-5 h-5" />
                          <textarea
                            name="note"
                            rows={3}
                            value={formData.note}
                            onChange={handleChange}
                            className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-[#F26522] transition-all outline-none resize-none placeholder:text-gray-700"
                            placeholder="Briefly describe your requirements..."
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-[#F26522] text-black font-black py-5 rounded-2xl flex items-center justify-center gap-2 hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all mt-6 shadow-lg shadow-[#F26522]/10"
                        >
                          SUBMIT REQUEST <CheckCircle2 size={20} />
                        </button>
                      </motion.div>
                    )}
                  </form>
                )}
              </AnimatePresence>
            </div>

            {/* Background Glows */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#F26522]/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#38bdf8]/5 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
