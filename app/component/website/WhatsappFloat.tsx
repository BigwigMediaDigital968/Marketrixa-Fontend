"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, CheckCheck } from "lucide-react";

const WhatsappFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneNumber = "917201907236";
  const message =
    "Hi! I'm interested in your services. Can we discuss further?";

  // Show a tooltip/message after 3 seconds to catch attention
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenChat = () => {
    setIsOpen(!isOpen);
    setShowMessage(false);
  };

  const handleSendMessage = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.95,
              transformOrigin: "bottom right",
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[320px] md:w-[360px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-[#075e54] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                    DS
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-[#075e54] rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">
                    Digital Solutions
                  </h4>
                  <p className="text-white/70 text-xs">
                    Typically replies in minutes
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/50 hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="h-[280px] bg-[#e5ddd5] relative p-4 overflow-y-auto pattern-wa">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] relative mb-4">
                <p className="text-sm text-gray-800">
                  Hello! 👋 <br />
                  How can we help you today?
                </p>
                <div className="flex justify-end items-center gap-1 mt-1">
                  <span className="text-[10px] text-gray-400">10:00 AM</span>
                  <CheckCheck size={14} className="text-blue-400" />
                </div>
              </div>
            </div>

            {/* Footer / CTA */}
            <div className="p-4 bg-white">
              <button
                onClick={handleSendMessage}
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                <Send size={18} />
                Start Chat
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <div className="relative group">
        <AnimatePresence>
          {showMessage && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute right-20 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-2xl shadow-xl border border-gray-100 whitespace-nowrap hidden md:block cursor-pointer"
            >
              <p className="text-sm font-medium">Chat with us! 👋</p>
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 border-r border-t border-gray-100"></div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleOpenChat}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl cursor-pointer transition-all duration-300 ${
            isOpen ? "bg-gray-800" : "bg-[#25D366]"
          }`}
        >
          {isOpen ? (
            <X size={28} className="text-white" />
          ) : (
            <>
              <MessageCircle size={28} className="text-white fill-current" />
              {/* Notification Badge */}
              <span className="absolute top-0 right-0 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
              </span>
            </>
          )}
        </motion.button>
      </div>

      <style jsx>{`
        .pattern-wa {
          background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
          background-size: 400px;
        }
      `}</style>
    </div>
  );
};

export default WhatsappFloat;
