"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, User, Eye, EyeOff, Loader2, ShieldCheck } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // STATIC CREDENTIALS
  const ADMIN_EMAIL = "admin@marketrixa.com";
  const ADMIN_PASSWORD = "admin123";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate API delay
    setTimeout(() => {
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        // Generate a mock JWT token
        const mockToken = btoa(
          JSON.stringify({ role: "admin", exp: Date.now() + 86400000 }),
        );
        localStorage.setItem("admin_auth_token", mockToken);

        // Redirect to dashboard
        window.location.href = "/dashboard";
      } else {
        setError("Invalid credentials. Please try again.");
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#080808] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#F26522]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#F26522]/5 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#F26522] rounded-2xl flex items-center justify-center shadow-lg shadow-[#F26522]/20">
            <ShieldCheck size={32} className="text-black" />
          </div>

          <div className="text-center mt-6 mb-10">
            <h1 className="text-2xl font-black text-white tracking-tight">
              Access Control
            </h1>
            <p className="text-gray-500 text-sm mt-2">
              Enter your credentials to manage the MarketRixa Admin Portal
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400 ml-1">
                Email Address
              </label>
              <div className="relative group">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#F26522] transition-colors"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-[#F26522]/50 focus:ring-1 focus:ring-[#F26522]/50 transition-all"
                  placeholder="admin@agency.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400 ml-1">
                Password
              </label>
              <div className="relative group">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#F26522] transition-colors"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-12 text-white focus:outline-none focus:border-[#F26522]/50 focus:ring-1 focus:ring-[#F26522]/50 transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-red-500/10 border border-red-500/20 text-red-500 text-xs py-3 px-4 rounded-lg text-center font-bold uppercase tracking-wider"
              >
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-black font-black uppercase tracking-[0.1em] text-sm py-4 rounded-xl hover:bg-[#F26522] hover:text-white transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer"
            >
              {isLoading ? (
                <Loader2 size={20} className="animate-spin" />
              ) : (
                <>
                  Secure Login
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </>
              )}
            </button>
          </form>

          <div className="mt-10 pt-6 border-t border-white/5 text-center">
            <p className="text-gray-600 text-[10px] font-medium tracking-widest uppercase">
              Encrypted Session Management v4.2
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
