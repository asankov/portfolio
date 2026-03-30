import { useParams, Link } from "react-router-dom";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projectsData = [
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "A real-time analytics platform built with React, D3.js, and WebSockets. Features live data streaming, custom chart builders, and role-based access control.",
    longDescription: "This project involved building a comprehensive analytics platform from the ground up. The dashboard processes millions of data points in real-time, rendering them through custom D3.js visualizations. Key challenges included optimizing WebSocket connections for live data streaming, implementing a drag-and-drop chart builder, and designing a granular role-based access control system. The platform reduced reporting time by 70% for the client's operations team.",
    tags: ["React", "D3.js", "WebSocket", "PostgreSQL"],
    image: project1,
    role: "Lead Frontend Engineer",
    year: "2025",
    link: "#",
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Full-stack marketplace with headless CMS, Stripe payments, and server-side rendering. Achieved 98+ Lighthouse score across all metrics.",
    longDescription: "Designed and developed a high-performance e-commerce platform serving thousands of daily transactions. The architecture leverages a headless CMS for content flexibility, Stripe for secure payment processing, and Next.js for server-side rendering. Special attention was paid to Core Web Vitals, achieving a 98+ Lighthouse score. The platform features advanced product filtering, wishlist functionality, and a streamlined checkout flow that increased conversion by 35%.",
    tags: ["Next.js", "Stripe", "Sanity", "Vercel"],
    image: project2,
    role: "Full-Stack Developer",
    year: "2024",
    link: "#",
  },
  {
    slug: "mobile-app-suite",
    title: "Mobile App Suite",
    description: "Cross-platform mobile application with offline-first architecture, push notifications, and biometric authentication. 50k+ active users.",
    longDescription: "Built a cross-platform mobile application serving 50,000+ active users. The app features an offline-first architecture using local SQLite storage with background sync, ensuring reliability in low-connectivity environments. Implemented biometric authentication (Face ID / fingerprint), real-time push notifications via Firebase Cloud Messaging, and a custom animation system for fluid user interactions. The app maintains a 4.8★ rating on both app stores.",
    tags: ["React Native", "Firebase", "TypeScript"],
    image: project3,
    role: "Mobile Engineer",
    year: "2024",
    link: "#",
  },
];

export { projectsData };

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-foreground">Project not found</h1>
          <Link to="/" className="font-mono text-sm text-primary hover:underline">
            ← Back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary">
            ← Back
          </Link>
          <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
        </div>
      </header>

      {/* Hero image */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
          width={1280}
          height={720}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto -mt-24 max-w-3xl px-6 pb-20">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">{project.title}</h1>

        <div className="mb-10 flex items-center gap-6 font-mono text-sm text-muted-foreground">
          <span>Role: <span className="text-foreground">{project.role}</span></span>
          <span>Year: <span className="text-foreground">{project.year}</span></span>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>{project.longDescription}</p>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-border" />

        {/* Nav to other projects */}
        <div>
          <p className="mb-6 font-mono text-xs tracking-widest text-primary uppercase">// other projects</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {projectsData
              .filter((p) => p.slug !== slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  to={`/project/${p.slug}`}
                  className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/40"
                >
                  <img src={p.image} alt={p.title} loading="lazy" width={1280} height={720} className="h-32 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.role} · {p.year}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
