"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import Popup from "./Popup";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showPopup, setShowPopup] = useState(false);

  const footerLinks = [
    {
      title: "Services",
      links: [
        {
          title: "Web Development",
          href: "/services/website-development-service",
        },
        { title: "SEO Growth", href: "/services/seo-service" },
        { title: "Social Media", href: "/services/social-media-marketing" },
        { title: "Graphic Design", href: "/services/graphic-design-service" },
        {
          title: "Email Marketing",
          href: "/services/email-marketing",
        },
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
          href: "#clients",
        },
        // {
        //   title: "Careers",
        //   href: "/careers",
        // },
        {
          title: "News & Awards",
          href: "/blogs",
        },
      ],
    },
    {
      title: "Resources",
      links: [
        // { title: "Case Studies", href: "/case-studies" },
        { title: "Blog", href: "/blogs" },
        { title: "Privacy Policy", href: "/privacy-policy" },
        { title: "Terms of Service", href: "/terms-of-service" },
        // { title: "Sitemap", href: "/sitemap" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: FaYoutube,
      href: "https://youtube.com/@marketrixa",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/company/marketrixa",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/marketrixa.hq",
    },
    {
      icon: FaTwitter,
      href: "https://x.com/@marketrixa99",
    },
  ];

  return (
    <>
      <AnimatePresence>
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
                  <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter uppercase leading-none mb-6">
                    Let’s Work &
                    <br />
                    <span className="text-[#F26522]">Earn Together.</span>
                  </h2>

                  <p className="text-gray-500 text-lg max-w-md">
                    Work with a team that focuses on performance, strategy, and
                    measurable success. Build My Brand | Book a Free
                    Consultation
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
                      201, 202 & 203 Second floor, business world complex,
                      Deesa, Gujarat, India - 385535
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail size={18} className="text-[#F26522]" />
                    <span className="text-sm">admin@marketrixa.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone size={18} className="text-[#F26522]" />
                    <span className="text-sm">+91 9512400000</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  {socialLinks.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={i}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#F26522] hover:border-[#F26522] hover:text-black transition-all duration-300 hover:scale-110"
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
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
              <p className="text-gray-600 text-xs">
                Designed and developed by{" "}
                <a
                  href="https://bigwigmediadigital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F26522] hover:underline"
                >
                  BigWig Media Digital
                </a>
              </p>
              <div className="flex gap-8">
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 text-xs cursor-pointer hover:text-white transition-colors"
                >
                  Privacy
                </Link>
                <Link
                  href={"/terms-of-service"}
                  className="text-gray-600 text-xs cursor-pointer hover:text-white transition-colors"
                >
                  Terms
                </Link>
                <span className="text-gray-600 text-xs cursor-pointer hover:text-white transition-colors">
                  Cookies
                </span>
              </div>
            </div>
          </div>
        </footer>
      </AnimatePresence>
      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}
