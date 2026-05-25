"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Megaphone,
  MailOpen,
  ShoppingCart,
  Users,
  HeartHandshake,
  CalendarDays,
  RefreshCw,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

const E = [0.22, 1, 0.36, 1] as const;

interface ServiceType {
  title: string;
  description: string | React.ReactNode;
  icon: React.ElementType;
  tags: string[];
}

const services: ServiceType[] = [
  {
    title: "Promotional Campaigns",
    description:
      "Promotional communication that is specific and tailored towards the purpose of raising awareness, engagement and sales.",
    icon: Megaphone,
    tags: ["Promotional Communication", "Awareness", "Sales"],
  },
  {
    title: "Newsletter Management",
    description:
      "Customer relationship building and retention updates that are sent on a regular basis.",
    icon: MailOpen,
    tags: ["Customer Relationships", "Retention Updates", "Newsletters"],
  },
  {
    title: "Ecommerce Email Automation",
    description:
      "Automated customer journeys for cart recovery, repeat customers and custom recommendations.",
    icon: ShoppingCart,
    tags: ["Cart Recovery", "Repeat Customers", "Recommendations"],
  },
  {
    title: "Lead Nurturing Campaigns",
    description:
      "Effective communication processes that take the customer through the decision-making process.",
    icon: Users,
    tags: ["Lead Nurturing", "Communication", "Decision-Making"],
  },
  {
    title: "Customer Retention Emails",
    description:
      "Relationship marketing campaigns created to enhance loyalty and repeat sales.",
    icon: HeartHandshake,
    tags: ["Relationship Marketing", "Loyalty", "Repeat Sales"],
  },
  {
    title: "Event & Announcement Emails",
    description:
      "Business correspondence for presentations, promotions, news and company announcements.",
    icon: CalendarDays,
    tags: ["Presentations", "Promotions", "Announcements"],
  },
  {
    title: "Re-Engagement Campaigns",
    description:
      "Targeted messaging strategies designed to reconnect inactive subscribers with your brand.",
    icon: RefreshCw,
    tags: ["Targeted Messaging", "Inactive Subscribers", "Brand Reconnection"],
  },
  {
    title: "Analytical Performance Tracking",
    description:
      (<>
        Detailed reporting systems that measure {" "}
        <Link
          href="/services/performance-marketing-service"
          className="text-blue-600 hover:underline font-bold"
        >
          campaign engagement
        </Link>
        , click-through rates, and customer behavior..
      </>),
    icon: BarChart3,
    tags: ["Reporting", "Click-Through Rates", "Customer Behavior"],
  },
];

const ContentService: React.FC = () => {
  return (
    <section className="relative py-14 overflow-hidden">
      {/* Decorative Brand Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f26522]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-2 h-2 rounded-full bg-[#f26522] animate-pulse" />
              <span className="text-[#f26522] uppercase tracking-widest font-bold">
                Specialized Email
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: E }}
              className="text-3xl md:text-5xl font-bold leading-tight"
            >
              Tailored Email Marketing Solutions
              <br />
              <span className="text-[#f26522]">For Every Business </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/80 max-w-xs text-sm leading-relaxed"
          >
            As a results-oriented <strong>email marketing agency in Ahmedabad</strong>, Marketrixa delivers communication strategies customized for different industries and business models.

          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: E }}
              whileHover={{ scale: 1.02 }}
              className="group premium-card p-8 flex flex-col backdrop-blur-md h-full hover:border-[#f26522] transition-colors duration-500"
            >
              {/* Icon Container */}
              <div className="mb-6 relative">
                <div className="w-12 h-12 rounded-xl bg-white/50 flex items-center justify-center group-hover:bg-[#f26522] group-hover:text-white transition-all duration-500">
                  <service.icon size={24} strokeWidth={1.5} />
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#f26522] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed font-light mb-8 flex-grow">
                {service.description}
              </p>

              {/* Tags/Badges */}
              {/* <div className="flex flex-wrap gap-2 pt-6 border-t border-white/50">
                {service.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] uppercase tracking-tighter text-white/70 group-hover:text-white/60 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentService;
