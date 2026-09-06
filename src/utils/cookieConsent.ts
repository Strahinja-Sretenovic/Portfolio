/**
 * Privacy-Compliant Cookie Consent Manager (GDPR & Serbian ZZPL)
 * 
 * Handles technical necessary cookies (theme, language, state) and
 * optional analytics cookies (Google Analytics 4).
 * Adheres strictly to opt-in rules: No tracking cookies are placed until explicit consent.
 */

export const COOKIE_CONSENT_KEY = "ssolutions_cookie_consent_v1";

export interface CookieConsentState {
  necessary: true; // Always true (technical/functional)
  analytics: boolean; // Optional analytics (Google Analytics 4)
  timestamp: string;
  version: number;
}

/**
 * Reads user consent preference from local storage
 */
export function getCookieConsent(): CookieConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.analytics === "boolean") {
      return parsed as CookieConsentState;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Checks if the user has explicitly made a choice
 */
export function hasUserDecidedConsent(): boolean {
  return getCookieConsent() !== null;
}

/**
 * Checks if analytics cookies have been explicitly authorized
 */
export function hasAnalyticsConsent(): boolean {
  const consent = getCookieConsent();
  return Boolean(consent?.analytics);
}

/**
 * Erases any Google Analytics cookies from the current domain
 */
export function removeAnalyticsCookies(): void {
  if (typeof document === "undefined") return;
  const cookieNames = ["_ga", "_gid", "_gat"];
  const hostname = window.location.hostname;
  const domainParts = hostname.split(".");

  // Iterate over matching cookies and expire them
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0].trim();
    if (cookieNames.includes(name) || name.startsWith("_ga_") || name.startsWith("_gcl_")) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${hostname};`;
      if (domainParts.length >= 2) {
        const rootDomain = domainParts.slice(-2).join(".");
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${rootDomain};`;
      }
    }
  });
}

/**
 * Saves user consent choice and applies Consent Mode v2 signals
 */
export function saveCookieConsent(analyticsAllowed: boolean): CookieConsentState {
  const state: CookieConsentState = {
    necessary: true,
    analytics: analyticsAllowed,
    timestamp: new Date().toISOString(),
    version: 1,
  };

  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(state));
  } catch (err) {
    console.warn("Could not save cookie consent:", err);
  }

  // Update Google Consent Mode v2
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("consent", "update", {
      analytics_storage: analyticsAllowed ? "granted" : "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }

  if (!analyticsAllowed) {
    removeAnalyticsCookies();
  }

  // Dispatch custom window event so UI and analytics services can react instantly
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("cookieConsentUpdated", { detail: state })
    );
  }

  return state;
}
