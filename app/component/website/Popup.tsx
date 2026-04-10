"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  CheckCircle2,
  Phone,
  Mail,
  User,
  Briefcase,
  ArrowRight,
  Sparkles,
  Clock,
  Shield,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SERVICES = [
  "Digital Marketing",
  "Web Development",
  "Branding & Design",
  "Video Production",
  "SEO & Growth",
  "Social Media",
];

const TRUST_PILLS = [
  { icon: <Clock size={11} />, text: "24h Response" },
  { icon: <Shield size={11} />, text: "100% Private" },
  { icon: <Zap size={11} />, text: "Fast Onboarding" },
];

/* ── Floating orb for left panel ── */
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
  const [focused, setFocused] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState("Digital Marketing");
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
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
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
        setSelectedService("Digital Marketing");
      }, 3200);
    }, 1600);
  };

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  /* prevent body scroll */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <style>{`

        .popup-overlay {
          position: fixed; inset: 0; z-index: 200;
          display: flex; align-items: center; justify-content: center;
          padding: 16px;
        }
        .popup-backdrop {
          position: absolute; inset: 0;
          background: rgba(4,4,10,0.82);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        .popup-modal {
          position: relative;
          width: 100%; max-width: 880px;
          max-height: 92svh;
          display: flex;
          border-radius: 28px;
          overflow: hidden;
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.07),
            0 40px 100px rgba(0,0,0,0.6),
            0 0 80px rgba(242,101,34,0.08);
          background: #080b14;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── LEFT PANEL ── */
        .popup-left {
          width: 42%;
          min-width: 220px;
          padding: 48px 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          background: linear-gradient(155deg, #0f1420 0%, #130e08 55%, #0a0d1a 100%);
          border-right: 1px solid rgba(255,255,255,0.05);
          flex-shrink: 0;
        }

        .popup-left-top {}
        .popup-logo { margin-bottom: 40px; }
        .popup-headline {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 18px;
        }
        .popup-headline em {
          font-style: normal;
          background: linear-gradient(135deg, #f26522 20%, #ff9f5a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .popup-desc {
          font-size: 0.84rem;
          color: rgba(255,255,255,0.42);
          line-height: 1.7;
          max-width: 240px;
          margin-bottom: 32px;
        }

        /* Trust pills */
        .trust-pills { display: flex; flex-direction: column; gap: 10px; }
        .trust-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.025);
          font-size: 0.78rem;
          color: rgba(255,255,255,0.55);
          letter-spacing: 0.03em;
        }
        .trust-icon {
          width: 26px; height: 26px;
          border-radius: 7px;
          background: rgba(242,101,34,0.12);
          border: 1px solid rgba(242,101,34,0.20);
          display: flex; align-items: center; justify-content: center;
          color: #f26522;
          flex-shrink: 0;
        }

        /* Step counter */
        .popup-step-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          margin-bottom: 12px;
        }
        .step-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #f26522;
          box-shadow: 0 0 8px rgba(242,101,34,0.7);
          animation: stepGlow 2s ease-in-out infinite;
        }
        @keyframes stepGlow {
          0%,100% { opacity:1; }
          50% { opacity:0.4; }
        }

        /* Decorative number */
        .deco-number {
          position: absolute;
          bottom: -20px; right: -10px;
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 140px;
          font-weight: 800;
          color: rgba(242,101,34,0.04);
          line-height: 1;
          pointer-events: none;
          user-select: none;
          letter-spacing: -0.06em;
        }

        /* ── RIGHT PANEL ── */
        .popup-right {
          flex: 1;
          overflow-y: auto;
          padding: 48px 44px;
          display: flex;
          flex-direction: column;
          scrollbar-width: none;
        }
        .popup-right::-webkit-scrollbar { display: none; }

        /* Close btn */
        .popup-close {
          position: absolute;
          top: 20px; right: 20px;
          z-index: 10;
          width: 36px; height: 36px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.5);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .popup-close:hover {
          background: #f26522;
          border-color: #f26522;
          color: #fff;
          transform: rotate(90deg);
        }

        /* Form heading */
        .form-heading {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.025em;
          margin-bottom: 6px;
        }
        .form-subheading {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.35);
          margin-bottom: 32px;
        }

        /* Field groups */
        .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
        .field-col { display: flex; flex-direction: column; gap: 7px; }
        .field-full { display: flex; flex-direction: column; gap: 7px; margin-bottom: 16px; }

        .field-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          transition: color 0.2s ease;
        }
        .field-label.active { color: #f26522; }

        .field-wrap {
          position: relative;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.03);
          transition: border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
          overflow: hidden;
        }
        .field-wrap.focused {
          border-color: rgba(242,101,34,0.45);
          background: rgba(242,101,34,0.04);
          box-shadow: 0 0 0 3px rgba(242,101,34,0.08);
        }
        .field-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 60%);
          pointer-events: none;
        }
        .field-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(255,255,255,0.20);
          transition: color 0.25s ease;
          pointer-events: none;
        }
        .field-wrap.focused .field-icon { color: #f26522; }

        .popup-input {
          width: 100%;
          padding: 13px 14px 13px 40px;
          background: transparent;
          border: none;
          outline: none;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 400;
        }
        .popup-input::placeholder { color: rgba(255,255,255,0.15); }
        .popup-input option { background: #0f1420; color: #fff; }

        .popup-textarea {
          width: 100%;
          padding: 13px 14px;
          background: transparent;
          border: none;
          outline: none;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          resize: none;
          min-height: 88px;
        }
        .popup-textarea::placeholder { color: rgba(255,255,255,0.15); }

        /* Service chips */
        .service-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 10px;
        }
        .service-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
        }
        .service-chip {
          padding: 7px 14px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          font-size: 0.77rem;
          color: rgba(255,255,255,0.45);
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: 'DM Sans', sans-serif;
        }
        .service-chip:hover {
          border-color: rgba(242,101,34,0.30);
          color: rgba(255,255,255,0.7);
          background: rgba(242,101,34,0.06);
        }
        .service-chip.selected {
          border-color: rgba(242,101,34,0.55);
          background: rgba(242,101,34,0.12);
          color: #f26522;
          font-weight: 500;
        }

        /* Submit */
        .popup-submit {
          width: 100%;
          padding: 15px 24px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          position: relative;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          background: linear-gradient(135deg, #f26522 0%, #e05510 100%);
          color: #fff;
          box-shadow: 0 6px 30px rgba(242,101,34,0.38), 0 0 0 0 rgba(242,101,34,0.2);
          margin-bottom: 14px;
        }
        .popup-submit::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
          transition: left 0.6s ease;
        }
        .popup-submit:hover::before { left: 160%; }
        .popup-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(242,101,34,0.50), 0 0 0 6px rgba(242,101,34,0.10);
        }
        .popup-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }
        .spin {
          width: 18px; height: 18px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .privacy-note {
          text-align: center;
          font-size: 10px;
          color: rgba(255,255,255,0.18);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        /* ── SUCCESS STATE ── */
        .success-wrap {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px 0;
        }
        .success-ring {
          position: relative;
          width: 88px; height: 88px;
          margin-bottom: 28px;
        }
        .success-ring-inner {
          width: 88px; height: 88px;
          border-radius: 50%;
          background: rgba(242,101,34,0.10);
          border: 1px solid rgba(242,101,34,0.25);
          display: flex; align-items: center; justify-content: center;
        }
        .success-ring::before, .success-ring::after {
          content: '';
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 1px solid rgba(242,101,34,0.15);
          animation: successPulse 2s ease-out infinite;
        }
        .success-ring::after { animation-delay: 0.6s; inset: -16px; }
        @keyframes successPulse {
          0%   { opacity:1; transform:scale(1); }
          100% { opacity:0; transform:scale(1.3); }
        }
        .success-h { font-family:'Bricolage Grotesque',sans-serif; font-size:1.8rem; font-weight:800; color:#fff; letter-spacing:-0.03em; margin-bottom:10px; }
        .success-p { font-size:0.85rem; color:rgba(255,255,255,0.40); max-width:260px; line-height:1.65; margin-bottom:28px; }
        .success-back {
          font-size:11px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase;
          color:#f26522; background:none; border:none; cursor:pointer;
          transition:color 0.2s;
          font-family:'DM Sans',sans-serif;
        }
        .success-back:hover { color:#fff; }

        /* Responsive */
        @media (max-width: 700px) {
          .popup-modal { flex-direction: column; max-height: 95svh; }
          .popup-left {
            width: 100%; min-width: unset;
            padding: 32px 28px 24px;
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.05);
          }
          .trust-pills { flex-direction: row; flex-wrap: wrap; gap: 8px; }
          .trust-pill { padding: 7px 10px; font-size: 0.72rem; }
          .popup-right { padding: 28px 24px; }
          .field-row { grid-template-columns: 1fr; }
          .deco-number { display: none; }
          .popup-desc { display: none; }
        }
      `}</style>

      <AnimatePresence>
        {isOpen && (
          <div className="popup-overlay">
            {/* Backdrop */}
            <motion.div
              className="popup-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />

            {/* Modal */}
            <motion.div
              className="popup-modal"
              initial={{ opacity: 0, scale: 0.94, y: 28 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 28 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              {/* Close */}
              <button
                className="popup-close"
                onClick={onClose}
                aria-label="Close"
              >
                <X size={16} />
              </button>

              {/* ── LEFT ── */}
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
                <PanelOrb
                  style={{
                    width: 200,
                    height: 200,
                    background:
                      "radial-gradient(circle, rgba(242,101,34,0.10) 0%, transparent 70%)",
                    bottom: -60,
                    right: -40,
                  }}
                />

                <div className="popup-left-top">
                  <div className="popup-logo">
                    <Link href="/" className="flex items-center">
                      <Image
                        src="/logo-rec-trans.png"
                        width={140}
                        height={44}
                        alt="Marketrixa"
                        className="object-contain"
                        priority
                      />
                    </Link>
                  </div>

                  <div className="popup-step-tag">
                    <div className="step-dot" />
                    Ready to scale
                  </div>

                  <h2 className="popup-headline">
                    Lets Build
                    <br />
                    <em>Something Great.</em>
                  </h2>

                  <p className="popup-desc">
                    Fill out the form and our expert team will reach out within
                    24 hours with a tailored strategy.
                  </p>
                </div>

                <div>
                  <div className="trust-pills">
                    {TRUST_PILLS.map((t) => (
                      <div className="trust-pill" key={t.text}>
                        <div className="trust-icon">{t.icon}</div>
                        {t.text}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="deco-number">01</div>
              </div>

              {/* ── RIGHT ── */}
              <div className="popup-right">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.3 }}
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
                        {/* Row 1 */}
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
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    name: e.target.value,
                                  })
                                }
                                onFocus={() => setFocused("name")}
                                onBlur={() => setFocused(null)}
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
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    email: e.target.value,
                                  })
                                }
                                onFocus={() => setFocused("email")}
                                onBlur={() => setFocused(null)}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Row 2 */}
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
                                placeholder="+91 (638) 625-7858"
                                className="popup-input"
                                value={formData.phone}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    phone: e.target.value,
                                  })
                                }
                                onFocus={() => setFocused("phone")}
                                onBlur={() => setFocused(null)}
                              />
                            </div>
                          </div>
                          <div className="field-col">
                            <label className="field-label">Website</label>
                            <div
                              className={`field-wrap${focused === "website" ? " focused" : ""}`}
                            >
                              <span className="field-icon">
                                <Mail size={14} />
                              </span>
                              <input
                                type="text"
                                required
                                placeholder="www.marketrixa.com"
                                className="popup-input"
                                value={formData.website}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    website: e.target.value,
                                  })
                                }
                                onFocus={() => setFocused("website")}
                                onBlur={() => setFocused(null)}
                              />
                            </div>
                            <div style={{ flex: 1 }} />
                          </div>
                        </div>

                        {/* Service chips */}
                        <div className="service-label">Interested In</div>
                        <div className="service-chips">
                          {SERVICES.map((s) => (
                            <button
                              type="button"
                              key={s}
                              className={`service-chip${selectedService === s ? " selected" : ""}`}
                              onClick={() => setSelectedService(s)}
                            >
                              {s}
                            </button>
                          ))}
                        </div>

                        {/* Message */}
                        <div className="field-full">
                          <label
                            className={`field-label${focused === "msg" ? " active" : ""}`}
                          >
                            How can we help?
                          </label>
                          <div
                            className={`field-wrap${focused === "msg" ? " focused" : ""}`}
                            style={{ borderRadius: 12 }}
                          >
                            <textarea
                              placeholder="Describe your project goals, timeline, or anything else you'd like us to know..."
                              className="popup-textarea"
                              value={formData.message}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  message: e.target.value,
                                })
                              }
                              onFocus={() => setFocused("msg")}
                              onBlur={() => setFocused(null)}
                            />
                          </div>
                        </div>

                        {/* Submit */}
                        <motion.button
                          type="submit"
                          disabled={loading}
                          className="popup-submit"
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

                        <p className="privacy-note">
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
                        . Our team will reach out within 24 hours with a
                        tailored strategy.
                      </p>
                      <button className="success-back" onClick={onClose}>
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
