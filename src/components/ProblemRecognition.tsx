import { useState } from "react";
import { motion } from "motion/react";
import { 
  HelpCircle, 
  Search, 
  MessageSquareWarning, 
  Compass, 
  Clock, 
  BarChart3, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { scrollToTarget } from "./SmoothScroll";
import { trackEvent } from "../utils/analytics";

export function ProblemRecognition() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const [selectedProblem, setSelectedProblem] = useState<number | null>(null);

  const problems = [
    {
      id: 1,
      icon: <MessageSquareWarning className="w-5 h-5 text-amber-500" />,
      question: isSr ? "Imate posete, ali malo upita?" : "Traffic comes in, but inquiries don't?",
      diagnosis: isSr ? "Problem konverzije i prodajne poruke" : "Conversion rate & messaging friction",
      description: isSr
        ? "Posetioci dođu na sajt, ali ne razumeju odmah šta tačno nudite, po čemu se razlikujete od drugih ili im je previše komplikovano da pošalju upit."
        : "Visitors arrive but fail to quickly grasp what makes your offer distinct, or encounter friction trying to reach you.",
      solution: isSr
        ? "Analiziramo put korisnika, pojednostavljujemo strukturu stranice i postavljamo jasne pozive na akciju (CTA)."
        : "We audit user drop-off points, refine the value proposition, and introduce friction-free conversion pathways."
    },
    {
      id: 2,
      icon: <HelpCircle className="w-5 h-5 text-blue-500" />,
      question: isSr ? "Ljudi stalno zovu i pitaju iste stvari?" : "Customers repeatedly ask the exact same questions?",
      diagnosis: isSr ? "Problem informacione arhitekture i sadržaja" : "Information architecture & clarity breakdown",
      description: isSr
        ? "Ako gubite sate odgovarajući na bazična pitanja o cenama, lokaciji ili proceduri, sajt ne radi svoj osnovni posao edukacije kupca."
        : "If your staff wastes hours answering baseline questions about pricing, turnaround, or process, the website isn't doing its job.",
      solution: isSr
        ? "Kreiramo jasne vodiče za usluge, transparentne cenovne opsege i interaktivne FAQ sekcije koje kvalifikuju klijente pre poziva."
        : "We build intuitive service breakdowns, transparent price guidance, and interactive FAQ modules that pre-educate prospects."
    },
    {
      id: 3,
      icon: <Compass className="w-5 h-5 text-rose-500" />,
      question: isSr ? "Zavisite 100% od Instagrama i poruka?" : "100% dependent on Instagram DMs?",
      diagnosis: isSr ? "Problem pronalaska i digitalne zavisnosti" : "Discovery risk & lack of owned digital asset",
      description: isSr
        ? "Društvene mreže su odlične za privlačenje pažnje, ali algoritam vas može ugasiti preko noći. Takođe, ozbiljni B2B klijenti traže profesionalan sajt."
        : "Social algorithms can throttle reach overnight. Serious high-value buyers research standalone web presence before signing.",
      solution: isSr
        ? "Povezujemo profil na mrežama sa namenskim sajtom koji trajno pripada vama i automatski prikuplja kontakte 24/7."
        : "We build an authoritative standalone hub that you own completely, converting social traffic into direct business assets."
    },
    {
      id: 4,
      icon: <Search className="w-5 h-5 text-emerald-500" />,
      question: isSr ? "Ne pojavljujete se kada ljudi traže vašu uslugu na Google-u?" : "Invisible when customers search on Google?",
      diagnosis: isSr ? "Problem lokalnog SEO-a i tehničke vidljivosti" : "Local SEO & organic discoverability void",
      description: isSr
        ? "Kada kupac u vašem gradu aktivno traži ono što vi radite, pronalazi vašu konkurenciju jer vaš sajt nema odgovarajuću tehničku i lokalnu strukturu."
        : "When local prospects actively search for your service with purchase intent, competitors capture them due to weak search signals.",
      solution: isSr
        ? "Implementiramo tehnički SEO, LocalBusiness mikropodatke, Google Maps optimizaciju i ciljane stranice za ključne usluge."
        : "We implement rigorous technical SEO, local schema markup, Google Profile alignment, and high-intent landing pages."
    },
    {
      id: 5,
      icon: <Clock className="w-5 h-5 text-indigo-500" />,
      question: isSr ? "Gubite vreme na ručne rezervacije i administraciju?" : "Wasting hours on manual bookings & paperwork?",
      diagnosis: isSr ? "Problem automatizacije poslovnih procesa" : "Operational bottleneck & manual overhead",
      description: isSr
        ? "Ručno beleženje termina, slanje kataloga u porukama i popunjavanje ugovora usporavaju rast vašeg poslovanja."
        : "Manually managing calendar slots, dispatching PDFs, and writing duplicate invoices holds back your revenue capacity.",
      solution: isSr
        ? "Razvijamo prilagođene softverske module: online kalendar zakazivanja, automatske SMS/email podsetnike i digitalne ugovore."
        : "We engineer tailored booking portals, automated SMS reminders, and instant digital document workflows."
    },
    {
      id: 6,
      icon: <BarChart3 className="w-5 h-5 text-cyan-500" />,
      question: isSr ? "Imate lep sajt, ali ne znate da li donosi posao?" : "You have a nice website, but 0 clear data?",
      diagnosis: isSr ? "Problem merenja i analitike" : "Missing analytics & telemetry blindness",
      description: isSr
        ? "Bez preciznog praćenja klikova na telefon, poslatih formulara i ponašanja posetilaca, svaka odluka o marketingu je samo nagađanje."
        : "Without precise tracking on phone clicks, form submissions, and conversion funnel drop-offs, every marketing decision is guesswork.",
      solution: isSr
        ? "Postavljamo Google Analytics 4, prilagođene konverzijske događaje i jasan mesečni pregled onoga što donosi stvarne rezultate."
        : "We deploy custom GA4 telemetry, conversion event tracking, and clear metric dashboards focused on revenue attribution."
    }
  ];

  return (
    <section id="problem-recognition" className="py-20 px-4 sm:px-6 relative bg-slate-900/50 dark:bg-black/60 border-t border-slate-200/50 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            <span>{isSr ? "Prepoznavanje Problema" : "Problem Recognition"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isSr ? "Možda vam ne treba novi sajt." : "You might not need a new website."}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {isSr
              ? "Ponekad problem nije u samom kodu ili dizajnu, već u poruci, strukturi ili nepostojanju automatizacije. Prepoznajete li neku od ovih situacija?"
              : "Often the friction isn't code or graphics, but positioning, information architecture, or lack of automation. Do you recognize your situation?"}
          </p>
        </div>

        {/* Diagnostic Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {problems.map((item) => {
            const isExpanded = selectedProblem === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setSelectedProblem(isExpanded ? null : item.id)}
                className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer border flex flex-col justify-between ${
                  isExpanded
                    ? "bg-blue-600/10 dark:bg-blue-900/20 border-blue-500 shadow-lg shadow-blue-500/10"
                    : "bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      {item.icon}
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {item.diagnosis}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {item.question}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-start gap-2 text-xs font-medium text-blue-600 dark:text-blue-400">
                    <CheckCircle2 size={15} className="shrink-0 mt-0.5" />
                    <span>{item.solution}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Consulting Bottom Anchor Statement */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-slate-900 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">
              {isSr ? "Pre nego što predložim rešenje, utvrđujem gde je stvarni problem." : "Before prescribing a solution, we diagnose the exact root problem."}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              {isSr 
                ? "Nema generičkih ponuda napamet. Kroz kratak razgovor i analizu identifikujemo šta donosi najveći povrat uloženog." 
                : "No cookie-cutter packages. Through targeted discovery, we locate what drives the highest commercial return."}
            </p>
          </div>

          <button
            onClick={() => {
              trackEvent("select_content", {
                content_type: "Diagnostic_CTA",
                item_name: "Problem_Recognition_Audit_Request",
                destination: "#contact"
              });
              scrollToTarget("#contact", 80);
            }}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-600/30 cursor-pointer shrink-0"
          >
            <span>{isSr ? "Zakažite analizu vašeg biznisa" : "Request Free Business Audit"}</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
