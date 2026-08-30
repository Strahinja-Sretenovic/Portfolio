import React, { useRef, useState, useEffect } from "react";
import { Search, Instagram, Users, Star, Phone, Calendar, ArrowRight, AlertTriangle, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface Act2Props {
  onContinueClick?: () => void;
}

export function Act2CustomerJourney({ onContinueClick }: Act2Props) {
  const { language } = useLanguage();
  const isSr = language === "sr";
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
            if (totalScrollable > 0) {
              const currentScroll = -rect.top;
              const rawProgress = currentScroll / totalScrollable;
              const clamped = Math.min(1, Math.max(0, rawProgress));
              setProgress(clamped);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Map progress into 5 distinct sequential stages:
  // Stage 1 (0.00 - 0.22): PRONALAZI VAS
  // Stage 2 (0.22 - 0.44): POKUŠAVA DA VAS RAZUME
  // Stage 3 (0.44 - 0.66): TRAŽI RAZLOG DA VAM VERUJE
  // Stage 4 (0.66 - 0.82): ODLUČUJE DA LI ĆE NAPRAVITI SLEDEĆI KORAK
  // Stage 5 (0.82 - 1.00): PREKID / THE BREAK ("I negde na ovom putu možete da ga izgubite.")

  const currentStage = 
    progress < 0.22 ? 1 :
    progress < 0.44 ? 2 :
    progress < 0.66 ? 3 :
    progress < 0.82 ? 4 : 5;

  return (
    <div
      ref={containerRef}
      id="act-2-customer-journey"
      className="relative w-full bg-slate-950 text-white"
      style={{ height: "280vh" }} // Pinned storytelling distance (~280vh is optimal)
    >
      {/* Sticky Pinned Viewport Stage */}
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col justify-between p-6 sm:p-10 z-20">
        
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40" />

        {/* Top Header: Step Indicator */}
        <div className="relative z-10 w-full max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold">
              AKT 02 • PUT KUPCA
            </span>
            <span className="hidden sm:inline-block text-xs font-mono text-slate-400">
              {currentStage < 5 ? `KORAK 0${currentStage} / 04` : "DIJAGNOSTIČKI PREKID"}
            </span>
          </div>

          {/* Minimal 4-stage indicator bar */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {[1, 2, 3, 4].map((step) => {
              const isActive = currentStage === step;
              const isPast = currentStage > step;
              return (
                <div
                  key={step}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentStage === 5 
                      ? "w-4 bg-rose-500/60" 
                      : isActive 
                        ? "w-8 bg-blue-500" 
                        : isPast 
                          ? "w-4 bg-blue-500/40" 
                          : "w-4 bg-white/10"
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* CENTER STAGE: Visual & Headline Choreography */}
        <div className="relative z-10 w-full max-w-4xl mx-auto my-auto flex flex-col items-center justify-center text-center px-4">
          
          {/* =========================================================================
              STAGE 1: PRONALAZI VAS (0.00 - 0.22)
             ========================================================================= */}
          {currentStage === 1 && (
            <div className="space-y-6 animate-fadeIn transition-all duration-500">
              <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">
                1. Prvi kontakt
              </span>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight">
                {isSr ? "Prvo mora da vas pronađe." : "First, they need to find you."}
              </h2>

              {/* Minimal Clean Visual: 3 discovery channels */}
              <div className="pt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
                <div className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5 text-sm font-medium text-slate-200">
                  <Search className="w-4 h-4 text-blue-400" />
                  <span>Google Pretraga</span>
                </div>
                <div className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5 text-sm font-medium text-slate-200">
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Instagram</span>
                </div>
                <div className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5 text-sm font-medium text-slate-200">
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span>Preporuka</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-400 max-w-md mx-auto pt-2">
                {isSr 
                  ? "Kupac ima problem i traži rešenje tamo gde se trenutno nalazi." 
                  : "The client has a problem and looks for a solution wherever they are."}
              </p>
            </div>
          )}

          {/* =========================================================================
              STAGE 2: POKUŠAVA DA VAS RAZUME (0.22 - 0.44)
             ========================================================================= */}
          {currentStage === 2 && (
            <div className="space-y-6 animate-fadeIn transition-all duration-500">
              <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">
                2. Prvi utisak
              </span>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight">
                {isSr ? "Zatim pokušava da shvati šta nudite." : "Then they try to grasp what you offer."}
              </h2>

              {/* Visual: Business profile / Website representation */}
              <div className="pt-4 max-w-md mx-auto w-full">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left space-y-2.5 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                      <span className="text-xs font-mono text-slate-300">vas-biznis.rs</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      Učitano za 0.8s
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-3 w-3/4 bg-white/20 rounded" />
                    <div className="h-2.5 w-1/2 bg-white/10 rounded" />
                  </div>
                  <div className="flex gap-2 pt-1">
                    <div className="h-6 w-20 bg-blue-500/30 border border-blue-500/50 rounded-lg" />
                    <div className="h-6 w-24 bg-white/10 rounded-lg" />
                  </div>
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-300 font-medium max-w-md mx-auto">
                {isSr 
                  ? "Ako nije jasno za nekoliko sekundi, odlazi dalje." 
                  : "If it's not crystal clear within seconds, they leave."}
              </p>
            </div>
          )}

          {/* =========================================================================
              STAGE 3: TRAŽI RAZLOG DA VAM VERUJE (0.44 - 0.66)
             ========================================================================= */}
          {currentStage === 3 && (
            <div className="space-y-6 animate-fadeIn transition-all duration-500">
              <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">
                3. Izgradnja poverenja
              </span>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight">
                {isSr ? "Onda traži razlog da vam veruje." : "Then they look for a reason to trust you."}
              </h2>

              {/* Visual: Trust indicators */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg mx-auto w-full">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center space-y-1">
                  <div className="flex justify-center text-amber-400 gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <div className="text-xs font-bold text-slate-200">Google Ocene</div>
                  <div className="text-[10px] text-slate-400">5.0 Zvezdica</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center space-y-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 mx-auto" />
                  <div className="text-xs font-bold text-slate-200">Stvarni Radovi</div>
                  <div className="text-[10px] text-slate-400">Fotografije & Dokazi</div>
                </div>

                <div className="col-span-2 sm:col-span-1 p-3.5 rounded-xl bg-white/5 border border-white/10 text-center space-y-1">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 mx-auto" />
                  <div className="text-xs font-bold text-slate-200">Jasne Cene</div>
                  <div className="text-[10px] text-slate-400">Bez skrivenih troškova</div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-400 max-w-md mx-auto pt-1">
                {isSr 
                  ? "Kupac upoređuje vašu ponudu sa alternativama pre nego što prelomi." 
                  : "The client weighs your offer against alternatives before taking action."}
              </p>
            </div>
          )}

          {/* =========================================================================
              STAGE 4: ODLUČUJE DA LI ĆE NAPRAVITI KORAK (0.66 - 0.82)
             ========================================================================= */}
          {currentStage === 4 && (
            <div className="space-y-6 animate-fadeIn transition-all duration-500">
              <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">
                4. Završna konverzija
              </span>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight">
                {isSr ? "Na kraju odlučuje da li će vas kontaktirati." : "Finally, they decide whether to reach out."}
              </h2>

              {/* Visual: Action triggers */}
              <div className="pt-4 flex flex-wrap justify-center gap-3 max-w-md mx-auto w-full">
                <div className="px-5 py-3 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center gap-2.5 text-sm font-semibold text-blue-300">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>Direktan Poziv</span>
                </div>
                <div className="px-5 py-3 rounded-xl bg-emerald-600/20 border border-emerald-500/40 flex items-center gap-2.5 text-sm font-semibold text-emerald-300">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>Online Zakazivanje</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-400 max-w-md mx-auto pt-1">
                {isSr 
                  ? "Sve vodi do jednog cilja: da posetilac postane vaš klijent." 
                  : "Everything leads to one goal: turning a visitor into a client."}
              </p>
            </div>
          )}

          {/* =========================================================================
              STAGE 5: THE BREAK / IMPORTANT PUNCHLINE (0.82 - 1.00)
             ========================================================================= */}
          {currentStage === 5 && (
            <div className="space-y-6 animate-scaleIn transition-all duration-500 max-w-2xl mx-auto">
              {/* Visual Line Break indicator */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-400 text-xs font-mono font-bold">
                <AlertTriangle className="w-4 h-4" />
                <span>USKO GRLO NA PUTU KUPCA</span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-white leading-[1.15]">
                {isSr 
                  ? "I negde na ovom putu možete da ga izgubite." 
                  : "And somewhere along this path, you can lose them."}
              </h2>

              <div className="pt-2 text-xl sm:text-3xl font-display font-bold text-blue-400">
                {isSr 
                  ? "Naš posao je da pronađemo gde." 
                  : "Our job is to find exactly where."}
              </div>

              <div className="pt-6">
                <button
                  onClick={onContinueClick}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-950 font-bold text-sm hover:bg-slate-100 transition-all cursor-pointer"
                >
                  <span>{isSr ? "Pogledajte dijagnostiku ↓" : "See diagnosis ↓"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Bottom Connecting SVG Path */}
        <div className="relative z-10 w-full max-w-3xl mx-auto flex items-center justify-center">
          <svg className="w-full h-8 overflow-visible" viewBox="0 0 600 24">
            {/* Background baseline rail */}
            <line x1="20" y1="12" x2="580" y2="12" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
            
            {/* Active Drawing Line */}
            {currentStage < 5 ? (
              <line 
                x1="20" 
                y1="12" 
                x2={20 + Math.min(1, progress / 0.82) * 560} 
                y2="12" 
                stroke="#3b82f6" 
                strokeWidth="3" 
                strokeLinecap="round"
              />
            ) : (
              /* Broken Line at Stage 5 */
              <>
                <line x1="20" y1="12" x2="280" y2="12" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
                <line x1="320" y1="12" x2="580" y2="12" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="300" cy="12" r="6" fill="#ef4444" className="animate-pulse" />
              </>
            )}
          </svg>
        </div>

      </div>
    </div>
  );
}
