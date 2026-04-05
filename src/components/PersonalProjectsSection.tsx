const linkClass = "flex items-center gap-2 rounded border border-primary px-3 py-1 font-mono text-xs text-primary transition-colors hover:bg-primary hover:text-background";

const projects = [
  {
    name: "My Blog",
    description: "My personal blog where I write about AI, Go, Kubernetes, and everything in between.",
    links: [
      { label: "GitHub", href: "https://github.com/asankov/asankov.github.io" },
      { label: "Website", href: "https://asankov.dev/" },
    ],
  },
  {
    name: "Our F1 Journey",
    description: "A tracker for how many F1 races me and my fiancée have attended.",
    links: [
      { label: "GitHub", href: "https://github.com/asankov/f1-race-tracker" },
      { label: "Website", href: "https://ourf1journey.com/" },
    ],
  },
  {
    name: "Goodbricks",
    description: "A tracker for how much Lego I've built.",
    links: [
      { label: "GitHub", href: "https://github.com/asankov/goodbricks" },
    ],
  },
  {
    name: "Wedding Site",
    description: "A website for our wedding, including RSVP functionality.",
    links: [
      { label: "GitHub", href: "https://github.com/asankov/vasilena-anton-s-wedding-site" },
      { label: "Website", href: "https://vasilena-anton.wedding/" },
    ],
  },
  {
    name: "This Site",
    description: "This portfolio website.",
    links: [
      { label: "GitHub", href: "https://github.com/asankov/portfolio" },
      { label: "Website", href: "https://portfolio.asankov.dev/" },

    ],
  },
];

const PersonalProjectsSection = () => {
  return (
    <section id="personal-projects" className="snap-section flex items-center justify-center px-6 py-20">
      <div className="mx-auto max-w-3xl w-full">
        <p className="mb-2 font-mono text-xs tracking-widest text-primary uppercase">
          // open source & side work
        </p>
        <h1 className="mb-10 text-4xl font-bold text-foreground sm:text-5xl">Personal Projects</h1>

        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I am a builder at heart, so when I am not building something at work, I am building something for myself.
            Sometimes it's to solve a problem, sometimes it's to experiment with some new technology.
          </p>
          <p>
            But it's always driven by curiosity and the simple joy of making something from nothing.
          </p>
        </div>

        <div className="mt-10 space-y-0 divide-y divide-border">
          {projects.map(({ name, description, links }) => (
            <div key={name} className="py-5">
              <h3 className="mb-1 text-lg font-semibold text-foreground">{name}</h3>
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
              {links.length > 0 && (
                <div className="flex gap-4">
                  {links.map(({ label, href }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {label === "GitHub" ? (
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      ) : (
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" />
                        </svg>
                      )}
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjectsSection;
