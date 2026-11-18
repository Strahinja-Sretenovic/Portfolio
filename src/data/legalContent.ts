/**
 * Comprehensive Legal, Compliance & Regulatory Data
 * Compliant with Serbian Law (ZZPL, ZET, ZZP) and EU GDPR.
 */

export interface LegalSection {
  id: string;
  title: string;
  content: string[];
  subsections?: {
    title: string;
    items?: string[];
    paragraphs?: string[];
  }[];
}

export interface LegalDocument {
  id: "privacy" | "terms" | "cookies" | "refund" | "business";
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}

export const legalContentSr: Record<string, LegalDocument> = {
  privacy: {
    id: "privacy",
    title: "Politika Privatnosti (Zaštita Podataka)",
    lastUpdated: "Septembar 2026.",
    intro:
      "Ova Politika privatnosti uređuje način na koji SSolutions (u daljem tekstu: 'Rukovalac') prikuplja, koristi, čuva i štiti lične podatke posetilaca sajta i potencijalnih klijenata, u potpunosti u skladu sa Zakonom o zaštiti podataka o ličnosti Republike Srbije (ZZPL, 'Sl. glasnik RS', br. 87/2018) i Opštom uredbom o zaštiti podataka o ličnosti Evropske unije (GDPR, Uredba EU 2016/679).",
    sections: [
      {
        id: "controller",
        title: "1. Rukovalac podacima i kontakt",
        content: [
          "Rukovalac vašim ličnim podacima je:",
          "Naziv: SSolutions (Digitalna Strategija, UX Arhitektura & Web Inženjering)",
          "Osnivač & Glavni konsultant: Stevan Sretenović",
          "Sedište: Čačak / Beograd, Republika Srbija",
          "Email za zahteve o zaštiti podataka: ssolutionsrs@gmail.com",
          "Za sva pitanja, uvid u vaše podatke ili povlačenje date saglasnosti možete nas u svakom trenutku kontaktirati putem navedene email adrese.",
        ],
      },
      {
        id: "principles",
        title: "2. Principi obrade i minimizacija podataka",
        content: [
          "Rukovalac se strogo pridržava načela zakonitosti, poštenja, transparentnosti, ograničenja svrhe, minimizacije podataka, tačnosti, ograničenja čuvanja i integriteta i poverljivosti.",
          "Prikupljamo isključivo podatke koji su neophodni za ostvarivanje konkretne i legitimne svrhe. Nikada ne prikupljamo posebne vrste podataka (osetljive podatke poput zdravstvenih, verskih, političkih ili biometrijskih podataka).",
        ],
      },
      {
        id: "data-collected",
        title: "3. Koje podatke prikupljamo i u koje svrhe",
        content: [
          "Kada popunite formu za besplatnu analizu biznisa ili kontakt formu na sajtu, prikupljamo:",
        ],
        subsections: [
          {
            title: "A. Podaci koje vi dobrovoljno unosite:",
            items: [
              "Ime i prezime / Ime kontakt osobe — radi identifikacije i personalizovane poslovne komunikacije.",
              "Poslovna email adresa — radi dostavljanja odgovora na upit, pripremljene analize i komunikacije.",
              "Broj telefona (opciono polje) — isključivo radi dogovora o terminu poziva ukoliko vi to želite.",
              "Naziv biznisa i URL sajta/Instagram profila — radi uvida u vaš trenutni digitalni nastup i pripreme analize.",
              "Ciljevi i poslovni izazov — radi razumevanja konteksta vašeg projekta.",
            ],
          },
          {
            title: "B. Tehnički podaci i kolačići:",
            items: [
              "Tehnički izbori (izabrana tema, izabrani jezik, status pristanka na kolačiće) — čuvaju se lokalno u vašem pretraživaču (localStorage) radi funkcionisanja sajta.",
              "Anonimni analitički podaci (Google Analytics 4) — prikupljaju se ISKLJUČIVO ukoliko ste dali eksplicitni pristanak putem banera za kolačiće. Podaci su agregirani i IP adrese su anonimizirane.",
              "Statistika poseta (Vercel Web Analytics) — ne koristi kolačiće i ne čuva lične podatke; broji posete i pregledane stranice preko anonimnog identifikatora koji se briše svakih 24 sata.",
            ],
          },
        ],
      },
      {
        id: "legal-basis",
        title: "4. Pravni osnov obrade",
        content: [
          "Obrada vaših podataka zasniva se na sledećim pravnim osnovima:",
          "1. Pristanak lica na koje se podaci odnose (član 12. stav 1. tačka 1. ZZPL / član 6(1)(a) GDPR) — kada označite polje za saglasnost prilikom slanja kontakt forme ili kada prihvatite analitičke kolačiće.",
          "2. Preduzimanje radnji na zahtev lica pre zaključenja ugovora (član 12. stav 1. tačka 2. ZZPL / član 6(1)(b) GDPR) — radi pripreme preliminarne ponude, analize ili konsultantskog razgovora.",
          "3. Legitimni interes (član 12. stav 1. tačka 6. ZZPL / član 6(1)(f) GDPR) — obezbeđivanje bezbednosti i stabilnosti web platforme i sprečavanje zloupotreba i spama.",
        ],
      },
      {
        id: "retention",
        title: "5. Rok čuvanja podataka",
        content: [
          "Vaše podatke čuvamo samo onoliko koliko je neophodno za ispunjenje svrhe zbog koje su prikupljeni:",
          "Podaci iz kontakt formi i zahteva za analizu čuvaju se najduže do 24 meseca od poslednje komunikacije, ili do trenutka kada zatražite njihovo brisanje.",
          "Ukoliko saradnja preraste u poslovni ugovor, relevantni finansijski i ugovorni podaci čuvaju se u skladu sa zakonskim rokovima propisanim zakonima Republike Srbije o računovodstvu i obligacionim odnosima.",
        ],
      },
      {
        id: "third-parties",
        title: "6. Deljenje podataka sa trećim licima",
        content: [
          "SSolutions NIKADA ne prodaje, ne iznajmljuje i ne ustupa vaše lične podatke trećim licima za marketinške ili komercijalne svrhe.",
          "Podacima mogu pristupiti isključivo pouzdani tehnički obrađivači (hosting provajder, zaštićeni email servis i analitički provajder uz vaš pristanak), uz obavezu čuvanja tajnosti i visoke standarde bezbednosti.",
        ],
      },
      {
        id: "rights",
        title: "7. Vaša zakonska prava",
        content: [
          "Prema ZZPL-u i GDPR-u, imate sledeća prava u vezi sa vašim podacima:",
        ],
        subsections: [
          {
            title: "Katalog vaših prava:",
            items: [
              "Pravo na pristup i uvid: Možete zatražiti potvrdu o tome da li obrađujemo vaše podatke i dobiti kopiju tih podataka.",
              "Pravo na ispravku i dopunu: Možete zahtevati ispravku netačnih ili dopunu nepotpunih podataka.",
              "Pravo na brisanje ('pravo na zaborav'): Možete zahtevati da trajno obrišemo vaše podatke.",
              "Pravo na ograničenje obrade: Možete zahtevati prekid obrade u određenim zakonskim okolnostima.",
              "Pravo na prenosivost podataka: Možete dobiti svoje podatke u strukturisanom, uobičajeno korišćenom i mašinski čitljivom formatu.",
              "Pravo na prigovor: U svakom trenutku možete uložiti prigovor na obradu podataka.",
              "Pravo na opoziv pristanka: Pristanak možete opozvati u svakom trenutku, pri čemu opoziv ne utiče na zakonitost obrade pre opoziva.",
            ],
          },
        ],
      },
      {
        id: "supervisory",
        title: "8. Pravo na pritužbu nadzornom organu",
        content: [
          "Ukoliko smatrate da se obrada vaših podataka vrši suprotno odredbama ZZPL-a, imate pravo da podnesete pritužbu nadzornom organu:",
          "Poverenik za informacije od javnog značaja i zaštitu podataka o ličnosti",
          "Adresa: Bulevar kralja Aleksandra 15, 11000 Beograd, Srbija",
          "Email: office@poverenik.rs | Telefon: +381 11 3408 900 | Web: www.poverenik.rs",
        ],
      },
    ],
  },

  terms: {
    id: "terms",
    title: "Uslovi Korišćenja (Terms & Conditions)",
    lastUpdated: "Septembar 2026.",
    intro:
      "Dobrodošli na web sajt SSolutions. Ovi Uslovi korišćenja regulišu pravila i uslove pod kojima posetioci mogu pristupati i koristiti ovaj web sajt i povezane materijale. Pristupom ovom sajtu prihvatate ove uslove u celosti.",
    sections: [
      {
        id: "purpose",
        title: "1. Svrha sajta i priroda informacija",
        content: [
          "Ovaj sajt je prezentacionog, edukativnog i konsultantskog karaktera. Njegova svrha je predstavljanje inženjerske metodologije, analize digitalnog prisustva, studija slučaja i pružanje mogućnosti za stupanje u poslovni kontakt.",
          "Informacije i dijagnostički primeri na sajtu ne predstavljaju automatsku pravnu ili finansijsku garanciju uspeha za bilo koji specifičan biznis bez individualne analize i formalnog dogovora.",
        ],
      },
      {
        id: "ip",
        title: "2. Intelektualna svojina i autorska prava",
        content: [
          "Celokupan sadržaj na sajtu — uključujući tekstove, metodološke dijagrame, UI/UX koncepte, dizajn, interaktivne prezentacije i programski kod — predstavlja intelektualnu svojinu SSolutions (Stevana Sretenovića) ili se koristi uz zakonito pravo.",
          "Zabranjeno je neovlašćeno kopiranje, reprodukovanje, preprodaja ili korišćenje sadržaja sajta u komercijalne svrhe bez prethodne pisane saglasnosti.",
        ],
      },
      {
        id: "services-contracts",
        title: "3. Ugovaranje usluga i definisanje obima",
        content: [
          "Sve konkretne usluge (izrada sajta, redizajn, razvoj web aplikacije, UX arhitektura, optimizacija) realizuju se isključivo na osnovu individualnog pisanog ugovora ili prihvaćene ponude sa jasno definisanim obimom rada (Scope of Work), fazama (milestones), rokovima i cenom.",
          "Podnošenje upita putem forme na sajtu ne stvara ugovornu obavezu za bilo koju stranu, već predstavlja informativni zahtev za preliminarnu analizu i razgovor.",
        ],
      },
      {
        id: "disclaimer",
        title: "4. Ograničenje odgovornosti i realne garancije",
        content: [
          "SSolutions garantuje tehničku ispravnost, standardizovan kôd, visoke performanse brzine, responzivnost i primenu najboljih UX/SEO praksi u skladu sa ugovorom.",
          "SSolutions ne daje neutemeljena niti nerealna obećanja (poput 'garantovano #1 mesto na Google-u za 24h' ili 'garantovan 10x rast profita'), s obzirom na to da krajnji tržišni rezultati zavise od kvaliteta klijentovog proizvoda, konkurentnosti cena, korisničke podrške i eksternih tržišnih faktora.",
        ],
      },
      {
        id: "governing-law",
        title: "5. Merodavno pravo i nadležnost",
        content: [
          "Na ove Uslove korišćenja primenjuje se pravo Republike Srbije.",
          "Svi eventualni sporovi koji proisteknu iz korišćenja ovog sajta rešavaće se mirnim putem, a ukoliko to nije moguće, pred stvarno nadležnim sudom u Republici Srbiji.",
        ],
      },
    ],
  },

  cookies: {
    id: "cookies",
    title: "Politika Kolačića (Cookie Policy)",
    lastUpdated: "Septembar 2026.",
    intro:
      "Ova Politika kolačića objašnjava šta su kolačići, koje kolačiće i tehnologije lokalnog skladišta koristi ovaj sajt, zašto ih koristimo i kako možete u svakom trenutku upravljati svojim postavkama.",
    sections: [
      {
        id: "what-are-cookies",
        title: "1. Šta su kolačići i lokalno skladište?",
        content: [
          "Kolačić (cookie) je mala tekstualna datoteka koju web sajt postavlja na vaš uređaj (računar, tablet ili mobilni telefon) kada ga posetite.",
          "Takođe koristimo 'Local Storage' u vašem pretraživaču, koji omogućava pamćenje vaših osnovnih preferenci (poput tamne ili svetle teme) bez slanja podataka serveru pri svakom zahtevu.",
        ],
      },
      {
        id: "categories",
        title: "2. Vrste kolačića koje koristimo",
        content: [
          "Kolačiće delimo u dve jasne kategorije u skladu sa propisima o privatnosti:",
        ],
        subsections: [
          {
            title: "A. Strogo neophodni (Tehnički) kolačići — UVEK AKTIVNI",
            paragraphs: [
              "Ovi kolačići su neophodni za osnovno funkcionisanje sajta, navigaciju kroz slajdove i pamćenje vaših osnovnih izbora. Za njihovo korišćenje prema zakonu nije potreban pristanak.",
            ],
            items: [
              "theme (localStorage): Pamti vaš izbor svetle ili tamne teme prikaza.",
              "preferred_language (localStorage): Pamti vaš izabrani jezik (srpski ili engleski).",
              "ssolutions_cookie_consent_v1 (localStorage): Čuva vaš izbor u vezi sa kolačićima (saglasnost ili odbijanje).",
            ],
          },
          {
            title: "B. Analitički kolačići (Google Analytics 4) — SAMO UZ VAŠ PRISTANAK",
            paragraphs: [
              "Pomažu nam da razumemo kako posetioci interaguju sa sajtom (koje slajdove pregledaju, prosečno vreme zadržavanja), kako bismo poboljšali korisničko iskustvo. Ovi kolačići su ISKLJUČENI po defaultu i aktiviraju se isključivo ako kliknete 'Prihvati sve' ili ih uključite u podešavanjima.",
            ],
            items: [
              "_ga: Glavni kolačić koji Google Analytics koristi za razlikovanje jedinstvenih anonimnih korisnika (trajanje: do 2 godine ili do brisanja).",
              "_ga_*: Čuva stanje sesije i agregiranu statistiku korišćenja.",
            ],
          },
        ],
      },
      {
        id: "manage-cookies",
        title: "3. Kako možete upravljati kolačićima?",
        content: [
          "Svoj izbor možete promeniti u bilo kom trenutku klikom na dugme 'Podešavanja kolačića' koje je dostupno na dnu sajta (ili u meniju).",
          "Takođe možete blokirati ili obrisati kolačiće direktno u postavkama vašeg web pretraživača (Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge).",
        ],
      },
    ],
  },

  refund: {
    id: "refund",
    title: "Politika Povraćaja i Garancije Kvaliteta",
    lastUpdated: "Septembar 2026.",
    intro:
      "Transparentnost i međusobno poverenje su temelj našeg inženjerskog pristupa. Ova Politika uređuje garancije kvaliteta, faznu strukturu naplate i proceduru rešavanja reklamacija u skladu sa Zakonom o zaštiti potrošača i Zakonom o obligacionim odnosima Republike Srbije.",
    sections: [
      {
        id: "milestone-model",
        title: "1. Fazni model saradnje (Milestone princip)",
        content: [
          "Kako bi obe strane imale potpunu sigurnost i kontrolu nad projektom, svaki veći projekat podeljen je u precizne faze:",
          "Faza 1: Dijagnostika, analiza i funkcionalna specifikacija.",
          "Faza 2: UI/UX arhitektura i prototip (klijent pregleda i odobrava vizuelni i funkcionalni pravac).",
          "Faza 3: Inženjerski razvoj, programiranje i integracije.",
          "Faza 4: Testiranje, finalne revizije i lansiranje.",
          "Prelazak na sledeću fazu moguć je tek nakon što klijent pregleda i pisano potvrdi zadovoljstvo prethodnom fazom.",
        ],
      },
      {
        id: "revisions",
        title: "2. Uključene revizije i iteracije",
        content: [
          "Svaki dogovoreni projekat uključuje definisani krug revizija u svakoj fazi kako bi rešenje u potpunosti odgovaralo ciljevima biznisa.",
          "Ukoliko u toku rada klijent zatraži funkcionalnosti koje izlaze iz dogovorenog obima (out of scope), za njih se pre početka izrade priprema jasan aneks sa dodatnim rokom i cenom.",
        ],
      },
      {
        id: "warranty",
        title: "3. Tehnička garancija nakon lansiranja (Bug-Fixing)",
        content: [
          "Nakon puštanja sajta ili aplikacije u rad, obezbeđujemo minimalno 30 dana besplatne tehničke garancije tokom koje bez ikakve naknade otklanjamo sve uočene tehničke nedostatke ili greške koje su proistekle iz dogovorenog koda.",
        ],
      },
      {
        id: "complaints",
        title: "4. Pravo na reklamaciju i postupak rešavanja",
        content: [
          "Klijent ima pravo da uputi reklamaciju na email: ssolutionsrs@gmail.com.",
          "U skladu sa članom 56. Zakona o zaštiti potrošača, na svaku zaprimljenu reklamaciju odgovaramo u roku od najkasnije 8 dana od dana prijema, sa obrazloženim predlogom i rokom za rešavanje.",
        ],
      },
      {
        id: "cancellation",
        title: "5. Otkazivanje pre početka rada",
        content: [
          "Ukoliko klijent iz opravdanih razloga odustane od saradnje pre početka bilo kakvih operativnih radnji i pre utroška inženjerskih sati, uplaćeni avans se vraća u celosti, umanjen isključivo za stvarne provizije platnog prometa.",
          "Za faze koje su već realizovane, pregledane i pismeno odobrene, povraćaj sredstava nije primenjiv s obzirom na to da je intelektualni rad izvršen i klijent preuzima rezultate tog rada.",
        ],
      },
    ],
  },

  business: {
    id: "business",
    title: "Pravni Podaci o Poslovanju (Impressum)",
    lastUpdated: "Septembar 2026.",
    intro:
      "U skladu sa članom 6. Zakona o elektronskoj trgovini Republike Srbije ('Sl. glasnik RS', br. 41/2009, 95/2013 i 52/2019), u nastavku su transparentno navedeni identifikacioni i kontakt podaci pružaoca usluga informacionog društva.",
    sections: [
      {
        id: "details",
        title: "1. Osnovni poslovni podaci",
        content: [
          "Naziv brenda / Poslovno ime: SSolutions (Web Strategija & Inženjering)",
          "Osnivač i vodeći inženjer: Stevan Sretenović",
          "Pravna forma: Samostalna profesionalna delatnost (Web razvoj i konsalting) / Registrovani preduzetnik u postupku usklađivanja",
          "Sedište: Čačak / Beograd, Republika Srbija",
          "Glavna delatnost: 62.01 — Računarsko programiranje i prateće konsultantske delatnosti informacionih tehnologija (62.02)",
          "Zvanični kontakt email: ssolutionsrs@gmail.com",
          "Telefon / Direktna linija: Dostupna registrovanim klijentima putem zakazanog audio/video poziva ili WhatsApp/Viber kanala",
          "Radno vreme za upite: Ponedeljak – Petak: 09:00 – 17:00 CET",
        ],
      },
      {
        id: "regulators",
        title: "2. Nadzorni organi",
        content: [
          "Nadzor nad primenom propisa o zaštiti ličnih podataka: Poverenik za informacije od javnog značaja i zaštitu podataka o ličnosti (Bulevar kralja Aleksandra 15, 11000 Beograd, www.poverenik.rs)",
          "Nadzor nad primenom propisa o elektronskoj trgovini i zaštiti potrošača: Ministarstvo unutrašnje i spoljne trgovine Republike Srbije — Sektor za zaštitu potrošača i Tržišna inspekcija (Nemanjina 22-26, 11000 Beograd, www.must.gov.rs)",
        ],
      },
      {
        id: "hosting",
        title: "3. Tehnički podaci o hostingu sajta",
        content: [
          "Web infrastruktura se izvršava na visoko bezbednim evropskim cloud serverima koji ispunjavaju ISO 27001 i GDPR standarde bezbednosti.",
          "Sav saobraćaj je zaštićen modernim SSL/TLS enkripcijskim protokolima.",
        ],
      },
    ],
  },
};

