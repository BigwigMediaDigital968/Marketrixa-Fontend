"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  ChevronRight,
  Menu,
  X,
  Bell,
  BookOpenText,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const pathname = usePathname();

  useEffect(() => {
    // Check for mock token
    const token = localStorage.getItem("admin_auth_token");
    if (!token) {
      window.location.href = "/login-admin"; // Adjust path as needed
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("admin_auth_token");
    window.location.href = "/login-admin";
  };

  // While checking auth, show a clean loader
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-10 h-10 border-2 border-[#F26522] border-t-transparent rounded-full"
        />
      </div>
    );
  }

  const navItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      link: "/dashboard",
    },
    {
      name: "Leads Management",
      icon: <Users size={20} />,
      link: "/lead-management",
    },
    {
      name: "Blog Management",
      icon: <BookOpenText size={20} />,
      link: "/blog-management",
    },
    // {
    //   name: "Newsletter Management",
    //   icon: <BookOpenText size={20} />,
    //   link: "/newsletter-management",
    // },
    // {
    //   name: "Settings",
    //   icon: <Settings size={20} />,
    //   link: "/settings",
    // },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex">
      {/* Sidebar Navigation */}
      <motion.aside
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="hidden md:flex flex-col border-r border-white/5 bg-[#080808] z-50 sticky top-0 h-screen"
      >
        {/* Logo Section */}
        <div className="p-6 h-20 flex items-center gap-4 mt-5">
          <div className="min-w-[40px] h-10 bg-[#F26522] rounded-lg flex items-center justify-center">
            <span className="font-black text-black">A</span>
          </div>
          {isSidebarOpen && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-black tracking-tighter text-xl"
            >
              MARKETRIXA <br />
              <span className="text-white/40">ADMIN</span>
            </motion.span>
          )}
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.link;

            return (
              <Link
                key={item.name}
                href={item.link}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group cursor-pointer ${
                  isActive
                    ? "bg-[#F26522] text-black shadow-lg shadow-[#F26522]/20"
                    : "text-gray-500 hover:text-white hover:bg-white/5"
                }`}
              >
                <div
                  className={
                    isActive ? "text-black" : "group-hover:text-[#F26522]"
                  }
                >
                  {item.icon}
                </div>

                {isSidebarOpen && (
                  <span className="font-bold text-sm tracking-tight">
                    {item.name}
                  </span>
                )}

                {/* Active Indicator Line */}
                {isActive && (
                  <div className="ml-auto w-2 h-2 bg-white rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* User / Logout */}
        <div className="p-4 border-t border-white/5">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-4 py-4 rounded-xl text-gray-500 hover:text-red-500 hover:bg-red-500/10 transition-all cursor-pointer"
          >
            <LogOut size={20} />
            {isSidebarOpen && <span className="font-bold text-sm">Logout</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-20 border-b border-white/5 bg-[#080808]/50 backdrop-blur-xl px-8 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-white/5 rounded-lg text-gray-400 cursor-pointer"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            {/* <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest hidden sm:block">
              Internal Management System
            </h2> */}
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-gray-400 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#F26522] rounded-full border-2 border-[#080808]" />
            </button>
            <div className="h-8 w-px bg-white/10" />
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <div className="text-xs font-black text-white">
                  Welcome, Admin
                </div>
                <div className="text-[10px] text-[#F26522] uppercase font-bold tracking-tighter">
                  Root Level
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={window.location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
