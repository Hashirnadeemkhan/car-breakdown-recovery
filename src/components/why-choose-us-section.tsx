"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Star,
  Clock,
  Shield,
  Users,
  Phone,
} from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Fast Response Time",
    description:
      "We aim to reach you within 45 minutes, keeping you back on the road quickly.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Our technicians are highly trained and equipped to handle any breakdown scenario.",
  },
  {
    icon: Shield,
    title: "Professional Service",
    description:
      "Professional, courteous staff who treat your vehicle with care and respect.",
  },
  {
    icon: Star,
    title: "Highly Rated",
    description:
      "Trusted by hundreds of satisfied customers across Leeds and surrounding areas.",
  },
  {
    icon: Phone,
    title: "24/7 Availability",
    description:
      "Available around the clock, every single day of the year for your emergencies.",
  },
];

export function WhyChooseUsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="why-us"
      className="py-20 md:py-32 bg-brand-ink relative overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div
        className="absolute bottom-20 left-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="inline-flex items-center gap-2 text-brand-gold font-bold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-2 h-2 bg-brand-gold rounded-full" />
              WHY CHOOSE US
            </motion.p>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-paper mb-6">
              The Trusted Choice for
              <br />
              <span className="bg-gradient-to-r from-brand-blue-light to-brand-gold bg-clip-text text-transparent">
                Breakdown Recovery
              </span>
            </h2>

            <p className="text-xl text-brand-steel mb-10 leading-relaxed">
              When your vehicle breaks down, you need someone you can trust. With years of
              experience and a commitment to customer satisfaction, we're your reliable partner on
              the road.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <motion.div
                className="bg-brand-night rounded-xl p-6 border border-brand-blue/20"
                whileHover={{ scale: 1.05 }}
              >
                <p className="font-display text-3xl font-bold text-brand-gold mb-2">
                  500+
                </p>
                <p className="text-brand-steel text-sm">Happy Customers</p>
              </motion.div>
              <motion.div
                className="bg-brand-night rounded-xl p-6 border border-brand-gold/20"
                whileHover={{ scale: 1.05 }}
              >
                <p className="font-display text-3xl font-bold text-brand-blue mb-2">
                  45min
                </p>
                <p className="text-brand-steel text-sm">Avg Response Time</p>
              </motion.div>
            </div>

            <motion.a
              href="tel:+447886003475"
              className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-brand-ink px-8 py-3 rounded-lg font-bold transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Immediate Help
              <Phone className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Right Content - Features List */}
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  className="group flex gap-4 p-6 bg-brand-night rounded-xl border-2 border-transparent hover:border-brand-blue transition-all duration-300 hover:bg-brand-ink"
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                >
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-gold/10 flex items-center justify-center group-hover:from-brand-blue/30 group-hover:to-brand-gold/20 transition-all">
                      <Icon className="w-6 h-6 text-brand-gold" />
                    </div>
                  </motion.div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-brand-paper mb-1 text-lg">
                      {reason.title}
                    </h3>
                    <p className="text-brand-steel text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
