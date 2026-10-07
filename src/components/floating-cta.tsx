"use client";

import { motion } from "framer-motion";
import { Phone, AlertCircle } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { useState, useEffect } from "react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Emergency Banner at Top */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-40 bg-brand-gold/90 backdrop-blur-sm border-b-2 border-brand-gold-dark"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center justify-center gap-2 text-brand-ink font-bold text-sm md:text-base">
            <AlertCircle className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
            <span>Car broken down? Call us immediately!</span>
            <span className="hidden sm:inline">+44 7886 003475</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Action Buttons */}
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-40 flex flex-col gap-3"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/447886003475"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full shadow-lg transition-all"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            title="Message on WhatsApp"
          >
            <WhatsAppIcon className="w-7 h-7" />
          </motion.a>

          {/* Call Button */}
          <motion.a
            href="tel:+447886003475"
            className="flex items-center justify-center w-14 h-14 bg-brand-gold hover:bg-brand-gold-light text-brand-ink rounded-full shadow-lg transition-all font-bold"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            title="Call now"
          >
            <Phone className="w-6 h-6" />
          </motion.a>

          {/* Pulse Animation Indicator */}
          <motion.div
            className="absolute inset-0 w-14 h-14 bg-brand-gold rounded-full opacity-20 -z-10"
            animate={{
              scale: [1, 1.4],
              opacity: [0.4, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>
      )}
    </>
  );
}
