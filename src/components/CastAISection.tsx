const CastAISection = () => {
  return (
    <section id="cast-ai" className="snap-section flex items-center justify-center px-6 py-20">
      <div className="mx-auto max-w-3xl w-full">
        <p className="mb-2 font-mono text-xs tracking-widest text-primary uppercase">
          // work experience
        </p>
        <h1 className="mb-2 text-4xl font-bold text-foreground sm:text-5xl">Cast AI</h1>
        <p className="mb-10 font-mono text-sm text-muted-foreground">Staff AI Engineer · March 2024 — Present</p>

        <h2 className="mb-4 text-2xl font-bold text-foreground">Security Product team</h2>

        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Joined the company in March 2024 to work on the Security Product, part of Cast AI platform. I had already worked on a similar product in VMware Carbon Black and was passionate about that area.
          </p>
          <h3 className="text-xl font-bold text-foreground">The Job</h3>

            <ul className="list-disc pl-6 space-y-1">
            <li>Working on the backend that handles all incoming data from the client-side agent</li>
            <li>Working on the agent that runs client-side and collects the necessary data</li>
            <li>Working on the APIs that expose the data to the customers (including web-hooks for things like alerting)</li>
            <li>Any DevOps-ish work needed to support all of this</li>
            <li>Participating in on-call rotations for the product</li>
            <li>Collaborating with PMs and UX to define requirements</li>
            <li>Talking with customers to collect requirements and understand users' needs</li>
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
                type: "Technical",
                problem: "Storing these same big amounts of data and being able to serve them in a fast and reliable way.",
                solution: "Good schema design and indexing, database partitioning",
              },
              {
                type: "Non-Technical",
                problem: "Achieving a lot with a small team — the team was too small to compete with the big players.",
                solution: <>We focused on building only a small set of features, but <span className="font-bold">the right set of features</span>, for the users we were targeting.</>,
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
                what: "Grew to Staff Engineer",
                why: "Coming into the company as a Senior Engineer with experience from a similar product, expectations were alway high towards me. I managed to fulfil them and deserve the Staff Engineer title which gave me even more responsibilities.",
              },
              {
                what: "Learned from failure",
                why: "At the end, the product was not sustainable, so it went into maintanence mode. We learned valuable lessons from this experience, and I believe had we done some things differently, we outcome might have been different as well.",
              },
            ].map(({ what, why }, i) => (
              <div key={i} className="py-4">
                <p className="mb-1 font-mono text-xs text-primary uppercase tracking-widest">{what}</p>
                <p>{why}</p>
              </div>
            ))}
          </div>
        </div>

        <h3 className="text-xl font-bold text-foreground pt-2">Product Screenshots</h3>

        <div className="mt-10 flex flex-col gap-6">
          {["cast-ai-sec-001.png", "cast-ai-sec-002.png", "cast-ai-sec-003.png"].map((img) => (
            <img
              key={img}
              src={`/${img}`}
              alt={img}
              className="rounded-lg border border-border w-full object-cover"
            />
          ))}
        </div>

        <h2 className="mt-10 mb-4 text-2xl font-bold text-foreground">APA team</h2>

        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            In January 2025, I joined the APA (Application Performance Automation) team. This was a new team that was being formed with the goal to build AI agents that automate Kubernetes operations.
            These operations are stuff that our customers usually do by hand, and we wanted to have a product that leverages AI to help them automate them.
          </p>
          <p>
            I joined this team, because I was already interested in AI and how that can be used as an assistant to your daily job.
            There was also a business need to join this team, as the company was looking for experienced engineers, who were already familiar with the Cast AI platform to kick the ground running.
          </p>

          <h3 className="text-xl font-bold text-foreground">The Job</h3>

            <ul className="list-disc pl-6 space-y-1">
            <li>Experiment with AI models, see what is possible to be automated and what not (yet)</li>
            <li>Pick an AI framework to use for building these agents that would allow us to build agents fast and focus more on business logic and customer values vs. technical details</li>
            <li>Create production-ready agents that work reliably <span className="italic">most of the time</span></li>
            <li>Create the backend to handle all reporting and configuration logic</li>
            <li>Create good UX around these agents, e.g. seamless installation, good reporting, etc.</li>
          </ul>

          <h3 className="text-xl font-bold text-foreground pt-2">The Challenges</h3>


          <div className="space-y-0 divide-y divide-border">
            {[
              {
                type: "Technical",
                problem: "Making something non-deterministic by nature — deterministic.",
                solution: "Proper LLM testing (evals), inspection of results during dog-fooding, prompt engineering, etc.",
              },
              {
                type: "Technical",
                problem: "Implementing good user-experience around the installation and configuration of the product",
                solution: "By working with UX and customers to make sure that everything we do makes sense to the end user. Sometimes we defer from collecting a user input we need until the last moment we need it, to provent having a huge setup page with 10s of inputs.",
              },
              {
                type: "Non-Technical",
                problem: "Dealing with people's scepticism about AI automation.",
                solution: "By being realistic about what can do done and what now. We tried to never oversell the product. The main idea was always that the human is still in control, and this is an AI companion, not a replacement.",
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
                what: "Software Engineer -> AI Engineer",
                why: "In this new role I had to relearn half the stuff I knew about software engineering until now. For example, unit tests are now called 'evals' and cost a few cents to run.",
              },
              {
                what: "Defining and shipping a product from scratch",
                why: "We started literally from a blank sheet and an idea. Now we have a complete product and customers that pay for it.",
              },
              {
                what: "Not only AI Engineer, but also a UI Engineer",
                why: "With the rise of AI coding tools, and to not be slowed down, I also started writing UI code. Still not a UI expert, but so far nobody complained.",
              },
            ].map(({ what, why }, i) => (
              <div key={i} className="py-4">
                <p className="mb-1 font-mono text-xs text-primary uppercase tracking-widest">{what}</p>
                <p>{why}</p>
              </div>
            ))}
          </div>
        </div>

        <h3 className="text-xl font-bold text-foreground pt-2">Product Screenshots</h3>

        <div className="mt-10 flex flex-col gap-6">
          {["cast-ai-apa-001.png"].map((img) => (
            <img
              key={img}
              src={`/${img}`}
              alt={img}
              className="rounded-lg border border-border w-full object-cover"
            />
          ))}
        </div>

        <h3 className="text-xl font-bold text-foreground pt-5">Tech Stack</h3>

        <div className="mt-10 flex flex-wrap gap-2">
          {["Go", "Python", "Kubernetes", "AI", "GCP", "Distributed Systems", "Event-driven architecture", "PostgreSQL", "Clickhouse"].map((tag) => (
            <span key={tag} className="rounded border border-foreground/40 px-3 py-1 font-mono text-xs text-foreground">
              {tag}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CastAISection;
