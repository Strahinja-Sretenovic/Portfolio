import React from "react";
import { ExternalLink, CheckCircle2, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface Act5Props {
  onOpenProjectsModal?: () => void;
  onScrollToForm: () => void;
}

export function Act5ProofAndTruth({ onOpenProjectsModal, onScrollToForm }: Act5Props) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const featuredProjects = [
    {
      id: "frizerski-salon-stevan",
      name: "Frizerski Salon Stevan",
      category: isSr ? "Lokalni Uslužni Biznis" : "Local Service Business",
      link: "https://frizerski-salon-stevan.vercel.app/",
      problem: isSr 
        ? "Usluge i cene nisu bile prilagođene brzom zakazivanju na telefonima, a klijenti su zvali samo po preporuci." 
        : "Services and prices were not optimized for mobile booking, relying solely on word of mouth.",
      solution: isSr 
        ? "Projektovali smo brz mobilni sajt sa jasnim cenovnikom, transparentnim uslugama i instant dugmadima za poziv i lokaciju." 
        : "Engineered a fast mobile web presentation with transparent pricing and one-tap call & maps actions.",
      outcome: isSr 
        ? "Značajan rast direktnih poziva i zakazivanja novih klijenata već u prvim nedeljama." 
        : "Substantial increase in direct appointments and inbound phone calls."
    },
    {
      id: "ada-studio",
      name: "Ada Studio",
      category: isSr ? "Kreativna Agencija & Brending" : "Creative Agency & Branding",
      link: "https://adastudio.rs/",
      problem: isSr 
        ? "Portfolio i vizuelni nastup nisu privlačili klijente veće vrednosti niti donosili organske upite." 
        : "Portfolio and branding were not attracting high-ticket clients or organic leads.",
      solution: isSr 
        ? "Razvili smo agencijsku platformu sa prilagođenim CMS-om, jasnim prikazom radova i SEO temeljom za pretragu." 
        : "Built an agency platform with a custom CMS, clean case study layout, and foundational SEO.",
      outcome: isSr 
        ? "Automatizovan prijem novih upita i stabilna vidljivost na Google pretrazi." 
        : "Automated inquiry onboarding pipeline and established Google search authority."
    },
    {
      id: "taxi-pro-gps",
      name: "Taxi Pro GPS / Altara Inmo",
      category: isSr ? "Softverski Sistemi & Baza Podataka" : "Software & Data Platform",
      link: "https://www.taxiprogps.com/",
      problem: isSr 
        ? "Manuelna obrada upita i nedostatak brzog pregleda usporavali su svakodnevni rad sa korisnicima." 
        : "Manual query handling and lack of real-time search slowed operational response times.",
      solution: isSr 
        ? "Izradili smo web aplikaciju sa instant filtriranjem u milisekundi i direktnim slanjem upita agentima." 
        : "Developed a sub-second search platform with automated direct dispatch to representatives.",
      outcome: isSr 
        ? "Ubrzan proces obrade upita, ušteda radnih sati i pouzdan rad na internacionalnom nivou." 
        : "Streamlined operational lead capture with high reliability across regions."
    }
  ];

  return (
    <section id="act-5-proof" className="relative py-24 sm:py-32 px-6 sm:px-12 bg-white dark:bg-[#05070c] text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto space-y-28">
        
        {/* SECTION 1: 3 FEATURED PROJECTS */}
        <div className="space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold">
                AKT 05 • STVARNI RADOVI
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-slate-950 dark:text-white">
                {isSr ? "Dokaz u praksi" : "Proof in practice"}
              </h2>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-lg">
                {isSr 
                  ? "Tri primera kako smo rešili konkretne probleme stvarnih biznisa." 
                  : "Three examples of how we solved concrete business bottlenecks."}
              </p>
            </div>

            {onOpenProjectsModal && (
              <button
                onClick={onOpenProjectsModal}
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
              >
                <span>{isSr ? "Pogledajte sve projekte" : "View all projects"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Project Panels */}
          <div className="space-y-8">
            {featuredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 space-y-6 hover:border-slate-300 dark:hover:border-white/20 transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-5">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold">
                      {project.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-950 dark:text-white mt-1">
                      {project.name}
                    </h3>
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-xs font-mono font-bold text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/20 transition-all"
                    >
                      <span>Pogledaj Uživo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  {/* Problem */}
                  <div className="space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-rose-500 font-bold flex items-center gap-1.5">
                      <span>Problem</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-blue-500 font-bold flex items-center gap-1.5">
                      <span>Šta smo uradili</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div className="space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-emerald-500 font-bold flex items-center gap-1.5">
                      <span>Ishod</span>
                    </div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* SECTION 2: HUMAN TRUST & PHILOSOPHY */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 dark:bg-white/[0.03] text-white border border-slate-800 dark:border-white/10 space-y-6 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight">
            {isSr 
              ? "Strategija vredi samo ako može da se sprovede." 
              : "Strategy only matters if it can be executed."}
          </h3>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {isSr 
              ? "Zato kod nas poslovna analiza, UX i development nisu odvojeni svetovi. Radimo ih kao jedan proces — direktno sa vama, bez posrednika i bez gubljenja informacija." 
              : "That is why business analysis, UX, and development are not separate silos for us. We execute them as one continuous process — working directly with you."}
          </p>
        </div>

        {/* SECTION 3: RADICAL HONESTY / RISK REVERSAL */}
        <div className="space-y-8 max-w-3xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-slate-400">
            <HelpCircle className="w-4 h-4 text-blue-500" />
            <span>RADIKALNA ISKRENOST</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-950 dark:text-white">
            {isSr ? "A šta ako vam novi sajt nije potreban?" : "What if you don't even need a new website?"}
          </h2>

          <div className="text-2xl sm:text-3xl font-display font-bold text-blue-600 dark:text-blue-400">
            {isSr ? "Reći ćemo vam." : "We will tell you directly."}
          </div>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {isSr 
              ? "Možda je veća prilika u sređivanju Google profila, jednostavnijem bookingu, preoblikovanju same ponude, jednoj landing stranici ili nekoliko preciznih izmena na postojećem sajtu." 
              : "Perhaps the bigger opportunity lies in fixing your Google profile, simplifying booking, refining your offer, or making a few targeted tweaks to your current site."}
          </p>

          <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/40 text-slate-900 dark:text-blue-200 text-sm sm:text-base font-semibold">
            {isSr 
              ? "Cilj nije da napravimo najveći projekat. Cilj je da pronađemo pravi sledeći potez." 
              : "The goal is not to sell the biggest project. The goal is to find the right next move."}
          </div>
        </div>

        {/* SECTION 4: FINAL CTA BOX */}
        <div className="p-10 sm:p-16 rounded-3xl bg-slate-950 text-white border border-white/10 text-center space-y-8 max-w-4xl mx-auto shadow-2xl">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight">
              {isSr ? "Ne morate da znate šta vam treba." : "You don't need to know what you need."}
            </h2>
            <div className="text-2xl sm:text-3xl font-display font-bold text-blue-400">
              {isSr ? "To je deo našeg posla." : "That is part of our job."}
            </div>
          </div>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            {isSr 
              ? "Pošaljite nam svoj biznis. Pre razgovora ćemo pogledati vaš trenutni digitalni nastup i izdvojiti nekoliko konkretnih zapažanja." 
              : "Send us your business. Before we talk, we will review your current digital presence and prepare concrete observations."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onScrollToForm}
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-white text-slate-950 hover:bg-slate-100 font-extrabold text-base transition-all shadow-xl shadow-blue-500/10 cursor-pointer"
            >
              {isSr ? "ZATRAŽITE BESPLATNU POČETNU ANALIZU" : "REQUEST FREE INITIAL AUDIT"}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
