import "./globals.css";
import { inter } from "@/app/fonts";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";


export const metadata: Metadata = {
title: "Nel Fuoco — Official Site",
description: "Music artist & entertainer. New releases, videos, tour dates, and booking.",
openGraph: {
title: "Nel Fuoco — Official Site",
description: "Music artist & entertainer. New releases, videos, tour dates, and booking.",
type: "website",
url: "https://example.com",
},
twitter: {
card: "summary_large_image",
title: "Nel Fuoco — Official Site",
description: "Music artist & entertainer. New releases, videos, tour dates, and booking.",
},
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className={inter.className}>
<NavBar />
{children}
<Footer />
</body>
</html>
);
}