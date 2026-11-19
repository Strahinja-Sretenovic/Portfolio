import { useEffect, useRef, useState } from "react";
import { Moon, Sun, ArrowUpRight } from "lucide-react";
import { gsap, ScrollTrigger, useSmooth } from "./motion";
import { useTheme } from "../components/ThemeProvider";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../content";

const SECTIONS = ["about", "work", "services", "pricing", "contact"] as const;

export function Nav() {
  const { language, setLanguage } = useLanguage();
  const t = content[language];
  const { theme, setTheme } = useTheme();
  const { scrollTo, stop, start } = useSmooth();
  const bar = useRef<HTMLElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const isDark = theme === "dark" || (theme === "system" && document.documentElement.classList.contains("dark"));

  // Hide on scroll down, reveal on scroll up + progress bar
  useEffect(() => {
    const st = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        if (progress.current) progress.current.style.transform = `scaleX(${self.progress})`;
        if (!bar.current) return;
        const hide = self.direction === 1 && self.scroll() > 200;
        gsap.to(bar.current, { yPercent: hide ? -110 : 0, duration: 0.45, ease: "power3.out", overwrite: true });
      },
    });
    return () => st.kill();
  }, []);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Mobile menu animation
  useEffect(() => {
    const el = menuRef.current;
    if (!el) return;
    if (open) {
      setTimeout(() => el.querySelector<HTMLButtonElement>("button")?.focus(), 400);
      stop();
      gsap.set(el, { display: "flex" });
      gsap.fromTo(el, { clipPath: "circle(0% at 100% 0%)" }, { clipPath: "circle(150% at 100% 0%)", duration: 0.8, ease: "expo.inOut" });
      gsap.fromTo(el.querySelectorAll(".mi"), { yPercent: 110 }, { yPercent: 0, duration: 0.7, stagger: 0.05, delay: 0.25, ease: "power4.out" });
    } else {
      start();
      gsap.to(el, { clipPath: "circle(0% at 100% 0%)", duration: 0.6, ease: "expo.inOut", onComplete: () => { gsap.set(el, { display: "none" }); } });
    }
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    setTimeout(() => scrollTo(`#${id}`, 0), open ? 350 : 0);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[70] origin-left" ref={progress} style={{ background: "var(--accent)", transform: "scaleX(0)" }} />
      <header ref={bar} className="fixed top-0 inset-x-0 z-[65] transition-colors duration-500" style={open ? { color: "var(--bg)" } : undefined}>
        <div className="container-x flex items-center justify-between h-[72px]">
          <button onClick={() => scrollTo(0)} className="font-display font-bold text-lg tracking-tight flex items-baseline gap-2" >
            SSolutions<span style={{ color: "var(--accent)" }}>.</span>
          </button>

          <nav
            aria-label={t.a11y.mainNav}
            className="hidden lg:flex items-center gap-1 rounded-full px-2 py-1.5 border backdrop-blur-xl"
            style={{ borderColor: "var(--line)", background: "color-mix(in srgb, var(--bg) 70%, transparent)" }}
          >
            {SECTIONS.map((id) => (
              <button
                key={id}
                onClick={() => go(id)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-[var(--fg)] hover:text-[var(--bg)]"
              >
                {t.nav[id]}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div role="group" aria-label={t.a11y.language} className="flex rounded-full border p-1 text-xs font-semibold font-display" style={{ borderColor: "var(--line)" }}>
              {(["sr", "en"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLanguage(l)}
                  className="px-2.5 py-1.5 rounded-full uppercase transition-colors"
                  style={language === l ? { background: "var(--fg)", color: "var(--bg)" } : undefined}
                  aria-pressed={language === l}
                  title={l === "sr" ? "Srpski" : "English"}
                  lang={l}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="w-9 h-9 rounded-full border grid place-items-center transition-transform hover:rotate-45"
              style={{ borderColor: "var(--line)" }}
              aria-label={t.a11y.theme}
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button onClick={() => go("contact")} className="btn btn-primary hidden md:inline-flex !h-10 !px-5 !text-sm">
              {t.nav.cta} <ArrowUpRight size={15} className="arrow" />
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden w-9 h-9 rounded-full grid place-items-center relative z-[80]"
              style={{ background: "var(--fg)", color: "var(--bg)" }}
              aria-label={open ? t.a11y.menuClose : t.a11y.menuOpen}
              aria-controls="mobile-menu"
              aria-expanded={open}
            >
              <span className="relative w-4 h-3 block">
                <span className="absolute left-0 right-0 h-[1.5px] bg-current transition-all duration-300" style={{ top: open ? 5 : 0, transform: open ? "rotate(45deg)" : "none" }} />
                <span className="absolute left-0 right-0 h-[1.5px] bg-current transition-all duration-300" style={{ top: open ? 5 : 10, transform: open ? "rotate(-45deg)" : "none" }} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        ref={menuRef}
        id="mobile-menu"
        className="fixed inset-0 z-[64] hidden flex-col justify-end p-6 pb-10"
        style={{ background: "var(--fg)", color: "var(--bg)", clipPath: "circle(0% at 100% 0%)" }}
      >
        <nav aria-label={t.a11y.mainNav} className="flex flex-col gap-1">
          {SECTIONS.map((id, i) => (
            <button key={id} onClick={() => go(id)} className="text-left">
              <span className="mask">
                <span className="mi display text-[13vw] font-semibold flex items-baseline gap-3">
                  <span className="text-sm font-sans opacity-50 tabular-nums">0{i + 1}</span>
                  {t.nav[id]}
                </span>
              </span>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
