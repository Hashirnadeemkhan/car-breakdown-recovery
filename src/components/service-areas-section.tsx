"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const areas = [
  "Leeds",
  "Bradford",
  "Huddersfield",
  "Wakefield",
  "Halifax",
  "Morley",
  "West Yorkshire",
  "Sheffield",
  "Manchester",
  "Doncaster",
];

export function ServiceAreasSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section
      id="coverage"
      className="py-20 md:py-32 bg-brand-paper relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="inline-flex items-center gap-2 text-brand-blue font-bold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <MapPin className="w-4 h-4" />
            SERVICE COVERAGE
          </motion.p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-ink mb-4">
            Available Across
            <br />
            <span className="bg-gradient-to-r from-brand-blue to-brand-gold bg-clip-text text-transparent">
              Leeds & Beyond
            </span>
          </h2>
          <p className="text-xl text-brand-steel max-w-2xl mx-auto">
            We cover all major areas across Leeds and surrounding regions. Wherever you are,
            we&apos;re ready to help.
          </p>
        </motion.div>

        {/* Areas Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {areas.map((area) => (
            <motion.div
              key={area}
              className="group relative"
              variants={itemVariants}
            >
              <motion.div
                className="relative p-6 bg-brand-ink rounded-xl border-2 border-brand-night hover:border-brand-blue transition-all duration-300 cursor-default"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(31, 122, 224, 0.15)",
                }}
              >
                {/* Checkmark */}
                <motion.div
                  className="absolute top-3 right-3 w-5 h-5 rounded-full bg-brand-gold/20 flex items-center justify-center"
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="w-2 h-2 bg-brand-gold rounded-full" />
                </motion.div>

                {/* Content */}
                <h3 className="font-bold text-brand-paper text-center">
                  {area}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Box */}
        <motion.div
          className="bg-gradient-to-r from-brand-blue/10 to-brand-gold/10 border-2 border-brand-blue/20 rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-ink mb-3">
            Don&apos;t See Your Area?
          </h3>
          <p className="text-brand-steel mb-6 max-w-2xl mx-auto">
            We occasionally cover areas beyond our usual service zone. Contact us directly to
            check if we can assist you.
          </p>
          <motion.a
            href="tel:+447886003475"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white px-8 py-3 rounded-lg font-bold transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
