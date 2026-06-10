import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CookieConsent from "@/components/CookieConsent";

export const metadata = {
  title: {
    default: "C&C Luxury | Premium Gift Hampers & Bespoke Gifting Nigeria",
    template: "%s | C&C Luxury",
  },
  description:
    "C&C Luxury epitomizes the art of bespoke gifting and unparalleled concierge services in Lagos, Nigeria. Curate luxury hampers, custom crates, and premium gift experiences for weddings, corporate events, and celebrations.",
  keywords: [
    "luxury gift hampers Nigeria",
    "bespoke gifting Lagos",
    "C&C Luxury",
    "corporate gifting Nigeria",
    "custom gift crates",
    "luxury concierge Lagos",
    "premium hampers Ikoyi",
    "wedding gift hampers",
  ],
  authors: [{ name: "C&C Luxury" }],
  openGraph: {
    title: "C&C Luxury | Premium Gift Hampers & Bespoke Gifting Nigeria",
    description:
      "Curate luxury hampers, custom crates, and premium gift experiences. Lagos-based bespoke gifting and concierge services.",
    url: "https://www.cncluxury.com",
    siteName: "C&C Luxury",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "C&C Luxury | Premium Gift Hampers & Bespoke Gifting Nigeria",
    description:
      "Curate luxury hampers, custom crates, and premium gift experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-primary-dark">
        {/* Navbar */}
        <Navbar />

        {/* Main Content Area with client-side Page Transitions */}
        <main className="flex-grow flex flex-col pt-[116px] md:pt-[120px]">
          <PageTransition>{children}</PageTransition>
        </main>

        {/* Footer */}
        <Footer />

        {/* Cookie Consent Banner */}
        <CookieConsent />
      </body>
    </html>
  );
}
