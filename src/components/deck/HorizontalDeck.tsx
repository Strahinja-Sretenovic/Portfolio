import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { Slide01TheQuestion } from "./Slide01TheQuestion";
import { Slide02YourCustomer } from "./Slide02YourCustomer";
import { Slide03CustomerJourney } from "./Slide03CustomerJourney";
import { Slide04WhereItBreaks } from "./Slide04WhereItBreaks";
import { Slide05Diagnosis } from "./Slide05Diagnosis";
import { Slide06ProblemSolutionMatrix } from "./Slide06ProblemSolutionMatrix";
import { Slide07Process } from "./Slide07Process";
import { Slide08ProjectStevan } from "./Slide08ProjectStevan";
import { Slide09ProjectsSplit } from "./Slide09ProjectsSplit";
import { Slide10RadicalHonesty } from "./Slide10RadicalHonesty";
import { Slide11TurnToVisitor } from "./Slide11TurnToVisitor";
import { Slide12Form } from "./Slide12Form";

interface HorizontalDeckProps {
  onOpenProjectsModal: () => void;
  onOpenServiceModal: (id?: string) => void;
  activeSlide?: number;
  onSlideChange?: (index: number) => void;
}

export function HorizontalDeck({ 
  onOpenProjectsModal, 
  onOpenServiceModal,
  activeSlide,
  onSlideChange
}: HorizontalDeckProps) {
  const { language } = useLanguage();
  const isSr = language === "sr";

  const TOTAL_SLIDES = 12;
  const [internalSlide, setInternalSlide] = useState<number>(0);
  const currentSlide = activeSlide !== undefined ? activeSlide : internalSlide;

  const setCurrentSlide = useCallback((index: number) => {
    setInternalSlide(index);
    if (onSlideChange) {
      onSlideChange(index);
    }
  }, [onSlideChange]);

  const isTransitioningRef = useRef<boolean>(false);
  const touchStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const slideTitles = [
    isSr ? "01 — Pitanje" : "01 — The Question",
    isSr ? "02 — Vaš kupac" : "02 — Your Customer",
    isSr ? "03 — Put kupca" : "03 — Customer Journey",
    isSr ? "04 — Prekid puta" : "04 — Where it Breaks",
    isSr ? "05 — Dijagnostika" : "05 — Diagnosis",
    isSr ? "06 — Preporuka" : "06 — Solutions Matrix",
    isSr ? "07 — Proces rada" : "07 — Our Process",
    isSr ? "08 — Projekat 01" : "08 — Real Project 01",
    isSr ? "09 — Projekti 02 & 03" : "09 — Real Projects 02/03",
    isSr ? "10 — Iskrenost" : "10 — Radical Honesty",
    isSr ? "11 — Vaš biznis" : "11 — Your Business",
    isSr ? "12 — Analiza & Forma" : "12 — Qualification Form",
  ];

  const goToSlide = useCallback((index: number) => {
    if (index < 0 || index >= TOTAL_SLIDES) return;
    setCurrentSlide(index);
  }, [TOTAL_SLIDES]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, TOTAL_SLIDES - 1));
  }, [TOTAL_SLIDES]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const jumpToForm = useCallback(() => {
    setCurrentSlide(11);
  }, []);

  // Wheel and Trackpad navigation with debounce lock
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // If user is scrolling inside an element with standard overflow, allow it
      const target = e.target as HTMLElement;
      if (target && target.closest("textarea, input, select")) {
        return;
      }

      // Check dominant delta
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

      if (Math.abs(delta) < 25) return;

      if (isTransitioningRef.current) return;

      if (delta > 0) {
        // Move Right / Next
        if (currentSlide < TOTAL_SLIDES - 1) {
          isTransitioningRef.current = true;
          nextSlide();
          setTimeout(() => {
            isTransitioningRef.current = false;
          }, 450);
        }
      } else {
        // Move Left / Prev
        if (currentSlide > 0) {
          isTransitioningRef.current = true;
          prevSlide();
          setTimeout(() => {
            isTransitioningRef.current = false;
          }, 450);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentSlide, nextSlide, prevSlide, TOTAL_SLIDES]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag === "input" || activeTag === "textarea" || activeTag === "select") {
        return;
      }

      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "Home") {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goToSlide(TOTAL_SLIDES - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, TOTAL_SLIDES]);

  // Touch swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartRef.current.x;
    const deltaY = e.changedTouches[0].clientY - touchStartRef.current.y;

    // Dominant horizontal swipe
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <div
      id="presentation-deck-container"
      className="relative w-screen h-[100dvh] max-h-[100dvh] overflow-hidden bg-white dark:bg-[#07090e] select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Horizontal Deck Track (TranslateX Engine) */}
      <div
        className="flex w-[1200vw] h-full transition-transform duration-500 ease-out will-change-transform"
        style={{
          transform: `translateX(-${currentSlide * 100}vw)`,
        }}
      >
        {/* Slide 01: The Question */}
        <section className="w-screen h-full shrink-0 flex-none" aria-label="Slide 01: The Question">
          <Slide01TheQuestion onNext={nextSlide} onJumpToForm={jumpToForm} />
        </section>

        {/* Slide 02: Your Customer */}
        <section className="w-screen h-full shrink-0 flex-none" aria-label="Slide 02: Your Customer">
          <Slide02YourCustomer onNext={nextSlide} onPrev={prevSlide} />
        </section>

        {/* Slide 03: Customer Journey */}
        <section className="w-screen h-full shrink-0 flex-none" aria-label="Slide 03: Customer Journey">
          <Slide03CustomerJourney onNext={nextSlide} onPrev={prevSlide} />
        </section>

        {/* Slide 04: Where it Breaks */}
        <section className="w-screen h-full shrink-0 flex-none" aria-label="Slide 04: Where it Breaks">
          <Slide04WhereItBreaks onNext={nextSlide} onPrev={prevSlide} />
        </section>

        {/* Slide 05: Diagnosis */}
        <section className="w-screen h-full shrink-0 flex-none" aria-label="Slide 05: Diagnosis">
          <Slide05Diagnosis onNext={nextSlide} onPrev={prevSlide} />
        </section>

        {/* Slide 06: Solutions Matrix */}
        <section className="w-screen h-full shrink-0 flex-none" aria-label="Slide 06: Problem Solution Matrix">
          <Slide06ProblemSolutionMatrix onNext={nextSlide} onPrev={prevSlide} />
        </section>

        {/* Slide 07: Process */}
        <section className="w-screen h-full shrink-0 flex-none" aria-label="Slide 07: Our Process">
          <Slide07Process onNext={nextSlide} onPrev={prevSlide} />
        </section>

        {/* Slide 08: Real Project 01 */}
        <section className="w-screen h-full shrink-0 flex-none" aria-label="Slide 08: Real Project 01">
          <Slide08ProjectStevan onNext={nextSlide} onPrev={prevSlide} />
        </section>

        {/* Slide 09: Real Projects 02 & 03 */}
        <section className="w-screen h-full shrink-0 flex-none" aria-label="Slide 09: Real Projects 02 and 03">
          <Slide09ProjectsSplit onNext={nextSlide} onPrev={prevSlide} onOpenProjects={onOpenProjectsModal} />
        </section>

        {/* Slide 10: Radical Honesty */}
        <section className="w-screen h-full shrink-0 flex-none" aria-label="Slide 10: Radical Honesty">
          <Slide10RadicalHonesty onNext={nextSlide} onPrev={prevSlide} />
        </section>

        {/* Slide 11: Your Business */}
        <section className="w-screen h-full shrink-0 flex-none" aria-label="Slide 11: Your Business">
          <Slide11TurnToVisitor onNext={nextSlide} onPrev={prevSlide} />
        </section>

        {/* Slide 12: Qualification Form */}
        <section className="w-screen h-full shrink-0 flex-none" aria-label="Slide 12: Qualification Form">
          <Slide12Form onPrev={prevSlide} />
        </section>
      </div>

      {/* Floating Bottom Deck HUD & Navigation Bar */}
      <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-4xl px-3 sm:px-5 py-2.5 rounded-full bg-slate-950/80 dark:bg-[#07090e]/90 backdrop-blur-xl border border-white/10 text-white shadow-2xl flex items-center justify-between gap-3">
        
        {/* Left: Previous Arrow & Counter */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            aria-label="Previous slide"
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 disabled:opacity-30 disabled:hover:bg-white/5 flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="font-mono text-xs text-slate-300 font-bold px-1 min-w-[52px] text-center">
            {String(currentSlide + 1).padStart(2, "0")} / {String(TOTAL_SLIDES).padStart(2, "0")}
          </div>
        </div>

        {/* Center: 12 Interactive Slide Indicators */}
        <div className="hidden sm:flex items-center gap-1.5 overflow-x-auto max-w-[420px] py-1 px-1">
          {Array.from({ length: TOTAL_SLIDES }).map((_, idx) => {
            const isActive = currentSlide === idx;
            return (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                title={slideTitles[idx]}
                aria-label={`Jump to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  isActive
                    ? "w-7 bg-blue-500 shadow-sm shadow-blue-400"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            );
          })}
        </div>

        {/* Right: Next Arrow & Direct Skip to Form CTA */}
        <div className="flex items-center gap-2">
          {currentSlide < TOTAL_SLIDES - 1 ? (
            <button
              onClick={jumpToForm}
              className="hidden md:inline-flex items-center gap-1 text-[11px] font-mono text-blue-400 hover:text-blue-300 transition-colors pr-1 cursor-pointer"
            >
              <span>{isSr ? "Preskočite na analizu" : "Skip to audit"}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          ) : null}

          <button
            onClick={nextSlide}
            disabled={currentSlide === TOTAL_SLIDES - 1}
            aria-label="Next slide"
            className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-500 disabled:opacity-30 disabled:hover:bg-blue-600 flex items-center justify-center transition-all shadow-md shadow-blue-500/20 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
