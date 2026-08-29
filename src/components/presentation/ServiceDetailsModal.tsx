import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, ArrowRight, Sparkles, Layers, Laptop, Code2, Search, TrendingUp, Calendar, Bot } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { scrollToTarget } from "../SmoothScroll";

interface ServiceDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export function ServiceDetailsModal({ isOpen, onClose, initialServiceId }: ServiceDetailsModalProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const services = [
    {
      id: "web-strategy",
      titleSr: "Web Strategija & Informaciona Arhitektura",
      titleEn: "Web Strategy & Information Architecture",
      descSr: "Pre bilo kakvog dizajna ili programiranja, analiziramo poslovni model, konkurenciju i ponašanje kupaca. Definišemo hijerarhiju poruka i putanje do konverzije.",
      descEn: "Prior to code or visual design, we dissect your commercial model, competitors, and buyer psychology to architect conversion paths.",
      deliverablesSr: ["Analiza kupaca i konkurencije", "Struktura stranica i navigacija", "Prodajni tekstovi i pozivi na akciju", "Definisani KPI ciljevi"],
      deliverablesEn: ["Competitor & buyer analysis", "Sitemap & IA wireframing", "High-conversion copywriting", "Defined commercial KPIs"],
      icon: <Layers className="w-5 h-5 text-blue-500" />
    },
    {
      id: "web-design-ux",
      titleSr: "Strateški Web Dizajn & UX",
      titleEn: "Strategic Web Design & UX",
      descSr: "Projektujemo premijum korisničko iskustvo koje trenutno gradi poverenje. 100% prilagođeno mobilnim telefonima, sa besprekornom čitljivošću.",
      descEn: "We design authoritative user experiences that build instant trust on mobile devices with high readability and flawless visual hierarchy.",
      deliverablesSr: ["Figma prototipovi visoke vernosti", "Mobile-first dizajn sistem", "Jasna vizuelna hijerarhija", "Optimizacija za visoke konverzije"],
      deliverablesEn: ["High-fidelity Figma prototypes", "Mobile-first design system", "Sharp visual contrast", "Conversion rate optimization"],
      icon: <Laptop className="w-5 h-5 text-indigo-500" />
    },
    {
      id: "custom-dev",
      titleSr: "Inženjerski Development (TypeScript & React)",
      titleEn: "Engineering Development (TypeScript & React)",
      descSr: "Razvijamo čiste, brze i bezbedne web sisteme bez tromih 'all-in-one' šablona. Brzina učitavanja manja od 0.5s za maksimalno Google rangiranje.",
      descEn: "We build clean, blazingly fast TypeScript applications with zero bloated templates. Sub-second load times for peak Google Core Web Vitals.",
      deliverablesSr: ["100/100 Google PageSpeed rezultat", "Čist vlasnički kod", "Jednostavan CMS panel za izmene", "Automatski backup i SSL zaštita"],
      deliverablesEn: ["100/100 PageSpeed score", "100% proprietary clean code", "Intuitive admin content panel", "Automated backups & SSL security"],
      icon: <Code2 className="w-5 h-5 text-cyan-500" />
    },
    {
      id: "seo-cro",
      titleSr: "Tehnički SEO & Optimizacija Konverzija (CRO)",
      titleEn: "Technical SEO & CRO Optimization",
      descSr: "Pozicioniramo vaš biznis na lokalnim i organskim Google pretragama. Postavljamo GA4 telemetriju i merimo svaku interakciju kupca.",
      descEn: "We rank your business for high-intent local and organic search terms while tracking every call, booking, and form submission via GA4.",
      deliverablesSr: ["Schema.org strukturirani podaci", "Google Business profil optimizacija", "GA4 praćenje konverzija", "Optimizacija brzine i meta tagova"],
      deliverablesEn: ["Schema.org microdata setup", "Google Maps optimization", "GA4 conversion events", "Core Web Vitals tuning"],
      icon: <Search className="w-5 h-5 text-emerald-500" />
    },
    {
      id: "booking-automation",
      titleSr: "Booking Sistemi & Automatizacija Poslovanja",
      titleEn: "Booking Engines & Workflow Automation",
      descSr: "Uklanjamo ručni rad oko zakazivanja, odgovaranja na poruke i slanja ponuda. Digitalizujemo vaš operativni proces.",
      descEn: "We eliminate administrative friction around appointments, repetitive inquiries, and lead dispatch with automated workflows.",
      deliverablesSr: ["Online kalendar sa SMS/Email podsetnicima", "Integracija sa CRM i bazom kupaca", "Automatizovani izveštaji", "Sinhronizacija 24/7"],
      deliverablesEn: ["Online calendar with notifications", "CRM & database integration", "Automated dispatch reporting", "24/7 reliability"],
      icon: <Calendar className="w-5 h-5 text-rose-500" />
    }
  ];

  const [activeTab, setActiveTab] = useState<string>(initialServiceId || services[0].id);
  const selectedService = services.find((s) => s.id === activeTab) || services[0];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Modal Header */}
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <Sparkles size={18} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {isSr ? "Detaljan pregled usluga & isporuka" : "Detailed Service Capabilities & Deliverables"}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {isSr ? "Inženjerske i strateške mogućnosti SSolutions-a" : "SSolutions strategic & engineering scope"}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Left Category Tabs (4 cols) */}
            <div className="md:col-span-5 space-y-2">
              {services.map((srv) => (
                <button
                  key={srv.id}
                  onClick={() => setActiveTab(srv.id)}
                  className={`w-full p-3.5 rounded-2xl text-left border transition-all flex items-center gap-3 cursor-pointer ${
                    activeTab === srv.id
                      ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                      : "bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-slate-400"
                  }`}
                >
                  <div className={`p-1.5 rounded-lg ${activeTab === srv.id ? "bg-white/20 text-white" : "bg-slate-200 dark:bg-white/10"}`}>
                    {srv.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-bold truncate">
                    {isSr ? srv.titleSr : srv.titleEn}
                  </span>
                </button>
              ))}
            </div>

            {/* Right Detailed Description & Deliverables (7 cols) */}
            <div className="md:col-span-7 p-6 rounded-2xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/5 space-y-6 flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="text-xl font-bold text-slate-900 dark:text-white">
                  {isSr ? selectedService.titleSr : selectedService.titleEn}
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {isSr ? selectedService.descSr : selectedService.descEn}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase">
                    {isSr ? "ŠTA TAČNO DOBIJATE (DELIVERABLES):" : "WHAT YOU RECEIVE (DELIVERABLES):"}
                  </div>

                  <div className="space-y-1.5">
                    {(isSr ? selectedService.deliverablesSr : selectedService.deliverablesEn).map((d, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200">
                        <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action inside modal */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  {isSr ? "Prilagođeno vašem biznisu" : "Tailored to your scope"}
                </span>

                <button
                  onClick={() => {
                    onClose();
                    scrollToTarget("#scene-10", 60);
                  }}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-blue-500/20 cursor-pointer"
                >
                  <span>{isSr ? "Zatražite analizu za ovu uslugu" : "Request Audit for This Scope"}</span>
                  <ArrowRight size={13} />
                </button>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
