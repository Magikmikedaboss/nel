import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* min-h-screen ensures the gradient fills the viewport */}
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
