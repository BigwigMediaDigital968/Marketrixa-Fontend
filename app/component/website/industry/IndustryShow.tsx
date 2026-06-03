"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Building2,
  Stethoscope,
  Factory,
  Truck,
  Landmark,
  Hotel,
  ArrowRight,
  Car,
  GraduationCap,
  Utensils,
  ShoppingBag,
  Store,
  ArrowDown,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface Industry {
  id: string;
  caption: string;
  title: string;
  description: string;
  details: string[];
  image: string;
  icon: React.ReactNode;
  problem: {
    title: string;
    desc?: string;
  };
  solution: {
    title: string;
    desc?: string;
  };
}

const INDUSTRIES: Industry[] = [
  {
    id: "01",
    caption: "Finance & Trading Growth",
    title: "Finance & Trading",
    description:
      "Scale financial services with targeted lead generation, trading account acquisition, and educational funnels.",
    details: [
      "Trading Account Opening",
      "Forex Lead Generation",
      "Webinar Funnels",
      "Performance Ads",
      "Influencer Promotions",
    ],
    image:
      "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=1200",
    icon: <Landmark className="w-6 h-6" />,
    problem: {
      title: "High Lead Costs And Low Conversion To Funded Accounts",
    },
    solution: {
      title: "Automated Webinar Funnels That Increase Qualified Account Openings",
    },
  },

  {
    id: "02",
    caption: "Real Estate Marketing",
    title: "Real Estate",
    description:
      "Generate high-quality property leads and drive site visits through targeted digital marketing campaigns.",
    details: [
      "Property Leads",
      "Site Visit Campaigns",
      "Meta Lead Ads",
      "Google Search Ads",
      "WhatsApp Automation",
    ],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
    icon: <Building2 className="w-6 h-6" />,
    problem: {
      title: "Large Inquiry Volume But Very Few Property Visits",
    },
    solution: {
      title: "Lead Nurturing System That Drives More Site Visits",
    },
  },

  {
    id: "03",
    caption: "E-commerce Brand Scaling",
    title: "E-commerce Brands",
    description:
      "Accelerate online sales with conversion-focused campaigns, influencer collaborations, and creative strategies.",
    details: [
      "Shopify Growth",
      "ROAS Scaling",
      "UGC Creatives",
      "Retargeting Ads",
      "Influencer Collaborations",
    ],
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=1200",
    icon: <ShoppingBag className="w-6 h-6" />,
    problem: {
      title: "Rising Customer Acquisition Costs Reducing Overall Profit Margins",
    },
    solution: {
      title: "UGC And Retargeting Campaigns That Improve Purchase ROAS",
    },
  },

  {
    id: "04",
    caption: "Healthcare Marketing",
    title: "Clinics & Healthcare",
    description:
      "Attract more patients and build trust with local visibility campaigns and healthcare-focused advertising.",
    details: [
      "Appointment Leads",
      "Local SEO",
      "Google Maps Ranking",
      "Trust Campaigns",
      "Meta Ads",
    ],
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
    icon: <Stethoscope className="w-6 h-6" />,
    problem: {
      title: "Low Local Search Visibility And Inconsistent Patient Flow",
    },
    solution: {
      title: "Local SEO Funnels That Generate Regular Patient Bookings",
    },
  },

  {
    id: "05",
    caption: "Coaching & Course Sales",
    title: "Coaches & Courses",
    description:
      "Build authority, generate leads, and sell more programs through strategic funnels and personal branding.",
    details: [
      "Webinar Funnels",
      "Personal Branding",
      "Course Sales Ads",
      "Lead Generation",
    ],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
    icon: <GraduationCap className="w-6 h-6" />,
    problem: {
      title: "Large Audience Reach But Low Course Enrollment Rates",
    },
    solution: {
      title: "Personal Branding Funnels That Consistently Sell Programs",
    },
  },

  {
    id: "06",
    caption: "Restaurant Growth Solutions",
    title: "Restaurants & Cafes",
    description:
      "Drive footfall and online orders with local marketing, influencer partnerships, and engaging content.",
    details: [
      "Local Awareness Ads",
      "Food Influencers",
      "Reel Marketing",
      "Offer Campaigns",
    ],
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200",
    icon: <Utensils className="w-6 h-6" />,
    problem: {
      title: "Poor Local Awareness And Low Repeat Customer Visits",
    },
    solution: {
      title: "Reel Marketing Campaigns That Increase Footfall And Orders",
    },
  },

  {
    id: "07",
    caption: "Local Business Growth",
    title: "Local Businesses",
    description:
      "Help local businesses attract more customers, increase visibility, and drive consistent sales through targeted digital marketing.",
    details: [
      "Google Business Profile Optimization",
      "SEO",
      "Meta Lead Ads",
      "WhatsApp Marketing",
      "Customer Review Campaigns",
    ],
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=1200",
    icon: <Store className="w-6 h-6" />,
    problem: {
      title: "Limited Online Presence Leading To Fewer Customer Inquiries",
    },
    solution: {
      title: "Google Visibility System That Generates Consistent Local Leads",
    },
  },

  {
    id: "08",
    caption: "Automobile Marketing",
    title: "Automobile Industry",
    description:
      "Generate showroom visits and test drives through highly targeted automotive advertising campaigns.",
    details: [
      "Car Showroom Leads",
      "Bike Dealership Campaigns",
      "Test Drive Campaigns",
    ],
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200",
    icon: <Car className="w-6 h-6" />,
    problem: {
      title: "Low Showroom Visits And Expensive Test Drive Leads",
    },
    solution: {
      title: "Location Based Campaigns That Increase Qualified Walk Ins",
    },
  },

  {
    id: "09",
    caption: "Hospitality Marketing",
    title: "Hotels & Resorts",
    description:
      "Increase direct bookings and brand visibility with travel-focused campaigns and influencer marketing.",
    details: [
      "Booking Campaigns",
      "Travel Influencers",
      "Google Ads",
      "Travel Reels",
    ],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
    icon: <Hotel className="w-6 h-6" />,
    problem: {
      title: "Heavy OTA Dependence Reducing Direct Booking Revenue Margins",
    },
    solution: {
      title: "Direct Booking Funnels That Reduce OTA Commission Costs",
    },
  },
];

