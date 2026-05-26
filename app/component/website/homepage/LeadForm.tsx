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
  Loader2,
  AlertCircle,
  Zap,
  Sparkles,
} from "lucide-react";

const SERVICES = [
  "Google Ads", "Meta Ads", "UGC Videos",
  "Influencer Marketing", "Website Development", "SEO",
  "Social Media", "Performance Marketing",
];
const BUSINESS_TYPES = ["E-commerce", "Real Estate", "Trading", "Clinic", "Local Business", "Coach", "Other"];
const BUDGETS = ["25k–50k", "50k–1L", "1L–5L", "5L+"];
const PROJECT_GOALS = ["More Leads", "More Sales", "Branding", "Website"];
const CONTACT_METHODS = ["WhatsApp", "Call", "Email"];
const COUNTRY_CODES = [
  { code: "+91", flag: "🇮🇳" },
  { code: "+1", flag: "🇺🇸" },
  { code: "+44", flag: "🇬🇧" },
  { code: "+971", flag: "🇦🇪" },
];

export default function LeadForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    fullName: "", email: "", countryCode: "+91", phone: "",
    company: "", businessType: "", budget: "", revenue: "",
    projectGoal: "", contactMethod: "", message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateStep = (s: number) => {
    const e: Record<string, string> = {};
    if (s === 1) {
      if (!formData.fullName.trim()) e.fullName = "Full name is required";
      if (!formData.email.trim()) e.email = "Email is required";
      if (!formData.phone.trim()) e.phone = "Phone is required";
    }
    if (s === 2) {
      if (!formData.businessType) e.businessType = "Please select a business type";
      if (!formData.budget) e.budget = "Please select a budget";
    }
    if (s === 3) {
      if (selectedServices.length === 0) e.services = "Please select at least one service";
      if (!formData.projectGoal) e.projectGoal = "Please select a goal";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) setStep((s) => s + 1);
  };

  const handlePrev = () => setStep((s) => s - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;
    setLoading(true);
    setError(null);
    const eventId = crypto.randomUUID();
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: `${formData.countryCode} ${formData.phone}`,
          service: selectedServices.join(", "),
          message: formData.message,
          company: formData.company,
          businessType: formData.businessType,
          budget: formData.budget,
          revenue: formData.revenue,
          projectGoal: formData.projectGoal,
          contactMethod: formData.contactMethod,
          source: "Home Page",
          eventId,
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Something went wrong");
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setStep(1);
        setSelectedServices([]);
        setFormData({ fullName: "", email: "", countryCode: "+91", phone: "", company: "", businessType: "", budget: "", revenue: "", projectGoal: "", contactMethod: "", message: "" });
      }, 3500);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="glass py-24 px-6 min-h-[700px] flex items-center overflow-hidden">
      <style>
        {`
        .step-progress { display: flex; align-items: center; gap: 8px; margin-bottom: 24px; }
.step-pip { height: 3px; border-radius: 99px; transition: all 0.3s ease; background: rgba(255,255,255,0.1); flex: 1; }
.step-pip.active { background: #f26522; }
.step-pip.done { background: rgba(242,101,34,0.4); }
.step-label { font-size: 10px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.3); margin-bottom: 4px; }
.step-label span { color: #f26522; }
        `}
      </style>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex flex-col gap-4">
              <p className="text-[#F26522] font-bold tracking-[0.2em] text-xs uppercase">
                Let's connect
              </p>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold leading-[1.2]">
              Build. Scale. <br />
              <span className="italic text-[#F26522]">Dominate Your Space</span>
            </h2>

            <p className="text-gray-400 text-md max-w-xl leading-relaxed">
              You’re one conversation away from a growth plan that changes
              everything. Share your details, and one of our senior strategists
              from the best digital marketing agency in Deesa will reach out
              within 24 hours with a personalised roadmap built exclusively
              around your business goals. No generic templates. No wasted time.
              Just a clear, confident path to growth.
            </p>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center gap-8 pt-8">
              <div className="flex flex-col gap-2">
                <div className="flex gap-1 text-yellow-500 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <div>
                  <p className="text-white text-xs font-bold uppercase tracking-widest">
                    TrustRadius
                  </p>
                  <p className="text-white text-xs tracking-widest">
                    Outstanding ROI and transparent reporting
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-1 text-yellow-500 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <div>
                  <p className="text-white text-xs font-bold uppercase tracking-widest">
                    G2 Crowd
                  </p>
                  <p className="text-white text-xs tracking-widest">
                    Top-rated digital marketing partner in Gujarat.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-1 text-yellow-500 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <div>
                  <p className="text-white text-xs font-bold uppercase tracking-widest">
                    Software Reviews
                  </p>
                  <p className="text-white text-xs tracking-widest">
                    Exceptional strategy and execution.
                  </p>
                </div>
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
              {!submitted && (
                <div className="flex items-center justify-between mb-10">
                  <div className="flex gap-2 flex-grow mr-6">
                    <div
                      className={`h-1.5 flex-grow rounded-full transition-all duration-500 ${step >= 1 ? "bg-[#F26522]" : "bg-white/10"
                        }`}
                    />
                    <div
                      className={`h-1.5 flex-grow rounded-full transition-all duration-500 ${step >= 2 ? "bg-[#F26522]" : "bg-white/10"
                        }`}
                    />
                    <div
                      className={`h-1.5 flex-grow rounded-full transition-all duration-500 ${step >= 3 ? "bg-[#F26522]" : "bg-white/10"
                        }`}
                    />
                  </div>
                  
                  <span className="text-[10px] font-black text-[#F26522] uppercase tracking-[0.2em] whitespace-nowrap">
                    Step 0{step} / 03
                  </span>
                </div>
              )}

              <AnimatePresence mode="wait">
                {submitted ? (
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
                      className="mt-8 text-sm text-[#F26522] font-bold underline cursor-pointer"
                    >
                      Send another request
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ flex: 1, display: "flex", flexDirection: "column" }}>

                    {error && (
                      <div className="error-message"><AlertCircle size={14} />{error}</div>
                    )}

                    <AnimatePresence mode="wait">

                      {/* ── STEP 1: Contact Info ── */}
                      {step === 1 && (
                        <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">Let's get started</h3>
                            <p className="text-gray-500 text-sm mb-4">Enter your contact details to continue.</p>
                          </div>

                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                            <input name="fullName" required value={formData.fullName} onChange={handleChange}
                              className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-[#F26522] transition-all outline-none placeholder:text-gray-700"
                              placeholder="Full Name" />
                            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                          </div>

                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                            <input name="email" type="email" required value={formData.email} onChange={handleChange}
                              className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-[#F26522] transition-all outline-none placeholder:text-gray-700"
                              placeholder="Work Email Address" />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                          </div>

                          <div className="flex gap-3">
                            <div className="relative w-28">
                              <select name="countryCode" value={formData.countryCode} onChange={handleChange}
                                className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-3 pr-8 text-white focus:border-[#F26522] transition-all outline-none appearance-none cursor-pointer text-sm">
                                {COUNTRY_CODES.map(({ code, flag }) => (
                                  <option key={code} value={code} className="bg-[#111]">{flag} {code}</option>
                                ))}
                              </select>
                              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white/50">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                              </div>
                            </div>
                            <div className="relative flex-grow">
                              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                              <input name="phone" required value={formData.phone} onChange={handleChange}
                                className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-[#F26522] transition-all outline-none placeholder:text-gray-700"
                                placeholder="Mobile Number" />
                              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                            </div>
                          </div>

                          <button type="button" onClick={handleNext}
                            disabled={!formData.fullName || !formData.email || !formData.phone}
                            className="w-full disabled:opacity-50 disabled:cursor-not-allowed bg-[#F26522] text-black font-black py-5 rounded-2xl flex items-center justify-center gap-2 hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all mt-4 shadow-lg shadow-[#F26522]/10 cursor-pointer">
                            NEXT STEP <ArrowRight size={20} />
                          </button>
                        </motion.div>
                      )}

                      {/* ── STEP 2: Business Info ── */}
                      {step === 2 && (
                        <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-1">Business info</h3>
                              <p className="text-gray-500 text-sm">Tell us about your company.</p>
                            </div>
                            <button type="button" onClick={handlePrev}
                              className="p-2 text-gray-500 hover:text-white hover:bg-white/5 rounded-full transition-colors">
                              <ChevronLeft size={24} />
                            </button>
                          </div>

                          <div className="relative">
                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                            <input name="company" value={formData.company} onChange={handleChange}
                              className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-[#F26522] transition-all outline-none placeholder:text-gray-700"
                              placeholder="Company / Brand Name" />
                          </div>

                          {/* Business Type */}
                          <div className="relative">
                            <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 z-10" />
                            <select name="businessType" required value={formData.businessType} onChange={handleChange}
                              className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-12 text-white focus:border-[#F26522] transition-all outline-none appearance-none cursor-pointer">
                              <option value="" disabled className="bg-[#111] text-gray-500">Business Type</option>
                              {BUSINESS_TYPES.map((b) => <option key={b} value={b} className="bg-[#111]">{b}</option>)}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white/50">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                            {errors.businessType && <p className="text-red-500 text-xs mt-1">{errors.businessType}</p>}
                          </div>

                          {/* Monthly Budget */}
                          <div className="relative">
                            <Zap className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 z-10" />
                            <select name="budget" required value={formData.budget} onChange={handleChange}
                              className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-12 text-white focus:border-[#F26522] transition-all outline-none appearance-none cursor-pointer">
                              <option value="" disabled className="bg-[#111] text-gray-500">Monthly Marketing Budget</option>
                              {BUDGETS.map((b) => <option key={b} value={b} className="bg-[#111]">{b}</option>)}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white/50">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                            {errors.budget && <p className="text-red-500 text-xs mt-1">{errors.budget}</p>}
                          </div>

                          {/* Current Revenue */}
                          <div className="relative">
                            <Zap className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                            <input name="revenue" value={formData.revenue} onChange={handleChange}
                              className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-[#F26522] transition-all outline-none placeholder:text-gray-700"
                              placeholder="Current Monthly Revenue (e.g. ₹5L)" />
                          </div>

                          <button type="button" onClick={handleNext}
                            disabled={!formData.businessType || !formData.budget}
                            className="w-full disabled:opacity-50 disabled:cursor-not-allowed bg-[#F26522] text-black font-black py-5 rounded-2xl flex items-center justify-center gap-2 hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all mt-4 shadow-lg shadow-[#F26522]/10 cursor-pointer">
                            NEXT STEP <ArrowRight size={20} />
                          </button>
                        </motion.div>
                      )}

                      {/* ── STEP 3: Project Details ── */}
                      {step === 3 && (
                        <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-1">Project details</h3>
                              <p className="text-gray-500 text-sm">What are you looking to achieve?</p>
                            </div>
                            <button type="button" onClick={handlePrev}
                              className="p-2 text-gray-500 hover:text-white hover:bg-white/5 rounded-full transition-colors">
                              <ChevronLeft size={24} />
                            </button>
                          </div>

                          {/* Services multi-select dropdown */}
                          <div>
                            <div className="relative">
                              <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 z-10" />
                              <select value="" onChange={(e) => {
                                const val = e.target.value;
                                if (val && !selectedServices.includes(val))
                                  setSelectedServices((prev) => [...prev, val]);
                              }}
                                className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-12 text-white focus:border-[#F26522] transition-all outline-none appearance-none cursor-pointer">
                                <option value="" disabled className="bg-[#111] text-gray-500">Add Services...</option>
                                {SERVICES.filter((s) => !selectedServices.includes(s)).map((s) => (
                                  <option key={s} value={s} className="bg-[#111]">{s}</option>
                                ))}
                              </select>
                              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white/50">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                              </div>
                            </div>
                            {selectedServices.length > 0 && (
                              <div className="flex flex-wrap gap-2 mt-3">
                                {selectedServices.map((s) => (
                                  <span key={s} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
                                    style={{ background: "rgba(242,101,34,0.12)", border: "1px solid rgba(242,101,34,0.35)", color: "#f26522" }}>
                                    {s}
                                    <button type="button" onClick={() => setSelectedServices((prev) => prev.filter((x) => x !== s))}
                                      className="hover:text-white transition-colors leading-none">×</button>
                                  </span>
                                ))}
                              </div>
                            )}
                            {errors.services && <p className="text-red-500 text-xs mt-1">{errors.services}</p>}
                          </div>

                          {/* Project Goal */}
                          <div className="relative">
                            <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 z-10" />
                            <select name="projectGoal" required value={formData.projectGoal} onChange={handleChange}
                              className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-12 text-white focus:border-[#F26522] transition-all outline-none appearance-none cursor-pointer">
                              <option value="" disabled className="bg-[#111] text-gray-500">Project Goal</option>
                              {PROJECT_GOALS.map((g) => <option key={g} value={g} className="bg-[#111]">{g}</option>)}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white/50">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                            {errors.projectGoal && <p className="text-red-500 text-xs mt-1">{errors.projectGoal}</p>}
                          </div>

                          {/* Preferred Contact Method */}
                          <div>
                            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3">Preferred Contact Method</p>
                            <div className="flex gap-3">
                              {CONTACT_METHODS.map((m) => (
                                <button key={m} type="button"
                                  onClick={() => setFormData((prev) => ({ ...prev, contactMethod: m }))}
                                  className={`flex-1 py-3 rounded-xl text-sm font-semibold border transition-all cursor-pointer ${formData.contactMethod === m
                                      ? "bg-[#F26522]/10 border-[#F26522]/50 text-[#F26522]"
                                      : "bg-black/50 border-white/10 text-gray-500 hover:border-white/20"
                                    }`}>
                                  {m}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Message */}
                          <div className="relative">
                            <MessageSquare className="absolute left-4 top-5 text-gray-500 w-5 h-5" />
                            <textarea name="message" rows={3} value={formData.message} onChange={handleChange}
                              className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-[#F26522] transition-all outline-none resize-none placeholder:text-gray-700"
                              placeholder="Briefly describe your requirements..." />
                          </div>

                          <button type="submit" disabled={loading}
                            className="w-full bg-[#F26522] disabled:opacity-70 disabled:cursor-not-allowed text-black font-black py-5 rounded-2xl flex items-center justify-center gap-2 hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-[#F26522]/10 cursor-pointer">
                            {loading
                              ? <><span>SUBMITTING...</span><Loader2 className="animate-spin" size={20} /></>
                              : <><span>SUBMIT REQUEST</span><CheckCircle2 size={20} /></>
                            }
                          </button>

                          <p className="text-xs text-center text-gray-600">
                            By submitting you agree to our Privacy Policy
                          </p>
                        </motion.div>
                      )}

                    </AnimatePresence>
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
