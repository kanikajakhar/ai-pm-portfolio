import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-[720px] text-center">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.08] mb-6">
            Kanika Jakhar
          </h1>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="text-xl md:text-2xl text-secondary font-light leading-relaxed mb-4">
            AI Product Manager
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-base md:text-lg text-secondary/80 leading-relaxed mb-12 max-w-xl mx-auto">
            Building AI-powered products at the intersection of space
            technology, enterprise strategy, and emerging technology.
            <br />
            <span className="text-secondary/60">MBA @ Yale &middot; Ex-BCG &middot; Ex-ISRO</span>
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <p className="text-sm text-secondary/50 italic mb-12">
            My code lives on the moon.
          </p>
        </FadeIn>
        <FadeIn delay={400}>
          <div className="flex gap-6 justify-center">
            <a
              href="#projects"
              className="text-accent text-sm hover:underline underline-offset-4"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="text-accent text-sm hover:underline underline-offset-4"
            >
              Get in touch
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
