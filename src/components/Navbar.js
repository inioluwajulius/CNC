"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ShoppingBag,
  Search,
  ChevronDown,
  Heart,
  Truck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Sync wishlist count
    const updateWishlist = () => {
      const wishlist = JSON.parse(
        localStorage.getItem("cnc_wishlist") || "[]"
      );
      setWishlistCount(wishlist.length);
    };
    updateWishlist();
    window.addEventListener("wishlistUpdated", updateWishlist);

    // Sync cart count
    const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem("cnc_cart") || "[]");
      const count = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
      setCartCount(count);
    };
    updateCart();
    window.addEventListener("cartUpdated", updateCart);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wishlistUpdated", updateWishlist);
      window.removeEventListener("cartUpdated", updateCart);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Crate Builder", href: "/crate-builder", highlight: true },
    {
      name: "Collections",
      href: "/collections",
      dropdown: [
        { name: "Luxury Hampers", href: "/collections?cat=Hampers" },
        { name: "Shop By Occasion", href: "/collections?cat=Occasion" },
        {
          name: "Jewelry & Accessories",
          href: "/collections?cat=Accessories",
        },
        { name: "Corporate Gifting", href: "/collections?cat=Corporate" },
      ],
    },
    { name: "Services", href: "/services" },
    { name: "Editorial", href: "/blog" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const popularSearches = [
    "Wedding Luxury Crate",
    "Self-Care Velvet Box",
    "Executive Scotch Crate",
    "Anniversary Velvet Box",
  ];

  return (
    <>
      {/* ═══ ANNOUNCEMENT BAR ═══ */}
      <div className="announcement-bar fixed top-0 left-0 w-full z-[60] py-2 px-4 text-center">
        <p className="font-sans-alt text-[9px] md:text-[10px] font-medium tracking-[0.2em] uppercase text-white/90 flex items-center justify-center gap-2">
          <Truck size={12} className="text-accent-gold shrink-0" />
          <span>
            Complimentary Lagos Delivery on Orders Over ₦200,000 — Nationwide
            Dispatch Available
          </span>
        </p>
      </div>

      {/* ═══ MAIN HEADER ═══ */}
      <header
        className={`fixed top-[32px] md:top-[36px] left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-bg-luxury/95 backdrop-blur-md border-b border-bg-sand py-3 md:py-4 shadow-sm"
            : "bg-white/80 backdrop-blur-sm py-4 md:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl sm:text-2xl md:text-3xl text-primary-dark tracking-[0.15em] font-normal transition-opacity duration-300 hover:opacity-85"
          >
            C&amp;C LUXURY
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;

              if (item.dropdown) {
                return (
                  <div key={item.name} className="relative group py-2">
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-1 font-sans-alt text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                        isActive
                          ? "text-accent-gold"
                          : "text-primary-dark/80 hover:text-accent-gold"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        size={10}
                        className="group-hover:rotate-180 transition-transform duration-300"
                      />
                    </Link>
                    {/* Hover Dropdown Panel */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-52 bg-white border border-bg-sand shadow-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 space-y-2.5 mt-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block font-sans-alt text-[10px] tracking-[0.15em] uppercase text-primary-dark/70 hover:text-accent-gold transition-colors py-1"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-sans-alt text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 relative ${
                    item.highlight
                      ? "bg-primary-dark text-white px-4 py-2 hover:bg-accent-gold"
                      : isActive
                        ? "text-accent-gold"
                        : "text-primary-dark/80 hover:text-accent-gold"
                  }`}
                >
                  {item.name}
                  {!item.highlight && isActive && (
                    <motion.span
                      layoutId="activeNavLine"
                      className="absolute left-0 right-0 bottom-[-6px] h-[1px] bg-accent-gold"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Utility Icons — Desktop */}
          <div className="hidden lg:flex items-center space-x-5 text-primary-dark">
            {/* Search Icon */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hover:text-accent-gold transition-colors duration-300"
              aria-label="Open Search"
            >
              <Search size={18} />
            </button>
            {/* Wishlist Link */}
            <Link
              href="/collections?wishlist=true"
              className="hover:text-accent-gold transition-colors duration-300 relative"
              aria-label="Wishlist"
            >
              <Heart size={18} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-accent-gold text-white text-[8px] font-sans-ui font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
            {/* Cart Link */}
            <Link
              href="/cart"
              className="hover:text-accent-gold transition-colors duration-300 relative"
              aria-label="Shopping Cart"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-accent-gold text-white text-[8px] font-sans-ui font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Navigation Icons */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-primary-dark hover:text-accent-gold p-1"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link href="/cart" className="text-primary-dark relative p-1">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-gold text-white text-[8px] font-sans-ui font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-dark hover:text-accent-gold transition-colors duration-300 p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* ═══ MOBILE NAV OVERLAY ═══ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-primary-dark/40 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 w-4/5 max-w-sm h-full bg-white shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <div>
                <div className="flex justify-end mb-6">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-primary-dark hover:text-accent-gold p-1"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex flex-col space-y-4">
                  {menuItems.map((link) => (
                    <div key={link.name} className="flex flex-col space-y-2">
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`font-sans-alt text-sm font-semibold tracking-[0.2em] uppercase p-3 border-b border-bg-sand transition-colors duration-300 ${
                          link.highlight
                            ? "bg-primary-dark text-white text-center py-3 rounded-none hover:bg-accent-gold"
                            : pathname === link.href
                              ? "text-accent-gold"
                              : "text-primary-dark hover:text-accent-gold"
                        }`}
                      >
                        {link.name}
                      </Link>
                      {link.dropdown && (
                        <div className="pl-4 flex flex-col space-y-2">
                          {link.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className="font-sans-alt text-[11px] tracking-[0.15em] uppercase text-muted-brown hover:text-accent-gold py-1"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="font-sans-alt text-[10px] tracking-[0.1em] text-muted-brown space-y-2 pt-6 border-t border-bg-sand mt-6">
                <p>C&amp;C LUXURY LMTD</p>
                <p>14A Second Avenue, Ikoyi, Lagos</p>
                <p className="text-accent-gold">+234 908 285 0681</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ SEARCH DRAWER OVERLAY ═══ */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary-dark/60 backdrop-blur-md z-[100] flex items-start justify-center pt-20 sm:pt-24 px-4"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-full max-w-2xl bg-white shadow-2xl p-6 sm:p-8 border-t-4 border-accent-gold"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <span className="font-sans-alt text-[10px] tracking-[0.3em] uppercase text-accent-gold font-bold">
                  Predictive Search Sourcing
                </span>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="text-primary-dark hover:text-accent-gold"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Search Bar Input */}
              <div className="relative border-b border-primary-dark pb-2 mb-8">
                <input
                  type="text"
                  autoFocus
                  placeholder="SEARCH THE HOUSE CATALOGUE..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-none text-[14px] sm:text-[16px] font-sans-alt tracking-[0.1em] placeholder-muted-brown/40 text-primary-dark focus:outline-none"
                />
                <Search
                  className="absolute right-2 top-0.5 text-primary-dark/60"
                  size={18}
                />
              </div>

              {/* Popular Searches */}
              <div className="space-y-3">
                <h4 className="font-sans-alt text-[9px] tracking-[0.2em] uppercase font-bold text-muted-brown">
                  Popular Sourcing Queries:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term) => (
                    <Link
                      key={term}
                      href={`/collections?search=${encodeURIComponent(term)}`}
                      onClick={() => setIsSearchOpen(false)}
                      className="font-sans-alt text-[10px] tracking-[0.15em] uppercase px-3 py-2 bg-bg-sand text-primary-dark hover:bg-accent-gold hover:text-white transition-colors duration-300"
                    >
                      {term}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
