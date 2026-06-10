"use client";

import Link from "next/link";
import { ArrowLeft, AlertTriangle, RefreshCw, Package, MessageSquare } from "lucide-react";

export default function ReturnsPolicy() {
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
            Client Assurance
          </span>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-normal uppercase tracking-wide">
            Returns &amp; Refunds Policy
          </h1>
        </div>

        {/* Important Notice */}
        <div className="bg-bg-sand p-4 sm:p-6 border-l-4 border-accent-gold">
          <div className="flex items-start space-x-3">
            <AlertTriangle size={20} className="text-accent-gold shrink-0 mt-0.5" />
            <div>
              <h4 className="font-sans-alt text-[10px] sm:text-[11px] font-bold tracking-[0.1em] uppercase text-primary-dark mb-1">
                Important: Bespoke Orders Are Final
              </h4>
              <p className="font-serif-body text-[13px] sm:text-[14px] text-muted-brown leading-relaxed">
                Since our hampers are custom-crafted and personalized — including hot-stamped gold foil monogramming — all bespoke orders are final once materials have been stamped or spirits sourced.
              </p>
            </div>
          </div>
        </div>

        {/* Policy Content */}
        <div className="font-serif-body text-[14px] sm:text-[15px] text-muted-brown leading-relaxed space-y-6">
          <h3 className="font-display text-lg sm:text-xl text-primary-dark font-normal pt-4">
            1. Non-Returnable Items
          </h3>
          <p>
            The following items cannot be returned or exchanged due to their bespoke nature:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-4">
            <li>Monogrammed or personalized containers</li>
            <li>Opened food, beverages, and perishable goods</li>
            <li>Custom calligraphed greeting cards</li>
            <li>Items sourced internationally on client request</li>
          </ul>

          <h3 className="font-display text-lg sm:text-xl text-primary-dark font-normal pt-4">
            2. Damaged or Incorrect Items
          </h3>
          <p>
            If your hamper arrives with damaged items or incorrect contents, we will make it right. Please notify us within 24 hours of delivery by contacting our concierge desk with:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-4">
            <li>Your order confirmation number</li>
            <li>Photographs of the damaged item(s)</li>
            <li>A brief description of the issue</li>
          </ul>
          <p>
            Upon verification, we will replace the affected item(s) at no additional cost, or issue a partial credit toward your next order.
          </p>

          <h3 className="font-display text-lg sm:text-xl text-primary-dark font-normal pt-4">
            3. Cancellation Policy
          </h3>
          <p>
            Orders may be cancelled within 2 hours of placement, provided assembly has not begun. Once assembly or sourcing has commenced, the order becomes final. Cancellations are processed via our WhatsApp concierge line.
          </p>

          <h3 className="font-display text-lg sm:text-xl text-primary-dark font-normal pt-4">
            4. Exchange Requests
          </h3>
          <p>
            In limited cases, we can accommodate exchanges of sealed, unopened non-personalized goods within 48 hours of delivery. A restocking fee of 15% of the item value applies. Please contact our concierge team to initiate an exchange request.
          </p>

          <h3 className="font-display text-lg sm:text-xl text-primary-dark font-normal pt-4">
            5. How to Reach Us
          </h3>
          <p>
            For all return, refund, or exchange inquiries, please contact:
          </p>
          <div className="bg-bg-sand p-4 sm:p-6 space-y-2 text-[13px] sm:text-[14px]">
            <p><strong>WhatsApp:</strong> <a href="https://wa.me/2349082850681" className="text-accent-gold hover:underline">+234 908 285 0681</a></p>
            <p><strong>Email:</strong> <a href="mailto:orders@cncluxury.com" className="text-accent-gold hover:underline">orders@cncluxury.com</a></p>
            <p><strong>Hours:</strong> Monday – Saturday, 10:00 AM – 6:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
