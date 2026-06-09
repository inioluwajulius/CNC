import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "C&C Luxury | Bespoke Gifting & Concierge Services Lagos",
  description: "C&C and Co. epitomizes the art of bespoke gifting and unparalleled concierge services, meticulously crafting opulent experiences and lavish tokens of affection that transcend time and create indelible memories.",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-white text-primary-dark">
        {/* Navbar */}
        <Navbar />
        
        {/* Main Content Area with client-side Page Transitions */}
        <main className="flex-grow flex flex-col pt-[80px]">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
