import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caribou Accounting",
  description: "Tax preparation and bookkeeping services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      
     <body className="min-h-full flex flex-col">

<nav
  className="w-full text-white border-b p-4"
  style={{ backgroundColor: "#2F4F6F"  }}
>
  <div className="w-full flex items-center justify-between">
    
    {/* Left */}
    <div className="w-1/3">
      <h1 className="font-bold text-lg ml-6">Caribou Accounting</h1>
    </div>

    {/* Middle */}
    <div className="w-1/3 flex justify-center gap-8">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/services">Services</a>
      <a href="/pricing">Pricing</a>
      <a href="/getstarted">Get Started</a>
    </div>

    {/* Right placeholder */}
    <div className="w-1/3"></div>

  </div>
</nav>
  {children}
<footer className="bg-[var(--primary)] text-white py-8 mt-auto">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="font-bold text-lg mb-2">
      Caribou Accounting
    </h2>

    <p className="text-sm text-white/80 mb-4">
      Tax preparation and bookkeeping services for individuals and small businesses.
    </p>

    <div className="flex justify-center gap-6 text-sm mb-4">
      <a href="/" className="hover:opacity-80 transition">Home</a>
      <a href="/about" className="hover:opacity-80 transition">About</a>
      <a href="/services" className="hover:opacity-80 transition">Services</a>
      <a href="/pricing" className="hover:opacity-80 transition">Pricing</a>
      <a href="/getstarted" className="hover:opacity-80 transition">Get Started</a>
    </div>

    <p className="text-xs text-white/70">
      © 2026 Caribou Accounting. All rights reserved.
    </p>
<p className="text-xs text-white/60 mt-2">
  Website by Lustila Digital
</p>
  </div>
</footer>
<Analytics />
<SpeedInsights />
</body>
    </html>
  );
}

