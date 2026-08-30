import React from "react";
import { ArrowRight, Wrench, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function Act6Recommendation() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const mappings = [
    {
      problem: isSr ? "Teško vas pronalaze" : "Hard to find online",
      problemDetail: isSr ? "Nema vas na mapi, Google-u ili lokalnim pretragama." : "Missing from Google map pack or search.",
      tool: isSr ? "SEO / Lokalna vidljivost" : "SEO / Local Visibility",
      toolDetail: isSr ? "Optimizacija profila, lokalne ključne reči, reputacija." : "Profile optimization, local keywords, reputation."
    },
    {
      problem: isSr ? "Ponuda je nejasna" : "Unclear offering",
      problemDetail: isSr ? "Kupac ne razume zašto ste bolji i šta tačno dobija." : "Clients don't immediately get what you offer.",
      tool: isSr ? "Content / Informaciona arhitektura / UX" : "Content / IA / UX",
      toolDetail: isSr ? "Jasni naslovi, strukturiran cenovnik, fokus na vrednost." : "Clear headlines, structured pricing, value focus."
    },
    {
      problem: isSr ? "Nedostaje poverenje" : "Lack of trust",
      problemDetail: isSr ? "Nema dokaza, radova ili garancija kvaliteta." : "No social proof, project gallery or guarantees.",
      tool: isSr ? "Dokazi / Pozicioniranje / Društveni dokaz" : "Proof / Positioning / Social Proof",
      toolDetail: isSr ? "Stvarne recenzije, studije slučaja, fotografije radova." : "Real case studies, verified reviews, proof galleries."
    },
    {
      problem: isSr ? "Ljudi ne prave sledeći korak" : "Drop-off before action",
      problemDetail: isSr ? "Gledaju ponudu, ali ne zovu i ne popunjavaju formu." : "They browse but don't call or book.",
      tool: isSr ? "CRO / Booking / Pojednostavljen kontakt" : "CRO / Booking / Frictionless Contact",
      toolDetail: isSr ? "1-klik poziv, interaktivno zakazivanje, kraće forme." : "1-click call, interactive scheduling, simple forms."
    },
    {
      problem: isSr ? "Previše ručnog rada" : "Too much manual admin",
      problemDetail: isSr ? "Gubite sate na poruke, tabele i ručne potvrde." : "Hours lost on manual coordination and messages.",
      tool: isSr ? "Automatizacija / Web aplikacija" : "Automation / Web Application",
      toolDetail: isSr ? "Automatska sinhronizacija, CRM integracija, digitalni tok." : "Automated sync, custom CRM, workflow tools."
    },
    {
      problem: isSr ? "Postojeći sajt više ne radi posao" : "Current website is obsolete",
      problemDetail: isSr ? "Spor je, loše izgleda na mobilnom ili je zastareo." : "Slow on mobile, outdated design, hard to edit.",
      tool: isSr ? "Kompletan redizajn / Novi sajt" : "Complete Redesign / Modern Website",
      toolDetail: isSr ? "Moderan, brz i lak za upravljanje digitalni temelj." : "Fast, responsive and easy-to-manage web system."
    }
  ];

  return (
    <section 
      id="act-6-recommendation"
      className="relative py-24 sm:py-32 px-6 sm:px-12 bg-slate-900 dark:bg-[#05070c] text-white border-t border-slate-800 dark:border-white/10"
    >
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">
            AKT 06 • LOGIKA PREPORUKE
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white">
            {isSr ? "Pravi problem određuje pravi alat." : "The real problem determines the right tool."}
          </h2>

          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto">
            {isSr 
              ? "Ne nudimo generičke pakete. Rešenje uvek proističe iz specifičnog uskog grla vašeg posla." 
              : "We don't sell generic bundles. The response is tailored strictly to your bottleneck."}
          </p>
        </div>

        {/* Problem -> Response Matrix */}
        <div className="space-y-4">
          {mappings.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              {/* Problem side */}
              <div className="md:w-5/12 space-y-1">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase tracking-wider">
                  {isSr ? "Uočeni problem" : "Identified problem"}
                </span>
                <h3 className="text-base sm:text-lg font-display font-bold text-white">
                  {item.problem}
                </h3>
                <p className="text-xs text-slate-400">
                  {item.problemDetail}
                </p>
              </div>

              {/* Arrow divider */}
              <div className="hidden md:flex items-center justify-center w-10 text-blue-400">
                <ArrowRight className="w-5 h-5" />
              </div>

              {/* Tool / Response side */}
              <div className="md:w-6/12 space-y-1 p-3.5 sm:p-4 rounded-xl bg-blue-600/10 border border-blue-500/20">
                <span className="text-[11px] font-mono text-blue-400 font-bold uppercase tracking-wider">
                  {isSr ? "Preporučeni odgovor" : "Recommended response"}
                </span>
                <h4 className="text-base sm:text-lg font-display font-bold text-white">
                  {item.tool}
                </h4>
                <p className="text-xs text-slate-300">
                  {item.toolDetail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Climax Takeaway */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-white/10 text-center space-y-4">
          <h3 className="text-2xl sm:text-4xl font-display font-black text-white">
            {isSr 
              ? "Novi sajt je samo jedna od mogućih preporuka." 
              : "A new website is just one of many possible recommendations."}
          </h3>

          <p className="text-base sm:text-xl text-blue-400 font-medium max-w-xl mx-auto">
            {isSr 
              ? "Ako je vaš problem zapravo zakazivanje ili vidljivost na mapi, nećemo vam prodavati nepotreban redizajn." 
              : "If your real issue is booking or map rankings, we won't sell you an unneeded rebuild."}
          </p>
        </div>

      </div>
    </section>
  );
}
