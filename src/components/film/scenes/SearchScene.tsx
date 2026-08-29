import { motion } from "motion/react";
import { Star, MapPin, Phone, ShieldCheck, Check, Sparkles, Clock, Compass } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

interface SearchSceneProps {
  progress: number; // 0.08 to 0.18
}

export function SearchScene({ progress }: SearchSceneProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  // Normalize progress 0.0 to 1.0 within 0.08 - 0.18
  const norm = Math.min(1, Math.max(0, (progress - 0.08) / 0.10));

  // Subphases:
  // 0.0 - 0.35: Search bar moves up, 3 search results materialize below
  // 0.35 - 0.65: Gaze passes across cards, "Vaš klijent ne vidi samo vas"
  // 0.65 - 1.0: Cards spread apart in 3D space, "Poredi", decision signals pulse

  const searchResults = [
    {
      id: "result-1",
      name: isSr ? "Salon Elegance" : "Salon Elegance",
      rating: "4.8",
      reviews: "124",
      distance: "350m",
      statusSr: "Otvoreno • Zatvara se u 20:00",
      statusEn: "Open • Closes at 20:00",
      tagSr: "Google profil",
      tagEn: "Google Profile",
      isTarget: false
    },
    {
      id: "result-2",
      name: isSr ? "Frizerski Salon Stevan" : "Stevan Hair Studio",
      rating: "4.9",
      reviews: "218",
      distance: "420m",
      statusSr: "Online zakazivanje • 100/100 brzina",
      statusEn: "Online Booking • Instant Speed",
      tagSr: "Najbolje ocenjeno",
      tagEn: "Top Rated",
      isTarget: true
    },
    {
      id: "result-3",
      name: isSr ? "Studio Style & Beauty" : "Style & Beauty Lounge",
      rating: "4.3",
      reviews: "48",
      distance: "750m",
      statusSr: "Nema online cenovnika",
      statusEn: "No online pricing",
      tagSr: "Lokalni profil",
      tagEn: "Local Profile",
      isTarget: false
    }
  ];

  const signals = [
    { nameSr: "RECENZIJE", nameEn: "REVIEWS", x: -180, y: -90, color: "text-amber-400 border-amber-500/40 bg-amber-500/10" },
    { nameSr: "LOKACIJA", nameEn: "LOCATION", x: 190, y: -70, color: "text-blue-400 border-blue-500/40 bg-blue-500/10" },
    { nameSr: "FOTOGRAFIJE", nameEn: "PHOTOS", x: -210, y: 30, color: "text-indigo-400 border-indigo-500/40 bg-indigo-500/10" },
    { nameSr: "CENA & PONUDA", nameEn: "PRICING & OFFER", x: 200, y: 50, color: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10" },
    { nameSr: "POVERENJE", nameEn: "TRUST SIGNALS", x: 0, y: 130, color: "text-purple-400 border-purple-500/40 bg-purple-500/10" }
  ];

  // Selected card index focus (0 -> 1 -> 2 -> 1)
  const activeFocusIndex = norm < 0.3 ? 0 : norm < 0.6 ? 2 : 1;
  const isComparing = norm >= 0.55;

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 select-none pointer-events-none">
      
      {/* Background Kinetic Headline */}
      <div 
        className="absolute top-16 sm:top-20 max-w-4xl text-center space-y-2 transition-all duration-500"
        style={{
          opacity: norm < 0.1 ? norm / 0.1 : norm > 0.9 ? (1 - norm) / 0.1 : 1,
          transform: `translateY(${norm < 0.5 ? 0 : -10}px)`
        }}
      >
        <div className="text-xs font-mono text-blue-500 font-bold uppercase tracking-widest">
          {isSr ? "02 / TRENUTAK POREĐENJA" : "02 / THE COMPARISON MOMENT"}
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
          {isComparing 
            ? (isSr ? "Poredi." : "They compare.")
            : (isSr ? "Vaš klijent ne vidi samo vas." : "Your client doesn't only see you.")}
        </h2>
      </div>

      {/* The 3 Materialized Search Cards */}
      <div 
        className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-4 transition-all duration-700 mt-12"
        style={{
          transform: `perspective(1000px) rotateX(${isComparing ? 6 : 0}deg) scale(${isComparing ? 1.02 : 0.98})`
        }}
      >
        {searchResults.map((res, i) => {
          const isCurrentActive = activeFocusIndex === i;
          const isWinner = res.isTarget;

          // Spread offset when comparing
          const spreadX = isComparing ? (i - 1) * 24 : 0;

          return (
            <div
              key={res.id}
              className={`w-full md:w-80 p-4 sm:p-5 rounded-2xl border transition-all duration-500 relative flex flex-col justify-between ${
                isCurrentActive
                  ? "bg-white/95 dark:bg-slate-900/95 border-blue-500 shadow-2xl shadow-blue-500/25 ring-2 ring-blue-500/30 scale-105 z-20"
                  : "bg-white/70 dark:bg-slate-900/60 border-slate-200 dark:border-white/10 opacity-70 z-10 scale-95"
              }`}
              style={{
                transform: `translateX(${spreadX}px)`
              }}
            >
              <div className="space-y-2.5">
                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    {isSr ? res.tagSr : res.tagEn}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                    <Star size={12} className="fill-amber-500" />
                    <span>{res.rating}</span>
                    <span className="text-[10px] text-slate-400 font-normal">({res.reviews})</span>
                  </div>
                </div>

                {/* Business Name */}
                <div className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span>{res.name}</span>
                  {isWinner && <Sparkles size={14} className="text-blue-500" />}
                </div>

                {/* Status & Distance */}
                <div className="space-y-1 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <MapPin size={11} className="text-slate-400" />
                    <span>{res.distance}</span>
                    <span>•</span>
                    <Clock size={11} className="text-slate-400" />
                    <span>{isSr ? res.statusSr : res.statusEn}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons Mock */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">{isSr ? "Pregled sajta" : "Visit Website"}</span>
                <span className={`px-2 py-1 rounded-md text-[11px] font-bold ${
                  isCurrentActive ? "bg-blue-600 text-white" : "bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300"
                }`}>
                  {isSr ? "Otvori →" : "Open →"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Orbiting Decision Factor Badges when Comparing */}
      {isComparing && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none hidden md:flex">
          {signals.map((sig, idx) => {
            const delayNorm = Math.min(1, Math.max(0, (norm - 0.6) / 0.35));
            return (
              <div
                key={idx}
                className={`absolute px-3 py-1 rounded-full border text-[10px] font-mono font-bold tracking-wider uppercase transition-all duration-700 shadow-lg ${sig.color}`}
                style={{
                  transform: `translate(${sig.x * delayNorm}px, ${sig.y * delayNorm}px) scale(${0.7 + delayNorm * 0.3})`,
                  opacity: delayNorm
                }}
              >
                {isSr ? sig.nameSr : sig.nameEn}
              </div>
            );
          })}
        </div>
      )}

      {/* Bottom Subtitle Insight */}
      <div 
        className="absolute bottom-12 text-center max-w-xl transition-all duration-500"
        style={{
          opacity: norm > 0.4 ? 1 : 0,
          transform: `translateY(${(1 - norm) * 10}px)`
        }}
      >
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-mono">
          {isSr 
            ? "Odluka traje manje od 5 sekundi. Pobeđuje onaj ko uliva instant poverenje." 
            : "The decision takes under 5 seconds. Whoever inspires instant trust wins."}
        </p>
      </div>
    </div>
  );
}
