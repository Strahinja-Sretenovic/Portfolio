import React, { useState } from "react";
import { Compass, Search, Target, Layout, Code2, LineChart, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function Act4HowWeWork() {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Discovery",
      headline: isSr ? "Razumemo biznis i cilj." : "We understand the business & goal.",
      icon: Compass,
      desc: isSr ? "Ko je kupac, šta nudite i šta mora da se promeni." : "Who the buyer is, what you offer, and what needs to change."
    },
    {
      num: "02",
      title: "Research",
      headline: isSr ? "Tražimo šta se stvarno dešava." : "We analyze what is actually happening.",
      icon: Search,
      desc: isSr ? "Pregledamo konkurenciju, Google profil i gde posetioci odustaju." : "We audit competitors, Google profiles, and drop-off points."
    },
    {
      num: "03",
      title: "Strategija",
      headline: isSr ? "Odlučujemo šta ima smisla uraditi." : "We decide what makes commercial sense.",
      icon: Target,
      desc: isSr ? "Definišemo najbrži i najisplativiji put do rezultata." : "Defining the most direct, cost-effective route to results."
    },
    {
      num: "04",
      title: "UX",
      headline: isSr ? "Projektujemo najjasniji put za korisnika." : "We engineer the clearest path for the user.",
      icon: Layout,
      desc: isSr ? "Besprekoran mobilni prikaz, jasna poruka i dugmad bez lutanja." : "Flawless mobile UX, clear messaging, and zero-friction actions."
    },
    {
      num: "05",
      title: "Development",
      headline: isSr ? "Gradimo rešenje." : "We build the solution.",
      icon: Code2,
      desc: isSr ? "Brz, optimizovan kod sa tehničkim SEO temeljom." : "Fast, clean code with a rock-solid technical SEO base."
    },
    {
      num: "06",
      title: "Merenje",
      headline: isSr ? "Proveravamo šta se dogodilo u stvarnosti." : "We verify real-world outcomes.",
      icon: LineChart,
      desc: isSr ? "Pratimo stvarne pozive, forme i ponašanje posetilaca." : "Tracking real calls, form submissions, and user behavior."
    }
  ];

  return (
    <section id="act-4-process" className="relative py-24 sm:py-32 px-6 sm:px-12 bg-slate-950 text-white border-t border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">
            AKT 04 • KAKO RADIMO
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight">
            {isSr ? "Od problema do stabilnog sistema" : "From problem to a reliable system"}
          </h2>

          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto">
            {isSr 
              ? "Jednostavan, transparentan proces bez komplikovanja i praznih obećanja." 
              : "A simple, transparent process without fluff or empty promises."}
          </p>
        </div>

        {/* The 6-Step Process Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isHovered = activeStep === idx;
            return (
              <div
                key={step.num}
                onMouseEnter={() => setActiveStep(idx)}
                className={`p-7 rounded-2xl border transition-all duration-300 ${
                  isHovered 
                    ? "bg-white/10 border-blue-500/60 shadow-xl shadow-blue-500/5 scale-[1.02]" 
                    : "bg-white/[0.03] border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    {step.num}
                  </span>
                </div>

                <div className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-1">
                  {step.title}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {step.headline}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Punchline */}
        <div className="text-center pt-8 border-t border-white/10 max-w-2xl mx-auto space-y-3">
          <div className="text-2xl sm:text-4xl font-display font-extrabold text-white">
            {isSr ? "Launch nije kraj." : "Launch is not the end."}
          </div>
          <div className="text-lg sm:text-xl font-medium text-blue-400">
            {isSr ? "Tek tada prestajemo da nagađamo." : "That is when we stop guessing and start measuring."}
          </div>
        </div>

      </div>
    </section>
  );
}
