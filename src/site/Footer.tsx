import { useLayoutEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";
import { gsap, useSmooth } from "./motion";
import { Content } from "../content";
import { LegalDocType } from "../components/legal/LegalModal";

export function Footer({ t, onLegal, onCookies }: { t: Content; onLegal: (d: LegalDocType) => void; onCookies: () => void }) {
  const root = useRef<HTMLElement>(null);
  const { scrollTo } = useSmooth();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ft-word", {
        yPercent: 60,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom bottom", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={root} className="relative overflow-hidden pt-16" style={{ background: "var(--fg)", color: "var(--bg)" }}>
      <div className="container-x flex flex-col lg:flex-row gap-6 lg:items-center justify-between text-sm">
        <div className="flex flex-wrap gap-x-6 gap-y-2 opacity-70">
          <button onClick={() => onLegal("privacy")} className="hover:opacity-100 hover:underline">{t.footer.privacy}</button>
          <button onClick={() => onLegal("terms")} className="hover:opacity-100 hover:underline">{t.footer.terms}</button>
          <button onClick={() => onLegal("cookies")} className="hover:opacity-100 hover:underline">{t.footer.cookies}</button>
          <button onClick={() => onLegal("refund")} className="hover:opacity-100 hover:underline">{t.footer.refund}</button>
          <button onClick={() => onLegal("business")} className="hover:opacity-100 hover:underline">{t.footer.business}</button>
          <button onClick={onCookies} className="hover:opacity-100 hover:underline">{t.footer.cookieSettings}</button>
        </div>
        <span className="opacity-60">© {new Date().getFullYear()} SSolutions · Strahinja Sretenović. {t.footer.rights}</span>
        <button onClick={() => scrollTo(0)} className="flex items-center gap-2 font-display uppercase tracking-[0.18em] text-xs">
          {t.footer.top} <span className="w-9 h-9 rounded-full border grid place-items-center" style={{ borderColor: "color-mix(in srgb, var(--bg) 25%, transparent)" }}><ArrowUp size={14} /></span>
        </button>
      </div>
      <div className="overflow-hidden mt-10" aria-hidden="true">
        <div className="ft-word display font-bold text-center leading-[0.8] text-[21.5vw] tracking-[-0.06em] select-none translate-y-[12%]">
          SSolutions<span style={{ color: "var(--accent)" }}>.</span>
        </div>
      </div>
    </footer>
  );
}
