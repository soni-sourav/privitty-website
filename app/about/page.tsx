"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, ArrowUpRight, CheckIcon, XIcon, LinkedInIcon } from "../components/Icons";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F5FF] text-[#17151D]">
      <Navbar />

      <main className="flex-1">
        {/* =========================================================================
            SECTION 1: HERO SECTION
           ========================================================================= */}
        <section className="pt-20 pb-16 px-6 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECE7F6] border border-[#DDD5EF] text-[10px] sm:text-xs font-bold text-[#4F378A] tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#553C9A]"></span>
            <span>BUILT FOR CRITICAL INFRASTRUCTURE &amp; OPERATIONS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-[#17151D] font-headline tracking-tight leading-[1.1] max-w-4xl mx-auto">
            We started with a<br />
            question <span className="italic font-light text-[#6750A4]">no one in OT</span><br />
            <span className="italic font-light text-[#6750A4]">was asking.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#625F6B] max-w-xl mx-auto mt-6 leading-relaxed">
            Why are factory floors, energy grids, and water systems still relying on 30-year-old network perimeter models built for office IT?
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto mt-10">
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#DDD8E8]/70 shadow-xs text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#17151D] font-headline">2022</div>
              <div className="text-[11px] sm:text-xs font-medium text-[#625F6B] mt-1">Founded</div>
            </div>
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#DDD8E8]/70 shadow-xs text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#17151D] font-headline">0</div>
              <div className="text-[11px] sm:text-xs font-medium text-[#625F6B] mt-1">Inbound Ports Required</div>
            </div>
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#DDD8E8]/70 shadow-xs text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#17151D] font-headline">E2EE</div>
              <div className="text-[11px] sm:text-xs font-medium text-[#625F6B] mt-1">End-to-End Encrypted</div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: PROVEN IMPACT & RESULTS
           ========================================================================= */}
        <section className="py-12 px-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DDD8E8]/80 shadow-sm space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#6750A4]">
                CASE STUDIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17151D] font-headline tracking-tight">
                Proven Impact &amp; Results
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-[#625F6B] leading-relaxed">
              <div className="space-y-4">
                <p>
                  Eliminated static VPN access and replaced legacy jump boxes with Privitty Edge Watchtowers across distributed high-voltage substations.
                </p>
                <p>
                  Security audit time dropped by 94%, revocation became instantaneous (&lt;1s), and full NIS2 compliance was achieved without adding hardware.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  Critical operational technology assets gained hardware-backed cryptographic identity, ensuring that only verified engineers could establish ephemeral sessions.
                </p>
                <p>
                  Zero inbound firewall ports opened. Complete tamper-proof audit trails for every packet and maintenance interaction.
                </p>
              </div>
            </div>

            {/* Nested Substation Card */}
            <div className="bg-[#F6F3FC] rounded-2xl p-6 border border-[#ECE7F5] space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-[#4F378A] text-white text-[10px] font-bold">
                  ENERGY &amp; UTILITIES
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-white border border-[#DDD8E8] text-[#17151D] text-[10px] font-semibold">
                  NIS2 COMPLIANT
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-white border border-[#DDD8E8] text-[#17151D] text-[10px] font-semibold">
                  100% AUDITABLE
                </span>
              </div>

              <div className="text-[10px] font-bold uppercase tracking-wider text-[#7A7589]">
                REGIONAL POWER GRID OPERATOR
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#17151D] font-headline">
                Securing 45+ Regional Power Substations in Production
              </h3>

              <p className="text-xs text-[#625F6B] leading-relaxed">
                Replaced vulnerable VPNs and legacy bastion hosts with Privitty Edge Watchtowers across 45 distributed substations, reducing attack surface to zero open inbound ports.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: MISSION STATEMENT
           ========================================================================= */}
        <section className="py-24 px-6 max-w-5xl mx-auto text-center space-y-6">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#6750A4]">
            OUR MISSION
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-[#17151D] font-headline tracking-tight leading-[1.15] max-w-4xl mx-auto">
            To set a new standard<br />
            for <span className="italic font-light text-[#6750A4]">machine identity</span> and<br />
            human access, so the<br />
            industrial world can<br />
            connect without<br />
            compromise.
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#625F6B] max-w-2xl mx-auto leading-relaxed pt-2">
            Privitty is an operational technology security platform dedicated to replacing perimeter-based models with verified machine and human identity, ensuring that every connection in critical infrastructure is session-scoped, cryptographic, and sovereign.
          </p>
        </section>

        {/* =========================================================================
            SECTION 4: SIX PRINCIPLES
           ========================================================================= */}
        <section id="principles" className="py-20 px-6 max-w-5xl mx-auto border-t border-[#DDD8E8]">
          <div className="space-y-3 mb-12">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#6750A4]">
              GUIDING VALUES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17151D] font-headline tracking-tight">
              Six principles we don’t negotiate on.
            </h2>
            <p className="text-xs sm:text-sm text-[#625F6B]">
              Every architectural choice and feature we build must pass these six non-negotiable filters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Principle 01 */}
            <div className="bg-white p-7 rounded-2xl border border-[#DDD8E8]/70 shadow-xs space-y-2.5">
              <div className="text-xs font-bold text-[#6750A4]">01</div>
              <h3 className="text-base font-bold text-[#17151D] font-headline">Identity over Network</h3>
              <p className="text-xs text-[#625F6B] leading-relaxed">
                Access is granted directly to verified identities, never to broad IP subnets, VLANs, or physical locations. A network address is not an identity.
              </p>
            </div>

            {/* Principle 02 */}
            <div className="bg-white p-7 rounded-2xl border border-[#DDD8E8]/70 shadow-xs space-y-2.5">
              <div className="text-xs font-bold text-[#6750A4]">02</div>
              <h3 className="text-base font-bold text-[#17151D] font-headline">Cryptographic Non-Repudiation</h3>
              <p className="text-xs text-[#625F6B] leading-relaxed">
                Every action, session, and protocol frame is cryptographically signed and immutable. Audit logs are tamper-evident and sovereign to your infrastructure.
              </p>
            </div>

            {/* Principle 03 */}
            <div className="bg-white p-7 rounded-2xl border border-[#DDD8E8]/70 shadow-xs space-y-2.5">
              <div className="text-xs font-bold text-[#6750A4]">03</div>
              <h3 className="text-base font-bold text-[#17151D] font-headline">Zero Open Inbound Ports</h3>
              <p className="text-xs text-[#625F6B] leading-relaxed">
                No listening sockets on factory firewalls. All outbound connections are ephemeral and attestation-backed, eliminating internet-facing attack surfaces.
              </p>
            </div>

            {/* Principle 04 */}
            <div className="bg-white p-7 rounded-2xl border border-[#DDD8E8]/70 shadow-xs space-y-2.5">
              <div className="text-xs font-bold text-[#6750A4]">04</div>
              <h3 className="text-base font-bold text-[#17151D] font-headline">Ephemeral by Default</h3>
              <p className="text-xs text-[#625F6B] leading-relaxed">
                Permissions expire automatically when the maintenance work order completes. Standing privileges and dormant credentials do not exist in Privitty.
              </p>
            </div>

            {/* Principle 05 */}
            <div className="bg-white p-7 rounded-2xl border border-[#DDD8E8]/70 shadow-xs space-y-2.5">
              <div className="text-xs font-bold text-[#6750A4]">05</div>
              <h3 className="text-base font-bold text-[#17151D] font-headline">Hardware Root of Trust</h3>
              <p className="text-xs text-[#625F6B] leading-relaxed">
                Machine certificates are bound directly to physical hardware TPM 2.0 modules and secure enclaves, preventing private key extraction or spoofing.
              </p>
            </div>

            {/* Principle 06 */}
            <div className="bg-white p-7 rounded-2xl border border-[#DDD8E8]/70 shadow-xs space-y-2.5">
              <div className="text-xs font-bold text-[#6750A4]">06</div>
              <h3 className="text-base font-bold text-[#17151D] font-headline">User Sovereignty</h3>
              <p className="text-xs text-[#625F6B] leading-relaxed">
                Your keys, your logs, your data. Always kept within your sovereign geographical and architectural boundaries. Privitty never sees your payloads.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: THE TEAM
           ========================================================================= */}
        <section id="team" className="py-20 px-6 max-w-5xl mx-auto border-t border-[#DDD8E8]">
          <div className="space-y-4 mb-12">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#6750A4]">
              THE TEAM
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17151D] font-headline tracking-tight leading-tight">
              A small team.<br />
              An unreasonably large ambition.
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-[#625F6B] leading-relaxed max-w-3xl pt-2">
              <p>
                We are engineers, cryptographers, and industrial security practitioners who have spent our careers inside critical infrastructure.
              </p>
              <p>
                Having seen firsthand how perimeter VPNs fail in high-consequence environments, we came together to build the identity-first security standard that OT has always deserved.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Team Member 1 */}
            <div className="bg-white p-5 rounded-2xl border border-[#DDD8E8]/70 shadow-xs space-y-4 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#17151D] font-headline">Milind Deore</h3>
                  <p className="text-[11px] font-semibold text-[#6750A4]">CEO</p>
                </div>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg bg-[#ECE7F6] text-[#4F378A] hover:bg-[#DFD8F0] flex items-center justify-center transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-[#DDD8E8]/50 bg-slate-100">
                <Image
                  src="/milind.png"
                  alt="Milind Deore - CEO"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-5 rounded-2xl border border-[#DDD8E8]/70 shadow-xs space-y-4 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#17151D] font-headline">Ashish Gupta</h3>
                  <p className="text-[11px] font-semibold text-[#6750A4]">COO</p>
                </div>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg bg-[#ECE7F6] text-[#4F378A] hover:bg-[#DFD8F0] flex items-center justify-center transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-[#DDD8E8]/50 bg-slate-100">
                <Image
                  src="/ashish.png"
                  alt="Ashish Gupta - COO"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-5 rounded-2xl border border-[#DDD8E8]/70 shadow-xs space-y-4 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#17151D] font-headline">Girish Jadhav</h3>
                  <p className="text-[11px] font-semibold text-[#6750A4]">VP of Product</p>
                </div>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg bg-[#ECE7F6] text-[#4F378A] hover:bg-[#DFD8F0] flex items-center justify-center transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-[#DDD8E8]/50 bg-slate-100">
                <Image
                  src="/girish.png"
                  alt="Girish Jadhav - VP of Product"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: PRECISION VS BASIC COMPARISON
           ========================================================================= */}
        <section className="py-20 px-6 max-w-4xl mx-auto border-t border-[#DDD8E8]">
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#6750A4]">
              COMPARISON
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17151D] font-headline tracking-tight">
              Precision vs Basic
            </h2>
            <p className="text-xs sm:text-sm text-[#625F6B]">
              Why identity-first security outperforms perimeter models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Privitty Card */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#DDD8E8] shadow-md flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#DDD8E8]">
                  <span className="text-lg font-bold font-headline text-[#17151D]">PRIVITTY</span>
                  <span className="text-[10px] bg-[#ECE7F6] text-[#4F378A] font-bold px-2.5 py-0.5 rounded-full uppercase">
                    Modern Standard
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs text-[#17151D]">
                  <li className="flex items-center gap-2.5">
                    <CheckIcon className="w-3.5 h-3.5 text-[#6750A4] shrink-0" />
                    <span>Ephemeral mTLS sessions</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckIcon className="w-3.5 h-3.5 text-[#6750A4] shrink-0" />
                    <span>Zero open inbound firewall ports</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckIcon className="w-3.5 h-3.5 text-[#6750A4] shrink-0" />
                    <span>Cryptographic non-repudiation</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckIcon className="w-3.5 h-3.5 text-[#6750A4] shrink-0" />
                    <span>Hardware TPM 2.0 attestation</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckIcon className="w-3.5 h-3.5 text-[#6750A4] shrink-0" />
                    <span>Protocol inspection (Modbus, OPC-UA)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckIcon className="w-3.5 h-3.5 text-[#6750A4] shrink-0" />
                    <span>Sovereign data residency enclaves</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckIcon className="w-3.5 h-3.5 text-[#6750A4] shrink-0" />
                    <span>Full revocation in &lt; 1 second</span>
                  </li>
                </ul>
              </div>

              <a
                href="/#demo"
                className="w-full py-3 rounded-xl bg-[#1E1B26] hover:bg-[#2D2938] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Legacy VPNs Card */}
            <div className="bg-[#F6F3FC] rounded-3xl p-7 sm:p-8 border border-[#ECE7F5] flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#DDD8E8]/70">
                  <span className="text-lg font-bold font-headline text-gray-500">Legacy VPNs</span>
                  <span className="text-[10px] bg-white text-gray-500 font-semibold px-2.5 py-0.5 rounded-full border border-gray-200">
                    Legacy Model
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs text-gray-500">
                  <li className="flex items-center gap-2.5">
                    <XIcon className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>Broad IP subnet access</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <XIcon className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>Standing permanent credentials</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <XIcon className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>Vulnerable open listening ports</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <XIcon className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>Unmonitored third-party access</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <XIcon className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>Static keys stored in plaintext</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <XIcon className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>Slow manual revoke processes</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <XIcon className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>Non-sovereign centralized logs</span>
                  </li>
                </ul>
              </div>

              <div className="pt-3 border-t border-[#DDD8E8]/50 text-center">
                <span className="text-[11px] text-[#7A7589]">
                  High operational overhead &amp; perimeter vulnerabilities.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: CLOSING CTA WITH CONCENTRIC CIRCLES
           ========================================================================= */}
        <section className="relative py-28 md:py-36 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
          {/* Concentric Circular Background Patterns */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Center soft glow */}
            <div className="absolute w-[380px] h-[380px] bg-white/70 rounded-full blur-2xl"></div>

            {/* Outermost circle */}
            <div className="absolute w-[760px] h-[760px] md:w-[980px] md:h-[980px] rounded-full border border-[#DDD5EF]/45"></div>

            {/* Middle circle */}
            <div className="absolute w-[560px] h-[560px] md:w-[720px] md:h-[720px] rounded-full border border-[#DDD5EF]/55"></div>

            {/* Inner circle */}
            <div className="absolute w-[380px] h-[380px] md:w-[480px] md:h-[480px] rounded-full border border-[#DDD5EF]/65"></div>

            {/* Innermost circle */}
            <div className="absolute w-[220px] h-[220px] md:w-[280px] md:h-[280px] rounded-full border border-[#DDD5EF]/75"></div>
          </div>

          {/* Top Pill Badge */}
          <div className="relative z-10 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE5F5] border border-[#DDD5EF] text-[10px] sm:text-xs font-bold text-[#4F378A] tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#553C9A]"></span>
            <span>READY TO SET THE NEW STANDARD?</span>
          </div>

          {/* Headline */}
          <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#17151D] font-headline tracking-tight leading-[1.12] max-w-3xl mx-auto">
            &ldquo;Give every machine an{" "}
            <span className="italic font-light text-[#6750A4]">identity</span>. Give every engineer verified{" "}
            <span className="italic font-light text-[#6750A4]">access</span>.&rdquo;
          </h2>

          {/* Subtitle */}
          <p className="relative z-10 text-xs sm:text-sm md:text-base text-[#625F6B] max-w-xl mx-auto leading-relaxed mt-6">
            See how Privitty sets the new standard for machine identity and human access, software only, deployed on your existing infrastructure in hours.
          </p>

          {/* Action Buttons */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 pt-8">
            <a
              href="/#demo"
              className="px-6 py-3 rounded-xl bg-[#4F378A] hover:bg-[#432E76] text-white font-semibold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5 group"
            >
              <span>Book a Demo</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="/#architecture"
              className="px-6 py-3 rounded-xl bg-white hover:bg-[#F8F5FF] text-[#17151D] border border-[#DDD8E8] font-semibold text-xs sm:text-sm shadow-xs transition-all"
            >
              Whitepaper
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
