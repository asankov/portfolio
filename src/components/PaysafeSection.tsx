const PaysafeSection = () => {
  return (
    <section id="paysafe" className="snap-section flex items-center justify-center px-6 py-20">
      <div className="mx-auto max-w-3xl w-full">
        <p className="mb-2 font-mono text-xs tracking-widest text-primary uppercase">
          // work experience
        </p>
        <h1 className="mb-2 text-4xl font-bold text-foreground sm:text-5xl">Paysafe</h1>
        <p className="mb-10 font-mono text-sm text-muted-foreground">Software Engineer · May 2018 — August 2019</p>

        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>My first real, non-internship job.</p>

          <p>Joined a newly-formed team, tasked with implementing crypto-currency exchange in Skrill and Neteller - the company's flagship digital wallets.</p>

          <p>The job was a mix of green-field work (the crypto-currency exchange functionality) and legacy code (integrating that into the wallets' code).</p>

          <h3 className="text-xl font-bold text-foreground">The Job</h3>

          <ul className="list-disc pl-6 space-y-1">
            <li>Implement a few micro-services from scratch that handle all the crypto-currency exchange logic</li>
            <li>Integrate this functionality into the existing products <span className="italic">(without breaking any of the existing logic)</span></li>
            <li>Implementing APIs with multiple consumers and multiple versions (web, iOS app, Android app), so we always had to have backwards-compatibility in mind</li>
            <li>Implement the UI for all of this</li>
          <li>Collaborating with PMs re: deadlines and shippables</li>
          <li>Collaborating with UX re: desired user experience</li>
          </ul>

          <h3 className="text-xl font-bold text-foreground">The Challenges</h3>

          <div className="space-y-0 divide-y divide-border">
            {[
              {
                type: "Technical",
                problem: "Making sense of the existing legacy codebase (some of it more than 10y old)",
                solution: "Experimenting, talking with people with more experience, etc.",
              },
              {
                type: "Non-Technical",
                problem: "Making good customer experience",
                solution: "We wanted our product to be used by non-technical people, so it needed to be as simple as possible. One big issue we had is that we wanted to implement a LIMIT order that feels like a MARKET order. The exchanges don't usually support that, so we had to get creative.",
              },
              {
                type: "Non-Technical",
                problem: "Working in a highly-regulated environment like payments",
                solution: "You just learn that some things take time and the org prefers to error on the side of not-shipping something on time, vs. shipping something that might mean people lose money",
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
                what: "Grew as an engineer",
                why: "I joined the company as a Junior Software Engineer and my only prior experience was some open-source work and a six-month internship where I didn't have any real responsibilities. Even as a Junior here, I still took a lot of responsibilities and due to my performance I was promoted to Mid-level just six-months into the company.",
              },
              {
                what: "Learned the tech stack really well",
                why: "I was able to focus on learning the tech stack really well, and after I few months I was able to understand in good depth how Spring Boot worked, how it autowired dependencies, how it handled routing, etc. I was also something of the IntelliJ-guru on the team.",
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
          {["paysafe-002.png", "paysafe-003.jpg", "paysafe-001.svg"].map((img) => (
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
          {["Java", "Spring Boot", "Angular", "SQL"].map((tag) => (
            <span key={tag} className="rounded border border-foreground/40 px-3 py-1 font-mono text-xs text-foreground">
              {tag}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PaysafeSection;
