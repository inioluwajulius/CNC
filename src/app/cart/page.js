"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Trash2,
  ShoppingBag,
  ArrowRight,
  ArrowLeft,
  MessageSquare,
  ShieldCheck,
  Truck,
  CreditCard,
  Lock,
} from "lucide-react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "The Wedding Luxury Crate",
      price: 250000,
      image: "/luxury_hamper_hero.png",
      quantity: 1,
      options:
        "Monogram: None | Inside: Premium Sourced Champagnes & Linens",
    },
  ]);

  const updateQuantity = (id, amount) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          const nextQty = item.quantity + amount;
          return { ...item, quantity: nextQty < 1 ? 1 : nextQty };
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  const VAT = Math.round(subtotal * 0.075);
  const shippingFee = subtotal >= 200000 ? 0 : 15000;
  const total = subtotal + VAT + shippingFee;

  const handleWhatsAppCheckout = () => {
    let msg = `*NEW ORDER FROM LUXURY WEB CART:*%0A%0A`;
    cartItems.forEach((item, idx) => {
      msg += `${idx + 1}. *${item.name}* x${item.quantity} (₦${(item.price * item.quantity).toLocaleString()})%0A`;
      msg += `   _Details:_ ${item.options}%0A%0A`;
    });
    msg += `*Subtotal:* ₦${subtotal.toLocaleString()}%0A`;
    msg += `*VAT (7.5%):* ₦${VAT.toLocaleString()}%0A`;
    msg += `*Shipping:* ${shippingFee === 0 ? "Complimentary" : `₦${shippingFee.toLocaleString()}`}%0A`;
    msg += `*Estimated Total:* ₦${total.toLocaleString()}%0A%0A`;
    msg += `Please initiate invoicing and transport scheduling. Thank you.`;

    const whatsappNumber = "2349082850681";
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, "_blank");
  };

  return (
    <div className="w-full min-h-screen bg-bg-luxury pt-8 sm:pt-12 pb-20 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Header Title */}
        <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <span className="font-sans-alt text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-accent-gold block">
            Shopping Cart
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary-dark font-normal tracking-wide uppercase hero-title-responsive">
            Your Selection
          </h1>
          <div className="w-16 h-[1px] bg-accent-gold mx-auto mt-4" />
        </div>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
            {/* Left Column: Cart Items List */}
            <div className="lg:col-span-8 space-y-4 sm:space-y-6">
              {/* Continue Shopping Link */}
              <Link
                href="/collections"
                className="inline-flex items-center space-x-2 text-primary-dark hover:text-accent-gold transition-colors font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase mb-2"
              >
                <ArrowLeft size={12} />
                <span>Continue Shopping</span>
              </Link>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-6 border border-bg-sand bg-white gap-4 sm:gap-6"
                >
                  <div className="flex items-center space-x-4 sm:space-x-6 w-full sm:w-auto">
                    {/* Item Image */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-bg-sand shrink-0 border border-bg-sand/30">
                      <Image
                        src={item.image}
                        alt={`${item.name} in cart`}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    {/* Item Text details */}
                    <div className="space-y-1 flex-1 min-w-0">
                      <h4 className="font-display text-base sm:text-lg text-primary-dark font-normal truncate">
                        {item.name}
                      </h4>
                      <p className="font-serif-body text-[11px] sm:text-[12px] text-muted-brown italic line-clamp-1">
                        {item.options}
                      </p>
                      <span className="font-sans-ui text-sm font-semibold tracking-wider text-primary-dark block pt-1">
                        ₦{item.price.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Quantity and Actions */}
                  <div className="flex items-center space-x-6 sm:space-x-8 w-full sm:w-auto justify-between sm:justify-start pl-[80px] sm:pl-0">
                    <div className="flex items-center space-x-3 bg-bg-sand p-1">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1.5 hover:text-accent-gold transition-colors text-primary-dark min-w-[28px] min-h-[28px] flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="font-sans-ui text-xs font-semibold w-5 text-center text-primary-dark">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1.5 hover:text-accent-gold transition-colors text-primary-dark min-w-[28px] min-h-[28px] flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-primary-dark hover:text-red-700 transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Order Summary */}
            <div className="lg:col-span-4 bg-bg-sand/40 border border-bg-sand p-6 sm:p-8 space-y-5 sm:space-y-6 shadow-sm lg:sticky lg:top-[140px]">
              <h3 className="font-display text-lg sm:text-xl text-primary-dark font-normal border-b border-muted-brown/10 pb-2">
                Order Summary
              </h3>

              <div className="space-y-2.5 sm:space-y-3 text-[12px] sm:text-[13px] font-sans-ui text-muted-brown">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-semibold text-primary-dark">
                    ₦{subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>VAT (7.5%):</span>
                  <span className="font-semibold text-primary-dark">
                    ₦{VAT.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center gap-1.5">
                    <Truck size={13} className="text-accent-gold" />
                    Shipping (Lagos):
                  </span>
                  <span
                    className={`font-semibold ${shippingFee === 0 ? "text-accent-emerald" : "text-primary-dark"}`}
                  >
                    {shippingFee === 0
                      ? "Complimentary"
                      : `₦${shippingFee.toLocaleString()}`}
                  </span>
                </div>
                {shippingFee > 0 && (
                  <p className="text-[10px] sm:text-[11px] text-accent-gold italic">
                    Add ₦{(200000 - subtotal).toLocaleString()} more for free
                    Lagos delivery
                  </p>
                )}
                <div className="border-t border-muted-brown/10 pt-3 flex justify-between font-sans-alt text-[14px] sm:text-[15px] font-bold text-primary-dark tracking-wider">
                  <span>TOTAL COST:</span>
                  <span>₦{total.toLocaleString()}</span>
                </div>
              </div>

              {/* Security Note */}
              <div className="flex items-start space-x-2.5 bg-white p-3 sm:p-4 border border-bg-sand/60">
                <ShieldCheck
                  className="text-accent-gold shrink-0 mt-0.5"
                  size={16}
                />
                <p className="font-serif-body text-[10px] sm:text-[11px] text-muted-brown leading-relaxed">
                  C&amp;C order values include standard concierge vetting,
                  secure Ikoyi transit, and hand-delivery scheduling.
                </p>
              </div>

              {/* Action Buttons — Checkout FIRST, WhatsApp second */}
              <div className="space-y-3">
                <button
                  onClick={() =>
                    alert(
                      "Invoice details generated. An email invoice has been sent to client credentials."
                    )
                  }
                  className="w-full flex justify-center items-center space-x-2 bg-primary-dark hover:bg-accent-gold text-white font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase py-3.5 sm:py-4 transition-colors duration-500 rounded-none shadow"
                >
                  <Lock size={13} />
                  <span>Secure Checkout</span>
                </button>
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full flex justify-center items-center space-x-2 bg-white border border-primary-dark/20 hover:border-accent-emerald hover:bg-accent-emerald hover:text-white text-primary-dark font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase py-3 sm:py-3.5 transition-all duration-500 rounded-none"
                >
                  <MessageSquare size={13} />
                  <span>Or Send to WhatsApp</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-2 pt-2 sm:pt-3">
                <div className="trust-badge justify-center text-center flex-col gap-1 py-2 sm:py-3">
                  <CreditCard
                    size={16}
                    className="text-accent-gold mx-auto"
                  />
                  <span className="text-[8px] sm:text-[9px]">
                    Visa & Mastercard
                  </span>
                </div>
                <div className="trust-badge justify-center text-center flex-col gap-1 py-2 sm:py-3">
                  <ShieldCheck
                    size={16}
                    className="text-accent-gold mx-auto"
                  />
                  <span className="text-[8px] sm:text-[9px]">
                    Secure & Encrypted
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 sm:py-24 border border-dashed border-muted-brown/20 space-y-4">
            <ShoppingBag
              size={40}
              className="mx-auto text-muted-brown/30"
            />
            <h3 className="font-display text-lg sm:text-xl text-primary-dark font-normal">
              Your Cart is Empty
            </h3>
            <p className="font-serif-body text-[13px] sm:text-[14px] text-muted-brown max-w-sm mx-auto leading-relaxed">
              Curate a bespoke gift box or view our signature catalog of
              hampers.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/crate-builder"
                className="bg-accent-gold hover:bg-primary-dark text-white px-6 py-3 font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300 text-center"
              >
                Crate Builder
              </Link>
              <Link
                href="/collections"
                className="bg-primary-dark hover:bg-accent-gold text-white px-6 py-3 font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300 text-center"
              >
                Collections
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
