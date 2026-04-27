import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 px-6 bg-tertiary">
      <div className="max-w-[720px] mx-auto text-center">
        <FadeIn>
          <p className="text-sm font-medium tracking-wider text-accent uppercase mb-3">
            About
          </p>
          <h2 className="text-4xl md:text-[48px] font-bold tracking-tight leading-tight mb-8">
            Building the future
            <br />
            with AI and data
          </h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="text-lg md:text-xl text-secondary leading-relaxed mb-6">
            I&apos;m a Product Manager with a unique blend of{" "}
            <span className="text-foreground font-medium">space technology</span>,{" "}
            <span className="text-foreground font-medium">management consulting</span>, and{" "}
            <span className="text-foreground font-medium">hands-on AI/ML</span> experience.
            At ISRO, I led cross-functional teams to ship multiple software
            products used widely in the scientific community, defence forces and other consumer mobile applications.
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-lg md:text-xl text-secondary leading-relaxed mb-6">
            At BCG, I architected enterprise-wide AI inclusion frameworks for
            Fortune-500 client, identifying $15M+ in operational efficiencies.
            I thrive on translating complex technical capabilities into products
            that drive measurable business outcomes.
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <p className="text-lg md:text-xl text-secondary leading-relaxed mb-14">
            Currently pursuing my MBA at Yale School of Management, deepening
            my expertise in AI product strategy while advocating for a sustainable future.
          </p>
        </FadeIn>
        <FadeIn delay={400}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-background rounded-2xl p-5">
              <p className="text-xs text-secondary/60 uppercase tracking-wider mb-1">Location</p>
              <p className="font-semibold text-sm">New Haven, CT</p>
            </div>
            <div className="bg-background rounded-2xl p-5">
              <p className="text-xs text-secondary/60 uppercase tracking-wider mb-1">Degree</p>
              <p className="font-semibold text-sm">MBA, Yale SOM</p>
            </div>
            <div className="bg-background rounded-2xl p-5">
              <p className="text-xs text-secondary/60 uppercase tracking-wider mb-1">Undergrad</p>
              <p className="font-semibold text-sm">B.Tech, IIT Jodhpur</p>
            </div>
            <div className="bg-background rounded-2xl p-5">
              <p className="text-xs text-secondary/60 uppercase tracking-wider mb-1">Focus</p>
              <p className="font-semibold text-sm">Products Strategy</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
