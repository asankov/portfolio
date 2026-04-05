const PublicSpeakingSection = () => {
  return (
    <section id="public-speaking" className="snap-section flex items-center justify-center px-6 py-20">
      <div className="mx-auto max-w-3xl w-full">
        <p className="mb-2 font-mono text-xs tracking-widest text-primary uppercase">
          // open source & side work
        </p>
        <h1 className="mb-10 text-4xl font-bold text-foreground sm:text-5xl">Public Speaking</h1>

        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I enjoy public speaking - not just as a way to build visibility, but because it forces you to deeply understand what you're talking about before you can explain it to others.
          </p>

          <p>
            It is also a great way to travel to new places, meet new people and build valuable connections.
          </p>

        </div>

        <h3 className="mt-10 mb-6 text-xl font-bold text-foreground">Some of the talks I am most proud of</h3>

        <div className="space-y-10">

          <div>
            <p className="mb-1 font-mono text-xs text-primary uppercase tracking-widest">DevConf.CZ 2020</p>
            <h4 className="mb-1 text-lg font-semibold text-foreground">Building The Twelve-Factor App</h4>
            <p className="mb-4 text-sm text-muted-foreground">My first-ever talk. Presented it first in OpenExpo Madrid in 2019, but there is no recording from that conference. Then went to DevConf.CZ Brno two months before the world shut down.</p>
            <div className="relative w-full overflow-hidden rounded-lg border border-border" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/xyeXx2qtfLI"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div>
            <p className="mb-1 font-mono text-xs text-primary uppercase tracking-widest">KubeHuddle 2022</p>
            <h4 className="mb-1 text-lg font-semibold text-foreground">Securing Kubernetes with Open Policy Agent</h4>
            <p className="mb-4 text-sm text-muted-foreground">Presenting some interesting stuff we built at VMware Carbon Black. This talk allowed me to travel to three different countries in a post-COVID world.</p>
            <div className="relative w-full overflow-hidden rounded-lg border border-border" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/DcOYB4cUM9U?start=12186"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div>
            <p className="mb-1 font-mono text-xs text-primary uppercase tracking-widest">FOSDEM 2025</p>
            <h4 className="mb-1 text-lg font-semibold text-foreground">The Inner Workings of Go Generics</h4>
            <p className="mb-4 text-sm text-muted-foreground">This one challenged me to dive deep into a low-level implementation and into some archeology on why it took twelve years for the Go core team to implement generics.</p>
            <video
              src="https://ftp.fau.de/fosdem/2025/ud2120/fosdem-2025-5329-the-inner-workings-of-go-generics.av1.webm"
              controls
              className="w-full rounded-lg border border-border"
            />
          </div>

          <p className="text-lg font-medium text-foreground">
            For a full list of my public speaking gigs go to{" "}
            <a
              href="https://asankov.dev/cv#public-speaking"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4 hover:opacity-80"
            >
              asankov.dev/cv#public-speaking
            </a>
            .
          </p>

        </div>
      </div>
    </section>
  );
};

export default PublicSpeakingSection;
