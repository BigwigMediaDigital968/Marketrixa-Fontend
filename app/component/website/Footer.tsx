"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Sparkles,
  Loader2,
  Send,
} from "lucide-react";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import Popup from "./Popup";
import Image from "next/image";
import Link from "next/link";

/**
 * FOOTER COMPONENT
 * Enhanced with Gemini API for an interactive brand strategy generator.
 */
interface AIStrategyResult {
  strategy: string[];
  slogan: string;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [industry, setIndustry] = useState("");
  const [aiResult, setAiResult] = useState<AIStrategyResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const apiKey = "AIzaSyB17Jyh1VxdPR4qb7jQ0-5ZMUrG0oXiZ5I"; // Provided by environment

  const generateStrategy = async () => {
    if (!industry.trim()) return;
    setLoading(true);
    setError(null);

    const systemPrompt =
      "You are a senior brand strategist at Marketrixa. Based on an industry, provide a high-level 3-point digital marketing strategy and a catchy brand slogan. Format as JSON with 'strategy' (array of 3 strings) and 'slogan' (string).";
    const userQuery = `Generate a strategy for a business in the ${industry} industry.`;

    let retries = 0;
    const maxRetries = 5;

    const callGemini = async () => {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: userQuery }] }],
              systemInstruction: { parts: [{ text: systemPrompt }] },
              generationConfig: {
                responseMimeType: "application/json",
                responseSchema: {
                  type: "OBJECT",
                  properties: {
                    strategy: { type: "ARRAY", items: { type: "string" } },
                    slogan: { type: "string" },
                  },
                },
              },
            }),
          },
        );

        if (!response.ok) throw new Error("API request failed");

        const result = await response.json();
        const data = JSON.parse(
          result.candidates?.[0]?.content?.parts?.[0]?.text,
        );
        setAiResult(data);
      } catch (err) {
        if (retries < maxRetries) {
          retries++;
          const delay = Math.pow(2, retries) * 500;
          await new Promise((resolve) => setTimeout(resolve, delay));
          return callGemini();
        }
        setError(
          "Our AI strategist is currently offline. Please try again later.",
        );
      } finally {
        setLoading(false);
      }
    };

    await callGemini();
  };

  const footerLinks = [
    {
      title: "Services",
      links: [
        { title: "Web Development", href: "/services/web-development" },
        { title: "SEO Growth", href: "/services/SEO-service" },
        { title: "Social Media", href: "/services/social-media-marketing" },
        { title: "Branding & Design", href: "/services/branding-design" },
        { title: "Video Production", href: "/services/video-production" },
      ],
    },
    {
      title: "Company",
      links: [
        {
          title: "About Us",
          href: "/about",
        },
        {
          title: "Contact",
          href: "/contact",
        },
        {
          title: "Our Clients",
          href: "/clients",
        },
        {
          title: "Careers",
          href: "/careers",
        },
        {
          title: "News & Awards",
          href: "/news",
        },
      ],
    },
    {
      title: "Resources",
      links: [
        { title: "Case Studies", href: "/case-studies" },
        { title: "Blog", href: "/blogs" },
        { title: "Privacy Policy", href: "/privacy-policy" },
        { title: "Terms of Service", href: "/terms-of-service" },
        { title: "Sitemap", href: "/sitemap" },
      ],
    },
  ];

  return (
    <>
      <footer className="glass border-t border-white/5 pt-10 pb-12 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Massive CTA Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pb-10 border-b border-white/5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              {/* LEFT CONTENT */}
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter leading-none mb-6">
                  LET’S BUILD <br />
                  <span className="text-[#F26522]">SOMETHING BIGGER.</span>
                </h2>

                <p className="text-gray-500 text-lg max-w-md">
                  Your brand has more potential. Let’s unlock it together with
                  the right strategy and execution
                </p>
              </div>

              {/* RIGHT BUTTON */}
              <div className="flex md:justify-end">
                <button
                  onClick={() => setShowPopup(true)}
                  className="btn-primary flex items-center gap-3 group px-8 py-4 bg-[#F26522] text-black font-bold rounded-full hover:bg-white transition-all cursor-pointer"
                >
                  Start a Project
                  <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Main Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 my-20">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center gap-2">
                <Link href="/" className="flex-shrink-0 flex items-center">
                  <div className="flex items-center justify-center h-10 lg:h-12">
                    <Image
                      src="/logo-rec-trans.png"
                      width={160}
                      height={50}
                      alt="Marketrixa logo"
                      className="object-contain h-full w-auto"
                      priority
                    />
                  </div>
                </Link>
              </div>

              <div className="space-y-4 text-gray-400">
                <div className="flex items-center gap-4">
                  <MapPin size={18} className="text-[#F26522]" />
                  <span className="text-sm">
                    123 Digital Ave, Tech City, 90210
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail size={18} className="text-[#F26522]" />
                  <span className="text-sm">hello@marketrixa.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={18} className="text-[#F26522]" />
                  <span className="text-sm">+1 (555) 000-MARK</span>
                </div>
              </div>

              <div className="flex gap-4">
                {[FaYoutube, FaLinkedin, FaInstagram, FaTwitter].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#F26522] hover:border-[#F26522] hover:text-black transition-all duration-300"
                    >
                      <Icon size={18} />
                    </a>
                  ),
                )}
              </div>
            </div>

            {/* Dynamic Link Columns */}
            {footerLinks.map((column, idx) => (
              <div key={idx} className="space-y-6">
                <h4 className="text-white font-bold uppercase tracking-widest text-xs">
                  {column.title}
                </h4>

                <ul className="space-y-4">
                  {column.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a
                        href={link.href}
                        className="text-white/80 hover:text-[#F26522] transition-colors text-sm font-medium"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-600 text-xs">
              © {currentYear} MARKETRIXA Digital Marketing Agency. All Rights
              Reserved.
            </p>
            <div className="flex gap-8">
              <span className="text-gray-600 text-xs cursor-pointer hover:text-white transition-colors">
                Privacy
              </span>
              <span className="text-gray-600 text-xs cursor-pointer hover:text-white transition-colors">
                Terms
              </span>
              <span className="text-gray-600 text-xs cursor-pointer hover:text-white transition-colors">
                Cookies
              </span>
            </div>
          </div>
        </div>
      </footer>
      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}
