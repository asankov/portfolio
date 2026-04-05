const skillCategories = [
  {
    label: "Backend",
    skills: ["Go", "Python", "Java", "JavaScript/TypeScript"],
  },
  {
    label: "AI",
    skills: ["LLMs", "RAG", "MCP", "Tools", "OpenAI", "Claude", "Gemini"],
  },
  {
    label: "Frontend",
    skills: ["React", "Angular", "JavaScript/TypeScript", "Tailwind CSS"],
  },
  {
    label: "DevOps & Tools",
    skills: ["Kubernetes", "Docker", "AWS", "GCP", "Azure", "ArgoCD", "Terraform"],
  },
];

const SkillsSection = () => {
  return (
    <section className="snap-section grid-bg flex items-center justify-center px-6">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-2 font-mono text-xs tracking-widest text-primary uppercase">
          // tech stack
        </p>
        <h2 className="mb-16 text-3xl font-bold text-foreground sm:text-4xl">
          Skills & Technologies
        </h2>

        <div className="grid gap-10 md:grid-cols-4">
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
