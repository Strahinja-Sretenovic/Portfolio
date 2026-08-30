import React, { useState } from "react";
import { 
  Eye, 
  Lightbulb, 
  ShieldCheck, 
  MousePointerClick, 
  Clock, 
  Cpu, 
  ArrowRight, 
  Sparkles,
  Search,
  FileText,
  CheckCircle2,
  PhoneCall,
  Zap,
  RefreshCw
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface Act3Props {
  onOpenServiceModal?: (serviceId?: string) => void;
}

export function Act3Diagnosis({ onOpenServiceModal }: Act3Props) {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const categories = [
    {
      id: "vidljivost",
      icon: Eye,
      title: isSr ? "VIDLJIVOST" : "VISIBILITY",
      question: isSr ? "Da li vas pravi ljudi uopšte pronalaze?" : "Are the right people finding you at all?",
      detail: isSr ? "Google pretraga, lokalna mapa, društvene mreže ili preporuka." : "Google search, local maps, social media, or referrals."
    },
    {
      id: "jasnoca",
      icon: Lightbulb,
      title: isSr ? "JASNOĆA PONUDE" : "OFFER CLARITY",
      question: isSr ? "Da li odmah razumeju šta nudite i kome je namenjeno?" : "Do they immediately grasp what you offer and who it's for?",
      detail: isSr ? "Jasna poruka, transparentna ponuda i struktura bez viška reči." : "Clear messaging, transparent offer, and concise hierarchy."
    },
    {
      id: "poverenje",
      icon: ShieldCheck,
      title: isSr ? "POVERENJE" : "TRUST & PROOF",
      question: isSr ? "Da li imaju dovoljno razloga da izaberu vas?" : "Do they have enough evidence to choose you over others?",
      detail: isSr ? "Stvarni radovi, recenzije, fotografije i autoritet brenda." : "Real proof, authentic reviews, photography, and brand authority."
    },
    {
      id: "ux",
      icon: MousePointerClick,
      title: isSr ? "UX / KONVERZIJA" : "UX / CONVERSION",
      question: isSr ? "Da li je sledeći korak jasan i jednostavan?" : "Is the next step obvious and effortless on mobile?",
      detail: isSr ? "Direktan poziv, online forma, booking ili kupovina u 2 klika." : "One-tap call, instant form, booking, or purchase flow."
    },
    {
      id: "proces",
      icon: Clock,
      title: isSr ? "PROCES" : "PROCESS & TIME",
      question: isSr ? "Da li gubite vreme na stvari koje mogu da budu jednostavnije?" : "Are you wasting hours on tasks that could be streamlined?",
      detail: isSr ? "Automatizacija upita, notifikacije i ušteda administrativnog vremena." : "Lead automation, instant notifications, and administrative savings."
    },
    {
      id: "tehnologija",
      icon: Cpu,
      title: isSr ? "TEHNOLOGIJA" : "TECHNOLOGY",
      question: isSr ? "Da li sistem koji imate podržava način na koji biznis danas radi?" : "Does your current setup support how modern business works?",
      detail: isSr ? "Brz frontend, pouzdana infrastruktura i tehnički SEO temelj." : "Fast frontend, reliable infrastructure, and solid technical SEO."
    }
  ];

  const solutionPairs = [
    {
      problem: isSr ? "Ne pronalaze vas?" : "They cannot find you?",
      solution: isSr ? "SEO / Lokalna vidljivost" : "SEO / Local visibility",
      icon: Search,
      serviceId: "seo"
    },
    {
      problem: isSr ? "Ne razumeju ponudu?" : "They don't understand the offer?",
      solution: isSr ? "Jasna struktura / UX & Sadržaj" : "Content / IA / UX",
      icon: FileText,
      serviceId: "web-strategija"
    },
    {
      problem: isSr ? "Ne veruju dovoljno?" : "They don't trust enough?",
      solution: isSr ? "Dokazi / Pozicioniranje brenda" : "Proof / Positioning / UX",
      icon: ShieldCheck,
      serviceId: "web-strategija"
    },
    {
      problem: isSr ? "Ne kontaktiraju?" : "They don't reach out?",
      solution: isSr ? "CRO / Booking / Tok kontakta" : "CRO / Booking / Contact flow",
      icon: PhoneCall,
      serviceId: "redizajn-ux"
    },
    {
      problem: isSr ? "Gubite vreme?" : "Wasting operational time?",
      solution: isSr ? "Automatizacija / Web aplikacija" : "Automation / Web App",
      icon: Zap,
      serviceId: "automatizacija"
    },
    {
      problem: isSr ? "Sistem je zastareo?" : "Legacy, slow system?",
      solution: isSr ? "Redizajn / Novi moderan sajt" : "Redesign / New Website",
      icon: RefreshCw,
      serviceId: "izrada-sajtova"
    }
  ];

  return (
    <section id="act-3-diagnosis" className="relative py-24 sm:py-32 px-6 sm:px-12 bg-white dark:bg-[#07090e] text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* PART 1: THE DIAGNOSTIC TABLE */}
        <div className="space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold">
              AKT 03 • DIJAGNOSTIKA
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-slate-950 dark:text-white">
              {isSr ? "Gde nastaje problem?" : "Where does the breakdown occur?"}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              {isSr 
                ? "Pre bilo kakve izrade sajta, analiziramo 6 ključnih tačaka vašeg digitalnog nastupa." 
                : "Before building any website, we diagnose 6 critical points of your digital setup."}
            </p>
          </div>

          {/* 6 Diagnostic Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              const isSelected = activeCategory === idx;
              return (
                <div
                  key={cat.id}
                  onClick={() => setActiveCategory(isSelected ? null : idx)}
                  className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected 
                      ? "bg-blue-50 dark:bg-blue-950/40 border-blue-500 shadow-lg shadow-blue-500/10" 
                      : "bg-slate-50 dark:bg-white/[0.03] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xs font-mono tracking-widest uppercase text-blue-600 dark:text-blue-400 font-bold mb-2">
                    {cat.title}
                  </h3>

                  <p className="text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
                    {cat.question}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {cat.detail}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Transition Line */}
          <div className="py-6 text-center">
            <div className="inline-block text-xl sm:text-2xl font-display font-extrabold text-blue-600 dark:text-blue-400">
              {isSr ? "Tek kada pronađemo usko grlo, biramo alat." : "Only once we locate the bottleneck do we choose the tool."}
            </div>
          </div>

        </div>

        {/* PART 2: SOLUTION REVEAL (Problem -> Preporuka) */}
        <div className="space-y-10 pt-10 border-t border-slate-200 dark:border-white/5">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">
              {isSr ? "Povezivanje problema i rešenja" : "Matching problems with solutions"}
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-950 dark:text-white">
              {isSr ? "Problem određuje preporuku" : "The problem dictates the recommendation"}
            </h3>
          </div>

          {/* Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {solutionPairs.map((pair, idx) => {
              const Icon = pair.icon;
              return (
                <div 
                  key={idx}
                  onClick={() => onOpenServiceModal?.(pair.serviceId)}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 flex items-start gap-4 hover:bg-slate-100 dark:hover:bg-white/5 transition-all cursor-pointer group"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-mono text-slate-400">
                      {pair.problem}
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                      {pair.solution}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Crucial Core Statement */}
          <div className="mt-14 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-blue-500/5 to-transparent border border-blue-500/20 text-center space-y-4 max-w-3xl mx-auto">
            <div className="text-2xl sm:text-4xl font-display font-black text-slate-950 dark:text-white">
              {isSr 
                ? "Novi sajt je samo jedna od mogućih preporuka." 
                : "A new website is only one of many possible recommendations."}
            </div>
            
            <p className="text-lg sm:text-xl font-medium text-slate-600 dark:text-slate-300">
              {isSr 
                ? "Ne prodajemo unapred određeno rešenje." 
                : "We do not sell a pre-packaged one-size-fits-all solution."}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
