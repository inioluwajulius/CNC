"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock, Calendar } from "lucide-react";

export default function BlogIndex() {
  const posts = [
    {
      id: 1,
      title: "Top 10 Corporate Gift Ideas for Lagos Executives",
      excerpt: "In the Nigerian corporate landscape, details speak louder than words. Discover how to curate gifts that build lasting strategic relationships.",
      image: "/wood_crate.png",
      date: "June 5, 2026",
      readTime: "6 min read",
      tag: "Corporate",
    },
    {
      id: 2,
      title: "The Art of Curating the Perfect Wedding Hamper",
      excerpt: "A wedding favor should be an heirloom. Learn the science of balancing custom monograms, premium champagnes, and scent memories.",
      image: "/luxury_hamper_hero.png",
      date: "May 28, 2026",
      readTime: "5 min read",
      tag: "Weddings",
    },
    {
      id: 3,
      title: "Occasion Gifting Trends: What's In for 2026",
      excerpt: "From tech integrations to bespoke perfume sourcing, we forecast the shifts defining luxury gifting among Nigeria's elite.",
      image: "/velvet_box.png",
      date: "May 15, 2026",
      readTime: "4 min read",
      tag: "Lifestyle Trends",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-bg-luxury pt-8 sm:pt-12 pb-20 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Header Title */}
        <div className="text-center mb-12 sm:mb-20 space-y-3 sm:space-y-4">
          <span className="font-sans-alt text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-accent-gold block">
            The Editorial
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary-dark font-normal tracking-wide uppercase hero-title-responsive">
            Stories &amp; Curation Guides
          </h1>
          <div className="w-16 h-[1px] bg-accent-gold mx-auto mt-4" />
        </div>

        {/* Featured Post (Hero layout on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-bg-sand/30 shadow-sm hover:shadow-md transition-shadow duration-500 mb-12 sm:mb-16"
        >
          <div className="lg:col-span-7 relative h-[250px] sm:h-[350px] lg:h-[450px] w-full overflow-hidden">
            <Image
              src="/luxury_hamper_hero.png"
              alt="Featured editorial post hero"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
              priority
            />
            <div className="absolute top-4 left-4 bg-primary-dark text-white font-sans-alt text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 shadow">
              Atelier Feature
            </div>
          </div>
          <div className="lg:col-span-5 p-6 sm:p-10 space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-4 text-[11px] font-sans-alt tracking-wider text-muted-brown">
              <span className="flex items-center space-x-1">
                <Calendar size={12} className="text-accent-gold" />
                <span>June 8, 2026</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock size={12} className="text-accent-gold" />
                <span>8 min read</span>
              </span>
            </div>
            <h2 className="font-display text-xl sm:text-2xl lg:text-3xl text-primary-dark font-normal leading-tight">
              Behind the Crate: The Story of Our Ikoyi Showroom
            </h2>
            <p className="font-serif-body text-[13px] sm:text-[14px] text-muted-brown leading-relaxed">
              Explore the design philosophy governing our flagship atelier in Lagos. From sustainable cedar wood sourcing to the intricate artisan calligraphy on each greeting tag, discover the meticulous details that go into every C&amp;C Luxury order.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 bg-primary-dark hover:bg-accent-gold text-white px-5 sm:px-6 py-3 font-sans-alt text-[9px] font-semibold tracking-[0.2em] uppercase transition-colors duration-500 rounded-none shadow"
            >
              <span>Our Philosophy</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white border border-bg-sand/30 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-500 group overflow-hidden"
            >
              <div className="relative h-[200px] sm:h-[240px] w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-primary-dark text-white font-sans-alt text-[8px] sm:text-[9px] tracking-[0.15em] uppercase px-2.5 py-1">
                  {post.tag}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 text-[10px] font-sans-alt tracking-wider text-muted-brown">
                    <span className="flex items-center space-x-1">
                      <Calendar size={11} className="text-accent-gold" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock size={11} className="text-accent-gold" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                  <h3 className="font-display text-base sm:text-lg text-primary-dark font-normal group-hover:text-accent-gold transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>
                  <p className="font-serif-body text-[12px] sm:text-[13px] text-muted-brown leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center space-x-1.5 border-b border-primary-dark/20 hover:border-accent-gold text-primary-dark hover:text-accent-gold font-sans-alt text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase pb-1 self-start transition-colors duration-300"
                >
                  <span>Read Article</span>
                  <BookOpen size={11} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
