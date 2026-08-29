import { useState } from "react";
import { motion } from "motion/react";
import { 
  EyeOff, 
  HelpCircle, 
  ShieldAlert, 
  PhoneOff, 
  Clock, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function RecognitionScene() {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const [activeCard, setActiveCard] = useState<number>(0);

  const recognitionCases = [
    {
      id: "case-1",
      number: "01",
      icon: <EyeOff className="w-5 h-5 text-amber-500" />,
      statementSr: "Možda vas ljudi ne pronalaze.",
      statementEn: "Maybe people simply cannot find you.",
      scenarioSr: "Kada neko u vašem gradu traži vašu uslugu, vaš profil se ne pojavljuje među prvim rezultatima na Google mapama. Sav saobraćaj automatski odlazi konkurenciji.",
      scenarioEn: "When someone in your city searches for your core service, your profile is hidden behind competitors on Google Maps.",
      diagnosticResultSr: "Problem: Nedostatak lokalne vidljivosti i tehničkog SEO autoriteta.",
      diagnosticResultEn: "Issue: Lack of local search visibility and technical SEO signals."
    },
    {
      id: "case-2",
      number: "02",
      icon: <HelpCircle className="w-5 h-5 text-rose-500" />,
      statementSr: "Možda vas pronađu, ali ne razumeju šta nudite.",
      statementEn: "Maybe they find you, but don't understand your offer.",
      scenarioSr: "Posetilac otvori vaš sajt, ali unutar prvih 5 sekundi ne može jasno da vidi šta tačno radite, za koga je to i po kojim cenama. Zbunjen napušta stranicu.",
      scenarioEn: "A visitor arrives but cannot discern within 5 seconds what you do, who it is for, or what it costs. Confused, they bounce.",
      diagnosticResultSr: "Problem: Nejasna hijerarhija informacija i poruke vrednosti.",
      diagnosticResultEn: "Issue: Unclear information architecture and value messaging."
    },
    {
      id: "case-3",
      number: "03",
      icon: <ShieldAlert className="w-5 h-5 text-orange-500" />,
      statementSr: "Možda razumeju ponudu, ali ne vide dovoljno razloga da vam veruju.",
      statementEn: "Maybe they understand the offer, but lack reasons to trust you.",
      scenarioSr: "Ponuda je dobra, ali na sajtu nema fotografija stvarnih radova, nema ocena zadovoljnih klijenata ni dokaza o stručnosti. Kupac bira sigurniju opciju.",
      scenarioEn: "The offer is fine, but there are no real work photos, verified reviews, or proof of execution. The client chooses a safer alternative.",
      diagnosticResultSr: "Problem: Odsustvo socijalnog dokaza i elemenata poverenja.",
      diagnosticResultEn: "Issue: Absence of social proof, case studies, and trust anchors."
    },
    {
      id: "case-4",
      number: "04",
      icon: <PhoneOff className="w-5 h-5 text-red-500" />,
      statementSr: "Možda žele da vas kontaktiraju, ali je sledeći korak komplikovan.",
      statementEn: "Maybe they want to reach out, but the next step is complicated.",
      scenarioSr: "Broj telefona nije klikabilan na mobilnom, forma ima 8 nepotrebnih polja ili radno vreme nije jasno naznačeno. Zainteresovan kupac odustaje.",
      scenarioEn: "Phone number is not tap-to-call on mobile, form requires 8 fields, or hours are ambiguous. High-intent buyer drops off.",
      diagnosticResultSr: "Problem: Prepreke na konverziji i mobilnom korisničkom iskustvu.",
      diagnosticResultEn: "Issue: High friction on conversion path and mobile UX."
    },
    {
      id: "case-5",
      number: "05",
      icon: <Clock className="w-5 h-5 text-indigo-500" />,
      statementSr: "Možda već imate dovoljno klijenata — ali previše vremena odlazi na ručni rad.",
      statementEn: "Maybe you have enough clients — but too much time is lost on manual work.",
      scenarioSr: "Telefon vam zvoni tokom celog dana za ista pitanja, poruke stižu sa tri različite mreže, a termini se vode u papirnim sveskama.",
      scenarioEn: "Phone rings all day for repetitive questions, inquiries come from three apps, and scheduling is handled on paper.",
      diagnosticResultSr: "Problem: Nedostatak automatizacije i digitalnog booking sistema.",
      diagnosticResultEn: "Issue: Lack of workflow automation and online appointment engine."
    }
  ];

  return (
    <section
      id="scene-04"
      className="relative min-h-screen py-24 sm:py-32 px-4 sm:px-6 bg-white dark:bg-[#07090e] border-t border-slate-200 dark:border-white/5 overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Scene Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="text-xs sm:text-sm font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest">
            {isSr ? "04 / PREPOZNAVANJE SITUACIJE" : "04 / PROBLEM RECOGNITION"}
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {isSr ? "Gde se vaš biznis trenutno nalazi?" : "Which scenario describes your business today?"}
          </h2>

          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            {isSr
              ? "Pregledajte pet najčešćih scenarija sa kojima se susreću domaći biznisi pre nego što nas kontaktiraju:"
              : "Review the five most frequent commercial bottlenecks businesses face before reaching out:"}
          </p>
        </div>

        {/* 5 Scenario Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 5 Selectable Scenarios (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            {recognitionCases.map((item, idx) => {
              const isSelected = activeCard === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveCard(idx)}
                  className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-4 ${
                    isSelected
                      ? "bg-blue-50/80 dark:bg-blue-950/30 border-blue-400 shadow-md translate-x-1"
                      : "bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  <div className={`p-2.5 rounded-xl shrink-0 ${isSelected ? "bg-blue-600 text-white" : "bg-white dark:bg-black/30 border border-slate-200/60 dark:border-white/5"}`}>
                    {item.icon}
                  </div>

                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {isSr ? item.statementSr : item.statementEn}
                      </h3>
                      <span className="text-xs font-mono text-slate-400">{item.number}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {isSr ? item.scenarioSr : item.scenarioEn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Diagnostic Analysis Panel (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-slate-900 text-white border border-slate-800 p-6 sm:p-8 space-y-6 lg:sticky lg:top-28">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono font-bold">
                <Sparkles size={13} />
                <span>{isSr ? "DIJAGNOSTIČKI ZAKLJUČAK" : "DIAGNOSTIC VERDICT"}</span>
              </div>

              <div className="text-2xl font-display font-extrabold text-white">
                {isSr ? recognitionCases[activeCard].statementSr : recognitionCases[activeCard].statementEn}
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  {isSr ? "IZVOR PROBLEMA" : "ROOT CAUSE"}
                </div>
                <div className="text-sm font-semibold text-slate-200">
                  {isSr ? recognitionCases[activeCard].diagnosticResultSr : recognitionCases[activeCard].diagnosticResultEn}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-xs text-blue-200 leading-relaxed">
              {isSr
                ? "Ovo je tačan razlog zašto ne nudimo generičke pakete. Prvo utvrđujemo šta tačno koči vaš rast."
                : "This is exactly why we never sell generic packages. We first isolate what is holding back growth."}
            </div>
          </div>

        </div>

        {/* Section 11 Climax Sequence: "Problem možda uopšte nije..." -> "Zato prvo dijagnostikujemo." */}
        <div className="p-8 sm:p-14 rounded-3xl bg-slate-900 text-white border border-slate-800 relative overflow-hidden space-y-4 text-center sm:text-left">
          <div className="absolute right-0 top-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4 max-w-3xl">
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              {isSr
                ? 'Problem možda uopšte nije "treba nam novi sajt".'
                : 'The problem might not be "we need a new website" at all.'}
            </h3>

            <div className="pt-2">
              <span className="inline-block text-xl sm:text-3xl text-cyan-400 font-extrabold">
                {isSr ? "Zato prvo dijagnostikujemo." : "That is why we diagnose first."}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
