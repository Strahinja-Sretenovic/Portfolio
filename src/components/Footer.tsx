import { ArrowRight, Mail, Phone, MapPin, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { scrollToTarget } from "./SmoothScroll";

interface FooterProps {
  onOpenLegal?: (doc: "privacy" | "terms" | "cookies" | "refund" | "business") => void;
  onOpenCookieSettings?: () => void;
}

export function Footer({ onOpenLegal, onOpenCookieSettings }: FooterProps = {}) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand & Positioning */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="font-display font-extrabold text-2xl text-white tracking-tight flex items-center gap-1">
              <span>SSolutions</span>
              <span className="text-blue-500">.</span>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {isSr
                ? "Web strategija, UX projektovanje i inženjerski razvoj digitalnih sistema koji prepoznaju probleme i donose merljive poslovne rezultate."
                : "Web strategy, UX architecture, and engineering execution designed to locate business bottlenecks and drive measurable growth."}
            </p>

            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span>{isSr ? "Prvo problem, onda tehnologija." : "Problem diagnosis before technology."}</span>
            </div>
          </div>

          {/* Quick Links / Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              {isSr ? "Usluge" : "Services"}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => { e.preventDefault(); scrollToTarget("#services", 80); }}
                  className="hover:text-white transition-colors"
                >
                  {isSr ? "Website Strategy & Redesign" : "Website Strategy & Redesign"}
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => { e.preventDefault(); scrollToTarget("#services", 80); }}
                  className="hover:text-white transition-colors"
                >
                  {isSr ? "New Business Website" : "New Business Website"}
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => { e.preventDefault(); scrollToTarget("#services", 80); }}
                  className="hover:text-white transition-colors"
                >
                  {isSr ? "Web Applications & Automatizacija" : "Web Applications & Automation"}
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => { e.preventDefault(); scrollToTarget("#services", 80); }}
                  className="hover:text-white transition-colors"
                >
                  {isSr ? "Growth, CRO & SEO Optimizacija" : "Growth, CRO & SEO"}
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation & Legal Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              {isSr ? "Pravno & Uslovi" : "Legal & Privacy"}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal?.("privacy")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {isSr ? "Politika privatnosti" : "Privacy Policy"}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal?.("terms")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {isSr ? "Uslovi korišćenja" : "Terms & Conditions"}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal?.("cookies")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {isSr ? "Politika kolačića" : "Cookie Policy"}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal?.("refund")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {isSr ? "Povraćaj & Garancija" : "Refund Policy"}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal?.("business")}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {isSr ? "Podaci o poslovanju" : "Business Details (Impressum)"}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenCookieSettings}
                  className="text-blue-400 hover:text-blue-300 transition-colors text-left cursor-pointer flex items-center gap-1 font-mono pt-1"
                >
                  <span>⚙️ {isSr ? "Podešavanje kolačića" : "Cookie Settings"}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Free Audit Button */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              {isSr ? "Kontakt" : "Contact"}
            </h4>
            <div className="space-y-2 text-xs">
              <a href="mailto:ssolutionsrs@gmail.com" className="block text-slate-300 hover:text-white transition-colors font-mono">
                ssolutionsrs@gmail.com
              </a>
              <div className="text-slate-500">
                Čačak • Beograd • Srbija & Remote
              </div>
              <div className="text-[11px] text-slate-600">
                {isSr ? "Registrovano u skladu sa zakonima RS" : "Registered in compliance with RS law"}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => scrollToTarget("#contact", 80)}
                className="w-full py-2.5 px-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>{isSr ? "Zatraži analizu" : "Request Audit"}</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} SSolutions. {isSr ? "Sva prava zadržana. Usklađeno sa GDPR & ZZPL." : "All rights reserved. GDPR & ZZPL compliant."}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button
              type="button"
              onClick={() => onOpenLegal?.("privacy")}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              {isSr ? "Privatnost" : "Privacy"}
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => onOpenLegal?.("terms")}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              {isSr ? "Uslovi" : "Terms"}
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => onOpenLegal?.("cookies")}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              {isSr ? "Kolačići" : "Cookies"}
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => onOpenLegal?.("business")}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              {isSr ? "Impressum" : "Company"}
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
