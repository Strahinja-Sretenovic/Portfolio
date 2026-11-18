import { Fragment, useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { ToastProvider } from "./context/ToastContext";
import { LegalModal, LegalDocType } from "./components/legal/LegalModal";
import { CookieBanner } from "./components/legal/CookieBanner";
import { trackPageView } from "./utils/analytics";
import { content } from "./content";
import { SmoothScrollProvider, ScrollTrigger, prefersReducedMotion } from "./site/motion";
import { Loader } from "./site/Loader";
import { Nav } from "./site/Nav";
import { Cursor } from "./site/Cursor";
import { Hero } from "./site/Hero";
import { Marquee } from "./site/Marquee";
import { About } from "./site/About";
import { Work } from "./site/Work";
import { Services } from "./site/Services";
import { Process } from "./site/Process";
import { Stack } from "./site/Stack";
import { Contact } from "./site/Contact";
import { Footer } from "./site/Footer";

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
  const [legalDoc, setLegalDoc] = useState<LegalDocType>("privacy");
  const [cookieSettings, setCookieSettings] = useState(false);

  useEffect(() => {
    trackPageView("/", "Strahinja Sretenović — SSolutions");
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
    setLegalOpen(true);
  };

  return (
    <>
      {loading && <Loader onDone={done} />}
      <Cursor label={t.work.visit.split(" ")[0]} />
      <div className="grain" aria-hidden="true" />
      <Nav />
      {/* Remount on language change so pinned scroll sections are rebuilt in document order */}
      <Fragment key={language}>
      <main>
        <Hero t={t} ready={!loading} />
        <Marquee items={t.marquee} />
        <About t={t} />
        <Work t={t} lang={language} />
        <Services t={t} />
        <Process t={t} />
        <Stack label={t.stack.label} />
        <Contact t={t} onPrivacy={() => openLegal("privacy")} />
      </main>
      <Footer t={t} onLegal={openLegal} onCookies={() => setCookieSettings(true)} />
      </Fragment>

      <LegalModal
        isOpen={legalOpen}
        onClose={() => setLegalOpen(false)}
        initialDoc={legalDoc}
        onOpenCookieSettings={() => setCookieSettings(true)}
      />
      <CookieBanner
        onOpenCookiePolicy={() => openLegal("cookies")}
        forceOpenSettings={cookieSettings}
        onCloseSettings={() => setCookieSettings(false)}
      />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <LanguageProvider>
        <ToastProvider>
          <SmoothScrollProvider>
            <Site />
          </SmoothScrollProvider>
        </ToastProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
