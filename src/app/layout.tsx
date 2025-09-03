import "./globals.css";
import type { Metadata } from "next";
import NavBar from "@/components/NeonNavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nel Fuoco",
  description: "Official site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"   // ✅ Next.js wants this
      className="scroll-smooth h-full" // keep global smooth scroll
    >
      {/* ONE background for the whole site, iOS-safe */}
      <body className="h-full min-h-screen page-bg bg-fixed-ios text-white antialiased">
        <NavBar />
        {/* pad for fixed/glassy header height */}
        <div className="pt-16 md:pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
