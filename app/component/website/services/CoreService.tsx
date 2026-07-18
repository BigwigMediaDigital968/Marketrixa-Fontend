'use client';
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Globe,
  TrendingUp,
  Search,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Zap,
  Cpu,
  ShieldCheck,
  Video,
  Users,
  Palette
} from "lucide-react";

// --- Types ---
interface ServiceItem {
  id: string;
  icon: React.ComponentType<any>;
  label: string;
  tagline: string;
  description: string;
  highlights: string[];
  tags: string[];
  cta: string;
  link: string;
  imageUrl: string;
  accent: string;
}

// --- Focused 4 Flagship Digital Services (Clean Content Structure) ---
const SERVICES: ServiceItem[] = [
  {
    id: "performance",
    icon: Zap,
    label: "Performance Marketing",
    tagline: "Paid Campaigns Engineered For Predictable Growth",
    description:
      "We create and optimize high-converting advertising campaigns across Meta and Google to generate qualified leads, increase sales, and maximize return on ad spend. Every campaign is backed by data, testing, and funnel optimization.",
    highlights: [
      "Meta Ads Campaign Management",
      "Google Search & Display Ads",
      "Lead Generation Systems",
      "High-Converting Funnel Marketing"
    ],
    tags: [
      "Meta Ads",
      "Google Ads",
      "Lead Generation",
      "Sales Funnels",
      "Conversion Tracking",
      "Performance Analytics"
    ],
    cta: "Scale Your Business",
    link: "/services/performance-marketing",
    accent: "#f26522",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },

  {
    id: "ugc",
    icon: Video,
    label: "UGC Video Production",
    tagline: "Authentic Content That Builds Trust And Converts",
    description:
      "We produce creator-style content designed for today's social platforms. From product demonstrations to engaging UGC reels, we create authentic videos that capture attention, increase engagement, and improve ad performance.",
    highlights: [
      "UGC Reel Creation",
      "Product Demo Videos",
      "Creator Generated Content",
      "Short-Form Video Production"
    ],
    tags: [
      "UGC Videos",
      "Instagram Reels",
      "Product Videos",
      "Creator Content",
      "Short Form Content",
      "Video Ads"
    ],
    cta: "Create High-Converting Content",
    link: "/services/ugc-video-creation",
    accent: "#f26522",
    imageUrl:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop"
  },

  {
    id: "influencer",
    icon: Users,
    label: "Influencer Marketing",
    tagline: "Leverage Trusted Voices To Accelerate Growth",
    description:
      "Connect your brand with carefully selected influencers who drive real engagement and measurable business results. We manage everything from creator sourcing and campaign strategy to execution and performance reporting.",
    highlights: [
      "Influencer Campaign Management",
      "Brand Promotion Campaigns",
      "Finance Influencer Collaborations",
      "E-commerce Influencer Partnerships"
    ],
    tags: [
      "Influencer Marketing",
      "Brand Promotions",
      "Finance Influencers",
      "E-commerce Influencers",
      "Creator Partnerships",
      "Campaign Management"
    ],
    cta: "Launch An Influencer Campaign",
    link: "/services/influencer-marketing",
    accent: "#f26522",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
  }, {
    id: "website",
    icon: Globe,
    label: "Website Development",
    tagline: "Websites Built To Convert Visitors Into Customers",
    description:
      "From business websites to e-commerce stores and sales funnels, we build high-performance digital experiences optimized for growth and conversions.",
    highlights: [
      "Business Websites",
      "Landing Pages",
      "E-commerce Stores",
      "Sales Funnels"
    ],
    tags: [
      "Website Development",
      "Landing Pages",
      "Shopify",
      "WordPress",
      "Funnels",
      "Conversion Optimization"
    ],
    cta: "Build Your Website",
    link: "/services/website-development",
    accent: "#f26522",
    imageUrl:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop"
  },

  {
    id: "design",
    icon: Palette,
    label: "Graphic Design",
    tagline: "Creative Assets That Capture Attention Instantly",
    description:
      "We design compelling visuals that strengthen your brand identity and improve marketing performance across every platform.",
    highlights: [
      "Ad Creatives",
      "Social Media Posts",
      "Branding Design",
      "Motion Graphics"
    ],
    tags: [
      "Graphic Design",
      "Ad Creatives",
      "Branding",
      "Motion Graphics",
      "Social Media Design",
      "Visual Identity"
    ],
    cta: "Elevate Your Brand",
    link: "/services/graphic-design",
    accent: "#f26522",
    imageUrl:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop"
  },

  {
    id: "seo",
    icon: Search,
    label: "SEO",
    tagline: "Increase Visibility And Dominate Search Results",
    description:
      "Grow your organic traffic through technical SEO, local SEO, keyword strategy, and website optimization that drives long-term business growth.",
    highlights: [
      "Local SEO",
      "Google Ranking",
      "Website Optimization",
      "Keyword Strategy"
    ],
    tags: [
      "SEO",
      "Local SEO",
      "Google Rankings",
      "Keyword Research",
      "Technical SEO",
      "Organic Growth"
    ],
    cta: "Improve Your Rankings",
    link: "/services/search-engine-optimization",
    accent: "#f26522",
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
  }
]

