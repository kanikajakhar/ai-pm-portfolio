import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-[720px] mx-auto text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-4">
            Get in touch.
          </h2>
        </FadeIn>
        <FadeIn delay={50}>
          <p className="text-lg text-secondary mb-12 max-w-md mx-auto">
            Open to AI product roles, collaboration, or a conversation about the future of AI.
          </p>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="flex justify-center gap-10 text-sm">
            <a
              href="mailto:kanika.jakhar@yale.edu"
              className="text-accent hover:underline underline-offset-4"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/kanikajakhar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline underline-offset-4"
            >
              LinkedIn
            </a>
            <a
              href="tel:+12036067798"
              className="text-accent hover:underline underline-offset-4"
            >
              Phone
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
