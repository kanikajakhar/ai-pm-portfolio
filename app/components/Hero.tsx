import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black dark:bg-black">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.15)_0%,_transparent_70%)]" />

      <div className="relative max-w-[820px] text-center">
        <FadeIn>
          <p className="text-sm md:text-base font-medium tracking-wide text-white/40 uppercase mb-6">
            AI Product Manager
          </p>
        </FadeIn>
        <FadeIn delay={100}>
          <h1 className="text-[56px] md:text-[96px] font-bold tracking-tight leading-[1.05] gradient-text mb-6">
            Kanika Jakhar
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-xl mx-auto mb-6">
            Building AI-powered products at the intersection of space
            technology, enterprise strategy, and emerging technology.
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <p className="text-sm text-white/30 mb-14">
            MBA @ Yale &nbsp;&middot;&nbsp; Ex-BCG &nbsp;&middot;&nbsp; Ex-ISRO
          </p>
        </FadeIn>
        <FadeIn delay={400}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm animate-float">
            <span className="text-sm">&#127769;</span>
            <span className="text-xs text-white/50 font-medium">
              My code lives on the moon
            </span>
          </div>
        </FadeIn>
        <FadeIn delay={500}>
          <div className="mt-14 flex gap-8 justify-center">
            <a
              href="#projects"
              className="text-accent text-sm font-medium hover:underline underline-offset-4"
            >
              View projects &darr;
            </a>
            <a
              href="#contact"
              className="text-accent text-sm font-medium hover:underline underline-offset-4"
            >
              Get in touch &rarr;
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
