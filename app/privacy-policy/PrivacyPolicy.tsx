"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Database,
  Eye,
  Lock,
  FileText,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6 },
  viewport: { once: true },
});

const PrivacyPolicy = () => {
  return (
    <div className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-4">
            Privacy <span className="text-[#F26522]">Policy</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your information.
          </p>
        </motion.div>

        {/* SECTION WRAPPER */}
        <div className="space-y-10">
          {/* INTRO */}
          <motion.div {...fadeUp(0.1)} className="premium-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-[#F26522]" />
              <h2 className="text-xl">Introduction</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              At <strong>Marketrixa</strong>, we are committed to protecting
              your personal data in accordance with applicable laws in India. By
              accessing our website, you agree to the practices described in
              this Privacy Policy.
            </p>
          </motion.div>

          {/* DATA COLLECTION */}
          <motion.div {...fadeUp(0.2)} className="premium-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Database className="text-[#F26522]" />
              <h2 className="text-xl">Information We Collect</h2>
            </div>
            <ul className="text-gray-400 space-y-2 list-disc pl-5">
              <li>Name, email address, and phone number</li>
              <li>Billing and shipping information</li>
              <li>Browser and device data</li>
              <li>Usage data for analytics and improvements</li>
            </ul>
          </motion.div>

          {/* USAGE */}
          <motion.div {...fadeUp(0.3)} className="premium-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-[#F26522]" />
              <h2 className="text-xl">How We Use Your Information</h2>
            </div>
            <ul className="text-gray-400 space-y-2 list-disc pl-5">
              <li>To provide and maintain our services</li>
              <li>To process transactions securely</li>
              <li>To improve user experience</li>
              <li>To communicate updates and offers</li>
            </ul>
          </motion.div>

          {/* DATA PROTECTION */}
          <motion.div {...fadeUp(0.4)} className="premium-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="text-[#F26522]" />
              <h2 className="text-xl">Data Protection</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We implement industry-standard security measures to protect your
              data. However, no method of transmission over the Internet is 100%
              secure.
            </p>
          </motion.div>

          {/* SHARING */}
          <motion.div {...fadeUp(0.5)} className="premium-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-[#F26522]" />
              <h2 className="text-xl">Sharing of Information</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We do not sell your personal information. We may share data with
              trusted partners for payment processing, logistics, or legal
              compliance.
            </p>
          </motion.div>

          {/* CONTACT */}
          <motion.div {...fadeUp(0.6)} className="premium-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="text-[#F26522]" />
              <h2 className="text-xl">Contact Us</h2>
            </div>

            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>
                  201, 202 & 203 Second Floor, Business World Complex, Deesa,
                  Gujarat, India - 385535
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>admin@marketrixa.com</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 9512400000</span>
              </div>
            </div>
          </motion.div>

          {/* UPDATE */}
          <motion.div
            {...fadeUp(0.7)}
            className="text-center text-gray-500 text-sm"
          >
            Last updated: {new Date().toLocaleDateString("en-IN")}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
