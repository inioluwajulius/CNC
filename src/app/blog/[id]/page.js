"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";

export default function BlogDetailPage({ params }) {
  const resolvedParams = React.use(params);
  const postId = parseInt(resolvedParams.id, 10);
  const [copied, setCopied] = useState(false);

  const posts = {
    1: {
      title: "Top 10 Corporate Gift Ideas for Lagos Executives",
      date: "June 5, 2026",
      readTime: "6 min read",
      tag: "Corporate",
      image: "/wood_crate.png",
      content: (
        <>
          <p>
            In the high-stakes world of Lagos business, gifting is not merely a formality—it is a strategic asset. From Ikoyi boardrooms to Lekki financial hubs, the token of appreciation you offer to a director, partner, or high-value client reflects your brand&apos;s commitment to quality and intention.
          </p>
          <p>
            At C&amp;C Luxury, we believe that corporate hampers should reject the generic. Gone are the days of brand-logoed plastic flash drives and store-bought biscuit tins. Today&apos;s executive expects a curated experience. Here are our top curation recommendations for the modern Lagos executive:
          </p>
          <h3 className="font-display text-lg sm:text-xl text-primary-dark font-normal pt-4 uppercase tracking-wider">
            1. Bespoke Engraved Hot-Stamping
          </h3>
          <p>
            An executive&apos;s name is their signature. Hot-stamping monograms on a hand-carved cedar wood crate adds a permanent keepsake value. When the confections are consumed, the cedar crate remains on their office credenza as an organizer, keeping your brand top-of-mind.
          </p>
          <h3 className="font-display text-lg sm:text-xl text-primary-dark font-normal pt-4 uppercase tracking-wider">
            2. Single Malt Scotch &amp; Lead Crystal
          </h3>
          <p>
            Pairing a premium bottle of 18-year Glenfiddich or Macallan with hand-cut lead crystal tumblers demonstrates a sophisticated understanding of luxury. It signals that you value their private hours of relaxation.
          </p>
          <h3 className="font-display text-lg sm:text-xl text-primary-dark font-normal pt-4 uppercase tracking-wider">
            3. Italian Desk Curation &amp; Stationery
          </h3>
          <p>
            High-quality leather journals, hand-stitched in Nigeria with imported Italian leather, alongside gold-plated writing tools, elevate their daily workspaces.
          </p>
          <p>
            Corporate gifting should be handled with professional concierge care. C&amp;C Luxury specializes in end-to-end logistics, from monogram simulation in our Ikoyi atelier to vetted delivery with real-time updates.
          </p>
        </>
      ),
    },
    2: {
      title: "The Art of Curating the Perfect Wedding Hamper",
      date: "May 28, 2026",
      readTime: "5 min read",
      tag: "Weddings",
      image: "/luxury_hamper_hero.png",
      content: (
        <>
          <p>
            A wedding is one of life&apos;s most sacred milestones. The gift presented to the newlyweds—or the favors gifted to your guests—should carry the weight of that celebration. A perfect wedding hamper is not a container of items; it is a container of memories.
          </p>
          <p>
            When curating wedding gifts, our atelier focuses on sensory harmony:
          </p>
          <h3 className="font-display text-lg sm:text-xl text-primary-dark font-normal pt-4 uppercase tracking-wider">
            1. Scent Memories (Oud &amp; Damask Rose)
          </h3>
          <p>
            Scent is the strongest link to memory. Including hand-poured soy candles or ambient room diffusers with notes of amber, saffron, and oud creates a permanent association with their wedding day. Every time they light the candle in their new home, they will recall the joy of the ceremony.
          </p>
          <h3 className="font-display text-lg sm:text-xl text-primary-dark font-normal pt-4 uppercase tracking-wider">
            2. Monogrammed Linen Keepsakes
          </h3>
          <p>
            Towels, napkins, or table runners monogrammed with the couple&apos;s new initials represent the founding of their new home. We select only the highest thread count organic cotton and Belgian linen.
          </p>
          <h3 className="font-display text-lg sm:text-xl text-primary-dark font-normal pt-4 uppercase tracking-wider">
            3. Curating Toasting Flutes
          </h3>
          <p>
            Every wedding hamper requires champagnes like Veuve Clicquot or Dom Pérignon paired with hand-cut crystal flutes. It invites them to celebrate anniversaries for years to come.
          </p>
        </>
      ),
    },
    3: {
      title: "Occasion Gifting Trends: What's In for 2026",
      date: "May 15, 2026",
      readTime: "4 min read",
      tag: "Lifestyle Trends",
      image: "/velvet_box.png",
      content: (
        <>
          <p>
            The landscape of luxury gifting is evolving rapidly. High-net-worth individuals are moving away from traditional, bulky hampers toward minimalist, highly curated tokens that reflect individual tastes and modern convenience.
          </p>
          <p>
            Here are the primary trends our Ikoyi showroom has identified for the year 2026:
          </p>
          <h3 className="font-display text-lg sm:text-xl text-primary-dark font-normal pt-4 uppercase tracking-wider">
            1. Reusable &amp; Sustainable Bases
          </h3>
          <p>
            Cardboard wrapping is out; cedar wood crates and velvet keepsakes boxes are in. Recipients want containers that serve as decorative organizers rather than waste.
          </p>
          <h3 className="font-display text-lg sm:text-xl text-primary-dark font-normal pt-4 uppercase tracking-wider">
            2. Digital E-Gift Cards &amp; Concierge Selection
          </h3>
          <p>
            Sometimes, the ultimate luxury is choice. Premium digital gift cards allow recipients to work directly with a C&amp;C Luxury concierge specialist to custom-source products suited to their lifestyle.
          </p>
          <h3 className="font-display text-lg sm:text-xl text-primary-dark font-normal pt-4 uppercase tracking-wider">
            3. Niche Fragrance &amp; Wellness
          </h3>
          <p>
            Gourmet food remains popular, but premium lifestyle products like wellness skin elixirs, silk sleeping masks, and organic chamomile infusions are leading the luxury lifestyle category.
          </p>
        </>
      ),
    },
  };

  const post = posts[postId];

  if (!post) {
    return (
      <div className="w-full min-h-[60vh] flex flex-col justify-center items-center bg-bg-luxury text-center px-4 sm:px-6">
        <h2 className="font-display text-xl sm:text-2xl text-primary-dark font-normal mb-4">
          Article Not Found
        </h2>
        <Link
          href="/blog"
          className="bg-primary-dark hover:bg-accent-gold text-white px-6 py-3 font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors"
        >
          Return to Editorial
        </Link>
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full min-h-screen bg-bg-luxury pt-8 sm:pt-12 pb-20 sm:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center space-x-2 text-primary-dark hover:text-accent-gold transition-colors font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase mb-8 sm:mb-12"
        >
          <ArrowLeft size={12} />
          <span>Back to Editorial</span>
        </Link>

        {/* Article Layout */}
        <article className="bg-white border border-bg-sand/30 shadow-sm p-6 sm:p-10 md:p-12 space-y-6 sm:space-y-8">
          {/* Post Header */}
          <div className="space-y-4">
            <span className="font-sans-alt text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-accent-gold block">
              {post.tag}
            </span>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl text-primary-dark font-normal leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-[11px] font-sans-alt tracking-wider text-muted-brown border-y border-bg-sand py-3">
              <span className="flex items-center space-x-1">
                <Calendar size={12} className="text-accent-gold" />
                <span>{post.date}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock size={12} className="text-accent-gold" />
                <span>{post.readTime}</span>
              </span>
              <button
                onClick={handleShare}
                className="ml-auto flex items-center space-x-1.5 hover:text-accent-gold transition-colors text-primary-dark"
              >
                <Share2 size={12} />
                <span>{copied ? "Link Copied!" : "Share Link"}</span>
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-[250px] sm:h-[350px] md:h-[450px] w-full overflow-hidden bg-bg-sand">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* Full Text Content */}
          <div className="font-serif-body text-[14px] sm:text-[15px] md:text-[16px] text-muted-brown leading-relaxed space-y-5 sm:space-y-6 post-body-serif">
            {post.content}
          </div>

          {/* Footer Share Icons */}
          <div className="border-t border-bg-sand pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="font-sans-alt text-[9px] sm:text-[10px] tracking-[0.15em] uppercase font-bold text-primary-dark">
              Share this editorial:
            </span>
            <div className="flex items-center space-x-3">
              <button className="w-8 h-8 rounded-full border border-bg-sand flex items-center justify-center text-primary-dark hover:text-accent-gold hover:border-accent-gold transition-all" aria-label="Share on Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </button>
              <button className="w-8 h-8 rounded-full border border-bg-sand flex items-center justify-center text-primary-dark hover:text-accent-gold hover:border-accent-gold transition-all" aria-label="Share on Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </button>
              <button className="w-8 h-8 rounded-full border border-bg-sand flex items-center justify-center text-primary-dark hover:text-accent-gold hover:border-accent-gold transition-all" aria-label="Share on WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
