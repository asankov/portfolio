import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="snap-section relative flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-40" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 text-center">
        <p className="mb-4 font-mono text-sm tracking-widest text-primary uppercase opacity-80">
          // hello world
        </p>
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl glow-text">
          John Doe
        </h1>
        <p className="mx-auto max-w-xl text-lg text-muted-foreground sm:text-xl">
          Web Engineer — Building fast, accessible, and beautiful digital experiences
        </p>
        <div className="mt-10 flex items-center justify-center gap-4 font-mono text-xs text-muted-foreground">
          <span className="rounded border border-border px-3 py-1">React</span>
          <span className="rounded border border-border px-3 py-1">TypeScript</span>
          <span className="rounded border border-border px-3 py-1">Node.js</span>
          <span className="rounded border border-border px-3 py-1">AWS</span>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce text-muted-foreground">
          <svg className="mx-auto h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
