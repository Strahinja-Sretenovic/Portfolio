import { Github, Linkedin, ArrowUp, Mail, ShieldCheck, Zap, Globe, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    { name: isSr ? "Izrada Web Sajtova" : "Web Development", href: "#services" },
    { name: isSr ? "E-Commerce & Online Prodavnice" : "E-Commerce Stores", href: "#services" },
    { name: isSr ? "Custom Web Aplikacije" : "Custom Web Apps", href: "#services" },
    { name: isSr ? "Google SEO & 100/100 Brzina" : "Google SEO & Speed", href: "#services" },
    { name: isSr ? "Kalkulator Cene Projekta" : "Project Cost Estimator", href: "#estimator" },
  ];

  const hubs = [
    "Čačak", "Beograd", "Novi Sad", "Kragujevac", "Niš", "Kraljevo", "Užice", "Dijaspora (EU/USA)"
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 px-4 sm:px-6 border-t border-slate-800 dark:border-white/10">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-base shadow-md shadow-blue-500/30">
                ⚡
              </span>
              <span className="font-display font-bold text-2xl text-white tracking-tight">SSolutions</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              {isSr 
                ? "Digitalna agencija za profesionalnu izradu sajtova koji donose klijente, online prodavnica, custom web softvera i Google SEO optimizacije sa 100/100 brzinom."
                : "Full-service digital engineering agency building high-converting websites, bespoke web applications, and sub-second Google SEO solutions."}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ssolutionsrs@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-blue-600 text-white text-xs font-semibold transition-all"
              >
                <Mail size={14} />
                <span>ssolutionsrs@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services & SEO */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4 tracking-wide uppercase text-slate-400">
              {isSr ? "Usluge & Rešenja" : "Core Services"}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {services.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="hover:text-blue-400 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Regional Hubs & Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4 tracking-wide uppercase text-slate-400">
              {isSr ? "Lokalna Pokrivenost" : "Service Locations"}
            </h4>
            <p className="text-[11px] text-slate-400 mb-3">
              {isSr ? "Dostupni klijentima širom Srbije i online globalno:" : "Available across Serbia & worldwide:"}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {hubs.map((hub, hIdx) => (
                <span key={hIdx} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-900 text-slate-400 border border-slate-800">
                  {hub}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} SSolutions (Strahinja Sretenović). {isSr ? "Sva prava zadržana." : "All rights reserved."}
          </p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Strahinja-Sretenovic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                aria-label="GitHub Profile"
              >
                <Github size={15} />
              </a>
              <a
                href="https://www.linkedin.com/in/strahinja-sretenovic-22890a352/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={15} />
              </a>
            </div>

            <span className="text-slate-800">•</span>

            <button 
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors group cursor-pointer"
            >
              {isSr ? "Vrh stranice" : "Top"}
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform text-blue-400" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}

