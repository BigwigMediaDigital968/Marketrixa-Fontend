"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Popup from "./Popup";

const MENU_DETAILS = {
  Services: [
    {
      name: "Website Development",
      href: "/services/website-development-service",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      tag: "Dev",
    },
    {
      name: "Performance Marketing",
      href: "/services/performance-marketing-service",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      tag: "Marketing",
    },
    {
      name: "Affiliate Marketing",
      href: "/services/affiliate-marketing",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
      tag: "Marketing",
    },
    {
      name: "SEO Marketing",
      href: "/services/seo-service",
      img: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=800",
      tag: "SEO",
    },
    {
      name: "ORM Services",
      href: "/services/orm",
      img: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800",
      tag: "Reputation",
    },
    {
      name: "Influencer Marketing",
      href: "/services/influencer-marketing",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800",
      tag: "Social",
    },
    {
      name: "Social Media Optimization",
      href: "/services/social-media-marketing",
      img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
      tag: "Social",
    },
    {
      name: "Graphic Designing & Video",
      href: "/services/design-video",
      img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
      tag: "Creative",
    },
    {
      name: "Content Marketing",
      href: "/services/content-marketing",
      img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800",
      tag: "Content",
    },
    {
      name: "Social Media Marketing",
      href: "/services/social-media-marketing",
      img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=800",
      tag: "Social",
    },
    {
      name: "Email Marketing",
      href: "/services/email-marketing",
      img: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=800",
      tag: "Email",
    },
  ],
  // About: [
  //   {
  //     name: "Know About Us",
  //     href: "/about",
  //     img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  //     tag: "Company",
  //   },
  //   {
  //     name: "Team Marketrixa",
  //     href: "#",
  //     img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  //     tag: "People",
  //   },
  //   {
  //     name: "Career",
  //     href: "#",
  //     img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800",
  //     tag: "Jobs",
  //   },
  // ],
};

function chunkArray<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

type MenuItem = {
  name: string;
  href: string;
  img: string;
  tag: string;
};

type MenuKey = keyof typeof MENU_DETAILS;

