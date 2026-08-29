import { motion } from "motion/react";
import { 
  Search, 
  Compass, 
  Layers, 
  Palette, 
  Code2, 
  LineChart, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { scrollToTarget } from "./SmoothScroll";

export function Process() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const stages = [
    {
      number: "01",
      title: isSr ? "Dijagnostika i biznis logika" : "Diagnosis & Business Logic",
      subtitle: isSr ? "Analiza problema, kupca, ponude i cilja" : "Problem, buyer, offer & goal analysis",
      icon: <Search className="w-5 h-5 text-blue-500" />,
      focus: isSr 
        ? "Razumemo vaš biznis, profil kupaca, ponudu, trenutni prodajni proces i gde tačno nastaju uska grla." 
        : "Understanding your business model, customer profiles, offer, sales process, and exact bottleneck points.",
      output: isSr 
        ? "Rezultat: Jasno definisana svrha i pravac projekta." 
        : "Output: Clearly defined project purpose and roadmap."
    },
    {
      number: "02",
      title: isSr ? "Struktura i copywriting" : "Structure & Copywriting",
      subtitle: isSr ? "Šta tačno govorimo, kojim redom i zašto" : "What we say, in what sequence and why",
      icon: <Compass className="w-5 h-5 text-indigo-500" />,
      focus: isSr 
        ? "Kreiramo tekstove i hijerarhiju informacija koji vode posetioca od prvog utiska do jasne odluke o kontaktu." 
        : "Crafting copy and information architecture that guides visitors from first glance to confident action.",
      output: isSr 
        ? "Rezultat: Sadržaj i poruke prilagođene vašim kupcima." 
        : "Output: Tailored messaging and persuasive content hierarchy."
    },
    {
      number: "03",
      title: isSr ? "UI/UX dizajn" : "UI/UX Design",
      subtitle: isSr ? "Vizuelni autoritet, preglednost i mobile UX" : "Visual authority, clarity & mobile UX",
      icon: <Palette className="w-5 h-5 text-amber-500" />,
      focus: isSr 
        ? "Projektujemo moderan, čist interfejs gde se svaka informacija lako pronalazi, a navigacija je besprekorna na telefonima." 
        : "Designing clean, modern interfaces where key information is instant to find with flawless mobile UX.",
      output: isSr 
        ? "Rezultat: Pregledan dizajn koji gradi poverenje." 
        : "Output: High-trust visual design system."
    },
    {
      number: "04",
      title: isSr ? "Tehnička izrada i performanse" : "Engineering & Performance",
      subtitle: isSr ? "Brzina, sigurnost i tehnički SEO temelj" : "Sub-second speed, security & technical SEO",
      icon: <Code2 className="w-5 h-5 text-cyan-500" />,
      focus: isSr 
        ? "Pišemo čist, optimizovan kod. Sajt se učitava munjevito brzo, stabilan je i tehnički prilagođen Google indeksiranju." 
        : "Writing clean, performant code. Instant page loads, robust security, and proper Google crawlability.",
      output: isSr 
        ? "Rezultat: Tehnički besprekoran i brz sistem." 
        : "Output: High-performance, production-ready website."
    },
    {
      number: "05",
      title: isSr ? "Integracije i automatizacija" : "Integrations & Automation",
      subtitle: isSr ? "Google, booking, kontakt forme i analytics" : "Google, booking, contact forms & telemetry",
      icon: <Layers className="w-5 h-5 text-emerald-500" />,
      focus: isSr 
        ? "Povezujemo sisteme za zakazivanje, pametne forme, obaveštenja na email/telefon i analitiku za merenje konverzija." 
        : "Connecting scheduling engines, smart forms, automated lead notifications, and analytics tracking.",
      output: isSr 
        ? "Rezultat: Automatizovan proces koji štedi vaše vreme." 
        : "Output: Automated workflows saving you daily operational time."
    },
    {
      number: "06",
      title: isSr ? "Lansiranje, merenje i podrška" : "Launch, Measurement & Support",
      subtitle: isSr ? "Testiranje, puštanje uživo i praćenje rezultata" : "Testing, live launch & real-world telemetry",
      icon: <LineChart className="w-5 h-5 text-rose-500" />,
      focus: isSr 
        ? "Temeljno testiramo sve funkcionalnosti, puštamo sajt na domen i pratimo kako se stvarni korisnici ponašaju." 
        : "Thoroughly QA testing every interaction, pointing live domain, and monitoring user behavior.",
      output: isSr 
        ? "Rezultat: Bezbedno lansiran sajt sa praćenjem rezultata." 
        : "Output: Safe live deployment with ongoing measurement."
    }
  ];

  return (
    <section id="process" className="py-24 px-4 sm:px-6 relative bg-white dark:bg-[#0a0a0a] border-t border-slate-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass size={14} />
            <span>{isSr ? "Profesionalan Proces" : "Professional Process"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isSr ? "Kako izgleda profesionalan proces rada" : "How a professional web process works"}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {isSr
              ? "Strukturiran put u 6 faza koji eliminiše nagađanja, smanjuje rizik i osigurava da svaka uložena stavka ima jasnu poslovnu svrhu."
              : "A disciplined 6-stage lifecycle eliminating guesswork, reducing risk, and ensuring every line of code serves a measurable purpose."}
          </p>
        </div>

        {/* 6 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stages.map((stage, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-xl font-bold font-mono text-blue-600 dark:text-blue-400">
                    {stage.number}
                  </span>
                  <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    {stage.icon}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {stage.title}
                </h3>
                <div className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-3">
                  {stage.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {stage.focus}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
                <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 font-mono">
                  {stage.output}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Crucial Philosophy Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-900/30 via-slate-900 to-slate-900 text-white border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-base sm:text-lg font-bold text-white flex items-center gap-2 justify-center sm:justify-start">
              <Sparkles size={18} className="text-blue-400" />
              <span>{isSr ? "Launch nije kraj. Tek tada dobijamo stvarne podatke." : "Launch is not the finish line. That's when real telemetry begins."}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              {isSr 
                ? "Nakon puštanja u rad, pratimo kako se stvarni kupci ponašaju i vršimo fina podešavanja za maksimalan rezultat."
                : "Post-launch, we analyze real visitor journeys and perform high-leverage CRO adjustments."}
            </p>
          </div>

          <button
            onClick={() => scrollToTarget("#contact", 80)}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shrink-0"
          >
            <span>{isSr ? "Zatraži besplatnu analizu" : "Request Free Analysis"}</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
