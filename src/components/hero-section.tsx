"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Phone, AlertCircle } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-ink pt-32 pb-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-10 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-brand-night px-4 py-2 rounded-full border border-brand-blue/30"
              whileHover={{ scale: 1.05 }}
            >
              <AlertCircle className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-steel text-sm font-medium">
                24/7 Breakdown Recovery
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-brand-paper leading-tight"
                variants={itemVariants}
              >
                Stranded?
                <br />
                <span className="bg-gradient-to-r from-brand-blue-light to-brand-gold bg-clip-text text-transparent">
                  We're Here for You
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-brand-steel leading-relaxed"
                variants={itemVariants}
              >
                Professional car breakdown recovery and roadside assistance across Leeds and surrounding areas. Available 24/7 for your peace of mind.
              </motion.p>
            </div>

            {/* Key Features */}
            <motion.div className="space-y-3" variants={itemVariants}>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <span className="text-brand-paper">Response times under 45 minutes</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <span className="text-brand-paper">Direct line: +44 7886 003475</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-6"
              variants={itemVariants}
            >
              <motion.a
                href="tel:+447886003475"
                className="flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-brand-ink px-8 py-4 rounded-lg font-bold text-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>
              <motion.button
                className="flex items-center justify-center gap-2 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue/10 px-8 py-4 rounded-lg font-bold text-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Services
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Professional Image */}
          <motion.div
            className="relative h-96 lg:h-full min-h-96 flex items-center justify-center"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Glow effect behind image */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-brand-blue/30 to-brand-gold/20 rounded-3xl blur-3xl -z-10"
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <Image
                  src="/hero-fuel-delivery.jpeg"
                  alt="Professional Breakdown Recovery Service"
                  fill
                  className="object-contain rounded-3xl"
                  priority
                />
              </div>
            </motion.div>

            {/* Floating Stats Cards */}
            <motion.div
              className="absolute bottom-10 left-5 bg-brand-night border border-brand-blue/30 rounded-xl p-4 backdrop-blur-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-brand-gold font-bold text-2xl">500+</p>
              <p className="text-brand-steel text-sm">Happy Customers</p>
            </motion.div>

            <motion.div
              className="absolute top-20 right-5 bg-brand-night border border-brand-gold/30 rounded-xl p-4 backdrop-blur-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-brand-gold font-bold text-2xl">24/7</p>
              <p className="text-brand-steel text-sm">Always Available</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-brand-gold rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-brand-gold rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