const navLinks: { name: string; href: string; key?: MenuKey }[] = [
  {
    name: "About Us",
    href: "/about",
    // key: "About"
  },
  // { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services", key: "Services" },
  { name: "Industry", href: "/industry" },
  { name: "International", href: "/international" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<MenuKey | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<MenuKey | null>(null);
  const [hoveredItem, setHoveredItem] = useState<MenuItem | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const pathname = usePathname();

  const items = activeDropdown ? MENU_DETAILS[activeDropdown] : [];
  const columns = chunkArray(items, Math.ceil(items.length / 3));

  const isActiveRoute = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isSubRouteActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  const handleNavEnter = (key?: MenuKey) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    if (key) {
      setActiveDropdown(key);
      setHoveredItem(MENU_DETAILS[key][0]);
    } else {
      setActiveDropdown(null);
    }
  };

  const handleNavLeave = () => {
    leaveTimer.current = setTimeout(() => {
      setActiveDropdown(null);
      setHoveredItem(null);
    }, 150);
  };

  const handleDropdownEnter = () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
  };

  const getActiveMenuFromPath = (): MenuKey | null => {
    if (pathname.startsWith("/services")) return "Services";
    // if (pathname.startsWith("/about")) return "About";
    return null;
  };

  useEffect(() => {
    const activeMenu = getActiveMenuFromPath();

    if (activeMenu) {
      setActiveDropdown(activeMenu);

      // Also set correct hovered item
      const activeItem = MENU_DETAILS[activeMenu].find((item) =>
        isSubRouteActive(item.href),
      );

      if (activeItem) {
        setHoveredItem(activeItem);
      }
    }
  }, [pathname]);

  useEffect(() => {
    const activeMenu = getActiveMenuFromPath();

    if (activeMenu) {
      const activeItem = MENU_DETAILS[activeMenu].find((item) =>
        isSubRouteActive(item.href),
      );

      if (activeItem) {
        setHoveredItem(activeItem);
      }
    }

    // ❗ Always close dropdown on route change
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <>
      {/* Announcement bar */}
      {/* <div className="hidden lg:flex items-center justify-center bg-[#F26522] text-black text-[10px] font-black uppercase tracking-widest py-2 px-4 gap-2">
        <Phone size={10} />
        <span>Free consultation available — Book your slot today</span>
      </div> */}

      <nav
        className={`sticky top-0 w-full z-[110] transition-all duration-300 ${
          isScrolled || activeDropdown
            ? "bg-black/58 backdrop-blur-xl shadow-2xl shadow-black/40 border-b border-white/5"
            : "bg-black/48 backdrop-blur-md"
        }`}
        onMouseLeave={handleNavLeave}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
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

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => handleNavEnter(link.key)}
              >
                <a
                  href={link.href}
                  className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[11px] xl:text-[12px] uppercase tracking-[0.18em] font-medium transition-all duration-200 border ${
                    isActiveRoute(link.href) || activeDropdown === link.key
                      ? "text-[#F26522] bg-[#F26522]/10 border-[#F26522]/40 shadow-[0_0_12px_rgba(242,101,34,0.15)]"
                      : "text-white bg-[#1a1f3a]/80 border-white/10 hover:bg-[#1e2442] hover:border-white/20 hover:text-white"
                  }`}
                >
                  {link.name}
                  {link.key && (
                    <ChevronDown
                      size={11}
                      className={`transition-transform duration-300 flex-shrink-0 ${
                        isActiveRoute(link.href) || activeDropdown === link.key
                          ? "rotate-180 text-[#F26522]"
                          : "text-white/40"
                      }`}
                    />
                  )}
                </a>
                {/* Active indicator dot */}
                {(isActiveRoute(link.href) || activeDropdown === link.key) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#F26522]"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowPopup(true)}
              className="hidden lg:flex items-center gap-2 bg-[#F26522] hover:bg-[#e55a1a] text-black text-[10px] xl:text-[11px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-200 active:scale-95 shadow-lg shadow-[#F26522]/20 cursor-pointer"
            >
              Get Started
              <ArrowUpRight size={13} />
            </button>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 hover:bg-white/15 text-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mega Menu (Desktop) */}
        <AnimatePresence>
          {activeDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 w-full bg-linear-to-br from-[#0b0f1a] via-[#1a1410] to-[#0f172a] border-b border-white/10 shadow-2xl shadow-black/60 z-100"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleNavLeave}
            >
              <div className="max-w-[1400px] mx-auto grid grid-cols-12">
                {/* Links */}
                <div className="col-span-8 xl:col-span-7 py-8 xl:py-10 px-10 xl:px-14 border-r border-white/5">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-[10px] uppercase tracking-[0.35em] text-[#F26522] font-black">
                      {activeDropdown}
                    </span>
                    <div className="flex-1 h-px bg-white/5" />
                    <span className="text-[10px] text-white/20 font-medium">
                      {items.length} services
                    </span>
                  </div>

                  <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-1">
                    {columns.map((col, colIndex) => (
                      <ul key={colIndex} className="space-y-0.5">
                        {col.map((item) => {
                          const isActive =
                            hoveredItem?.name === item.name ||
                            isSubRouteActive(item.href);
                          return (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                onClick={() => {
                                  setActiveDropdown(null);
                                }}
                                onMouseEnter={() =>
                                  setHoveredItem(item as MenuItem)
                                }
                                className={`group flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                                  isActive
                                    ? "text-white bg-white/8 border-l-2 border-[#F26522]"
                                    : "text-white/70 hover:text-white hover:bg-white/3"
                                }`}
                              >
                                <span className="flex items-center gap-2.5 min-w-0">
                                  {isActive && (
                                    <motion.span
                                      layoutId="active-dot"
                                      className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#F26522]"
                                    />
                                  )}
                                  <span className="truncate">{item.name}</span>
                                </span>

                                <ArrowUpRight
                                  size={14}
                                  className={`flex-shrink-0 text-[#F26522] transition-all duration-200 ${
                                    isActive
                                      ? "opacity-100"
                                      : "opacity-0 group-hover:opacity-40"
                                  }`}
                                />
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    ))}
                  </div>
                </div>

                {/* Visual Preview */}
                <div className="col-span-4 xl:col-span-5 relative overflow-hidden min-h-[320px]">
                  <AnimatePresence mode="wait">
                    {hoveredItem && (
                      <motion.div
                        key={hoveredItem.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="absolute inset-0"
                      >
                        <img
                          src={hoveredItem.img}
                          alt={hoveredItem.name}
                          className="w-full h-full object-cover opacity-25 scale-105 transition-all duration-700 hover:opacity-35 hover:scale-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/60 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />

                        <div className="absolute bottom-25 left-10 xl:left-14 right-6">
                          <motion.div
                            initial={{ y: 12, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.05 }}
                            className="space-y-3"
                          >
                            <span className="inline-block bg-[#F26522]/15 text-[#F26522] text-[9px] font-black uppercase tracking-[0.4em] px-3 py-1.5 rounded-full border border-[#F26522]/20">
                              {hoveredItem.tag}
                            </span>
                            <h4 className="text-3xl xl:text-4xl font-black text-white leading-[1.1] tracking-tight">
                              {hoveredItem.name
                                .split(" ")
                                .slice(0, 2)
                                .join(" ")}
                              {hoveredItem.name.split(" ").length > 2 && (
                                <>
                                  <br />
                                  <span className="text-[#F26522]">
                                    {hoveredItem.name
                                      .split(" ")
                                      .slice(2)
                                      .join(" ")}
                                  </span>
                                </>
                              )}
                            </h4>
                            <a
                              href={hoveredItem.href}
                              className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-white/60 hover:text-white transition-colors mt-2"
                            >
                              Explore service
                              <ArrowUpRight size={12} />
                            </a>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[115] lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#0a0a0a] z-[120] flex flex-col shadow-2xl lg:hidden"
            >
              {/* Drawer header */}
              <div className="flex justify-between items-center px-6 py-5 border-b border-white/8">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <Image
                    src="/logo-rec-trans.png"
                    width={130}
                    height={44}
                    alt="Marketrixa"
                    className="object-contain h-9 w-auto"
                    priority
                  />
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/8 hover:bg-white/12 text-white/70 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav items */}
              <nav className="flex-1 overflow-y-auto py-4 px-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <div
                      className={`flex items-center justify-between rounded-xl px-4 py-3.5 mb-1 cursor-pointer transition-colors ${
                        isActiveRoute(link.href) || mobileDropdown === link.key
                          ? "bg-[#F26522]/10 text-[#F26522]"
                          : "text-white hover:bg-white/5"
                      }`}
                      onClick={() => {
                        if (link.key) {
                          setMobileDropdown((prev) =>
                            prev === link.key ? null : (link.key as MenuKey),
                          );
                        } else {
                          setMobileMenuOpen(false);
                        }
                      }}
                    >
                      <span className="text-sm font-bold uppercase tracking-[0.12em]">
                        {link.name}
                      </span>
                      {link.key && (
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            mobileDropdown === link.key
                              ? "rotate-180 text-[#F26522]"
                              : "text-white/30"
                          }`}
                        />
                      )}
                    </div>

                    {/* Sub-items */}
                    <AnimatePresence>
                      {link.key && mobileDropdown === link.key && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.22 }}
                          className="overflow-hidden mb-2"
                        >
                          <div className="ml-4 pl-4 border-l-2 border-[#F26522]/25 py-1 space-y-0.5">
                            {MENU_DETAILS[link.key].map((sub) => (
                              <a
                                key={sub.name}
                                href={sub.href}
                                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-[13px] font-semibold text-white/40 hover:text-white hover:bg-white/5 transition-all group"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <span>{sub.name}</span>
                                <ArrowUpRight
                                  size={13}
                                  className="opacity-0 group-hover:opacity-100 text-[#F26522] transition-opacity"
                                />
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer footer */}
              <div className="px-4 py-6 border-t border-white/8 space-y-3">
                <a
                  href="tel:+911234567890"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all text-sm font-bold tracking-wide"
                >
                  <Phone size={15} className="text-[#F26522]" />
                  +91 12345 67890
                </a>
                <button
                  className="w-full bg-[#F26522] hover:bg-[#e55a1a] text-black font-black py-4 rounded-xl uppercase tracking-widest text-sm transition-all active:scale-[0.98] shadow-lg shadow-[#F26522]/20"
                  onClick={() => setShowPopup(true)}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}
