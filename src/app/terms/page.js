"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
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
        <div className="space-y-2 border-b border-bg-sand pb-4 sm:pb-6">
          <span className="font-sans-alt text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-accent-gold block">
            House Rules
          </span>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-normal uppercase tracking-wide">
            Terms of Service
          </h1>
        </div>

        {/* Terms Content */}
        <div className="font-serif-body text-[14px] sm:text-[15px] text-muted-brown leading-relaxed space-y-5 sm:space-y-6">
          <p>
            Welcome to the digital boutique of C&amp;C Luxury. By browsing this storefront or placing custom inquiries, you agree to comply with and be bound by the following Terms of Service.
          </p>
          
          <h3 className="font-display text-lg sm:text-xl text-primary-dark font-normal pt-2 sm:pt-4">
            1. Bespoke Order Finality
          </h3>
          <p>
            Since our hampers are custom-crafted and personalized (including hot-stamped gold foil monogramming), all bespoke orders are final. No cancellations or refunds can be offered once materials have been stamped or spirits sourced.
          </p>

          <h3 className="font-display text-lg sm:text-xl text-primary-dark font-normal pt-2 sm:pt-4">
            2. Concierge Sourcing Retainers
          </h3>
          <p>
            For rare or limited-edition items procured by our concierge, we require a non-refundable retainer fee before initiating local or international transit channels. Final invoicing will reflect exact courier and customs surcharges.
          </p>

          <h3 className="font-display text-lg sm:text-xl text-primary-dark font-normal pt-2 sm:pt-4">
            3. Delivery &amp; Transit Vetting
          </h3>
          <p>
            We coordinate premium transit deliveries within Lagos and other parts of Nigeria using vetted courier details. Delivery dates are estimated and can be subject to logistics or clearing bottlenecks beyond our immediate control.
          </p>

          <h3 className="font-display text-lg sm:text-xl text-primary-dark font-normal pt-2 sm:pt-4">
            4. Sourcing Authenticity
          </h3>
          <p>
            C&amp;C Luxury guarantees the 100% authenticity of all brand products, wines, Diffusers, and accessory items included within our hampers. We procure items directly from registered distributors or original fashion houses.
          </p>
        </div>

      </div>
    </div>
  );
}
