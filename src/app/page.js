"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star, Heart, Sparkles } from "lucide-react";

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "The Wedding Luxury Crate",
      price: "₦250,000",
      image: "/luxury_hamper_hero.png",
      tag: "Best Seller",
      desc: "Champagne, custom crystal flutes, artisan candle, and monogrammed linens."
    },
    {
      id: 2,
      name: "The Self-Care Velvet Box",
      price: "₦145,000",
      image: "/velvet_box.png",
      tag: "Limited Edition",
      desc: "Organic skin elixirs, silk sleeping mask, lavender mist, and calming teas."
    },
    {
      id: 3,
      name: "The Executive Sourcing Crate",
      price: "₦380,000",
      image: "/wood_crate.png",
      tag: "Bespoke Sourced",
      desc: "Single malt Scotch whiskey, leather-bound notebook, and premium fountain pen."
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-bg-luxury">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/luxury_hamper_hero.png"
            alt="C&C Luxury Hamper Hero"
            fill
            priority
            className="object-cover object-center scale-105 filter brightness-[0.7] contrast-[1.05]"
          />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-sans-alt text-[10px] md:text-xs font-semibold tracking-[0.4em] uppercase text-accent-gold mb-4"
          >
            The House of Gifting &amp; Concierge
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-normal tracking-[0.1em] uppercase leading-tight mb-8"
          >
            Crafting Opulent <br/>Memories
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-16 h-[1px] bg-accent-gold mb-8"
          />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/crate-builder"
              className="bg-accent-gold hover:bg-white hover:text-primary-dark text-white px-8 py-4 font-sans-alt text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors duration-500 rounded-none shadow-lg"
            >
              Curate a Crate
            </Link>
            <Link
              href="/collections"
              className="bg-transparent border border-white hover:bg-white hover:text-primary-dark text-white px-8 py-4 font-sans-alt text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors duration-500 rounded-none"
            >
              View Catalog
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. THE BRAND INTRO */}
      <section className="py-24 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="font-sans-alt text-[10px] tracking-[0.3em] uppercase text-accent-gold block">
            Our Philosophy
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-primary-dark font-normal tracking-wide">
            "Luxury is defined not by excess, but by excellence, intention, and meaning."
          </h2>
          <div className="w-12 h-[1px] bg-accent-gold mx-auto my-6" />
          <p className="font-serif-body text-[16px] text-muted-brown leading-relaxed max-w-2xl mx-auto">
            C&amp;C Luxury epitomizes the art of bespoke gifting and unparalleled concierge services, meticulously crafting opulent experiences and lavish tokens of affection that transcend time and create indelible memories.
          </p>
        </motion.div>
      </section>

      {/* 3. FEATURED HAMPERS SECTION */}
      <section className="py-16 bg-bg-sand">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 border-b border-muted-brown/10 pb-4">
            <div>
              <span className="font-sans-alt text-[10px] tracking-[0.3em] uppercase text-accent-gold block mb-2">
                Curated Experiences
              </span>
              <h2 className="font-display text-2xl md:text-4xl text-primary-dark font-normal">
                Signature Collections
              </h2>
            </div>
            <Link
              href="/collections"
              className="group flex items-center space-x-2 font-sans-alt text-[11px] font-semibold tracking-[0.2em] uppercase text-primary-dark hover:text-accent-gold transition-colors mt-4 md:mt-0"
            >
              <span>Explore All</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-white group overflow-hidden flex flex-col shadow-sm border border-bg-sand/30"
              >
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary-dark text-white font-sans-alt text-[9px] tracking-[0.15em] uppercase px-3 py-1.5">
                    {product.tag}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-display text-xl text-primary-dark font-normal group-hover:text-accent-gold transition-colors duration-300">
                        {product.name}
                      </h3>
                      <span className="font-sans-ui text-sm font-semibold tracking-wider text-primary-dark">
                        {product.price}
                      </span>
                    </div>
                    <p className="font-serif-body text-[13px] text-muted-brown leading-relaxed mb-6">
                      {product.desc}
                    </p>
                  </div>
                  
                  <Link
                    href={`/product/${product.id}`}
                    className="border-b border-primary-dark/20 hover:border-accent-gold text-primary-dark hover:text-accent-gold font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase pb-1 self-start transition-colors duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE KILLER FEATURE TEASER */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] w-full"
        >
          <Image
            src="/wood_crate.png"
            alt="The Bespoke Crate Builder"
            fill
            className="object-cover shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <span className="font-sans-alt text-[10px] tracking-[0.3em] uppercase text-accent-gold block">
            Bespoke Gifting Studio
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-primary-dark font-normal leading-tight">
            The C&amp;C Curate Experience
          </h2>
          <p className="font-serif-body text-base text-muted-brown leading-relaxed">
            Recreate the tailored client process of our Ikoyi showroom online. Our interactive gift builder allows you to select a bespoke container base, hot-stamp it with custom monograms, fill it with hand-selected gourmet delicacies and fragrance masterpieces, and add a personalized handwritten greeting.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-primary-dark">
              <span className="w-5 h-5 rounded-full border border-accent-gold flex items-center justify-center text-[10px] font-bold text-accent-gold">1</span>
              <span className="font-sans-alt text-xs font-semibold tracking-[0.1em] uppercase">Select Premium Container Base</span>
            </div>
            <div className="flex items-center space-x-3 text-primary-dark">
              <span className="w-5 h-5 rounded-full border border-accent-gold flex items-center justify-center text-[10px] font-bold text-accent-gold">2</span>
              <span className="font-sans-alt text-xs font-semibold tracking-[0.1em] uppercase">Simulate Custom Hot-Stamping</span>
            </div>
            <div className="flex items-center space-x-3 text-primary-dark">
              <span className="w-5 h-5 rounded-full border border-accent-gold flex items-center justify-center text-[10px] font-bold text-accent-gold">3</span>
              <span className="font-sans-alt text-xs font-semibold tracking-[0.1em] uppercase">Drag &amp; Drop Gourmet &amp; Lifestyle Goods</span>
            </div>
          </div>
          <Link
            href="/crate-builder"
            className="inline-flex items-center space-x-2 bg-primary-dark hover:bg-accent-gold text-white px-8 py-4 font-sans-alt text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors duration-500 rounded-none shadow-md"
          >
            <span>Start Building</span>
            <Sparkles size={14} />
          </Link>
        </motion.div>
      </section>

      {/* 5. MEET THE FOUNDER SECTION */}
      <section className="py-24 bg-bg-sand/40 border-t border-bg-sand">
        <div className="max-w-5xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1 text-center md:text-left space-y-4">
            <span className="font-sans-alt text-[10px] tracking-[0.3em] uppercase text-accent-gold block">
              The Founder
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-primary-dark font-normal">
              Oyetola Okusanya
            </h2>
            <div className="w-8 h-[1px] bg-accent-gold mx-auto md:mx-0 my-4" />
          </div>
          <div className="md:col-span-2">
            <p className="font-serif-body text-base text-muted-brown leading-relaxed mb-6">
              "We established C&amp;C Luxury to restore the soul of gifting. To give an offering should be an event in itself. Each piece we source and hamper we wrap is a story of connection—designed carefully to create a memory that will linger long after the box is opened."
            </p>
            <p className="font-sans-alt text-[10px] tracking-[0.2em] uppercase font-semibold text-primary-dark">
              CEO &amp; FOUNDER, C&amp;C AND CO.
            </p>
          </div>
        </div>
      </section>

      {/* 6. TRUST & FEATURE LOGOS */}
      <section className="py-16 bg-white border-t border-bg-sand">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="font-sans-alt text-[9px] tracking-[0.35em] uppercase text-muted-brown block mb-8">
            As Featured In
          </span>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale">
            <span className="font-display text-lg tracking-[0.2em] text-primary-dark">BRITISH VOGUE</span>
            <span className="font-display text-lg tracking-[0.2em] text-primary-dark">VANITY FAIR</span>
            <span className="font-sans-alt text-xs tracking-[0.3em] font-semibold text-primary-dark">THE LUXURY NETWORK NIGERIA</span>
          </div>
        </div>
      </section>

    </div>
  );
}