const IndustryShow: React.FC = () => {
  const brandOrange = "#F26522";
  const router = useRouter();

  // Animation Variants
  const blockVariants: Variants = {
    hidden: (isEven: boolean) => ({
      opacity: 0,
      x: isEven ? 100 : -100,
      rotateY: isEven ? -10 : 10,
    }),
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="text-white py-24 lg:py-40 px-6 sm:px-12 lg:px-20 overflow-hidden perspective-[2000px]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-24 lg:mb-40 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4"
          >
            <div
              className="w-12 h-[2px]"
              style={{ backgroundColor: brandOrange }}
            />
            <span className="uppercase tracking-[0.4em] text-xs font-bold text-gray-500">
              Market Dominance
            </span>
            <div
              className="w-12 h-[2px]"
              style={{ backgroundColor: brandOrange }}
            />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight">
            Specialized <span style={{ color: brandOrange }}>Industries</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From initial business design to global market expansion, we engineer
            digital solutions that redefine sector standards.
          </p>
        </div>

        {/* Industry Blocks */}
        <div className="space-y-32 md:space-y-48">
          {INDUSTRIES.map((industry, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={industry.id}
                custom={isEven}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={blockVariants}
                className={`relative flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-12 lg:gap-24 items-center`}
              >
                {/* 3D Image Card */}
                <div className="w-full lg:w-1/2 group">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5 transition-transform duration-700 group-hover:scale-[1.02] group-hover:-rotate-1">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" /> */}
                    <div className="absolute bottom-8 left-8">
                      <span
                        className="text-5xl font-black opacity-20 italic"
                        style={{
                          WebkitTextStroke: "1px white",
                          color: "transparent",
                        }}
                      >
                        {industry.id}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Card with Backdrop Blur */}
                <div className="w-full lg:w-1/2 relative">
                  {/* The 3D Block Background */}
                  <div className="absolute -inset-6 bg-white/[0.03] backdrop-blur-2xl rounded-[40px] border border-white/10 shadow-[20px_40px_80px_rgba(0,0,0,0.4)] z-0" />

                  {/* Content Body */}
                  <div className="relative z-10 p-4 lg:p-8 space-y-2">
                    <div className="flex items-center gap-4">
                      <div
                        className="p-3 rounded-2xl bg-[#F26522]/10 border border-[#F26522]/20"
                        style={{ color: brandOrange }}
                      >
                        {industry.icon}
                      </div>
                      <div>
                        <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-gray-500">
                          {industry.caption}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight" style={{ wordSpacing: "8px" }}>
                          {industry.title}
                        </h3>
                      </div>
                    </div>



                    <p className="text-gray-400 text-lg leading-relaxed">
                      {industry.description}
                    </p>


                    <div className="py-3">
                      <div className="flex-1 rounded-xl border border-red-500/20 p-3">
                        <span className="text-red-400 text-xs uppercase">Problem</span>
                        <p className="font-light text-white mt-1">
                          {industry.problem.title}
                        </p>
                      </div>

                      <div className="flex justify-center">
                        <ArrowDown className="w-5 h-5 text-[#F26522]" />

                      </div>
                      <div className="flex-1 rounded-xl border border-emerald-500/20 p-3">
                        <span className="text-emerald-400 text-xs uppercase">Solution</span>
                        <p className="font-light text-white mt-1">
                          {industry.solution.title}
                        </p>
                      </div>
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                      {industry.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 group"
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: brandOrange }}
                          />
                          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => router.push("/contact")}
                      className="flex items-center gap-3 px-8 py-4 rounded-xl font-bold uppercase text-xs tracking-widest transition-all hover:gap-6 cursor-pointer"
                      style={{ backgroundColor: brandOrange, color: "white" }}
                    >
                      book a demo call <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustryShow;
