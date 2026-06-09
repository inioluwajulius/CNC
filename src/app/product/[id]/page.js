"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowLeft, ShieldCheck, Truck, Check } from "lucide-react";

export default function ProductPage({ params }) {
  // Next.js 15 params is a promise. Use React.use() to resolve it.
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
        "Bespoke Handcrafted Cedar Wood Crate"
      ]
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
        "Exquisite Emerald Green Velvet Box"
      ]
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
        "Bespoke Handcrafted Cedar Wood Crate"
      ]
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
        "Exquisite Velvet Keepsake Box"
      ]
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
        "Bespoke Handcrafted Cedar Wood Crate"
      ]
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
        "Exquisite Custom Keepsake Box"
      ]
    }
  ];

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="w-full min-h-[60vh] flex flex-col justify-center items-center bg-bg-luxury text-center px-6">
        <h2 className="font-display text-2xl text-primary-dark font-normal mb-4">Product Not Found</h2>
        <p className="font-serif-body text-[14px] text-muted-brown mb-6">
          This bespoke product configuration does not exist in our signature collections catalog.
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

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      alert("Product added to cart successfully. Visit the cart page to complete checkout.");
    }, 1000);
  };

  return (
    <div className="w-full min-h-screen bg-bg-luxury pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Back Link */}
        <Link
          href="/collections"
          className="inline-flex items-center space-x-2 text-primary-dark hover:text-accent-gold transition-colors font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase mb-12"
        >
          <ArrowLeft size={12} />
          <span>Back to Catalog</span>
        </Link>

        {/* Product Details Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Image Canvas */}
          <div className="md:col-span-6 relative h-[500px] bg-bg-sand border border-bg-sand/30 shadow-md">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
            <span className="absolute top-4 left-4 bg-primary-dark text-white font-sans-alt text-[9px] tracking-[0.15em] uppercase px-3 py-1.5 shadow">
              {product.tag}
            </span>
          </div>

          {/* Right Column: Descriptions & Details */}
          <div className="md:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="font-sans-alt text-[10px] tracking-[0.3em] uppercase text-accent-gold block">
                Signature Hampers
              </span>
              <h1 className="font-display text-3xl md:text-4xl text-primary-dark font-normal leading-tight">
                {product.name}
              </h1>
              <span className="font-sans-ui text-xl font-semibold tracking-wider text-primary-dark block">
                {product.price}
              </span>
            </div>

            <p className="font-serif-body text-[15px] text-muted-brown leading-relaxed border-b border-bg-sand pb-6">
              {product.desc}
            </p>

            {/* Sourced Ingredients List */}
            <div className="space-y-4">
              <h4 className="font-sans-alt text-[10px] tracking-[0.2em] uppercase font-semibold text-primary-dark">
                Crate Inclusions &amp; Ingredients:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.ingredients.map((ing, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-[13px] font-serif-body text-muted-brown">
                    <Check size={14} className="text-accent-gold shrink-0 mt-0.5" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Badges / Logistics Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-bg-sand pt-6 text-[12px] font-sans-ui text-muted-brown">
              <div className="flex items-center space-x-2.5">
                <ShieldCheck size={18} className="text-accent-gold shrink-0" />
                <span>Bespoke Luxury Curation Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Truck size={18} className="text-accent-gold shrink-0" />
                <span>Secure Ikoyi Showroom Dispatch</span>
              </div>
            </div>

            {/* Actions Buttons */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                disabled={added}
                className="flex-1 bg-primary-dark hover:bg-accent-gold text-white font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase py-4 text-center transition-colors duration-500 rounded-none shadow"
              >
                {added ? "Adding to Cart..." : "Add to Order"}
              </button>
              <Link
                href="/crate-builder"
                className="flex-1 border border-primary-dark hover:bg-primary-dark hover:text-white text-primary-dark font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase py-4 text-center transition-colors duration-500 rounded-none flex items-center justify-center space-x-2"
              >
                <Sparkles size={12} className="text-accent-gold" />
                <span>Customize Crate</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
