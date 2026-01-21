export default function Contact() {
  return (
    <section id="kontakt" className="py-32 lg:py-40 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-[var(--accent)]">
                Kontakt
              </p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[var(--foreground)]">
                Låt oss
                <br />
                <span className="font-semibold">prata</span>
              </h2>
            </div>
            
            <p className="text-[var(--foreground-muted)] font-light leading-relaxed max-w-md">
              Är du återförsäljare eller planerar ett stort evenemang? 
              Kontakta oss så hjälper vi dig hitta rätt produkter för dina behov.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--foreground-muted)]">E-post</p>
                  <a href="mailto:info@riakeo.se" className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors">
                    info@riakeo.se
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--foreground-muted)]">Telefon</p>
                  <a href="tel:+46701234567" className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors">
                    +46 70 123 45 67
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--foreground-muted)]">Adress</p>
                  <p className="text-[var(--foreground)]">
                    Stockholm, Sverige
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 lg:p-10 bg-[var(--background-secondary)] rounded-2xl border border-[var(--border)]">
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-[var(--foreground-muted)]">
                  Namn
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-muted)]/50 focus:outline-none focus:border-[var(--accent)] transition-colors"
                  placeholder="Ditt namn"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-[var(--foreground-muted)]">
                  E-post
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-muted)]/50 focus:outline-none focus:border-[var(--accent)] transition-colors"
                  placeholder="din@email.se"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm text-[var(--foreground-muted)]">
                  Företag
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-muted)]/50 focus:outline-none focus:border-[var(--accent)] transition-colors"
                  placeholder="Företagsnamn (valfritt)"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-[var(--foreground-muted)]">
                  Meddelande
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-muted)]/50 focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                  placeholder="Berätta om dina behov..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[var(--accent)] text-[var(--background)] font-medium rounded-full hover:bg-[var(--accent-light)] transition-all duration-300"
              >
                Skicka meddelande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
