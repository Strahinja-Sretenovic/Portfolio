export type Language = "sr" | "en";

export interface TranslationSchema {
  nav: {
    brandName: string;
    journey: string;
    diagnosis: string;
    process: string;
    results: string;
    yourBusiness: string;
    faq: string;
    ctaButton: string;
    langSr: string;
    langEn: string;
    themeLight: string;
    themeDark: string;
    menuOpen: string;
    menuClose: string;
    backToHome: string;
  };
  meta: {
    title: string;
    description: string;
  };
  common: {
    swipeHint: string;
    nextSlide: string;
    prevSlide: string;
    slideOf: string;
    close: string;
    back: string;
    loading: string;
    copied: string;
    openInNewTab: string;
    viewAllProjects: string;
    educationalExample: string;
    provenOutcome: string;
  };
  deck: {
    // 01 Opening
    opening: {
      eyebrow: string;
      title1: string;
      title2: string;
      question: string;
      support: string;
      cta: string;
      hint: string;
    };
    // 02 Choice
    choice: {
      title: string;
      badge: string;
      exampleQuery: string;
      businessA: {
        name: string;
        rating: string;
        reviews: string;
        status: string;
        highlight: string;
      };
      businessB: {
        name: string;
        rating: string;
        reviews: string;
        status: string;
        highlight: string;
      };
      businessC: {
        name: string;
        rating: string;
        reviews: string;
        status: string;
        highlight: string;
      };
      takeaway: string;
      support: string;
    };
    // 03 Customer Journey
    journey: {
      title: string;
      subtitle: string;
      steps: Array<{
        num: string;
        label: string;
        desc: string;
      }>;
    };
    // 04 Break
    break: {
      title: string;
      subtitle: string;
      points: Array<{
        num: string;
        title: string;
        desc: string;
      }>;
      punchline: string;
    };
    // 05 Diagnosis
    diagnosis: {
      title: string;
      subtitle: string;
      punchline: string;
      dimensions: Array<{
        code: string;
        name: string;
        question: string;
        details: string;
      }>;
    };
    // 06 Right Tool
    tool: {
      title: string;
      subtitle: string;
      punchline: string;
      matrix: Array<{
        problem: string;
        solution: string;
      }>;
    };
    // 07 Process
    process: {
      title: string;
      subtitle: string;
      punchline: string;
      punchlineSub: string;
      stages: Array<{
        num: string;
        code: string;
        title: string;
        phrase: string;
        deliverable: string;
      }>;
    };
    // 08 Proof
    proof: {
      title: string;
      subtitle: string;
      project: {
        name: string;
        tag: string;
        problemLabel: string;
        problem: string;
        decisionLabel: string;
        decision: string;
        executionLabel: string;
        execution: string;
        outcomeLabel: string;
        outcome: string;
        liveUrl: string;
        viewLive: string;
      };
      viewMore: string;
    };
    // 09 Radical Honesty
    honesty: {
      question: string;
      answer: string;
      support: string;
      goal1: string;
      goal2: string;
    };
    // 10 Your Business / Form Slide Intro
    yourBusiness: {
      title: string;
      action: string;
      support: string;
      cta: string;
      disclaimer: string;
    };
    // Qualification Form
    form: {
      badge: string;
      stepIndicator: string;
      step1: {
        title: string;
        placeholder: string;
        helper: string;
      };
      step2: {
        title: string;
        placeholder: string;
        helper: string;
      };
      step3: {
        title: string;
        helper: string;
        goals: Array<{
          id: string;
          label: string;
        }>;
      };
      step4: {
        title: string;
        placeholder: string;
        helper: string;
      };
      step5: {
        title: string;
        namePlaceholder: string;
        emailPlaceholder: string;
        phonePlaceholder: string;
      };
      backBtn: string;
      nextBtn: string;
      submitBtn: string;
      submittingBtn: string;
      success: {
        title: string;
        subtitle: string;
        desc: string;
        resetBtn: string;
      };
      errors: {
        businessNameRequired: string;
        goalRequired: string;
        contactRequired: string;
        genericError: string;
      };
    };
  };
  // Mobile 7-Frame Edits
  mobile: {
    f1: {
      eyebrow: string;
      title: string;
      question: string;
      cta: string;
      swipeHint: string;
    };
    f2: {
      title: string;
      subtitle: string;
      summary: string;
    };
    f3: {
      title: string;
      points: string[];
      punchline: string;
    };
    f4: {
      title: string;
      subtitle: string;
      categories: Array<{ name: string; question: string }>;
    };
    f5: {
      title: string;
      steps: Array<{ code: string; phrase: string }>;
    };
    f6: {
      title: string;
      projectHighlight: string;
      honestyTakeaway: string;
    };
    f7: {
      title: string;
      action: string;
      cta: string;
    };
  };
  // Tablet 8-Frame Edits
  tablet: {
    f1: { eyebrow: string; title: string; question: string; cta: string };
    f2: { title: string; subtitle: string };
    f3: { title: string; subtitle: string };
    f4: { title: string; punchline: string };
    f5: { title: string; punchline: string };
    f6: { title: string; punchline: string };
    f7: { title: string; honesty: string };
    f8: { title: string; cta: string };
  };
  faq: {
    title: string;
    subtitle: string;
    badge: string;
    ctaText: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  contact: {
    title: string;
    directChat: string;
    emailUs: string;
    callUs: string;
    whatsapp: string;
    viber: string;
    copied: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  sr: {
    nav: {
      brandName: "SSolutions",
      journey: "Put kupca",
      diagnosis: "Dijagnostika",
      process: "Proces",
      results: "Rezultati",
      yourBusiness: "Vaš biznis",
      faq: "FAQ",
      ctaButton: "Zatražite analizu",
      langSr: "SR",
      langEn: "EN",
      themeLight: "Svetla tema",
      themeDark: "Tamna tema",
      menuOpen: "Otvori navigaciju",
      menuClose: "Zatvori navigaciju",
      backToHome: "Nazad na prezentaciju"
    },
    meta: {
      title: "SSolutions — Web Strategija, UX & Razvoj",
      description: "Ne počinjemo sajtom. Počinjemo problemom. Otkrijte gde gubite potencijalne klijente i implementirajte pravo rešenje."
    },
    common: {
      swipeHint: "Prevucite ulevo za nastavak →",
      nextSlide: "Sledeći slajd",
      prevSlide: "Prethodni slajd",
      slideOf: "od",
      close: "Zatvori",
      back: "Nazad",
      loading: "Učitavanje...",
      copied: "Kopirano u privremenu memoriju",
      openInNewTab: "Otvori u novom prozoru",
      viewAllProjects: "Pogledajte sve radove",
      educationalExample: "EDUKATIVNI PRIMER",
      provenOutcome: "OSTVARENI ISHOD"
    },
    deck: {
      opening: {
        eyebrow: "WEB STRATEGIJA • UX • DEVELOPMENT",
        title1: "Ne počinjemo sajtom.",
        title2: "Počinjemo problemom.",
        question: "Gde trenutno gubite potencijalnog klijenta?",
        support: "To prvo pokušavamo da otkrijemo.",
        cta: "Zatražite analizu",
        hint: "Nastavite →"
      },
      choice: {
        title: "Zamislite da ste vaš klijent.",
        badge: "EDUKATIVNI PRIMER",
        exampleQuery: "frizerski salon Čačak",
        businessA: {
          name: "Salon A",
          rating: "4.9 ★★★★★",
          reviews: "128 recenzija",
          status: "Kompletan profil & brze slike",
          highlight: "Direktan 1-klik booking"
        },
        businessB: {
          name: "Salon B",
          rating: "4.2 ★★★★☆",
          reviews: "14 recenzija",
          status: "Nema sajt, stari profil",
          highlight: "Samo fiksni telefon"
        },
        businessC: {
          name: "Salon C",
          rating: "3.8 ★★★☆☆",
          reviews: "4 recenzije",
          status: "Nepotpun profil",
          highlight: "Nema radno vreme"
        },
        takeaway: "Vaš potencijalni klijent već bira.",
        support: "I pre nego što je razgovarao sa vama."
      },
      journey: {
        title: "Svaki novi klijent prolazi kroz nekoliko odluka.",
        subtitle: "Pre nego što se javi, posetilac prolazi prirodan put procene.",
        steps: [
          { num: "01", label: "PRONALAZI VAS", desc: "Nalazi vas na Google pretragama, mapama ili preporukama." },
          { num: "02", label: "RAZUME PONUDU", desc: "U roku od 5 sekundi shvata tačno šta nudite i za koga je." },
          { num: "03", label: "STIČE POVERENJE", desc: "Vidi dokaze kvaliteta, reference, ocene i profesionalan izgled." },
          { num: "04", label: "PRAVI KORAK", desc: "Jednostavno zakazuje termin, šalje upit ili kupuje." },
          { num: "05", label: "POSTAJE KLIJENT", desc: "Pretvara se u zadovoljnog i lojalnog kupca vaših usluga." }
        ]
      },
      break: {
        title: "Negde ovde možete da ga izgubite.",
        subtitle: "Ako samo jedna karika popusti, posetilac prelazi kod konkurencije.",
        points: [
          { num: "01", title: "Ne pronalazi vas.", desc: "Niste vidljivi tamo gde ljudi aktivno traže vašu uslugu." },
          { num: "02", title: "Ne razume ponudu.", desc: "Sadržaj je generičan ili konfuzan, pa odlazi u roku od 5 sekundi." },
          { num: "03", title: "Ne veruje dovoljno.", desc: "Nedostaju recenzije, fotografije radova ili profesionalan dokaz stručnosti." },
          { num: "04", title: "Korak je komplikovan.", desc: "Formular je predugačak, nema 1-klik poziva ili je proces zakazivanja spor." }
        ],
        punchline: "Zato „treba nam novi sajt“ još nije dijagnoza."
      },
      diagnosis: {
        title: "Zato prvo tražimo uzrok.",
        subtitle: "Ne nagađamo. Analiziramo 5 ključnih stubova vašeg digitalnog nastupa.",
        punchline: "Ne menjamo sve. Menjamo ono što koči rezultat.",
        dimensions: [
          {
            code: "01",
            name: "VIDLJIVOST",
            question: "Da li vas pravi ljudi uopšte pronalaze?",
            details: "Google pretraga, lokalne mape, SEO pozicioniranje i relevantni digitalni kanali."
          },
          {
            code: "02",
            name: "JASNOĆA",
            question: "Da li ljudi brzo razumeju šta nudite i zašto je relevantno?",
            details: "Pozicioniranje ponude, informaciona arhitektura i hijerarhija ključnih poruka."
          },
          {
            code: "03",
            name: "POVERENJE",
            question: "Da li imaju dovoljno razloga da izaberu vas umesto drugih?",
            details: "Stvarni dokazi, ocene, preporuke, studije slučaja i profesionalna prezentacija."
          },
          {
            code: "04",
            name: "KONVERZIJA",
            question: "Da li je sledeći korak očigledan i jednostavan?",
            details: "Jasni pozivi na akciju, booking tokovi i uklanjanje svih prepreka do kontakta."
          },
          {
            code: "05",
            name: "PROCES / TEHNOLOGIJA",
            question: "Da li gubite vreme na stvari koje mogu biti jednostavnije?",
            details: "Automatizacija upita, brzo učitavanje koda, stabilnost i pouzdanost celog sistema."
          }
        ]
      },
      tool: {
        title: "Pravi problem određuje pravi alat.",
        subtitle: "Novi sajt je samo jedna od mogućih preporuka.",
        punchline: "Prvo identifikujemo stvarni problem, pa biramo precizan mehanizam.",
        matrix: [
          {
            problem: "Teško vas pronalaze na Google pretragama",
            solution: "SEO / Lokalna vidljivost & Optimizacija mapa"
          },
          {
            problem: "Ponuda i pozicioniranje su nejasni posetiocima",
            solution: "Strategija sadržaja / UX & Informaciona arhitektura"
          },
          {
            problem: "Nedostaju dokazi, ocene i poverenje u stručnost",
            solution: "Prezentacija radova / Dokazi / Studije slučaja"
          },
          {
            problem: "Posetioci pregledaju ponudu ali odlaze bez kontakta",
            solution: "CRO / Booking sistem / 1-klik kontakt"
          },
          {
            problem: "Previše ručnog rada i gubljenje vremena iza kulisa",
            solution: "Automatizacija procesa / Namenska web aplikacija"
          },
          {
            problem: "Postojeći sajt je zastareo, spor i ne donosi upite",
            solution: "Kompletan redizajn / Savremen i brz web sajt"
          }
        ]
      },
      process: {
        title: "Naš proces saradnje",
        subtitle: "Transparentan inženjerski tok u 6 faza sa jasnim ishodima.",
        punchline: "Launch nije kraj.",
        punchlineSub: "Tek tada dobijamo stvarne podatke i merimo rezultat.",
        stages: [
          {
            num: "01",
            code: "DISCOVERY",
            title: "Razumevanje",
            phrase: "Razumemo biznis.",
            deliverable: "Analiza problema i jasna dijagnoza"
          },
          {
            num: "02",
            code: "RESEARCH",
            title: "Istraživanje",
            phrase: "Tražimo dokaze.",
            deliverable: "Uvid u ponašanje kupaca i konkurenciju"
          },
          {
            num: "03",
            code: "STRATEGIJA",
            title: "Strategija",
            phrase: "Odlučujemo šta ima smisla.",
            deliverable: "Plan arhitekture i definisanje pravog alata"
          },
          {
            num: "04",
            code: "UX & DESIGN",
            title: "Dizajn",
            phrase: "Projektujemo najjasniji put.",
            deliverable: "Interaktivni prototip visokog poverenja"
          },
          {
            num: "05",
            code: "DEVELOPMENT",
            title: "Razvoj",
            phrase: "Gradimo pouzdan sistem.",
            deliverable: "Brz kod, CMS, optimizacije i integracije"
          },
          {
            num: "06",
            code: "MERENJE",
            title: "Merenje",
            phrase: "Proveravamo stvarni rezultat.",
            deliverable: "Analitika konverzija i kontinuirana podrška"
          }
        ]
      },
      proof: {
        title: "Ada Studio",
        subtitle: "Rešavanje problema premijum pozicioniranja i automatizacije galerije radova.",
        project: {
          name: "Ada Studio",
          tag: "ARHITEKTURA & DIZAJN ENTERIJERA",
          problemLabel: "PROBLEM",
          problem: "Prethodna prezentacija nije odražavala visok estetski nivo i radove je bilo teško redovno ažurirati.",
          decisionLabel: "ODLUKA",
          decision: "Kreirati minimalističku galeriju fokusiranu na visoku rezoluciju radova i intuitivan CMS.",
          executionLabel: "REALIZACIJA",
          execution: "Prilagođena arhitektura, brzo učitavanje slika, automatizovan prijem upita i SEO optimizacija.",
          outcomeLabel: "ISHOD",
          outcome: "Prezentacija koja odmah gradi poverenje kod premijum klijenata uz stalan priliv novih upita.",
          liveUrl: "https://adastudio.rs/",
          viewLive: "Pogledajte sajt uživo"
        },
        viewMore: "Pogledajte ostale projekte"
      },
      honesty: {
        question: "A šta ako vam novi sajt nije potreban?",
        answer: "Reći ćemo vam.",
        support: "Možda je pravi sledeći potez booking rešenje, Google profil, bolji sadržaj, automatizacija ili nekoliko preciznih izmena na postojećem sistemu.",
        goal1: "Cilj nije najveći projekat.",
        goal2: "Cilj je pravi sledeći potez."
      },
      yourBusiness: {
        title: "A šta se dešava kod vašeg biznisa?",
        action: "Hajde da pogledamo.",
        support: "Pre razgovora možemo da pregledamo vaš trenutni digitalni nastup kako bismo razgovor započeli konkretnim zapažanjima.",
        cta: "ZATRAŽITE POČETNU ANALIZU",
        disclaimer: "Početni pregled nije masovni generički izveštaj. Pripremamo ga ručno kako bismo razumeli vaš stvarni kontekst pre razgovora."
      },
      form: {
        badge: "KVALIFIKACIONA FORMA",
        stepIndicator: "Korak",
        step1: {
          title: "Kako se zove vaš biznis?",
          placeholder: "Npr. Ada Studio / Alfa Sistemi d.o.o.",
          helper: "Unesite zvaničan naziv kompanije ili brenda."
        },
        step2: {
          title: "Gde možemo da vas pogledamo?",
          placeholder: "Link ka sajtu, Instagram profil ili Google naziv",
          helper: "Bilo koji link gde posetioci trenutno dolaze u kontakt sa vama."
        },
        step3: {
          title: "Šta želite da poboljšate?",
          helper: "Izaberite jednu ili više opcija koje su vam u fokusu.",
          goals: [
            { id: "leads", label: "Više kvalitetnih upita" },
            { id: "google", label: "Google vidljivost & SEO" },
            { id: "new_site", label: "Novi moderan sajt" },
            { id: "existing_site", label: "Poboljšanje postojećeg sajta" },
            { id: "sales", label: "Online prodaja (E-commerce)" },
            { id: "booking", label: "Booking / Zakazivanje termina" },
            { id: "automation", label: "Automatizacija poslovanja" },
            { id: "app", label: "Namenska web aplikacija" },
            { id: "not_sure", label: "Nismo sigurni (treba nam savet)" }
          ]
        },
        step4: {
          title: "Šta trenutno najviše koči rezultat?",
          placeholder: "Opišite ukratko gde primećujete da gubite vreme ili klijente...",
          helper: "Napišite slobodnim rečima šta vas najviše frustrira u trenutnom procesu."
        },
        step5: {
          title: "Kako možemo da vam se javimo?",
          namePlaceholder: "Vaše ime i prezime *",
          emailPlaceholder: "Email adresa *",
          phonePlaceholder: "Broj telefona (opciono)"
        },
        backBtn: "Nazad",
        nextBtn: "Dalje",
        submitBtn: "ZATRAŽITE POČETNU ANALIZU",
        submittingBtn: "Šaljemo...",
        success: {
          title: "Hvala.",
          subtitle: "Sada radimo domaći.",
          desc: "Pregledaćemo informacije koje ste poslali kako bismo prvi razgovor započeli konkretnim zapažanjima.",
          resetBtn: "Pošaljite još jedan upit"
        },
        errors: {
          businessNameRequired: "Molimo unesite naziv vašeg biznisa.",
          goalRequired: "Izaberite bar jednu opciju.",
          contactRequired: "Molimo unesite vaše ime i validnu email adresu.",
          genericError: "Došlo je do greške. Pokušajte ponovo."
        }
      }
    },
    mobile: {
      f1: {
        eyebrow: "WEB STRATEGIJA • UX • DEV",
        title: "Ne počinjemo sajtom. Počinjemo problemom.",
        question: "Gde trenutno gubite klijente?",
        cta: "Zatražite analizu",
        swipeHint: "Prevucite ulevo →"
      },
      f2: {
        title: "Vaš klijent već bira.",
        subtitle: "Put odluke u 5 koraka",
        summary: "Pronalazi vas → Razume ponudu → Stiče poverenje → Reaguje → Postaje klijent."
      },
      f3: {
        title: "Gde najčešće nastaje prekid?",
        points: [
          "Ne pronalazi vas na pretrazi",
          "Ne razume vašu ponudu u 5s",
          "Nema dovoljno dokaza i poverenja",
          "Previše je komplikovano zakazati"
        ],
        punchline: "Zato „treba nam novi sajt“ još nije dijagnoza."
      },
      f4: {
        title: "Zato prvo tražimo uzrok.",
        subtitle: "5 ključnih dimenzija",
        categories: [
          { name: "Vidljivost", question: "Da li vas pravi ljudi pronalaze?" },
          { name: "Jasnoća", question: "Da li brzo razumeju vašu ponudu?" },
          { name: "Poverenje", question: "Da li imaju razlog da izaberu vas?" },
          { name: "Konverzija", question: "Da li je sledeći korak jednostavan?" },
          { name: "Proces", question: "Da li gubite vreme na administraciju?" }
        ]
      },
      f5: {
        title: "Naš proces saradnje",
        steps: [
          { code: "01 DISCOVERY", phrase: "Razumemo biznis i problem." },
          { code: "02 STRATEGIJA", phrase: "Određujemo pravi alat." },
          { code: "03 UX & DIZAJN", phrase: "Projektujemo najjasniji put." },
          { code: "04 DEVELOPMENT", phrase: "Gradimo brz i siguran kod." },
          { code: "05 MERENJE", phrase: "Proveravamo stvarni rezultat." }
        ]
      },
      f6: {
        title: "Ada Studio",
        projectHighlight: "Premijum portfolio i automatizovan prijem upita.",
        honestyTakeaway: "A ako vam novi sajt nije potreban? Reći ćemo vam. Cilj je pravi sledeći potez."
      },
      f7: {
        title: "A šta se dešava kod vašeg biznisa?",
        action: "Hajde da pogledamo.",
        cta: "ZATRAŽITE ANALIZU"
      }
    },
    tablet: {
      f1: {
        eyebrow: "WEB STRATEGIJA • UX • DEVELOPMENT",
        title: "Ne počinjemo sajtom. Počinjemo problemom.",
        question: "Gde trenutno gubite potencijalnog klijenta?",
        cta: "Zatražite analizu"
      },
      f2: {
        title: "Zamislite da ste vaš klijent.",
        subtitle: "Vaš potencijalni klijent već bira — i pre nego što je razgovarao sa vama."
      },
      f3: {
        title: "Svaki klijent prolazi kroz put odluke.",
        subtitle: "Pronalazi vas → Razume ponudu → Stiče poverenje → Pravi sledeći korak."
      },
      f4: {
        title: "Negde ovde možete da ga izgubite.",
        punchline: "Zato „treba nam novi sajt“ još nije dijagnoza."
      },
      f5: {
        title: "Zato prvo tražimo uzrok.",
        punchline: "Pravi problem određuje pravi alat."
      },
      f6: {
        title: "Naš inženjerski proces saradnje.",
        punchline: "Launch nije kraj — tek tada dobijamo stvarne podatke."
      },
      f7: {
        title: "Rezultati & Iskren savet",
        honesty: "A šta ako vam novi sajt nije potreban? Reći ćemo vam. Cilj je pravi sledeći potez."
      },
      f8: {
        title: "A šta se dešava kod vašeg biznisa?",
        cta: "ZATRAŽITE POČETNU ANALIZU"
      }
    },
    faq: {
      title: "Često postavljana pitanja",
      subtitle: "Transparentni odgovori o našem načinu rada, cenama i saradnji.",
      badge: "KONSULTANTSKI PRISTUP",
      ctaText: "Zatražite analizu vašeg biznisa",
      items: [
        {
          question: "Šta ako mi uopšte nije potreban novi sajt?",
          answer: "Iskreno ćemo vam reći. Ponekad je problem u loše podešenom Google profilu, nejasnoj strukturi ponude, odsustvu recenzija ili nepovezanom Instagramu. Ako jednostavne korekcije rešavaju problem, nema potrebe za velikim troškom novog sajta."
        },
        {
          question: "Zašto ne počinjete odmah dizajnom ili kodom?",
          answer: "Zato što je građenje pogrešne stvari najskuplja greška u poslovanju. Pre nego što napišemo liniju koda ili nacrtamo ekran, moramo tačno znati ko je vaš kupac, gde trenutno nastaje prekid i šta taj digitalni sistem mora da postigne."
        },
        {
          question: "Ko zapravo radi na mom projektu?",
          answer: "Radite direktno sa nama (inženjeri i konsultanti). Nema prebacivanja zadataka na neiskusne juniore, nema gubitka informacija kroz pet nivoa menadžera nalik velikim agencijama — potpuna inženjerska odgovornost i direktna komunikacija od početka do kraja."
        },
        {
          question: "Koliko košta i koliko traje izrada projekta?",
          answer: "Investicija i rok zavise od problema koji rešavamo: standardni strateški redizajn ili prezentacioni sajt traje 2–4 nedelje, dok namenske web aplikacije i automatizacije traju 3–6 nedelja. Nakon kratkog razgovora dobijate precizan predlog obima i fiksnu cenu bez skrivenih troškova."
        },
        {
          question: "Kako izgleda besplatna početna analiza?",
          answer: "Pošaljete link ka svom biznisu, a mi pre razgovora pregledamo vaš sajt, mobilno iskustvo, Google profil i konkurenciju. Na razgovoru (15–30 min) ne gledamo prodajne slajdove već odmah prelazimo na konkretna zapažanja i preporuke."
        },
        {
          question: "Da li smo vezani ugovorom ili mesečnim rentiranjem?",
          answer: "Ne. Dobijate 100% vlasnički, čist kod i jednostavan administrativni panel. Možete samostalno menjati cene i sadržaj. Za održavanje i tehničku podršku možete nas angažovati samo ako vi to želite."
        }
      ]
    },
    contact: {
      title: "Direktan kontakt",
      directChat: "Direktna poruka",
      emailUs: "Email kontakt",
      callUs: "Pozovite nas",
      whatsapp: "WhatsApp poruka",
      viber: "Viber poruka",
      copied: "Broj je kopiran u privremenu memoriju"
    }
  },
  en: {
    nav: {
      brandName: "SSolutions",
      journey: "Customer Journey",
      diagnosis: "Diagnosis",
      process: "Process",
      results: "Results",
      yourBusiness: "Your Business",
      faq: "FAQ",
      ctaButton: "Request Audit",
      langSr: "SR",
      langEn: "EN",
      themeLight: "Light Mode",
      themeDark: "Dark Mode",
      menuOpen: "Open Navigation",
      menuClose: "Close Navigation",
      backToHome: "Back to Presentation"
    },
    meta: {
      title: "SSolutions — Web Strategy, UX & Modern Development",
      description: "We don't start with a website. We start with the problem. Discover where you are losing potential customers and implement the right solution."
    },
    common: {
      swipeHint: "Swipe left to continue →",
      nextSlide: "Next Slide",
      prevSlide: "Previous Slide",
      slideOf: "of",
      close: "Close",
      back: "Back",
      loading: "Loading...",
      copied: "Copied to clipboard",
      openInNewTab: "Open in new tab",
      viewAllProjects: "View all projects",
      educationalExample: "EDUCATIONAL EXAMPLE",
      provenOutcome: "PROVEN OUTCOME"
    },
    deck: {
      opening: {
        eyebrow: "WEB STRATEGY • UX • DEVELOPMENT",
        title1: "We don't start with a website.",
        title2: "We start with the problem.",
        question: "Where are you losing potential customers?",
        support: "That is the first thing we uncover.",
        cta: "Request Initial Audit",
        hint: "Continue →"
      },
      choice: {
        title: "Imagine you are your customer.",
        badge: "EDUCATIONAL EXAMPLE",
        exampleQuery: "hair salon London",
        businessA: {
          name: "Studio A",
          rating: "4.9 ★★★★★",
          reviews: "128 reviews",
          status: "Verified profile & HD photos",
          highlight: "Direct 1-tap instant booking"
        },
        businessB: {
          name: "Studio B",
          rating: "4.2 ★★★★☆",
          reviews: "14 reviews",
          status: "No website, outdated photos",
          highlight: "Landline phone only"
        },
        businessC: {
          name: "Studio C",
          rating: "3.8 ★★★☆☆",
          reviews: "4 reviews",
          status: "Incomplete profile",
          highlight: "No operating hours"
        },
        takeaway: "Your potential customer is already choosing.",
        support: "Even before they ever speak with you."
      },
      journey: {
        title: "Every customer goes through a sequence of decisions.",
        subtitle: "Before reaching out, visitors navigate a natural evaluation process.",
        steps: [
          { num: "01", label: "FINDS YOU", desc: "Discovers your brand on Google search, local maps, or referrals." },
          { num: "02", label: "UNDERSTANDS", desc: "Instantly understands what you offer and who it is built for within 5 seconds." },
          { num: "03", label: "BUILDS TRUST", desc: "Sees real proof, case studies, reviews, and high-standard presentation." },
          { num: "04", label: "TAKES ACTION", desc: "Effortlessly books an appointment, submits an inquiry, or purchases." },
          { num: "05", label: "BECOMES CLIENT", desc: "Converts into a satisfied, recurring client for your business." }
        ]
      },
      break: {
        title: "Somewhere along this path, you might lose them.",
        subtitle: "If any single link breaks, the customer simply goes to a competitor.",
        points: [
          { num: "01", title: "They can't find you.", desc: "You are invisible where customers are actively searching for your service." },
          { num: "02", title: "They don't understand.", desc: "Your copy is vague or confusing, causing visitors to bounce in seconds." },
          { num: "03", title: "They don't trust enough.", desc: "Lack of verified reviews, project photos, or authoritative credibility." },
          { num: "04", title: "Next step is too hard.", desc: "Friction-heavy forms, missing click-to-call, or tedious booking hurdles." }
        ],
        punchline: "That is why \"we need a new website\" is not yet a diagnosis."
      },
      diagnosis: {
        title: "That is why we find the root cause first.",
        subtitle: "We don't guess. We inspect 5 fundamental pillars of your digital presence.",
        punchline: "We don't change everything. We change what restricts results.",
        dimensions: [
          {
            code: "01",
            name: "VISIBILITY",
            question: "Are the right people finding you at all?",
            details: "Google search indexing, local maps rankings, SEO architecture, and acquisition channels."
          },
          {
            code: "02",
            name: "CLARITY",
            question: "Do people quickly understand what you offer and why it matters?",
            details: "Offer positioning, information hierarchy, and crystal-clear value propositions."
          },
          {
            code: "03",
            name: "TRUST",
            question: "Do they have enough reasons to choose you over alternatives?",
            details: "Proof of work, authentic reviews, case studies, and authoritative presentation."
          },
          {
            code: "04",
            name: "CONVERSION",
            question: "Is the next step obvious, frictionless, and effortless?",
            details: "High-intent calls-to-action, streamlined booking, and zero checkout friction."
          },
          {
            code: "05",
            name: "PROCESS / TECH",
            question: "Are you wasting time on tasks that could be automated?",
            details: "Lead routing automation, ultra-fast code performance, security, and rock-solid stability."
          }
        ]
      },
      tool: {
        title: "The real problem determines the right tool.",
        subtitle: "A new website is just one of many possible recommendations.",
        punchline: "We pinpoint the actual high-leverage friction, then apply the right solution.",
        matrix: [
          {
            problem: "Hard to discover on Google search & local maps",
            solution: "SEO / Local Maps Visibility & GBP Optimization"
          },
          {
            problem: "Offer and positioning are vague to visitors",
            solution: "Content Strategy / Information Architecture & UX"
          },
          {
            problem: "Lacking proof, credibility, and authority",
            solution: "Case Studies / Proof Presentation & Testimonial UX"
          },
          {
            problem: "Visitors browse the site but leave without inquiring",
            solution: "CRO / Streamlined Booking / 1-Tap Direct Contact"
          },
          {
            problem: "Excessive manual work and administrative drag",
            solution: "Workflow Automation / Custom Web Application"
          },
          {
            problem: "Current website is technically obsolete and slow",
            solution: "Complete Modern Redesign / Ultra-Fast Web Platform"
          }
        ]
      },
      process: {
        title: "How we collaborate",
        subtitle: "A transparent 6-stage engineering flow with tangible outcomes.",
        punchline: "Launch is not the end.",
        punchlineSub: "That is when real performance data begins.",
        stages: [
          {
            num: "01",
            code: "DISCOVERY",
            title: "Discovery",
            phrase: "We understand the business.",
            deliverable: "Root problem analysis & clear diagnosis"
          },
          {
            num: "02",
            code: "RESEARCH",
            title: "Research",
            phrase: "We look for evidence.",
            deliverable: "Customer behavior audit & competitor insights"
          },
          {
            num: "03",
            code: "STRATEGY",
            title: "Strategy",
            phrase: "We decide what makes sense.",
            deliverable: "Architecture blueprint & right tool roadmap"
          },
          {
            num: "04",
            code: "UX & DESIGN",
            title: "UX Design",
            phrase: "We design the clearest path.",
            deliverable: "High-trust responsive interactive prototype"
          },
          {
            num: "05",
            code: "DEVELOPMENT",
            title: "Development",
            phrase: "We build reliable systems.",
            deliverable: "Production code, headless CMS & integrations"
          },
          {
            num: "06",
            code: "MEASUREMENT",
            title: "Measurement",
            phrase: "We verify real outcomes.",
            deliverable: "Conversion tracking & ongoing support"
          }
        ]
      },
      proof: {
        title: "Ada Studio",
        subtitle: "Solving high-ticket brand positioning and automated portfolio delivery.",
        project: {
          name: "Ada Studio",
          tag: "ARCHITECTURE & INTERIOR DESIGN",
          problemLabel: "PROBLEM",
          problem: "Previous presentation failed to reflect their high aesthetic caliber and was tedious to update.",
          decisionLabel: "DECISION",
          decision: "Build a minimalist gallery focused on high-resolution works with an intuitive CMS.",
          executionLabel: "EXECUTION",
          execution: "Custom architecture, lightning-fast media delivery, automated inquiry funnel, and strong SEO.",
          outcomeLabel: "OUTCOME",
          outcome: "Instant credibility with high-ticket clients and a steady flow of inbound organic inquiries.",
          liveUrl: "https://adastudio.rs/",
          viewLive: "View live website"
        },
        viewMore: "Explore all case studies"
      },
      honesty: {
        question: "What if you don't even need a new website?",
        answer: "We will tell you.",
        support: "Maybe the real next move is an optimized Google profile, a streamlined booking system, better copy, workflow automation, or a few targeted tweaks to your current setup.",
        goal1: "The goal is not the biggest project.",
        goal2: "The goal is the right next move."
      },
      yourBusiness: {
        title: "What is happening in your business?",
        action: "Let's take a look.",
        support: "Before our first call, we can review your current digital presence so we begin our conversation with concrete observations.",
        cta: "REQUEST INITIAL AUDIT",
        disclaimer: "Initial review is not an automated generic scan. We prepare it manually to understand your actual business context before speaking."
      },
      form: {
        badge: "QUALIFICATION FORM",
        stepIndicator: "Step",
        step1: {
          title: "What is the name of your business?",
          placeholder: "e.g. Acme Corp / Studio Design",
          helper: "Enter your official company or brand name."
        },
        step2: {
          title: "Where can we look at your current presence?",
          placeholder: "Website URL, Instagram handle, or Google Maps name",
          helper: "Any primary link where potential customers find you today."
        },
        step3: {
          title: "What do you want to improve?",
          helper: "Select one or more key priorities for your business.",
          goals: [
            { id: "leads", label: "More quality leads & clients" },
            { id: "google", label: "Google search visibility & SEO" },
            { id: "new_site", label: "New modern website" },
            { id: "existing_site", label: "Upgrade existing website" },
            { id: "sales", label: "Online sales (E-commerce)" },
            { id: "booking", label: "Streamlined booking system" },
            { id: "automation", label: "Workflow automation" },
            { id: "app", label: "Custom web application / Portal" },
            { id: "not_sure", label: "Not sure (need consultation)" }
          ]
        },
        step4: {
          title: "What is currently your biggest bottleneck?",
          placeholder: "Briefly describe where you feel clients drop off or where time is lost...",
          helper: "Feel free to describe what currently frustrates you most."
        },
        step5: {
          title: "How can we reach you?",
          namePlaceholder: "Your full name *",
          emailPlaceholder: "Email address *",
          phonePlaceholder: "Phone number (optional)"
        },
        backBtn: "Back",
        nextBtn: "Next",
        submitBtn: "REQUEST INITIAL AUDIT",
        submittingBtn: "Sending...",
        success: {
          title: "Thank you.",
          subtitle: "Now we do our homework.",
          desc: "We will review your submission so we can begin our first conversation with clear, concrete observations.",
          resetBtn: "Submit another inquiry"
        },
        errors: {
          businessNameRequired: "Please enter your business name.",
          goalRequired: "Please select at least one priority.",
          contactRequired: "Please provide your name and a valid email address.",
          genericError: "An error occurred. Please try again."
        }
      }
    },
    mobile: {
      f1: {
        eyebrow: "WEB STRATEGY • UX • DEV",
        title: "We don't start with a website. We start with the problem.",
        question: "Where are you losing clients?",
        cta: "Request Audit",
        swipeHint: "Swipe left →"
      },
      f2: {
        title: "Your customer is already choosing.",
        subtitle: "5-Step Decision Journey",
        summary: "Finds you → Understands offer → Builds trust → Takes action → Becomes client."
      },
      f3: {
        title: "Where do clients drop off?",
        points: [
          "Can't find you on search",
          "Don't understand your offer in 5s",
          "Lack sufficient proof & trust",
          "Booking process is too tedious"
        ],
        punchline: "That is why \"we need a new website\" is not yet a diagnosis."
      },
      f4: {
        title: "We find the root cause first.",
        subtitle: "5 core dimensions",
        categories: [
          { name: "Visibility", question: "Are the right people finding you?" },
          { name: "Clarity", question: "Do they quickly grasp your offer?" },
          { name: "Trust", question: "Do they have reasons to choose you?" },
          { name: "Conversion", question: "Is the next step effortless?" },
          { name: "Process", question: "Are you wasting hours on admin work?" }
        ]
      },
      f5: {
        title: "How we collaborate",
        steps: [
          { code: "01 DISCOVERY", phrase: "Understand the business and core bottleneck." },
          { code: "02 STRATEGY", phrase: "Determine the exact right tool." },
          { code: "03 UX DESIGN", phrase: "Design the clearest conversion path." },
          { code: "04 DEVELOPMENT", phrase: "Engineer fast, reliable code & CMS." },
          { code: "05 MEASUREMENT", phrase: "Verify real performance data." }
        ]
      },
      f6: {
        title: "Ada Studio",
        projectHighlight: "Premium portfolio and automated inbound inquiries.",
        honestyTakeaway: "What if you don't need a new site? We'll tell you. The goal is the right next move."
      },
      f7: {
        title: "What is happening in your business?",
        action: "Let's take a look.",
        cta: "REQUEST AUDIT"
      }
    },
    tablet: {
      f1: {
        eyebrow: "WEB STRATEGY • UX • DEVELOPMENT",
        title: "We don't start with a website. We start with the problem.",
        question: "Where are you losing potential customers?",
        cta: "Request Audit"
      },
      f2: {
        title: "Imagine you are your customer.",
        subtitle: "Your potential customer is already choosing — before speaking with you."
      },
      f3: {
        title: "Every customer follows a decision path.",
        subtitle: "Finds you → Understands offer → Builds trust → Takes the next step."
      },
      f4: {
        title: "Somewhere along this path, you might lose them.",
        punchline: "That is why \"we need a new website\" is not yet a diagnosis."
      },
      f5: {
        title: "That is why we find the root cause first.",
        punchline: "The real problem determines the right tool."
      },
      f6: {
        title: "Our engineering collaboration process.",
        punchline: "Launch is not the end — that is when real performance begins."
      },
      f7: {
        title: "Proof & Radical Honesty",
        honesty: "What if you don't need a new website? We will tell you. The goal is the right next move."
      },
      f8: {
        title: "What is happening in your business?",
        cta: "REQUEST INITIAL AUDIT"
      }
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Transparent answers about our engineering process, pricing, and consultation.",
      badge: "CONSULTING APPROACH",
      ctaText: "Request an audit for your business",
      items: [
        {
          question: "What if I don't actually need a new website?",
          answer: "We will tell you directly. Often the bottleneck is a poorly configured Google Business profile, unclear offer messaging, lack of reviews, or friction in booking. If a minor strategic tweak solves the issue, a full new build is unnecessary."
        },
        {
          question: "Why don't you start immediately with design or code?",
          answer: "Because building the wrong thing is the most expensive mistake in business. Before writing code or designing screens, we must diagnose the real bottleneck, understand your buyer, and define exact success criteria."
        },
        {
          question: "Who actually works on my project?",
          answer: "You work directly with us (engineers & consultants). No handoffs to inexperienced juniors, no lost-in-translation agency account managers — full engineering accountability and direct communication from start to launch."
        },
        {
          question: "How much does a project cost and how long does it take?",
          answer: "Investment and timeline depend on scope: a strategic redesign or authoritative presentation site takes 2–4 weeks, while custom web applications or automated booking systems take 3–6 weeks. Following our discovery session, you receive a clear scope and fixed-price commitment."
        },
        {
          question: "What happens during the free initial analysis?",
          answer: "You send your business link, and we inspect your mobile UX, search presence, competitor positioning, and conversion friction beforehand. On our call (15–30 mins), we bypass sales pitches and discuss actionable observations immediately."
        },
        {
          question: "Are we locked into monthly maintenance contracts?",
          answer: "No. You own 100% of your source code and have an intuitive CMS to update prices, photos, and copy freely. Ongoing technical maintenance is entirely optional."
        }
      ]
    },
    contact: {
      title: "Direct Contact",
      directChat: "Direct Message",
      emailUs: "Email Inquiry",
      callUs: "Call Us Directly",
      whatsapp: "WhatsApp Message",
      viber: "Viber Message",
      copied: "Phone number copied to clipboard"
    }
  }
};

/**
 * Translation helper hook providing typed translations
 */
export function useTranslations(lang: Language): TranslationSchema {
  return translations[lang] || translations.sr;
}
