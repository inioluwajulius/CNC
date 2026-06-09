"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Heart, Award, ShieldCheck } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Sparkles className="text-accent-gold" size={24} />,
      title: "Intentional Curation",
      desc: "Every item inside our hampers is selected for a specific purpose. We do not use fillers; we source only meaningful premium products."
    },
    {
      icon: <Award className="text-accent-gold" size={24} />,
      title: "Artisanal Packaging",
      desc: "Our cedar crates, velvet boxes, and leather trunks are custom-made by master artisans. Packaging is never discarded; it is an heirloom."
    },
    {
      icon: <ShieldCheck className="text-accent-gold" size={24} />,
      title: "Concierge Quality",
      desc: "If an item does not exist in standard markets, our executive concierge desk secures it through global luxury partners."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-bg-luxury pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Title */}
        <div className="text-center mb-16 space-y-4">
          <span className="font-sans-alt text-[10px] tracking-[0.4em] uppercase text-accent-gold block">
            Our Heritage
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-primary-dark font-normal tracking-wide uppercase">
            The House of C&amp;C
          </h1>
          <div className="w-16 h-[1px] bg-accent-gold mx-auto mt-4" />
        </div>

        {/* Narrative Split Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="font-display text-2xl md:text-3xl text-primary-dark font-normal leading-snug">
              Redefining Gifting Since 2016
            </h2>
            <p className="font-serif-body text-[15px] text-muted-brown leading-relaxed">
              Founded in 2016 by Oyetola Okusanya, C&amp;C Luxury was born out of a desire to elevate the standard of gifting in Nigeria. What began as a premium local concierge operation in Ikoyi, Lagos has expanded into an internationally recognized purveyor of luxury gift experiences.
            </p>
            <p className="font-serif-body text-[15px] text-muted-brown leading-relaxed">
              We believe that a gift should not simply be a transactional object. Instead, it is a physical bridge between minds, a tactile container for gratitude, and a lasting memory. We partner with elite global brands and local master craftsmen to make each hamper unique.
            </p>
            <div className="pt-4">
              <Link
                href="/crate-builder"
                className="bg-primary-dark hover:bg-accent-gold text-white px-8 py-4 font-sans-alt text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors duration-500 rounded-none shadow"
              >
                Curate a Crate
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[480px] w-full"
          >
            <Image
              src="/luxury_hamper_hero.png"
              alt="C&C Story Curation"
              fill
              className="object-cover shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="bg-bg-sand/40 border border-bg-sand p-12 mb-24">
          <div className="text-center mb-12">
            <span className="font-sans-alt text-[9px] tracking-[0.3em] uppercase text-accent-gold block mb-2">
              Our Core Pillars
            </span>
            <h3 className="font-display text-2xl text-primary-dark font-normal">
              Standards of Excellence
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="space-y-4 text-center md:text-left bg-white p-8 shadow-sm">
                <div className="w-12 h-12 bg-bg-sand flex items-center justify-center mx-auto md:mx-0">
                  {val.icon}
                </div>
                <h4 className="font-display text-lg text-primary-dark font-normal">
                  {val.title}
                </h4>
                <p className="font-serif-body text-[13px] text-muted-brown leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Press Quotes */}
        <div className="text-center py-12 border-t border-bg-sand">
          <p className="font-sans-alt text-[10px] tracking-[0.3em] uppercase text-muted-brown mb-6">
            Press &amp; Recognitions
          </p>
          <div className="max-w-2xl mx-auto italic font-serif-body text-lg text-primary-dark leading-relaxed">
            "C&amp;C Luxury has established itself as the leading authority in bespoke gifting across West Africa, blending luxury European brands with handcrafted Nigerian craftsmanship."
          </div>
          <span className="block mt-4 font-sans-alt text-[9px] tracking-[0.2em] uppercase font-semibold text-accent-gold">
            The Luxury Network Magazine
          </span>
        </div>

      </div>
    </div>
  );
}
