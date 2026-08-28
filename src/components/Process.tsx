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
      title: isSr ? "Discovery & Razumevanje" : "Discovery & Business Audit",
      subtitle: isSr ? "Šta stvarno treba popraviti" : "Locating the root problem",
      icon: <Search className="w-5 h-5 text-blue-500" />,
      focus: isSr 
        ? "Detaljno prolazimo kroz vaš biznis model, idealne kupce, usluge, konkurenciju, trenutni prodajni proces i gde nastaju uska grla." 
        : "Deep dive into your business model, customer segments, sales pipeline, and existing operational friction.",
      output: isSr 
        ? "Izlaz: Jasna definicija problema i kriterijuma uspeha." 
        : "Deliverable: Clear problem definition & success criteria."
    },
    {
      number: "02",
      title: isSr ? "Istraživanje & Strategija" : "Research & Strategy",
      subtitle: isSr ? "Ponašanje kupaca i tržište" : "Market intent & digital plan",
      focus: isSr 
        ? "Analiziramo ponašanje kupaca na pretrazi, strategije konkurencije, postojeći sajt (ako postoji) i Google prisustvo." 
        : "Auditing search intent, competitor vulnerabilities, and organic market share opportunities.",
      output: isSr 
        ? "Izlaz: Digitalna strategija i definisani prioriteti." 
        : "Deliverable: Digital strategy roadmap & channel priorities."
    },
    {
      number: "03",
      title: isSr ? "Informaciona Arhitektura & Sadržaj" : "Information Architecture & Copy",
      subtitle: isSr ? "Struktura po meri odluke kupca" : "Decision path structuring",
      focus: isSr 
        ? "Definišemo sitemap, hijerarhiju stranica, korisničke rute, sadržajne celine i jasne pozive na akciju (CTA) bez lutanja." 
        : "Mapping intuitive sitemaps, decision journeys, content hierarchy, and friction-free conversion paths.",
      output: isSr 
        ? "Izlaz: Struktura sajta bazirana na načinu na koji klijenti odlučuju." 
        : "Deliverable: Decision-aligned sitemap & wireframed content strategy."
    },
    {
      number: "04",
      title: isSr ? "UX & Dizajn" : "UX & Interface Design",
      subtitle: isSr ? "Upotrebljivost pre dekoracije" : "Usability before visual styling",
      focus: isSr 
        ? "Kreiramo responzivne prikaze, jasnu vizuelnu hijerarhiju i mobilno iskustvo koje uliva sigurnost i vodi ka kontaktu." 
        : "Engineering accessible, high-contrast layouts and responsive mobile UX optimized for credibility.",
      output: isSr 
        ? "Izlaz: Kompletan prototip i dizajn sistem." 
        : "Deliverable: High-fidelity interactive prototype & design system."
    },
    {
      number: "05",
      title: isSr ? "Razvoj & Optimizacija" : "Engineering & Optimization",
      subtitle: isSr ? "Čist kod i performanse" : "High-speed clean TypeScript",
      focus: isSr 
        ? "Inženjerska izrada u čistom kodu, integracije sa bazama, SMS/email servisima, SEO temelji i responzivna brzina (<0.5s)." 
        : "Bespoke TypeScript engineering, API/database integrations, structured SEO schema, and sub-second load times.",
      output: isSr 
        ? "Izlaz: Tehnički robustan, testiran i bezbedan sistem." 
        : "Deliverable: Production-ready, hardened web system."
    },
    {
      number: "06",
      title: isSr ? "Launch, Merenje & Unapređenje" : "Launch, Telemetry & Growth",
      subtitle: isSr ? "Podaci umesto nagađanja" : "Evidence-based iteration",
      focus: isSr 
        ? "Puštanje u rad, provera analitike, praćenje ponašanja posetilaca i uklanjanje frikcija na osnovu stvarnih podataka." 
        : "Deployment, telemetry validation, conversion funnel inspection, and continuous evidence-based iteration.",
      output: isSr 
        ? "Izlaz: Mesečni uvidi i kontinuirana optimizacija." 
        : "Deliverable: Actionable analytics & conversion optimization."
    }
  ];

  return (
    <section id="process" className="py-24 px-4 sm:px-6 relative bg-white dark:bg-[#0a0a0a] border-t border-slate-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass size={14} />
            <span>{isSr ? "Konsultantski & Inženjerski Proces" : "Consulting & Engineering Process"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isSr ? "Kako izgleda profesionalan web projekat" : "How a professional web project unfolds"}
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
              <span>{isSr ? "Launch nije kraj projekta. Tek tada dobijamo stvarne podatke." : "Launch is not the finish line. That's when real telemetry begins."}</span>
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
            <span>{isSr ? "Pokrenimo vaš projekat" : "Start Your Project"}</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
