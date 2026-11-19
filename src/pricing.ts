import type { Lang } from "./content";

/**
 * Price estimator data. All amounts in EUR.
 * - Our services: SSolutions starting prices (edit freely).
 * - Third-party costs: average Serbian / international market prices, Nov 2026
 *   (domains .rs ≈ 12–15 €/yr, .com ≈ 10–15 €/yr; shared hosting ≈ 50–150 €/yr;
 *   Google Workspace Business Starter ≈ 7 $/user/month on a yearly plan).
 */

type L = Record<Lang, string>;

export type ProjectId = "landing" | "site" | "shop" | "app" | "redesign";

export interface ProjectType {
  id: ProjectId;
  name: L;
  desc: L;
  base: number;
  /** pages included in the base price; undefined = page count not relevant */
  includedPages?: number;
  maxPages?: number;
  /** suggested hosting for this kind of project */
  hosting: HostingId;
}

export const PAGE_PRICE = 60;

export const projectTypes: ProjectType[] = [
  {
    id: "landing",
    name: { sr: "Landing stranica", en: "Landing page" },
    desc: { sr: "Jedna stranica sa jasnim ciljem — poziv, upit ili prodaja.", en: "One page with one goal — a call, an inquiry or a sale." },
    base: 350,
    hosting: "static",
  },
  {
    id: "site",
    name: { sr: "Prezentacioni sajt", en: "Business website" },
    desc: { sr: "Sajt firme sa više strana: usluge, o nama, galerija, kontakt.", en: "A multi-page company site: services, about, gallery, contact." },
    base: 700,
    includedPages: 5,
    maxPages: 20,
    hosting: "static",
  },
  {
    id: "shop",
    name: { sr: "Internet prodavnica", en: "Online shop" },
    desc: { sr: "Katalog, korpa, porudžbine i panel za upravljanje proizvodima.", en: "Catalogue, cart, orders and a panel to manage products." },
    base: 1500,
    includedPages: 8,
    maxPages: 30,
    hosting: "business",
  },
  {
    id: "app",
    name: { sr: "Web aplikacija", en: "Web application" },
    desc: { sr: "Softver po meri: rezervacije, portali, admin paneli, integracije.", en: "Custom software: bookings, portals, admin panels, integrations." },
    base: 3000,
    hosting: "server",
  },
  {
    id: "redesign",
    name: { sr: "Redizajn sajta", en: "Website redesign" },
    desc: { sr: "Postojeći sajt postaje moderan, brz i prilagođen telefonu.", en: "Your current site becomes modern, fast and mobile-ready." },
    base: 500,
    includedPages: 5,
    maxPages: 20,
    hosting: "static",
  },
];

export interface Extra {
  id: string;
  name: L;
  price: number;
  /** price per additional language */
  perUnit?: boolean;
  onlyFor?: ProjectId[];
}

export const extras: Extra[] = [
  { id: "cms", name: { sr: "Samostalno uređivanje sadržaja (CMS / blog)", en: "Self-editable content (CMS / blog)" }, price: 250 },
  { id: "booking", name: { sr: "Online zakazivanje termina", en: "Online appointment booking" }, price: 400, onlyFor: ["landing", "site", "redesign", "shop"] },
  { id: "payments", name: { sr: "Online plaćanje karticama", en: "Online card payments" }, price: 300, onlyFor: ["shop", "app"] },
  { id: "seo", name: { sr: "Napredni SEO (lokalni + Google profil)", en: "Advanced SEO (local + Google profile)" }, price: 300 },
  { id: "copy", name: { sr: "Pisanje tekstova za sajt", en: "Website copywriting" }, price: 200 },
  { id: "logo", name: { sr: "Logo i vizuelni identitet", en: "Logo & visual identity" }, price: 300 },
  { id: "motion", name: { sr: "Napredne animacije (kao na ovom sajtu)", en: "Advanced animations (like this site)" }, price: 400 },
];

export const LANGUAGE_PRICE = 200;

export type HostingId = "static" | "shared" | "business" | "server";

export const hostingPlans: { id: HostingId; name: L; note: L; yearly: number }[] = [
  { id: "static", name: { sr: "Cloud hosting (Vercel / Netlify)", en: "Cloud hosting (Vercel / Netlify)" }, note: { sr: "Za brze moderne sajtove — besplatan plan je najčešće dovoljan", en: "For fast modern sites — the free plan is usually enough" }, yearly: 0 },
  { id: "shared", name: { sr: "Osnovni hosting", en: "Basic hosting" }, note: { sr: "Klasičan hosting (cPanel) za WordPress sajtove", en: "Classic cPanel hosting for WordPress sites" }, yearly: 60 },
  { id: "business", name: { sr: "Poslovni hosting", en: "Business hosting" }, note: { sr: "Više resursa — za prodavnice i veći saobraćaj", en: "More resources — for shops and higher traffic" }, yearly: 120 },
  { id: "server", name: { sr: "VPS / cloud server", en: "VPS / cloud server" }, note: { sr: "Za web aplikacije sa bazom i backendom", en: "For web apps with a database and backend" }, yearly: 240 },
];

export type DomainId = "rs" | "com" | "own";
export const domains: { id: DomainId; name: L; yearly: number }[] = [
  { id: "rs", name: { sr: ".rs domen", en: ".rs domain" }, yearly: 15 },
  { id: "com", name: { sr: ".com domen", en: ".com domain" }, yearly: 13 },
  { id: "own", name: { sr: "Već imam domen", en: "I already have one" }, yearly: 0 },
];

/** Google Workspace Business Starter, yearly plan ≈ 7 €/user/month */
export const EMAIL_PER_USER_YEAR = 84;

export type CareId = "none" | "basic" | "plus";
export const carePlans: { id: CareId; name: L; note: L; monthly: number }[] = [
  { id: "none", name: { sr: "Bez održavanja", en: "No maintenance" }, note: { sr: "Javljate se kad vam nešto zatreba", en: "Reach out whenever you need something" }, monthly: 0 },
  { id: "basic", name: { sr: "Osnovno održavanje", en: "Basic care" }, note: { sr: "Ažuriranja, backup, sigurnost, sitne izmene", en: "Updates, backups, security, small edits" }, monthly: 30 },
  { id: "plus", name: { sr: "Prošireno održavanje", en: "Plus care" }, note: { sr: "Sve iz osnovnog + do 3h izmena mesečno i SEO izveštaj", en: "Everything in Basic + up to 3h of changes a month and an SEO report" }, monthly: 80 },
];
