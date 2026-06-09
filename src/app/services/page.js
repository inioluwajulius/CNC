"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Briefcase, Compass, ChevronRight } from "lucide-react";

export default function Services() {
  const serviceCards = [
    {
      icon: <Briefcase className="text-accent-gold" size={24} />,
      title: "Corporate & Executive Curation",
      desc: "Tailored brand statements for boards of directors, client accounts, and seasonal incentives. We design hampers that match your corporate brand palette, with engraved monograms and premium corporate journals.",
      image: "/luxury_hamper_hero.png"
    },
    {
      icon: <Compass className="text-accent-gold" size={24} />,
      title: "Niche Sourcing & Concierge",
      desc: "Procuring limited-edition collectibles, fine vintage spirits, haute couture masterpieces, and hard-to-find luxury goods. Submit your wishlist, and our concierge coordinators secure them through international channels.",
      image: "/wood_crate.png"
    },
    {
      icon: <Sparkles className="text-accent-gold" size={24} />,
      title: "Private Bespoke Gifting",
      desc: "Customized tokens of affection for weddings, anniversaries, and personal achievements. We consult with you to select matching fragrances, gourmet delicacies, and customized card notes for the recipient.",
      image: "/velvet_box.png"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-bg-luxury pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Title */}
        <div className="text-center mb-16 space-y-4">
          <span className="font-sans-alt text-[10px] tracking-[0.4em] uppercase text-accent-gold block">
            Our Offerings
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-primary-dark font-normal tracking-wide uppercase">
            Bespoke Services
          </h1>
          <div className="w-16 h-[1px] bg-accent-gold mx-auto mt-4" />
        </div>

        {/* Services Showcase */}
        <div className="space-y-24">
          {serviceCards.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Side */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-bg-sand flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="font-display text-2xl text-primary-dark font-normal">
                    {service.title}
                  </h3>
                </div>
                
                <p className="font-serif-body text-[15px] text-muted-brown leading-relaxed">
                  {service.desc}
                </p>

                <div className="pt-2 flex space-x-4">
                  <Link
                    href="/contact"
                    className="flex items-center space-x-2 text-primary-dark hover:text-accent-gold font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors"
                  >
                    <span>Inquire Now</span>
                    <ChevronRight size={12} />
                  </Link>
                  {idx !== 1 && (
                    <Link
                      href="/crate-builder"
                      className="flex items-center space-x-2 text-primary-dark hover:text-accent-gold font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors"
                    >
                      <span>Build Crate</span>
                      <ChevronRight size={12} />
                    </Link>
                  )}
                </div>
              </div>

              {/* Image Side */}
              <div className="flex-1 w-full relative h-[350px] overflow-hidden bg-bg-sand shadow-lg border border-bg-sand/30">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sourcing Callout Section */}
        <div className="mt-24 bg-primary-dark text-white p-12 text-center space-y-6 max-w-4xl mx-auto shadow-xl">
          <span className="font-sans-alt text-[10px] tracking-[0.3em] uppercase text-accent-gold block">
            Executive Sourcing Channel
          </span>
          <h3 className="font-display text-3xl font-normal tracking-wide">
            Need an exclusive item procured?
          </h3>
          <p className="font-serif-body text-[14px] text-bg-sand/80 max-w-2xl mx-auto leading-relaxed">
            Our luxury network coordinators have relationships with master craftsmen, boutique distilleries, and designers in Europe, Asia, and North America. Let us manage the customs, transport, and elegant packing.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-block bg-accent-gold hover:bg-white hover:text-primary-dark text-white px-8 py-4 font-sans-alt text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors duration-500 rounded-none"
            >
              Connect with Sourcing Agent
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
