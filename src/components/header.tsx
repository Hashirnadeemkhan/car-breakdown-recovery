"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Coverage", href: "#coverage" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-ink/95 backdrop-blur-sm border-b border-brand-night">
      <div className="container mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 relative flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Car Breakdown Recovery Leeds"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-brand-paper hover:text-brand-gold transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <motion.a
              href="tel:+447886003475"
              className="hidden sm:flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-brand-ink px-6 py-2.5 rounded-lg font-bold transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-brand-paper hover:text-brand-gold transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pt-4 border-t border-brand-night space-y-4 md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-brand-paper hover:text-brand-gold transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+447886003475"
              className="block bg-brand-gold hover:bg-brand-gold-light text-brand-ink px-6 py-3 rounded-lg font-bold text-center transition-all"
            >
              <Phone className="w-4 h-4 inline mr-2" />
              Call Now
            </a>
          </motion.div>
        )}
      </div>
    </header>
  );
}
