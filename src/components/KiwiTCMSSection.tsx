const KiwiTCMSSection = () => {
  return (
    <section id="kiwi-tcms" className="snap-section flex items-center justify-center px-6 py-20">
      <div className="mx-auto max-w-3xl w-full">
        <p className="mb-2 font-mono text-xs tracking-widest text-primary uppercase">
          // open source & side work
        </p>
        <h1 className="mb-2 text-4xl font-bold text-foreground sm:text-5xl">Kiwi TCMS</h1>
        <div className="mb-10 flex flex-col gap-3">
          <p className="font-mono text-sm text-muted-foreground">Core Team Member · December 2017 — June 2022</p>
          <div className="flex gap-3">
            <a
              href="https://github.com/kiwitcms/Kiwi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded border border-primary px-3 py-1 font-mono text-xs text-primary transition-colors hover:bg-primary hover:text-background"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://kiwitcms.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded border border-primary px-3 py-1 font-mono text-xs text-primary transition-colors hover:bg-primary hover:text-background"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" />
              </svg>
              Website
            </a>
          </div>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>Joined the project as a contributer after an invite by a friend, who had started maintaining the project.</p>

          <p>This was in the beginning of my career, so I joined it to get experience working on a real project.</p>

          <h3 className="text-xl font-bold text-foreground">My contributions</h3>

          <ul className="list-disc pl-6 space-y-1">
            <li>Worked on code quality and resolving 5000 pylint issues</li>
            <li>Designing and implementing Telemetry features from scratch</li>
            <li>Onboarding new team members and reviewing contributions</li>
            <li>Various fixes</li>
          </ul>

          <h3 className="text-xl font-bold text-foreground">Personal Wins</h3>

          <div className="space-y-0 divide-y divide-border">
            {[
              {
                what: "Worked on a real project that delivers real value",
                why: "Most personal open-source projects are just experiments and are almost never used, even by their authors. This one had real users from Day 1, so every new feature of fix delivered value to someone, and every bug introduces means someone would get annoyed.",
              },
              {
                what: "Visited conferences to represent the project",
                why: "Exposure was very important for us, so when we had the opportunity we travelled to conferences at home and abroad to present the project, host a booth and talk to potential users. Most notably attended FOSDEM, DevCamp and OpenFest among others.",
              },
            ].map(({ what, why }, i) => (
              <div key={i} className="py-4">
                <p className="mb-1 font-mono text-xs text-primary uppercase tracking-widest">{what}</p>
                <p>{why}</p>
              </div>
            ))}
          </div>
        </div>

        <h3 className="text-xl font-bold text-foreground pt-5">Product Screenshots</h3>

        <div className="mt-4 flex flex-col gap-6">
          <img
            src="https://kiwitcms.org/images/screenshots/001_central_dashboard.png"
            alt="Kiwi TCMS dashboard"
            className="rounded-lg border border-border w-full object-cover"
          />
        </div>

        <h3 className="text-xl font-bold text-foreground pt-5">Tech Stack</h3>

        <div className="mt-4 flex flex-wrap gap-2">
          {["Python", "Django", "SQL"].map((tag) => (
            <span key={tag} className="rounded border border-foreground/40 px-3 py-1 font-mono text-xs text-foreground">
              {tag}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default KiwiTCMSSection;
