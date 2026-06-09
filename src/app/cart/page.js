"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Trash2, ShoppingBag, ArrowRight, MessageSquare, ShieldCheck } from "lucide-react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "The Wedding Luxury Crate",
      price: 250000,
      image: "/luxury_hamper_hero.png",
      quantity: 1,
      options: "Monogram: None | Inside: Premium Sourced Champagnes & Linens"
    }
  ]);

  const updateQuantity = (id, amount) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const nextQty = item.quantity + amount;
        return { ...item, quantity: nextQty < 1 ? 1 : nextQty };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
  const VAT = Math.round(subtotal * 0.075); // 7.5% VAT standard in Nigeria
  const total = subtotal + VAT;

  const handleWhatsAppCheckout = () => {
    let msg = `*NEW ORDER FROM LUXURY WEB CART:*%0A%0A`;
    cartItems.forEach((item, idx) => {
      msg += `${idx + 1}. *${item.name}* x${item.quantity} (₦${(item.price * item.quantity).toLocaleString()})%0A`;
      msg += `   _Details:_ ${item.options}%0A%0A`;
    });
    msg += `*Subtotal:* ₦${subtotal.toLocaleString()}%0A`;
    msg += `*VAT (7.5%):* ₦${VAT.toLocaleString()}%0A`;
    msg += `*Estimated Total:* ₦${total.toLocaleString()}%0A%0A`;
    msg += `Please initiate invoicing and transport scheduling. Thank you.`;

    const whatsappNumber = "2349082850681";
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, "_blank");
  };

  return (
    <div className="w-full min-h-screen bg-bg-luxury pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Title */}
        <div className="text-center mb-16 space-y-4">
          <span className="font-sans-alt text-[10px] tracking-[0.4em] uppercase text-accent-gold block">
            Shopping Cart
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-primary-dark font-normal tracking-wide uppercase">
            Your Selection
          </h1>
          <div className="w-16 h-[1px] bg-accent-gold mx-auto mt-4" />
        </div>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Cart Items List */}
            <div className="lg:col-span-8 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 border border-bg-sand bg-white gap-6"
                >
                  <div className="flex items-center space-x-6">
                    {/* Item Image */}
                    <div className="relative w-20 h-20 bg-bg-sand shrink-0 border border-bg-sand/30">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Item Text details */}
                    <div className="space-y-1">
                      <h4 className="font-display text-lg text-primary-dark font-normal">
                        {item.name}
                      </h4>
                      <p className="font-serif-body text-[12px] text-muted-brown italic">
                        {item.options}
                      </p>
                      <span className="font-sans-ui text-sm font-semibold tracking-wider text-primary-dark block pt-1">
                        ₦{item.price.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Quantity and Actions */}
                  <div className="flex items-center space-x-8 w-full sm:w-auto justify-between sm:justify-start">
                    <div className="flex items-center space-x-3 bg-bg-sand p-1">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 hover:text-accent-gold transition-colors text-primary-dark"
                      >
                        -
                      </button>
                      <span className="font-sans-ui text-xs font-semibold w-4 text-center text-primary-dark">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 hover:text-accent-gold transition-colors text-primary-dark"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-primary-dark hover:text-red-700 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                </div>
              ))}
            </div>

            {/* Right Column: Pricing & Checkout summary */}
            <div className="lg:col-span-4 bg-bg-sand/40 border border-bg-sand p-8 space-y-6 shadow-sm">
              <h3 className="font-display text-xl text-primary-dark font-normal border-b border-muted-brown/10 pb-2">
                Order Summary
              </h3>

              <div className="space-y-3 text-[13px] font-sans-ui text-muted-brown">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-semibold text-primary-dark">₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>VAT (7.5%):</span>
                  <span className="font-semibold text-primary-dark">₦{VAT.toLocaleString()}</span>
                </div>
                <div className="border-t border-muted-brown/10 pt-3 flex justify-between font-sans-alt text-[15px] font-bold text-primary-dark tracking-wider">
                  <span>TOTAL COST:</span>
                  <span>₦{total.toLocaleString()}</span>
                </div>
              </div>

              {/* Security Sourcing Note */}
              <div className="flex items-start space-x-2.5 bg-white p-4 border border-bg-sand/60">
                <ShieldCheck className="text-accent-gold shrink-0 mt-0.5" size={16} />
                <p className="font-serif-body text-[11px] text-muted-brown leading-relaxed">
                  C&amp;C order values include standard concierge vetting, secure Ikoyi transit, and hand-delivery scheduling details.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full flex justify-center items-center space-x-2 bg-emerald-700 hover:bg-emerald-800 text-white font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase py-4 transition-colors duration-500 rounded-none shadow"
                >
                  <MessageSquare size={14} />
                  <span>Send order to WhatsApp</span>
                </button>
                <button
                  onClick={() => alert("Invoice details generated. An email invoice has been sent to client credentials.")}
                  className="w-full bg-primary-dark hover:bg-accent-gold text-white font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase py-4 transition-colors duration-500 rounded-none shadow"
                >
                  Checkout Online
                </button>
              </div>
            </div>

          </div>
        ) : (
          <div className="text-center py-24 border border-dashed border-muted-brown/20 space-y-4">
            <ShoppingBag size={48} className="mx-auto text-muted-brown/30" />
            <h3 className="font-display text-xl text-primary-dark font-normal">
              Your Cart is Empty
            </h3>
            <p className="font-serif-body text-[14px] text-muted-brown max-w-sm mx-auto leading-relaxed">
              Curate a bespoke gift box or view our signature catalog of hampers.
            </p>
            <div className="pt-4 flex gap-4 justify-center">
              <Link
                href="/crate-builder"
                className="bg-accent-gold hover:bg-primary-dark text-white px-6 py-3 font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300"
              >
                Crate Builder
              </Link>
              <Link
                href="/collections"
                className="bg-primary-dark hover:bg-accent-gold text-white px-6 py-3 font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300"
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
