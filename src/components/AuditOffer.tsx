import { motion } from "motion/react";
import { 
  Sparkles, 
  Search, 
  Eye, 
  Smartphone, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck 
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { scrollToTarget } from "./SmoothScroll";
import { trackConsultationCtaClick } from "../utils/analytics";

export function AuditOffer() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const fourSteps = [
    {
      step: "01",
      title: isSr ? "Pošaljete mi svoj biznis" : "Share your business details",
      desc: isSr 
        ? "Link ka sajtu, Instagram profilu, Google profilu ili samo naziv firme i delatnost."
        : "Website link, Instagram profile, Google Business profile, or simply your company name and industry."
    },
    {
      step: "02",
      title: isSr ? "Ja radim domaći zadatak" : "I do the background research",
      desc: isSr 
        ? "Pre razgovora proveravam mobilno iskustvo, brzinu, Google vidljivost, jasnoću ponude, konkurenciju i tačke gde posetioci odustaju."
        : "Before our meeting, I inspect mobile UX, load speeds, Google presence, offer clarity, competitor positioning, and conversion friction."
    },
    {
      step: "03",
      title: isSr ? "Razgovaramo konkretno" : "We discuss concrete observations",
      desc: isSr 
        ? "Umesto generičke prodajne prezentacije, 15–30 minuta prolazimo kroz ono što sam zapravo primetio na vašem primeru."
        : "Instead of a generic sales pitch, we spend 15–30 minutes walking through specific bottlenecks I identified."
    },
    {
      step: "04",
      title: isSr ? "Dobijate preporuku" : "You receive actionable priorities",
      desc: isSr 
        ? "Jasno vam kažem šta bih prvo rešavao i kojim redosledom kako biste dobili najveći povrat uloženog."
        : "I provide an honest recommendation on what to fix first and in what priority to generate maximum return on effort."
    }
  ];

  return (
    <section id="audit-offer" className="py-20 px-4 sm:px-6 relative bg-gradient-to-b from-slate-900 to-slate-950 text-white border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl bg-slate-900/90 border border-blue-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-10 relative z-10">
            
            {/* Header */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles size={14} />
                <span>{isSr ? "Besplatna Početna Analiza" : "Free Initial Assessment"}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
                {isSr 
                  ? "Šta zapravo dobijate na besplatnoj analizi?" 
                  : "What do you actually get from the free analysis?"}
              </h2>

              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                {isSr
                  ? "Nema generičkih slajdova i nema praznih prodajnih priča. Pripremam se unapred kako bi svaki minut razgovora imao direktnu vrednost za vaš biznis."
                  : "No generic sales decks or fluff. I do targeted research beforehand so every minute of our conversation provides actionable value."}
              </p>
            </div>

            {/* 4 Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {fourSteps.map((item) => (
                <div key={item.step} className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono font-bold text-blue-400 mb-1">
                      {item.step}
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Highly Prominent Trust Statement & Action */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2">
              <div className="lg:col-span-8 p-5 sm:p-6 rounded-2xl bg-blue-950/50 border border-blue-500/30 flex items-start gap-4">
                <ShieldCheck size={26} className="shrink-0 text-blue-400 mt-0.5" />
                <div className="space-y-1">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                    {isSr ? "GARANCIJA ISKRENOSTI" : "HONESTY GUARANTEE"}
                  </div>
                  <p className="text-sm sm:text-base font-bold text-white">
                    {isSr
                      ? "Ako mislim da vam novi sajt trenutno nije potreban, reći ću vam."
                      : "If I believe you don't need a new website right now, I will tell you directly."}
                  </p>
                  <p className="text-xs text-slate-300">
                    {isSr 
                      ? "Cilj analize je pronalazak pravog uzroka, a ne prodaja nečega što vam ne donosi rezultat." 
                      : "The goal is finding the real bottleneck, not pushing services that won't deliver ROI."}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-2">
                <button
                  onClick={() => {
                    trackConsultationCtaClick({
                      location: "AuditOffer_Card",
                      ctaText: isSr ? "Zatraži besplatnu analizu" : "Request Free Audit",
                      target: "#contact",
                      serviceContext: "Free Initial Audit"
                    });
                    scrollToTarget("#contact", 80);
                  }}
                  className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
                >
                  <span>{isSr ? "Zatraži besplatnu analizu" : "Request Free Analysis"}</span>
                  <ArrowRight size={16} />
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center">
                  <Clock size={12} className="text-emerald-400" />
                  <span>{isSr ? "15–30 min • 100% besplatno • Bez obaveze" : "15–30 min • 100% free • Zero obligation"}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
