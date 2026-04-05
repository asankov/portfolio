const DockerSection = () => {
  return (
    <section id="docker" className="snap-section flex items-center justify-center px-6 py-20">
      <div className="mx-auto max-w-3xl w-full">
        <p className="mb-2 font-mono text-xs tracking-widest text-primary uppercase">
          // work experience
        </p>
        <h1 className="mb-2 text-4xl font-bold text-foreground sm:text-5xl">Docker / Mirantis</h1>
        <p className="mb-10 font-mono text-sm text-muted-foreground">Software Engineer · August 2019 — June 2020</p>

        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>Joined Docker, because I was bored of writing payment processing software in Java and wanted to do something more technical.</p>

          <p>At that time, Containers and Kubernetes were getting quite popular and luckily for me, Docker were opening an office in Bulgaria.</p>

          <p>Unfortunately, Docker EE was acquired a few months after I joined and a lot of things changes afterwards. After a while it was obvious that all products are in maintenance mode, so I left.</p>
          <h3 className="text-xl font-bold text-foreground">The Job</h3>

          <ul className="list-disc pl-6 space-y-1">
            <li>Joined a distributed team (Sofia-SF-Canada) that was working on a new product, part of Docker Enterprise (Docker EE) stack</li>
            <li>The product was a Multi-cloud Kubernetes fleet management solution</li>
            <li>After the Mirantis acquistion, the product was scrapped</li>
            <li>Then I worked on integrating some of the Docker EE products into the Mirantis portfolio (UCP, Launchpad)</li>
          </ul>

          <h3 className="text-xl font-bold text-foreground">The Challenges</h3>

          <div className="space-y-0 divide-y divide-border">
            {[
              {
                type: "Technical",
                problem: "Understanding complex technical products and use-cases",
                solution: "Some late nights, a lot of reading, a lot of talking with other colleagues that knew more than I did.",
              },
              {
                type: "Non-Technical",
                problem: "Working on a distributed team with people I did not know",
                solution: "Try to get to know the people, always assume good intentions and be emphatic.",
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
                what: "Joined my dream company",
                why: "I had started learning about container a few months before, so joining the company that invented containers as they are today, was a dream come true at the time",
              },
              {
                what: "Navigating hard times",
                why: "After the acquisition nobody knew what was going to happen. To make things worse, a few months after that the pandemic hit and brought even more unknowns. We just kept our heads down and continued doing our best during all that time.",
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
          {["docker-ucp-001.png", "docker-ucp-002.webp"].map((img) => (
            <img
              key={img}
              src={`/${img}`}
              alt={img}
              className="rounded-lg border border-border w-full object-cover"
            />
          ))}
        </div>

        <h3 className="text-xl font-bold text-foreground pt-5">Tech Stack</h3>

        <div className="mt-4 flex flex-wrap gap-2">
          {["Go", "Kubernetes", "AWS", "Distributed Systems", "PostgreSQL"].map((tag) => (
            <span key={tag} className="rounded border border-foreground/40 px-3 py-1 font-mono text-xs text-foreground">
              {tag}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DockerSection;
