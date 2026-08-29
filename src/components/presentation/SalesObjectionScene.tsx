import { motion } from "motion/react";
import { 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight 
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function SalesObjectionScene() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const comparison = [
    {
      roleSr: "ŠTA VI DONOSITE (VAŠ DEO)",
      roleEn: "WHAT YOU BRING (YOUR PART)",
      badgeSr: "Poznavanje biznisa",
      badgeEn: "Business Domain Knowledge",
      itemsSr: [
        "Poznajete svoje proizvode, usluge i kupce",
        "Znate koje usluge vam donose najveći profit",
        "Zapažate na šta se klijenti najčešće žale",
        "Imate definisan cilj rasta firme"
      ],
      itemsEn: [
        "Deep knowledge of your services & customers",
        "Understanding of your high-margin offerings",
        "Awareness of customer friction & questions",
        "A clear commercial growth vision"
      ],
      highlight: false
    },
    {
      roleSr: "ŠTA MI PREVODIMO U DELO (NAŠ DEO)",
      roleEn: "WHAT WE TRANSLATE & BUILD (OUR PART)",
      badgeSr: "Digitalni inženjering",
      badgeEn: "Digital Engineering & Strategy",
      itemsSr: [
        "Prevdimo vaš problem u tačnu tehničku specifikaciju",
        "Gradimo strukturu stranica i prodajne poruke",
        "Projektujemo mobilno korisničko iskustvo",
        "Programiramo brz kod i automatizujemo procese"
      ],
      itemsEn: [
        "Translate commercial goals into technical specs",
        "Architect site hierarchy & conversion copy",
        "Design frictionless mobile user experiences",
        "Engineer high-speed code & automated workflows"
      ],
      highlight: true
    }
  ];

  return (
    <section
      id="scene-09"
      className="relative min-h-[85vh] sm:min-h-screen py-24 sm:py-32 px-4 sm:px-6 bg-[#07090e] text-white overflow-hidden transition-colors duration-500 border-t border-white/5 flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full space-y-16">

        {/* Scene Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="text-xs sm:text-sm font-mono text-cyan-400 font-bold uppercase tracking-widest">
            {isSr ? "09 / PODELA ODGOVORNOSTI" : "09 / CLEAR DIVISION OF ROLES"}
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            {isSr ? "Vi ne morate da znate šta vam treba." : "You don't need to know what you need."}
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              {isSr ? "To je deo našeg posla." : "That is our job."}
            </span>
          </h2>

          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed">
            {isSr
              ? "Ne očekujemo od vas da dođete sa sitemapom, UX specifikacijom ili tehničkim rešenjem. Vi poznajete svoj biznis. Mi pomažemo da problem prevedemo u pravo digitalno rešenje."
              : "We never expect you to arrive with a sitemap, UX wireframes, or tech specifications. You know your business. We translate your commercial problem into the right technical architecture."}
          </p>
        </div>

        {/* Two-Column Symmetrical Division of Labor */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {comparison.map((col, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-3xl border transition-all flex flex-col justify-between space-y-6 ${
                col.highlight
                  ? "bg-slate-900 border-blue-500/80 shadow-xl shadow-blue-500/10 ring-1 ring-blue-500/30"
                  : "bg-slate-900/40 border-slate-800"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    {isSr ? col.roleSr : col.roleEn}
                  </span>
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full ${
                    col.highlight ? "bg-blue-600 text-white" : "bg-white/5 text-slate-400"
                  }`}>
                    {isSr ? col.badgeSr : col.badgeEn}
                  </span>
                </div>

                <div className="space-y-3 pt-2">
                  {(isSr ? col.itemsSr : col.itemsEn).map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${col.highlight ? "text-blue-400" : "text-slate-500"}`} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`p-3.5 rounded-2xl text-xs font-mono ${
                col.highlight ? "bg-blue-950/40 text-blue-300 border border-blue-800/40" : "bg-black/30 text-slate-400"
              }`}>
                {col.highlight
                  ? (isSr ? "✓ Mi preuzimamo celokupan tehnički i strateški teret." : "✓ We shoulder the entire technical & strategic heavy lifting.")
                  : (isSr ? "Vaša ekspertiza je temelj svake odluke." : "Your domain expertise anchors every decision.")}
              </div>
            </div>
          ))}
        </div>

        {/* Section Climax Statement */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-block h-px w-20 bg-blue-500/60 mb-2" />
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            {isSr ? "Dovoljno je da nam opišete gde zapinje." : "It is enough to tell us where things get stuck."}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            {isSr ? "Sve ostalo je inženjerski proces koji vodimo korak po korak." : "Everything else is an engineering discipline we guide step by step."}
          </p>
        </div>

      </div>
    </section>
  );
}
