export default function About() {
  const stats = [
    { value: "15+", label: "År i branschen" },
    { value: "500+", label: "Återförsäljare" },
    { value: "100%", label: "Kvalitetsfokus" },
  ];

  return (
    <section id="om-oss" className="py-32 lg:py-40 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-[var(--accent)]">
                Om Riakeo
              </p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[var(--foreground)]">
                Passion för
                <br />
                <span className="font-semibold">pyroteknik</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-[var(--foreground-muted)] font-light leading-relaxed">
              <p>
                Riakeo Fireworks är en ledande leverantör av fyrverkerier i Sverige. 
                Med över 15 års erfarenhet i branschen har vi byggt upp ett starkt 
                nätverk av tillförlitliga partners och återförsäljare.
              </p>
              <p>
                Vi fokuserar på kvalitet, säkerhet och innovation. Varje produkt 
                i vårt sortiment är noggrant utvald för att ge den bästa upplevelsen 
                för slutkunden.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="relative p-6 lg:p-8 bg-[var(--background-secondary)] rounded-2xl border border-[var(--border)] hover:border-[var(--border-hover)] transition-colors group"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-2">
                  <p className="text-3xl lg:text-4xl font-semibold text-[var(--accent)]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
