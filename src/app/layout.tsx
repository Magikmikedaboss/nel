import "./globals.css";
import NeonNavBar from "@/components/NeonNavBar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-sand text-ink">
        <NeonNavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
