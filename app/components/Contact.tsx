export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-800/20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10 max-w-xl mx-auto">
          I&apos;m always open to discussing AI product strategy, opportunities
          in tech, or swapping ideas about the future of AI and space.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:kanika.jakhar@yale.edu"
            className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg font-medium hover:opacity-90 transition"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/kanikajakhar"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            LinkedIn
          </a>
          <a
            href="tel:+12036067798"
            className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            (203) 606-7798
          </a>
        </div>
      </div>
    </section>
  );
}
