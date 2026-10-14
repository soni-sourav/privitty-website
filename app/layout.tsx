import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
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
      className={`${manrope.variable} ${inter.variable} antialiased selection:bg-[#6750a4]/20 selection:text-[#4f378a]`}
    >
      <body className="min-h-screen bg-[#F8F5FF] text-[#17151D] flex flex-col font-sans">
        <ScrollAnimations>
          {children}
        </ScrollAnimations>
      </body>
    </html>
  );
}
