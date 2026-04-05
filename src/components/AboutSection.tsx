const AboutSection = () => {
  return (
    <section className="snap-section grid-bg flex items-center justify-center px-6">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
        {/* Left: Terminal-style card */}
        <div className="glow-border overflow-hidden rounded-lg border border-border bg-card">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-destructive" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">about.tsx</span>
          </div>
          <div className="p-6 font-mono text-sm leading-relaxed text-secondary-foreground">
            <p><span className="text-primary">const</span> engineer = {"{"}</p>
            <p className="pl-4"><span className="text-primary">name</span>: <span className="text-green-400">"Anton Sankov"</span>,</p>
            <p className="pl-4"><span className="text-primary">role</span>: <span className="text-green-400">"Staff AI Engineer"</span>,</p>
            <p className="pl-4"><span className="text-primary">focus</span>: [<span className="text-green-400">"AI"</span>, <span className="text-green-400">"Distributed Systems"</span>, <span className="text-green-400">"Kubernetes"</span>],</p>
            <p className="pl-4"><span className="text-primary">languages</span>: [<span className="text-green-400">"Go"</span>, <span className="text-green-400">"Python"</span>, <span className="text-green-400">"JS/TS"</span>],</p>
            <p className="pl-4"><span className="text-primary">openSource</span>: <span className="text-orange-400">true</span>,</p>
            <p>{"};"}</p>
          </div>
        </div>

        {/* Right: Description */}
        <div>
          <p className="mb-2 font-mono text-xs tracking-widest text-primary uppercase">
            &lt;about&gt;
          </p>
          <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
            Building systems that scale,<br />from cluster to model.
          </h2>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            I'm a Staff AI Engineer with years of experience designing and operating
            distributed systems at scale. I work primarily in Go and Python, building
            infrastructure for Kubernetes-native environments and production AI workloads.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Outside of work I contribute to open source — including the Kiwi TCMS project —
            and speak at conferences on topics like Go, cloud-native security, and Kubernetes.
          </p>
          <p className="mt-6 font-mono text-xs tracking-widest text-primary uppercase">
            &lt;/about&gt;
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
