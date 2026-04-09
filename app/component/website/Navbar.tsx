"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

/**
 * NAVBAR COMPONENT
 * Implements a sticky, glassmorphic navigation bar based on the reference image.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Influencer", href: "#" },
    { name: "About Us", href: "/about", hasDropdown: true },
    { name: "News & Awards", href: "#" },
    { name: "Services", href: "#", hasDropdown: true },
    { name: "Clients", href: "#", hasDropdown: true },
    { name: "Industry", href: "#", hasDropdown: true },
    { name: "International", href: "#", hasDropdown: true },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-0 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center">
            {/* Simple SVG implementation of the logo mark */}
            <svg viewBox="0 0 100 100" className="w-full h-full fill-[#F26522]">
              <path d="M10 80 L40 20 L60 50 L80 20 L80 80 L65 80 L65 45 L50 70 L35 45 L35 80 Z" />
            </svg>
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white">
            MARKETRIXA<span className="text-[#F26522]">.</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest font-medium text-white/80 hover:text-[#F26522] transition-colors flex items-center gap-1 group"
            >
              {link.name}
              {link.hasDropdown && (
                <ChevronDown
                  size={12}
                  className="group-hover:rotate-180 transition-transform"
                />
              )}
            </a>
          ))}
        </div>

        {/* Socials & Menu */}
        <div className="flex items-center gap-5">
          <div className="hidden md:flex items-center gap-4 text-white/70">
            <FaYoutube
              size={18}
              className="hover:text-[#F26522] cursor-pointer transition-colors"
            />
            <FaLinkedin
              size={18}
              className="hover:text-[#F26522] cursor-pointer transition-colors"
            />
            <FaInstagram
              size={18}
              className="hover:text-[#F26522] cursor-pointer transition-colors"
            />
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 lg:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-semibold text-white border-b border-white/5 pb-2"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
