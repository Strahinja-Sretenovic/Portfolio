import { useLanguage } from "../../context/LanguageContext";

export function SemanticSEOContent() {
  const { language } = useLanguage();
  const isSr = language === "sr";

  return (
    <div 
      id="seo-accessible-semantic-data"
      className="sr-only focus-within:not-sr-only focus-within:fixed focus-within:top-20 focus-within:left-4 focus-within:z-[90] focus-within:bg-white focus-within:dark:bg-slate-900 focus-within:p-6 focus-within:rounded-xl focus-within:shadow-2xl focus-within:max-w-2xl focus-within:max-h-[80vh] focus-within:overflow-y-auto"
      tabIndex={-1}
      aria-label={isSr ? "Tekstualni pregled usluga i sadržaja sajta za pretraživače i asistivne tehnologije" : "Textual summary of services and website content"}
    >
      {isSr ? (
        <article>
          <header>
            <h1>Izrada Web Sajtova Čačak & Beograd — SSolutions Web Dizajn, SEO & Programiranje</h1>
            <p>
              SSolutions je digitalna agencija specijalizovana za profesionalnu izradu sajtova, moderni web dizajn,
              tehničku SEO optimizaciju za Google i razvoj namenskih web aplikacija u Čačku, Beogradu i celoj Srbiji.
            </p>
          </header>

          <section>
            <h2>Usluge koje nudimo</h2>
            
            <h3>1. Izrada modernih web sajtova i web aplikacija (Web Development)</h3>
            <p>
              Razvijamo brze, bezbedne i prilagođene web sajtove koristeći najmodernije tehnologije: TypeScript, React,
              Next.js i Tailwind CSS. Naši sajtovi postižu 100/100 na Google PageSpeed testovima, učitavaju se za manje od 0.5 sekundi
              i pružaju besprekorno iskustvo na svim uređajima (mobilni telefoni, tableti, računari).
            </p>

            <h3>2. Web Dizajn i UI/UX Arhitektura</h3>
            <p>
              Projektujemo vizuelni identitet i korisničko iskustvo koje posetioce pretvara u kupce. Svaki detalj je strateški
              postavljen: od jasne hijerarhije poruka do intuitivne navigacije i ubedljivih poziva na akciju (CTA).
            </p>

            <h3>3. Tehnički SEO i Pozicioniranje na Google-u (Čačak, Beograd, Srbija)</h3>
            <p>
              Optimizujemo vaš sajt za najtraženije pretrage u vašoj delatnosti. Implementiramo Schema.org mikrodata strukturirane
              podatke, optimizujemo Google Business profil (Google Mape), ubrzavamo Core Web Vitals i gradimo stabilno organsko rangiranje.
            </p>

            <h3>4. Izrada Internet Prodavnica (E-Commerce)</h3>
            <p>
              Kreiramo pregledne i brze online prodavnice sa jednostavnom korpom, sigurnim plaćanjem i intuitivnim panelom za
              samostalno upravljanje artiklima, zalihama i porudžbinama.
            </p>

            <h3>5. Booking Sistemi i Automatizacija</h3>
            <p>
              Sistemi za automatsko zakazivanje termina za frizerske salone, ordinacije, agencije i restorane, sa integracijom
              kalendara i obaveštavanja klijenata putem SMS-a i emaila.
            </p>

            <h3>6. Redizajn i Održavanje Postojećih Sajtova</h3>
            <p>
              Ukoliko imate spor, zastareo ili neoptimizovan sajt, radimo kompletan audit, ubrzavanje, prilagođavanje mobilnim
              uređajima i redovnu tehničku podršku.
            </p>
          </section>

          <section>
            <h2>Zašto izabrati SSolutions za izradu sajta?</h2>
            <ul>
              <li><strong>Maksimalna brzina učitavanja:</strong> Sajtovi bez nepotrebnih dodataka i teških tema.</li>
              <li><strong>100% vlasništvo:</strong> Klijent dobija potpun pristup i vlasništvo nad kodom i domenom.</li>
              <li><strong>Jednostavan CMS:</strong> Lako samostalno menjanje tekstova, fotografija i cenovnika.</li>
              <li><strong>Transparentne cene:</strong> Fiksna procena pre početka izrade, bez skrivenih troškova.</li>
              <li><strong>Lokalna podrška:</strong> Dostupni za konsultacije u Čačku, Beogradu i online.</li>
            </ul>
          </section>

          <section>
            <h2>Gradovi i područja gde radimo</h2>
            <p>
              Pružamo usluge izrade sajtova za klijente u gradovima: Čačak, Beograd, Novi Sad, Kragujevac, Kraljevo, Užice, Niš,
              kao i za klijente iz dijaspore (Švajcarska, Nemačka, Austrija) i inostranstva.
            </p>
          </section>

          <section>
            <h2>Česta pitanja o izradi sajtova (FAQ)</h2>
            <dl>
              <dt><strong>Koliko košta izrada sajta?</strong></dt>
              <dd>Cena zavisi od tipa projekta (prezentacioni sajt, katalog, internet prodavnica ili web aplikacija). Nakon besplatne analize vaših potreba, dobijate tačnu ponudu sa fiksnim budžetom.</dd>
              
              <dt><strong>Koji je rok za izradu sajta?</strong></dt>
              <dd>Standardni prezentacioni sajt se završava u roku od 10 do 20 radnih dana, dok kompleksnije aplikacije i prodavnice zahtevaju 3 do 5 nedelja.</dd>

              <dt><strong>Da li radite SEO optimizaciju?</strong></dt>
              <dd>Da, svaki sajt koji izradimo ima ugrađenu tehničku i on-page SEO optimizaciju, prilagođene meta tagove, OpenGraph deljenje, mapu sajta (sitemap) i pripremu za lokalno Google rangiranje.</dd>

              <dt><strong>Mogu li samostalno menjati sadržaj na sajtu?</strong></dt>
              <dd>Da, obezbeđujemo intuitivan administrativni panel i video uputstvo kako biste u bilo kom trenutku mogli sami da izmenite cene, slike ili tekstove.</dd>
            </dl>
          </section>

          <footer>
            <h2>Kontaktirajte SSolutions</h2>
            <p>Zakažite besplatnu analizu vašeg digitalnog nastupa i konsultacije:</p>
            <p>Email: <a href="mailto:ssolutionsrs@gmail.com">ssolutionsrs@gmail.com</a></p>
            <p>Lokacija: Čačak / Beograd, Srbija</p>
          </footer>
        </article>
      ) : (
        <article>
          <header>
            <h1>Custom Web Development & UI/UX Design Serbia — SSolutions</h1>
            <p>
              SSolutions provides high-performance web development, modern UX/UI architecture, and technical SEO
              optimization for businesses in Serbia and internationally.
            </p>
          </header>

          <section>
            <h2>Our Core Web Engineering Services</h2>
            <h3>1. Custom Web Applications & Websites</h3>
            <p>Built with modern TypeScript, React, and Next.js for blazing 100/100 Google PageSpeed scores.</p>

            <h3>2. High-Conversion UX/UI Design</h3>
            <p>Designed to transform casual visitors into paying customers on mobile and desktop devices.</p>

            <h3>3. Technical SEO & Performance Tuning</h3>
            <p>Schema.org structured data, Core Web Vitals optimization, and Google Search Console indexing.</p>

            <h3>4. E-Commerce & Booking Platforms</h3>
            <p>Fast checkouts, inventory management, and automated booking systems.</p>
          </section>

          <footer>
            <p>Email: <a href="mailto:ssolutionsrs@gmail.com">ssolutionsrs@gmail.com</a></p>
            <p>Location: Serbia (Čačak & Belgrade)</p>
          </footer>
        </article>
      )}
    </div>
  );
}
