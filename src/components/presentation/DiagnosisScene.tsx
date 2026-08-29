import { useState } from "react";
import { motion } from "motion/react";
import { 
  Target, 
  Activity, 
  Workflow, 
  CheckCircle, 
  XCircle,
  ArrowRight,
  Sparkles,
  Layers
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function DiagnosisScene() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const [simulatedBrokenStage, setSimulatedBrokenStage] = useState<number | null>(3); // "Trust" broken by default

  const funnelStages = [
    { id: "traffic", nameSr: "Poseta (Traffic)", nameEn: "Traffic", descSr: "Google, Mape, Preporuke", descEn: "Google, Maps, Referrals" },
    { id: "attention", nameSr: "Pažnja (Attention)", nameEn: "Attention", descSr: "Brzina, Prvih 5 sekundi", descEn: "Speed, First 5 Seconds" },
    { id: "understanding", nameSr: "Razumevanje (Offer)", nameEn: "Understanding", descSr: "Jasnoća ponude i cene", descEn: "Clarity of Offer & Price" },
    { id: "trust", nameSr: "Poverenje (Trust)", nameEn: "Trust", descSr: "Ocene, Dokazi, Radovi", descEn: "Reviews, Proof, Case Studies" },
    { id: "action", nameSr: "Akcija (Conversion)", nameEn: "Action", descSr: "Poziv, Forma, Booking", descEn: "Call, Lead Form, Booking" },
    { id: "customer", nameSr: "Kupac (Customer)", nameEn: "Customer", descSr: "Realizovan posao", descEn: "Closed Business" },
    { id: "retention", nameSr: "Preporuka (Retention)", nameEn: "Retention", descSr: "Lojalnost i 5 zvezdica", descEn: "Loyalty & 5-Star Reviews" },
  ];

  const diagnosticNodes = [
    { name: isSr ? "Vidljivost" : "Visibility", type: "acquisition" },
    { name: isSr ? "Ponuda" : "Offer Strategy", type: "positioning" },
    { name: isSr ? "Poverenje" : "Trust & Proof", type: "positioning" },
    { name: isSr ? "UX Dizajn" : "UX Design", type: "experience" },
    { name: isSr ? "Tehnički SEO" : "Technical SEO", type: "acquisition" },
    { name: isSr ? "Konverzija (CRO)" : "CRO", type: "experience" },
    { name: isSr ? "Online Booking" : "Booking Flow", type: "technology" },
    { name: isSr ? "Automatizacija" : "Automation", type: "technology" },
    { name: isSr ? "TypeScript Kod" : "Fast Engine", type: "technology" },
    { name: isSr ? "GA4 Merenje" : "Telemetry", type: "analytics" },
  ];

  return (
    <section
      id="scene-04"
      className="relative min-h-screen py-24 sm:py-32 px-4 sm:px-6 bg-white dark:bg-[#07090e] border-t border-slate-200 dark:border-white/5 overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Scene Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="text-xs sm:text-sm font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest">
            {isSr ? "04 / STRATEŠKA DIJAGNOSTIKA" : "04 / STRATEGIC DIAGNOSIS"}
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {isSr ? "Prvo nalazimo gde nastaje problem." : "First we pinpoint where the bottleneck occurs."}
          </h2>

          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            {isSr
              ? "Ne posmatramo sajt kao izolovanu stranicu. Posmatramo ga kao sistem sačinjen od uzajamno povezanih čvorova koji vode do poslovnog cilja."
              : "We never view a website in isolation. We analyze it as an interconnected system leading from initial visitor contact to commercial outcome."}
          </p>
        </div>

        {/* Diagnostic System Map & Funnel Break Simulation */}
        <div className="space-y-10">
          
          {/* Diagnostic Interconnected Nodes Matrix */}
          <div className="p-6 sm:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 relative overflow-hidden">
            <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold">
                <Target size={13} />
                <span>{isSr ? "DIJAGNOSTIČKA MAPA SISTEMA" : "SYSTEM DIAGNOSTIC MAP"}</span>
              </div>
              <div className="text-lg font-bold text-slate-900 dark:text-white">
                {isSr ? "Čvorovi koji utiču na vaš poslovni cilj" : "System nodes driving commercial outcome"}
              </div>
            </div>

            {/* Central Target with Orbiting Nodes */}
            <div className="flex flex-wrap justify-center items-center gap-3 max-w-4xl mx-auto">
              <div className="p-4 sm:p-6 rounded-2xl bg-blue-600 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-blue-500/25 flex items-center gap-2 border-2 border-blue-400">
                <Target className="w-5 h-5" />
                <span>{isSr ? "VAŠ POSLOVNI CILJ" : "YOUR BUSINESS GOAL"}</span>
              </div>

              {diagnosticNodes.map((node, i) => (
                <div
                  key={i}
                  className="px-4 py-2.5 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 shadow-xs hover:border-blue-500 transition-colors flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span>{node.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Linear Diagnostic Funnel Flow (With Interactive Breakpoint Toggle) */}
          <div className="p-6 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                  {isSr ? "LANAC ODLUKE KUPCA" : "DECISION CHAIN SIMULATOR"}
                </div>
                <div className="text-xl font-bold text-white mt-1">
                  {isSr ? "Kliknite na fazu da simulirate prekid u lancu" : "Click a stage to simulate conversion break"}
                </div>
              </div>

              <div className="text-xs text-slate-400">
                {isSr ? "Simulirani prekid: " : "Simulated break: "}
                <span className="text-red-400 font-bold">
                  {simulatedBrokenStage !== null ? funnelStages[simulatedBrokenStage].nameSr : (isSr ? "Nema prekida" : "None")}
                </span>
              </div>
            </div>

            {/* Stages Rail */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
              {funnelStages.map((stage, idx) => {
                const isBroken = simulatedBrokenStage === idx;
                const isAfterBroken = simulatedBrokenStage !== null && idx > simulatedBrokenStage;
                
                return (
                  <button
                    key={stage.id}
                    onClick={() => setSimulatedBrokenStage(isBroken ? null : idx)}
                    className={`p-3 rounded-2xl text-left border transition-all cursor-pointer relative ${
                      isBroken
                        ? "bg-red-950/60 border-red-500 text-red-200"
                        : isAfterBroken
                        ? "bg-slate-950/40 border-slate-800/60 text-slate-600 opacity-50"
                        : "bg-slate-800/80 border-slate-700 text-slate-200 hover:border-blue-500"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono opacity-60">0{idx + 1}</span>
                      {isBroken ? (
                        <XCircle size={14} className="text-red-400" />
                      ) : (
                        <CheckCircle size={14} className={isAfterBroken ? "text-slate-700" : "text-emerald-400"} />
                      )}
                    </div>
                    <div className="text-xs font-bold truncate">{isSr ? stage.nameSr : stage.nameEn}</div>
                    <div className="text-[10px] opacity-70 truncate mt-0.5">{isSr ? stage.descSr : stage.descEn}</div>
                  </button>
                );
              })}
            </div>

            {/* Diagnostic Interpretation */}
            <div className="p-4 rounded-2xl bg-black/50 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="text-xs sm:text-sm text-slate-300">
                {simulatedBrokenStage !== null ? (
                  isSr 
                    ? `⚠️ Ako je lanac prekinut na fazi "${funnelStages[simulatedBrokenStage].nameSr}", posetioci napuštaju proces i ulaganje u prethodne korake propada.`
                    : `⚠️ If the funnel breaks at "${funnelStages[simulatedBrokenStage].nameEn}", visitors leave and prior marketing spend is lost.`
                ) : (
                  isSr ? "✓ Ceo sistem je optimizovan i konvertuje maksimalan broj poseta." : "✓ Fully connected conversion system."
                )}
              </div>

              <div className="text-xs font-bold text-blue-400 shrink-0 font-mono">
                {isSr ? "DIJAGNOZA PRE REŠENJA" : "DIAGNOSIS BEFORE SOLUTION"}
              </div>
            </div>

          </div>

        </div>

        {/* Scene Climax Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-blue-600 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-600/20">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
              {isSr ? "Tu počinje naš posao." : "This is where our work begins."}
            </h3>
            <p className="text-blue-100 text-sm sm:text-base max-w-xl">
              {isSr
                ? "Lociramo prekid u lancu, uklanjamo prepreku i gradimo tehničko rešenje koje trajno rešava problem."
                : "We pinpoint the breakdown, eliminate friction, and engineer a technical solution that permanently solves it."}
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20 text-xs font-mono font-bold shrink-0">
            {isSr ? "ANALIZA → STRATEGIJA → KOD" : "ANALYSIS → STRATEGY → CODE"}
          </div>
        </div>

      </div>
    </section>
  );
}
