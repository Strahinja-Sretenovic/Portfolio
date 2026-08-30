import React, { useState } from "react";
import { 
  Eye, 
  FileText, 
  ShieldCheck, 
  MousePointerClick, 
  Workflow, 
  Cpu, 
  Check,
  ChevronRight
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function Act5Diagnosis() {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const [selectedDim, setSelectedDim] = useState<number | null>(null);

  const dimensions = [
    {
      id: 1,
      name: isSr ? "VIDLJIVOST" : "VISIBILITY",
      icon: Eye,
      question: isSr ? "Da li vas pravi ljudi uopšte pronalaze?" : "Are the right customers finding you at all?",
      detail: isSr 
        ? "Analiziramo pozicije na Google pretrazi, Google Business profil, lokalnu mapu i ključne reči koje kupci kucaju." 
        : "We audit Google search rankings, Google Business profiles, map pack visibility and relevant search intents."
    },
    {
      id: 2,
      name: isSr ? "JASNOĆA PONUDE" : "CLARITY OF OFFER",
      icon: FileText,
      question: isSr ? "Da li za nekoliko sekundi razumeju šta nudite?" : "Do they understand your offer in 5 seconds?",
      detail: isSr 
        ? "Ispitujemo da li je naslov jasan, da li je ponuda strukturirana i da li posetilac odmah prepoznaje korist za sebe." 
        : "We verify if headlines are clear, if pricing is intuitive and if the value proposition is immediately obvious."
    },
    {
      id: 3,
      name: isSr ? "POVERENJE" : "TRUST & PROOF",
      icon: ShieldCheck,
      question: isSr ? "Da li imaju razlog da izaberu baš vas?" : "Do they have solid reasons to choose you?",
      detail: isSr 
        ? "Proveravamo društveni dokaz: stvarne fotografije radova, verifikovane Google ocene, sertifikate i garancije." 
        : "We evaluate real work galleries, verified Google reviews, certificates and risk-reversal guarantees."
    },
    {
      id: 4,
      name: isSr ? "UX / KONVERZIJA" : "UX / CONVERSION",
      icon: MousePointerClick,
      question: isSr ? "Da li je sledeći korak jasan i jednostavan?" : "Is the next step obvious and effortless?",
      detail: isSr 
        ? "Gledamo brzinu učitavanja, mobilni prikaz, vidljivost dugmadi i lakoću popunjavanja formi ili zakazivanja." 
        : "We check mobile load speed, sticky action buttons, simplified form friction and clear contact paths."
    },
    {
      id: 5,
      name: isSr ? "PROCES" : "PROCESS EFFICIENCY",
      icon: Workflow,
      question: isSr ? "Da li vaš tim radi nešto ručno što može biti jednostavnije?" : "Are you doing repetitive manual admin?",
      detail: isSr 
        ? "Identifikujemo sate koje gubite na manuelno kucanje poruka, izdavanje termina i ručnu koordinaciju." 
        : "We spot wasted operational hours spent on manual scheduling, SMS confirmation and routine paperwork."
    },
    {
      id: 6,
      name: isSr ? "TEHNOLOGIJA" : "TECH INFRASTRUCTURE",
      icon: Cpu,
      question: isSr ? "Da li postojeći sistem podržava način na koji biznis danas radi?" : "Does your tech stack support your scale?",
      detail: isSr 
        ? "Proveravamo stabilnost, sigurnost, brzinu koda, SEO indeksiranje i lakoću ažuriranja sadržaja." 
        : "We audit core web vitals, CMS flexibility, hosting stability and modern code architecture."
    }
  ];

  return (
    <section 
      id="act-5-diagnosis"
      className="relative py-24 sm:py-32 px-6 sm:px-12 bg-white dark:bg-[#07090e] text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/10"
    >
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-white/5 border border-blue-200 dark:border-white/10 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold">
            AKT 05 • DIJAGNOSTIČKI MODEL
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-slate-950 dark:text-white">
            {isSr ? "Zato prvo tražimo uzrok." : "That is why we find the root cause first."}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            {isSr 
              ? "Svaki biznis analiziramo kroz šest preciznih dimenzija pre nego što predložimo bilo kakvo rešenje." 
              : "We evaluate every business across six core dimensions before suggesting any implementation."}
          </p>
        </div>

        {/* 6 Dimensions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dimensions.map((dim, idx) => {
            const Icon = dim.icon;
            const isSelected = selectedDim === dim.id;

            return (
              <div
                key={dim.id}
                onClick={() => setSelectedDim(isSelected ? null : dim.id)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-blue-50/80 dark:bg-blue-950/20 border-blue-500 shadow-xl"
                    : "bg-slate-50/70 dark:bg-white/[0.02] border-slate-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500/40"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-600 text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    0{dim.id}
                  </span>
                </div>

                <h3 className="text-xs font-mono font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-2">
                  {dim.name}
                </h3>

                <h4 className="text-lg font-display font-bold text-slate-900 dark:text-white leading-snug">
                  {dim.question}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-3 pt-3 border-t border-slate-200 dark:border-white/10">
                  {dim.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* The Decisive Principle */}
        <div className="text-center py-6 space-y-4 max-w-2xl mx-auto">
          <h3 className="text-2xl sm:text-4xl font-display font-black text-slate-950 dark:text-white">
            {isSr ? "Ne menjamo sve." : "We don't change everything."}
          </h3>
          <p className="text-xl sm:text-2xl font-display font-bold text-blue-600 dark:text-blue-400">
            {isSr ? "Menjamo ono što koči rezultat." : "We change what constrains results."}
          </p>
        </div>

      </div>
    </section>
  );
}
