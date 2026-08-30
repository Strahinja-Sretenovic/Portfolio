import React, { useState } from "react";
import { 
  EyeOff, 
  HelpCircle, 
  ShieldAlert, 
  Flame, 
  Clock, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function Act4ProblemRecognition() {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const [activeIdx, setActiveIdx] = useState(0);

  const statements = [
    {
      id: "find",
      icon: EyeOff,
      headline: isSr ? "Možda vas ne pronalazi." : "Maybe they don't find you.",
      explanation: isSr 
        ? "Traže ono što radite na Google-u ili mrežama, ali vaš profil ili sajt se ne pojavljuju među prva tri rezultata." 
        : "They search for what you offer, but your profile doesn't show up in the top results."
    },
    {
      id: "understand",
      icon: HelpCircle,
      headline: isSr ? "Možda vas pronađe, ali ne razume ponudu." : "Maybe they find you, but don't understand the offer.",
      explanation: isSr 
        ? "Tekst je predugačak, nejasan ili napisan iz vašeg ugla, a ne iz ugla kupca koji želi brzo rešenje." 
        : "The messaging is convoluted, technical, or written from your angle rather than addressing their pain point."
    },
    {
      id: "trust",
      icon: ShieldAlert,
      headline: isSr ? "Možda razume, ali nema dovoljno razloga da vam veruje." : "Maybe they understand, but lack reasons to trust you.",
      explanation: isSr 
        ? "Nema svežih ocena, fotografija radova, jasnih garancija ili dokaza da stvarno isporučujete obećano." 
        : "There are no fresh reviews, genuine project photos, transparent guarantees, or social proof."
    },
    {
      id: "contact",
      icon: Flame,
      headline: isSr ? "Možda želi da vas kontaktira, ali je proces komplikovan." : "Maybe they want to reach out, but the flow is clunky.",
      explanation: isSr 
        ? "Dugme ne radi, forma ima 10 nepotrebnih polja, telefon nije klikabilan ili nema online zakazivanja." 
        : "The phone isn't tap-to-call, forms ask for too much data, or booking is unintuitive."
    },
    {
      id: "manual",
      icon: Clock,
      headline: isSr ? "Možda već imate dovoljno posla, ali previše vremena gubite ručno." : "Maybe you have enough clients, but lose time to manual work.",
      explanation: isSr 
        ? "Sve radite preko poruka, ručno upisujete termine, šaljete ponude u PDF-u i gubite sate svakog dana." 
        : "You coordinate via text messages, manually manage bookings, and lose hours on repetitive operational admin."
    }
  ];

  return (
    <section 
      id="act-4-recognition"
      className="relative py-24 sm:py-32 px-6 sm:px-12 bg-slate-950 text-white border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">
            AKT 04 • PREPOZNAVANJE PROBLEMA
          </div>

          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-slate-400">
            {isSr ? "Gde je zapravo problem?" : "Where is the actual bottleneck?"}
          </h2>
        </div>

        {/* Statement Selector / Cards */}
        <div className="space-y-4">
          {statements.map((stmt, idx) => {
            const Icon = stmt.icon;
            const isActive = activeIdx === idx;

            return (
              <div
                key={stmt.id}
                onClick={() => setActiveIdx(idx)}
                className={`p-6 sm:p-8 rounded-2xl border transition-all cursor-pointer ${
                  isActive
                    ? "bg-white/[0.08] border-blue-500 shadow-2xl scale-[1.01]"
                    : "bg-white/[0.02] border-white/10 hover:bg-white/[0.04] opacity-80"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl shrink-0 ${isActive ? "bg-blue-600 text-white" : "bg-white/10 text-slate-400"}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-2">
                    <h3 className={`text-xl sm:text-2xl font-display font-bold ${isActive ? "text-white" : "text-slate-300"}`}>
                      {stmt.headline}
                    </h3>
                    
                    {isActive && (
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-1">
                        {stmt.explanation}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Climax Sales Insight */}
        <div className="p-8 sm:p-12 rounded-3xl bg-blue-600/10 border border-blue-500/30 text-center space-y-4">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest font-bold">
            {isSr ? "Poslovni zaključak" : "Business takeaway"}
          </span>

          <h3 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight leading-tight">
            {isSr 
              ? "Zato „treba nam novi sajt“ još uvek nije dijagnoza." 
              : "That's why 'we need a new website' is not yet a diagnosis."}
          </h3>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
            {isSr 
              ? "Sajt je samo sredstvo. Pre nego što bilo šta gradimo, moramo znati šta tačno rešavamo." 
              : "A website is merely a tool. Before building anything, we must identify the exact constraint."}
          </p>
        </div>

      </div>
    </section>
  );
}
