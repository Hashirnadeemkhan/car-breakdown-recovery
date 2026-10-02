"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-brand-ink border-t border-brand-night">
      {/* Main Footer Content */}
      <div className="container mx-auto max-w-7xl px-4 py-16 md:py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Car Breakdown Recovery Leeds"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="font-display font-bold text-brand-paper text-sm">
                  Recovery Leeds
                </h4>
                <p className="text-xs text-brand-steel">24/7 Available</p>
              </div>
            </div>
            <p className="text-brand-steel text-sm leading-relaxed">
              Professional breakdown recovery and roadside assistance services available around
              the clock.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h5 className="font-display font-bold text-brand-paper">Contact</h5>
            <div className="space-y-3">
              <a
                href="tel:+447886003475"
                className="flex items-start gap-3 hover:text-brand-gold transition-colors group"
              >
                <Phone className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-brand-paper font-medium group-hover:text-brand-gold">
                    +44 7886 003475
                  </p>
                  <p className="text-brand-steel text-sm">Call anytime</p>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-brand-paper font-medium">18 Broom Walk</p>
                  <p className="text-brand-steel text-sm">Batley, WF17 6PL</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h5 className="font-display font-bold text-brand-paper">Hours</h5>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-gold" />
                <p className="text-brand-paper">24/7 Service</p>
              </div>
              <p className="text-brand-steel text-sm">
                Available every day of the year for emergencies. Response time typically under 45
                minutes.
              </p>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h5 className="font-display font-bold text-brand-paper">Services</h5>
            <div className="space-y-2">
              <p className="text-brand-steel text-sm hover:text-brand-gold transition-colors cursor-pointer">
                Breakdown Recovery
              </p>
              <p className="text-brand-steel text-sm hover:text-brand-gold transition-colors cursor-pointer">
                Jump Start
              </p>
              <p className="text-brand-steel text-sm hover:text-brand-gold transition-colors cursor-pointer">
                Fuel Delivery
              </p>
              <p className="text-brand-steel text-sm hover:text-brand-gold transition-colors cursor-pointer">
                Tyre Replacement
              </p>
              <p className="text-brand-steel text-sm hover:text-brand-gold transition-colors cursor-pointer">
                Transportation Service
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="my-12 h-px bg-gradient-to-r from-brand-night via-brand-blue/20 to-brand-night"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center md:text-left">
            <p className="text-brand-steel text-sm mb-2">
              © {currentYear} Car Breakdown Recovery Leeds. All rights reserved.
            </p>
            <p className="text-brand-steel text-xs">
              Designed by{" "}
              <a
                href="https://www.brightreachsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue hover:text-brand-blue-light transition-colors font-bold"
              >
                Bright Reach Solutions
              </a>
            </p>
          </div>

          {/* Bottom CTA */}
          <motion.a
            href="tel:+447886003475"
            className="px-6 py-2 bg-brand-gold hover:bg-brand-gold-light text-brand-ink rounded-lg font-bold text-sm transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Call Now
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
}
