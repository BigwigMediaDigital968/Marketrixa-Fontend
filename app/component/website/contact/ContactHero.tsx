"use client";
import { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { Send, Phone, Mail, AlertCircle, Loader2, ChevronLeft, ArrowRight } from "lucide-react";


const brandOrange = "#F26522";

const SERVICES = ["Google Ads", "Meta Ads", "UGC Videos", "Influencer Marketing", "Website Development", "SEO", "Social Media", "Performance Marketing"];
const BUSINESS_TYPES = ["E-commerce", "Real Estate", "Trading", "Clinic", "Local Business", "Coach", "Other"];
const BUDGETS = ["25k–50k", "50k–1L", "1L–5L", "5L+"];
const PROJECT_GOALS = ["More Leads", "More Sales", "Branding", "Website"];
const CONTACT_METHODS = ["WhatsApp", "Call", "Email"];
const COUNTRY_CODES = [
  { code: "+91", flag: "🇮🇳" },
  { code: "+1", flag: "🇺🇸" },
  { code: "+44", flag: "🇬🇧" },
  { code: "+971", flag: "🇦🇪" },
]

const ContactHero = () => {

  const [formState, setFormState] = useState("idle");
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "", email: "", countryCode: "+91", phone: "",
    company: "", businessType: "", budget: "", revenue: "",
    projectGoal: "", contactMethod: "", message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const eventId = crypto.randomUUID();

  if (typeof window !== "undefined") {
    // @ts-ignore
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateStep = (s: number) => {
    const e: Record<string, string> = {};
    if (s === 1) {
      if (!formData.name.trim()) e.name = "Full name is required";
      if (!formData.email.trim()) e.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = "Enter a valid email";
      if (!formData.phone.trim()) e.phone = "Phone number is required";
    }
    if (s === 2) {
      // if (!formData.businessType) e.businessType = "Please select a business type";
      // if (!formData.budget) e.budget = "Please select a budget";
    }
    if (s === 3) {
      if (selectedServices.length === 0) e.services = "Please select at least one service";
      if (!formData.projectGoal) e.projectGoal = "Please select a goal";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => { if (validateStep(step)) setStep((s) => s + 1); };
  const handlePrev = () => setStep((s) => s - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;
    setFormState("loading");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
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
          source: "Contact Page",
          eventId,
        }),
      });
      if (!response.ok) throw new Error("Failed to send message");
      setFormState("success");
      setStep(1);
      setSelectedServices([]);
      setFormData({ name: "", email: "", countryCode: "+91", phone: "", company: "", businessType: "", budget: "", revenue: "", projectGoal: "", contactMethod: "", message: "" });
    } catch (error) {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 4000);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-[1280px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
      >
        {/* Left Column */}
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
              <span className="text-lg font-medium">+91 9512400000</span>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-[#F26522]/20 transition-colors">
                <Mail className="w-5 h-5" style={{ color: brandOrange }} />
              </div>
              <span className="text-lg font-medium">admin@marketrixa.com</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Lead Form */}
        <motion.div variants={itemVariants} className="relative group">
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
                <p className="text-gray-400">We'll get back to you within 24 hours.</p>
                <button onClick={() => setFormState("idle")}
                  className="mt-6 text-sm uppercase tracking-widest font-bold underline cursor-pointer"
                  style={{ color: brandOrange }}>
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Progress bar */}
                <div className="flex gap-4 justify-between">
                  <div className="flex items-center gap-2 grow">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="flex-1 h-[3px] rounded-full transition-all duration-500"
                      style={{ background: n <= step ? brandOrange : "rgba(255,255,255,0.08)" }} />
                  ))}
                </div>
                <p className="text-xs font-semibold tracking-[0.2em] w-30 uppercase text-gray-300"
                  >
                  Step <span style={{ color: brandOrange }}>{step}</span> of 3
                </p>
                </div>

                <AnimatePresence mode="wait">

                  {/* ── STEP 1: Contact Info ── */}
                  {step === 1 && (
                    <motion.div key="step1"
                      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.22 }} className="space-y-5">
                      <div>
                        <h3 className="text-xl font-black uppercase tracking-tight text-white mb-1">Your Details</h3>
                        <p className="text-gray-300 text-sm">We'll use this to get back to you.</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-gray-100">Full Name</label>
                          <input name="name" required value={formData.name} onChange={handleChange} type="text"
                            placeholder="John Doe"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F26522] transition-colors placeholder:text-gray-400 text-white" />
                          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-gray-100">Email Address</label>
                          <input name="email" required value={formData.email} onChange={handleChange} type="email"
                            placeholder="john@example.com"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F26522] transition-colors placeholder:text-gray-400 text-white" />
                          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest font-bold text-gray-100">Phone Number</label>
                        <div className="flex gap-3">
                          <div className="relative w-28 flex-shrink-0">
                            <select name="countryCode" value={formData.countryCode} onChange={handleChange}
                              className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-3 pr-8 text-white focus:border-[#F26522] transition-colors outline-none appearance-none cursor-pointer text-sm">
                              {COUNTRY_CODES.map(({ code, flag }) => (
                                <option key={code} value={code} className="bg-[#111]">{flag} {code}</option>
                              ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-white/40">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                          <div className="flex-grow">
                            <input name="phone" required value={formData.phone} onChange={handleChange} type="tel"
                              placeholder="98765 43210"
                              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F26522] transition-colors placeholder:text-gray-400 text-white" />
                          </div>
                        </div>
                        {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                      </div>

                      <button type="button" onClick={handleNext}
                        className="w-full py-5 rounded-lg font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 transition-all active:scale-[0.98] cursor-pointer"
                        style={{ backgroundColor: brandOrange, boxShadow: `0 10px 30px -10px ${brandOrange}66` }}>
                        Next Step <ArrowRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}

                  {/* ── STEP 2: Business Info ── */}
                  {step === 2 && (
                    <motion.div key="step2"
                      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.22 }} className="space-y-5">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-black uppercase tracking-tight text-white mb-1">Business Info</h3>
                          <p className="text-gray-300 text-sm">Tell us about your company.</p>
                        </div>
                        <button type="button" onClick={handlePrev}
                          className="p-2 text-gray-200 hover:text-white hover:bg-white/5 rounded-full transition-colors">
                          <ChevronLeft size={22} />
                        </button>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest font-bold text-gray-100">Company / Brand Name</label>
                        <input name="company" value={formData.company} onChange={handleChange} type="text"
                          placeholder="Acme Inc."
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F26522] transition-colors placeholder:text-gray-400 text-white" />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-gray-100">Business Type</label>
                          <div className="relative">
                            <select name="businessType" value={formData.businessType} onChange={handleChange}
                              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F26522] transition-colors appearance-none cursor-pointer text-white">
                              <option value="" disabled className="bg-[#111] text-gray-500">Select type...</option>
                              {BUSINESS_TYPES.map((b) => <option key={b} value={b} className="bg-[#111]">{b}</option>)}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white/40">
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                          {errors.businessType && <p className="text-red-500 text-xs">{errors.businessType}</p>}
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-gray-100">Monthly Budget</label>
                          <div className="relative">
                            <select name="budget" value={formData.budget} onChange={handleChange}
                              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F26522] transition-colors appearance-none cursor-pointer text-white">
                              <option value="" disabled className="bg-[#111] text-gray-500">Select budget...</option>
                              {BUDGETS.map((b) => <option key={b} value={b} className="bg-[#111]">{b}</option>)}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white/40">
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                          {errors.budget && <p className="text-red-500 text-xs">{errors.budget}</p>}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest font-bold text-gray-100">Current Monthly Revenue</label>
                        <input name="revenue" value={formData.revenue} onChange={handleChange} type="text"
                          placeholder="e.g. ₹5L / month"
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F26522] transition-colors placeholder:text-gray-400 text-white" />
                      </div>

                      <button type="button" onClick={handleNext}
                        // disabled={!formData.businessType || !formData.budget}
                        className="w-full py-5 rounded-lg font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 transition-all active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ backgroundColor: brandOrange, boxShadow: `0 10px 30px -10px ${brandOrange}66` }}>
                        Next Step <ArrowRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}

                  {/* ── STEP 3: Project Details ── */}
                  {step === 3 && (
                    <motion.div key="step3"
                      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.22 }} className="space-y-5">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-black uppercase tracking-tight text-white mb-1">Project Details</h3>
                          <p className="text-gray-300 text-sm">What are you looking to achieve?</p>
                        </div>
                        <button type="button" onClick={handlePrev}
                          className="p-2 text-gray-200 hover:text-white hover:bg-white/5 rounded-full transition-colors">
                          <ChevronLeft size={22} />
                        </button>
                      </div>

                      {/* Services multi-select */}
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest font-bold text-gray-100">Services Interested In</label>
                        <div className="relative">
                          <select value="" onChange={(e) => {
                            const val = e.target.value;
                            if (val && !selectedServices.includes(val))
                              setSelectedServices((prev) => [...prev, val]);
                          }}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F26522] transition-colors appearance-none cursor-pointer text-white">
                            <option value="" disabled className="bg-[#111] text-gray-500">Add a service...</option>
                            {SERVICES.filter((s) => !selectedServices.includes(s)).map((s) => (
                              <option key={s} value={s} className="bg-[#111]">{s}</option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white/40">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                        {selectedServices.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-1">
                            {selectedServices.map((s) => (
                              <span key={s} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold"
                                style={{ background: "rgba(242,101,34,0.12)", border: "1px solid rgba(242,101,34,0.35)", color: "#F26522" }}>
                                {s}
                                <button type="button" onClick={() => setSelectedServices((prev) => prev.filter((x) => x !== s))}
                                  className="hover:text-white transition-colors leading-none text-base">×</button>
                              </span>
                            ))}
                          </div>
                        )}
                        {errors.services && <p className="text-red-500 text-xs">{errors.services}</p>}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Project Goal */}
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-gray-100">Project Goal</label>
                          <div className="relative">
                            <select name="projectGoal" value={formData.projectGoal} onChange={handleChange}
                              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F26522] transition-colors appearance-none cursor-pointer text-white">
                              <option value="" disabled className="bg-[#111] text-gray-500">Select goal...</option>
                              {PROJECT_GOALS.map((g) => <option key={g} value={g} className="bg-[#111]">{g}</option>)}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white/40">
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                          {errors.projectGoal && <p className="text-red-500 text-xs">{errors.projectGoal}</p>}
                        </div>
                        {/* Preferred Contact */}
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-gray-100">Contact Via</label>
                          <div className="flex gap-2 h-[50px]">
                            {CONTACT_METHODS.map((m) => (
                              <button key={m} type="button"
                                onClick={() => setFormData((prev) => ({ ...prev, contactMethod: m }))}
                                className={`flex-1 rounded-lg text-xs font-bold border transition-all cursor-pointer ${formData.contactMethod === m
                                    ? "bg-[#F26522]/10 border-[#F26522]/50 text-[#F26522]"
                                    : "bg-white/5 border-white/10 text-gray-200 hover:border-white/20 hover:text-gray-300"
                                  }`}>
                                {m}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest font-bold text-gray-100">Message</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} rows={3}
                          placeholder="Tell us about your project..."
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F26522] transition-colors resize-none placeholder:text-gray-400 text-white" />
                      </div>

                      <button type="submit" disabled={formState === "loading"}
                        className="w-full py-5 rounded-lg font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 transition-all active:scale-[0.98] cursor-pointer disabled:opacity-70"
                        style={{ backgroundColor: brandOrange, boxShadow: `0 10px 30px -10px ${brandOrange}66` }}>
                        {formState === "loading" ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : formState === "error" ? (
                          <><span>Error! Try Again</span><AlertCircle className="w-4 h-4" /></>
                        ) : (
                          <><span>Send Message</span><Send className="w-4 h-4" /></>
                        )}
                      </button>

                      <p className="text-xs text-center text-gray-400">By submitting you agree to our Privacy Policy</p>
                    </motion.div>
                  )}

                </AnimatePresence>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactHero;
