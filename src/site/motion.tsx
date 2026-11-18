import { createContext, useContext, useEffect, useRef, useState, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

interface MotionCtx {
  scrollTo: (target: string | number, offset?: number) => void;
  stop: () => void;
  start: () => void;
}

const Ctx = createContext<MotionCtx>({ scrollTo: () => {}, stop: () => {}, start: () => {} });

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1, smoothWheel: true });
    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const value: MotionCtx = {
    scrollTo: (target, offset = 0) => {
      const lenis = lenisRef.current;
      if (lenis) {
        lenis.scrollTo(target as any, { offset, duration: 1.6, easing: (t) => 1 - Math.pow(1 - t, 4) });
      } else if (typeof target === "number") {
        window.scrollTo({ top: target, behavior: "smooth" });
      } else {
        const el = document.querySelector(target);
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + offset, behavior: "smooth" });
      }
    },
    stop: () => lenisRef.current?.stop(),
    start: () => lenisRef.current?.start(),
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useSmooth = () => useContext(Ctx);

/** Splits a sentence into masked words for slide-up reveals. */
export function Words({ text, className = "", wordClass = "w" }: { text: string; className?: string; wordClass?: string }) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="mask" aria-hidden="true">
          <span className={wordClass}>{w}</span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

/** Splits text into masked characters. */
export function Chars({ text, className = "", charClass = "c" }: { text: string; className?: string; charClass?: string }) {
  return (
    <span className={className} aria-label={text}>
      {Array.from(text).map((ch, i) => (
        <span key={i} className="mask" aria-hidden="true">
          <span className={charClass}>{ch === " " ? " " : ch}</span>
        </span>
      ))}
    </span>
  );
}

export function useIsDesktop(query = "(min-width: 1024px)") {
  const [match, setMatch] = useState(() => typeof window !== "undefined" && window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const on = () => setMatch(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [query]);
  return match;
}
