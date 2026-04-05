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
          Anton Sankov
        </h1>
        <p className="mx-auto max-w-xl text-xl text-muted-foreground sm:text-2xl">
          Staff AI Engineer, building reliable distributed systems and production-grade AI
        </p>
        <div className="mt-10 flex items-center justify-center gap-4 font-mono text-xs text-foreground">
          <span className="rounded border border-foreground/40 px-3 py-1">Go</span>
          <span className="rounded border border-foreground/40 px-3 py-1">Python</span>
          <span className="rounded border border-foreground/40 px-3 py-1">Kubernetes</span>
          <span className="rounded border border-foreground/40 px-3 py-1">Distributed Systems</span>
          <span className="rounded border border-foreground/40 px-3 py-1">AI Engineering</span>
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
