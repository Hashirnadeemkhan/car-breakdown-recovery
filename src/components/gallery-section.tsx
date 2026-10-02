"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  {
    src: "/jump-start-cables.jpeg",
    alt: "Professional Jump Start Service",
    title: "Jump Start Service",
    category: "Services",
  },
  {
    src: "/breakdown-recovery-truck.jpeg",
    alt: "Professional Breakdown Recovery Truck",
    title: "Recovery Truck",
    category: "Equipment",
  },
  {
    src: "/breakdown-recovery-van.jpeg",
    alt: "Breakdown Recovery Vehicle",
    title: "Recovery Vehicle",
    category: "Equipment",
  },
  {
    src: "/tyre-replacement-service.jpeg",
    alt: "Professional Tyre Replacement",
    title: "Tyre Replacement",
    category: "Services",
  },
  {
    src: "/fuel-delivery-service.jpeg",
    alt: "Fuel Delivery Service",
    title: "Fuel Delivery",
    category: "Services",
  },
  {
    src: "/professional-team-1.jpeg",
    alt: "Professional Breakdown Team",
    title: "Expert Team",
    category: "Team",
  },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-20 md:py-32 bg-brand-ink relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
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
            className="inline-flex items-center gap-2 text-brand-gold font-bold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="w-2 h-2 bg-brand-gold rounded-full" />
            OUR WORK IN ACTION
          </motion.p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-paper mb-4">
            Professional Service
            <br />
            <span className="bg-gradient-to-r from-brand-blue-light to-brand-gold bg-clip-text text-transparent">
              In Every Frame
            </span>
          </h2>
          <p className="text-xl text-brand-steel max-w-2xl mx-auto">
            See our professional team in action providing expert breakdown recovery and roadside
            assistance services.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer relative rounded-2xl overflow-hidden bg-brand-night"
              variants={itemVariants}
              onClick={() => setSelectedImage(image.src)}
              whileHover={{ scale: 1.05 }}
            >
              {/* Image */}
              <div className="relative w-full h-80">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="font-display text-2xl font-bold text-brand-paper mb-2">
                  {image.title}
                </h3>
                <p className="text-brand-gold font-bold text-sm">{image.category}</p>
              </div>

              {/* Border */}
              <motion.div
                className="absolute inset-0 border-2 border-brand-blue rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ borderColor: "rgb(31, 122, 224)" }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl h-auto max-h-[80vh] rounded-2xl overflow-hidden"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Gallery"
                width={1200}
                height={800}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-12 h-12 bg-brand-gold hover:bg-brand-gold-light text-brand-ink rounded-full flex items-center justify-center font-bold text-2xl transition-all"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-brand-steel mb-6">
            Ready to experience professional breakdown recovery?
          </p>
          <motion.a
            href="tel:+447886003475"
            className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-brand-ink px-8 py-3 rounded-lg font-bold transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Call Us Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
