"use client";

import Link from "next/link";
import { ArrowLeft, Truck, Clock, MapPin, ShieldCheck, Package } from "lucide-react";

export default function ShippingPolicy() {
  return (
    <div className="w-full min-h-screen bg-bg-luxury pt-8 sm:pt-12 pb-20 sm:pb-24 text-primary-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 space-y-6 sm:space-y-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-primary-dark hover:text-accent-gold transition-colors font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase mb-4"
        >
          <ArrowLeft size={12} />
          <span>Back to Home</span>
        </Link>

        {/* Title */}
        <div className="space-y-2 border-b border-bg-sand pb-6">
          <span className="font-sans-alt text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-accent-gold block">
            Logistics &amp; Transit
          </span>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-normal uppercase tracking-wide">
            Shipping &amp; Delivery Policy
          </h1>
        </div>

        {/* Quick Info Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <div className="flex items-center space-x-3 bg-bg-sand p-3 sm:p-4 border border-bg-sand/60">
            <Truck size={20} className="text-accent-gold shrink-0" />
            <div>
              <h4 className="font-sans-alt text-[9px] sm:text-[10px] font-bold tracking-[0.1em] uppercase">Free Lagos Delivery</h4>
              <p className="font-sans-ui text-[10px] sm:text-[11px] text-muted-brown">On orders over ₦200,000</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 bg-bg-sand p-3 sm:p-4 border border-bg-sand/60">
            <Clock size={20} className="text-accent-gold shrink-0" />
            <div>
              <h4 className="font-sans-alt text-[9px] sm:text-[10px] font-bold tracking-[0.1em] uppercase">2–5 Business Days</h4>
              <p className="font-sans-ui text-[10px] sm:text-[11px] text-muted-brown">Standard Lagos delivery</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 bg-bg-sand p-3 sm:p-4 border border-bg-sand/60">
            <MapPin size={20} className="text-accent-gold shrink-0" />
            <div>
              <h4 className="font-sans-alt text-[9px] sm:text-[10px] font-bold tracking-[0.1em] uppercase">Nationwide</h4>
              <p className="font-sans-ui text-[10px] sm:text-[11px] text-muted-brown">Dispatch across Nigeria</p>
            </div>
          </div>
        </div>

        {/* Policy Content */}
        <div className="font-serif-body text-[14px] sm:text-[15px] text-muted-brown leading-relaxed space-y-6">
          <p>
            At C&amp;C Luxury, every hamper is assembled by hand in our Ikoyi, Lagos atelier. We take exceptional care in packaging and transit to ensure your bespoke gift arrives in pristine condition.
          </p>

          <h3 className="font-display text-lg sm:text-xl text-primary-dark font-normal pt-4">
            1. Lagos Delivery
          </h3>
          <p>
            All orders within Lagos are dispatched through our vetted courier partners. Standard delivery takes 2–5 business days from order confirmation. For orders above ₦200,000, Lagos delivery is complimentary. Orders below this threshold incur a flat delivery fee of ₦15,000.
          </p>

          <h3 className="font-display text-lg sm:text-xl text-primary-dark font-normal pt-4">
            2. Same-Day &amp; Express Delivery
          </h3>
          <p>
            Same-day delivery is available for orders placed before 11:00 AM on weekdays within Ikoyi, Victoria Island, and Lekki Phase 1. An express surcharge of ₦25,000 applies. Please contact our concierge desk to arrange express dispatch.
          </p>

          <h3 className="font-display text-lg sm:text-xl text-primary-dark font-normal pt-4">
            3. Nationwide Dispatch
          </h3>
          <p>
            We deliver to all major cities across Nigeria including Abuja, Port Harcourt, Ibadan, Enugu, and Calabar. Nationwide shipping fees are calculated at checkout based on destination and package weight. Estimated delivery: 5–10 business days.
          </p>

          <h3 className="font-display text-lg sm:text-xl text-primary-dark font-normal pt-4">
            4. International Sourcing &amp; Delivery
          </h3>
          <p>
            For international clients or bespoke items requiring global sourcing, delivery timelines and fees are quoted on a case-by-case basis through our concierge team. Please contact us via WhatsApp or email for a custom quote.
          </p>

          <h3 className="font-display text-lg sm:text-xl text-primary-dark font-normal pt-4">
            5. Packaging &amp; Handling
          </h3>
          <p>
            All hampers are wrapped in signature C&amp;C tissue paper, sealed with our gold foil emblem, and placed inside reinforced shipping containers. Fragile items (glassware, bottles) are individually cushioned with custom foam inserts. We photograph each completed hamper before dispatch for quality assurance.
          </p>

          <h3 className="font-display text-lg sm:text-xl text-primary-dark font-normal pt-4">
            6. Order Tracking
          </h3>
          <p>
            Once your order is dispatched, you will receive a WhatsApp notification with your courier tracking details. For any delivery inquiries, please contact our concierge desk at <a href="tel:+2349082850681" className="text-accent-gold hover:underline">+234 908 285 0681</a> or email <a href="mailto:orders@cncluxury.com" className="text-accent-gold hover:underline">orders@cncluxury.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
