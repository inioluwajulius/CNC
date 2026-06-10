"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowLeft,
  ShieldCheck,
  Truck,
  Check,
  CreditCard,
  Clock,
  Star,
} from "lucide-react";

export default function ProductPage({ params }) {
  const resolvedParams = React.use(params);
  const productId = parseInt(resolvedParams.id, 10);

  const [added, setAdded] = useState(false);

  const products = [
    {
      id: 1,
      name: "The Wedding Luxury Crate",
      price: "₦250,000",
      image: "/luxury_hamper_hero.png",
      tag: "Signature Crate",
      desc: "An opulent compilation designed to celebrate unions. Comprises custom champagne, monogrammed linens, high-end fragrances, and keepsake champagne flutes.",
      ingredients: [
        "Veuve Clicquot Yellow Label Champagne (750ml)",
        "Two Monogrammed Linen Hand Towels",
        "Two Hand-cut Lead Crystal Champagne Flutes",
        "Amber & Wood Hand-poured Soy Candle",
        "Gourmet Belgian Chocolate Box (16pc)",
        "Calligraphed Occasion Greeting Card",
        "Bespoke Handcrafted Cedar Wood Crate",
      ],
    },
    {
      id: 2,
      name: "The Self-Care Velvet Box",
      price: "₦145,000",
      image: "/velvet_box.png",
      tag: "Self-Care & Wellness",
      desc: "A soft, relaxing compilation curated for relaxation. Centered around calming natural oils, silk elements, and premium sleep-inducing teas.",
      ingredients: [
        "Organic Lavender Massage Oil (100ml)",
        "100% Mulberry Silk Sleeping Eye Mask",
        "Calming Camomile & Honey Infusion Tea Box",
        "French Rose Water Hydrating Facial Mist",
        "Aromatic Lavender Diffuser with reeds",
        "Exquisite Emerald Green Velvet Box",
      ],
    },
    {
      id: 3,
      name: "The Executive Sourcing Crate",
      price: "₦380,000",
      image: "/wood_crate.png",
      tag: "Corporate Sourced",
      desc: "Designed for leaders and corporate achievements. Features Single Malt Scotch Whiskey paired with executive leather journals and writing implements.",
      ingredients: [
        "Glenfiddich 18 Year Single Malt Scotch (700ml)",
        "Hand-stitched Full-Grain Leather Journal",
        "Gold-plated Executive Rollerball Pen",
        "Hand-poured Oud Scented Soy Candle",
        "Roasted Gourmet Coffee Beans (250g)",
        "Bespoke Handcrafted Cedar Wood Crate",
      ],
    },
    {
      id: 4,
      name: "The Anniversary Velvet Box",
      price: "₦210,000",
      image: "/velvet_box.png",
      tag: "Weddings & Celebrations",
      desc: "A rich selection designed to mark relationship milestones. Comprises fine red wines, chocolates, and preserved luxury roses.",
      ingredients: [
        "Bordeaux Gran Cru Red Wine (750ml)",
        "Preserved Eternity Red Roses (4pc)",
        "Gourmet Belgian Chocolate Box (16pc)",
        "Damask Linen Table Runner",
        "Calligraphed Greeting Inscription",
        "Exquisite Velvet Keepsake Box",
      ],
    },
    {
      id: 5,
      name: "The Birthday Celebration Crate",
      price: "₦165,000",
      image: "/wood_crate.png",
      tag: "Birthdays",
      desc: "Raise a glass in style. An artisanal gin kit complete with high-end botanical ingredients, glassware, and premium mixers.",
      ingredients: [
        "Hendrick's Artisanal Gin (700ml)",
        "Two Lead Crystal Highball Glasses",
        "Fever-Tree Tonic Mixer Bottles (4pc)",
        "Dehydrated Botanicals Garnish Pack",
        "Bespoke Handcrafted Cedar Wood Crate",
      ],
    },
    {
      id: 6,
      name: "The Corporate Welcome Box",
      price: "₦95,000",
      image: "/luxury_hamper_hero.png",
      tag: "Corporate Gifting",
      desc: "A professional compilation for welcome packages or speaker invitations. Includes functional tech, custom coffee, and stationery.",
      ingredients: [
        "Matte Black Branded Thermos (500ml)",
        "Wireless Wooden Fast Charging Pad",
        "Luxury Black Ballpoint Pen",
        "Gourmet Coffee Drip Bags Box",
        "Exquisite Custom Keepsake Box",
      ],
    },
  ];

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="w-full min-h-[60vh] flex flex-col justify-center items-center bg-bg-luxury text-center px-4 sm:px-6">
        <h2 className="font-display text-xl sm:text-2xl text-primary-dark font-normal mb-4">
          Product Not Found
        </h2>
        <p className="font-serif-body text-[13px] sm:text-[14px] text-muted-brown mb-6">
          This bespoke product configuration does not exist in our signature
          collections catalog.
        </p>
        <Link
          href="/collections"
          className="bg-primary-dark hover:bg-accent-gold text-white px-6 py-3 font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors"
        >
          Return to Collections
        </Link>
      </div>
    );
  }

  // Related products (exclude current)
  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <div className="w-full min-h-screen bg-bg-luxury pt-8 sm:pt-12 pb-20 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Back Link */}
        <Link
          href="/collections"
          className="inline-flex items-center space-x-2 text-primary-dark hover:text-accent-gold transition-colors font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase mb-8 sm:mb-12"
        >
          <ArrowLeft size={12} />
          <span>Back to Catalog</span>
        </Link>

        {/* Product Details Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 md:gap-16 items-start">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-6 relative h-[300px] sm:h-[400px] md:h-[500px] bg-bg-sand border border-bg-sand/30 shadow-md overflow-hidden"
          >
            <Image
              src={product.image}
              alt={`${product.name} — C&C Luxury bespoke gift hamper`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <span className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-primary-dark text-white font-sans-alt text-[8px] sm:text-[9px] tracking-[0.15em] uppercase px-2.5 sm:px-3 py-1 sm:py-1.5 shadow">
              {product.tag}
            </span>
          </motion.div>

          {/* Right Column: Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-6 space-y-6 sm:space-y-8"
          >
            <div className="space-y-3 sm:space-y-4">
              <span className="font-sans-alt text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-accent-gold block">
                Signature Hampers
              </span>
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl text-primary-dark font-normal leading-tight">
                {product.name}
              </h1>
              <span className="font-sans-ui text-lg sm:text-xl font-semibold tracking-wider text-primary-dark block">
                {product.price}
              </span>
            </div>

            <p className="font-serif-body text-[14px] sm:text-[15px] text-muted-brown leading-relaxed border-b border-bg-sand pb-5 sm:pb-6">
              {product.desc}
            </p>

            {/* Ingredients List */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="font-sans-alt text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-semibold text-primary-dark">
                Crate Inclusions &amp; Ingredients:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {product.ingredients.map((ing, idx) => (
                  <li
                    key={idx}
                    className="flex items-start space-x-2.5 text-[12px] sm:text-[13px] font-serif-body text-muted-brown"
                  >
                    <Check
                      size={14}
                      className="text-accent-gold shrink-0 mt-0.5"
                    />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 border-t border-bg-sand pt-5 sm:pt-6">
              <div className="trust-badge">
                <ShieldCheck size={16} className="text-accent-gold shrink-0" />
                <span>Bespoke Luxury Curation Guaranteed</span>
              </div>
              <div className="trust-badge">
                <Truck size={16} className="text-accent-gold shrink-0" />
                <span>Secure Ikoyi Showroom Dispatch</span>
              </div>
              <div className="trust-badge">
                <CreditCard size={16} className="text-accent-gold shrink-0" />
                <span>Visa, Mastercard & Bank Transfer</span>
              </div>
              <div className="trust-badge">
                <Clock size={16} className="text-accent-gold shrink-0" />
                <span>2–5 Day Lagos Delivery</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={handleAddToCart}
                disabled={added}
                className="flex-1 bg-primary-dark hover:bg-accent-gold text-white font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase py-3.5 sm:py-4 text-center transition-colors duration-500 rounded-none shadow"
              >
                {added ? "✓ Added to Cart" : "Add to Order"}
              </button>
              <Link
                href="/crate-builder"
                className="flex-1 border border-primary-dark hover:bg-primary-dark hover:text-white text-primary-dark font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase py-3.5 sm:py-4 text-center transition-colors duration-500 rounded-none flex items-center justify-center space-x-2"
              >
                <Sparkles size={12} className="text-accent-gold" />
                <span>Customize Crate</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* You May Also Like */}
        <div className="mt-16 sm:mt-24 pt-10 sm:pt-12 border-t border-bg-sand">
          <div className="text-center mb-8 sm:mb-12">
            <span className="font-sans-alt text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-accent-gold block mb-2">
              Curated For You
            </span>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-primary-dark font-normal">
              You May Also Like
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {relatedProducts.map((related, idx) => (
              <motion.div
                key={related.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white group overflow-hidden flex flex-col shadow-sm border border-bg-sand/30 hover:shadow-lg transition-shadow duration-500"
              >
                <div className="relative h-[200px] sm:h-[250px] w-full overflow-hidden">
                  <Image
                    src={related.image}
                    alt={`${related.name} — C&C Luxury`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex justify-between items-baseline gap-2 mb-2">
                    <h3 className="font-display text-sm sm:text-base text-primary-dark font-normal group-hover:text-accent-gold transition-colors">
                      {related.name}
                    </h3>
                    <span className="font-sans-ui text-xs font-semibold text-primary-dark shrink-0">
                      {related.price}
                    </span>
                  </div>
                  <Link
                    href={`/product/${related.id}`}
                    className="font-sans-alt text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase text-primary-dark hover:text-accent-gold transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
