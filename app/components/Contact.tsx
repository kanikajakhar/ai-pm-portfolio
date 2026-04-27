import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36 px-6 bg-black dark:bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(99,102,241,0.12)_0%,_transparent_70%)]" />
      <div className="relative max-w-[600px] mx-auto text-center">
        <FadeIn>
          <p className="text-sm font-medium tracking-wider text-accent uppercase mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-[48px] font-bold tracking-tight leading-tight text-white mb-4">
            Let&apos;s work together.
          </h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="text-lg text-white/50 leading-relaxed mb-12">
            Open to AI product roles, collaboration, or a conversation
            about the future of AI and space.
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="mailto:kanika.jakhar@yale.edu"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white text-sm font-medium rounded-full transition-colors duration-200"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/kanikajakhar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 hover:border-white/30 text-white text-sm font-medium rounded-full transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="tel:+12036067798"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 hover:border-white/30 text-white text-sm font-medium rounded-full transition-colors duration-200"
            >
              Phone
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
