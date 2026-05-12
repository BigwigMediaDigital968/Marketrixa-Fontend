"use client";
import { motion } from "framer-motion";
import {
  Search,
  Target,
  BarChart3,
  Settings,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
} from "lucide-react";
import Link from "next/link";

const SeoFeatures = () => {
  const features = [
    {
      title: "Strategic Keyword Ranking",
      description:
        "Reach the top positions on Google with keyword strategies built for your Ahmedabad market. Our SEO services in Ahmedabad begin with thorough research to identify high-intent search terms that bring in customers who are ready to act, not just browse.",
      icon: <Target className="w-6 h-6" />,
      tag: "Conversion-Focused",
    },
    {
      title: "Brand's Online Visibility",
      description:
        "Your competitors are already investing in search engine optimization. As a leading search engine optimization company in Ahmedabad, we boost your online presence by building quality backlinks, refining your content strategy, and optimizing your website structure so Google trusts and ranks your brand higher.",
      icon: <Globe className="w-6 h-6" />,
      tag: "Global Reach",
    },
    {
      title: "Optimizing SEO Performance",
      description:
        "Page speed, core web vitals, and mobile optimization all directly impact your search rankings. Our technical team delivers SEO services in Ahmedabad that cover every performance angle, combining cutting-edge technology with expert content creation to keep your website fast and competitive.",
      icon: <Zap className="w-6 h-6" />,
      tag: "Speed & Tech",
    },
    {
      title: "The Power of Back-End",
      description:
        "Behind every high-ranking website is a strong technical foundation. We use advanced analytics tools, HTML validators, and structured data implementation to identify and fix back-end issues that hold your website back. Our search engine optimization company in Ahmedabad ensures your site is fully crawlable and search engine-ready.",
      icon: <Settings className="w-6 h-6" />,
      tag: "Technical SEO",
    },
  ];

  return (
    <section className="relative text-white py-20 lg:py-32 px-6 min-h-screen">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F26522]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch">
          {/* LEFT SECTION: STICKY ON DESKTOP */}
          <div className="w-full lg:w-[45%] relative">
            <div className="sticky top-28 space-y-8">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[#F26522] font-bold tracking-widest text-xs uppercase block"
              >
                Crafting Digital Stories, Connecting Audiences
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-2xl lg:text-4xl uppercase"
              >
                Boost Your{" "}
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1px #F26522" }}
                >
                  Visibility
                </span>{" "}
                On <br />
                Search Engines
              </motion.h2>

              <motion.p className="text-md text-white/80">
                Businesses across Ahmedabad are losing customers every day
                simply because they are not visible online. Our SEO services in
                Ahmedabad are built to change that. From local startups to
                established enterprises, we help brands get found by the right
                audience at the right time through proven search engine
                optimization strategies.
              </motion.p>

              {/* Simulated Data Dashboard Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative group rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-1"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#F26522]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-black rounded-[14px] p-6 space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono">
                      SEO_REPORT_2025.CSV
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-tighter">
                          Organic Traffic
                        </p>
                        <h4 className="text-3xl font-bold text-[#F26522]">
                          522% Growth
                        </h4>
                      </div>
                      <BarChart3 className="text-white/20 w-12 h-12" />
                    </div>
                    {/* Mock graph bars */}
                    <div className="flex items-end gap-1 h-20">
                      {[40, 60, 45, 90, 65, 80, 100].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          transition={{ delay: i * 0.1, duration: 1 }}
                          className="flex-1 bg-gradient-to-t from-[#F26522] to-orange-300/40 rounded-t-sm"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5 text-[10px] uppercase font-bold text-gray-500">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3 h-3 text-green-500" /> Google
                      Verified
                    </div>
                    <div className="flex items-center gap-2">
                      <Search className="w-3 h-3 text-[#F26522]" /> Top 3
                      Rankings
                    </div>
                  </div>
                </div>
              </motion.div>

              <Link
                href="#case-studies"
                className="hidden lg:flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white hover:text-[#F26522] transition-colors group cursor-pointer"
              >
                View Detailed Case Studies{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

          {/* RIGHT SECTION: SCROLLABLE LIST */}
          <div className="w-full lg:w-[55%] space-y-8">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group relative"
              >
                {/* 3D Glass Card */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-[#F26522] to-transparent rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity blur-[2px]" />
                <div className="relative bg-[#0F0F0F] border border-white/5 rounded-3xl p-8 md:p-12 hover:bg-[#151515] transition-all duration-500 shadow-2xl">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-[#F26522]/10 border border-[#F26522]/20 flex items-center justify-center text-[#F26522] group-hover:bg-[#F26522] group-hover:text-white transition-all duration-500 shadow-inner">
                        {item.icon}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-gray-400">
                          {item.tag}
                        </span>
                        <span className="text-white/10 font-black text-2xl">
                          0{idx + 1}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold group-hover:text-[#F26522] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed text-md font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Mobile-only CTA */}
            <div className="lg:hidden pt-8 text-center">
              <button className="w-full py-5 bg-[#F26522] rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-[#F26522]/20 cursor-pointer hover:bg-[#F26522]/90 transition-colors">
                Analyze My Website SEO
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoFeatures;
