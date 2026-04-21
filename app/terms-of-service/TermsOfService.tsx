"use client";

import { motion } from "framer-motion";
import {
  FileText,
  ShieldCheck,
  AlertTriangle,
  Scale,
  Lock,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6 },
  viewport: { once: true },
});

const TermsOfUse = () => {
  return (
    <div className="relative py-20">
      <div className="max-w-7xl px-6 mx-auto">
        {/* HEADER */}
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-4">
            Terms <span className="text-[#F26522]">of Use</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Please read these terms carefully before using our services. By
            accessing our platform, you agree to be bound by these terms.
          </p>
        </motion.div>

        <div className="space-y-10">
          {/* INTRODUCTION */}
          <motion.div {...fadeUp(0.1)} className="premium-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-[#F26522]" />
              <h2 className="text-xl">Introduction</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Welcome to <strong>Marketrixa</strong>. These Terms of Use govern
              your access to and use of our website, services, and products. By
              using our platform, you agree to comply with these terms and all
              applicable laws in India.
            </p>
          </motion.div>

          {/* ELIGIBILITY */}
          <motion.div {...fadeUp(0.2)} className="premium-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-[#F26522]" />
              <h2 className="text-xl">Eligibility</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              You must be at least 18 years old or accessing the platform under
              the supervision of a legal guardian. By using our services, you
              confirm that you have the legal capacity to enter into a binding
              agreement.
            </p>
          </motion.div>

          {/* USER RESPONSIBILITIES */}
          <motion.div {...fadeUp(0.3)} className="premium-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="text-[#F26522]" />
              <h2 className="text-xl">User Responsibilities</h2>
            </div>
            <ul className="text-gray-400 space-y-2 list-disc pl-5">
              <li>Provide accurate and complete information</li>
              <li>Maintain confidentiality of your account</li>
              <li>Not misuse the platform for illegal activities</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </motion.div>

          {/* INTELLECTUAL PROPERTY */}
          <motion.div {...fadeUp(0.4)} className="premium-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="text-[#F26522]" />
              <h2 className="text-xl">Intellectual Property</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              All content, including text, graphics, logos, and software, is the
              property of Marketrixa and is protected under applicable copyright
              and trademark laws. Unauthorized use is strictly prohibited.
            </p>
          </motion.div>

          {/* LIMITATION OF LIABILITY */}
          <motion.div {...fadeUp(0.5)} className="premium-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="text-[#F26522]" />
              <h2 className="text-xl">Limitation of Liability</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Marketrixa shall not be liable for any indirect, incidental, or
              consequential damages arising from the use of our services. Use of
              the platform is at your own risk.
            </p>
          </motion.div>

          {/* TERMINATION */}
          <motion.div {...fadeUp(0.6)} className="premium-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="text-[#F26522]" />
              <h2 className="text-xl">Termination</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We reserve the right to suspend or terminate your access at any
              time without prior notice if you violate these terms.
            </p>
          </motion.div>

          {/* GOVERNING LAW */}
          <motion.div {...fadeUp(0.7)} className="premium-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="text-[#F26522]" />
              <h2 className="text-xl">Governing Law</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              These Terms shall be governed by and interpreted in accordance
              with the laws of India. Any disputes shall be subject to the
              jurisdiction of Gujarat courts.
            </p>
          </motion.div>

          {/* CONTACT */}
          <motion.div {...fadeUp(0.8)} className="premium-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="text-[#F26522]" />
              <h2 className="text-xl">Contact Information</h2>
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
                <span>+91 7201907236</span>
              </div>
            </div>
          </motion.div>

          {/* LAST UPDATED */}
          <motion.div
            {...fadeUp(0.9)}
            className="text-center text-gray-500 text-sm"
          >
            Last updated: {new Date().toLocaleDateString("en-IN")}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
