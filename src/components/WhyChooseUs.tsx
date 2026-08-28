import { motion } from "motion/react";
import { 
  CheckCircle2, 
  XCircle,
  Target, 
  BrainCircuit, 
  MessageSquare, 
  LineChart, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  UserCheck,
  Code2,
  LockOpen
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { scrollToTarget } from "./SmoothScroll";

export function WhyChooseUs() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const trustSignals = [
    {
      icon: <UserCheck className="w-5 h-5 text-blue-500" />,
      title: isSr ? "Direktan rad sa inženjerom" : "Direct engineer collaboration",
      desc: isSr ? "Bez posrednika, juniora i prenošenja poruka kroz account managere." : "No intermediaries, junior handoffs, or lost context."
    },
    {
      icon: <Target className="w-5 h-5 text-indigo-500" />,
      title: isSr ? "Prvo problem, onda tehnologija" : "Problem diagnosis first",
      desc: isSr ? "Ne biramo alate dok ne definišemo šta tačno treba da popravimo u poslovanju." : "We never prescribe code frameworks before identifying the commercial friction."
    },
    {
      icon: <Code2 className="w-5 h-5 text-cyan-500" />,
      title: isSr ? "Čist kod, standardni stack" : "Modern clean TypeScript stack",
      desc: isSr ? "Brzina <0.5s, standardne tehnologije i 100% stabilnost bez zastarelih dodataka." : "Sub-second speed, maintainable architecture, zero bloated plugins."
    },
    {
      icon: <LockOpen className="w-5 h-5 text-emerald-500" />,
      title: isSr ? "Bez „zaključavanja“ (No lock-in)" : "100% Client ownership",
      desc: isSr ? "Sve je vaše: domen, hosting, kod i baze. Potpuna sloboda i kontrola." : "You own everything: domains, hosting, repositories, and databases."
    }
  ];

  const fitFor = [
    isSr ? "Biznisi koji žele ozbiljnu digitalnu prezentaciju ili web aplikaciju" : "Businesses needing an authoritative digital foundation or web application",
    isSr ? "Firme koje razumeju da sajt treba da donosi upite, a ne samo da 'postoji'" : "Companies that understand a website must convert visitors, not just exist",
    isSr ? "Vlasnici koji žele direktnu, iskrenu komunikaciju sa inženjerom/konsultantom" : "Owners who appreciate direct, transparent partnership with the consultant",
    isSr ? "Biznisi koji žele sistem koji dugoročno radi, a ne jeftinu privremenu zakrpu" : "Businesses investing in a sustainable system rather than a cheap cosmetic fix"
  ];

  const notFitFor = [
    isSr ? "Klijenti koji traže „najjeftiniji sajt za 50€“ sa šablona" : "Clients looking for a disposable €50 template without strategy",
    isSr ? "Oni koji žele samo kozmetički izgled bez razmišljanja o kupcima i ponudi" : "Those wanting superficial decoration without considering offer or customer intent",
    isSr ? "Projekti bez ikakvih definisanih poslovnih ciljeva ili spremnosti za saradnju" : "Projects without defined business goals or readiness to collaborate",
    isSr ? "Oni koji traže veliku korporativnu agenciju sa 20 account managera i dugim birokratijama" : "Companies seeking big-agency bureaucracy and layers of account handlers"
  ];

  return (
    <section id="why-ssolutions" className="py-24 px-4 sm:px-6 relative bg-slate-50 dark:bg-[#080c14] border-t border-slate-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            <span>{isSr ? "Matrica Usklađenosti" : "Fit & Partnership Matrix"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isSr ? "Da li smo dobar fit za saradnju?" : "Are we a good fit to work together?"}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {isSr
              ? "Cenim vaše i svoje vreme. Najbolji rezultati nastaju kada delimo iste principe o kvalitetu, direktnoj komunikaciji i svrsi digitalnog sistema."
              : "I value your time and mine. The strongest outcomes happen when we share identical standards for engineering quality, transparency, and business focus."}
          </p>
        </div>

        {/* Trust & Differentiation Signals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustSignals.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3"
            >
              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 w-fit">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Qualification Matrix: "Za koga ovo jeste / Za koga ovo nije" */}
        <div className="p-7 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {isSr ? "Za koga ovo jeste, a za koga nije" : "Who this is for — and who it isn't for"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
              {isSr 
                ? "Cenimo vaše i naše vreme. Najbolje rezultate postižemo kada postoji obostrano razumevanje cilja." 
                : "We respect your time and ours. The best outcomes happen when expectations are aligned from day one."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* For Whom It IS */}
            <div className="p-6 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-500/30 space-y-4">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm font-mono uppercase tracking-wider">
                <CheckCircle2 size={18} />
                <span>{isSr ? "Ovo JE za vas ako:" : "This IS for you if:"}</span>
              </div>
              <ul className="space-y-3">
                {fitFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Whom It is NOT */}
            <div className="p-6 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-500/30 space-y-4">
              <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-sm font-mono uppercase tracking-wider">
                <XCircle size={18} />
                <span>{isSr ? "Ovo NIJE za vas ako:" : "This is NOT for you if:"}</span>
              </div>
              <ul className="space-y-3">
                {notFitFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    <XCircle size={16} className="text-rose-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="pt-4 text-center">
            <button
              onClick={() => scrollToTarget("#contact", 80)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-all cursor-pointer shadow-md shadow-blue-500/20"
            >
              <span>{isSr ? "Zakažite besplatnu početnu analizu" : "Request Free Initial Analysis"}</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
