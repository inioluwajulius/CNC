"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="w-full min-h-screen bg-bg-luxury pt-12 pb-24 text-primary-dark">
      <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-8">
        
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
          <span className="font-sans-alt text-[10px] tracking-[0.3em] uppercase text-accent-gold block">
            Confidentiality
          </span>
          <h1 className="font-display text-3xl md:text-4xl font-normal uppercase tracking-wide">
            Privacy Policy
          </h1>
        </div>

        {/* Policy Content */}
        <div className="font-serif-body text-[15px] text-muted-brown leading-relaxed space-y-6">
          <p>
            At C&amp;C Luxury (C&amp;C and Co.), the privacy of our clients is of paramount importance. This Privacy Policy documents the types of information collected and how we safeguard it.
          </p>
          
          <h3 className="font-display text-xl text-primary-dark font-normal pt-4">
            1. Client Sourcing Data
          </h3>
          <p>
            We collect basic contact information (name, address, email, and phone number) during the order curation and checkout processes. Because we specialize in custom monogramming and high-end concierge sourcing, we also store design specifications and card notes.
          </p>

          <h3 className="font-display text-xl text-primary-dark font-normal pt-4">
            2. Confidentiality &amp; Discretion
          </h3>
          <p>
            We recognize that our concierge services often involve high-profile corporate accounts and individuals. We guarantee absolute confidentiality. Client order details, names of recipients, and custom messages are never shared with third parties or advertising networks.
          </p>

          <h3 className="font-display text-xl text-primary-dark font-normal pt-4">
            3. Web Cookies &amp; Tracking
          </h3>
          <p>
            Our headless commerce platform uses localized browser storage solely to manage your active shopping cart selections and monogramming state preferences. No third-party behavioral tracking pixels are loaded on this storefront.
          </p>

          <h3 className="font-display text-xl text-primary-dark font-normal pt-4">
            4. Sourcing Queries
          </h3>
          <p>
            Any inquiries submitted through our Concierge Form or WhatsApp channel are protected under our client confidentiality terms and are strictly used to coordinate manual assembly and billing invoice verification.
          </p>
        </div>

      </div>
    </div>
  );
}
