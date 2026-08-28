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
      id: "strategy-audit",
      badge: isSr ? "Dijagnostika" : "Diagnosis",
      title: isSr ? "Web strategija & audit" : "Web Strategy & Audit",
      forWhom: isSr ? "Za firme koje znaju da nešto ne radi, ali još ne znaju gde je pravi problem." : "For businesses that know something isn't working, but aren't sure where the real bottleneck lies.",
      problemSolved: isSr ? "Gubljenje novca na pretpostavke i 'lep dizajn' pre nego što je postavljen jasan temelj." : "Wasting capital on assumptions and cosmetic design before diagnosing root problems.",
      subtitle: isSr 
        ? "Za firme koje žele tačnu dijagnozu pre investiranja u razvoj." 
        : "For businesses wanting an objective diagnosis before investing.",
      icon: <Search className="w-6 h-6 text-blue-500" />,
      includes: [
        isSr ? "Analiza korisničkog puta, mobilnog iskustva i frikcija" : "Customer journey, mobile UX & conversion friction audit",
        isSr ? "Audit Google prisustva, recenzija i lokalnog SEO-a" : "Google Business profile, review signals & local search audit",
        isSr ? "Procena jasnoće ponude, cena i komunikacije" : "Evaluation of offer clarity, pricing cues & messaging",
        isSr ? "Poređenje sa direktnom konkurencijom" : "Direct competitor positioning analysis",
        isSr ? "Prioritizovana lista preporuka i sledećih koraka" : "Prioritized action roadmap with high-ROI next steps",
        isSr ? "Iskrena procena da li vam je nov sajt uopšte potreban" : "Honest verdict on whether a full redesign is even needed"
      ],
      ctaText: isSr ? "Analiziraj moj digitalni nastup" : "Audit My Digital Presence",
      contextMessage: isSr 
        ? "Želim web strategiju i analizu digitalnog nastupa" 
        : "I want a web strategy and digital audit"
    },
    {
      id: "new-site",
      badge: isSr ? "Novi digitalni temelj" : "New Foundation",
      title: isSr ? "Novi poslovni sajt" : "New Business Website",
      forWhom: isSr ? "Za firme kojima je potreban profesionalan digitalni temelj za privlačenje i konverziju klijenata." : "For companies that need an authoritative digital foundation to attract and convert clients.",
      problemSolved: isSr ? "Zavisnost od društvenih mreža, manjak autoriteta i propušteni upiti ozbiljnih klijenata." : "Over-reliance on social media, lack of business credibility, and missing qualified inquiries.",
      subtitle: isSr 
        ? "Za biznise kojima je potreban profesionalan digitalni centar." 
        : "For companies needing an authoritative, high-converting digital home.",
      icon: <Sparkles className="w-6 h-6 text-indigo-500" />,
      includes: [
        isSr ? "Discovery sesija: razumevanje biznisa, kupaca i ciljeva" : "Discovery session: business model & buyer persona mapping",
        isSr ? "Strateški plan strukture sajta i konverzijskih ruta" : "Strategic information architecture & conversion pathways",
        isSr ? "Moderan, responzivan dizajn prilagođen mobilnim uređajima" : "Clean, accessible mobile-first interface design",
        isSr ? "Inženjerska izrada u čistom kodu (<0.5s učitavanje)" : "Clean code engineering with sub-second page loads",
        isSr ? "Tehnički SEO temelj i Google Search Console indeksiranje" : "Technical SEO foundations & Google search indexing",
        isSr ? "Jednostavan sistem za samostalno ažuriranje sadržaja" : "Intuitive CMS for effortless internal updates"
      ],
      ctaText: isSr ? "Razgovarajmo o novom sajtu" : "Discuss a New Website",
      contextMessage: isSr 
        ? "Potreban mi je novi profesionalni sajt" 
        : "I need a new professional business website"
    },
    {
      id: "redesign",
      badge: isSr ? "Za postojeće sajtove" : "For Existing Sites",
      title: isSr ? "Redizajn & UX optimizacija" : "Redesign & UX Optimization",
      forWhom: isSr ? "Za firme koje već imaju sajt, ali on više ne predstavlja kvalitet biznisa ili ne daje očekivane rezultate." : "For businesses with an existing website that no longer represents their actual quality.",
      problemSolved: isSr ? "Zastareo izgled, loše korisničko iskustvo, nejasan sadržaj i gubljenje posetilaca." : "Outdated appearance, clunky mobile UX, confusing copy, and customer leaks.",
      subtitle: isSr 
        ? "Za sajtove koji zaostaju za stvarnim kvalitetom vaših usluga." 
        : "For sites lagging behind the real standard of your business.",
      icon: <RefreshCw className="w-6 h-6 text-blue-500" />,
      includes: [
        isSr ? "Detaljan audit postojećeg sajta i tačaka napuštanja" : "Comprehensive audit of existing site drop-off points",
        isSr ? "Reorganizacija strukture sadržaja i jasna ponuda" : "Restructured content hierarchy and clear value props",
        isSr ? "Potpuni UX/UI redizajn usklađen sa modernim standardima" : "Full UX/UI redesign aligned with high-converting standards",
        isSr ? "Uklanjanje tehničkog duga i drastično ubrzanje sajta" : "Elimination of bloated legacy code & speed optimization",
        isSr ? "Podešavanje jasnih poziva na akciju (CTA)" : "Refined conversion triggers and frictionless CTA paths",
        isSr ? "Analitika za praćenje novih upita i poziva" : "Telemetry setup for tracking inquiries and calls"
      ],
      ctaText: isSr ? "Analiziraj moj postojeći sajt" : "Analyze My Current Website",
      contextMessage: isSr 
        ? "Želim analizu i redizajn postojećeg sajta" 
        : "I want an audit and redesign of my current website"
    },
    {
      id: "automation",
      badge: isSr ? "Efikasnost & Ušteda" : "Efficiency & Automation",
      title: isSr ? "Web aplikacije & automatizacija" : "Web Applications & Automation",
      forWhom: isSr ? "Za firme koje gube vreme na ručne procese koji mogu biti jednostavniji." : "For businesses wasting hours on repetitive manual workflows that could be automated.",
      problemSolved: isSr ? "Ručno zakazivanje, zaboravljeni termini, pretrpane linije i spora interna administracija." : "Manual booking coordination, missed appointments, and slow paperwork.",
      subtitle: isSr 
        ? "Za biznise koji žele da automatizuju rezervacije i procese." 
        : "For businesses wanting to streamline bookings and internal tasks.",
      icon: <Cpu className="w-6 h-6 text-cyan-500" />,
      includes: [
        isSr ? "Sistemi za online zakazivanje termina 24/7 (booking)" : "24/7 self-serve customer booking systems",
        isSr ? "Korisnički portali i interne kontrolne table (dashboards)" : "Client portals & internal team dashboards",
        isSr ? "Automatizacija slanja ponuda, PDF ugovora i računa" : "Automated quotes, PDF contracts & invoicing",
        isSr ? "Automatski SMS/email podsetnici i notifikacije" : "Automated SMS/email reminder workflows",
        isSr ? "Integracije sa platnim karticama i servisima" : "Payment gateway integrations & bank checkout",
        isSr ? "Povezivanje eksternih baza i softvera (API)" : "Custom API integrations with CRM and accounting tools"
      ],
      ctaText: isSr ? "Želim da pojednostavim proces" : "I Want to Streamline a Process",
      contextMessage: isSr 
        ? "Želim automatizaciju procesa ili web aplikaciju" 
        : "I want process automation or custom web software"
    },
    {
      id: "seo",
      badge: isSr ? "Organski domet" : "Organic Reach",
      title: isSr ? "SEO & lokalna vidljivost" : "SEO & Local Visibility",
      forWhom: isSr ? "Za firme koje potencijalni klijenti teško pronalaze kada aktivno traže njihovu uslugu." : "For companies that prospects struggle to find when actively searching for their services.",
      problemSolved: isSr ? "Nevidljivost na Google pretrazi i mapama dok konkurencija preuzima lokalne klijente." : "Invisibility on Google search and Maps while competitors capture local buyers.",
      subtitle: isSr 
        ? "Za biznise koji žele da ih klijenti pronađu u trenutku potrebe." 
        : "For businesses wanting visibility when buyers have urgent intent.",
      icon: <Layout className="w-6 h-6 text-amber-500" />,
      includes: [
        isSr ? "Optimizacija Google Business profila i lokalnih signala" : "Google Business profile optimization & local signals",
        isSr ? "Tehnički SEO: semantički HTML, Core Web Vitals i indeksiranje" : "Technical SEO: semantic schema, Core Web Vitals & indexing",
        isSr ? "Optimizacija stranica za profitabilne ključne pretrage" : "On-page search optimization for high-ticket services",
        isSr ? "Struktura sajta koja olakšava pretraživačima razumevanje usluga" : "Search-engine-friendly architecture & structured data",
        isSr ? "Iskrena strategija — bez lažnih garancija '#1 mesta preko noći'" : "Ethical, sustainable SEO strategy without fake quick-fix claims",
        isSr ? "Praćenje rasta organskih impresija i klikova" : "Telemetry for impressions, search clicks, and calls"
      ],
      ctaText: isSr ? "Poboljšaj vidljivost na Google-u" : "Improve Google Visibility",
      contextMessage: isSr 
        ? "Želim poboljšanje SEO-a i vidljivosti na Google-u" 
        : "I want to improve SEO and Google visibility"
    },
    {
      id: "growth",
      badge: isSr ? "Maksimalan povrat" : "Conversion & Growth",
      title: isSr ? "Growth & CRO optimizacija" : "Growth & CRO Optimization",
      forWhom: isSr ? "Za firme koje već imaju saobraćaj, ali žele više rezultata iz postojećih poseta." : "For businesses with steady traffic looking to extract more qualified leads from visitors.",
      problemSolved: isSr ? "Niska stopa konverzije, skup marketing budžet i posetioci koji odlaze bez akcije." : "Low conversion rates, wasted ad spend, and visitors bouncing without inquiring.",
      subtitle: isSr 
        ? "Za sajtove koji žele veći procenat konverzija i veći prihod." 
        : "For websites wanting higher conversion yield and ROI.",
      icon: <TrendingUp className="w-6 h-6 text-emerald-500" />,
      includes: [
        isSr ? "Duboka analitika ponašanja posetilaca i toplotne mape" : "Heatmap tracking & visitor behavioral analysis",
        isSr ? "Optimizacija konverzije (CRO) i uklanjanje frikcija" : "Conversion Rate Optimization (CRO) & funnel tuning",
        isSr ? "Namenske landing stranice za Google Ads i kampanje" : "High-converting campaign landing page development",
        isSr ? "A/B testiranje ključnih poruka i poziva na akciju" : "Iterative testing of high-leverage copy and CTAs",
        isSr ? "Mesečni izveštaji i iterativno unapređenje na osnovu podataka" : "Monthly strategic telemetry & evidence-based iterations",
        isSr ? "Fokus na stvarni profit i ROI, a ne na 'vanity' metrike" : "Strict focus on revenue and conversion yield"
      ],
      ctaText: isSr ? "Želim više rezultata iz postojećeg sajta" : "I Want Better Conversion from My Site",
      contextMessage: isSr 
        ? "Želim optimizaciju konverzije i rast rezultata" 
        : "I want growth, CRO and higher conversion from our site"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-10">
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
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div className="space-y-3 max-w-2xl">
                <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
                  {current.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  {current.title}
                </h3>
                
                {/* 1. Za koga je? & 2. Koji problem rešava? */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/60 dark:border-slate-800/80">
                    <div className="text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                      {isSr ? "1. Za koga je?" : "1. Who is this for?"}
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                      {current.forWhom}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/60 dark:border-slate-800/80">
                    <div className="text-[11px] font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                      {isSr ? "2. Koji problem rešava?" : "2. Problem solved"}
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                      {current.problemSolved}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto shrink-0 pt-2">
                <div className="text-[11px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 text-left lg:text-right">
                  {isSr ? "4. Sledeći korak" : "4. Next Step"}
                </div>
                <button
                  onClick={() => handleCta(current)}
                  className="w-full lg:w-auto px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
                >
                  <span>{current.ctaText}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Deliverables & Strategic Inclusions: 3. Šta dobijam? */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 font-mono flex items-center gap-2">
                <span className="text-emerald-500">3.</span>
                <span>{isSr ? "Šta dobijate kroz ovaj angažman:" : "What is included & delivered:"}</span>
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
