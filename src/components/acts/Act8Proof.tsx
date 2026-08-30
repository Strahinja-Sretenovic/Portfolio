import React from "react";
import { ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface Act8Props {
  onOpenProjectsModal?: () => void;
}

export function Act8Proof({ onOpenProjectsModal }: Act8Props) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const projects = [
    {
      id: "salon-stevan",
      title: "Frizerski Salon Stevan",
      category: isSr ? "Lokalni uslužni biznis" : "Local Service Business",
      link: "https://www.frizerskisalonstevan.rs",
      problem: isSr 
        ? "Klijenti su stalno zvali tokom rada i pitali za cenovnik, slobodne termine i tačnu lokaciju u gradu." 
        : "Clients constantly called during haircuts asking for prices, working hours and salon location.",
      decision: isSr 
        ? "Kreirati izuzetno brz mobilni sajt sa jasnim cenovnikom po kategorijama i direktnim 1-klik pozivom." 
        : "Build an ultra-fast mobile web portal with transparent pricing tiers and instant 1-tap booking/call.",
      implementation: isSr 
        ? "Responzivna web prezentacija, optimizacija Google Business profila i lokalnih mapa." 
        : "Responsive mobile web, Google Business profile optimization and local map indexing.",
      outcome: isSr 
        ? "Drastično smanjeni ponavljajući pozivi, klijenti dolaze informisani o cenama i sa tačnom lokacijom." 
        : "Drastically reduced repetitive inquiry calls; customers arrive fully informed with direct navigation."
    },
    {
      id: "ada-studio",
      title: "Ada Studio",
      category: isSr ? "Kreativni studio & Portfolio" : "Creative Studio & Portfolio",
      link: "https://www.adastudio.rs",
      problem: isSr 
        ? "Prethodni sajt je bio vizuelno zastareo, težak za ažuriranje radova i nije prenosio vrhunski nivo projekata." 
        : "Previous site was outdated, hard to update and didn't reflect high craftsmanship standards.",
      decision: isSr 
        ? "Struktuirati minimalistički i elegantan portfolio sa fokusom na fotografije i jednostavan CMS." 
        : "Create an elegant, minimalist gallery centered on high-resolution work and headless CMS.",
      implementation: isSr 
        ? "Prilagođena arhitektura, fluidne tranzicije bez seckanja i optimizovane galerije slika." 
        : "Custom architecture, fluid non-blocking transitions and responsive media optimization.",
      outcome: isSr 
        ? "Brzo i jednostavno dodavanje novih radova, profesionalna prezentacija koja gradi trenutno poverenje." 
        : "Effortless content management, premium aesthetic presentation establishing instant credibility."
    },
    {
      id: "altara-inmo",
      title: "Altara Inmo / Softverski Sistemi",
      category: isSr ? "Nekretnine & Web platforme" : "Real Estate & Web Platform",
      link: "https://www.altarainmo.com",
      problem: isSr 
        ? "Korisnici su imali poteškoća da brzo filtriraju nekretnine po parametrima, ceni i lokaciji." 
        : "Prospective buyers had friction filtering properties by custom criteria, budget and location.",
      decision: isSr 
        ? "Projektovati sistem sa instant filtriranjem, interaktivnim pregledom i direktnim kontaktom za agente." 
        : "Design real-time filtering, high-speed search index and direct WhatsApp/agent inquiry routing.",
      implementation: isSr 
        ? "Kompletna web aplikacija, dinamička baza podataka, optimizovan mobilni pregled nekretnina." 
        : "Full-stack web application, dynamic database schema, responsive mobile property viewer.",
      outcome: isSr 
        ? "Jasna pretraga bez zastoja, veći procenat posetilaca koji šalju upit za razgledanje." 
        : "Zero-latency filtering and noticeably higher conversion from visitor to scheduled viewing."
    }
  ];

  return (
    <section 
      id="act-8-proof"
      className="relative py-24 sm:py-32 px-6 sm:px-12 bg-slate-950 text-white border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">
            AKT 08 • STVARNI DOKAZI
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white">
            {isSr ? "Stvarni primeri iz prakse." : "Real examples from practice."}
          </h2>

          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto">
            {isSr 
              ? "Bez fabrikovanih brojki i bez praznih obećanja. Svaki projekat rešava konkretan problem." 
              : "No fabricated metrics, no empty promises. Every project solved a specific real problem."}
          </p>
        </div>

        {/* 3 Real Projects */}
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-all space-y-6"
            >
              {/* Project Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-widest font-bold">
                    {project.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
                    {project.title}
                  </h3>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <span>{isSr ? "Posetite sajt" : "Visit live site"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* 4 Steps Grid: Problem -> Decision -> Implementation -> Outcome */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* 1. Problem */}
                <div className="space-y-2 p-4 rounded-xl bg-rose-500/5 border border-rose-500/10">
                  <span className="text-[11px] font-mono text-rose-400 font-bold uppercase tracking-wider">
                    01. Problem
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* 2. Decision */}
                <div className="space-y-2 p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                  <span className="text-[11px] font-mono text-blue-400 font-bold uppercase tracking-wider">
                    02. Odluka
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.decision}
                  </p>
                </div>

                {/* 3. Implementation */}
                <div className="space-y-2 p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                    03. Izrada
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.implementation}
                  </p>
                </div>

                {/* 4. Outcome */}
                <div className="space-y-2 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                  <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    04. Ishod
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                    {project.outcome}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Action */}
        {onOpenProjectsModal && (
          <div className="text-center pt-4">
            <button
              onClick={onOpenProjectsModal}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              <span>{isSr ? "Pogledajte sve radove i detalje" : "View all projects"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
