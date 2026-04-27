import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-tertiary">
      <div className="max-w-[720px] mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-10">
            About
          </h2>
        </FadeIn>
        <div className="space-y-6">
          <FadeIn delay={50}>
            <p className="text-lg text-secondary leading-relaxed">
              I&apos;m an AI Product Manager with a unique blend of space technology,
              management consulting, and hands-on ML experience. At ISRO, I led
              cross-functional teams to ship satellite navigation products and
              drone-tracking platforms used across India.
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-lg text-secondary leading-relaxed">
              At BCG, I architected enterprise-wide AI inclusion frameworks for
              Fortune-500 clients, identifying $15M+ in operational efficiencies.
              I thrive on translating complex technical capabilities into products
              that drive measurable business outcomes.
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="text-lg text-secondary leading-relaxed">
              Currently pursuing my MBA at Yale School of Management, deepening
              my expertise in AI product strategy while advocating for gender
              diversity in space and technology. 2nd place at the Google AI
              Hackathon for building an AI agent for the visually impaired.
            </p>
          </FadeIn>
        </div>
        <FadeIn delay={200}>
          <div className="mt-14 flex flex-wrap gap-x-12 gap-y-4 text-sm">
            <div>
              <p className="text-secondary/60 mb-0.5">Location</p>
              <p className="font-medium">New Haven, CT</p>
            </div>
            <div>
              <p className="text-secondary/60 mb-0.5">Education</p>
              <p className="font-medium">MBA, Yale SOM</p>
            </div>
            <div>
              <p className="text-secondary/60 mb-0.5">Undergrad</p>
              <p className="font-medium">B.Tech EE, IIT Jodhpur</p>
            </div>
            <div>
              <p className="text-secondary/60 mb-0.5">Focus</p>
              <p className="font-medium">AI Products & Strategy</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
