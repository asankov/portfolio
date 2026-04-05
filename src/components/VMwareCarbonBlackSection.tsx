const VMwareCarbonBlackSection = () => {
  return (
    <section id="vmware-carbon-black" className="snap-section flex items-center justify-center px-6 py-20">
      <div className="mx-auto max-w-3xl w-full">
        <p className="mb-2 font-mono text-xs tracking-widest text-primary uppercase">
          // work experience
        </p>
        <h1 className="mb-2 text-4xl font-bold text-foreground sm:text-5xl">VMware Carbon Black</h1>
        <p className="mb-10 font-mono text-sm text-muted-foreground">Senior Software Engineer · June 2020 — February 2024</p>

        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Joined VMware Carbon Black in June 2020.
          </p>
          <p>
            By that time it was obvious that Mirantis had put the Docker Enterprise products I was working on in maintenance mode and there was not much more to be gained from staying at that job.
          </p>
          <p>
            I still wanted to stay in the Container/Kubernetes ecosystem and VMware Carbon Black was a good choice, because they had just acquired Octarine - a Kubernetes Security startup and were looking for people with Kubernetes experience.
          </p>
          <p>
            Last, but not least, my bosses from Docker had moved to VMware Carbon Black as well, so joining them was almost a no-brainer at that point.
          </p>

          <h3 className="text-xl font-bold text-foreground">The Job</h3>

          <ul className="list-disc pl-6 space-y-1">
            <li>Working on the backend that handles all incoming data from the client-side agent</li>
            <li>Working on the agent that runs client-side and collects the necessary data</li>
            <li>Working on the APIs that expose the data to the customers</li>
            <li>Participating in on-call rotations for the product</li>
            <li>Collaborating with PMs and UX to define requirements</li>
          </ul>

          <h3 className="text-xl font-bold text-foreground">The Challenges</h3>

          <div className="space-y-0 divide-y divide-border">
            {[
              {
                type: "Technical",
                problem: "Processing big amounts of data in real-time to ensure timely detection of anomalies.",
                solution: "Event-driven architecture and eventual consistency, parallelize as much of the work as possible to enable quick scalling (both vertical and horizontal)",
              },
              {
                type: "Non-Technical",
                problem: "Navigate a big and bureaucratic org such as VMware",
                solution: "For some things, you just need to get used to them. Others you learn to manage in a way that it's annoying, but at least your work is not blocked by them.",
              },
            ].map(({ type, problem, solution }, i) => (
              <div key={i} className="py-4">
                <p className="mb-1 font-mono text-xs text-primary uppercase tracking-widest">{type}</p>
                <p className="mb-2"><span className="font-bold">Problem: </span>{problem}</p>
                <p><span className="font-bold">Solution: </span>{solution}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-foreground">Personal Wins</h3>

          <div className="space-y-0 divide-y divide-border">
            {[
              {
                what: "Grew a lot as an engineer",
                why: "Joined as a mid-level engineer with under 3 years of experience. Through consistently taking on hard problems, owning outcomes end-to-end, and not shying away from responsibility, I earned a promotion to Senior Engineer.",
              },
              {
                what: "Built a public-speaking portfolio",
                why: "By taking on challenging problems, there was interesting stuff to present at conferences. Company supported my goal of speaking at conferences, and I went to quite a few during that period, including ones in San Francisco, Barcelona and Edinburgh.",
              },
            ].map(({ what, why }, i) => (
              <div key={i} className="py-4">
                <p className="mb-1 font-mono text-xs text-primary uppercase tracking-widest">{what}</p>
                <p>{why}</p>
              </div>
            ))}
          </div>
        </div>

        <h3 className="text-xl font-bold text-foreground pt-2">Product Videos</h3>

        <div className="mt-4 flex flex-col gap-6">
          {[
            "https://www.youtube.com/embed/KrwON6Ncrlg",
            "https://www.youtube.com/embed/67L9gPEHjmU",
          ].map((src) => (
            <div key={src} className="relative w-full overflow-hidden rounded-lg border border-border" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={src}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-foreground pt-5">Tech Stack</h3>

        <div className="mt-4 flex flex-wrap gap-2">
          {["Go", "Kubernetes", "AWS", "Distributed Systems", "Event-driven architecture", "MongoDB"].map((tag) => (
            <span key={tag} className="rounded border border-foreground/40 px-3 py-1 font-mono text-xs text-foreground">
              {tag}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VMwareCarbonBlackSection;
