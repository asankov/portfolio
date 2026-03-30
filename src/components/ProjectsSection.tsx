import { Link } from "react-router-dom";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "A real-time analytics platform built with React, D3.js, and WebSockets. Features live data streaming, custom chart builders, and role-based access control.",
    tags: ["React", "D3.js", "WebSocket", "PostgreSQL"],
    image: project1,
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Full-stack marketplace with headless CMS, Stripe payments, and server-side rendering. Achieved 98+ Lighthouse score across all metrics.",
    tags: ["Next.js", "Stripe", "Sanity", "Vercel"],
    image: project2,
  },
  {
    slug: "mobile-app-suite",
    title: "Mobile App Suite",
    description: "Cross-platform mobile application with offline-first architecture, push notifications, and biometric authentication. 50k+ active users.",
    tags: ["React Native", "Firebase", "TypeScript"],
    image: project3,
  },
];

const ProjectsSection = () => {
  return (
    <section className="snap-section flex items-center justify-center px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-center font-mono text-xs tracking-widest text-primary uppercase">
          // selected work
        </p>
        <h2 className="mb-16 text-center text-3xl font-bold text-foreground sm:text-4xl">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              to={`/project/${project.slug}`}
              key={project.title}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-foreground">{project.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded border border-border px-2 py-1 font-mono text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
