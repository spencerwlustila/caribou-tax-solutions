import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  description:
    "Tax preparation and bookkeeping services for individuals and small businesses.",
  icons: {
    icon: "/icon.png",
  },
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
          className="w-full text-white border-b"
          style={{ backgroundColor: "#2F4F6F" }}
        >
          <div className="w-full px-10 py-4 flex items-center justify-between">
            {/* Left */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/icon.png"
                alt="Caribou Accounting logo"
                width={150}
                height={65}
                className="rounded bg-white p-1"
              />

              <span className="font-bold text-lg">
                Caribou Accounting
              </span>
            </Link>

            {/* Right */}
            <div className="flex items-center gap-10 text-lg font-semibold">
              <Link href="/" className="hover:text-white/80 transition">
                Home
              </Link>

              <Link href="/about" className="hover:text-white/80 transition">
                About
              </Link>

              <Link href="/services" className="hover:text-white/80 transition">
                Services
              </Link>

              <Link href="/pricing" className="hover:text-white/80 transition">
                Pricing
              </Link>

              <Link
                href="/getstarted"
                className="bg-[var(--secondary)] text-white px-5 py-3 rounded-md hover:opacity-90 transition font-semibold"
              >
                Get Started
              </Link>
            </div>
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
              <Link href="/" className="hover:opacity-80 transition">
                Home
              </Link>

              <Link href="/about" className="hover:opacity-80 transition">
                About
              </Link>

              <Link href="/services" className="hover:opacity-80 transition">
                Services
              </Link>

              <Link href="/pricing" className="hover:opacity-80 transition">
                Pricing
              </Link>

              <Link href="/getstarted" className="hover:opacity-80 transition">
                Get Started
              </Link>
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