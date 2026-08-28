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
      title: isSr ? "Pošaljete nam svoj biznis" : "Send us your business details",
      desc: isSr 
        ? "Website, Instagram, Google profil ili naziv firme."
        : "Website, Instagram, Google Business profile, or company name."
    },
    {
      step: "02",
      title: isSr ? "Pregledamo kako trenutno izgledate online" : "We review your current online presence",
      desc: isSr 
        ? "Pregledamo website, mobile UX, Google prisustvo, ponudu, konkurenciju, osnovni SEO, customer journey i očigledne conversion prepreke."
        : "We inspect your website, mobile UX, Google presence, offer, competitors, basic SEO, customer journey, and obvious conversion barriers."
    },
    {
      step: "03",
      title: isSr ? "Dolazimo pripremljeni" : "We come fully prepared",
      desc: isSr 
        ? "Na razgovoru pričamo o konkretnim stvarima koje smo primetili kod vašeg biznisa."
        : "On the call, we discuss specific observations we noted about your business."
    },
    {
      step: "04",
      title: isSr ? "Dobijate preporuku za sledeći korak" : "You receive a clear next-step recommendation",
      desc: isSr 
        ? "Popravka postojećeg sajta, redesign, Google/SEO, landing page, booking, automatizacija, analytics, novi sajt — ili da trenutno ne investirate u veliki projekat."
        : "Fixing existing site, redesign, Google/SEO, landing page, booking, automation, analytics, new site — or not investing in a large project right now."
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
                <span>{isSr ? "Besplatna Početna Analiza" : "Free Initial Analysis"}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
                {isSr 
                  ? "Šta dobijate na besplatnoj početnoj analizi?" 
                  : "What do you get in the free initial analysis?"}
              </h2>

              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                {isSr
                  ? "Ne dolazimo na razgovor sa generičkom prodajnom prezentacijom. Pre razgovora radimo domaći."
                  : "We don't show up with a generic sales pitch. We do our homework before we speak."}
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
                    {isSr ? "POTPUNA ISKRENOST" : "HONESTY FIRST"}
                  </div>
                  <p className="text-base sm:text-lg font-bold text-white">
                    {isSr
                      ? "Ako mislimo da vam novi sajt trenutno nije potreban, reći ćemo vam."
                      : "If we think you don't need a new website right now, we will tell you."}
                  </p>
                  <p className="text-xs text-slate-300">
                    {isSr 
                      ? "Cilj prvog razgovora je da razumemo gde nastaje problem, a ne da vam prodamo nešto po svaku cenu." 
                      : "The goal of our first conversation is to understand where the problem arises, not to sell you something at all costs."}
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
                  <span>{isSr ? "Bez obaveze. Pričamo konkretno o vašem biznisu." : "Zero obligation. Focused on your real business."}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
