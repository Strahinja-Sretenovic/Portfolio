import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  RefreshCw, 
  Sparkles, 
  Cpu, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  Layout, 
  FileText, 
  ShieldCheck, 
  BarChart3,
  CalendarCheck,
  CreditCard,
  Layers
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { scrollToTarget } from "./SmoothScroll";
import { trackConsultationCtaClick } from "../utils/analytics";

export function Services() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const [activeService, setActiveService] = useState<string>("redesign");

  const services = [
    {
      id: "redesign",
      badge: isSr ? "Za postojeće sajtove" : "For Existing Websites",
      title: isSr ? "Website Strategy & Redesign" : "Website Strategy & Redesign",
      subtitle: isSr 
        ? "Za biznise čiji postojeći sajt ne donosi očekivane rezultate i gubi potencijalne klijente." 
        : "For established businesses whose current website fails to convert visitors into inquiries.",
      icon: <RefreshCw className="w-6 h-6 text-blue-500" />,
      includes: [
        isSr ? "Detaljan audit postojećeg sajta i tačaka napuštanja" : "Comprehensive website UX & drop-off audit",
        isSr ? "Analiza ponuda i pozicioniranja konkurencije" : "Competitor positioning & messaging analysis",
        isSr ? "Nova informaciona arhitektura i struktura stranica" : "Restructured information architecture & user journeys",
        isSr ? "Strategija sadržaja i jasne prodajne poruke" : "High-intent content strategy & value propositions",
        isSr ? "Potpuni UX/UI redizajn i razvoj na čistom kodu" : "Complete modern UX/UI redesign & clean code development",
        isSr ? "Postavljanje analitike za merenje novih upita" : "Custom GA4 telemetry & conversion event tracking"
      ],
      ctaText: isSr ? "Analizirajte moj postojeći sajt" : "Audit My Existing Website",
      contextMessage: isSr 
        ? "Želim analizu i redizajn postojećeg sajta" 
        : "I want an audit and redesign of my current website"
    },
    {
      id: "new-site",
      badge: isSr ? "Novi digitalni temelj" : "New Digital Foundation",
      title: isSr ? "New Business Website" : "New Business Website",
      subtitle: isSr 
        ? "Za biznise kojima je potreban profesionalan, brz i strateški osmišljen digitalni centar." 
        : "For companies requiring an authoritative, high-speed digital foundation engineered for trust.",
      icon: <Sparkles className="w-6 h-6 text-indigo-500" />,
      includes: [
        isSr ? "Discovery radionica: razumevanje biznisa i ciljne grupe" : "Discovery session: business model & audience deep dive",
        isSr ? "Strateški plan strukture sajta i korisničkih puteva" : "Strategic sitemap planning & decision paths",
        isSr ? "Moderan, responzivan dizajn prilagođen mobilnim uređajima" : "Bespoke, accessible UX/UI designed mobile-first",
        isSr ? "Inženjerska izrada u TypeScript-u (<0.5s učitavanje)" : "High-performance TypeScript engineering (<0.5s load)",
        isSr ? "Tehnički SEO temelj i Google Search Console indeksiranje" : "Technical SEO foundations & Google schema indexing",
        isSr ? "Jednostavan sistem za samostalno ažuriranje sadržaja" : "Intuitive CMS for seamless content updates"
      ],
      ctaText: isSr ? "Želim novi sajt" : "I Need a New Website",
      contextMessage: isSr 
        ? "Potreban mi je novi profesionalni sajt" 
        : "I need a new professional business website"
    },
    {
      id: "automation",
      badge: isSr ? "Efikasnost & Ušteda Vremena" : "Operations & Automation",
      title: isSr ? "Web Applications & Automation" : "Web Applications & Automation",
      subtitle: isSr 
        ? "Za biznise koji gube sate na ručne rezervacije, duplu administraciju i ponavljajuće poslove." 
        : "For businesses wasting hours on repetitive manual booking, phone calls, and paperwork.",
      icon: <Cpu className="w-6 h-6 text-cyan-500" />,
      includes: [
        isSr ? "Interaktivni sistemi za online zakazivanje termina 24/7" : "Interactive 24/7 client booking engines",
        isSr ? "Automatski SMS i email podsetnici za klijente" : "Automated SMS & email appointment alerts",
        isSr ? "Korisnički portali i interne kontrolne table (dashboards)" : "Client portals & internal management dashboards",
        isSr ? "Automatsko generisanje PDF ugovora, ponuda i računa" : "Automated PDF contract & invoice generation",
        isSr ? "Integracija sa platnim karticama banaka i kurirskim službama" : "Bank payment gateways & courier API integrations",
        isSr ? "Povezivanje eksternih baza i softvera (API)" : "Custom API integrations & database synchronization"
      ],
      ctaText: isSr ? "Imam proces koji želim da automatizujem" : "I Have a Process to Automate",
      contextMessage: isSr 
        ? "Želim automatizaciju procesa ili web aplikaciju" 
        : "I want process automation or custom web software"
    },
    {
      id: "growth",
      badge: isSr ? "Maksimalan povrat" : "Revenue & CRO",
      title: isSr ? "Growth & Optimization" : "Growth & Optimization",
      subtitle: isSr 
        ? "Za biznise koji već imaju posete, ali žele veći procenat konverzije i bolju poziciju na Google-u." 
        : "For established websites with traffic looking to extract significantly higher conversion rates.",
      icon: <TrendingUp className="w-6 h-6 text-emerald-500" />,
      includes: [
        isSr ? "Duboka analitika ponašanja posetilaca i toplotne mape" : "Heatmap analysis & visitor journey telemetry",
        isSr ? "Optimizacija konverzije (CRO) i uklanjanje frikcija u toku naručivanja" : "Conversion Rate Optimization (CRO) & funnel tuning",
        isSr ? "Namenske landing stranice za Google Ads i marketing kampanje" : "High-converting campaign landing page engineering",
        isSr ? "Napredni lokalni i tehnički SEO za preuzimanje tržišta" : "Advanced local & technical search engine optimization",
        isSr ? "Tehnička optimizacija brzine (Core Web Vitals)" : "Core Web Vitals & runtime performance hardening",
        isSr ? "Mesečni izveštaji i iterativno unapređenje na osnovu podataka" : "Monthly strategic telemetry & evidence-based iterations"
      ],
      ctaText: isSr ? "Želim više rezultata iz postojećeg sajta" : "I Want Better Conversion from My Site",
      contextMessage: isSr 
        ? "Želim optimizaciju konverzije i rast rezultata" 
        : "I want growth, CRO and higher conversion from my site"
    }
  ];

  const current = services.find((s) => s.id === activeService) || services[0];

  const handleCta = (service: typeof services[0]) => {
    trackConsultationCtaClick({
      location: `Services_${service.id}`,
      ctaText: service.ctaText,
      target: "#contact",
      serviceContext: service.contextMessage
    });
    scrollToTarget("#contact", 80);
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 relative bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers size={14} />
            <span>{isSr ? "Usluge Strukturirane Prema Poslovnim Potrebama" : "Business-Driven Services"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isSr ? "Rešenja prilagođena fazi u kojoj se vaš biznis nalazi" : "Solutions tailored to your exact business stage"}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {isSr
              ? "Ne prodajemo 'pakete od 5 stranica'. Svaka usluga je osmišljena oko konkretnog poslovnog cilja i merljivog poboljšanja."
              : "We don't sell generic '5-page template bundles'. Every engagement is architected around a specific business outcome."}
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {services.map((s) => {
            const isSelected = activeService === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActiveService(s.id)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-xl shadow-blue-500/25 border-blue-500 ring-2 ring-blue-400/30"
                    : "bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-xl ${isSelected ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"}`}>
                      {s.icon}
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${isSelected ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"}`}>
                      {s.badge}
                    </span>
                  </div>
                  <div className={`text-sm sm:text-base font-bold mb-1 ${isSelected ? "text-white" : "text-slate-900 dark:text-white"}`}>
                    {s.title}
                  </div>
                </div>
                <div className={`text-xs mt-2 line-clamp-2 ${isSelected ? "text-blue-100" : "text-slate-500 dark:text-slate-400"}`}>
                  {s.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Service Detailed Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-7 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-8"
          >
            {/* Header of Active Service */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div className="space-y-2">
                <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
                  {current.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  {current.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
                  {current.subtitle}
                </p>
              </div>

              <button
                onClick={() => handleCta(current)}
                className="w-full lg:w-auto px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all cursor-pointer shrink-0"
              >
                <span>{current.ctaText}</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Deliverables & Strategic Inclusions */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono">
                {isSr ? "Šta ovaj angažman obuhvata:" : "Engagement Scope & Deliverables:"}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {current.includes.map((item, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/80 flex items-start gap-3"
                  >
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
