import { useState } from "react";
import { motion } from "motion/react";
import { 
  ExternalLink, 
  CheckCircle, 
  ArrowRight, 
  Layers, 
  ShieldCheck,
  TrendingUp,
  FileText
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { projectsData } from "../../data/projectsData";
import { trackProjectClick } from "../../utils/analytics";

interface ProofSceneProps {
  onOpenCaseStudyModal?: (projectId: string) => void;
}

export function ProofScene({ onOpenCaseStudyModal }: ProofSceneProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const caseStudies = [
    {
      id: "frizerski-salon-stevan",
      name: "Frizerski Salon Stevan",
      industrySr: "Lokalni Uslužni Biznis",
      industryEn: "Local Service Business",
      problemSr: "Posetioci sa mobilnih telefona su odustajali jer cenovnik nije bio pregledan, a broj telefona je bio skriven u futeru.",
      problemEn: "Mobile visitors bounced because pricing was inaccessible and the phone call button was buried in the footer.",
      decisionSr: "Prioritet je bio 100% fokus na mobilno iskustvo, transparentan cenovnik i instant dugmad za poziv i lokaciju.",
      decisionEn: "Prioritized 100% mobile clarity: transparent interactive pricing and instant one-tap call & navigation.",
      solutionSr: "Ultrabrzi React sajt (0.4s), optimizovan Google profil i direktno online zakazivanje.",
      solutionEn: "Blazing fast React site (0.4s), local Google profile alignment, and direct online booking.",
      resultSr: "+180% više direktnih poziva i online zakazivanja u prvom kvartalu rada.",
      resultEn: "+180% increase in direct phone inquiries and booked slots within the first quarter.",
      link: "https://frizerski-salon-stevan.vercel.app/",
      tags: ["React", "Mobilni UX", "Lokalni SEO"]
    },
    {
      id: "ada-studio",
      name: "Ada Studio",
      industrySr: "Kreativna Agencija & Brending",
      industryEn: "Creative Agency & Branding",
      problemSr: "Prethodni sajt nije komunicirao autoritet agencije za privlačenje većih klijenata, a ažuriranje portfolija je bilo sporo.",
      problemEn: "Prior website lacked the high-ticket authority needed for premium clients and portfolio updates were cumbersome.",
      decisionSr: "Izgrađen je prestižan vizuelni narativ sa prilagođenim CMS-om za lako dodavanje novih radova i usluga.",
      decisionEn: "Engineered a high-authority narrative layout paired with an intuitive custom CMS for portfolio management.",
      solutionSr: "Custom platforma sa SEO optimizacijom za organsku pretragu i integrisanim formama za kvalifikaciju klijenata.",
      solutionEn: "Custom platform engineered for organic Google ranking with integrated client qualification flows.",
      resultSr: "Automatizovan prijem novih upita i visoka vidljivost na organskoj Google pretrazi.",
      resultEn: "Streamlined inbound client acquisition pipeline and strong organic SERP positioning.",
      link: "https://adastudio.rs/",
      tags: ["Custom CMS", "SEO Rangiranje", "Automatizacija"]
    },
    {
      id: "altara-inmo",
      name: "Altara Inmo",
      industrySr: "Nekretnine & Prodajni Portal",
      industryEn: "Real Estate Property Platform",
      problemSr: "Pretraga hiljada nekretnina je bila spora, a kupci su se gubili na nefunkcionalnim filterima.",
      problemEn: "Catalog searching was slow and international buyers bounced on sluggish multi-parameter filters.",
      decisionSr: "Arhitektura je refaktorisana za sub-sekundno filtriranje po lokaciji, ceni i tipu objekta sa brzim upitom agentu.",
      decisionEn: "Refactored architecture for sub-second property filtering with direct lead routing to agents.",
      solutionSr: "Visokoperformantna web aplikacija prilagođena internacionalnim klijentima.",
      solutionEn: "High-performance responsive real estate web application built for international buyers.",
      resultSr: "Trenutno filtriranje kataloga i direktno povezivanje zainteresovanih kupaca sa agentima.",
      resultEn: "Sub-second catalog browsing and direct customer-to-agent lead routing.",
      link: "https://www.altarainmo.com/",
      tags: ["Web Aplikacija", "Brza Pretraga", "Globalni Klijenti"]
    },
    {
      id: "taxi-pro-gps",
      name: "Taxi Pro GPS",
      industrySr: "Sistem za Flotu & Logistiku",
      industryEn: "Fleet & Logistics Software",
      problemSr: "Dispečeri su gubili sate na ručno evidentiranje vozila i telefonsku koordinaciju.",
      problemEn: "Dispatchers lost administrative hours manually recording vehicle coordinates and status.",
      decisionSr: "Projektovan softverski sistem za live praćenje flote vozila u realnom vremenu uz automatske izveštaje.",
      decisionEn: "Architected a real-time vehicle positioning platform with automated dispatch reporting.",
      solutionSr: "Namensko softversko rešenje sa 99.9% pouzdanošću i vizuelnom telemetrijom kretanja.",
      solutionEn: "Bespoke software architecture with 99.9% uptime and real-time operational telematics.",
      resultSr: "Smanjenje operativnih troškova goriva i kompletna automatizacija dispečerskih izveštaja.",
      resultEn: "Measurable reduction in fleet operating costs and automated administrative dispatch.",
      link: "https://www.taxiprogps.com/",
      tags: ["Softver po Meri", "Real-Time Telemetrija", "Ušteda Vremena"]
    }
  ];

  const handleExternalClick = (cs: typeof caseStudies[0]) => {
    trackProjectClick({
      projectName: cs.name,
      projectType: cs.industrySr,
      projectUrl: cs.link,
      action: "open_external_demo"
    });
  };

  return (
    <section
      id="scene-07"
      className="relative min-h-screen py-24 sm:py-32 px-4 sm:px-6 bg-slate-50 dark:bg-[#090c14] border-t border-slate-200 dark:border-white/5 overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Scene Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="text-xs sm:text-sm font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest">
            {isSr ? "07 / DOKAZI & PRAKSA" : "07 / VERIFIED EVIDENCE"}
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {isSr ? "Ne želimo da nam verujete samo na reč." : "We don't ask you to take our word for it."}
          </h2>

          <p className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 font-semibold">
            {isSr ? "Pogledajte kako donosimo odluke." : "Examine how we make strategic decisions."}
          </p>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {isSr
              ? "Svaki projekat posmatramo kroz matricu: Problem → Odluka → Rešenje → Ishod. Bez lažnih statistika i bez generičkih tvrdnji."
              : "Every engagement is engineered through: Problem → Decision → Solution → Result. Zero fabricated metrics, verified production outcomes."}
          </p>
        </div>

        {/* Large Project Diagnostic Panels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div className="space-y-5">
                
                {/* Header Row */}
                <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                      {isSr ? cs.industrySr : cs.industryEn}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
                      {cs.name}
                    </h3>
                  </div>

                  <a
                    href={cs.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleExternalClick(cs)}
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-white transition-colors cursor-pointer"
                    title={isSr ? "Posetite sajt uživo" : "Visit live site"}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                {/* Structured Breakdown: Problem → Decision → Solution → Result */}
                <div className="space-y-3.5 text-xs sm:text-sm">
                  
                  {/* PROBLEM */}
                  <div className="p-3 rounded-2xl bg-red-50/70 dark:bg-red-950/20 border border-red-200/50 dark:border-red-900/30 space-y-1">
                    <div className="text-[10px] font-mono font-bold text-red-600 dark:text-red-400 uppercase">
                      {isSr ? "01 / PROBLEM" : "01 / PROBLEM"}
                    </div>
                    <div className="text-slate-700 dark:text-slate-300">
                      {isSr ? cs.problemSr : cs.problemEn}
                    </div>
                  </div>

                  {/* DECISION */}
                  <div className="p-3 rounded-2xl bg-blue-50/70 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-900/30 space-y-1">
                    <div className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase">
                      {isSr ? "02 / STRATEŠKA ODLUKA" : "02 / STRATEGIC DECISION"}
                    </div>
                    <div className="text-slate-700 dark:text-slate-300">
                      {isSr ? cs.decisionSr : cs.decisionEn}
                    </div>
                  </div>

                  {/* SOLUTION */}
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 space-y-1">
                    <div className="text-[10px] font-mono font-bold text-slate-500 uppercase">
                      {isSr ? "03 / TEHNIČKO REŠENJE" : "03 / TECHNICAL SOLUTION"}
                    </div>
                    <div className="text-slate-700 dark:text-slate-300">
                      {isSr ? cs.solutionSr : cs.solutionEn}
                    </div>
                  </div>

                  {/* RESULT */}
                  <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/25 border border-emerald-200 dark:border-emerald-900/40 space-y-1">
                    <div className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase flex items-center gap-1">
                      <CheckCircle size={12} />
                      <span>{isSr ? "04 / MERLJIV ISHOD" : "04 / MEASURABLE RESULT"}</span>
                    </div>
                    <div className="font-semibold text-slate-900 dark:text-emerald-200">
                      {isSr ? cs.resultSr : cs.resultEn}
                    </div>
                  </div>

                </div>

              </div>

              {/* Bottom Tags & Detail CTA */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {cs.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-[11px] font-mono text-slate-600 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={cs.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                >
                  <span>{isSr ? "Pogledajte sajt uživo →" : "View Live Site →"}</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
