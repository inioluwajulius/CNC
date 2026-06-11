"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  ShoppingBag,
  Send,
  Plus,
  Minus,
  MessageSquare
} from "lucide-react";

export default function CrateBuilder() {
  // Wizard States
  const [step, setStep] = useState(1);
  const [selectedCrate, setSelectedCrate] = useState(null);
  const [monogram, setMonogram] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardNote, setCardNote] = useState("");

  // Catalog Constants
  const crates = [
    {
      id: "wood-crate",
      name: "The Artisan Wood Crate",
      price: 30000,
      image: "/wood_crate.png",
      desc: "Hand-crafted premium cedar wood crate with slide cover and copper locks."
    },
    {
      id: "velvet-box",
      name: "The Velvet Keepsake Box",
      price: 25000,
      image: "/velvet_box.png",
      desc: "Plush emerald green velvet-clad box with gold foil emblem and satin interior."
    },
    {
      id: "leather-trunk",
      name: "The Heirloom Leather Trunk",
      price: 70000,
      image: "/leather_trunk.png",
      desc: "Sturdy vintage leather trunk with brass handles, ideal for executive presentations."
    }
  ];

  const items = [
    { id: 1, name: "Premium French Champagne", price: 75000, category: "Gourmet" },
    { id: 2, name: "Artisan Belgian Chocolates", price: 25000, category: "Gourmet" },
    { id: 3, name: "Specialty Sourced Coffee Blend", price: 18000, category: "Gourmet" },
    { id: 4, name: "Organic Wildflower Honey", price: 12000, category: "Gourmet" },
    { id: 5, name: "Scented Amber & Wood Soy Candle", price: 20000, category: "Fragrances" },
    { id: 6, name: "Premium French Oud Perfume (50ml)", price: 85000, category: "Fragrances" },
    { id: 7, name: "Lavender & Bergamot Reed Diffuser", price: 32000, category: "Fragrances" },
    { id: 8, name: "Rose Water Hydrating Facial Mist", price: 15000, category: "Fragrances" },
    { id: 9, name: "Crystal Champagne Flutes (Pair)", price: 45000, category: "Keepsakes" },
    { id: 10, name: "Monogrammed Linen Napkins (Set)", price: 30000, category: "Keepsakes" },
    { id: 11, name: "Handcrafted Leather Journal", price: 28000, category: "Keepsakes" },
    { id: 12, name: "Gold-plated Luxury Rollerball Pen", price: 22000, category: "Keepsakes" }
  ];

  const cards = [
    { id: "wedding", name: "Wedding & Union", theme: "Matrimonial gold leaf cover" },
    { id: "birthday", name: "Celebration of Life", theme: "Embossed celebratory pattern" },
    { id: "corporate", name: "Executive Gratitude", theme: "Minimalist dark bronze emblem" },
    { id: "sympathy", name: "Comfort & Solace", theme: "Quiet linen textured ivory" }
  ];

  // Helper Calculations
  const crateCost = selectedCrate ? selectedCrate.price : 0;
  const itemsCost = selectedItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
  const monogramCost = monogram.length > 0 ? 10000 : 0;
  const totalCost = crateCost + itemsCost + monogramCost;

  const handleAddItem = (item) => {
    const existing = selectedItems.find((i) => i.id === item.id);
    if (existing) {
      setSelectedItems(selectedItems.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
    } else {
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveItem = (item) => {
    const existing = selectedItems.find((i) => i.id === item.id);
    if (!existing) return;
    if (existing.quantity === 1) {
      setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
    } else {
      setSelectedItems(selectedItems.map((i) => i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i));
    }
  };

  const getItemQuantity = (itemId) => {
    const item = selectedItems.find((i) => i.id === itemId);
    return item ? item.quantity : 0;
  };

  // Compile WhatsApp Concierge Handoff Message
  const handleConciergeHandoff = () => {
    if (!selectedCrate) return;

    let msg = `*NEW BESPOKE CRATE BUILD:*%0A%0A`;
    msg += `*Container:* ${selectedCrate.name} (₦${selectedCrate.price.toLocaleString()})%0A`;
    msg += `*Monogram Initials:* ${monogram ? monogram.toUpperCase() : "None"} ${monogram ? "(+₦10,000)" : ""}%0A%0A`;
    msg += `*Selected Sourced Items:*%0A`;
    
    selectedItems.forEach((i, idx) => {
      msg += `${idx + 1}. ${i.name} x${i.quantity} (₦${(i.price * i.quantity).toLocaleString()})%0A`;
    });
    
    msg += `%0A*Greeting Card Theme:* ${selectedCard ? selectedCard.name : "None"}%0A`;
    msg += `*Card Inscription:* "${cardNote ? cardNote : "None"}"%0A%0A`;
    msg += `*Estimated Subtotal:* ₦${totalCost.toLocaleString()}%0A%0A`;
    msg += `Please assemble this bespoke crate for me and contact me for invoice validation. Thank you.`;

    const whatsappNumber = "2349082850681";
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, "_blank");
  };

  return (
    <div className="w-full min-h-screen bg-bg-luxury pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Live Visual Preview Canvas (Stays sticky on desktop) */}
        <div className="lg:col-span-5 lg:sticky lg:top-[120px] h-fit bg-bg-sand p-8 border border-bg-sand flex flex-col justify-between space-y-8 shadow-sm">
          <div>
            <h3 className="font-sans-alt text-[10px] font-semibold tracking-[0.3em] uppercase text-accent-gold mb-2">
              Virtual Crate Preview
            </h3>
            <div className="w-10 h-[1px] bg-accent-gold mb-6" />
            
            {/* Visual Container Sandbox */}
            <div className="relative w-full h-[280px] bg-white border border-bg-sand/60 flex items-center justify-center overflow-hidden">
              {selectedCrate ? (
                <div className="relative w-full h-full p-4 flex flex-col justify-center items-center">
                  <Image
                    src={selectedCrate.image}
                    alt={selectedCrate.name}
                    fill
                    className="object-contain p-6"
                  />
                  {/* Monogram Overlay Simulation */}
                  {monogram && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.9 }}
                      className="absolute z-10 bottom-1/4 bg-primary-dark/10 backdrop-blur-[1px] border border-accent-gold/40 px-3 py-1 font-display text-lg tracking-[0.2em] font-normal text-primary-dark/80"
                    >
                      {monogram.toUpperCase()}
                    </motion.div>
                  )}
                </div>
              ) : (
                <div className="text-center p-6 space-y-2">
                  <ShoppingBag size={32} className="mx-auto text-muted-brown/40" />
                  <p className="font-serif-body text-[13px] text-muted-brown">
                    Select a container base on the right to start building your custom hamper.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Pricing Ledger */}
          <div className="border-t border-muted-brown/10 pt-6 space-y-4">
            <h4 className="font-sans-alt text-[9px] tracking-[0.2em] uppercase font-semibold text-primary-dark">
              Crate Details Ledger
            </h4>
            <div className="space-y-2 text-[13px] font-sans-ui text-muted-brown">
              <div className="flex justify-between">
                <span>Container Base:</span>
                <span className="font-semibold text-primary-dark">
                  {selectedCrate ? `₦${selectedCrate.price.toLocaleString()}` : "₦0"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Custom Hot-Stamping:</span>
                <span className="font-semibold text-primary-dark">
                  {monogram ? "₦10,000" : "₦0"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Sourced Items ({selectedItems.reduce((a,c) => a + c.quantity, 0)}):</span>
                <span className="font-semibold text-primary-dark">
                  ₦{itemsCost.toLocaleString()}
                </span>
              </div>
              <div className="border-t border-muted-brown/10 pt-2 flex justify-between font-sans-alt text-[14px] font-bold text-primary-dark tracking-wider">
                <span>ESTIMATED TOTAL:</span>
                <span>₦{totalCost.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Step Selection Wizard controls */}
        <div className="lg:col-span-7 flex flex-col space-y-8">
          
          {/* Step Progress Indicators */}
          <div className="flex justify-between items-center border-b border-bg-sand pb-4">
            <div className="space-y-1">
              <span className="font-sans-alt text-[9px] tracking-[0.3em] uppercase text-accent-gold">
                Step {step} of 5
              </span>
              <h1 className="font-display text-2xl text-primary-dark font-normal">
                {step === 1 && "Select Container Base"}
                {step === 2 && "Configure Monogramming"}
                {step === 3 && "Sourced Hamper Ingredients"}
                {step === 4 && "Add Greeting Card Inscription"}
                {step === 5 && "Review & Concierge Order"}
              </h1>
            </div>
            {/* Step Dots */}
            <div className="flex space-x-1.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <div
                  key={s}
                  className={`w-2 h-2 rounded-none transition-colors duration-300 ${
                    s === step ? "bg-accent-gold" : s < step ? "bg-primary-dark" : "bg-bg-sand"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Step Canvas with Animations */}
          <div className="min-h-[380px] bg-white border border-bg-sand/30 p-8">
            <AnimatePresence mode="wait">
              
              {/* STEP 1: CONTAINER BASE */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <p className="font-serif-body text-[14px] text-muted-brown leading-relaxed">
                    Choose an initial base box style. Each container is meticulously lined and prepared with silk wraps before packing.
                  </p>
                  <div className="space-y-4">
                    {crates.map((crate) => (
                      <button
                        key={crate.id}
                        onClick={() => setSelectedCrate(crate)}
                        className={`w-full text-left p-6 border flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all duration-300 rounded-none ${
                          selectedCrate?.id === crate.id
                            ? "border-primary-dark bg-bg-sand/30"
                            : "border-bg-sand hover:border-accent-gold"
                        }`}
                      >
                        <div className="space-y-2 max-w-md">
                          <h4 className="font-display text-lg text-primary-dark font-normal">
                            {crate.name}
                          </h4>
                          <p className="font-serif-body text-[12px] text-muted-brown">
                            {crate.desc}
                          </p>
                        </div>
                        <span className="font-sans-ui text-sm font-semibold tracking-wider text-primary-dark bg-bg-sand px-3 py-1 shrink-0">
                          ₦{crate.price.toLocaleString()}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 2: MONOGRAMMING */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <p className="font-serif-body text-[14px] text-muted-brown leading-relaxed">
                    Personalize your container with a luxury hot-stamped gold foil monogram on the exterior cover. Surcharges apply.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="font-sans-alt text-[10px] tracking-[0.2em] uppercase font-semibold text-primary-dark block mb-2">
                        Initials to Engrave (Max 3 Characters)
                      </label>
                      <input
                        type="text"
                        maxLength={3}
                        value={monogram}
                        onChange={(e) => setMonogram(e.target.value.toUpperCase().replace(/[^A-Z]/g, ""))}
                        placeholder="E.g., OOA"
                        className="w-full bg-white border border-muted-brown/20 px-4 py-3 font-display text-lg tracking-[0.2em] placeholder-muted-brown/40 text-primary-dark focus:outline-none focus:border-accent-gold rounded-none"
                      />
                    </div>
                    
                    <div className="bg-bg-sand p-4 border border-bg-sand/50">
                      <p className="font-serif-body text-[12px] text-muted-brown leading-relaxed">
                        * Monograms are crafted using traditional metal heat dies hot-pressed with 24k gold leaf foil onto the center cover face. Charge: ₦10,000. Leave empty to skip monogramming.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: ITEMS SELECTION */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <p className="font-serif-body text-[14px] text-muted-brown leading-relaxed">
                    Select fine gourmet goods, niche fragrances, and timeless custom keepsakes to compose the crate interior.
                  </p>

                  {/* Sourced Items Grid */}
                  <div className="space-y-8">
                    {["Gourmet", "Fragrances", "Keepsakes"].map((category) => (
                      <div key={category} className="space-y-3">
                        <h4 className="font-sans-alt text-[10px] tracking-[0.25em] uppercase font-semibold text-accent-gold border-b border-bg-sand pb-1">
                          {category}
                        </h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {items.filter(i => i.category === category).map((item) => {
                            const quantity = getItemQuantity(item.id);
                            return (
                              <div
                                key={item.id}
                                className="flex justify-between items-center p-4 border border-bg-sand/60 hover:border-accent-gold transition-colors"
                              >
                                <div className="space-y-1">
                                  <h5 className="font-serif-body text-[13px] font-semibold text-primary-dark">
                                    {item.name}
                                  </h5>
                                  <span className="font-sans-ui text-[12px] font-medium text-muted-brown block">
                                    ₦{item.price.toLocaleString()}
                                  </span>
                                </div>
                                
                                {/* Item Counters */}
                                <div className="flex items-center space-x-3 bg-bg-sand p-1">
                                  <button
                                    onClick={() => handleRemoveItem(item)}
                                    className="p-1 hover:text-accent-gold transition-colors text-primary-dark"
                                  >
                                    <Minus size={12} />
                                  </button>
                                  <span className="font-sans-ui text-xs font-semibold w-4 text-center text-primary-dark">
                                    {quantity}
                                  </span>
                                  <button
                                    onClick={() => handleAddItem(item)}
                                    className="p-1 hover:text-accent-gold transition-colors text-primary-dark"
                                  >
                                    <Plus size={12} />
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 4: GREETING CARD */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <p className="font-serif-body text-[14px] text-muted-brown leading-relaxed">
                    Select a curated heavy-stock occasion greeting card and dictate the custom note to be hand-inscribed by our calligrapher.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {cards.map((card) => (
                      <button
                        key={card.id}
                        onClick={() => setSelectedCard(card)}
                        className={`text-left p-4 border transition-all duration-300 rounded-none ${
                          selectedCard?.id === card.id
                            ? "border-primary-dark bg-bg-sand/30"
                            : "border-bg-sand hover:border-accent-gold"
                        }`}
                      >
                        <h5 className="font-display text-[14px] font-semibold text-primary-dark mb-1">
                          {card.name}
                        </h5>
                        <p className="font-serif-body text-[11px] text-muted-brown">
                          {card.theme}
                        </p>
                      </button>
                    ))}
                  </div>

                  {selectedCard && (
                    <div className="space-y-2 pt-4">
                      <label className="font-sans-alt text-[10px] tracking-[0.2em] uppercase font-semibold text-primary-dark block">
                        Message Text Inscription
                      </label>
                      <textarea
                        value={cardNote}
                        onChange={(e) => setCardNote(e.target.value)}
                        placeholder="Write your personal message. Our in-house calligrapher will copy this onto the card."
                        rows={4}
                        className="w-full bg-white border border-muted-brown/20 px-4 py-3 font-serif-body text-[13px] placeholder-muted-brown/40 text-primary-dark focus:outline-none focus:border-accent-gold rounded-none"
                      />
                    </div>
                  )}
                </motion.div>
              )}

              {/* STEP 5: REVIEW & CHECKOUT */}
              {step === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <p className="font-serif-body text-[14px] text-muted-brown leading-relaxed">
                    Please review your bespoke build payload details. You can submit this directly to our premium Whatsapp concierge desk for invoice generation and shipping coordination.
                  </p>

                  <div className="border border-bg-sand bg-bg-sand/20 p-6 space-y-4 text-[13px] font-sans-ui text-primary-dark">
                    <div>
                      <span className="text-[10px] font-sans-alt tracking-wider text-accent-gold uppercase font-bold block mb-1">Container</span>
                      <p className="font-serif-body font-semibold">{selectedCrate?.name || "Not selected"}</p>
                    </div>
                    {monogram && (
                      <div>
                        <span className="text-[10px] font-sans-alt tracking-wider text-accent-gold uppercase font-bold block mb-1">Engraved Monogram</span>
                        <p className="font-display font-semibold tracking-widest">{monogram.toUpperCase()}</p>
                      </div>
                    )}
                    <div>
                      <span className="text-[10px] font-sans-alt tracking-wider text-accent-gold uppercase font-bold block mb-1">Sourced Items ({selectedItems.reduce((a,c) => a + c.quantity, 0)})</span>
                      <ul className="list-disc list-inside space-y-1 font-serif-body text-muted-brown">
                        {selectedItems.map((item) => (
                          <li key={item.id}>
                            {item.name} x{item.quantity} (₦{(item.price * item.quantity).toLocaleString()})
                          </li>
                        ))}
                      </ul>
                    </div>
                    {selectedCard && (
                      <div>
                        <span className="text-[10px] font-sans-alt tracking-wider text-accent-gold uppercase font-bold block mb-1">Greeting Card Theme</span>
                        <p className="font-serif-body font-semibold">{selectedCard.name}</p>
                        <p className="font-serif-body italic text-muted-brown">&ldquo;{cardNote || "Empty note"}&rdquo;</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Wizard Action Buttons */}
          <div className="flex justify-between items-center pt-6 border-t border-bg-sand">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="flex items-center space-x-2 text-primary-dark hover:text-accent-gold transition-colors font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase py-3 px-4"
              >
                <ArrowLeft size={14} />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            {step < 5 ? (
              <button
                onClick={() => {
                  if (step === 1 && !selectedCrate) {
                    alert("Please select a container base to proceed.");
                    return;
                  }
                  setStep(step + 1);
                }}
                className="flex items-center space-x-2 bg-primary-dark hover:bg-accent-gold text-white font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase py-4 px-8 transition-colors duration-500 rounded-none shadow"
              >
                <span>Continue</span>
                <ArrowRight size={14} />
              </button>
            ) : (
              <div className="flex gap-4 w-full md:w-auto">
                <button
                  onClick={handleConciergeHandoff}
                  className="flex flex-1 md:flex-initial justify-center items-center space-x-2 bg-emerald-700 hover:bg-emerald-800 text-white font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase py-4 px-8 transition-colors rounded-none shadow"
                >
                  <MessageSquare size={14} />
                  <span>Send to WhatsApp</span>
                </button>
                <Link
                  href="/"
                  onClick={() => alert("Bespoke crate added to cart. Sourcing invoice initiated.")}
                  className="flex flex-1 md:flex-initial justify-center items-center bg-primary-dark hover:bg-accent-gold text-white font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase py-4 px-8 transition-colors rounded-none shadow"
                >
                  <span>Checkout Box</span>
                </Link>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
