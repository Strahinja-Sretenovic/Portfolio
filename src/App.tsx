import { Fragment, lazy, Suspense, useCallback, useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { ToastProvider } from "./context/ToastContext";
import type { LegalDocType } from "./components/legal/LegalModal";
import { ErrorBoundary } from "./site/ErrorBoundary";
import { trackPageView } from "./utils/analytics";
import { content } from "./content";
import { SmoothScrollProvider, ScrollTrigger, prefersReducedMotion } from "./site/motion";
import { Loader } from "./site/Loader";
import { Nav } from "./site/Nav";
import { Cursor } from "./site/Cursor";
import { Hero } from "./site/Hero";
import { Marquee } from "./site/Marquee";
import { About } from "./site/About";
import { Journey } from "./site/Journey";
import { Work } from "./site/Work";
import { Services } from "./site/Services";
import { Pricing } from "./site/Pricing";
import { Process } from "./site/Process";
import { Stack } from "./site/Stack";
import { Contact } from "./site/Contact";
import { Footer } from "./site/Footer";

// Legal texts and the cookie UI are split into their own chunks so they don't slow down the first paint
const LegalModal = lazy(() => import("./components/legal/LegalModal").then((m) => ({ default: m.LegalModal })));
const CookieBanner = lazy(() => import("./components/legal/CookieBanner").then((m) => ({ default: m.CookieBanner })));

const seenIntro = () => {
  try {
    return sessionStorage.getItem("intro_seen") === "1";
  } catch {
    return false;
  }
};

function Site() {
  const { language } = useLanguage();
  const t = content[language];
  const [loading, setLoading] = useState(() => !seenIntro() && !prefersReducedMotion());
  const [legalOpen, setLegalOpen] = useState(false);
  const [legalLoaded, setLegalLoaded] = useState(false);
  const [legalDoc, setLegalDoc] = useState<LegalDocType>("privacy");
  const [cookieSettings, setCookieSettings] = useState(false);

  useEffect(() => {
    trackPageView("/", "SSolutions");
  }, []);

  // Recalculate pinned sections after fonts/images settle or language changes
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);
    const id = setTimeout(refresh, 300);
    return () => {
      window.removeEventListener("load", refresh);
      clearTimeout(id);
    };
  }, [language]);

  const done = useCallback(() => {
    setLoading(false);
    try {
      sessionStorage.setItem("intro_seen", "1");
    } catch {}
  }, []);

  const openLegal = (doc: LegalDocType) => {
    setLegalDoc(doc);
    setLegalLoaded(true);
    setLegalOpen(true);
  };

  return (
    <ErrorBoundary message={t.a11y.error}>
      <a href="#main" className="skip-link">{t.a11y.skip}</a>
      {loading && <Loader onDone={done} />}
      <Cursor label={t.work.visit.split(" ")[0]} />
      <div className="grain" aria-hidden="true" />
      <Nav />
      {/* Remount on language change so pinned scroll sections are rebuilt in document order */}
      <Fragment key={language}>
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero t={t} ready={!loading} />
        <Marquee items={t.marquee} />
        <About t={t} />
        <Journey t={t} />
        <Work t={t} lang={language} />
        <Services t={t} />
        <Pricing t={t} lang={language} />
        <Process t={t} />
        <Stack label={t.stack.label} />
        <Contact t={t} onPrivacy={() => openLegal("privacy")} />
      </main>
      <Footer t={t} onLegal={openLegal} onCookies={() => setCookieSettings(true)} />
      </Fragment>

      <Suspense fallback={null}>
        {legalLoaded && (
          <LegalModal
            isOpen={legalOpen}
            onClose={() => setLegalOpen(false)}
            initialDoc={legalDoc}
            onOpenCookieSettings={() => setCookieSettings(true)}
          />
        )}
        <CookieBanner
          onOpenCookiePolicy={() => openLegal("cookies")}
          forceOpenSettings={cookieSettings}
          onCloseSettings={() => setCookieSettings(false)}
        />
      </Suspense>
    </ErrorBoundary>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <LanguageProvider>
        <ToastProvider>
          <SmoothScrollProvider>
            <Site />
            <Analytics />
          </SmoothScrollProvider>
        </ToastProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
