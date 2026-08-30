import React from "react";
import { ExternalLink, ArrowRight, ShieldCheck } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface Act4Props {
  onOpenProjectsModal?: () => void;
}

export function Act4TheProof({ onOpenProjectsModal }: Act4Props) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const realProjects = [
    {
      id: "salon-stevan",
      title: "Frizerski Salon Stevan",
      category: isSr ? "Lokalni uslužni biznis" : "Local Service Business",
      link: "https://www.frizerskisalonstevan.rs",
      problem: isSr 
        ? "Klijenti su zvali tokom rada sa istim pitanjima o cenama, terminima i tačnoj lokaciji." 
        : "Clients called repeatedly during appointments asking about prices, hours, and location.",
      odluka: isSr 
        ? "Postaviti jasan cenovnik, lokaciju i 1-klik poziv u prvi plan na mobilnom telefonu." 
        : "Prioritize clear pricing, direct navigation, and 1-tap mobile call/booking.",
      realizacija: isSr 
        ? "Ultra-brz mobilni sajt, optimizovan Google Business profil i lokalna mapa." 
        : "Ultra-fast mobile site, optimized Google Business profile, and local map pack.",
      ishod: isSr 
        ? "Znatno manje ponavljajućih poziva tokom rada; klijenti dolaze unapred informisani." 
        : "Significantly fewer repetitive calls; customers arrive fully informed with direct booking."
    },
    {
      id: "ada-studio",
      title: "Ada Studio",
      category: isSr ? "Kreativni studio & Portfolio" : "Creative Studio & Portfolio",
      link: "https://www.adastudio.rs",
      problem: isSr 
        ? "Prethodna prezentacija nije odražavala visok estetski nivo i radove je bilo teško ažurirati." 
        : "Previous site failed to reflect high aesthetic standards and was cumbersome to update.",
      odluka: isSr 
        ? "Kreirati minimalističku galeriju fokusiranu na visoku rezoluciju radova i jednostavan CMS." 
        : "Build a minimalist gallery focused on high-resolution projects with an intuitive CMS.",
      realizacija: isSr 
        ? "Prilagođena arhitektura, fluidno pretraživanje projekata i brzo učitavanje slika." 
        : "Custom architecture, fluid project browsing, and optimized media delivery.",
      ishod: isSr 
        ? "Prezentacija koja odmah gradi poverenje i omogućava timu lako dodavanje novih radova." 
        : "Instant credibility with high-ticket clients and effortless self-managed project publishing."
    },
    {
      id: "altara-inmo",
      title: "Altara Inmo / Softverski Sistemi",
      category: isSr ? "Nekretnine & Web platforme" : "Real Estate & Web Platforms",
      link: "https://www.altarainmo.com",
      problem: isSr 
        ? "Posetioci su teško pronalazili odgovarajuće nekretnine zbog sporog i nepreglednog filtriranja." 
        : "Visitors struggled to filter properties due to cumbersome filters and slow page responses.",
      odluka: isSr 
        ? "Projektovati sistem sa instant filtriranjem, mapom i direktnim kontaktom agenata." 
        : "Design real-time filtering, map integration, and direct WhatsApp agent routing.",
      realizacija: isSr 
        ? "Kompletna web aplikacija, dinamička baza podataka i optimizovan mobilni pregled." 
        : "Full-stack web application, dynamic database schema, and mobile listing interface.",
      ishod: isSr 
        ? "Brza pretraga bez čekanja i veći broj posetilaca koji zakazuju razgledanje." 
        : "Zero-latency search experience and higher conversion from visitors to scheduled viewings."
    }
  ];

  return (
    <section 
      id="act-4-the-proof"
      className="relative py-24 sm:py-36 px-6 sm:px-12 bg-slate-900 dark:bg-[#05070c] text-white border-t border-slate-800 dark:border-white/10"
    >
      <div className="max-w-5xl mx-auto space-y-20">
        
        {/* Act 4 Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">
            AKT 04 • STVARNI REZULTATI
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white">
            {isSr 
              ? "Strategija vredi samo ako može da se sprovede." 
              : "Strategy only matters if it can be executed."}
          </h2>

          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto">
            {isSr 
              ? "Zato kod nas strategija, UX i development nisu odvojeni svetovi." 
              : "That is why strategy, UX, and development are not separate silos for us."}
          </p>
        </div>

        {/* 3 Real Projects */}
        <div className="space-y-8">
          {realProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-10 rounded-3xl bg-slate-950/80 border border-white/10 space-y-6"
            >
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

              {/* 4 Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                  <span className="text-[10px] font-mono text-rose-400 uppercase font-bold">
                    Problem
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                  <span className="text-[10px] font-mono text-blue-400 uppercase font-bold">
                    Odluka
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.odluka}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">
                    Realizacija
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.realizacija}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1.5">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold">
                    Ishod
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed font-medium">
                    {project.ishod}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Action */}
        {onOpenProjectsModal && (
          <div className="text-center pt-2">
            <button
              onClick={onOpenProjectsModal}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              <span>{isSr ? "Pogledajte sve projekte" : "View all projects"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Trust & Risk-Reversal Moment */}
        <div className="p-8 sm:p-14 rounded-3xl bg-white/[0.02] border border-white/10 text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>RADIKALNA ISKRENOST</span>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl sm:text-4xl font-display font-black text-white">
              {isSr ? "Ne prodajemo unapred određeno rešenje." : "We don't sell predetermined solutions."}
            </h3>

            <p className="text-xl sm:text-3xl font-display font-bold text-blue-400">
              {isSr ? "Ako vam novi sajt nije potreban, reći ćemo vam." : "If you don't need a new website, we will tell you."}
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
            {isSr 
              ? "Možda je sledeći pravi potez bolji Google profil, booking, jedna landing stranica, automatizacija ili nekoliko preciznih izmena na postojećem sistemu." 
              : "Maybe the right next step is an optimized Google profile, booking, a single landing page, automation, or minor precision tweaks to what already exists."}
          </p>

          <div className="pt-4 border-t border-white/10 space-y-1">
            <div className="text-lg sm:text-xl font-display font-bold text-slate-300">
              {isSr ? "Cilj nije najveći projekat." : "The goal is not the biggest project."}
            </div>
            <div className="text-lg sm:text-xl font-display font-bold text-white">
              {isSr ? "Cilj je pravi sledeći potez." : "The goal is the right next move."}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
