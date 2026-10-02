"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, AlertCircle } from "lucide-react";

export function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section
      id="contact"
      className="py-20 md:py-32 bg-brand-ink relative overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Alert Banner */}
        <motion.div
          className="flex items-center gap-3 bg-brand-gold/10 border-2 border-brand-gold/20 rounded-xl p-4 md:p-6 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <AlertCircle className="w-6 h-6 text-brand-gold flex-shrink-0" />
          <div>
            <p className="font-bold text-brand-paper">Emergency? Call Immediately</p>
            <p className="text-brand-steel text-sm">
              Available 24/7/365. Don't delay – we're here to help!
            </p>
          </div>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-brand-paper mb-6">
            Need Help Right Now?
          </h2>
          <p className="text-xl text-brand-steel mb-10 max-w-2xl mx-auto">
            Don't wait. Reach out to our team immediately and we'll get you back on the road as
            quickly as possible.
          </p>

          <motion.a
            href="tel:+447886003475"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-gold to-brand-gold-light hover:from-brand-gold-light hover:to-brand-gold text-brand-ink px-12 py-5 rounded-xl font-display text-2xl font-bold transition-all shadow-gold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-7 h-7" />
            <span>+44 7886 003475</span>
          </motion.a>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Phone Card */}
          <motion.div
            className="bg-brand-night rounded-2xl p-8 border-2 border-brand-night hover:border-brand-blue transition-all"
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-brand-blue/20 to-brand-blue/5 rounded-xl flex items-center justify-center mb-4"
              whileHover={{ rotate: 10 }}
            >
              <Phone className="w-8 h-8 text-brand-blue" />
            </motion.div>
            <h3 className="font-display text-2xl font-bold text-brand-paper mb-2">
              Call Now
            </h3>
            <p className="text-brand-steel mb-4">
              Speak to our team immediately for emergency assistance.
            </p>
            <motion.a
              href="tel:+447886003475"
              className="text-brand-blue font-bold hover:text-brand-blue-light transition-colors"
              whileHover={{ x: 4 }}
            >
              +44 7886 003475 →
            </motion.a>
          </motion.div>

          {/* Location Card */}
          <motion.div
            className="bg-brand-night rounded-2xl p-8 border-2 border-brand-night hover:border-brand-gold transition-all"
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 rounded-xl flex items-center justify-center mb-4"
              whileHover={{ rotate: 10 }}
            >
              <MapPin className="w-8 h-8 text-brand-gold" />
            </motion.div>
            <h3 className="font-display text-2xl font-bold text-brand-paper mb-2">
              Location
            </h3>
            <p className="text-brand-steel">
              18 Broom Walk, Soothill
              <br />
              Batley, WF17 6PL
              <br />
              United Kingdom
            </p>
          </motion.div>

          {/* Hours Card */}
          <motion.div
            className="bg-brand-night rounded-2xl p-8 border-2 border-brand-night hover:border-brand-blue transition-all"
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-brand-blue/20 to-brand-blue/5 rounded-xl flex items-center justify-center mb-4"
              whileHover={{ rotate: 10 }}
            >
              <Clock className="w-8 h-8 text-brand-blue" />
            </motion.div>
            <h3 className="font-display text-2xl font-bold text-brand-paper mb-2">
              Available
            </h3>
            <p className="text-brand-steel">
              24 Hours a Day
              <br />
              7 Days a Week
              <br />
              365 Days a Year
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
