import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Desktop Background */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/images/banners-heros/background-dator.jpg"
          alt="Riakeo Fireworks Background"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Mobile Background */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/images/banners-heros/background-mobile.jpg"
          alt="Riakeo Fireworks Background"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
      
      {/* Fire overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-[5] pointer-events-none">
        <Image
          src="/images/banners-heros/fire.png"
          alt=""
          width={1920}
          height={400}
          className="w-full h-auto object-cover object-bottom"
          priority
        />
      </div>
      
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-20">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/logo-riakeo.png"
            alt="Riakeo Fireworks"
            width={400}
            height={120}
            className="w-[280px] md:w-[400px] lg:w-[500px] h-auto"
            priority
          />
        </div>
        
        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-wide text-white italic drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          The New Generation of Fireworks
        </h1>
      </div>
    </section>
  );
}
