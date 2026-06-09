"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, Heart, Sparkles, Eye, X, Check } from "lucide-react";

function CollectionsContent() {
  const searchParams = useSearchParams();
  
  // State variables
  const [activeFilter, setActiveFilter] = useState("All");
  const [wishlist, setWishlist] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "All", tag: "All" },
    { name: "Luxury Hampers", tag: "Hampers", image: "/luxury_hamper_hero.png", desc: "Signature baskets curated with global champagne & delicacies." },
    { name: "Shop By Occasion", tag: "Occasion", image: "/velvet_box.png", desc: "Velvet gift boxes tailored for weddings & birthdays." },
    { name: "Jewelry & Accessories", tag: "Accessories", image: "/luxury_hamper_hero.png", desc: "Fine sourced keepsakes, pens, diffusers, and luxury items." },
    { name: "Corporate Gifting", tag: "Corporate", image: "/wood_crate.png", desc: "Artisan wood crates designed for executives & events." }
  ];

  const products = [
    {
      id: 1,
      name: "The Wedding Luxury Crate",
      category: "Hampers",
      price: "₦250,000",
      rawPrice: 250000,
      image: "/luxury_hamper_hero.png",
      tag: "Signature",
      desc: "Champagne, custom crystal flutes, artisan candle, and monogrammed linens.",
      ingredients: ["Veuve Clicquot Champagne (750ml)", "Two Crystal Champagne Flutes", "Two Monogrammed Linen Towels", "Scented Soy Candle", "Artisan Chocolate Box (16pc)"]
    },
    {
      id: 2,
      name: "The Self-Care Velvet Box",
      category: "Occasion",
      price: "₦145,000",
      rawPrice: 145000,
      image: "/velvet_box.png",
      tag: "Best Seller",
      desc: "Organic skin elixirs, silk sleeping mask, lavender mist, and calming teas.",
      ingredients: ["Lavender Massage Oil (100ml)", "Mulberry Silk Sleep Mask", "Organic Camomile Tea Box", "Rose Water Facial Mist", "Scented Diffuser"]
    },
    {
      id: 3,
      name: "The Executive Sourcing Crate",
      category: "Corporate",
      price: "₦380,000",
      rawPrice: 380000,
      image: "/wood_crate.png",
      tag: "Bespoke Sourced",
      desc: "Single malt Scotch whiskey, leather-bound notebook, and premium fountain pen.",
      ingredients: ["Glenfiddich 18 Year Scotch (700ml)", "Leather-bound Journal", "Gold-plated Luxury Pen", "Oud Scented Soy Candle", "Gourmet Coffee Blend"]
    },
    {
      id: 4,
      name: "The Anniversary Velvet Box",
      category: "Occasion",
      price: "₦210,000",
      rawPrice: 210000,
      image: "/velvet_box.png",
      tag: "Popular",
      desc: "Red wine, custom chocolates, preserved roses, and scented massage oils.",
      ingredients: ["Bordeaux Gran Cru Red Wine (750ml)", "Preserved Eternity Roses (4pc)", "Artisan Belgian Chocolates (16pc)", "Scented Massage Oil"]
    },
    {
      id: 5,
      name: "The Birthday Celebration Crate",
      category: "Occasion",
      price: "₦165,000",
      rawPrice: 165000,
      image: "/wood_crate.png",
      tag: "Celebration",
      desc: "Craft gin, custom glassware, premium tonic mixers, and birthday treats.",
      ingredients: ["Hendrick's Gin (700ml)", "Two Lead Crystal Highball Glasses", "Fever-Tree Tonic Mixers (4pc)", "Botanicals Garnish Pack"]
    },
    {
      id: 6,
      name: "The Corporate Welcome Box",
      category: "Corporate",
      price: "₦95,000",
      rawPrice: 95000,
      image: "/luxury_hamper_hero.png",
      tag: "Bulk Ready",
      desc: "Branded thermos, gourmet coffee blend, wireless charging pad, and sweet treats.",
      ingredients: ["Matte Black Thermos (500ml)", "Wireless Wooden Charging Pad", "Luxury Rollerball Pen", "Gourmet Drip Coffee Bags"]
    },
    {
      id: 7,
      name: "Crystal Champagne Flutes (Pair)",
      category: "Accessories",
      price: "₦45,000",
      rawPrice: 45000,
      image: "/luxury_hamper_hero.png",
      tag: "Keepsakes",
      desc: "Hand-cut lead crystal flutes presented in a gold-stamped presentation box.",
      ingredients: ["Two Lead Crystal Champagne Flutes", "Satin-lined Presentation Gift Box"]
    },
    {
      id: 8,
      name: "Handcrafted Leather Journal",
      category: "Accessories",
      price: "₦28,000",
      rawPrice: 28000,
      image: "/wood_crate.png",
      tag: "Stationery",
      desc: "Genuine full-grain leather notebook hand-stitched in Lagos, with refilling cartridge sheets.",
      ingredients: ["Full-Grain Hand-Stitched Leather Notebook", "120 Cream Textured Cartridge Sheets"]
    }
  ];

  // Sync state from query parameters on load
  useEffect(() => {
    // Read category parameter
    const catParam = searchParams.get("cat");
    if (catParam) {
      setActiveFilter(catParam);
    }

    // Read search parameter
    const searchParam = searchParams.get("search");
    if (searchParam) {
      setSearchQuery(searchParam.toLowerCase());
      setActiveFilter("All");
    }

    // Read wishlist parameter
    const wishlistParam = searchParams.get("wishlist");
    if (wishlistParam === "true") {
      setActiveFilter("Wishlist");
    }

    // Load wishlist items
    const savedWishlist = JSON.parse(localStorage.getItem("cnc_wishlist") || "[]");
    setWishlist(savedWishlist);
  }, [searchParams]);

  // Wishlist Functions
  const toggleWishlist = (productId) => {
    let updatedWishlist = [...wishlist];
    if (wishlist.includes(productId)) {
      updatedWishlist = wishlist.filter(id => id !== productId);
    } else {
      updatedWishlist.push(productId);
    }
    setWishlist(updatedWishlist);
    localStorage.setItem("cnc_wishlist", JSON.stringify(updatedWishlist));
    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  // Filter logic
  let filteredProducts = products;

  if (activeFilter === "Wishlist") {
    filteredProducts = products.filter(p => wishlist.includes(p.id));
  } else if (activeFilter !== "All") {
    filteredProducts = products.filter(p => p.category === activeFilter);
  }

  if (searchQuery) {
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(searchQuery) || 
      p.desc.toLowerCase().includes(searchQuery)
    );
  }

  return (
    <div className="w-full min-h-screen bg-bg-luxury pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Page Title */}
        <div className="text-center mb-16 space-y-4">
          <span className="font-sans-alt text-[10px] tracking-[0.4em] uppercase text-accent-gold block">
            Our Catalogues
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-primary-dark font-normal tracking-wide uppercase">
            Curated Gift Collections
          </h1>
          <div className="w-16 h-[1px] bg-accent-gold mx-auto mt-4" />
        </div>

        {/* 1. VARIETIES OF COLLECTIONS HERO CARDS (Request Match) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {categories.filter(c => c.name !== "All").map((cat) => (
            <div
              key={cat.tag}
              onClick={() => {
                setActiveFilter(cat.tag);
                setSearchQuery("");
              }}
              className={`relative h-[200px] overflow-hidden group cursor-pointer border transition-all duration-500 ${
                activeFilter === cat.tag ? "border-accent-gold scale-[1.02]" : "border-bg-sand/40 hover:border-accent-gold"
              }`}
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.4]"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <h3 className="font-display text-lg tracking-wide uppercase mb-1">
                  {cat.name}
                </h3>
                <p className="font-serif-body text-[11px] text-bg-sand/80 line-clamp-2 leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 2. FILTER NAV ROW */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-bg-sand pb-6 mb-12 gap-6">
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {["All", "Wishlist", "Hampers", "Occasion", "Accessories", "Corporate"].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveFilter(cat);
                  setSearchQuery("");
                }}
                className={`font-sans-alt text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-300 rounded-none ${
                  activeFilter === cat
                    ? "bg-primary-dark text-white border-primary-dark"
                    : "bg-transparent text-primary-dark/80 border-muted-brown/10 hover:border-accent-gold hover:text-accent-gold"
                }`}
              >
                {cat === "Occasion" ? "Occasion Box" : cat === "Accessories" ? "Sourced Keepsakes" : cat}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2 text-[11px] font-sans-alt tracking-[0.15em] uppercase text-muted-brown">
            <SlidersHorizontal size={14} className="text-accent-gold" />
            <span>{filteredProducts.length} items catalogued</span>
          </div>
        </div>

        {/* Search Context Alert Banner */}
        {searchQuery && (
          <div className="mb-8 p-4 bg-bg-sand/60 text-[13px] font-sans-ui text-primary-dark flex justify-between items-center">
            <p>Showing search results for: <span className="font-bold">"{searchQuery}"</span></p>
            <button onClick={() => setSearchQuery("")} className="text-accent-gold hover:text-primary-dark font-bold text-xs uppercase tracking-wider">
              Clear Search
            </button>
          </div>
        )}

        {/* 3. PRODUCT GRID WITH HOVER ACTIONS */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => {
              const isWishlisted = wishlist.includes(product.id);
              return (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white group overflow-hidden flex flex-col shadow-sm border border-bg-sand/30 relative"
                >
                  {/* Product Image Panel */}
                  <div className="relative h-[380px] w-full overflow-hidden bg-bg-sand">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Catalog tags overlay */}
                    <div className="absolute top-4 left-4 bg-primary-dark text-white font-sans-alt text-[9px] tracking-[0.15em] uppercase px-3 py-1.5">
                      {product.tag}
                    </div>

                    {/* Wishlist Heart Icon Toggle Overlay */}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`absolute top-4 right-4 p-2 bg-white rounded-full shadow-md transition-colors duration-300 ${
                        isWishlisted ? "text-accent-gold" : "text-primary-dark/40 hover:text-accent-gold"
                      }`}
                      aria-label="Add to Wishlist"
                    >
                      <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} />
                    </button>

                    {/* Quick View Button Hover Overlay */}
                    <div className="absolute inset-0 bg-primary-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        onClick={() => setQuickViewProduct(product)}
                        className="flex items-center space-x-2 bg-white text-primary-dark font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase py-3 px-6 shadow-xl hover:bg-accent-gold hover:text-white transition-colors duration-300 rounded-none"
                      >
                        <Eye size={14} />
                        <span>Quick View</span>
                      </button>
                    </div>

                  </div>

                  {/* Product Info Description */}
                  <div className="p-8 flex flex-col flex-grow justify-between">
                    <div className="space-y-3">
                      <div className="flex justify-between items-baseline gap-2">
                        <h3 className="font-display text-lg text-primary-dark font-normal group-hover:text-accent-gold transition-colors duration-300 leading-snug">
                          {product.name}
                        </h3>
                        <span className="font-sans-ui text-sm font-semibold tracking-wider text-primary-dark shrink-0">
                          {product.price}
                        </span>
                      </div>
                      <p className="font-serif-body text-[13px] text-muted-brown leading-relaxed">
                        {product.desc}
                      </p>
                    </div>

                    <div className="flex justify-between items-center mt-6 pt-6 border-t border-bg-sand/50">
                      <Link
                        href={`/product/${product.id}`}
                        className="text-primary-dark hover:text-accent-gold font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300"
                      >
                        View Details
                      </Link>
                      <Link
                        href="/crate-builder"
                        className="flex items-center space-x-1.5 bg-bg-sand hover:bg-primary-dark hover:text-white text-primary-dark font-sans-alt text-[9px] font-semibold tracking-[0.15em] uppercase px-3 py-2 transition-all duration-500"
                      >
                        <Sparkles size={11} className="text-accent-gold" />
                        <span>Customize</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State statements */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-24 border border-dashed border-muted-brown/20 space-y-4">
            <p className="font-serif-body text-[15px] text-muted-brown">
              No products found matching the criteria. Connect with our concierge to custom source these items.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary-dark hover:bg-accent-gold text-white px-6 py-3 font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors"
            >
              Contact Agent
            </Link>
          </div>
        )}

      </div>

      {/* QUICK VIEW POPUP MODAL (Framer Motion Animated) */}
      <AnimatePresence>
        {quickViewProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary-dark/60 backdrop-blur-sm z-[100] flex items-center justify-center p-6"
            onClick={() => setQuickViewProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-full max-w-3xl bg-white shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setQuickViewProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white text-primary-dark hover:text-accent-gold transition-colors shadow-sm"
              >
                <X size={16} />
              </button>

              {/* Left Column: Image */}
              <div className="relative h-[300px] md:h-full bg-bg-sand min-h-[300px]">
                <Image
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right Column: details */}
              <div className="p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <span className="font-sans-alt text-[9px] tracking-[0.25em] uppercase text-accent-gold block mb-1">
                      Quick Shop Sourcing
                    </span>
                    <h2 className="font-display text-2xl text-primary-dark font-normal leading-tight">
                      {quickViewProduct.name}
                    </h2>
                  </div>
                  
                  <span className="font-sans-ui text-lg font-semibold tracking-wider text-primary-dark block">
                    {quickViewProduct.price}
                  </span>
                  
                  <p className="font-serif-body text-[13px] text-muted-brown leading-relaxed">
                    {quickViewProduct.desc}
                  </p>

                  {/* inclusions */}
                  <div className="space-y-2 pt-2">
                    <span className="font-sans-alt text-[9px] tracking-[0.15em] uppercase font-bold text-primary-dark block">
                      Includes:
                    </span>
                    <ul className="space-y-1">
                      {quickViewProduct.ingredients.slice(0, 4).map((ing, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-[12px] font-serif-body text-muted-brown">
                          <Check size={12} className="text-accent-gold shrink-0" />
                          <span>{ing}</span>
                        </li>
                      ))}
                      {quickViewProduct.ingredients.length > 4 && (
                        <li className="text-[11px] font-sans-alt tracking-[0.1em] text-accent-gold uppercase pl-5">
                          + and {quickViewProduct.ingredients.length - 4} more premium goods
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 border-t border-bg-sand pt-6">
                  <button
                    onClick={() => {
                      alert("Added to cart successfully.");
                      setQuickViewProduct(null);
                    }}
                    className="flex-1 bg-primary-dark hover:bg-accent-gold text-white font-sans-alt text-[9px] font-semibold tracking-[0.2em] uppercase py-3.5 text-center transition-colors rounded-none shadow"
                  >
                    Add to Cart
                  </button>
                  <Link
                    href={`/product/${quickViewProduct.id}`}
                    onClick={() => setQuickViewProduct(null)}
                    className="flex-1 border border-primary-dark hover:bg-primary-dark hover:text-white text-primary-dark font-sans-alt text-[9px] font-semibold tracking-[0.2em] uppercase py-3.5 text-center transition-all duration-300 rounded-none flex items-center justify-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default function Collections() {
  return (
    <Suspense fallback={
      <div className="w-full min-h-[60vh] flex justify-center items-center bg-bg-luxury">
        <div className="font-sans-alt text-xs font-semibold tracking-[0.2em] uppercase text-accent-gold animate-pulse">
          Loading Catalogues...
        </div>
      </div>
    }>
      <CollectionsContent />
    </Suspense>
  );
}
