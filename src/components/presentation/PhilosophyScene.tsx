import { motion } from "motion/react";
import { 
  Check, 
  Layers, 
  Cpu, 
  Users, 
  BarChart, 
  Briefcase,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function PhilosophyScene() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const pillars = [
    { nameSr: "BUSINESS", nameEn: "BUSINESS", descSr: "Poslovni model i marže", descEn: "Commercial model & margins", icon: <Briefcase size={16} /> },
    { nameSr: "CUSTOMER", nameEn: "CUSTOMER", descSr: "Psihologija i navike kupca", descEn: "Buyer psychology & behavior", icon: <Users size={16} /> },
    { nameSr: "DESIGN", nameEn: "DESIGN", descSr: "Jasnoća, tipografija, UX", descEn: "Hierarchy, typography, UX", icon: <Layers size={16} /> },
    { nameSr: "TECHNOLOGY", nameEn: "TECHNOLOGY", descSr: "Čist TypeScript & 0.4s brzina", descEn: "Clean TypeScript & 0.4s speed", icon: <Cpu size={16} /> },
    { nameSr: "DATA", nameEn: "DATA", descSr: "Stvarna merenja & analitika", descEn: "Real telemetry & conversion data", icon: <BarChart size={16} /> },
  ];

  return (
    <section
      id="scene-11"
      className="relative min-h-[85vh] sm:min-h-screen py-24 sm:py-32 px-4 sm:px-6 bg-white dark:bg-[#07090e] border-t border-slate-200 dark:border-white/5 overflow-hidden transition-colors duration-500 flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full space-y-16">

        {/* Scene Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="text-xs sm:text-sm font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest">
            {isSr ? "11 / NAŠ PROSTOR DELOVANJA" : "11 / WHERE WE OPERATE"}
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {isSr ? "Dobar digitalni projekat nije zbir lepih ekrana." : "A great digital project is not just a sum of pretty screens."}
          </h2>

          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            {isSr
              ? "Mora da poveže poslovni cilj, ponašanje korisnika i tehničku realizaciju."
              : "It must connect commercial objectives, customer psychology, and rigorous technical execution."}
          </p>
        </div>

        {/* The Holistic Formula Matrix */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-8">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider text-center">
            {isSr ? "FORMULA ODRŽIVOG REZULTATA" : "THE EQUATION FOR MEASURABLE IMPACT"}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-5xl mx-auto">
            {pillars.map((p, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 text-center space-y-1 shadow-xs min-w-[130px] sm:min-w-[160px]">
                  <div className="flex justify-center text-blue-500 mb-1">{p.icon}</div>
                  <div className="font-mono font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{isSr ? p.nameSr : p.nameEn}</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">{isSr ? p.descSr : p.descEn}</div>
                </div>

                {idx < pillars.length - 1 && (
                  <span className="text-blue-500 font-mono font-bold text-lg sm:text-xl">×</span>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-2">
            <div className="p-4 sm:p-6 rounded-2xl bg-blue-600 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-blue-500/25 flex items-center gap-2 border-2 border-blue-400">
              <Sparkles className="w-5 h-5" />
              <span>{isSr ? "= MERLJIV POSLOVNI REZULTAT" : "= MEASURABLE COMMERCIAL RESULT"}</span>
            </div>
          </div>
        </div>

        {/* Climax Statement */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              {isSr ? "AUTORITET BEZ SAMOHVALISANJA" : "MEASURED CONFIDENCE"}
            </div>
            <h3 className="text-xl sm:text-3xl font-display font-extrabold text-white">
              {isSr ? "To je prostor u kojem radimo." : "This is the space in which we operate."}
            </h3>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 text-xs font-mono font-bold shrink-0">
            {isSr ? "STRATEGIJA • UX • INŽENJERING" : "STRATEGY • UX • ENGINEERING"}
          </div>
        </div>

      </div>
    </section>
  );
}
