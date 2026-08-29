import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Search, 
  MapPin, 
  Star, 
  Phone, 
  Calendar,
  Sparkles,
  Camera,
  Layers,
  Globe,
  Tag,
  CheckCircle2
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function CustomerJourneyScene() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const defaultQuery = isSr ? "frizerski salon Čačak" : "hair salon nearby";
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [selectedCompetitor, setSelectedCompetitor] = useState<number | null>(0);

  useEffect(() => {
    let index = 0;
    setTypedText("");
    setIsTyping(true);

    const interval = setInterval(() => {
      if (index < defaultQuery.length) {
        setTypedText(defaultQuery.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 55);

    return () => clearInterval(interval);
  }, [defaultQuery]);

  const searchResults = [
    {
      id: 0,
      name: isSr ? "Frizerski Salon Stevan" : "Stevan Hair Studio",
      badgeSr: "1. Mesto na mapi • Preporučen",
      badgeEn: "Top Search Rank • Recommended",
      rating: 4.9,
      reviewCount: 128,
      positionSr: "Pozicija #1",
      positionEn: "Rank #1",
      photosCount: "48 stvarnih fotografija radova",
      photosCountEn: "48 verified client photos",
      offerSr: "Kompletan muški & ženski stil, moderna nega, tačne cene",
      offerEn: "Full styling & haircut service with upfront pricing",
      siteSpeedSr: "Brz mobilni sajt (0.4s učitavanje)",
      siteSpeedEn: "Blazing fast mobile site (0.4s load)",
      priceSr: "Cenovnik javan i transparentan",
      priceEn: "Public and transparent pricing",
      bookingSr: "Online zakazivanje + Poziv jednim dodirom",
      bookingEn: "Online booking + 1-tap phone call",
      highlight: true
    },
    {
      id: 1,
      name: isSr ? "Salon Lepote Elegance" : "Elegance Beauty Care",
      badgeSr: "2. Mesto na mapi",
      badgeEn: "2nd Search Rank",
      rating: 4.2,
      reviewCount: 19,
      positionSr: "Pozicija #2",
      positionEn: "Rank #2",
      photosCount: "3 generičke slike enterijera",
      photosCountEn: "3 generic stock images",
      offerSr: "Široka ponuda, nejasno šta je glavna specijalnost",
      offerEn: "Vague list of treatments without clear specialty",
      siteSpeedSr: "Spor WordPress šablon bez cenovnika",
      siteSpeedEn: "Slow template without online pricing",
      priceSr: "Cene nisu navedene (zvati za info)",
      priceEn: "Pricing hidden (call for details)",
      bookingSr: "Nema zakazivanja, samo fiksni telefon",
      bookingEn: "Landline only, no instant booking",
      highlight: false
    },
    {
      id: 2,
      name: isSr ? "Studio M & Studio Stil" : "Studio M & Style",
      badgeSr: "3. Mesto na mapi",
      badgeEn: "3rd Search Rank",
      rating: 3.8,
      reviewCount: 6,
      positionSr: "Pozicija #3",
      positionEn: "Rank #3",
      photosCount: "Nema novih fotografija (od 2021.)",
      photosCountEn: "No recent photos (since 2021)",
      offerSr: "Nema opisa usluga",
      offerEn: "No service description available",
      siteSpeedSr: "Nema sajt (samo neažuriran Facebook profil)",
      siteSpeedEn: "No website (outdated social link)",
      priceSr: "Nepoznato",
      priceEn: "Unknown",
      bookingSr: "Samo dolazak na lice mesta",
      bookingEn: "Walk-in only",
      highlight: false
    }
  ];

  const decisionFactors = [
    { nameSr: "Pozicija u pretrazi", nameEn: "Search Position", icon: <Search size={14} className="text-blue-500" /> },
    { nameSr: "Ocena (Rating)", nameEn: "Rating Score", icon: <Star size={14} className="text-amber-500" /> },
    { nameSr: "Broj recenzija", nameEn: "Review Count", icon: <CheckCircle2 size={14} className="text-emerald-500" /> },
    { nameSr: "Fotografije radova", nameEn: "Work Photography", icon: <Camera size={14} className="text-purple-500" /> },
    { nameSr: "Jasna ponuda", nameEn: "Clear Offer", icon: <Layers size={14} className="text-indigo-500" /> },
    { nameSr: "Sajt & Brzina", nameEn: "Website & Speed", icon: <Globe size={14} className="text-cyan-500" /> },
    { nameSr: "Cena / Očekivanja", nameEn: "Pricing Expectation", icon: <Tag size={14} className="text-teal-500" /> },
    { nameSr: "Zakazivanje & Kontakt", nameEn: "Booking & Contact", icon: <Calendar size={14} className="text-rose-500" /> },
  ];

  return (
    <section
      id="scene-02"
      className="relative min-h-screen py-24 sm:py-32 px-4 sm:px-6 bg-slate-50 dark:bg-[#090c14] border-t border-slate-200 dark:border-white/5 overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Scene Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="text-xs sm:text-sm font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest">
            {isSr ? "02 / PERSPEKTIVA KUPCA" : "02 / CUSTOMER PERSPECTIVE"}
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {isSr ? "Zamislite da ste vaš klijent." : "Put yourself in your customer's shoes."}
          </h2>

          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            {isSr
              ? "Uzmimo jednostavan primer iz svakodnevnog života. Potreban vam je frizer u gradu. Otvarate pretragu na telefonu:"
              : "Let's take a relatable everyday example. You need a haircut in town. You open search on your mobile phone:"}
          </p>
        </div>

        {/* Simulated Search Environment */}
        <div className="space-y-8">
          
          {/* Mock Search Bar */}
          <div className="max-w-2xl mx-auto p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>{isSr ? "GENERISANI PRETRAŽIVAČ" : "SEARCH ENGINE INTERFACE"}</span>
              <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold">
                {isSr ? "Edukativni primer" : "Educational Example"}
              </span>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-100 dark:bg-black/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white">
              <Search size={18} className="text-blue-500 shrink-0" />
              <span className="font-mono text-base font-medium">
                {typedText}
                {isTyping && <span className="inline-block w-0.5 h-4 bg-blue-500 ml-1 animate-pulse" />}
              </span>
            </div>
          </div>

          {/* Core Decision Prompt: "Koga biste izabrali?" */}
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
              {isSr ? "Koga biste izabrali?" : "Who would you choose?"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {isSr ? "Uporedite 3 stvarna rezultata koja se pojavljuju pred kupcem:" : "Compare 3 real-world results presented to the customer:"}
            </p>
          </div>

          {/* 3 Result Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {searchResults.map((res) => {
              const isSelected = selectedCompetitor === res.id;
              return (
                <div
                  key={res.id}
                  onClick={() => setSelectedCompetitor(res.id)}
                  className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6 ${
                    res.highlight
                      ? "bg-white dark:bg-slate-900 border-blue-500 shadow-xl shadow-blue-500/10 ring-2 ring-blue-500/20"
                      : "bg-white/70 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  <div className="space-y-4">
                    
                    {/* Header */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                          res.highlight ? "bg-blue-600 text-white" : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                        }`}>
                          {isSr ? res.positionSr : res.positionEn}
                        </span>

                        <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                          <Star size={13} className="fill-amber-500" />
                          <span>{res.rating}</span>
                          <span className="text-slate-400 font-normal">({res.reviewCount})</span>
                        </div>
                      </div>

                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                        {res.name}
                      </h4>
                    </div>

                    {/* Breakdown of Elements */}
                    <div className="space-y-2.5 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 space-y-0.5">
                        <span className="text-[10px] text-slate-400 font-mono uppercase">{isSr ? "Fotografije" : "Photos"}</span>
                        <div className="font-semibold text-slate-800 dark:text-slate-200">
                          {isSr ? res.photosCount : res.photosCountEn}
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 space-y-0.5">
                        <span className="text-[10px] text-slate-400 font-mono uppercase">{isSr ? "Ponuda & Sajt" : "Offer & Site"}</span>
                        <div className="font-semibold text-slate-800 dark:text-slate-200">
                          {isSr ? res.offerSr : res.offerEn}
                        </div>
                        <div className="text-slate-500 dark:text-slate-400 text-[11px] pt-1">
                          {isSr ? res.siteSpeedSr : res.siteSpeedEn}
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 space-y-0.5">
                        <span className="text-[10px] text-slate-400 font-mono uppercase">{isSr ? "Cenovnik & Zakazivanje" : "Pricing & Booking"}</span>
                        <div className="font-semibold text-slate-800 dark:text-slate-200">
                          {isSr ? res.priceSr : res.priceEn}
                        </div>
                        <div className="text-emerald-600 dark:text-emerald-400 font-semibold text-[11px] pt-0.5">
                          {isSr ? res.bookingSr : res.bookingEn}
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Choice indicator */}
                  <div className={`py-2 px-3 rounded-xl text-xs font-bold text-center ${
                    res.highlight
                      ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
                      : "bg-slate-100 dark:bg-white/5 text-slate-500"
                  }`}>
                    {res.highlight
                      ? (isSr ? "✓ Prirodan prvi izbor kupca" : "✓ Natural first choice")
                      : (isSr ? "Posetilac prelazi na sledeći link" : "Visitor skips to next")}
                  </div>

                </div>
              );
            })}
          </div>

          {/* 8 Crucial Decision Factors Ribbon */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider text-center">
              {isSr ? "8 ELEMENATA KOJI LOME ODLUKU PRE POZIVA" : "8 ELEMENTS SHAPING THE DECISION BEFORE A CALL"}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
              {decisionFactors.map((df, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/70 dark:border-white/5 flex flex-col items-center text-center gap-1.5"
                >
                  <div className="p-1.5 rounded-lg bg-white dark:bg-black/40 shadow-xs">
                    {df.icon}
                  </div>
                  <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200">
                    {isSr ? df.nameSr : df.nameEn}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Scene Climax Statement */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 relative overflow-hidden text-center sm:text-left space-y-3">
          <div className="absolute right-0 top-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
            {isSr
              ? "Odluka je počela mnogo pre nego što je neko otvorio vaš sajt."
              : "The decision began long before anyone even opened your website."}
          </h3>

          <p className="text-base sm:text-xl text-blue-300 font-medium max-w-2xl">
            {isSr
              ? "Sajt je samo jedna karika u celom lancu poverenja i akcije."
              : "The website is merely one link in an entire chain of trust and decision-making."}
          </p>
        </div>

      </div>
    </section>
  );
}
