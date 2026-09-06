import React, { useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { usePresentationEdit } from "../../hooks/usePresentationEdit";
import { useLanguage } from "../../context/LanguageContext";

// Slide Components
import { Slide01Opening } from "./Slide01Opening";
import { Slide02Choice } from "./Slide02Choice";
import { Slide03CustomerJourney } from "./Slide03CustomerJourney";
import { Slide04Break } from "./Slide04Break";
import { Slide05Diagnosis } from "./Slide05Diagnosis";
import { Slide06RightTool } from "./Slide06RightTool";
import { Slide07Process } from "./Slide07Process";
import { Slide08Proof } from "./Slide08Proof";
import { Slide09RadicalHonesty } from "./Slide09RadicalHonesty";
import { Slide10YourBusiness } from "./Slide10YourBusiness";

interface HorizontalDeckProps {
  activeSlide: number;
  onSlideChange: (index: number) => void;
  onOpenProjectsModal: () => void;
  onOpenServiceModal?: (serviceId?: string) => void;
  onOpenLegal?: (doc: "privacy" | "terms" | "cookies" | "refund" | "business") => void;
}

export function HorizontalDeck({
  activeSlide,
  onSlideChange,
  onOpenProjectsModal,
  onOpenLegal
}: HorizontalDeckProps) {
  const { totalSlides, isMobile, isTablet, isLaptop, isWide } = usePresentationEdit();
  const { t } = useLanguage();

  const isTransitioningRef = useRef(false);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);

  // Clamp activeSlide within current totalSlides
  const safeActiveSlide = Math.min(Math.max(0, activeSlide), totalSlides - 1);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      onSlideChange(index);
    }
  }, [totalSlides, onSlideChange]);

  const nextSlide = useCallback(() => {
    if (safeActiveSlide < totalSlides - 1) {
      goToSlide(safeActiveSlide + 1);
    }
  }, [safeActiveSlide, totalSlides, goToSlide]);

  const prevSlide = useCallback(() => {
    if (safeActiveSlide > 0) {
      goToSlide(safeActiveSlide - 1);
    }
  }, [safeActiveSlide, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) {
        return;
      }

      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Debounced Wheel Navigation (Desktop & Laptop)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement | null;

      // Ignore when focused inside text input or textarea
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) {
        return;
      }

      // Check if user is inside a scrollable modal or inner container that actually has active scroll room
      if (target) {
        let el: HTMLElement | null = target;
        while (el && el !== document.body && el !== document.documentElement) {
          // If it's a modal dialog or projects list, let it scroll normally
          if (el.classList.contains("modal-scrollable") || el.getAttribute("role") === "dialog") {
            const hasVerticalScroll = el.scrollHeight > el.clientHeight + 4;
            if (hasVerticalScroll) {
              if (e.deltaY > 0 && el.scrollTop + el.clientHeight < el.scrollHeight - 5) return;
              if (e.deltaY < 0 && el.scrollTop > 5) return;
            }
          }
          el = el.parentElement;
        }
      }

      if (isTransitioningRef.current) return;

      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

      // Sensitive and reliable threshold for mouse wheel & touchpad
      if (Math.abs(delta) > 18) {
        isTransitioningRef.current = true;
        if (delta > 0) {
          nextSlide();
        } else {
          prevSlide();
        }

        setTimeout(() => {
          isTransitioningRef.current = false;
        }, 420);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [nextSlide, prevSlide]);

  // Touch Swipe Handlers for mobile & tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    const target = e.target as HTMLElement | null;
    
    // Don't intercept swipe inside text inputs, textareas, buttons, or designated interactive areas
    if (
      target &&
      (target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable ||
        target.closest("[data-prevent-deck-swipe]") ||
        target.closest("button") ||
        target.closest(".modal-scrollable"))
    ) {
      touchStartRef.current = null;
      return;
    }

    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      time: Date.now()
    };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;

    const diffX = touchStartRef.current.x - e.changedTouches[0].clientX;
    const diffY = touchStartRef.current.y - e.changedTouches[0].clientY;
    const elapsed = Date.now() - touchStartRef.current.time;

    // Must be predominantly horizontal and quick or decisive
    if (Math.abs(diffX) > Math.abs(diffY) * 1.2 && Math.abs(diffX) > 35 && elapsed < 800) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    touchStartRef.current = null;
  };

  // Render the current slide based on safeActiveSlide
  const renderSlide = () => {
    const commonProps = {
      isMobile,
      isTablet,
      isLaptop,
      isWide,
      onNext: nextSlide,
      onPrev: prevSlide,
      onGoToForm: () => goToSlide(9)
    };

    switch (safeActiveSlide) {
      case 0:
        return <Slide01Opening {...commonProps} />;
      case 1:
        return <Slide02Choice {...commonProps} />;
      case 2:
        return <Slide03CustomerJourney {...commonProps} />;
      case 3:
        return <Slide04Break {...commonProps} />;
      case 4:
        return <Slide05Diagnosis {...commonProps} />;
      case 5:
        return <Slide06RightTool {...commonProps} />;
      case 6:
        return <Slide07Process {...commonProps} />;
      case 7:
        return <Slide08Proof {...commonProps} onOpenProjects={onOpenProjectsModal} />;
      case 8:
        return <Slide09RadicalHonesty {...commonProps} />;
      case 9:
      default:
        return <Slide10YourBusiness {...commonProps} onOpenLegal={onOpenLegal} />;
    }
  };

  const formattedCurrent = safeActiveSlide + 1 < 10 ? `0${safeActiveSlide + 1}` : `${safeActiveSlide + 1}`;
  const formattedTotal = totalSlides < 10 ? `0${totalSlides}` : `${totalSlides}`;

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="w-full h-full relative overflow-hidden bg-white dark:bg-[#07090e]"
    >
      {/* Slide Container with Smooth Lateral Transition */}
      <div className="w-full h-full relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={safeActiveSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="w-full h-full"
          >
            {renderSlide()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Bottom Presentation Navigation Bar */}
      <div className="fixed bottom-2.5 sm:bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 sm:gap-3 px-2.5 sm:px-4 py-1 sm:py-2 rounded-full bg-slate-900/90 dark:bg-black/90 backdrop-blur-md border border-white/15 text-white shadow-2xl">
        
        {/* Prev Arrow */}
        <button
          onClick={prevSlide}
          disabled={safeActiveSlide === 0}
          aria-label={t.common.prevSlide}
          className="p-2 sm:p-1.5 rounded-full hover:bg-white/10 active:scale-95 disabled:opacity-25 disabled:cursor-not-allowed transition-all cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
        </button>

        {/* Slide Counter (e.g. 03 / 10) */}
        <div className="text-[11px] sm:text-xs font-mono font-bold tracking-wider px-1 text-slate-300 select-none">
          <span className="text-blue-400">{formattedCurrent}</span>
          <span className="mx-1 text-slate-600">/</span>
          <span>{formattedTotal}</span>
        </div>

        {/* Waypoint Dots (Tablet & Desktop) */}
        <div className="hidden sm:flex items-center gap-1 px-1">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              aria-label={`Slajd ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                safeActiveSlide === idx
                  ? "w-4 bg-blue-500 shadow-sm"
                  : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Next Arrow */}
        <button
          onClick={nextSlide}
          disabled={safeActiveSlide === totalSlides - 1}
          aria-label={t.common.nextSlide}
          className="p-2 sm:p-1.5 rounded-full hover:bg-white/10 active:scale-95 disabled:opacity-25 disabled:cursor-not-allowed transition-all cursor-pointer"
        >
          <ChevronRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
        </button>

      </div>
    </div>
  );
}
