import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="space-y-5 sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="font-display text-xl tracking-[0.2em] uppercase text-white"
            >
              C&amp;C LUXURY
            </Link>
            <p className="font-serif-body text-[13px] text-white/60 leading-relaxed">
              Epitomizing the art of bespoke gifting and unparalleled concierge
              services. Meticulously crafting opulent experiences and lavish
              tokens of affection.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://www.instagram.com/cncluxury"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/20 flex items-center justify-center hover:bg-accent-gold hover:border-accent-gold transition-all duration-300"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href="https://www.facebook.com/cncluxury"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/20 flex items-center justify-center hover:bg-accent-gold hover:border-accent-gold transition-all duration-300"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href="https://wa.me/2349082850681"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/20 flex items-center justify-center hover:bg-accent-gold hover:border-accent-gold transition-all duration-300"
                aria-label="WhatsApp"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* The House Links */}
          <div className="space-y-4">
            <h4 className="font-sans-alt text-xs font-semibold tracking-[0.25em] uppercase text-white border-b border-white/10 pb-2">
              The House
            </h4>
            <ul className="space-y-2.5 text-[12px] font-sans-alt tracking-[0.15em] uppercase text-white/60">
              <li>
                <Link
                  href="/collections"
                  className="hover:text-accent-gold transition-colors duration-300"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/crate-builder"
                  className="hover:text-accent-gold transition-colors duration-300"
                >
                  Crate Builder
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent-gold transition-colors duration-300"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent-gold transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent-gold transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-accent-gold transition-colors duration-300"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies & Info */}
          <div className="space-y-4">
            <h4 className="font-sans-alt text-xs font-semibold tracking-[0.25em] uppercase text-white border-b border-white/10 pb-2">
              Client Policies
            </h4>
            <ul className="space-y-2.5 text-[12px] font-sans-alt tracking-[0.15em] uppercase text-white/60">
              <li>
                <Link
                  href="/shipping"
                  className="hover:text-accent-gold transition-colors duration-300"
                >
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="hover:text-accent-gold transition-colors duration-300"
                >
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-accent-gold transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-accent-gold transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter Column */}
          <div className="space-y-4">
            <h4 className="font-sans-alt text-xs font-semibold tracking-[0.25em] uppercase text-white border-b border-white/10 pb-2">
              Ikoyi Showroom
            </h4>
            <ul className="space-y-3 text-[13px] font-sans-ui text-white/60">
              <li className="flex items-start space-x-3">
                <MapPin
                  size={16}
                  className="text-accent-gold shrink-0 mt-0.5"
                />
                <span>
                  14a Second Avenue, Opposite Osborne Foreshore Estate, Ikoyi,
                  Lagos
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={15} className="text-accent-gold shrink-0" />
                <a
                  href="tel:+2349082850681"
                  className="hover:text-accent-gold transition-colors duration-300"
                >
                  +234 908 285 0681
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={15} className="text-accent-gold shrink-0" />
                <a
                  href="mailto:orders@cncluxury.com"
                  className="hover:text-accent-gold transition-colors duration-300"
                >
                  orders@cncluxury.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock
                  size={16}
                  className="text-accent-gold shrink-0 mt-0.5"
                />
                <div className="text-[12px]">
                  <p>Mon – Sat: 10:00 AM – 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="pt-4 space-y-3">
              <p className="font-serif-body text-[12px] text-white/50 leading-relaxed">
                Subscribe for private invitations to seasonal collections.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="YOUR EMAIL"
                  className="flex-1 bg-white/5 border border-white/15 px-3 py-2.5 text-[10px] font-sans-alt tracking-[0.1em] placeholder-white/30 text-white focus:outline-none focus:border-accent-gold rounded-none min-w-0"
                />
                <button
                  type="submit"
                  className="bg-accent-gold hover:bg-white hover:text-primary-dark text-white font-sans-alt text-[9px] font-semibold tracking-[0.15em] uppercase px-4 py-2.5 transition-colors duration-500 rounded-none shrink-0"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] font-sans-alt tracking-[0.15em] uppercase text-white/40 gap-4">
          <p>&copy; {currentYear} C&amp;C LUXURY. ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="/privacy" className="hover:text-accent-gold transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-accent-gold transition-colors">
              Terms
            </Link>
            <Link href="/shipping" className="hover:text-accent-gold transition-colors">
              Shipping
            </Link>
            <Link href="/returns" className="hover:text-accent-gold transition-colors">
              Returns
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
