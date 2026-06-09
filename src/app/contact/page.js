"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "Bespoke Gifting",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      alert("Your inquiry has been logged. Our concierge desk will contact you within 2 hours.");
      setFormState({
        name: "",
        email: "",
        phone: "",
        inquiryType: "Bespoke Gifting",
        message: ""
      });
      setSubmitted(false);
    }, 1000);
  };

  const contactDetails = [
    {
      icon: <MapPin className="text-accent-gold" size={20} />,
      title: "Ikoyi Showroom",
      value: "14a Second Avenue, Opposite Osborne Foreshore Estate, Ikoyi, Lagos, Nigeria"
    },
    {
      icon: <Phone className="text-accent-gold" size={20} />,
      title: "WhatsApp & Sourcing Line",
      value: "+234 908 285 0681",
      link: "https://wa.me/2349082850681"
    },
    {
      icon: <Mail className="text-accent-gold" size={20} />,
      title: "Direct Correspondence",
      value: "orders@cncluxury.com",
      link: "mailto:orders@cncluxury.com"
    },
    {
      icon: <Clock className="text-accent-gold" size={20} />,
      title: "Showroom Hours",
      value: "Monday – Saturday: 10:00 AM – 6:00 PM (Sunday: Closed)"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-bg-luxury pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Title */}
        <div className="text-center mb-16 space-y-4">
          <span className="font-sans-alt text-[10px] tracking-[0.4em] uppercase text-accent-gold block">
            Client Relations
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-primary-dark font-normal tracking-wide uppercase">
            Contact Concierge
          </h1>
          <div className="w-16 h-[1px] bg-accent-gold mx-auto mt-4" />
        </div>

        {/* Contact Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Contact Information cards */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-primary-dark font-normal">
                Visit the House
              </h2>
              <p className="font-serif-body text-[14px] text-muted-brown leading-relaxed">
                Our private showroom in Ikoyi offers an intimate space to select materials, monogram threads, and custom spirits with our designers. Consultations are available by appointment.
              </p>
            </div>

            <div className="space-y-6">
              {contactDetails.map((detail, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-4 border border-bg-sand bg-bg-sand/10">
                  <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center shrink-0">
                    {detail.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-sans-alt text-[10px] tracking-[0.15em] uppercase font-bold text-primary-dark">
                      {detail.title}
                    </h4>
                    {detail.link ? (
                      <a
                        href={detail.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans-ui text-[13px] text-muted-brown hover:text-accent-gold transition-colors block"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="font-serif-body text-[13px] text-muted-brown leading-relaxed">
                        {detail.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick WhatsApp CTA */}
            <div className="p-6 bg-emerald-700 text-white space-y-4 shadow-md">
              <div className="flex items-center space-x-3">
                <MessageSquare size={24} />
                <h4 className="font-sans-alt text-xs font-semibold tracking-[0.2em] uppercase">
                  Instant Whatsapp Chat
                </h4>
              </div>
              <p className="font-serif-body text-[13px] text-emerald-100 leading-relaxed">
                Connect directly with our luxury concierge coordinators on WhatsApp for immediate custom hampers, corporate sourcing catalogs, or express delivery requests.
              </p>
              <a
                href="https://wa.me/2349082850681"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-emerald-800 font-sans-alt text-[10px] font-semibold tracking-[0.15em] uppercase px-4 py-2 hover:bg-bg-sand transition-colors"
              >
                Chat Now
              </a>
            </div>
          </div>

          {/* Right Side: Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-bg-sand/40 p-8 shadow-sm">
            <h3 className="font-display text-xl text-primary-dark font-normal mb-6 pb-2 border-b border-bg-sand">
              Concierge Inquiry Form
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-sans-alt text-[9px] tracking-[0.2em] uppercase font-semibold text-primary-dark block mb-2">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Enter name"
                    className="w-full bg-bg-luxury border border-muted-brown/20 px-4 py-3 text-[12px] font-sans-ui placeholder-muted-brown/40 text-primary-dark focus:outline-none focus:border-accent-gold rounded-none"
                  />
                </div>
                <div>
                  <label className="font-sans-alt text-[9px] tracking-[0.2em] uppercase font-semibold text-primary-dark block mb-2">
                    Contact Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="E.g., +234..."
                    className="w-full bg-bg-luxury border border-muted-brown/20 px-4 py-3 text-[12px] font-sans-ui placeholder-muted-brown/40 text-primary-dark focus:outline-none focus:border-accent-gold rounded-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-sans-alt text-[9px] tracking-[0.2em] uppercase font-semibold text-primary-dark block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="Enter email address"
                    className="w-full bg-bg-luxury border border-muted-brown/20 px-4 py-3 text-[12px] font-sans-ui placeholder-muted-brown/40 text-primary-dark focus:outline-none focus:border-accent-gold rounded-none"
                  />
                </div>
                <div>
                  <label className="font-sans-alt text-[9px] tracking-[0.2em] uppercase font-semibold text-primary-dark block mb-2">
                    Inquiry Category
                  </label>
                  <select
                    value={formState.inquiryType}
                    onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                    className="w-full bg-bg-luxury border border-muted-brown/20 px-4 py-3 text-[12px] font-sans-ui text-primary-dark focus:outline-none focus:border-accent-gold rounded-none"
                  >
                    <option>Bespoke Gifting</option>
                    <option>Corporate Orders</option>
                    <option>Executive Sourcing</option>
                    <option>Event Souvenirs</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-sans-alt text-[9px] tracking-[0.2em] uppercase font-semibold text-primary-dark block mb-2">
                  Detailed Message / Sourcing Instructions
                </label>
                <textarea
                  required
                  rows={6}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell us about the occasion, recipient, design preference, and target budget."
                  className="w-full bg-bg-luxury border border-muted-brown/20 px-4 py-3 text-[13px] font-serif-body placeholder-muted-brown/40 text-primary-dark focus:outline-none focus:border-accent-gold rounded-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full md:w-auto bg-primary-dark hover:bg-accent-gold text-white font-sans-alt text-[10px] font-semibold tracking-[0.2em] uppercase py-4 px-8 transition-colors duration-500 rounded-none shadow flex items-center justify-center space-x-2"
              >
                <span>{submitted ? "Sending..." : "Submit Inquiry"}</span>
                <Send size={12} />
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
