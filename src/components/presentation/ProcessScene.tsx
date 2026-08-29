import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Compass, 
  Search, 
  Map, 
  Palette, 
  Code2, 
  BarChart3, 
  ChevronDown, 
  Sparkles, 
  RefreshCw,
  CheckCircle2
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function ProcessScene() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const steps = [
    {
      number: "01",
      name: "DISCOVERY",
      titleSr: "Razumemo biznis.",
      titleEn: "Understand the business.",
      descSr: "Razgovaramo o vašem poslovanju, profitnim uslugama, kupcima i tačnim ciljevima.",
      descEn: "We align on your commercial model, high-margin offerings, buyer profile, and exact goals.",
      deliverableSr: "Definisan poslovni cilj i dijagnoza",
      deliverableEn: "Commercial scope & diagnosis",
      icon: <Compass className="w-5 h-5 text-blue-500" />
    },
    {
      number: "02",
      name: "RESEARCH",
      titleSr: "Tražimo dokaze.",
      titleEn: "Find the evidence.",
      descSr: "Analiziramo konkurenciju, Google pretrage, ponašanje kupaca i mesta gde posetioci odustaju.",
      descEn: "We audit competitors, search intent, user journey friction, and bounce bottlenecks.",
      deliverableSr: "Izveštaj o preprekama i prilikama",
      deliverableEn: "Competitor & bottleneck audit",
      icon: <Search className="w-5 h-5 text-indigo-500" />
    },
    {
      number: "03",
      name: "STRATEGY & IA",
      titleSr: "Definišemo put.",
      titleEn: "Define the pathway.",
      descSr: "Postavljamo strukturu sajta, raspored poruka, prodajne tekstove i putanju do konverzije.",
      descEn: "We architect information hierarchy, conversion messaging, and seamless funnel flows.",
      deliverableSr: "Informaciona arhitektura & Copy",
      deliverableEn: "Wireframes & copywriting guide",
      icon: <Map className="w-5 h-5 text-cyan-500" />
    },
    {
      number: "04",
      name: "UX & DESIGN",
      titleSr: "Projektujemo iskustvo.",
      titleEn: "Design the experience.",
      descSr: "Kreiramo vizuelni autoritet prilagođen mobilnim telefonima, sa jasnim kontrastima i dugmadima.",
      descEn: "We craft authoritative mobile-first interfaces with clear contrast and high visual hierarchy.",
      deliverableSr: "Interaktivni prototip & UI komponente",
      deliverableEn: "Interactive UI prototype",
      icon: <Palette className="w-5 h-5 text-purple-500" />
    },
    {
      number: "05",
      name: "DEVELOPMENT",
      titleSr: "Gradimo rešenje.",
      titleEn: "Engineer the solution.",
      descSr: "Pišemo brz TypeScript kod bez teških šablona, podešavamo tehnički SEO i integracije.",
      descEn: "We write clean, blazingly fast TypeScript code, configure technical SEO, and connect workflows.",
      deliverableSr: "Testiran, 100/100 brz web sistem",
      deliverableEn: "Production codebase & SEO schema",
      icon: <Code2 className="w-5 h-5 text-emerald-500" />
    },
    {
      number: "06",
      name: "MEASURE",
      titleSr: "Merimo šta se stvarno dogodilo.",
      titleEn: "Measure real telemetry.",
      descSr: "Pratimo ponašanje stvarnih kupaca, merimo klikove na poziv i vršimo fina podešavanja.",
      descEn: "We analyze live visitor telemetry, track conversion events, and perform data-backed CRO tweaks.",
      deliverableSr: "GA4 merenje i optimizacija rezultata",
      deliverableEn: "GA4 telemetry & CRO tweaks",
      icon: <BarChart3 className="w-5 h-5 text-amber-500" />
    }
  ];

  return (
    <section
      id="scene-08"
      className="relative min-h-screen py-24 sm:py-32 px-4 sm:px-6 bg-white dark:bg-[#07090e] border-t border-slate-200 dark:border-white/5 overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Scene Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="text-xs sm:text-sm font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest">
            {isSr ? "08 / STRUKTURIRANI PROCES" : "08 / STRUCTURED LIFECYCLE"}
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {isSr ? "Od problema do rešenja." : "From problem to permanent solution."}
          </h2>

          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            {isSr
              ? "Inženjerski, predvidiv i transparentan tok saradnje u 6 jasnih koraka — bez improvizacija i bez nagađanja."
              : "A disciplined, predictable engineering flow across 6 milestones — zero guesswork, total transparency."}
          </p>
        </div>

        {/* 6 Steps Progression Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, idx) => {
            const isExpanded = expandedStep === idx;
            return (
              <div
                key={step.number}
                className={`p-6 rounded-3xl border transition-all duration-200 flex flex-col justify-between ${
                  isExpanded
                    ? "bg-blue-50/80 dark:bg-blue-950/30 border-blue-400 shadow-md"
                    : "bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-lg">
                      {step.number} • {step.name}
                    </span>
                    <div className="p-2 rounded-xl bg-white dark:bg-black/40 border border-slate-200/60 dark:border-white/5">
                      {step.icon}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {isSr ? step.titleSr : step.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {isSr ? step.descSr : step.descEn}
                    </p>
                  </div>
                </div>

                {/* Expandable Deliverable */}
                <div className="pt-4 mt-4 border-t border-slate-200/60 dark:border-white/5">
                  <button
                    onClick={() => setExpandedStep(isExpanded ? null : idx)}
                    className="w-full flex items-center justify-between text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                  >
                    <span>{isSr ? "Glavni ishod faze" : "Key Deliverable"}</span>
                    <ChevronDown size={14} className={`transition-transform duration-200 ${isExpanded ? "rotate-180 text-blue-500" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400">
                          <CheckCircle2 size={13} className="shrink-0" />
                          <span>{isSr ? step.deliverableSr : step.deliverableEn}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Climax: "Launch nije kraj" Loop Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 relative overflow-hidden space-y-6">
          <div className="absolute right-0 top-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono font-bold">
              <RefreshCw size={13} className="animate-spin" />
              <span>{isSr ? "KONTINUIRANO UNAPREĐENJE" : "CONTINUOUS TELEMETRY LOOP"}</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
              {isSr ? "Launch nije kraj." : "Launch is not the finish line."}
            </h3>

            <p className="text-xl sm:text-2xl text-blue-300 font-semibold">
              {isSr ? "Tek tada dobijamo stvarne podatke." : "That is when real telemetry begins."}
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {isSr
                ? "Merimo kako se stvarni posetioci ponašaju na sajtu, odakle dolaze upiti i gde je moguće izvršiti fina podešavanja za još veći rezultat."
                : "We observe how real visitors navigate your site, which channels convert best, and apply high-leverage CRO refinements."}
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs sm:text-sm font-mono text-slate-400">
              <span className="text-white font-bold">{isSr ? "Merimo." : "Measure."}</span>
              <span>→</span>
              <span className="text-white font-bold">{isSr ? "Učimo." : "Learn."}</span>
              <span>→</span>
              <span className="text-white font-bold">{isSr ? "Poboljšavamo." : "Refine."}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
