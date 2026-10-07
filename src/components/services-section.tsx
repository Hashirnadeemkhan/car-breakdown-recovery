"use client";

import { motion } from "framer-motion";
import { Zap, Fuel, Wrench, Truck, MapPin, type LucideIcon } from "lucide-react";
import Image from "next/image";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  /** Tailwind object-fit class; defaults to object-contain for portrait photos. */
  fit?: string;
};

const services: Service[] = [
  {
    icon: Zap,
    title: "Jump Start",
    description:
      "Dead battery? We'll get you started again with our professional jump start service.",
    image: "/jump-start-cables.jpeg",
  },
  {
    icon: Fuel,
    title: "Fuel Delivery",
    description:
      "Run out of fuel? We deliver fresh fuel directly to your vehicle location.",
    image: "/hero-fuel-delivery.jpeg",
    // Landscape shot - fills the card edge to edge instead of letterboxing.
    fit: "object-cover",
  },
  {
    icon: Wrench,
    title: "Tyre Replacement",
    description:
      "Puncture or damaged tyre? We replace it on the spot to get you moving.",
    image: "/tyre-replacement-service.jpeg",
  },
  {
    icon: Truck,
    title: "Breakdown Recovery",
    description:
      "Vehicle won't start? We safely transport your car to your chosen garage.",
    image: "/breakdown-recovery-van.jpeg",
  },
  {
    icon: Truck,
    title: "Transportation Service",
    description:
      "Safe and reliable vehicle transportation to your destination or chosen repair facility.",
    image: "/breakdown-recovery-truck.jpeg",
  },
  {
    icon: MapPin,
    title: "Roadside Assistance",
    description:
      "General roadside help including lockout assistance and other emergencies.",
    image: "/roadside-assistance-1.jpeg",
  },
];

export function ServicesSection() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="services"
      className="py-20 md:py-32 bg-brand-paper relative overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 right-0 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
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
            <span className="w-2 h-2 bg-brand-blue rounded-full" />
            OUR SERVICES
          </motion.p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-ink mb-4">
            Emergency Assistance
            <br />
            <span className="bg-gradient-to-r from-brand-blue to-brand-gold bg-clip-text text-transparent">
              When You Need It Most
            </span>
          </h2>
          <p className="text-xl text-brand-steel max-w-2xl mx-auto">
            Comprehensive breakdown recovery and roadside assistance services available 24/7 across Leeds and surrounding areas.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                variants={cardVariants}
              >
                {/* Card */}
                <motion.div
                  className="h-full bg-brand-ink border-2 border-brand-night rounded-2xl overflow-hidden hover:border-brand-blue transition-all duration-300 flex flex-col"
                  whileHover={{
                    y: -8,
                    boxShadow:
                      "0 20px 40px rgba(31, 122, 224, 0.1)",
                  }}
                >
                  {/* Image */}
                  <div className="relative w-full h-64 overflow-hidden bg-brand-night flex items-center justify-center">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className={`${service.fit ?? "object-contain"} group-hover:scale-105 transition-transform duration-500`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    {/* Icon Container */}
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-brand-blue/20 to-brand-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:from-brand-blue/30 group-hover:to-brand-gold/20 transition-all"
                      whileHover={{ rotate: 5, scale: 1.05 }}
                    >
                      <Icon className="w-6 h-6 text-brand-gold" />
                    </motion.div>

                    <h3 className="font-display text-2xl font-bold text-brand-paper mb-3">
                      {service.title}
                    </h3>
                    <p className="text-brand-steel leading-relaxed flex-grow">
                      {service.description}
                    </p>

                    {/* Animated Line */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-blue to-brand-gold rounded-full"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-brand-steel mb-6">
            Need assistance? Call us anytime at{" "}
            <span className="font-bold text-brand-blue">+44 7886 003475</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
