import React, { useState } from "react";
import { 
  Eye, 
  FileText, 
  ShieldCheck, 
  MousePointerClick, 
  Workflow, 
  Cpu, 
  ArrowRight,
  Compass,
  Search,
  Target,
  Layout,
  Code2,
  BarChart3
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function Act3Diagnosis() {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const [selectedDimension, setSelectedDimension] = useState<number | null>(null);

  const dimensions = [
    {
      id: 1,
      name: isSr ? "01 — VIDLJIVOST" : "01 — VISIBILITY",
      question: isSr ? "Da li vas pravi ljudi uopšte pronalaze?" : "Are the right people finding you at all?",
      areas: isSr 
        ? "Google, lokalna pretraga, SEO, referral, kanali pronalaženja." 
        : "Google search, local map pack, SEO, referral, discovery channels.",
      icon: Eye
    },
    {
      id: 2,
      name: isSr ? "02 — JASNOĆA PONUDE" : "02 — CLARITY OF OFFER",
      question: isSr ? "Da li ljudi brzo razumeju šta nudite i zašto je relevantno za njih?" : "Do people quickly understand what you offer and why it matters?",
      areas: isSr 
        ? "Pozicioniranje, informaciona arhitektura, hijerarhija sadržaja, jasnoća ponude." 
        : "Positioning, information architecture, content hierarchy, offer clarity.",
      icon: FileText
    },
    {
      id: 3,
      name: isSr ? "03 — POVERENJE" : "03 — TRUST",
      question: isSr ? "Da li imaju dovoljno razloga da izaberu vas?" : "Do they have enough reasons to choose you?",
      areas: isSr 
        ? "Ocene, dokazi kvaliteta, stvarni projekti, recenzije, prezentacija." 
        : "Reviews, proof, real projects, testimonials, presentation.",
      icon: ShieldCheck
    },
    {
      id: 4,
      name: isSr ? "04 — UX / KONVERZIJA" : "04 — UX / CONVERSION",
      question: isSr ? "Da li je sledeći korak očigledan i jednostavan?" : "Is the next step obvious and simple?",
      areas: isSr 
        ? "Pozivi na akciju, booking, forme, navigacija, mobilni UX, trenje konverzije." 
        : "Call to actions, booking, forms, navigation, mobile UX, conversion friction.",
      icon: MousePointerClick
    },
    {
      id: 5,
      name: isSr ? "05 — PROCES" : "05 — PROCESS",
      question: isSr ? "Da li gubite vreme na stvari koje mogu da budu jednostavnije?" : "Are you losing time on things that could be simpler?",
      areas: isSr 
        ? "Ponavljajući poslovi, obrada upita, zakazivanje, notifikacije, interni tokovi, automatizacija." 
        : "Repetitive work, lead handling, scheduling, notifications, internal workflows, automation.",
      icon: Workflow
    },
    {
      id: 6,
      name: isSr ? "06 — TEHNOLOGIJA" : "06 — TECHNOLOGY",
      question: isSr ? "Da li postojeći sistem podržava način na koji biznis danas radi?" : "Does your tech stack support how the business works today?",
      areas: isSr 
        ? "Performanse, arhitektura, CMS, integracije, web aplikacija, tehnički dug." 
        : "Performance, architecture, CMS, integrations, web application, tech debt.",
      icon: Cpu
    }
  ];

  const solutionMappings = [
    {
      problem: isSr ? "Teško vas pronalaze" : "Hard to find",
      response: isSr ? "SEO / lokalna vidljivost" : "SEO / Local Visibility"
    },
    {
      problem: isSr ? "Ponuda je nejasna" : "Offer is unclear",
      response: isSr ? "Strategija / IA / Content / UX" : "Strategy / IA / Content / UX"
    },
    {
      problem: isSr ? "Nedostaje poverenje" : "Lacks trust",
      response: isSr ? "Proof / positioning / UX" : "Proof / Positioning / UX"
    },
    {
      problem: isSr ? "Ljudi ne prave sledeći korak" : "Drop-off before action",
      response: isSr ? "CRO / booking / contact flow" : "CRO / Booking / Contact flow"
    },
    {
      problem: isSr ? "Previše ručnog rada" : "Too much manual work",
      response: isSr ? "Automation / web application" : "Automation / Web application"
    },
    {
      problem: isSr ? "Postojeći sajt više ne radi posao" : "Current site obsolete",
      response: isSr ? "Redesign / new website" : "Redesign / New website"
    }
  ];

  const methodSteps = [
    {
      name: "DISCOVERY",
      text: isSr ? "Razumemo biznis, cilj i kontekst." : "We understand the business, goal, and context.",
      icon: Compass
    },
    {
      name: "RESEARCH",
      text: isSr ? "Tražimo dokaze umesto pretpostavki." : "We look for evidence instead of assumptions.",
      icon: Search
    },
    {
      name: "STRATEGIJA",
      text: isSr ? "Određujemo šta ima najviše smisla uraditi." : "We determine what makes the most sense to do.",
      icon: Target
    },
    {
      name: "UX",
      text: isSr ? "Projektujemo najjasniji put za korisnika." : "We design the clearest path for the user.",
      icon: Layout
    },
    {
      name: "DEVELOPMENT",
      text: isSr ? "Gradimo rešenje koje podržava strategiju." : "We build the solution that supports the strategy.",
      icon: Code2
    },
    {
      name: "MERENJE",
      text: isSr ? "Proveravamo šta se stvarno dogodilo." : "We verify what actually occurred in reality.",
      icon: BarChart3
    }
  ];

  return (
    <section 
      id="act-3-the-diagnosis"
      className="relative py-24 sm:py-36 px-6 sm:px-12 bg-white dark:bg-[#07090e] text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/10"
    >
      <div className="max-w-5xl mx-auto space-y-24">
        
        {/* Act 3 Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 text-xs font-mono font-bold">
            AKT 03 • DIJAGNOSTIČKI MODEL
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-slate-950 dark:text-white">
            {isSr ? "Zato prvo tražimo uzrok." : "That is why we find the root cause first."}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            {isSr 
              ? "Ne pokušavamo da menjamo sve. Tražimo ono što najviše koči rezultat." 
              : "We don't try to change everything. We look for what constrains results the most."}
          </p>
        </div>

        {/* 6 Dimensions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dimensions.map((dim) => {
            const Icon = dim.icon;
            const isSelected = selectedDimension === dim.id;

            return (
              <div
                key={dim.id}
                onClick={() => setSelectedDimension(isSelected ? null : dim.id)}
                className={`p-6 sm:p-8 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-blue-50 dark:bg-blue-950/20 border-blue-500 shadow-xl"
                    : "bg-slate-50 dark:bg-white/[0.02] border-slate-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500/40"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                    {dim.name}
                  </span>
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-display font-bold text-slate-950 dark:text-white leading-snug mb-3">
                  {dim.question}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200 dark:border-white/10 pt-3">
                  {dim.areas}
                </p>
              </div>
            );
          })}
        </div>

        {/* Diagnosis Major Visual Moment */}
        <div className="text-center py-8 space-y-3 max-w-2xl mx-auto">
          <h3 className="text-3xl sm:text-5xl font-display font-black text-slate-950 dark:text-white">
            {isSr ? "Ne menjamo sve." : "We don't change everything."}
          </h3>
          <p className="text-2xl sm:text-4xl font-display font-bold text-blue-600 dark:text-blue-400">
            {isSr ? "Menjamo ono što koči rezultat." : "We change what constrains results."}
          </p>
        </div>

        {/* Solution Logic Matrix */}
        <div className="space-y-8 pt-4">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              {isSr ? "Logika preporuke" : "Recommendation logic"}
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-950 dark:text-white">
              {isSr ? "Pravi problem određuje pravi alat." : "The real problem determines the right tool."}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {isSr ? "Novi sajt je samo jedna od mogućih preporuka." : "A new website is just one of many possible recommendations."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {solutionMappings.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 flex items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-rose-500 uppercase font-bold">
                    {isSr ? "Problem" : "Problem"}
                  </span>
                  <div className="text-sm font-display font-bold text-slate-900 dark:text-white">
                    {item.problem}
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />

                <div className="space-y-1 text-right">
                  <span className="text-[10px] font-mono text-blue-500 uppercase font-bold">
                    {isSr ? "Odgovor" : "Response"}
                  </span>
                  <div className="text-sm font-display font-bold text-blue-600 dark:text-blue-400">
                    {item.response}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Method Progression */}
        <div className="space-y-8 pt-6 border-t border-slate-200 dark:border-white/10">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              {isSr ? "Naš proces" : "Our method"}
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-950 dark:text-white">
              {isSr ? "Od analize do rezultata" : "From analysis to results"}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.name}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                      0{idx + 1} // {step.name}
                    </span>
                    <Icon className="w-4 h-4 text-slate-400" />
                  </div>
                  <p className="text-sm sm:text-base font-display font-bold text-slate-900 dark:text-white">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center py-6 space-y-2">
            <h4 className="text-2xl sm:text-4xl font-display font-black text-slate-950 dark:text-white">
              {isSr ? "Launch nije kraj." : "Launch is not the end."}
            </h4>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium">
              {isSr ? "Tek tada dobijamo stvarne podatke." : "Only then do we get real data."}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
