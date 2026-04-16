"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  Phone,
  Mail,
  User,
  ArrowRight,
  Sparkles,
  Clock,
  Shield,
  Zap,
  AlertCircle, // Added for error UI
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SERVICES = [
  "Web Development",
  "SEO & Growth",
  "Social Media",
  "Branding & Design",
  "Video Production",
];

const TRUST_PILLS = [
  { icon: <Clock size={11} />, text: "24h Response" },
  { icon: <Shield size={11} />, text: "100% Private" },
  { icon: <Zap size={11} />, text: "Fast Onboarding" },
];

function PanelOrb({ style }: { style: React.CSSProperties }) {
  return (
    <div
      style={{
        position: "absolute",
        borderRadius: "50%",
        filter: "blur(60px)",
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}

export default function Popup({ isOpen, onClose }: PopupProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // New error state
  const [focused, setFocused] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState("Web Development");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/leads", {
        // Ensure this matches your route path
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: selectedService,
          message: `Website: ${formData.website} | Message: ${formData.message}`,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setSubmitted(true);

      // Reset form after success
      setTimeout(() => {
        onClose();
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          website: "",
        });
      }, 3500);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <style>{`
        /* ... (Keep all your existing CSS exactly as it was) ... */
        .popup-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 16px; }
        .popup-backdrop { position: absolute; inset: 0; background: rgba(4,4,10,0.82); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); }
        .popup-modal { position: relative; width: 100%; max-width: 880px; max-height: 92vh; display: flex; border-radius: 28px; overflow: hidden; margin: auto; box-shadow: 0 0 0 1px rgba(255,255,255,0.07), 0 40px 100px rgba(0,0,0,0.6), 0 0 80px rgba(242,101,34,0.08); background: #080b14; }
        .popup-left { width: 42%; min-width: 220px; padding: 48px 40px; display: flex; flex-direction: column; justify-content: space-between; position: relative; overflow: hidden; background: linear-gradient(155deg, #0f1420 0%, #130e08 55%, #0a0d1a 100%); border-right: 1px solid rgba(255,255,255,0.05); flex-shrink: 0; }
        .popup-logo { margin-bottom: 40px; }
        .popup-headline { font-family: 'Bricolage Grotesque', sans-serif; font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 800; color: #fff; line-height: 1.1; letter-spacing: -0.03em; margin-bottom: 18px; }
        .popup-headline em { font-style: normal; background: linear-gradient(135deg, #f26522 20%, #ff9f5a 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .popup-desc { font-size: 0.84rem; color: rgba(255,255,255,0.42); line-height: 1.7; max-width: 240px; margin-bottom: 32px; }
        .trust-pills { display: flex; flex-direction: column; gap: 10px; }
        .trust-pill { display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.06); background: rgba(255,255,255,0.025); font-size: 0.78rem; color: rgba(255,255,255,0.55); letter-spacing: 0.03em; }
        .trust-icon { width: 26px; height: 26px; border-radius: 7px; background: rgba(242,101,34,0.12); border: 1px solid rgba(242,101,34,0.20); display: flex; align-items: center; justify-content: center; color: #f26522; flex-shrink: 0; }
        .popup-step-tag { display: inline-flex; align-items: center; gap: 6px; font-size: 10px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255,255,255,0.28); margin-bottom: 12px; }
        .step-dot { width: 6px; height: 6px; border-radius: 50%; background: #f26522; box-shadow: 0 0 8px rgba(242,101,34,0.7); animation: stepGlow 2s ease-in-out infinite; }
        @keyframes stepGlow { 0%,100% { opacity:1; } 50% { opacity:0.4; } }
        .deco-number { position: absolute; bottom: -20px; right: -10px; font-family: 'Bricolage Grotesque', sans-serif; font-size: 140px; font-weight: 800; color: rgba(242,101,34,0.04); line-height: 1; pointer-events: none; user-select: none; letter-spacing: -0.06em; }
        .popup-right { flex: 1; overflow-y: auto; padding:38px; display: flex; flex-direction: column; scrollbar-width: none; }
        .popup-right::-webkit-scrollbar { display: none; }
        .popup-close { position: absolute; top: 20px; right: 20px; z-index: 10; width: 36px; height: 36px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.5); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.25s ease; }
        .popup-close:hover { background: #f26522; border-color: #f26522; color: #fff; transform: rotate(90deg); }
        .form-heading { font-family: 'Bricolage Grotesque', sans-serif; font-size: 1.3rem; font-weight: 700; color: #fff; letter-spacing: -0.025em; margin-bottom: 6px; }
        .form-subheading { font-size: 0.8rem; color: rgba(255,255,255,0.35); margin-bottom: 32px; }
        .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
        .field-col { display: flex; flex-direction: column; gap: 7px; }
        .field-full { display: flex; flex-direction: column; gap: 7px; margin-bottom: 16px; }
        .field-label { font-size: 10px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255,255,255,0.80); transition: color 0.2s ease; }
        .field-label.active { color: #fff; }
        .field-wrap { position: relative; border-radius: 12px; border: 1px solid rgba(255,255,255,0.07); background: rgba(255,255,255,0.03); transition: border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease; overflow: hidden; }
        .field-wrap.focused { border-color: rgba(242,101,34,0.45); background: rgba(242,101,34,0.04); box-shadow: 0 0 0 3px rgba(242,101,34,0.08); }
        .field-icon { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: rgba(255,255,255,0.20); transition: color 0.25s ease; pointer-events: none; }
        .field-wrap.focused .field-icon { color: #f26522; }
        .popup-input { width: 100%; padding: 13px 14px 13px 40px; background: transparent; border: none; outline: none; color: #fff; font-family: 'DM Sans', sans-serif; font-size: 0.875rem; }
        .popup-input::placeholder { color: rgba(255,255,255,0.15); }
        .popup-textarea { width: 100%; padding: 13px 14px; background: transparent; border: none; outline: none; color: #fff; font-family: 'DM Sans', sans-serif; font-size: 0.875rem; resize: none; min-height: 88px; }
        .popup-textarea::placeholder { color: rgba(255,255,255,0.15); }
        .service-label { font-size: 10px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255,255,255,0.8); margin-bottom: 10px; }
        .service-chips { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
        .service-chip { padding: 7px 14px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.03); font-size: 0.77rem; color: rgba(255,255,255,0.45); cursor: pointer; transition: all 0.2s ease; }
        .service-chip.selected { border-color: rgba(242,101,34,0.55); background: rgba(242,101,34,0.12); color: #f26522; font-weight: 500; }
        .popup-submit { width: 100%; padding: 15px 24px; border-radius: 12px; border: none; cursor: pointer; font-family: 'Bricolage Grotesque', sans-serif; font-weight: 700; font-size: 0.9rem; letter-spacing: 0.06em; text-transform: uppercase; display: flex; align-items: center; justify-content: center; gap: 10px; position: relative; overflow: hidden; transition: transform 0.25s ease, box-shadow 0.25s ease; background: linear-gradient(135deg, #f26522 0%, #e05510 100%); color: #fff; box-shadow: 0 6px 30px rgba(242,101,34,0.38); margin-bottom: 14px; }
        .popup-submit:disabled { opacity: 0.7; cursor: not-allowed; }
        .spin { width: 18px; height: 18px; border: 2px solid rgba(255,255,255,0.3); border-top-color: #fff; border-radius: 50%; animation: spin 0.7s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .error-message { color: #ff4d4d; font-size: 0.75rem; display: flex; align-items: center; gap: 6px; margin-bottom: 12px; justify-content: center; background: rgba(255, 77, 77, 0.1); padding: 8px; border-radius: 8px; }
        .success-wrap { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 20px 0; }
        .success-ring { position: relative; width: 88px; height: 88px; margin-bottom: 28px; }
        .success-ring-inner { width: 88px; height: 88px; border-radius: 50%; background: rgba(242,101,34,0.10); border: 1px solid rgba(242,101,34,0.25); display: flex; align-items: center; justify-content: center; }
        .success-h { font-family:'Bricolage Grotesque',sans-serif; font-size:1.8rem; font-weight:800; color:#fff; letter-spacing:-0.03em; margin-bottom:10px; }
        .success-p { font-size:0.85rem; color:rgba(255,255,255,0.40); max-width:260px; line-height:1.65; margin-bottom:28px; }
        @media (max-width: 700px) { .popup-modal { flex-direction: column; max-height: 95svh; } .popup-left { width: 100%; padding: 32px 28px 24px; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.05); } .popup-right { padding: 28px 24px; } .field-row { grid-template-columns: 1fr; } .popup-desc, .deco-number { display: none; } }
      `}</style>

      <AnimatePresence>
        {isOpen && (
          <div className="popup-overlay">
            <motion.div
              className="popup-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />

            <motion.div
              className="popup-modal"
              initial={{ opacity: 0, scale: 0.94, y: 28 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 28 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              <button
                className="popup-close cursor-pointer"
                onClick={onClose}
                aria-label="Close"
              >
                <X size={16} />
              </button>

              {/* LEFT PANEL */}
              <div className="popup-left">
                <PanelOrb
                  style={{
                    width: 300,
                    height: 300,
                    background:
                      "radial-gradient(circle, rgba(242,101,34,0.18) 0%, transparent 70%)",
                    top: -80,
                    left: -80,
                  }}
                />
                <div className="popup-left-top">
                  <div className="popup-logo">
                    <Link href="/" className="flex items-center">
                      <Image
                        src="/logo-rec-trans.png"
                        width={140}
                        height={44}
                        alt="Logo"
                        priority
                        className="object-contain"
                      />
                    </Link>
                  </div>
                  <div className="popup-step-tag">
                    <div className="step-dot" /> Ready to scale
                  </div>
                  <h2 className="popup-headline">
                    Lets Build <br /> <em>Something Great.</em>
                  </h2>
                  <p className="popup-desc">
                    Fill out the form and our expert team will reach out within
                    24 hours.
                  </p>
                </div>
                <div className="trust-pills">
                  {TRUST_PILLS.map((t) => (
                    <div className="trust-pill" key={t.text}>
                      <div className="trust-icon">{t.icon}</div>
                      {t.text}
                    </div>
                  ))}
                </div>
                <div className="deco-number">01</div>
              </div>

              {/* RIGHT PANEL */}
              <div className="popup-right">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                      }}
                    >
                      <div className="form-heading">
                        Tell us about your project
                      </div>
                      <div className="form-subheading">
                        All fields marked are required to proceed
                      </div>

                      <form
                        onSubmit={handleSubmit}
                        style={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        {/* Error UI */}
                        {error && (
                          <div className="error-message">
                            <AlertCircle size={14} />
                            {error}
                          </div>
                        )}

                        <div className="field-row">
                          <div className="field-col">
                            <label
                              className={`field-label${focused === "name" ? " active" : ""}`}
                            >
                              Full Name
                            </label>
                            <div
                              className={`field-wrap${focused === "name" ? " focused" : ""}`}
                            >
                              <span className="field-icon">
                                <User size={14} />
                              </span>
                              <input
                                type="text"
                                required
                                placeholder="John Doe"
                                className="popup-input"
                                value={formData.name}
                                onFocus={() => setFocused("name")}
                                onBlur={() => setFocused(null)}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    name: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="field-col">
                            <label
                              className={`field-label${focused === "email" ? " active" : ""}`}
                            >
                              Email Address
                            </label>
                            <div
                              className={`field-wrap${focused === "email" ? " focused" : ""}`}
                            >
                              <span className="field-icon">
                                <Mail size={14} />
                              </span>
                              <input
                                type="email"
                                required
                                placeholder="john@company.com"
                                className="popup-input"
                                value={formData.email}
                                onFocus={() => setFocused("email")}
                                onBlur={() => setFocused(null)}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    email: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>

                        <div className="field-row">
                          <div className="field-col">
                            <label
                              className={`field-label${focused === "phone" ? " active" : ""}`}
                            >
                              Phone Number
                            </label>
                            <div
                              className={`field-wrap${focused === "phone" ? " focused" : ""}`}
                            >
                              <span className="field-icon">
                                <Phone size={14} />
                              </span>
                              <input
                                type="tel"
                                required
                                placeholder="+91 98765 43210"
                                className="popup-input"
                                value={formData.phone}
                                onFocus={() => setFocused("phone")}
                                onBlur={() => setFocused(null)}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    phone: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="field-col">
                            <label
                              className={`field-label${focused === "website" ? " active" : ""}`}
                            >
                              Website
                            </label>
                            <div
                              className={`field-wrap${focused === "website" ? " focused" : ""}`}
                            >
                              <span className="field-icon">
                                <Zap size={14} />
                              </span>
                              <input
                                type="text"
                                placeholder="www.example.com"
                                className="popup-input"
                                value={formData.website}
                                onFocus={() => setFocused("website")}
                                onBlur={() => setFocused(null)}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    website: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>

                        <div className="service-label">Interested In</div>
                        <div className="service-chips">
                          {SERVICES.map((s) => (
                            <button
                              type="button"
                              key={s}
                              className={`service-chip${selectedService === s ? " selected" : ""} cursor-pointer`}
                              onClick={() => setSelectedService(s)}
                            >
                              {s}
                            </button>
                          ))}
                        </div>

                        <div className="field-full">
                          <label
                            className={`field-label${focused === "msg" ? " active" : ""}`}
                          >
                            How can we help?
                          </label>
                          <div
                            className={`field-wrap${focused === "msg" ? " focused" : ""}`}
                          >
                            <textarea
                              placeholder="Describe your project..."
                              className="popup-textarea"
                              value={formData.message}
                              onFocus={() => setFocused("msg")}
                              onBlur={() => setFocused(null)}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  message: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>

                        <motion.button
                          type="submit"
                          disabled={loading}
                          className="popup-submit cursor-pointer"
                          whileTap={{ scale: 0.98 }}
                        >
                          {loading ? (
                            <div className="spin" />
                          ) : (
                            <>
                              <Sparkles size={15} />
                              Send My Project Brief
                              <ArrowRight size={15} style={{ marginLeft: 2 }} />
                            </>
                          )}
                        </motion.button>
                        <p className="privacy-note text-xs text-center text-gray-500 mt-auto">
                          By submitting you agree to our Privacy Policy
                        </p>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      className="success-wrap"
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 20,
                      }}
                    >
                      <div className="success-ring">
                        <div className="success-ring-inner">
                          <CheckCircle2 size={36} color="#f26522" />
                        </div>
                      </div>
                      <h3 className="success-h">Message Received!</h3>
                      <p className="success-p">
                        Thank you,{" "}
                        <strong style={{ color: "#fff" }}>
                          {formData.name.split(" ")[0]}
                        </strong>
                        . Our team will reach out within 24 hours.
                      </p>
                      <button
                        className="success-back cursor-pointer"
                        onClick={onClose}
                      >
                        ← Back to site
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
