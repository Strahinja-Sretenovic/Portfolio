import { useState } from "react";
import { motion } from "motion/react";
import { 
  EyeOff, 
  HelpCircle, 
  ShieldAlert, 
  PhoneOff, 
  Clock,
  ArrowRight,
  AlertCircle
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function FrictionScene() {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const [activeFrictionIdx, setActiveFrictionIdx] = useState<number>(0);

  const frictionMoments = [
    {
      id: "friction-1",
      number: "01",
      icon: <EyeOff className="w-5 h-5 text-amber-500" />,
      titleSr: "Možda vas ljudi ne pronalaze.",
      titleEn: "Maybe people simply cannot find you.",
      descSr: "Imate odličnu uslugu, ali na Google pretragama i mapama vaš biznis je nevidljiv ili se pojavljuje tek iza konkurencije.",
      descEn: "You offer high quality, but on search and maps your business is invisible behind competitors.",
      visualBadgeSr: "Pretraga prolazi pored vas",
      visualBadgeEn: "Traffic bypasses your brand"
    },
    {
      id: "friction-2",
      number: "02",
      icon: <HelpCircle className="w-5 h-5 text-rose-500" />,
      titleSr: "Možda vas pronađu, ali ne razumeju šta nudite.",
      titleEn: "Maybe they find you, but don't understand your offer.",
      descSr: "Sajt izgleda prepun teksta ili komplikovanih fraza. Posetilac za 5 sekundi ne može da shvati da li rešavate njegov konkretan problem.",
      descEn: "Website feels dense with jargon. A visitor cannot determine within 5 seconds if you solve their need.",
      visualBadgeSr: "Nejasna hijerarhija poruke",
      visualBadgeEn: "Confusing value messaging"
    },
    {
      id: "friction-3",
      number: "03",
      icon: <ShieldAlert className="w-5 h-5 text-orange-500" />,
      titleSr: "Možda razumeju ponudu, ali nemaju razloga da vam veruju.",
      titleEn: "Maybe they understand the offer, but lack trust.",
      descSr: "Nema slika stvarnih radova, nema ocena klijenata, nema jasnih garancija. Kupac prelazi na sledeći link.",
      descEn: "No real work photos, no verified reviews, no risk-reversal. The visitor bounces to a safer competitor.",
      visualBadgeSr: "Odsustvo socijalnog dokaza",
      visualBadgeEn: "Missing proof & validation"
    },
    {
      id: "friction-4",
      number: "04",
      icon: <PhoneOff className="w-5 h-5 text-red-500" />,
      titleSr: "Možda žele da vas kontaktiraju, ali je put komplikovan.",
      titleEn: "Maybe they want to reach out, but the flow is broken.",
      descSr: "Forma od 8 polja, sitno dugme za poziv na telefonu, nejasno radno vreme ili komplikovan proces zakazivanja.",
      descEn: "8-field form, tiny phone button on mobile, ambiguous working hours, or clunky multi-step booking.",
      visualBadgeSr: "Prekid na konverziji",
      visualBadgeEn: "Conversion funnel friction"
    },
    {
      id: "friction-5",
      number: "05",
      icon: <Clock className="w-5 h-5 text-indigo-500" />,
      titleSr: "Možda imate posla, ali gubite sate na ručne procese.",
      titleEn: "Maybe you have demand, but waste hours on manual tasks.",
      descSr: "Telefon vam zvoni non-stop za ista pitanja o cenama, poruke stižu na 4 mreže, a termini se vode u tefteru.",
      descEn: "Phone rings constantly for identical pricing questions while booking is still handled on paper.",
      visualBadgeSr: "Operativno usko grlo",
      visualBadgeEn: "Operational bottleneck"
    }
  ];

  return (
    <section
      id="scene-03"
      className="relative min-h-screen py-24 sm:py-32 px-4 sm:px-6 bg-[#07090e] text-white overflow-hidden transition-colors duration-500 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Scene Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="text-xs sm:text-sm font-mono text-cyan-400 font-bold uppercase tracking-widest">
            {isSr ? "03 / GDE ZAPRAVO GUBITE KLIJENTE" : "03 / WHERE VALUE IS LOST"}
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            {isSr ? "Problem možda nije vaš sajt." : "The bottleneck might not be your website."}
          </h2>

          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed">
            {isSr
              ? "Kada biznis ne ostvaruje željene rezultate, standardna agencija odmah predlaže nov sajt. Mi prvo proveravamo gde tačno nastaje prekid:"
              : "When a business stalls, typical agencies instantly prescribe a full website redesign. We first identify where the actual commercial breakdown occurs:"}
          </p>
        </div>

        {/* Interactive Friction Explorer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: 5 Selectable Friction Cards (7 cols) */}
          <div className="md:col-span-7 space-y-3">
            {frictionMoments.map((item, idx) => {
              const isSelected = activeFrictionIdx === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveFrictionIdx(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-4 ${
                    isSelected
                      ? "bg-slate-800/90 border-blue-500/80 shadow-lg shadow-blue-500/10 translate-x-1"
                      : "bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700"
                  }`}
                >
                  <div className={`p-2.5 rounded-xl shrink-0 ${isSelected ? "bg-blue-600/20 text-blue-400" : "bg-white/5 text-slate-400"}`}>
                    {item.icon}
                  </div>

                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="text-sm sm:text-base font-bold text-white">
                        {isSr ? item.titleSr : item.titleEn}
                      </div>
                      <span className="text-xs font-mono text-slate-500">{item.number}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {isSr ? item.descSr : item.descEn}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Diagnostic Visual Panel (5 cols) */}
          <div className="md:col-span-5 rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold font-mono">
                <AlertCircle size={13} />
                <span>{isSr ? frictionMoments[activeFrictionIdx].visualBadgeSr : frictionMoments[activeFrictionIdx].visualBadgeEn}</span>
              </div>

              <div className="text-2xl font-display font-extrabold text-white">
                {isSr ? frictionMoments[activeFrictionIdx].titleSr : frictionMoments[activeFrictionIdx].titleEn}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {isSr ? frictionMoments[activeFrictionIdx].descSr : frictionMoments[activeFrictionIdx].descEn}
              </p>
            </div>

            {/* Diagnostic Insight Box */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
              <div className="text-[11px] font-mono text-blue-400 uppercase tracking-wider">
                {isSr ? "INŽENJERSKI UVID" : "ENGINEERING INSIGHT"}
              </div>
              <div className="text-xs text-slate-300">
                {isSr
                  ? "Ako je problem u ovom koraku, novi vizuelni dizajn bez strateške promene neće doneti ni jedan novi upit."
                  : "If the bottleneck is here, a purely visual redesign without strategic correction yields zero incremental inquiries."}
              </div>
            </div>
          </div>

        </div>

        {/* Climax Statement */}
        <div className="text-center max-w-3xl mx-auto pt-6 space-y-4">
          <div className="inline-block h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          
          <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            {isSr
              ? "Zato ne prodajemo rešenje pre nego što razumemo problem."
              : "That is why we never sell a solution before diagnosing the problem."}
          </h3>

          <p className="text-sm sm:text-base text-slate-400">
            {isSr
              ? "Tek kada lociramo prepreku, biramo tehnologiju i opseg koji ima smisla."
              : "Only after diagnosing the friction do we prescribe the appropriate technological scope."}
          </p>
        </div>

      </div>
    </section>
  );
}
