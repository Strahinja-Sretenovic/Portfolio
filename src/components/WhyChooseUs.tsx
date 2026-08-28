import { motion } from "motion/react";
import { 
  CheckCircle2, 
  Target, 
  BrainCircuit, 
  MessageSquare, 
  LineChart, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { scrollToTarget } from "./SmoothScroll";

export function WhyChooseUs() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const differentiators = [
    {
      icon: <Target className="w-6 h-6 text-blue-500" />,
      title: isSr ? "Prvo problem, onda tehnologija" : "Problem diagnosis before technology",
      description: isSr
        ? "Ne biramo alate niti predlažemo rešenja dok ne razumemo šta tačno treba da popravimo u vašem poslovanju."
        : "We never prescribe code frameworks or tools until we pinpoint the exact operational bottleneck to solve."
    },
    {
      icon: <BrainCircuit className="w-6 h-6 text-indigo-500" />,
      title: isSr ? "Razmišljanje + realizacija" : "Strategic thinking + hands-on engineering",
      description: isSr
        ? "Ista osoba razume poslovni model, psihologiju kupca i tehnički sprovodi ceo sistem u kod."
        : "The same expert diagnoses commercial friction, architects UX, and executes clean code with zero agency disconnect."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-cyan-500" />,
      title: isSr ? "Bez tehničkog žargona" : "Zero confusing technical jargon",
      description: isSr
        ? "Sve odluke objašnjavamo kroz poslovne ishode: više upita, manje izgubljenog vremena i lakše odluke kupaca."
        : "Every decision is framed around commercial outcomes: higher conversion, hours saved, and reduced customer friction."
    },
    {
      icon: <LineChart className="w-6 h-6 text-emerald-500" />,
      title: isSr ? "Merimo stvarni rezultat" : "Empirical measurement & analytics",
      description: isSr
        ? "Postavljamo preciznu telemetriju i definišemo šta znači uspeh: broj poziva, poslati formulari i porudžbine."
        : "We establish granular conversion telemetry to measure qualified leads, bookings, and customer acquisitions."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
      title: isSr ? "Dugoročno održivo i stabilno" : "Long-term maintainable systems",
      description: isSr
        ? "Biramo čiste, brze tehnologije koje vaš biznis može stabilno i samostalno da koristi godinama bez loma."
        : "We build maintainable, lightning-fast solutions that your business can operate smoothly for years to come."
    }
  ];

  return (
    <section id="why-ssolutions" className="py-20 px-4 sm:px-6 relative bg-slate-50 dark:bg-[#0b0f17] border-t border-slate-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            <span>{isSr ? "Naša Razlika" : "Core Differentiators"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isSr ? "Zašto partnerstvo sa SSolutions?" : "Why choose SSolutions?"}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {isSr
              ? "Umesto praznih reči o „inovacijama i strasti“, evo konkretnih principa po kojima radimo:"
              : "Beyond generic agency buzzwords, here are the foundational consulting principles that guide our work:"}
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {differentiators.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-7 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 w-fit">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Quick CTA Box in Grid */}
          <div className="p-7 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white">
                {isSr ? "Želite konkretan razgovor o vašem biznisu?" : "Ready for a pragmatic assessment?"}
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                {isSr 
                  ? "Bez pritiska i bez obaveze. Pregledamo vašu situaciju i dajemo preporuke." 
                  : "Zero pressure. We audit your current channels and offer concrete recommendations."}
              </p>
            </div>

            <button
              onClick={() => scrollToTarget("#contact", 80)}
              className="w-full py-3 px-4 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
            >
              <span>{isSr ? "Zakažite konsultacije" : "Schedule a Consultation"}</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
