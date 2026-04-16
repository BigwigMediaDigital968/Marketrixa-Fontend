"use client";

import { motion } from "framer-motion";
import {
  Users,
  FileText,
  TrendingUp,
  ArrowUpRight,
  Calendar,
  Activity,
} from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Leads",
      value: "1,284",
      change: "+12.5%",
      icon: <Users className="text-[#F26522]" size={24} />,
      description: "New inquiries this month",
      color: "from-[#F26522]/20 to-transparent",
    },
    {
      title: "Total Blogs",
      value: "42",
      change: "+3",
      icon: <FileText className="text-[#F26522]" size={24} />,
      description: "Published articles",
      color: "from-[#F26522]/20 to-transparent",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Dashbaord <span className="text-[#F26522]">Overview</span>
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Real-time performance metrics and agency data.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-2 rounded-2xl w-fit">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-xl text-xs font-bold text-gray-300">
            <Calendar size={14} className="text-[#F26522]" />
            Oct 24 - Nov 24
          </div>
          <button className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-gray-400">
            <Activity size={18} />
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="relative group overflow-hidden bg-[#111] border border-white/5 rounded-[2.5rem] p-8 transition-all hover:border-[#F26522]/30"
          >
            {/* Ambient Background Glow */}
            <div
              className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} blur-3xl opacity-50 group-hover:opacity-100 transition-opacity`}
            />

            <div className="relative z-10">
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 bg-black/40 border border-white/10 rounded-2xl flex items-center justify-center shadow-inner">
                  {stat.icon}
                </div>
                <div className="flex items-center gap-1 px-3 py-1 bg-[#F26522]/10 border border-[#F26522]/20 rounded-full text-[#F26522] text-[10px] font-black uppercase tracking-wider">
                  <TrendingUp size={12} />
                  {stat.change}
                </div>
              </div>

              <div className="mt-8">
                <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em]">
                  {stat.title}
                </p>
                <div className="flex items-end gap-3 mt-1">
                  <h3 className="text-5xl font-black text-white">
                    {stat.value}
                  </h3>
                  <div className="mb-2 p-1 bg-white/5 rounded-md text-gray-500">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-2 font-medium">
                  {stat.description}
                </p>
              </div>
            </div>

            {/* Bottom Progress Accent */}
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#F26522] to-transparent w-full opacity-30 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </motion.div>

      {/* Mock Section for Visual Balance */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-[#111] border border-white/5 rounded-[2.5rem] p-8 border-dashed"
      >
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 text-gray-600">
            <Activity size={32} />
          </div>
          <h3 className="text-white font-bold">More Insights Coming Soon</h3>
          <p className="text-gray-500 text-sm max-w-xs mt-2">
            We are currently processing deeper analytics for your agency
            performance.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
