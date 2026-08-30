import React, { useState, useEffect, useCallback, useRef } from "react";
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
import { DeckRobotProgress } from "./DeckRobotProgress";

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

      {/* Walking Robot Progress Bar */}
      <DeckRobotProgress
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        onGoTo={goToSlide}
      />
    </div>
  );
}
