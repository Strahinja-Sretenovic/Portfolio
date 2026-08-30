import React from "react";
import { 
  Compass, 
  Search, 
  Target, 
  Layout, 
  Code2, 
  BarChart3, 
  ArrowRight
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function Act7Method() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const steps = [
    {
      id: "discovery",
      num: "01",
      name: "DISCOVERY",
      icon: Compass,
      outcome: isSr ? "Razumemo biznis." : "We understand the business.",
      detail: isSr ? "Upoznajemo vaš model, ciljeve, ponudu i profitabilne usluge." : "We learn your model, goals, offer and most profitable services."
    },
    {
      id: "research",
      num: "02",
      name: "RESEARCH",
      icon: Search,
      outcome: isSr ? "Tražimo dokaze." : "We look for evidence.",
      detail: isSr ? "Istražujemo ponašanje kupaca, pretrage na tržištu i gde trenutno nastaju gubici." : "We analyze buyer search intent and where drop-offs happen."
    },
    {
      id: "strategija",
      num: "03",
      name: "STRATEGIJA",
      icon: Target,
      outcome: isSr ? "Odlučujemo šta ima smisla." : "We decide what makes sense.",
      detail: isSr ? "Definišemo tačan prioritet i uklanjamo sve što je višak." : "We set exact priorities and eliminate unnecessary complexity."
    },
    {
      id: "ux",
      num: "04",
      name: "UX & DIZAJN",
      icon: Layout,
      outcome: isSr ? "Projektujemo najjasniji put." : "We design the clearest path.",
      detail: isSr ? "Kreiramo jasan vizuelni i tekstualni tok koji vodi posetioca do odluke." : "We build frictionless flows leading visitors to take action."
    },
    {
      id: "dev",
      num: "05",
      name: "DEVELOPMENT",
      icon: Code2,
      outcome: isSr ? "Gradimo rešenje." : "We build the solution.",
      detail: isSr ? "Inženjerski čist, brz i responzivan kod sa modernim standardima." : "Clean, robust, mobile-first code with top performance."
    },
    {
      id: "merenje",
      num: "06",
      name: "MERENJE",
      icon: BarChart3,
      outcome: isSr ? "Proveravamo šta se dogodilo." : "We verify real outcomes.",
      detail: isSr ? "Pratimo stvarne upite, pozive i interakcije korisnika u realnom vremenu." : "We track actual inquiries, calls, bookings and user feedback."
    }
  ];

  return (
    <section 
      id="act-7-method"
      className="relative py-24 sm:py-32 px-6 sm:px-12 bg-white dark:bg-[#07090e] text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/10"
    >
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 text-xs font-mono font-bold">
            AKT 07 • PROCES RADA
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-slate-950 dark:text-white">
            {isSr ? "Kako sprovodimo preporuku u delo." : "How we execute the recommendation."}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            {isSr 
              ? "Šest jasnih faza bez nepotrebne teorije i bez gubljenja vremena." 
              : "Six clear phases without fluff, keeping focus on business impact."}
          </p>
        </div>

        {/* 6 Steps Progression */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 hover:border-blue-500/40 transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                    {step.num} // {step.name}
                  </span>
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-slate-950 dark:text-white">
                  {step.outcome}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Launch is not the end Punchline */}
        <div className="text-center py-6 space-y-4 max-w-2xl mx-auto">
          <h3 className="text-3xl sm:text-5xl font-display font-black text-slate-950 dark:text-white">
            {isSr ? "Launch nije kraj." : "Launch is not the end."}
          </h3>
          <p className="text-xl sm:text-2xl font-display font-bold text-blue-600 dark:text-blue-400">
            {isSr ? "Tek tada prestajemo da nagađamo." : "Only then do we stop guessing."}
          </p>
        </div>

      </div>
    </section>
  );
}
