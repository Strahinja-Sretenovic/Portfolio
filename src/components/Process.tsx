import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { 
  MessageSquare, 
  Palette, 
  Rocket, 
  LifeBuoy, 
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Process() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const steps = [
    {
      number: "01",
      icon: <MessageSquare className="w-6 h-6 text-blue-500" />,
      title: isSr ? "Besplatne Konsultacije & Plan" : "Discovery & Strategy",
      subtitle: isSr ? "Bez komplikovanih tehničkih reči" : "No confusing jargon",
      description: isSr 
        ? "Saslušamo vaše ciljeve, analiziramo šta radi vaša konkurencija i definišemo tačan plan kako da vaš sajt privuče prave kupce."
        : "We clarify your commercial goals, analyze competitor benchmarks, and map out a bulletproof strategy to win your target audience.",
      benefits: isSr ? ["Jasna ponuda bez skrivenih troškova", "Definisani rokovi završetka"] : ["Fixed price, zero hidden fees", "Guaranteed delivery timeline"]
    },
    {
      number: "02",
      icon: <Palette className="w-6 h-6 text-indigo-500" />,
      title: isSr ? "Moderan Dizajn & Prototip" : "High-Impact Design & UI",
      subtitle: isSr ? "Vizuelni utisak koji prodaje" : "Visual authority that converts",
      description: isSr
        ? "Kreiramo unikatni dizajn prilagođen vašem brendu. Vidite tačno kako će sajt izgledati pre nego što uđe u fazu programiranja."
        : "We engineer bespoke visual designs custom-fitted to your brand identity. You review the exact interactive prototype before development.",
      benefits: isSr ? ["Pregled na mobilnom i računaru", "Besplatne revizije do savršenstva"] : ["Mobile & desktop previews", "Unlimited revisions to perfection"]
    },
    {
      number: "03",
      icon: <Rocket className="w-6 h-6 text-emerald-500" />,
      title: isSr ? "Programiranje & Google SEO" : "Fast Build & SEO Setup",
      subtitle: isSr ? "Brzina i Google prva strana" : "Sub-second speed & Google rank",
      description: isSr
        ? "Kodiramo sajt uz najsavremenije tehnologije. Optimizujemo brzinu učitavanja ispod 1 sekunde i pripremamo ga za visoke Google pozicije."
        : "We engineer clean, performant code. We optimize load speeds under 1 second and implement structured Google SEO tags for instant visibility.",
      benefits: isSr ? ["100/100 Google PageSpeed", "Testirano na svim uređajima"] : ["100/100 PageSpeed score", "Cross-device browser testing"]
    },
    {
      number: "04",
      icon: <LifeBuoy className="w-6 h-6 text-amber-500" />,
      title: isSr ? "Lansiranje & Stalna Podrška" : "Launch & Ongoing Growth",
      subtitle: isSr ? "Vaš pouzdan partner" : "Your long-term tech partner",
      description: isSr
        ? "Puštamo sajt u rad, povezujemo ga sa vašim domenom i emailom, i ostajemo vam na raspolaganju za održavanje, izmene i nova unapređenja."
        : "We deploy the website live, wire up domains, emails and analytics, and provide dedicated technical maintenance as your business grows.",
      benefits: isSr ? ["Obuka za samostalno upravljanje", "Tehnička podrška 24/7"] : ["Easy CMS hand-off tutorial", "Reliable 24/7 support"]
    }
  ];

  return (
    <section id="process" className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden bg-slate-100/60 dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title={isSr ? "Jednostavan Proces u 4 Koraka" : "Our Proven 4-Step Process"} 
          subtitle={isSr 
            ? "Od vaše prve ideje do gotovog sajta koji donosi novac — bez stresa, lutanja i gubljenja vremena." 
            : "From initial idea to a live revenue-generating digital asset — transparent, frictionless, and on time."}
        />

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -6 }}
              className="relative p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#141414] border border-slate-200 dark:border-white/10 shadow-xs hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-500/40 transition-all flex flex-col justify-between group"
            >
              {/* Step number watermark */}
              <div className="text-4xl font-display font-black text-slate-100 dark:text-white/5 absolute top-5 right-5 select-none group-hover:text-blue-500/10 transition-colors">
                {step.number}
              </div>

              <div>
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>

                {/* Step Subtitle */}
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-1">
                  {step.subtitle}
                </span>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Benefits list */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/5 space-y-1.5">
                {step.benefits.map((b, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA banner under process */}
        <div className="mt-12 text-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-500/25 transition-all cursor-pointer group"
          >
            <Sparkles size={18} />
            <span>{isSr ? "Započnimo Vaš Projekat Već Danas" : "Kickstart Your Project Today"}</span>
            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
