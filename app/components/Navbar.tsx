"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { XIcon, CheckIcon } from "./Icons";

export default function Navbar() {
  const pathname = usePathname();
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  const navLinks = [
    { name: "Products", href: "/product" },
    { name: "How It Works", href: "/#architecture" },
    { name: "About", href: "/about" },
    { name: "Privacy", href: "/privacy" },
    { name: "Report Abuse", href: "/report-abuse" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#F8F5FF]/90 border-b border-[#DDD8E8] transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 group-hover:scale-105 transition-transform">
              <Image
                src="/logo.png"
                alt="Privitty Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-[#17151D] font-headline">
                Privitty
              </span>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors py-1 ${isActive
                      ? "text-[#6750A4] font-bold border-b-2 border-[#6750A4]"
                      : "text-[#625F6B] hover:text-[#17151D]"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="px-5 py-2.5 rounded-full text-sm font-semibold bg-[#6750A4] text-white hover:bg-[#57418F] shadow-md shadow-[#6750A4]/25 transition-all transform hover:-translate-y-0.5"
            >
              Book a Demo
            </button>
            <div className="w-9 h-9 rounded-full bg-[#D2D2F3] text-[#4f378a] flex items-center justify-center font-bold text-sm">
              &bull;&bull;&bull;
            </div>
          </div>
        </div>
      </header>

      {/* Shared Demo Modal */}
      {isDemoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full border border-[#DDD8E8] shadow-2xl relative">
            <button
              onClick={() => {
                setIsDemoModalOpen(false);
                setDemoSubmitted(false);
              }}
              className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
              aria-label="Close"
            >
              <XIcon className="w-5 h-5" />
            </button>

            {!demoSubmitted ? (
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 rounded-md bg-[#D2D2F3] text-[#4f378a] text-xs font-bold uppercase tracking-wider">
                  Privitty Enterprise Access
                </div>
                <h3 className="text-2xl font-bold text-[#17151D] font-headline">
                  Schedule Privitty Architecture Review
                </h3>
                <p className="text-xs text-[#625F6B]">
                  Connect with our OT Security and Sovereign Infrastructure specialists to assess your zero-trust posture.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setDemoSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-bold text-[#17151D] mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="engineer@enterprise.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#DDD8E8] text-sm focus:outline-none focus:border-[#6750A4]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#17151D] mb-1">Company / Organization *</label>
                    <input
                      type="text"
                      required
                      placeholder="Global Industrial Corp"
                      className="w-full px-4 py-3 rounded-xl border border-[#DDD8E8] text-sm focus:outline-none focus:border-[#6750A4]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#17151D] mb-1">Deployment Focus</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-[#DDD8E8] text-sm focus:outline-none focus:border-[#6750A4]">
                      <option>Operational Technology (OT) & ICS</option>
                      <option>Data Sovereignty & Local Residency</option>
                      <option>Machine Identity & Certificate Automation</option>
                      <option>Full Platform Audit</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#6750A4] text-white font-semibold text-sm hover:bg-[#57418F] transition-all shadow-md"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckIcon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#17151D] font-headline">Request Confirmed</h3>
                <p className="text-xs text-[#625F6B]">
                  Our security architecture team will reach out within 4 business hours.
                </p>
                <button
                  onClick={() => {
                    setIsDemoModalOpen(false);
                    setDemoSubmitted(false);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#6750A4] text-white text-xs font-semibold"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
