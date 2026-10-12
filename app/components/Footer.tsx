import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#DDD8E8] bg-[#F8F5FF] pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          {/* Logo & Tagline */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <Image
                  src="/logo.png"
                  alt="Privitty Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-extrabold text-xl text-[#17151D] font-headline">Privitty</span>
            </div>
            <p className="text-[#625F6B] text-xs leading-relaxed max-w-sm">
              The identity layer for operational technology. Machine identity by default. Human access, always revocable. No VPN. No hardware. No open ports.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D2D2F3]/60 border border-[#DDD8E8] text-[11px] font-semibold text-[#4f378a]">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Zero Open Ports &bull; Sovereign OT Architecture
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-bold text-[#17151D] uppercase text-xs tracking-wider mb-4">PRODUCTS</h4>
            <ul className="space-y-2.5 text-xs text-[#625F6B]">
              <li><Link href="/product" className="hover:text-[#6750A4] transition-colors">Edge & Watchtower</Link></li>
              <li><Link href="/product" className="hover:text-[#6750A4] transition-colors">Communicator SDK</Link></li>
              <li><Link href="/product" className="hover:text-[#6750A4] transition-colors">Communicator App</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-[#17151D] uppercase text-xs tracking-wider mb-4">COMPANY</h4>
            <ul className="space-y-2.5 text-xs text-[#625F6B]">
              <li><Link href="/about" className="hover:text-[#6750A4] transition-colors">About Us</Link></li>
              <li><Link href="/about#principles" className="hover:text-[#6750A4] transition-colors">Principles</Link></li>
              <li><Link href="/about#team" className="hover:text-[#6750A4] transition-colors">Careers</Link></li>
              <li><Link href="/about#contact" className="hover:text-[#6750A4] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal & Trust Column */}
          <div>
            <h4 className="font-bold text-[#17151D] uppercase text-xs tracking-wider mb-4">LEGAL & TRUST</h4>
            <ul className="space-y-2.5 text-xs text-[#625F6B]">
              <li><Link href="/privacy" className="hover:text-[#6750A4] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/report-abuse" className="hover:text-[#6750A4] transition-colors">Report Abuse</Link></li>
              <li><span className="hover:text-[#6750A4] cursor-pointer">Terms of Service</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#DDD8E8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#625F6B]">
          <div>Privitty &copy; 2026. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#6750A4] cursor-pointer">Enterprise Security</span>
            <span className="hover:text-[#6750A4] cursor-pointer">SOC 2 Certified</span>
            <span className="hover:text-[#6750A4] cursor-pointer">Hardware-Free Trust</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
