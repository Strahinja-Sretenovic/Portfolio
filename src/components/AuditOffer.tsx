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

  const auditCheckpoints = [
    {
      icon: <Eye size={16} className="text-blue-400" />,
      title: isSr ? "Postojeći sajt & korisničko iskustvo" : "Website & User Experience",
      desc: isSr ? "Kako sajt izgleda kupcu i gde najčešće odustaje" : "Where visitors get confused and bounce"
    },
    {
      icon: <Search size={16} className="text-emerald-400" />,
      title: isSr ? "Google prisustvo & lokalna vidljivost" : "Google Search & Local Signals",
      desc: isSr ? "Da li se pojavljujete kada neko traži vašu uslugu" : "Whether you rank when prospects search"
    },
    {
      icon: <TrendingUp size={16} className="text-amber-400" />,
      title: isSr ? "Analiza ponude konkurencije" : "Competitor Landscape",
      desc: isSr ? "Šta rade lideri u vašoj niši i gde je vaša prednost" : "How market leaders position their offer"
    },
    {
      icon: <Smartphone size={16} className="text-cyan-400" />,
      title: isSr ? "Mobilna brzina i put naručivanja" : "Mobile Speed & Conversion Flow",
      desc: isSr ? "Da li je jednostavno pozvati vas ili zakazati sa telefona" : "Ease of mobile booking and calling"
    }
  ];

  return (
    <section id="audit-offer" className="py-20 px-4 sm:px-6 relative bg-gradient-to-b from-slate-900 to-slate-950 text-white border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl bg-slate-900/90 border border-blue-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Offer Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles size={14} />
                <span>{isSr ? "Besplatna Početna Analiza" : "Free Initial Assessment"}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
                {isSr 
                  ? "Ne znate šta vam zapravo treba? Pogledajmo vaš biznis zajedno." 
                  : "Not sure what you actually need? Let's audit your business first."}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {isSr
                  ? "Pre razgovora ćemo detaljno pregledati vaš digitalni nastup kako bismo 15–30 minuta iskoristili za konkretne stvari, a ne za generičke priče."
                  : "Before we talk, we review your digital footprint so our 15–30 minute discussion focuses on real observations and concrete opportunities."}
              </p>

              {/* Checkpoints Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {auditCheckpoints.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-white">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* No-Pitch Guarantee */}
              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/20 text-xs text-blue-200 flex items-center gap-3">
                <ShieldCheck size={20} className="shrink-0 text-blue-400" />
                <span>
                  {isSr
                    ? "Nećemo vam odmah nuditi ili prodavati sajt. Pokazaćemo vam šta smo primetili i šta bismo prvo rešavali."
                    : "No aggressive sales pitch. We highlight what we observed and prioritize what to fix first."}
                </span>
              </div>
            </div>

            {/* Right Column: High-Conversion CTA Card */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                  <Clock size={14} />
                  <span>{isSr ? "15–30 min • Bez obaveze" : "15–30 min • Zero Obligation"}</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {isSr ? "Zatražite besplatnu analizu" : "Request Free Digital Audit"}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {isSr 
                    ? "Ostavite link ka sajtu ili Instagram profilu. Javljamo se u roku od 24h sa kratkim zapažanjima."
                    : "Share your website or Instagram link. We'll follow up within 24h with initial diagnostic observations."}
                </p>
              </div>

              <div className="space-y-3">
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
                  <span>{isSr ? "Zatraži besplatnu analizu" : "Request Free Audit"}</span>
                  <ArrowRight size={16} />
                </button>

                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 text-center">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    {isSr ? "100% besplatno" : "100% free"}
                  </span>
                  <span>•</span>
                  <span>{isSr ? "Direktan razgovor sa timom" : "Talk directly with our team"}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
