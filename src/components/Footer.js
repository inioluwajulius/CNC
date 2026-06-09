import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-sand border-t border-bg-sand text-primary-dark pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="space-y-6">
          <Link href="/" className="font-display text-xl tracking-[0.2em] uppercase text-primary-dark">
            C&amp;C LUXURY
          </Link>
          <p className="font-serif-body text-[13px] text-muted-brown leading-relaxed">
            Epitomizing the art of bespoke gifting and unparalleled concierge services. Meticulously crafting opulent experiences and lavish tokens of affection.
          </p>
        </div>

        {/* Links Column */}
        <div className="space-y-4">
          <h4 className="font-sans-alt text-xs font-semibold tracking-[0.25em] uppercase text-primary-dark border-b border-muted-brown/10 pb-2">
            The House
          </h4>
          <ul className="space-y-2 text-[12px] font-sans-alt tracking-[0.15em] uppercase text-muted-brown">
            <li>
              <Link href="/collections" className="hover:text-accent-gold transition-colors duration-300">
                Collections
              </Link>
            </li>
            <li>
              <Link href="/crate-builder" className="hover:text-accent-gold transition-colors duration-300">
                Crate Builder
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent-gold transition-colors duration-300">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-accent-gold transition-colors duration-300">
                Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Hours Column */}
        <div className="space-y-4">
          <h4 className="font-sans-alt text-xs font-semibold tracking-[0.25em] uppercase text-primary-dark border-b border-muted-brown/10 pb-2">
            Ikoyi Showroom
          </h4>
          <ul className="space-y-3 text-[13px] font-sans-ui text-muted-brown">
            <li className="flex items-start space-x-3">
              <MapPin size={16} className="text-accent-gold shrink-0 mt-0.5" />
              <span>14a Second Avenue, Opposite Osborne Foreshore Estate, Ikoyi, Lagos, Nigeria</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={15} className="text-accent-gold shrink-0" />
              <a href="tel:+2349082850681" className="hover:text-accent-gold transition-colors duration-300">
                +234 908 285 0681
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={15} className="text-accent-gold shrink-0" />
              <a href="mailto:orders@cncluxury.com" className="hover:text-accent-gold transition-colors duration-300">
                orders@cncluxury.com
              </a>
            </li>
            <li className="flex items-start space-x-3">
              <Clock size={16} className="text-accent-gold shrink-0 mt-0.5" />
              <div className="text-[12px]">
                <p>Mon – Sat: 10:00 AM – 6:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="space-y-4">
          <h4 className="font-sans-alt text-xs font-semibold tracking-[0.25em] uppercase text-primary-dark border-b border-muted-brown/10 pb-2">
            The Dialogue
          </h4>
          <p className="font-serif-body text-[13px] text-muted-brown leading-relaxed">
            Subscribe to receive private invitations to seasonal collections and custom sourcing experiences.
          </p>
          <form className="mt-4 flex flex-col space-y-2">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="bg-white border border-muted-brown/20 px-4 py-3 text-[11px] font-sans-alt tracking-[0.1em] placeholder-muted-brown/60 text-primary-dark focus:outline-none focus:border-accent-gold rounded-none"
            />
            <button
              type="submit"
              className="bg-primary-dark hover:bg-accent-gold text-white font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase py-3 transition-colors duration-500 rounded-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-muted-brown/10 flex flex-col md:flex-row justify-between items-center text-[11px] font-sans-alt tracking-[0.15em] uppercase text-muted-brown/80">
        <p>&copy; {currentYear} C&amp;C LUXURY. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-accent-gold">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-accent-gold">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
