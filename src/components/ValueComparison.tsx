import { useState } from "react";
import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { 
  XCircle, 
  CheckCircle2, 
  TrendingDown, 
  TrendingUp, 
  Gauge, 
  Smartphone, 
  Search, 
  MousePointerClick,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { trackConsultationCtaClick } from "../utils/analytics";

export function ValueComparison() {
  const { language } = useLanguage();

  const isSr = language === "sr";
  const [activeTab, setActiveTab] = useState<"comparison" | "stats">("comparison");

  const comparisonRows = [
    {
      metric: isSr ? "Brzina učitavanja sajta" : "Page Loading Speed",
      bad: isSr ? "3.5s - 6s (Kupci odustaju pre otvaranja)" : "3.5s - 6s (High bounce rate)",
      good: isSr ? "< 0.6s (Instant otvaranje bez čekanja)" : "< 0.6s (Instantaneous load)",
      icon: <Gauge size={16} />
    },
    {
      metric: isSr ? "Korisničko iskustvo na mobilnom" : "Mobile UX & Responsiveness",
      bad: isSr ? "Zbijen tekst, prekinute slike, sitna dugmad" : "Cluttered layout, broken imagery",
      good: isSr ? "100% prilagođeno za naručivanje i poziv jednim dodirom" : "Flawless one-tap conversion flow",
      icon: <Smartphone size={16} />
    },
    {
      metric: isSr ? "Google SEO Pozicija" : "Google SEO Visibility",
      bad: isSr ? "Zakopano na 5. strani pretrage gde vas niko ne vidi" : "Buried on search page 5+",
      good: isSr ? "Optimizovana struktura za rangiranje na prvoj strani" : "Page-1 ready SEO foundation",
      icon: <Search size={16} />
    },
    {
      metric: isSr ? "Konverzija (Pretvaranje posetilaca u kupce)" : "Conversion Rate (Visitor to Lead)",
      bad: isSr ? "Posetioci uđu, zbune se i odu kod konkurencije" : "Confusing flow, 0 inbound leads",
      good: isSr ? "Jasna prodajna struktura koja podstiče direktan kontakt" : "Strategic sales funnel driving action",
      icon: <MousePointerClick size={16} />
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 relative overflow-hidden bg-white dark:bg-[#0c0c0c] border-t border-slate-200/60 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title={isSr ? "Zašto Zastareo Sajt Košta Vaš Biznis?" : "The Real Cost of an Outdated Website"} 
          subtitle={isSr 
            ? "Preko 75% korisnika procenjuje kredibilitet firme na osnovu brzine i izgleda sajta. Pogledajte razliku:" 
            : "Over 75% of consumers judge a company's credibility based on website speed and UX. Here is the difference:"}
        />

        {/* Side by side comparison cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 items-stretch">
          {/* Card 1: The Outdated Way (Bad) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-3xl bg-red-500/[0.03] dark:bg-red-500/[0.04] border border-red-200/80 dark:border-red-500/20 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400 text-xs font-bold">
                  <TrendingDown size={14} />
                  <span>{isSr ? "Tipičan / Zastareo Sajt" : "Outdated / Generic Website"}</span>
                </div>
                <span className="text-xs font-semibold text-red-600 dark:text-red-400">
                  {isSr ? "Gubi kupce" : "High Churn"}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">
                {isSr ? "Skriveni gubici i propuštene prilike" : "Lost Inquiries & Wasted Traffic"}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                {isSr 
                  ? "Ako se vaš sajt učitava duže od 3 sekunde ili izgleda neprivlačno na telefonu, 53% potencijalnih klijenata odmah klikne 'Nazad' i odlazi kod konkurencije."
                  : "If your site takes more than 3 seconds to load or looks dated on mobile, 53% of potential clients immediately bounce to your competitors."}
              </p>

              <div className="space-y-4">
                {comparisonRows.map((row, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white/80 dark:bg-black/40 border border-red-200/50 dark:border-red-500/15">
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                      {row.icon}
                      <span>{row.metric}</span>
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-red-700 dark:text-red-400 flex items-center gap-2">
                      <XCircle size={15} className="shrink-0 text-red-500" />
                      <span>{row.bad}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-red-200/60 dark:border-red-500/15 text-xs text-red-600 dark:text-red-400 font-medium">
              {isSr ? "⚠️ Rezultat: Malo poziva, slaba zarada i bacanje novca na reklame." : "⚠️ Outcome: Low ROI, high bounce rate, lost market share."}
            </div>
          </motion.div>

          {/* Card 2: The SSolutions Way (Good) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-blue-500/[0.06] to-indigo-500/[0.04] dark:from-blue-500/10 dark:to-indigo-500/10 border-2 border-blue-500/40 dark:border-blue-400/40 shadow-lg shadow-blue-500/5 flex flex-col justify-between"
          >
            {/* Top highlight badge */}
            <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-md flex items-center gap-1.5">
              <Sparkles size={12} />
              <span>{isSr ? "Preporučeni Standard" : "SSolutions Standard"}</span>
            </div>

            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 text-xs font-bold">
                  <TrendingUp size={14} />
                  <span>{isSr ? "SSolutions Premium Pristup" : "SSolutions High-Growth Engine"}</span>
                </div>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  {isSr ? "Maksimalan ROI" : "+250% Growth"}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">
                {isSr ? "Digitalna mašina koja radi za vas 24/7" : "Engineered to Win & Convert Customers"}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                {isSr 
                  ? "Pravimo sajtove koji momentalno ostavljaju utisak lidera u industriji, učitavaju se u deliću sekunde i navode posetioce da vas odmah kontaktiraju."
                  : "We build websites that immediately establish market leadership, load in a fraction of a second, and effortlessly turn clicks into high-ticket clients."}
              </p>

              <div className="space-y-4">
                {comparisonRows.map((row, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white dark:bg-[#141414] border border-blue-200/80 dark:border-blue-500/30 shadow-xs">
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                      {row.icon}
                      <span>{row.metric}</span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                      <CheckCircle2 size={16} className="shrink-0 text-emerald-500" />
                      <span>{row.good}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-blue-200/80 dark:border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-emerald-700 dark:text-emerald-400 font-bold">
                {isSr ? "✅ Rezultat: Više poziva, veći profit i stalni novi klijenti." : "✅ Outcome: Consistent leads, brand prestige & maximum revenue."}
              </span>
              <a
                href="#contact"
                onClick={() => trackConsultationCtaClick({
                  location: "Value_Comparison",
                  ctaText: isSr ? "Želim ovakav sajt" : "Upgrade My Website",
                  target: "#contact",
                  serviceContext: "Value Comparison High-Conversion Pitch"
                })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-600/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>{isSr ? "Želim ovakav sajt" : "Upgrade My Website"}</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
