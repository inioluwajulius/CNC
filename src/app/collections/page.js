"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  SlidersHorizontal,
  Heart,
  Sparkles,
  Eye,
  X,
  Check,
  ArrowUpDown,
} from "lucide-react";

function CollectionsContent() {
  const searchParams = useSearchParams();

  const [activeFilter, setActiveFilter] = useState("All");
  const [wishlist, setWishlist] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const categories = [
    { name: "All", tag: "All" },
    {
      name: "Luxury Hampers",
      tag: "Hampers",
      image: "/luxury_hamper_hero.png",
      desc: "Signature baskets curated with global champagne & delicacies.",
    },
    {
      name: "Shop By Occasion",
      tag: "Occasion",
      image: "/velvet_box.png",
      desc: "Velvet gift boxes tailored for weddings & birthdays.",
    },
    {
      name: "Jewelry & Accessories",
      tag: "Accessories",
      image: "/luxury_hamper_hero.png",
      desc: "Fine sourced keepsakes, pens, diffusers, and luxury items.",
    },
    {
      name: "Corporate Gifting",
      tag: "Corporate",
      image: "/wood_crate.png",
      desc: "Artisan wood crates designed for executives & events.",
    },
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
      ingredients: [
        "Veuve Clicquot Champagne (750ml)",
        "Two Crystal Champagne Flutes",
        "Two Monogrammed Linen Towels",
        "Scented Soy Candle",
        "Artisan Chocolate Box (16pc)",
      ],
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
      ingredients: [
        "Lavender Massage Oil (100ml)",
        "Mulberry Silk Sleep Mask",
        "Organic Camomile Tea Box",
        "Rose Water Facial Mist",
        "Scented Diffuser",
      ],
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
      ingredients: [
        "Glenfiddich 18 Year Scotch (700ml)",
        "Leather-bound Journal",
        "Gold-plated Luxury Pen",
        "Oud Scented Soy Candle",
        "Gourmet Coffee Blend",
      ],
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
      ingredients: [
        "Bordeaux Gran Cru Red Wine (750ml)",
        "Preserved Eternity Roses (4pc)",
        "Artisan Belgian Chocolates (16pc)",
        "Scented Massage Oil",
      ],
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
      ingredients: [
        "Hendrick's Gin (700ml)",
        "Two Lead Crystal Highball Glasses",
        "Fever-Tree Tonic Mixers (4pc)",
        "Botanicals Garnish Pack",
      ],
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
      ingredients: [
        "Matte Black Thermos (500ml)",
        "Wireless Wooden Charging Pad",
        "Luxury Rollerball Pen",
        "Gourmet Drip Coffee Bags",
      ],
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
      ingredients: [
        "Two Lead Crystal Champagne Flutes",
        "Satin-lined Presentation Gift Box",
      ],
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
      ingredients: [
        "Full-Grain Hand-Stitched Leather Notebook",
        "120 Cream Textured Cartridge Sheets",
      ],
    },
  ];

  useEffect(() => {
    const catParam = searchParams.get("cat");
    if (catParam) setActiveFilter(catParam);

    const searchParam = searchParams.get("search");
    if (searchParam) {
      setSearchQuery(searchParam.toLowerCase());
      setActiveFilter("All");
    }

    const wishlistParam = searchParams.get("wishlist");
    if (wishlistParam === "true") setActiveFilter("Wishlist");

    const savedWishlist = JSON.parse(
      localStorage.getItem("cnc_wishlist") || "[]"
    );
    setWishlist(savedWishlist);
  }, [searchParams]);

  const toggleWishlist = (productId) => {
    let updatedWishlist = [...wishlist];
    if (wishlist.includes(productId)) {
      updatedWishlist = wishlist.filter((id) => id !== productId);
    } else {
      updatedWishlist.push(productId);
    }
    setWishlist(updatedWishlist);
    localStorage.setItem("cnc_wishlist", JSON.stringify(updatedWishlist));
    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  let filteredProducts = products;

  if (activeFilter === "Wishlist") {
    filteredProducts = products.filter((p) => wishlist.includes(p.id));
  } else if (activeFilter !== "All") {
    filteredProducts = products.filter((p) => p.category === activeFilter);
  }

  if (searchQuery) {
    filteredProducts = filteredProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery) ||
        p.desc.toLowerCase().includes(searchQuery)
    );
  }

  // Sorting
  if (sortBy === "price-low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.rawPrice - b.rawPrice
    );
  } else if (sortBy === "price-high") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.rawPrice - a.rawPrice
    );
  }

  return (
    <div className="w-full min-h-screen bg-bg-luxury pt-8 sm:pt-12 pb-20 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Page Title */}
        <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <span className="font-sans-alt text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-accent-gold block">
            Our Catalogues
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary-dark font-normal tracking-wide uppercase hero-title-responsive">
            Curated Gift Collections
          </h1>
          <div className="w-16 h-[1px] bg-accent-gold mx-auto mt-4" />
        </div>

        {/* Category Hero Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-16">
          {categories
            .filter((c) => c.name !== "All")
            .map((cat) => (
              <div
                key={cat.tag}
                onClick={() => {
                  setActiveFilter(cat.tag);
                  setSearchQuery("");
                }}
                className={`relative h-[140px] sm:h-[180px] md:h-[200px] overflow-hidden group cursor-pointer border transition-all duration-500 ${
                  activeFilter === cat.tag
                    ? "border-accent-gold scale-[1.02]"
                    : "border-bg-sand/40 hover:border-accent-gold"
                }`}
              >
                <Image
                  src={cat.image}
                  alt={`${cat.name} — C&C Luxury gift collection`}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.4]"
                />
                <div className="absolute inset-0 p-3 sm:p-4 md:p-6 flex flex-col justify-end text-white">
                  <h3 className="font-display text-sm sm:text-base md:text-lg tracking-wide uppercase mb-1 leading-tight">
                    {cat.name}
                  </h3>
                  <p className="font-serif-body text-[10px] sm:text-[11px] text-bg-sand/80 line-clamp-2 leading-relaxed hidden sm:block">
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
        </div>

        {/* Filter Nav Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-bg-sand pb-4 sm:pb-6 mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-4 justify-center">
            {[
              "All",
              "Wishlist",
              "Hampers",
              "Occasion",
              "Accessories",
              "Corporate",
            ].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveFilter(cat);
                  setSearchQuery("");
                }}
                className={`font-sans-alt text-[9px] sm:text-[10px] md:text-[11px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase px-2.5 sm:px-4 py-1.5 sm:py-2 border transition-all duration-300 rounded-none ${
                  activeFilter === cat
                    ? "bg-primary-dark text-white border-primary-dark"
                    : "bg-transparent text-primary-dark/80 border-muted-brown/10 hover:border-accent-gold hover:text-accent-gold"
                }`}
              >
                {cat === "Occasion"
                  ? "Occasion Box"
                  : cat === "Accessories"
                    ? "Sourced Keepsakes"
                    : cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Sort */}
            <div className="flex items-center gap-1.5">
              <ArrowUpDown size={12} className="text-accent-gold" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="font-sans-alt text-[10px] tracking-[0.1em] uppercase text-primary-dark bg-transparent border-none focus:outline-none cursor-pointer"
              >
                <option value="default">Sort by</option>
                <option value="price-low">Price: Low → High</option>
                <option value="price-high">Price: High → Low</option>
              </select>
            </div>
            <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] font-sans-alt tracking-[0.15em] uppercase text-muted-brown">
              <SlidersHorizontal size={14} className="text-accent-gold" />
              <span>{filteredProducts.length} items</span>
            </div>
          </div>
        </div>

        {/* Search Context Alert */}
        {searchQuery && (
          <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-bg-sand/60 text-[12px] sm:text-[13px] font-sans-ui text-primary-dark flex justify-between items-center">
            <p>
              Showing results for:{" "}
              <span className="font-bold">&ldquo;{searchQuery}&rdquo;</span>
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="text-accent-gold hover:text-primary-dark font-bold text-xs uppercase tracking-wider"
            >
              Clear
            </button>
          </div>
        )}

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
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
                  className="bg-white group overflow-hidden flex flex-col shadow-sm border border-bg-sand/30 relative hover:shadow-lg transition-shadow duration-500"
                >
                  {/* Product Image */}
                  <div className="relative h-[260px] sm:h-[320px] md:h-[380px] w-full overflow-hidden bg-bg-sand">
                    <Image
                      src={product.image}
                      alt={`${product.name} — C&C Luxury`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-primary-dark text-white font-sans-alt text-[8px] sm:text-[9px] tracking-[0.15em] uppercase px-2.5 sm:px-3 py-1 sm:py-1.5">
                      {product.tag}
                    </div>

                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`absolute top-3 sm:top-4 right-3 sm:right-4 p-1.5 sm:p-2 bg-white rounded-full shadow-md transition-colors duration-300 ${
                        isWishlisted
                          ? "text-accent-gold"
                          : "text-primary-dark/40 hover:text-accent-gold"
                      }`}
                      aria-label="Add to Wishlist"
                    >
                      <Heart
                        size={14}
                        fill={isWishlisted ? "currentColor" : "none"}
                      />
                    </button>

                    <div className="absolute inset-0 bg-primary-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        onClick={() => setQuickViewProduct(product)}
                        className="flex items-center space-x-2 bg-white text-primary-dark font-sans-alt text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase py-2.5 sm:py-3 px-4 sm:px-6 shadow-xl hover:bg-accent-gold hover:text-white transition-colors duration-300 rounded-none"
                      >
                        <Eye size={14} />
                        <span>Quick View</span>
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow justify-between">
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex justify-between items-baseline gap-2">
                        <h3 className="font-display text-base sm:text-lg text-primary-dark font-normal group-hover:text-accent-gold transition-colors duration-300 leading-snug">
                          {product.name}
                        </h3>
                        <span className="font-sans-ui text-xs sm:text-sm font-semibold tracking-wider text-primary-dark shrink-0">
                          {product.price}
                        </span>
                      </div>
                      <p className="font-serif-body text-[12px] sm:text-[13px] text-muted-brown leading-relaxed">
                        {product.desc}
                      </p>
                    </div>

                    <div className="flex justify-between items-center mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-bg-sand/50">
                      <Link
                        href={`/product/${product.id}`}
                        className="text-primary-dark hover:text-accent-gold font-sans-alt text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300"
                      >
                        View Details
                      </Link>
                      <Link
                        href="/crate-builder"
                        className="flex items-center space-x-1.5 bg-bg-sand hover:bg-primary-dark hover:text-white text-primary-dark font-sans-alt text-[8px] sm:text-[9px] font-semibold tracking-[0.15em] uppercase px-2.5 sm:px-3 py-1.5 sm:py-2 transition-all duration-500"
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

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 sm:py-24 border border-dashed border-muted-brown/20 space-y-4">
            <p className="font-serif-body text-[14px] sm:text-[15px] text-muted-brown">
              No products found matching the criteria. Connect with our
              concierge to custom source these items.
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

      {/* Quick View Modal */}
      <AnimatePresence>
        {quickViewProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary-dark/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 sm:p-6"
            onClick={() => setQuickViewProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-full max-w-3xl bg-white shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setQuickViewProduct(null)}
                className="absolute top-3 right-3 z-10 p-2 bg-white/80 hover:bg-white text-primary-dark hover:text-accent-gold transition-colors shadow-sm"
              >
                <X size={16} />
              </button>

              <div className="relative h-[250px] sm:h-[300px] md:h-full bg-bg-sand min-h-[250px]">
                <Image
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5 sm:p-8 flex flex-col justify-between space-y-4 sm:space-y-6">
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <span className="font-sans-alt text-[8px] sm:text-[9px] tracking-[0.25em] uppercase text-accent-gold block mb-1">
                      Quick Shop Sourcing
                    </span>
                    <h2 className="font-display text-xl sm:text-2xl text-primary-dark font-normal leading-tight">
                      {quickViewProduct.name}
                    </h2>
                  </div>

                  <span className="font-sans-ui text-base sm:text-lg font-semibold tracking-wider text-primary-dark block">
                    {quickViewProduct.price}
                  </span>

                  <p className="font-serif-body text-[12px] sm:text-[13px] text-muted-brown leading-relaxed">
                    {quickViewProduct.desc}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="font-sans-alt text-[8px] sm:text-[9px] tracking-[0.15em] uppercase font-bold text-primary-dark block">
                      Includes:
                    </span>
                    <ul className="space-y-1">
                      {quickViewProduct.ingredients
                        .slice(0, 4)
                        .map((ing, idx) => (
                          <li
                            key={idx}
                            className="flex items-center space-x-2 text-[11px] sm:text-[12px] font-serif-body text-muted-brown"
                          >
                            <Check
                              size={12}
                              className="text-accent-gold shrink-0"
                            />
                            <span>{ing}</span>
                          </li>
                        ))}
                      {quickViewProduct.ingredients.length > 4 && (
                        <li className="text-[10px] sm:text-[11px] font-sans-alt tracking-[0.1em] text-accent-gold uppercase pl-5">
                          + and {quickViewProduct.ingredients.length - 4} more
                          premium goods
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 border-t border-bg-sand pt-4 sm:pt-6">
                  <button
                    onClick={() => {
                      alert("Added to cart successfully.");
                      setQuickViewProduct(null);
                    }}
                    className="flex-1 bg-primary-dark hover:bg-accent-gold text-white font-sans-alt text-[9px] font-semibold tracking-[0.2em] uppercase py-3 sm:py-3.5 text-center transition-colors rounded-none shadow"
                  >
                    Add to Cart
                  </button>
                  <Link
                    href={`/product/${quickViewProduct.id}`}
                    onClick={() => setQuickViewProduct(null)}
                    className="flex-1 border border-primary-dark hover:bg-primary-dark hover:text-white text-primary-dark font-sans-alt text-[9px] font-semibold tracking-[0.2em] uppercase py-3 sm:py-3.5 text-center transition-all duration-300 rounded-none flex items-center justify-center"
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
    <Suspense
      fallback={
        <div className="w-full min-h-[60vh] flex justify-center items-center bg-bg-luxury">
          <div className="font-sans-alt text-xs font-semibold tracking-[0.2em] uppercase text-accent-gold animate-pulse">
            Loading Catalogues...
          </div>
        </div>
      }
    >
      <CollectionsContent />
    </Suspense>
  );
}
