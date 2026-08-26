import { useEffect, ReactNode } from "react";
import Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function scrollToTarget(target: string | HTMLElement, offset: number = 80) {
  if (typeof window !== "undefined") {
    if (window.__lenis) {
      window.__lenis.scrollTo(target, { offset: -offset, duration: 1.2 });
      return;
    }

    const element = typeof target === "string" ? document.querySelector(target) as HTMLElement : target;
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Disable smooth scroll engine on mobile touch devices to use native smooth inertia scroll and avoid layout reflows
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
    if (isTouchDevice) {
      window.__lenis = undefined;
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
    });

    window.__lenis = lenis;

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  return <>{children}</>;
}

