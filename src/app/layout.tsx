import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import NavBar from "@/components/NeonNavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nel Fuoco",
  description: "Official site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="h-full min-h-screen page-bg bg-fixed-ios text-white antialiased">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="neon"
          enableSystem={false}
          themes={["neon", "pro"]}
          storageKey="nf-theme"
          disableTransitionOnChange
        >
          <NavBar />
          <div className="pt-16 md:pt-20">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
