import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Search, 
  Calendar, 
  Layers, 
  Bot, 
  Sparkles, 
  CheckCircle2 
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function RiskReversalScene() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const alternativePriorities = [
    {
      nameSr: "Optimizacija Google profila",
      nameEn: "Google Profile & Maps Polish",
      descSr: "Ponekad je najbolje samo srediti lokalne mape i fotografije.",
      descEn: "Sometimes all that is needed is fixing local maps and photo assets."
    },
    {
      nameSr: "Uvođenje online bookinga",
      nameEn: "Introducing Online Booking",
      descSr: "Ako sajt već postoji, dovoljno je integrisati digitalni kalendar.",
      descEn: "If the site already exists, simply adding calendar scheduling suffices."
    },
    {
      nameSr: "Jasnije definisanje ponude",
      nameEn: "Restructuring Service Offer",
      descSr: "Izmena tekstova i paketa cena na postojećim stranicama.",
      descEn: "Sharpening value copy and pricing tiers on existing landing pages."
    },
    {
      nameSr: "Jedna namenska landing stranica",
      nameEn: "Single High-Converting Landing Page",
      descSr: "Fokusirana stranica za tačno određenu profitabilnu uslugu.",
      descEn: "A dedicated conversion page for a single high-margin offering."
    },
    {
      nameSr: "Automatizacija poruka i upita",
      nameEn: "Automating Lead Routing",
      descSr: "Povezivanje formi sa CRM-om ili SMS obaveštenjima.",
      descEn: "Connecting contact forms to CRM or instant SMS dispatch."
    },
    {
      nameSr: "Nekoliko preciznih UX izmena",
      nameEn: "Precision UX Refinements",
      descSr: "Ubrzanje učitavanja na mobilnom i isticanje dugmeta za poziv.",
      descEn: "Mobile speed optimization and prominent one-tap call CTAs."
    }
  ];

  return (
    <section
      id="scene-12"
      className="relative min-h-[85vh] sm:min-h-screen py-24 sm:py-32 px-4 sm:px-6 bg-slate-50 dark:bg-[#090c14] border-t border-slate-200 dark:border-white/5 overflow-hidden transition-colors duration-500 flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full space-y-16">

        {/* Scene Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="text-xs sm:text-sm font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest">
            {isSr ? "12 / POTPUNA ISKRENOST I TRANZICIJA RIZIKA" : "12 / RISK REVERSAL & HONESTY"}
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {isSr ? "A šta ako vam novi sajt nije potreban?" : "And what if you don't need a new website?"}
            <br />
            <span className="text-blue-600 dark:text-blue-400">
              {isSr ? "Reći ćemo vam." : "We will tell you."}
            </span>
          </h2>

          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            {isSr
              ? "Početna analiza postoji upravo zato da prvo utvrdimo gde ima najviše smisla ulagati novac i vreme. Ne prodajemo unapred određeno rešenje."
              : "The initial audit exists precisely to identify where it makes the most sense to invest capital and time. We never sell pre-packaged mandates."}
          </p>
        </div>

        {/* Alternative Priorities Grid */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            {isSr ? "MOŽDA JE VAŠ PRAVI PRIORITET NEŠTO OD OVOGA:" : "PERHAPS YOUR REAL COMMERCIAL PRIORITY IS ONE OF THESE:"}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {alternativePriorities.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 space-y-1.5"
              >
                <div className="flex items-center gap-2 text-xs font-bold font-mono text-blue-600 dark:text-blue-400">
                  <CheckCircle2 size={14} />
                  <span>0{idx + 1}</span>
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  {isSr ? item.nameSr : item.nameEn}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {isSr ? item.descSr : item.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Climax Statement */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <h3 className="text-xl sm:text-3xl font-display font-extrabold text-white">
              {isSr ? "Tražimo sledeći potez koji ima najviše smisla." : "We seek the next move with highest leverage."}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              {isSr
                ? "Nema pritiska za kupovinu. Dobijate iskren inženjerski uvid pre bilo kakvog ugovora."
                : "Zero sales pressure. You receive an honest engineering evaluation before any contract."}
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold shrink-0 flex items-center gap-2">
            <ShieldCheck size={16} />
            <span>{isSr ? "100% ISKRENA PROCENA" : "100% HONEST EVALUATION"}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
