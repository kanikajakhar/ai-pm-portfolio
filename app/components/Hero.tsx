export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-3xl text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-4">
          AI Product Manager
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Your Name
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10">
          I build AI-powered products that solve real problems. From strategy to
          shipping, I bridge the gap between cutting-edge ML and delightful user
          experiences.
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
