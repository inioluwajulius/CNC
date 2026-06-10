"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronDown, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "Ordering & Customization",
      items: [
        {
          q: "How do I place a bespoke order?",
          a: "You can use our interactive Crate Builder to design your custom hamper online, then submit your order directly via our WhatsApp concierge or checkout online. Alternatively, visit our Ikoyi showroom for a personalized consultation.",
        },
        {
          q: "Can I customize the items inside my hamper?",
          a: "Absolutely. Our Crate Builder allows you to select your container base, choose from our curated catalogue of gourmet goods, fragrances, and keepsakes, add a monogram, and include a handwritten greeting card. For items not in our catalogue, our concierge team can source specific products upon request.",
        },
        {
          q: "What is the monogramming process?",
          a: "We use traditional metal heat dies hot-pressed with 24k gold leaf foil onto the center cover face of your container. Monograms are limited to 3 characters (initials). A flat fee of ₦10,000 applies for this service.",
        },
        {
          q: "Can I order in bulk for corporate events?",
          a: "Yes. We specialize in corporate bulk orders and offer volume pricing for 10+ hampers. Please contact our concierge team with your requirements and we will provide a custom quote within 24 hours.",
        },
      ],
    },
    {
      category: "Payment & Pricing",
      items: [
        {
          q: "What payment methods do you accept?",
          a: "We accept Visa, Mastercard, bank transfers (NGN), and mobile payments. All prices are displayed in Nigerian Naira (₦). VAT of 7.5% is applied at checkout as per Nigerian tax law.",
        },
        {
          q: "Are prices negotiable for large orders?",
          a: "For bulk corporate orders (10+ units), we offer tiered pricing and can provide a custom quotation. Please contact our concierge team with your specific requirements.",
        },
        {
          q: "Do you require a deposit for concierge sourcing?",
          a: "Yes. For rare or limited-edition items procured by our concierge, we require a non-refundable retainer fee of 50% before initiating sourcing. Final invoicing reflects exact courier and customs surcharges.",
        },
      ],
    },
    {
      category: "Delivery & Shipping",
      items: [
        {
          q: "How long does delivery take within Lagos?",
          a: "Standard Lagos delivery takes 2–5 business days from order confirmation. Express same-day delivery is available for orders placed before 11:00 AM on weekdays within Ikoyi, VI, and Lekki Phase 1 (₦25,000 surcharge).",
        },
        {
          q: "Do you deliver outside Lagos?",
          a: "Yes. We offer nationwide dispatch to all major Nigerian cities including Abuja, Port Harcourt, Ibadan, Enugu, and Calabar. Nationwide delivery takes 5–10 business days.",
        },
        {
          q: "Is delivery free?",
          a: "Complimentary delivery within Lagos is available on all orders above ₦200,000. Orders below this threshold incur a flat delivery fee of ₦15,000.",
        },
      ],
    },
    {
      category: "Returns & Refunds",
      items: [
        {
          q: "Can I return a bespoke hamper?",
          a: "Since our hampers are custom-crafted and personalized, all bespoke orders are final once assembly has begun. However, if your hamper arrives damaged, we will replace affected items at no cost. Please report issues within 24 hours of delivery.",
        },
        {
          q: "Can I cancel my order?",
          a: "Orders may be cancelled within 2 hours of placement, provided assembly has not commenced. After this window, the order is considered final.",
        },
      ],
    },
  ];

  let globalIdx = 0;

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
            Client Support
          </span>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-normal uppercase tracking-wide">
            Frequently Asked Questions
          </h1>
        </div>

        {/* FAQ Accordion Groups */}
        <div className="space-y-8 sm:space-y-10">
          {faqs.map((group) => (
            <div key={group.category} className="space-y-3 sm:space-y-4">
              <h3 className="font-sans-alt text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-accent-gold border-b border-bg-sand pb-2">
                {group.category}
              </h3>

              <div className="space-y-2">
                {group.items.map((faq) => {
                  const idx = globalIdx++;
                  const isOpen = openIndex === idx;

                  return (
                    <div
                      key={idx}
                      className="border border-bg-sand bg-white overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        className="w-full flex justify-between items-center p-4 sm:p-5 text-left transition-colors hover:bg-bg-sand/30"
                      >
                        <span className="font-sans-alt text-[12px] sm:text-[13px] font-semibold tracking-[0.05em] text-primary-dark pr-4">
                          {faq.q}
                        </span>
                        <ChevronDown
                          size={16}
                          className={`text-accent-gold shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 border-t border-bg-sand/60">
                              <p className="font-serif-body text-[13px] sm:text-[14px] text-muted-brown leading-relaxed pt-3 sm:pt-4">
                                {faq.a}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="text-center bg-bg-sand p-6 sm:p-10 mt-8 sm:mt-12 space-y-4">
          <h3 className="font-display text-xl sm:text-2xl text-primary-dark font-normal">
            Still Have Questions?
          </h3>
          <p className="font-serif-body text-[13px] sm:text-[14px] text-muted-brown max-w-md mx-auto">
            Our concierge team is available Monday – Saturday, 10 AM – 6 PM to
            assist with any inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2">
            <Link
              href="/contact"
              className="bg-primary-dark hover:bg-accent-gold text-white px-6 py-3 font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors text-center"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/2349082850681"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 border border-primary-dark hover:bg-primary-dark hover:text-white text-primary-dark px-6 py-3 font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase transition-all"
            >
              <MessageSquare size={13} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
