import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
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

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "40vw" : "-40vw",
    opacity: 0,
    scale: 0.94,
    rotateY: dir > 0 ? 3 : -3,
    filter: "blur(4px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    filter: "blur(0px)",
    transition: {
      x: { type: "spring", stiffness: 220, damping: 26, mass: 0.8 },
      scale: { type: "spring", stiffness: 220, damping: 26 },
      rotateY: { duration: 0.4, ease: "easeOut" },
      opacity: { duration: 0.35, ease: "easeOut" },
      filter: { duration: 0.3 },
    },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-40vw" : "40vw",
    opacity: 0,
    scale: 0.94,
    rotateY: dir > 0 ? -3 : 3,
    filter: "blur(4px)",
    transition: {
      x: { type: "spring", stiffness: 220, damping: 26, mass: 0.8 },
      scale: { type: "spring", stiffness: 220, damping: 26 },
      rotateY: { duration: 0.3, ease: "easeIn" },
      opacity: { duration: 0.25, ease: "easeIn" },
      filter: { duration: 0.25 },
    },
  }),
};

export function HorizontalDeck({ 
  onOpenProjectsModal, 
  onOpenServiceModal: _onOpenServiceModal,
  activeSlide,
  onSlideChange
}: HorizontalDeckProps) {
  const { language: _language } = useLanguage();

  const TOTAL_SLIDES = 12;
  const [internalSlide, setInternalSlide] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const currentSlide = activeSlide !== undefined ? activeSlide : internalSlide;
  const prevSlideRef = useRef<number>(currentSlide);

  // Sync direction when activeSlide is controlled externally
  useEffect(() => {
    if (activeSlide !== undefined && activeSlide !== prevSlideRef.current) {
      setDirection(activeSlide >= prevSlideRef.current ? 1 : -1);
      prevSlideRef.current = activeSlide;
    }
  }, [activeSlide]);

  const isTransitioningRef = useRef<boolean>(false);
  const touchStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const navigateTo = useCallback((newIndex: number, dir?: number) => {
    if (newIndex < 0 || newIndex >= TOTAL_SLIDES) return;
    const computedDir = dir !== undefined ? dir : (newIndex >= currentSlide ? 1 : -1);
    setDirection(computedDir);
    prevSlideRef.current = newIndex;

    if (onSlideChange) {
      onSlideChange(newIndex);
    } else {
      setInternalSlide(newIndex);
    }
  }, [TOTAL_SLIDES, currentSlide, onSlideChange]);

  const goToSlide = useCallback((index: number) => {
    navigateTo(index);
  }, [navigateTo]);

  const nextSlide = useCallback(() => {
    navigateTo(Math.min(currentSlide + 1, TOTAL_SLIDES - 1), 1);
  }, [navigateTo, currentSlide, TOTAL_SLIDES]);

  const prevSlide = useCallback(() => {
    navigateTo(Math.max(currentSlide - 1, 0), -1);
  }, [navigateTo, currentSlide]);

  const jumpToForm = useCallback(() => {
    navigateTo(11, 1);
  }, [navigateTo]);

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

  const renderSlide = (index: number) => {
    switch (index) {
      case 0:
        return <Slide01TheQuestion onNext={nextSlide} onJumpToForm={jumpToForm} />;
      case 1:
        return <Slide02YourCustomer onNext={nextSlide} onPrev={prevSlide} />;
      case 2:
        return <Slide03CustomerJourney onNext={nextSlide} onPrev={prevSlide} />;
      case 3:
        return <Slide04WhereItBreaks onNext={nextSlide} onPrev={prevSlide} />;
      case 4:
        return <Slide05Diagnosis onNext={nextSlide} onPrev={prevSlide} />;
      case 5:
        return <Slide06ProblemSolutionMatrix onNext={nextSlide} onPrev={prevSlide} />;
      case 6:
        return <Slide07Process onNext={nextSlide} onPrev={prevSlide} />;
      case 7:
        return <Slide08ProjectStevan onNext={nextSlide} onPrev={prevSlide} />;
      case 8:
        return <Slide09ProjectsSplit onNext={nextSlide} onPrev={prevSlide} onOpenProjects={onOpenProjectsModal} />;
      case 9:
        return <Slide10RadicalHonesty onNext={nextSlide} onPrev={prevSlide} />;
      case 10:
        return <Slide11TurnToVisitor onNext={nextSlide} onPrev={prevSlide} />;
      case 11:
        return <Slide12Form onPrev={prevSlide} />;
      default:
        return null;
    }
  };

  return (
    <div
      id="presentation-deck-container"
      className="relative w-screen h-[100dvh] max-h-[100dvh] overflow-hidden bg-white dark:bg-[#07090e] select-none [perspective:1200px]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Animated Slide Viewport */}
      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence custom={direction} mode="popLayout" initial={false}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full will-change-transform"
          >
            {renderSlide(currentSlide)}
          </motion.div>
        </AnimatePresence>
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
