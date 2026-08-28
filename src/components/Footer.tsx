import { ArrowRight, Mail, Phone, MapPin, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { scrollToTarget } from "./SmoothScroll";

export function Footer() {
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

          {/* Navigation & Case Studies */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              {isSr ? "Navigacija" : "Navigation"}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href="#how-i-think" 
                  onClick={(e) => { e.preventDefault(); scrollToTarget("#how-i-think", 80); }}
                  className="hover:text-white transition-colors"
                >
                  {isSr ? "Kako radimo (Put)" : "How We Think"}
                </a>
              </li>
              <li>
                <a 
                  href="#process" 
                  onClick={(e) => { e.preventDefault(); scrollToTarget("#process", 80); }}
                  className="hover:text-white transition-colors"
                >
                  {isSr ? "Proces u 6 faza" : "6-Stage Process"}
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={(e) => { e.preventDefault(); scrollToTarget("#projects", 80); }}
                  className="hover:text-white transition-colors"
                >
                  {isSr ? "Studije slučaja" : "Case Studies"}
                </a>
              </li>
              <li>
                <a 
                  href="#why-ssolutions" 
                  onClick={(e) => { e.preventDefault(); scrollToTarget("#why-ssolutions", 80); }}
                  className="hover:text-white transition-colors"
                >
                  {isSr ? "Zašto SSolutions" : "Why Choose Us"}
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  onClick={(e) => { e.preventDefault(); scrollToTarget("#faq", 80); }}
                  className="hover:text-white transition-colors"
                >
                  {isSr ? "Česta pitanja (FAQ)" : "FAQ"}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Free Audit Button */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              {isSr ? "Kontakt" : "Contact"}
            </h4>
            <div className="space-y-2 text-xs">
              <a href="mailto:ssolutionsrs@gmail.com" className="block text-slate-300 hover:text-white transition-colors">
                ssolutionsrs@gmail.com
              </a>
              <div className="text-slate-500">
                Čačak • Beograd • Srbija & Remote
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

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} SSolutions. {isSr ? "Sva prava zadržana." : "All rights reserved."}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollToTarget("#contact", 80); }}
              className="hover:text-slate-400 transition-colors"
            >
              {isSr ? "Besplatna početna analiza" : "Free Initial Audit"}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
