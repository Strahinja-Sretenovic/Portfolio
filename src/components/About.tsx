import { motion } from "motion/react";
import { 
  Sparkles, 
  CheckCircle2, 
  Target, 
  BrainCircuit, 
  Code2, 
  ShieldCheck, 
  UserCheck, 
  ArrowRight,
  Compass
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { scrollToTarget } from "./SmoothScroll";

export function About() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const pillars = [
    {
      title: isSr ? "01. Prvo poslovni model" : "01. Business Model First",
      desc: isSr ? "Razumevanje kako vaš biznis zarađuje i gde klijenti odustaju." : "Pinpointing your revenue engine and conversion drop-offs."
    },
    {
      title: isSr ? "02. Strategija & UX" : "02. Strategy & UX Architecture",
      desc: isSr ? "Projektovanje korisničkog puta koji uklanja prepreke i gradi poverenje." : "Designing clear journeys that eliminate friction and inspire trust."
    },
    {
      title: isSr ? "03. Inženjerska realizacija" : "03. Engineering Execution",
      desc: isSr ? "Pisanje čistog, brzog koda bez zavisnosti od glomaznih šablona." : "Writing fast, maintainable TypeScript code with zero bloated templates."
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative bg-white dark:bg-[#080808] border-t border-slate-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass size={14} />
            <span>{isSr ? "Filozofija & Pristup" : "Philosophy & Approach"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isSr ? "Zašto SSolutions pristupa drugačije?" : "Why SSolutions works differently"}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {isSr
              ? "SSolutions je nastao iz jednostavnog problema: previše sajtova se pravi tako što se prvo bira šablon ili tehnologija, a tek kasnije razmišlja šta taj sajt zapravo treba da uradi za biznis."
              : "SSolutions was born from an obvious industry flaw: too many websites are built starting with a theme or framework, leaving business objectives as an afterthought."}
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Story & Principles */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-7 sm:p-9 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {isSr ? "Konsultant koji ume da kodira — a ne samo da savetuje" : "A strategist who engineers — not just an advisor"}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {isSr
                  ? "Kada radite sa tradicionalnim agencijama, vaša ideja prolazi kroz lanac prodavaca, projekt menadžera i junior programera. Suština se često izgubi u prenosu."
                  : "In traditional agency setups, your business goals are passed through sales reps, account managers, and junior coders. Essential context is lost in translation."}
              </p>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {isSr
                  ? "U SSolutions-u razgovarate direktno sa osobom koja radi dijagnostiku vašeg poslovanja, projektuje informacionu arhitekturu i lično piše kod. Nema 'gluvih telefona' i nema praznih obećanja."
                  : "At SSolutions, you collaborate directly with the strategist who diagnoses your business, architects your information flow, and personally crafts the code."}
              </p>

              {/* 3 Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                {pillars.map((p, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                    <div className="text-xs font-bold text-blue-600 dark:text-blue-400 font-mono">
                      {p.title}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                      {p.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Direct Accountability Card */}
          <div className="lg:col-span-5 p-7 sm:p-9 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block font-bold">
                {isSr ? "Direktna Odgovornost" : "Direct Accountability"}
              </span>
              <h4 className="text-xl font-bold text-white">
                {isSr ? "Kako sarađujemo?" : "Our Partnership Model"}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {isSr
                  ? "Cilj svakog projekta je da stvori digitalnu prednost za vaš biznis koja traje godinama, smanjuje ručni rad i privlači klijente koji cene vaš rad."
                  : "The objective of every engagement is to create durable digital leverage that saves manual admin and acquires high-value clients."}
              </p>
            </div>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                <span>{isSr ? "Jedna tačka kontakta za sva pitanja" : "Single point of direct communication"}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                <span>{isSr ? "Transparentne preporuke bez forsiranja suvišnih troškova" : "Transparent recommendations without bloated scope"}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                <span>{isSr ? "Dugoročna podrška i strateško praćenje" : "Long-term support and iterative optimization"}</span>
              </div>
            </div>

            <button
              onClick={() => scrollToTarget("#contact", 80)}
              className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
            >
              <span>{isSr ? "Zakažite uvodni razgovor" : "Schedule Introductory Call"}</span>
              <ArrowRight size={14} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
