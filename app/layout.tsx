import type { Metadata } from "next";
import { Manrope, Inter, Newsreader } from "next/font/google";
import "./globals.css";
import ScrollAnimations from "./components/animations/ScrollAnimations";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Privitty — Identity-First Security & Data Sovereignty",
  description: "Enterprise identity-first security, Zero-Trust OT remote access, machine identity management, and encrypted data sovereignty for sovereign infrastructure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${newsreader.variable} antialiased selection:bg-[#4c3298]/20 selection:text-[#4c3298]`}
    >
      <body className="min-h-screen bg-[#F8F5FF] text-[#17151D] flex flex-col font-sans">
        <ScrollAnimations>
          {children}
        </ScrollAnimations>
      </body>
    </html>
  );
}
