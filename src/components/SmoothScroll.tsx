import { ReactNode } from "react";

export function scrollToTarget(target: string | HTMLElement, offset: number = 80) {
  if (typeof window !== "undefined") {
    const element = typeof target === "string" ? document.querySelector(target) as HTMLElement : target;
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  // Pure native scrolling engine for zero-latency, direct finger/wheel tracking
  return <>{children}</>;
}


