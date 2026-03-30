const skillCategories = [
  {
    label: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Three.js", "Framer Motion"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Python", "GraphQL", "REST APIs", "PostgreSQL", "Redis"],
  },
  {
    label: "DevOps & Tools",
    skills: ["AWS", "Docker", "CI/CD", "Git", "Terraform", "Monitoring"],
  },
];

const SkillsSection = () => {
  return (
    <section className="snap-section grid-bg flex items-center justify-center px-6">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-2 font-mono text-xs tracking-widest text-primary uppercase">
          // tech stack
        </p>
        <h2 className="mb-16 text-3xl font-bold text-foreground sm:text-4xl">
          Skills & Technologies
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {skillCategories.map((cat) => (
            <div key={cat.label}>
              <h3 className="mb-6 font-mono text-sm font-semibold tracking-wider text-primary">
                {cat.label}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-secondary px-4 py-2 text-sm text-secondary-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
