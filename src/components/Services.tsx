export default function Services() {
  const services = [
    {
      title: "Grossistleveranser",
      description: "Vi levererar fyrverkerier i stora volymer till återförsäljare i hela Sverige. Konkurrenskraftiga priser och snabb leverans.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      title: "Evenemangsservice",
      description: "Professionell rådgivning och leverans för stora evenemang, nyårsfiranden och speciella tillfällen.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: "Säkerhet & Kvalitet",
      description: "Alla våra produkter uppfyller EU:s säkerhetskrav och är certifierade för den svenska marknaden.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Produktsortiment",
      description: "Ett brett urval av raketer, batterier, fontäner, romerska ljus och mycket mer för alla tillfällen.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="tjanster" className="py-32 lg:py-40 bg-[var(--background-secondary)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16 lg:mb-24 space-y-4">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[var(--accent)]">
            Våra tjänster
          </p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[var(--foreground)]">
            Vad vi
            <br />
            <span className="font-semibold">erbjuder</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 lg:p-10 bg-[var(--background)] rounded-2xl border border-[var(--border)] hover:border-[var(--accent)]/30 transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] group-hover:bg-[var(--accent)]/20 transition-colors">
                  {service.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-[var(--foreground)]">
                    {service.title}
                  </h3>
                  <p className="text-[var(--foreground-muted)] font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
