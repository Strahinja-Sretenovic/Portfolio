import { useState } from "react";
import { motion } from "motion/react";
import { 
  Search, 
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  Calendar, 
  Bot, 
  Code2, 
  Laptop, 
  ArrowRight,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface SolutionSystemSceneProps {
  onOpenServiceModal?: (serviceId?: string) => void;
}

export function SolutionSystemScene({ onOpenServiceModal }: SolutionSystemSceneProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const solutionPaths = [
    {
      id: "path-1",
      frictionSr: "SLABA VIDLJIVOST",
      frictionEn: "LOW VISIBILITY",
      frictionSubSr: "Kupci vas ne pronalaze na Google pretrazi",
      frictionSubEn: "Customers cannot find you on Google Search",
      toolSr: "LOKALNI SEO & GOOGLE PROFIL",
      toolEn: "LOCAL SEO & GOOGLE PROFILE",
      toolDescSr: "Optimizacija Google mapa, tehničke SEO strukture i lokalni signali autoriteta.",
      toolDescEn: "Google Maps ranking, technical schema markup, and local authority signals.",
      icon: <Search className="w-5 h-5 text-blue-500" />
    },
    {
      id: "path-2",
      frictionSr: "ZBUNJUJUĆA PONUDA",
      frictionEn: "CONFUSING OFFER",
      frictionSubSr: "Posetioci ne razumeju šta tačno dobijaju",
      frictionSubEn: "Visitors bounce before understanding value",
      toolSr: "INFORMACIONA ARHITEKTURA & COPY",
      toolEn: "INFORMATION ARCHITECTURE & CONTENT",
      toolDescSr: "Jasna hijerarhija poruka, strukturirani paketi usluga i eliminacija nerazumljivog žargona.",
      toolDescEn: "Clear message hierarchy, structured service tiers, and zero confusing jargon.",
      icon: <Layers className="w-5 h-5 text-indigo-500" />
    },
    {
      id: "path-3",
      frictionSr: "NEDOSTATAK POVERENJA",
      frictionEn: "LOW TRUST",
      frictionSubSr: "Kupci biraju konkurenciju sa više dokaza",
      frictionSubEn: "Buyers pick competitors with verified proof",
      toolSr: "DOKAZI, UX & POZICIONIRANJE",
      toolEn: "PROOF, UX & POSITIONING",
      toolDescSr: "Galerije stvarnih radova, integrisane ocene klijenata i autoritativan vizuelni utisak.",
      toolDescEn: "Real case study galleries, verified Google reviews, and authoritative visual design.",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />
    },
    {
      id: "path-4",
      frictionSr: "NISKA KONVERZIJA",
      frictionEn: "LOW CONVERSION",
      frictionSubSr: "Ima poseta, ali nema poziva i upita",
      frictionSubEn: "High traffic, but low calls and leads",
      toolSr: "UX & CRO OPTIMIZACIJA",
      toolEn: "UX & CRO OPTIMIZATION",
      toolDescSr: "Uklanjanje prepreka na dugmadima za poziv, transparentnost cena i lakši kontakt.",
      toolDescEn: "Eliminating friction on action buttons, transparent pricing, and effortless contact.",
      icon: <TrendingUp className="w-5 h-5 text-amber-500" />
    },
    {
      id: "path-5",
      frictionSr: "KOMPLIKOVANO ZAKAZIVANJE",
      frictionEn: "COMPLICATED BOOKING",
      frictionSubSr: "Dugotrajno dopisivanje za slobodan termin",
      frictionSubEn: "Endless chat back-and-forth for open slots",
      toolSr: "BOOKING TOK & KALENDAR",
      toolEn: "BOOKING ENGINE & CALENDAR",
      toolDescSr: "Automatsko zakazivanje u 3 klika na mobilnom, bez preklapanja i bez poziva.",
      toolDescEn: "Automated 3-tap mobile scheduling with live calendar sync and zero overlaps.",
      icon: <Calendar className="w-5 h-5 text-rose-500" />
    },
    {
      id: "path-6",
      frictionSr: "PREVIŠE RUČNOG RADA",
      frictionEn: "MANUAL BOTTLENECK",
      frictionSubSr: "Gubljenje sati na ponavljajuće zadatke",
      frictionSubEn: "Hours lost on manual administration",
      toolSr: "RADNA AUTOMATIZACIJA",
      toolEn: "WORKFLOW AUTOMATION",
      toolDescSr: "Automatske SMS/Email potvrde, rutiranje upita i integracija sa CRM sistemima.",
      toolDescEn: "Automated confirmations, reminder SMS, and CRM lead routing.",
      icon: <Bot className="w-5 h-5 text-purple-500" />
    },
    {
      id: "path-7",
      frictionSr: "KOMPLEKSAN PROCES POSLA",
      frictionEn: "COMPLEX WORKFLOW",
      frictionSubSr: "Standardni sajtovi ne mogu da pokriju proces",
      frictionSubEn: "Standard websites cannot support business logic",
      toolSr: "NAMENSKA WEB APLIKACIJA",
      toolEn: "BESPOKE WEB APPLICATION",
      toolDescSr: "Prilagođeni portali, dispečerski softveri, kalkulatori i baze podataka.",
      toolDescEn: "Custom client portals, dispatch software, calculators, and dedicated engines.",
      icon: <Code2 className="w-5 h-5 text-cyan-500" />
    },
    {
      id: "path-8",
      frictionSr: "ZASTARELO DIGITALNO ISKUSTVO",
      frictionEn: "OUTDATED DIGITAL PRESENCE",
      frictionSubSr: "Sajt ne prati trenutni nivo kvaliteta firme",
      frictionSubEn: "Digital home does not match business caliber",
      toolSr: "MODERAN WEB SISTEM / REDIZAJN",
      toolEn: "MODERN WEB SYSTEM / REDESIGN",
      toolDescSr: "Kompletna moderna arhitektura izgrađena na čistom TypeScript kodu za maksimalnu brzinu.",
      toolDescEn: "High-performance full-stack web platform built on clean TypeScript for speed.",
      icon: <Laptop className="w-5 h-5 text-teal-500" />
    }
  ];

  return (
    <section
      id="scene-07"
      className="relative min-h-screen py-24 sm:py-32 px-4 sm:px-6 bg-slate-50 dark:bg-[#090c14] border-t border-slate-200 dark:border-white/5 overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Scene Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="text-xs sm:text-sm font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest">
            {isSr ? "07 / MATRICA REŠENJA" : "07 / THE SOLUTION SYSTEM"}
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {isSr ? "Tehnologija dolazi tek kada znamo zašto nam je potrebna." : "Technology enters only when we understand why it is needed."}
          </h2>

          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            {isSr
              ? "Svaki alat u našem repertoaru odgovara na tačno određenu vrstu poslovne prepreke:"
              : "Every tool in our repertoire maps directly to a verified commercial bottleneck:"}
          </p>
        </div>

        {/* 8 Friction-to-Solution Paired Pathways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {solutionPaths.map((path) => (
            <div
              key={path.id}
              className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-4 hover:border-blue-400 dark:hover:border-blue-700 transition-colors"
            >
              <div className="space-y-3">
                
                {/* Friction Row (The Problem) */}
                <div className="p-3 rounded-2xl bg-red-50/70 dark:bg-red-950/20 border border-red-200/50 dark:border-red-900/30 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-red-600 dark:text-red-400 uppercase">
                      {isSr ? "PREPREKA" : "BOTTLENECK"}
                    </span>
                    <div className="text-xs font-bold text-slate-900 dark:text-red-200">
                      {isSr ? path.frictionSr : path.frictionEn}
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:inline">
                    {isSr ? path.frictionSubSr : path.frictionSubEn}
                  </span>
                </div>

                {/* Arrow Transition */}
                <div className="flex justify-center -my-1">
                  <span className="text-blue-500 text-xs font-bold">↓</span>
                </div>

                {/* Solution Row (The Precision Tool) */}
                <div className="p-3 rounded-2xl bg-blue-50/70 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-900/30 flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white dark:bg-black/40 shrink-0">
                    {path.icon}
                  </div>
                  <div className="space-y-0.5 flex-1 min-w-0">
                    <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase">
                      {isSr ? "ODGOVARAJUĆI ALAT" : "APPROPRIATE TOOL"}
                    </span>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {isSr ? path.toolSr : path.toolEn}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-0.5">
                      {isSr ? path.toolDescSr : path.toolDescEn}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Modal Opener / Deep Capability Exploration */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <h3 className="text-xl sm:text-3xl font-display font-extrabold text-white">
              {isSr ? "Želite da pogledate puni spektar naših usluga?" : "Want to review our complete service capabilities?"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              {isSr ? "Otvorite detaljnu specifikaciju i inženjerske standarde." : "Open detailed specifications and engineering standards."}
            </p>
          </div>

          {onOpenServiceModal && (
            <button
              onClick={() => onOpenServiceModal()}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all cursor-pointer shrink-0"
            >
              <span>{isSr ? "Otvori detaljan pregled usluga" : "Open Detailed Specs"}</span>
              <ArrowRight size={15} />
            </button>
          )}
        </div>

      </div>
    </section>
  );
}
