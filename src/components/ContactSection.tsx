const ContactSection = () => {
  return (
    <section className="snap-section flex items-center justify-center px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-2 font-mono text-xs tracking-widest text-primary uppercase">
          // get in touch
        </p>
        <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-5xl">
          Let's build something<br />
          <span className="text-primary glow-text">together.</span>
        </h2>
        <p className="mb-10 text-lg text-muted-foreground">
          Currently open to new opportunities, freelance projects, and interesting collaborations. Drop me a line!
        </p>

        <a
          href="mailto:hello@johndoe.dev"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-mono text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg hover:shadow-primary/20"
        >
          hello@johndoe.dev
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        <div className="mt-12 flex items-center justify-center gap-8 font-mono text-sm text-muted-foreground">
          <a href="#" className="transition-colors hover:text-primary">GitHub</a>
          <span className="text-border">|</span>
          <a href="#" className="transition-colors hover:text-primary">LinkedIn</a>
          <span className="text-border">|</span>
          <a href="#" className="transition-colors hover:text-primary">Twitter</a>
        </div>

        <p className="mt-16 font-mono text-xs text-muted-foreground/50">
          © 2026 John Doe — Built with React & Tailwind
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
