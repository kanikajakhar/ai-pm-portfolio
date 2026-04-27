export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-3xl text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-4">
          AI Product Manager
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Kanika Jakhar
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10">
          MBA @ Yale | Ex-BCG & ISRO | I build AI-powered products at the
          intersection of space tech, enterprise strategy, and emerging
          technology.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg font-medium hover:opacity-90 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
