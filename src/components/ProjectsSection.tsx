import { type ReactNode } from "react";
import { Link } from "react-router-dom";

const career = [
  {
    company: "Cast AI",
    role: "Staff AI Engineer",
    period: "March 2024 — Present",
    description: (
      <>
        <p>Part of the Security Product team - building software for securing Kubernetes clusters from supply chain to runtime.</p>
        <p>Part of the APA team — building autonomous AI agents that perform operations that would otherwise require human intervention.</p>
      </>
    ),
    tags: ["Go", "Python", "Kubernetes", "AI", "GCP", "Distributed Systems", "Event-driven architecture", "PostgreSQL", "Clickhouse"],
    url: "",
    anchor: "cast-ai",
  },
  {
    company: "VMware Carbon Black",
    role: "Senior Software Engineer",
    period: "June 2020 - February 2024",
    description: (
      <>
        <p>Part of the Kubernetes Security team inside Carbon Black - building software for securing Kubernetes clusters from supply chain to runtime.</p>

        <p>Left the company after the Broadcom acquisition, because our product was being sunset and I didn't want to work on anything else.</p>
      </>
    ),
    tags: ["Go", "Kubernetes", "AWS", "Distributed Systems", "Event-driven architecture", "MongoDB"],
    url: "",
    anchor: "vmware-carbon-black",
  },
  {
    company: "Docker / Mirantis",
    role: "Software Engineer",
    period: "August 2019 - June 2020",
    description: (
      <>
        <p>Worked on various projects, part of the Docker Enterprise Stack.</p>

        <p>The Docker Enterprise division was acquired by Mirantis in November 2019. Left the company in June when it was evident that the products were already in maintenance mode.</p>
      </>
    ),
    tags: ["Go", "Kubernetes", "AWS", "Distributed Systems", "PostgreSQL"],
    url: "",
    anchor: "docker",
  },
  {
    company: "Paysafe",
    role: "Software Engineer",
    period: "May 2018 - August 2019",
    description: (
      <>
        <p>Worked on integrating crypto-currency trading into Skrill and Neteller - Paysafe's two digital wallets.</p>

        <p>The work was a combination between green-field work (the crypto trading logic) and legacy code (integrating that into the existing products).</p>
      </>
    ),
    tags: ["Java", "Spring Boot", "Angular", "SQL"],
    url: "",
    anchor: "paysafe",
  },
];

const projects = [
  {
    title: "Kiwi TCMS",
    description: "An Open-Source Test-Case Management System",
    tags: ["Python", "Django", "SQL"],
    url: "",
    anchor: "kiwi-tcms",
  },
  {
    title: "Public Speaking",
    description: "Conference talks on Go, Kubernetes, cloud-native security, and AI.",
    tags: ["Go", "Kubernetes", "AI"],
    url: "",
    anchor: "public-speaking",
  },
  {
    title: "Personal Projects",
    description: "Tinkering",
    tags: ["a little bit of everything"],
    url: "",
    anchor: "personal-projects",
  },
];

const cardClass = "rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5";

type CardItem = { description: ReactNode; tags: string[]; url: string; anchor?: string } & (
  | { company: string; role: string; period: string; title?: never }
  | { title: string; company?: never; role?: never; period?: never }
);

const CardContent = ({ item }: { item: CardItem }) => (
  <>
    <div className="mb-1 flex items-start justify-between gap-4">
      <h3 className="text-lg font-semibold text-foreground">{item.company ?? item.title}</h3>
      {item.period && <span className="shrink-0 font-mono text-xs text-muted-foreground">{item.period}</span>}
    </div>
    {item.role && <p className="mb-3 text-sm text-primary">{item.role}</p>}
    <div className="mb-4 text-sm leading-relaxed text-muted-foreground space-y-2">{item.description}</div>
    <div className="flex flex-wrap gap-2">
      {item.tags.map((tag) => (
        <span key={tag} className="rounded border border-border px-2 py-1 font-mono text-xs text-muted-foreground">
          {tag}
        </span>
      ))}
    </div>
  </>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="snap-section flex items-center justify-center px-6 py-20">
      <div className="mx-auto max-w-6xl w-full">

        {/* Career */}
        <p className="mb-2 text-center font-mono text-xs tracking-widest text-primary uppercase">
          // work experience
        </p>
        <h2 className="mb-2 text-center text-3xl font-bold text-foreground sm:text-4xl">
          Career
        </h2>
        <p className="mb-12 text-center text-sm text-muted-foreground">
          Click any card or scroll down for more details.
        </p>

        <div className="mb-24 grid gap-6 md:grid-cols-2">
          {career.map((item) => {
            const handleAnchorClick = item.anchor
              ? () => document.getElementById(item.anchor!)?.scrollIntoView({ behavior: "smooth" })
              : undefined;

            return item.url ? (
              <Link key={item.company} to={item.url} className={cardClass}>
                <CardContent item={item} />
              </Link>
            ) : (
              <div
                key={item.company}
                className={`${cardClass}${handleAnchorClick ? " cursor-pointer" : ""}`}
                onClick={handleAnchorClick}
              >
                <CardContent item={item} />
              </div>
            );
          })}
        </div>

        {/* Projects */}
        <p className="mb-10 text-center font-mono text-xs tracking-widest text-primary uppercase">
          // open source &amp; side work
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const handleAnchorClick = project.anchor
              ? () => document.getElementById(project.anchor!)?.scrollIntoView({ behavior: "smooth" })
              : undefined;

            return project.url ? (
              <Link key={project.title} to={project.url} className={cardClass}>
                <CardContent item={project} />
              </Link>
            ) : (
              <div
                key={project.title}
                className={`${cardClass}${handleAnchorClick ? " cursor-pointer" : ""}`}
                onClick={handleAnchorClick}
              >
                <CardContent item={project} />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
