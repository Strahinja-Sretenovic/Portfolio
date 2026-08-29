import { useState } from "react";
import { motion } from "motion/react";
import { 
  Target, 
  Search, 
  Layers, 
  ShieldCheck, 
  Compass, 
  Laptop, 
  FileCode2, 
  TrendingUp, 
  Calendar, 
  Bot, 
  Code2, 
  BarChart3,
  Sparkles
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function DiagnosticSystemScene() {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const [selectedNode, setSelectedNode] = useState<number | null>(null);

  const systemNodes = [
    {
      id: "vidljivost",
      nameSr: "VIDLJIVOST",
      nameEn: "VISIBILITY",
      descSr: "Kako i gde vas pronalaze kupci (Google Search, Maps, direktna pretraga)",
      descEn: "Discovery channels: Google search, local map pack, direct inquiries",
      icon: <Search size={15} />
    },
    {
      id: "ponuda",
      nameSr: "PONUDA",
      nameEn: "OFFER",
      descSr: "Jasnoća onoga što prodajete, paketi usluga i diferencijacija",
      descEn: "Clarity of value proposition, service tiers, differentiation",
      icon: <Layers size={15} />
    },
    {
      id: "poverenje",
      nameSr: "POVERENJE",
      nameEn: "TRUST",
      descSr: "Fotografije radova, verifikovane ocene i dokazi o stručnosti",
      descEn: "Client reviews, project portfolios, social validation",
      icon: <ShieldCheck size={15} />
    },
    {
      id: "customer-journey",
      nameSr: "CUSTOMER JOURNEY",
      nameEn: "CUSTOMER JOURNEY",
      descSr: "Put posetioca od prve posete do konačnog upita bez zastoja",
      descEn: "Seamless flow from discovery to closed business inquiry",
      icon: <Compass size={15} />
    },
    {
      id: "ux",
      nameSr: "UX & UI",
      nameEn: "UX & UI",
      descSr: "Mobilna ergonomija, čitljivost, kontrasti i brzina interakcije",
      descEn: "Mobile ergonomics, typography hierarchy, instantaneous feel",
      icon: <Laptop size={15} />
    },
    {
      id: "seo",
      nameSr: "SEO",
      nameEn: "SEO",
      descSr: "Struktuirani podaci, lokalni signali, Core Web Vitals (100/100)",
      descEn: "Schema markup, local SERP authority, sub-second TTFB",
      icon: <FileCode2 size={15} />
    },
    {
      id: "konverzija",
      nameSr: "KONVERZIJA",
      nameEn: "CONVERSION",
      descSr: "Jasni pozivi na akciju (CTA), uklanjanje straha od cene",
      descEn: "High-leverage conversion architecture and friction elimination",
      icon: <TrendingUp size={15} />
    },
    {
      id: "booking",
      nameSr: "BOOKING",
      nameEn: "BOOKING FLOW",
      descSr: "Online zakazivanje termina, kalendar bez ljudske greške",
      descEn: "Frictionless online appointment booking and calendar sync",
      icon: <Calendar size={15} />
    },
    {
      id: "automatizacija",
      nameSr: "AUTOMATIZACIJA",
      nameEn: "AUTOMATION",
      descSr: "Slanje potvrda, SMS/Email podsetnici, rutiranje upita",
      descEn: "Automated client notifications, lead routing, zero paperwork",
      icon: <Bot size={15} />
    },
    {
      id: "tehnologija",
      nameSr: "TEHNOLOGIJA",
      nameEn: "TECHNOLOGY",
      descSr: "TypeScript, React, server-side API bez teških WordPress dodataka",
      descEn: "Modern TypeScript engineering, pure speed, zero bloat",
      icon: <Code2 size={15} />
    },
    {
      id: "podaci",
      nameSr: "PODACI",
      nameEn: "DATA & TELEMETRY",
      descSr: "GA4 telemetrija, praćenje ponašanja i merenje stvarnog ROI",
      descEn: "Actionable event telemetry, conversion attribution, real ROI",
      icon: <BarChart3 size={15} />
    }
  ];

  return (
    <section
      id="scene-05"
      className="relative min-h-screen py-24 sm:py-32 px-4 sm:px-6 bg-slate-50 dark:bg-[#090c14] border-t border-slate-200 dark:border-white/5 overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Scene Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="text-xs sm:text-sm font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest">
            {isSr ? "05 / DIJAGNOSTIČKI SISTEM" : "05 / THE DIAGNOSTIC SYSTEM"}
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {isSr ? "Ne analiziramo samo stranicu." : "We don't just analyze a webpage."}
            <br />
            <span className="text-blue-600 dark:text-blue-400">
              {isSr ? "Analiziramo sistem." : "We analyze the system."}
            </span>
          </h2>

          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            {isSr
              ? "Gledamo kako ljudi pronalaze vaš biznis, šta vide, šta razumeju, gde oklevaju i šta se događa nakon kontakta."
              : "We observe how people discover your business, what they see, what they understand, where they hesitate, and what occurs after initial contact."}
          </p>
        </div>

        {/* Diagnostic Interconnected System Constellation */}
        <div className="p-6 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              {isSr ? "SVI ČVOROVI RADE U FUNKCIJI JEDNOG CILJA" : "ALL NODES SERVE ONE CENTRAL OBJECTIVE"}
            </span>
            <div className="text-xl font-bold text-slate-900 dark:text-white">
              {isSr ? "Kliknite na bilo koji čvor za detalje analize:" : "Click any node to view diagnostic scope:"}
            </div>
          </div>

          {/* Central Hub with 11 Nodes */}
          <div className="space-y-6">
            
            {/* Center Anchor */}
            <div className="flex justify-center">
              <div className="p-5 sm:p-7 rounded-3xl bg-blue-600 text-white font-extrabold text-base sm:text-xl shadow-xl shadow-blue-500/25 flex items-center gap-3 border-2 border-blue-400">
                <Target className="w-6 h-6" />
                <span>{isSr ? "POSLOVNI CILJ" : "BUSINESS OBJECTIVE"}</span>
              </div>
            </div>

            {/* Orbiting 11 System Nodes */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
              {systemNodes.map((node, idx) => {
                const isSelected = selectedNode === idx;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(isSelected ? null : idx)}
                    className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? "bg-blue-50 dark:bg-blue-950/40 border-blue-500 shadow-md ring-2 ring-blue-500/20"
                        : "bg-slate-50 dark:bg-white/5 border-slate-200/80 dark:border-white/10 hover:border-blue-400"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                        isSelected ? "bg-blue-600 text-white" : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      }`}>
                        0{idx + 1}
                      </span>
                      <div className="text-blue-500">{node.icon}</div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-mono">
                        {isSr ? node.nameSr : node.nameEn}
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                        {isSr ? node.descSr : node.descEn}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Active Node Deep Dive */}
          {selectedNode !== null && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-slate-800 dark:text-slate-200"
            >
              <div className="space-y-0.5">
                <span className="font-mono font-bold text-blue-600 dark:text-blue-400">
                  {isSr ? `DIJAGNOSTIČKI FOKUS: ${systemNodes[selectedNode].nameSr}` : `DIAGNOSTIC FOCUS: ${systemNodes[selectedNode].nameEn}`}
                </span>
                <p>{isSr ? systemNodes[selectedNode].descSr : systemNodes[selectedNode].descEn}</p>
              </div>
              <button
                onClick={() => setSelectedNode(null)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer shrink-0"
              >
                {isSr ? "Zatvori ✕" : "Close ✕"}
              </button>
            </motion.div>
          )}

        </div>

        {/* Scene Climax */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 relative overflow-hidden text-center sm:text-left space-y-3">
          <div className="absolute right-0 top-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
            {isSr ? "Tek kada vidimo celinu, donosimo odluku." : "Only with the complete picture do we make decisions."}
          </h3>

          <p className="text-base sm:text-xl text-blue-300 font-medium">
            {isSr
              ? "Sve ove tačke moraju raditi usklađeno. Inače ulažete u nov dizajn koji ne donosi nikakav merljiv napredak."
              : "Every node must align harmoniously. Otherwise you invest in a visual redesign that produces zero measurable return."}
          </p>
        </div>

      </div>
    </section>
  );
}
