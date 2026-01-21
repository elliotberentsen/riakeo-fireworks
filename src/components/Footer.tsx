import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[var(--background-secondary)] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-semibold tracking-tight text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
          >
            Riakeo<span className="text-[var(--accent)]">.</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <a href="#om-oss" className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors">
              Om oss
            </a>
            <a href="#tjanster" className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors">
              Tjänster
            </a>
            <a href="#kontakt" className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors">
              Kontakt
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-[var(--foreground-muted)]">
            © {currentYear} Riakeo Fireworks
          </p>
        </div>
      </div>
    </footer>
  );
}