export const legalContentEn: Record<string, LegalDocument> = {
  privacy: {
    id: "privacy",
    title: "Privacy Policy (Data Protection)",
    lastUpdated: "September 2026",
    intro:
      "This Privacy Policy outlines how SSolutions ('Controller', 'we', 'our') collects, processes, stores, and protects personal data from website visitors and prospective clients in full compliance with the Serbian Personal Data Protection Act (ZZPL) and the EU General Data Protection Regulation (GDPR, Regulation EU 2016/679).",
    sections: [
      {
        id: "controller",
        title: "1. Data Controller & Contact Details",
        content: [
          "The Data Controller responsible for your personal data is:",
          "Entity: SSolutions (Digital Strategy, UX Architecture & Web Engineering)",
          "Founder & Lead Consultant: Stevan Sretenovic",
          "Location: Cacak / Belgrade, Republic of Serbia",
          "Privacy & Data Inquiries Email: ssolutionsrs@gmail.com",
          "You may reach out at any time to exercise your data subject rights, request access, or revoke consent.",
        ],
      },
      {
        id: "principles",
        title: "2. Core Principles & Data Minimization",
        content: [
          "We adhere strictly to the principles of lawfulness, fairness, transparency, purpose limitation, data minimization, accuracy, storage limitation, integrity, and confidentiality.",
          "We collect only the bare minimum of data necessary to provide accurate consulting feedback. We never collect sensitive personal data.",
        ],
      },
      {
        id: "data-collected",
        title: "3. Data Collected & Purpose",
        content: [
          "When you submit a business audit request or contact inquiry, we collect:",
        ],
        subsections: [
          {
            title: "A. Information you voluntarily provide:",
            items: [
              "Full Name / Contact Person: To identify you and personalize our communications.",
              "Business Email: To send audit insights, discuss technical requirements, and respond.",
              "Phone Number (strictly optional): Only used to schedule a call if you prefer phone communication.",
              "Company Name & Website/Social URL: To inspect your existing digital footprint prior to our call.",
              "Project Goals & Operational Bottlenecks: To understand the commercial context of your inquiry.",
            ],
          },
          {
            title: "B. Technical Data & Cookies:",
            items: [
              "Essential technical preferences (chosen color theme, chosen language, cookie consent status) stored locally in your browser's localStorage.",
              "Aggregated Analytics (Google Analytics 4): Activated ONLY if you explicitly consent via our cookie banner. All IP addresses are anonymized.",
              "Visit statistics (Vercel Web Analytics): cookieless and stores no personal data; it counts visits and page views using an anonymous identifier that is discarded every 24 hours.",
            ],
          },
        ],
      },
      {
        id: "legal-basis",
        title: "4. Legal Grounds for Processing",
        content: [
          "Our processing is legally grounded in:",
          "1. Consent (Art. 6(1)(a) GDPR / Art. 12(1)(1) ZZPL): When you check the consent box on our forms or accept analytics cookies.",
          "2. Pre-contractual steps (Art. 6(1)(b) GDPR / Art. 12(1)(2) ZZPL): To prepare an audit, proposal, or scope estimation upon your request.",
          "3. Legitimate interest (Art. 6(1)(f) GDPR / Art. 12(1)(6) ZZPL): Maintaining platform integrity and preventing spam/abuse.",
        ],
      },
      {
        id: "retention",
        title: "5. Data Retention",
        content: [
          "Inquiry and audit form submissions are retained for up to 24 months to maintain commercial context, or until you request deletion.",
          "Contractual and accounting records resulting from formal engagements are retained in accordance with statutory accounting obligations.",
        ],
      },
      {
        id: "third-parties",
        title: "6. Third-Party Sharing",
        content: [
          "We NEVER sell, lease, or monetize your personal data with third-party advertisers.",
          "Data is accessed solely by trusted infrastructure providers (cloud hosting, encrypted email services, and analytics providers upon explicit consent) under strict data processing standards.",
        ],
      },
      {
        id: "rights",
        title: "7. Your Legal Rights",
        content: [
          "Under GDPR and ZZPL, you have the right to:",
        ],
        subsections: [
          {
            title: "Data Subject Rights:",
            items: [
              "Right of Access: Request confirmation and a copy of your stored personal data.",
              "Right to Rectification: Correct inaccurate or outdated details.",
              "Right to Erasure ('Right to be Forgotten'): Request permanent deletion of your data.",
              "Right to Restriction of Processing: Limit processing under applicable legal conditions.",
              "Right to Data Portability: Receive your provided data in a structured, commonly used format.",
              "Right to Object: Object to processing based on legitimate interests.",
              "Right to Withdraw Consent: Revoke consent at any time without retroactive penalties.",
            ],
          },
        ],
      },
      {
        id: "supervisory",
        title: "8. Supervisory Authority",
        content: [
          "If you believe your privacy rights have been infringed, you have the right to lodge a complaint with the competent supervisory authority:",
          "Commissioner for Information of Public Importance and Personal Data Protection (Serbia): Bulevar kralja Aleksandra 15, Belgrade | office@poverenik.rs | www.poverenik.rs",
          "Or your local EU Data Protection Authority if you reside within the European Union.",
        ],
      },
    ],
  },

  terms: {
    id: "terms",
    title: "Terms and Conditions",
    lastUpdated: "September 2026",
    intro:
      "Welcome to SSolutions. These Terms and Conditions govern access to and usage of our website and consultative materials. By accessing this platform, you accept these terms in full.",
    sections: [
      {
        id: "purpose",
        title: "1. Purpose & Nature of Information",
        content: [
          "This site is consultative, educational, and showcase-oriented. It demonstrates UX architecture principles, case studies, and engineering capabilities.",
          "Content, interactive calculators, and simulation examples serve as educational models and do not constitute an automated commercial or financial guarantee for your specific business without an individual contract.",
        ],
      },
      {
        id: "ip",
        title: "2. Intellectual Property Rights",
        content: [
          "All intellectual property on this site—including text, diagrams, UI layouts, interactive decks, and source code—is owned by SSolutions (Stevan Sretenovic) or used under license.",
          "Unauthorized reproduction, redistribution, or commercial reuse without written permission is strictly prohibited.",
        ],
      },
      {
        id: "services-contracts",
        title: "3. Scope of Services & Engagements",
        content: [
          "All professional web development and consulting services are delivered exclusively under formal written agreements with defined milestones, pricing, and deliverables.",
          "Submitting an audit form does not create a binding service contract; it initiates an introductory discovery conversation.",
        ],
      },
      {
        id: "disclaimer",
        title: "4. Disclaimer & Honest Guarantees",
        content: [
          "We guarantee code quality, accessibility, speed optimization, and rigorous testing according to modern engineering standards.",
          "We do NOT make unsubstantiated claims (such as '#1 ranking overnight' or 'guaranteed 10x revenue'), as business growth is inherently tied to your overall product, market fit, customer service, and pricing strategy.",
        ],
      },
      {
        id: "governing-law",
        title: "5. Governing Law",
        content: [
          "These Terms are governed by the laws of the Republic of Serbia, with international protections applied where mandatory.",
        ],
      },
    ],
  },

  cookies: {
    id: "cookies",
    title: "Cookie Policy",
    lastUpdated: "September 2026",
    intro:
      "This Cookie Policy clarifies what cookies and browser storage technologies are utilized on this site, their functional purpose, and how you retain full control over them.",
    sections: [
      {
        id: "what-are-cookies",
        title: "1. What are Cookies and Local Storage?",
        content: [
          "A cookie is a small text file placed on your device upon visiting a website.",
          "We also utilize browser Local Storage to remember essential UX settings (such as light/dark theme preference) directly on your client device.",
        ],
      },
      {
        id: "categories",
        title: "2. Categories of Storage & Cookies Used",
        content: [
          "We separate cookies into two clear classifications:",
        ],
        subsections: [
          {
            title: "A. Strictly Necessary (Technical) — ALWAYS ACTIVE",
            paragraphs: [
              "Required for core application functionality, slide navigation, and preserving your interface choices. Exempt from consent under privacy law.",
            ],
            items: [
              "theme (localStorage): Preserves your light or dark mode preference.",
              "preferred_language (localStorage): Preserves your language selection (Serbian or English).",
              "ssolutions_cookie_consent_v1 (localStorage): Saves your cookie consent choice.",
            ],
          },
          {
            title: "B. Optional Analytics (Google Analytics 4) — ONLY WITH EXPLICIT CONSENT",
            paragraphs: [
              "Measures aggregated, anonymous visitor metrics to improve UX design. Completely disabled by default; activated only upon explicit consent.",
            ],
            items: [
              "_ga: Identifies unique anonymous sessions (up to 24 months).",
              "_ga_*: Tracks session state and aggregated analytics.",
            ],
          },
        ],
      },
      {
        id: "manage-cookies",
        title: "3. Managing Your Preferences",
        content: [
          "You may reopen cookie settings at any time using the 'Cookie Settings' button in our footer or navigation.",
          "You can also delete or block cookies directly via your browser's security settings.",
        ],
      },
    ],
  },

  refund: {
    id: "refund",
    title: "Refund & Milestone Guarantee Policy",
    lastUpdated: "September 2026",
    intro:
      "Engineering integrity and client alignment are our core values. This policy outlines our milestone approval model, revision cycles, and consumer warranty rights.",
    sections: [
      {
        id: "milestone-model",
        title: "1. Milestone-Based Execution",
        content: [
          "To guarantee transparency and eliminate risk, projects are structured into clear, sequential milestones:",
          "Milestone 1: Discovery, Diagnosis & Functional Specification.",
          "Milestone 2: UI/UX Architecture & Interactive Prototype (reviewed and approved before code begins).",
          "Milestone 3: Full-Stack Engineering, CMS setup & Integrations.",
          "Milestone 4: Performance Audit, QA testing & Launch.",
          "Each milestone requires explicit client review and sign-off before subsequent work proceeds.",
        ],
      },
      {
        id: "revisions",
        title: "2. Revisions & Scope Management",
        content: [
          "Standard scopes include dedicated revision rounds at each milestone. Any newly requested features outside the agreed Scope of Work are estimated transparently via written addenda.",
        ],
      },
      {
        id: "warranty",
        title: "3. 30-Day Post-Launch Technical Warranty",
        content: [
          "All custom builds include an unconditional 30-day post-launch bug-fixing warranty at zero additional cost to ensure seamless production reliability.",
        ],
      },
      {
        id: "complaints",
        title: "4. Complaints & Consumer Rights",
        content: [
          "Inquiries and formal feedback may be submitted to: ssolutionsrs@gmail.com.",
          "Formal complaints are addressed within 8 business days with an actionable resolution timeline.",
        ],
      },
      {
        id: "cancellation",
        title: "5. Cancellation & Advance Payments",
        content: [
          "If a client cancels before operational work has started, any advance deposit is refunded in full (excluding minor transaction fees).",
          "For completed milestones that have already received client approval and sign-off, payments reflect delivered intellectual property and are non-refundable.",
        ],
      },
    ],
  },

  business: {
    id: "business",
    title: "Business Details (Impressum / Legal Notice)",
    lastUpdated: "September 2026",
    intro:
      "In compliance with statutory electronic commerce regulations, below are the official business and provider disclosures for SSolutions.",
    sections: [
      {
        id: "details",
        title: "1. Official Business Information",
        content: [
          "Brand & Commercial Name: SSolutions (Web Strategy & Engineering)",
          "Founder & Principal Consultant: Stevan Sretenovic",
          "Legal Form: Professional Consulting & Development Services / Registered Sole Proprietorship",
          "Headquarters: Cacak / Belgrade, Republic of Serbia",
          "Primary Activity: 62.01 Computer Programming & IT Consulting (62.02)",
          "Direct Contact Email: ssolutionsrs@gmail.com",
          "Direct Line: Available to registered clients via scheduled call or WhatsApp/Viber channels",
          "Business Hours: Monday – Friday: 09:00 – 17:00 CET",
        ],
      },
      {
        id: "regulators",
        title: "2. Regulatory & Supervisory Bodies",
        content: [
          "Data Protection Authority: Commissioner for Information of Public Importance and Personal Data Protection (Bulevar kralja Aleksandra 15, Belgrade, Serbia | www.poverenik.rs)",
          "Electronic Commerce & Market Inspection: Ministry of Domestic and Foreign Trade of the Republic of Serbia (Nemanjina 22-26, Belgrade | www.must.gov.rs)",
        ],
      },
      {
        id: "hosting",
        title: "3. Technical Infrastructure",
        content: [
          "Website infrastructure is hosted on ISO 27001-certified European cloud facilities with strict SSL/TLS 256-bit encryption.",
        ],
      },
    ],
  },
};
