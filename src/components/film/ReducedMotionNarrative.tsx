import { useLanguage } from "../../context/LanguageContext";
import { FormScene } from "./scenes/FormScene";
import { ShieldCheck, Search, ZapOff, HelpCircle, Eye, Cpu, Compass } from "lucide-react";

interface ReducedMotionNarrativeProps {
  onOpenServiceModal?: () => void;
  onOpenProjectsModal?: () => void;
  onOpenFaqModal?: () => void;
}

export function ReducedMotionNarrative({ onOpenServiceModal, onOpenProjectsModal, onOpenFaqModal }: ReducedMotionNarrativeProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 space-y-24">
      
      {/* 01: Prologue */}
      <section className="space-y-4 text-center">
        <div className="text-xs font-mono text-blue-500 font-bold uppercase tracking-widest">
          {isSr ? "01 / UVOD" : "01 / THE OPENING"}
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
          {isSr ? "Svaki novi klijent počinje jednom odlukom." : "Every new customer begins with a single decision."}
        </h1>
        <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto">
          {isSr 
            ? "Pre nego što neko poseti vaš sajt, on na Google-u ili društvenim mrežama već bira između vas i konkurencije."
            : "Before anyone visits your site, they are already comparing you against your competitors on Google or social."}
        </p>
      </section>

      {/* 02: The Comparison */}
      <section className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 space-y-6">
        <div className="text-xs font-mono text-blue-500 font-bold uppercase tracking-widest">
          {isSr ? "02 / POREĐENJE" : "02 / THE COMPARISON"}
        </div>
        <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">
          {isSr ? "Vaš klijent ne vidi samo vas. On poredi." : "Your client doesn't only see you. They compare."}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
          <div className="p-3 rounded-xl bg-white dark:bg-black/30 border border-slate-200 dark:border-white/10">⭐ RECENZIJE & OCENE</div>
          <div className="p-3 rounded-xl bg-white dark:bg-black/30 border border-slate-200 dark:border-white/10">📍 LOKACIJA & MAPA</div>
          <div className="p-3 rounded-xl bg-white dark:bg-black/30 border border-slate-200 dark:border-white/10">📸 FOTOGRAFIJE RADOVA</div>
          <div className="p-3 rounded-xl bg-white dark:bg-black/30 border border-slate-200 dark:border-white/10">💶 TRANSPARENTNA CENA</div>
          <div className="p-3 rounded-xl bg-white dark:bg-black/30 border border-slate-200 dark:border-white/10">🎯 JASNOĆA PONUDE</div>
          <div className="p-3 rounded-xl bg-white dark:bg-black/30 border border-slate-200 dark:border-white/10">🔒 POVERENJE</div>
        </div>
      </section>

      {/* 03 & 04: The Break & Wrong Prescription */}
      <section className="p-8 rounded-3xl bg-red-500/5 border border-red-500/20 space-y-4">
        <div className="text-xs font-mono text-red-500 font-bold uppercase tracking-widest flex items-center gap-2">
          <ZapOff size={14} />
          <span>{isSr ? "03 & 04 / GDE GUBITE KLIJENTE" : "03 & 04 / WHERE YOU LOSE LEADS"}</span>
        </div>
        <h2 className="text-3xl font-display font-bold text-red-600 dark:text-red-400">
          {isSr ? "Ako ne znamo šta je problem — svako rešenje je samo nagađanje." : "If we don't know the root cause — every solution is just guesswork."}
        </h2>
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300">
          {isSr 
            ? "Kupovina novog sajta, oglasa ili aplikacije pre detaljne dijagnostike često rezultira uzaludnim troškovima. Prvo utvrđujemo tačno mesto gde klijenti odustaju."
            : "Buying a redesign, paid ads or an app before diagnosis often leads to wasted capital. We locate the exact bottleneck first."}
        </p>
      </section>

      {/* 05: Diagnosis & 06: Solution */}
      <section className="p-8 rounded-3xl bg-blue-500/5 border border-blue-500/20 space-y-6">
        <div className="text-xs font-mono text-blue-500 font-bold uppercase tracking-widest">
          {isSr ? "05 & 06 / DIJAGNOSTIKA I REŠENJA" : "05 & 06 / DIAGNOSIS & SOLUTIONS"}
        </div>
        <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">
          {isSr ? "Ne menjamo sve. Menjamo ono što koči rezultat." : "We don't replace everything. We fix what throttles your results."}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-xs">
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 space-y-1">
            <span className="font-mono text-blue-500 font-bold">01 / VIDLJIVOST</span>
            <p className="text-slate-600 dark:text-slate-300">Lokalni SEO, optimizacija Google profila i organsko rangiranje.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 space-y-1">
            <span className="font-mono text-indigo-500 font-bold">02 / POVERENJE</span>
            <p className="text-slate-600 dark:text-slate-300">Strateška arhitektura dokaza, recenzije i profesionalan UX.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 space-y-1">
            <span className="font-mono text-emerald-500 font-bold">03 / KONVERZIJA</span>
            <p className="text-slate-600 dark:text-slate-300">1-tap online booking, direct call integracija i brze forme.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 space-y-1">
            <span className="font-mono text-purple-500 font-bold">04 / PROCES</span>
            <p className="text-slate-600 dark:text-slate-300">Radna automatizacija i namenske softverske web aplikacije.</p>
          </div>
        </div>
      </section>

      {/* 07: Machine / Process */}
      <section className="space-y-4 text-center">
        <div className="text-xs font-mono text-blue-500 font-bold uppercase tracking-widest">
          {isSr ? "07 / NAŠ PROCES" : "07 / OUR PROCESS"}
        </div>
        <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">
          {isSr ? "Od problema do stabilnog sistema" : "From problem to working system"}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-xs font-mono pt-4">
          <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">01. Discovery</div>
          <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">02. Research</div>
          <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">03. Strategy</div>
          <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">04. IA & UX</div>
          <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">05. Development</div>
          <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">06. Measure</div>
        </div>
      </section>

      {/* 08: Radical Honesty & Risk Reversal */}
      <section className="p-8 rounded-3xl bg-slate-900 text-white text-center space-y-4">
        <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest">
          {isSr ? "08 / ISKRENA PROCENA" : "08 / RADICAL HONESTY"}
        </div>
        <h2 className="text-3xl font-display font-bold">
          {isSr ? "A šta ako vam novi sajt nije potreban? Reći ćemo vam." : "What if you don't need a new website? We will tell you."}
        </h2>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          {isSr 
            ? "Cilj nije da prodamo najveći projekat. Cilj je da pronađemo sledeći pravi potez za vaš biznis." 
            : "The goal is never to sell the biggest project. The goal is to pinpoint the next right move."}
        </p>
      </section>

      {/* 09: Fullscreen Qualification Form */}
      <section className="pt-8">
        <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-white/15 shadow-2xl relative min-h-[500px]">
          <FormScene
            progress={1.0}
            onOpenServiceModal={onOpenServiceModal}
            onOpenProjectsModal={onOpenProjectsModal}
            onOpenFaqModal={onOpenFaqModal}
          />
        </div>
      </section>

    </div>
  );
}
