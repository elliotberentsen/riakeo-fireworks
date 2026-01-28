import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Integritetspolicy | Riakeo Fireworks",
  description: "Läs om hur Riakeo Fireworks hanterar din integritet och personuppgifter.",
};

export default function IntegritetspolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="h-12" />

      <article className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-20">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Hem
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Integritetspolicy</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Integritetspolicy
          </h1>
          <p className="text-gray-500">
            Senast uppdaterad: {new Date().toLocaleDateString("sv-SE", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Sammanfattning
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Riakeo Fireworks värnar om din integritet. Vår webbplats samlar inte in, 
              lagrar eller delar personuppgifter. Vi använder inga cookies, spårning 
              eller marknadsföringsverktyg.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Ingen datainsamling
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Vi samlar inte in någon personlig information när du besöker vår webbplats. 
              Du kan surfa på våra sidor helt anonymt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Cookies
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Vår webbplats använder inga cookies – varken förstaparts- eller 
              tredjepartscookies. Vi använder inte Google Analytics, Facebook Pixel 
              eller andra spårningsverktyg.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Karttjänst
            </h2>
            <p className="text-gray-600 leading-relaxed">
              För att visa våra återförsäljare på en karta använder vi Mapbox. 
              Kartorna laddas direkt från Mapbox servrar. Vi skickar ingen 
              personlig information till Mapbox och inga cookies sätts av denna tjänst.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Kontaktformulär
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Om du kontaktar oss via e-post eller telefon behandlar vi endast 
              den information du frivilligt delar med oss för att kunna besvara 
              din förfrågan. Vi delar aldrig din information med tredje part.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Externa länkar
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Vår webbplats kan innehålla länkar till externa webbplatser. 
              Vi ansvarar inte för innehållet eller integritetspolicyn på dessa sidor.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Ändringar
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Vi kan uppdatera denna policy vid behov. Eventuella ändringar 
              publiceras på denna sida med ett uppdaterat datum.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Kontakt
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Har du frågor om vår integritetspolicy? Kontakta oss på{" "}
              <a 
                href="mailto:info@riakeo.se" 
                className="text-gray-900 underline hover:text-red-600 transition-colors"
              >
                info@riakeo.se
              </a>
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </div>
  );
}
