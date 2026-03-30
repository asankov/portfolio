const AboutSection = () => {
  return (
    <section className="snap-section grid-bg flex items-center justify-center px-6">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
        {/* Left: Terminal-style card */}
        <div className="glow-border overflow-hidden rounded-lg border border-border bg-card">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-destructive" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">about.tsx</span>
          </div>
          <div className="p-6 font-mono text-sm leading-relaxed text-secondary-foreground">
            <p><span className="text-primary">const</span> engineer = {"{"}</p>
            <p className="pl-4"><span className="text-primary">name</span>: <span className="text-green-400">"John Doe"</span>,</p>
            <p className="pl-4"><span className="text-primary">role</span>: <span className="text-green-400">"Senior Web Engineer"</span>,</p>
            <p className="pl-4"><span className="text-primary">location</span>: <span className="text-green-400">"San Francisco, CA"</span>,</p>
            <p className="pl-4"><span className="text-primary">experience</span>: <span className="text-orange-400">8</span>,</p>
            <p className="pl-4"><span className="text-primary">passion</span>: <span className="text-green-400">"Crafting pixel-perfect UIs"</span>,</p>
            <p>{"};"}</p>
          </div>
        </div>

        {/* Right: Description */}
        <div>
          <p className="mb-2 font-mono text-xs tracking-widest text-primary uppercase">
            &lt;about&gt;
          </p>
          <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
            Engineering the web,<br />one component at a time.
          </h2>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            With 8+ years of experience in web development, I specialize in building 
            high-performance applications that scale. From startup MVPs to enterprise 
            platforms, I bring ideas to life with clean code and thoughtful architecture.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            I'm passionate about developer experience, design systems, and pushing 
            the boundaries of what's possible in the browser. When I'm not coding, 
            you'll find me contributing to open source or speaking at meetups.
          </p>
          <p className="mt-6 font-mono text-xs tracking-widest text-primary uppercase">
            &lt;/about&gt;
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