const GridPattern: React.FC<{ opacity: number }> = ({ opacity }) => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `radial-gradient(rgba(242,101,34,${opacity}) 1px, transparent 1px)`,
      backgroundSize: "32px 32px",
    }}
  />
);

export default function CoreServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = SERVICES[activeIndex];

  // Heading Scroll Animator
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <div className="bg-neutral-950 text-white font-sans antialiased overflow-hidden py-16 md:py-24 relative w-full min-h-screen flex flex-col justify-center">
      
      {/* Background Lighting Aura */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(242,101,34,0.03) 0%, transparent 75%)"
        }}
      />
      <GridPattern opacity={0.03} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        
        {/* SECTION HEADER ROW */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 25 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-white/5 mb-4 shadow-lg">
            <ShieldCheck className="w-3.5 h-3.5 text-[#f26522]" />
            <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400 font-mono">Our Capabilities</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none mb-4">
            Our Core <span className="text-white/60 italic font-light">Digital Services</span>
          </h2>
          <p className="text-xs md:text-sm text-neutral-400 leading-relaxed max-w-md mx-auto">
            From targeted acquisition funnels to unified platform database syncing — every service track we deploy is engineered for audited commercial impact.
          </p>
        </motion.div>

        {/* ── DESKTOP SPLIT CONTAINER (Hidden on Mobile) ── */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-stretch relative">
          
          {/* LEFT SIDE: Compact Navigation Selector Tabs */}
          <div className="col-span-4 flex flex-col gap-3.5 justify-center">
            {SERVICES.map((s, idx) => {
              const isActive = idx === activeIndex;
              const IconComponent = s.icon;

              return (
                <button
                  key={s.id}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`relative cursor-pointer p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 text-left ${
                    isActive
                      ? "bg-neutral-900 border-[#f26522]/30 shadow-2xl"
                      : "bg-transparent border-white/5 hover:border-white/15 hover:bg-white/5"
                  }`}
                >
                  {/* Dynamic laser side highlight */}
                  {isActive && (
                    <motion.div 
                      layoutId="servicesHighlightBar"
                      className="absolute left-0 top-1/4 bottom-1/4 w-[3px] bg-[#f26522] rounded-r-md"
                    />
                  )}

                  {/* Icon Block with active orange flip */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors shrink-0 ${
                    isActive 
                      ? "bg-[#f26522] text-black border-[#f26522]/30 shadow-md shadow-[#f26522]/10" 
                      : "bg-white/5 text-neutral-400 border-white/10"
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div className="min-w-0">
                    <span className={`text-[7.5px] font-mono tracking-widest uppercase block ${isActive ? "text-[#f26522] font-black" : "text-neutral-500"}`}>
                      CAPABILITY 0{idx + 1}
                    </span>
                    <h4 className="text-sm font-black text-white tracking-tight mt-0.5">
                      {s.label}
                    </h4>
                  </div>

                  {/* Dynamic glowing tab perimeter */}
                  {isActive && (
                    <motion.div
                      layoutId="servicesTabGlow"
                      className="absolute inset-0 rounded-2xl border border-[#f26522]/30 pointer-events-none"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE: Immersive Detail Console containing textual context AND visual photo frames */}
          <div className="col-span-8 flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, x: 25, filter: "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -15, filter: "blur(4px)" }}
                transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                className="w-full rounded-[2.5rem] bg-white/5 backdrop-blur-sm border border-[#f26522]/20 p-6 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group"
              >
                {/* Backing tech light leak */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#f26522]/5 blur-3xl rounded-full pointer-events-none" />

                <div className="relative z-10 space-y-6 flex flex-col justify-between h-full">
                  
                  {/* Split Content Layer: Left Text details, Right Image card */}
                  <div className="grid grid-cols-12 gap-6 items-start">
                    
                    

                    {/* Integrated Service Image Card (col-span-5) */}
                    <div className="col-span-5 aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group/image">
                      <img 
                        src={activeService.imageUrl} 
                        alt={activeService.label} 
                        className="w-full h-full object-cover transition-opacity duration-700 scale-100 group-hover/image:scale-105 filter saturate-75 group-hover/image:saturate-100"
                      />
                    </div>
                    {/* Console Details Text (col-span-7) */}
                    <div className="col-span-7 space-y-4 text-left">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-950 border border-white/5">
                        <activeService.icon className="w-3.5 h-3.5 text-[#f26522]" />
                        <span className="text-[8.5px] font-mono font-black text-neutral-300 uppercase tracking-widest">{activeService.label}</span>
                      </div>

                      <h3 className="text-2xl font-black text-white tracking-tight leading-tight">
                        {activeService.tagline}
                      </h3>
                      <p className="text-[11.5px] text-neutral-400 leading-relaxed font-sans">
                        {activeService.description}
                      </p>
                    </div>

                  </div>

                  {/* Checklist Highlights */}
                  <div className="grid grid-cols-2 gap-3 text-left pt-4 border-t border-white/5">
                    {activeService.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-[10.5px] text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="font-sans leading-none">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Operational Tags Section */}
                  <div className="space-y-2 border-t border-white/5 pt-4 text-left">
                    <div className="flex items-center gap-1.5 text-[8px] font-mono tracking-widest uppercase font-black text-neutral-500">
                      <Sparkles className="w-3.5 h-3.5 text-[#f26522]" />
                      Tools & Platforms Deployed
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {activeService.tags.map((t, i) => (
                        <span key={i} className="text-[9px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-white/5 text-neutral-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Action button */}
                  <div className="border-t border-white/5 pt-4 mt-1 flex justify-between items-center">
                    <span className="text-[10px] text-neutral-500 font-mono">Operational system telemetry sync</span>
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={activeService.link}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f26522] hover:bg-[#ff7b3c] text-neutral-950 font-bold text-[10px] uppercase tracking-widest transition-colors cursor-pointer"
                    >
                      <span>{activeService.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </motion.a>
                  </div>

                </div>

                {/* Glowing border outline overlay */}
                <div className="absolute inset-0 border border-white/5 group-hover:border-[#f26522]/20 rounded-[2.5rem] pointer-events-none transition-colors duration-500" />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* ── MOBILE ACCORDION STACK (Hidden on Desktop) ── */}
        <div className="lg:hidden flex flex-col gap-4">
          {SERVICES.map((s, idx) => {
            const isOpen = idx === activeIndex;
            const IconComponent = s.icon;

            return (
              <div
                key={s.id}
                className={`rounded-2xl border transition-colors duration-300 overflow-hidden ${
                  isOpen ? "border-[#f26522]/30 bg-neutral-900/60" : "border-white/5 bg-neutral-900/10"
                }`}
              >
                {/* Header Selector bar */}
                <button
                  onClick={() => setActiveIndex(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between p-4 bg-transparent border-none text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
                      isOpen ? "bg-[#f26522] text-black border-[#f26522]/20 shadow-md shadow-[#f26522]/10" : "bg-white/5 text-neutral-400 border-white/10"
                    }`}>
                      <IconComponent className="w-4.5 h-4.5" />
                    </div>
                    <span className="text-xs font-black text-white tracking-tight">{s.label}</span>
                  </div>
                  
                  <motion.span
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-neutral-500"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </motion.span>
                </button>

                {/* Collapsible panel body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 pt-0 space-y-4 border-t border-white/5 text-left">
                        
                        {/* Display Image on Mobile too */}
                        <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/10">
                          <img src={s.imageUrl} alt={s.label} className="w-full h-full object-cover filter saturate-75 opacity-70" />
                        </div>

                        <h4 className="text-xs font-mono font-black text-[#f26522] tracking-wider block">{s.tagline}</h4>
                        <p className="text-[11px] text-neutral-400 leading-relaxed font-sans">{s.description}</p>
                        
                        {/* Checkboxes */}
                        <div className="space-y-1.5 pt-2">
                          {s.highlights.map((h, i) => (
                            <div key={i} className="flex items-center gap-2 text-[10px] text-neutral-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              <span className="font-sans leading-none">{h}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1 pt-1">
                          {s.tags.map((t, i) => (
                            <span key={i} className="text-[8px] font-mono px-2 py-0.5 rounded bg-neutral-950 border border-white/5 text-neutral-400">
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Call to action button */}
                        <button
                          onClick={() => window.open(s.link, "_self")}
                          className="w-full flex items-center justify-center gap-2 py-3 mt-3 rounded-xl bg-[#f26522] text-neutral-950 font-bold text-[10px] uppercase tracking-widest"
                        >
                          <span>{s.cta}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}