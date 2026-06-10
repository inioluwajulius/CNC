"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, X } from "lucide-react";
import Link from "next/link";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cnc_cookie_consent");
    if (!consent) {
      // Small delay for a less intrusive appearance
      const timer = setTimeout(() => setIsVisible(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cnc_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDismiss = () => {
    localStorage.setItem("cnc_cookie_consent", "dismissed");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-0 left-0 right-0 z-[200] cookie-banner p-4 sm:p-6"
        >
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start space-x-3 flex-1">
              <ShieldCheck
                size={20}
                className="text-accent-gold shrink-0 mt-0.5"
              />
              <div className="space-y-1">
                <p className="font-sans-alt text-[11px] sm:text-[12px] text-white/90 leading-relaxed">
                  We use localized browser storage to manage your shopping cart
                  and preferences. No third-party tracking pixels are loaded on
                  this storefront.{" "}
                  <Link
                    href="/privacy"
                    className="text-accent-gold underline hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
              <button
                onClick={handleAccept}
                className="flex-1 sm:flex-none bg-accent-gold hover:bg-white hover:text-primary-dark text-white font-sans-alt text-[9px] font-semibold tracking-[0.2em] uppercase px-5 py-2.5 transition-colors duration-300 rounded-none"
              >
                Accept
              </button>
              <button
                onClick={handleDismiss}
                className="text-white/50 hover:text-white transition-colors p-1"
                aria-label="Dismiss"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
