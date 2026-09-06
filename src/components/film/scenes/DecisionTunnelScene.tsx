import { motion } from "motion/react";
import { Check, Star, ShieldCheck, Sparkles, Calendar, ArrowRight, Phone } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

interface DecisionTunnelSceneProps {
  progress: number; // Normalized 0.0 to 1.0
}

export function DecisionTunnelScene({ progress: norm }: DecisionTunnelSceneProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  // Determine active internal question (0 to 3) based on scroll progress:
  const activeQuestionIndex = Math.min(3, Math.floor(norm * 4.2));

  const questions = [
    {
      qSr: "Da li radite ono što mi treba?",
      qEn: "Do you provide what I need?",
      sectionSr: "Jasna struktura usluga",
      sectionEn: "Clear Service Scope",
      layer: "services"
    },
    {
      qSr: "Da li mogu da vam verujem?",
      qEn: "Can I trust you?",
      sectionSr: "Verifikovane ocene i fotografije",
      sectionEn: "Verified Proof & Real Photos",
      layer: "proof"
    },
    {
      qSr: "Koliko me ovo približno košta?",
      qEn: "What is the approximate cost?",
      sectionSr: "Transparentan cenovnik",
      sectionEn: "Transparent Pricing Tiers",
      layer: "pricing"
    },
    {
      qSr: "Kako da napravim sledeći korak?",
      qEn: "How do I take the next step?",
      sectionSr: "Booking i poziv bez trenja",
      sectionEn: "Frictionless Booking & Call Action",
      layer: "booking"
    }
  ];

  return (
    <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center p-4 sm:p-8 gap-8 select-none pointer-events-none">
      
      {/* Left Column: The Customer's Internal Mental Monologue */}
      <div className="w-full md:w-5/12 space-y-6 text-left">
        <div className="space-y-1">
          <div className="text-xs font-mono text-blue-500 font-bold uppercase tracking-widest">
            {isSr ? "03 / TUNEL ODLUČIVANJA" : "03 / THE DECISION TUNNEL"}
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {isSr ? "On traži samo nekoliko odgovora." : "They look for only a few answers."}
          </h2>
        </div>

        {/* Dynamic Question Stepper */}
        <div className="space-y-3">
          {questions.map((q, idx) => {
            const isActive = idx === activeQuestionIndex;
            const isPassed = idx < activeQuestionIndex;

            return (
              <div
                key={idx}
                className={`p-3.5 sm:p-4 rounded-2xl border flex items-start gap-3.5 ${
                  isActive
                    ? "bg-white dark:bg-slate-900 border-blue-500 shadow-md scale-[1.01]"
                    : isPassed
                    ? "bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/5 opacity-40"
                    : "bg-transparent border-transparent opacity-20"
                }`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 ${
                  isActive ? "bg-blue-600 text-white" : "bg-slate-200 dark:bg-white/10 text-slate-500"
                }`}>
                  0{idx + 1}
                </div>

                <div className="space-y-0.5">
                  <div className={`text-sm sm:text-base font-bold ${
                    isActive ? "text-blue-600 dark:text-blue-400 font-display" : "text-slate-700 dark:text-slate-300"
                  }`}>
                    {isSr ? q.qSr : q.qEn}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    {isSr ? q.sectionSr : q.sectionEn}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column: Morphing Browser Window with Active Highlight Layers */}
      <div className="w-full md:w-7/12 max-w-xl">
        <div className="rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-white/15 shadow-xl overflow-hidden">
          
          {/* Browser Top Bar */}
          <div className="px-4 py-3 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <div className="px-3 py-1 rounded-md bg-white dark:bg-black/40 border border-slate-200 dark:border-white/5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
              frizerski-salon-stevan.rs
            </div>
            <div className="text-[10px] font-mono text-emerald-500 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>100/100 SPEED</span>
            </div>
          </div>

          {/* Browser Content Body */}
          <div className="p-4 sm:p-5 space-y-3 font-sans text-xs">
            
            {/* Layer 1: Hero */}
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-blue-500 font-bold uppercase">PREMIJUM NEGA KOSE</span>
                <div className="text-sm font-bold text-slate-900 dark:text-white">Frizerski Salon Stevan</div>
              </div>
              <div className="px-2.5 py-1 rounded-lg bg-blue-600 text-white font-bold text-[10px]">
                Zakaži odmah
              </div>
            </div>

            {/* Layer 2: Services (Highlight on Q1) */}
            <div className={`p-3 rounded-xl border ${
              activeQuestionIndex === 0 
                ? "bg-blue-50 dark:bg-blue-950/40 border-blue-500 shadow-sm ring-1 ring-blue-500/30" 
                : "bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-white/5 opacity-70"
            }`}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-bold text-slate-900 dark:text-white">Usluge & Tretmani</span>
                {activeQuestionIndex === 0 && <span className="text-[10px] font-mono text-blue-500 font-bold">FAKTOR 01 ✓</span>}
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-[11px] text-slate-600 dark:text-slate-400">
                <div className="p-1.5 rounded bg-white dark:bg-black/30 border border-slate-200/50 dark:border-white/5">Muško & Žensko šišanje</div>
                <div className="p-1.5 rounded bg-white dark:bg-black/30 border border-slate-200/50 dark:border-white/5">Balayage & Farbanje</div>
              </div>
            </div>

            {/* Layer 3: Proof & Reviews (Highlight on Q2) */}
            <div className={`p-3 rounded-xl border ${
              activeQuestionIndex === 1
                ? "bg-blue-50 dark:bg-blue-950/40 border-blue-500 shadow-sm ring-1 ring-blue-500/30" 
                : "bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-white/5 opacity-70"
            }`}>
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-slate-900 dark:text-white">Primer: Ocene klijenata (Simulacija)</span>
                {activeQuestionIndex === 1 && <span className="text-[10px] font-mono text-blue-500 font-bold">FAKTOR 02 ✓</span>}
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                „Savršena usluga, tačni termini i prijatna atmosfera. Svaka preporuka!”
              </p>
            </div>

            {/* Layer 4: Pricing (Highlight on Q3) */}
            <div className={`p-3 rounded-xl border ${
              activeQuestionIndex === 2
                ? "bg-blue-50 dark:bg-blue-950/40 border-blue-500 shadow-sm ring-1 ring-blue-500/30" 
                : "bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-white/5 opacity-70"
            }`}>
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-slate-900 dark:text-white">Cenovnik</span>
                {activeQuestionIndex === 2 && <span className="text-[10px] font-mono text-blue-500 font-bold">FAKTOR 03 ✓</span>}
              </div>
              <div className="flex justify-between text-[11px] text-slate-600 dark:text-slate-400 font-mono">
                <span>Osnovni paket: 1.500 RSD</span>
                <span>Kompletan tretman: 3.500 RSD</span>
              </div>
            </div>

            {/* Layer 5: Booking Action (Highlight on Q4) */}
            <div className={`p-3.5 rounded-xl border ${
              activeQuestionIndex === 3
                ? "bg-blue-600 text-white border-blue-400 shadow-md scale-[1.01]" 
                : "bg-slate-900 text-white border-slate-800"
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar size={15} />
                  <span className="font-bold">Online Zakazivanje Termina</span>
                </div>
                <ArrowRight size={15} />
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
