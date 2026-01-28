import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo-riakeo.png"
                alt="Riakeo Fireworks"
                width={140}
                height={42}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sveriges ledande fyrverkerileverantör. Högkvalitativa fyrverkerier
              för återförsäljare och evenemang.
            </p>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Sortiment
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/sortiment"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Alla produkter
                </Link>
              </li>
              <li>
                <Link
                  href="/sortiment/batterier"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Batterier
                </Link>
              </li>
              <li>
                <Link
                  href="/sortiment/compounds"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Compounds
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Företag
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/aterforsaljare"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Hitta återförsäljare
                </Link>
              </li>
              <li>
                <Link
                  href="/integritetspolicy"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Integritetspolicy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@riakeo.se"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  info@riakeo.se
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Riakeo Fireworks. Alla rättigheter förbehållna.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/integritetspolicy"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              Integritetspolicy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
