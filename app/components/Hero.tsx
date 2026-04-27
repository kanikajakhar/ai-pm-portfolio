export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/30 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-200 dark:bg-violet-900/30 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-100 dark:bg-amber-900/20 rounded-full blur-3xl opacity-20" />
        {/* Stars */}
        <div className="absolute top-[15%] left-[10%] w-1 h-1 bg-indigo-400 rounded-full animate-twinkle" />
        <div className="absolute top-[25%] right-[15%] w-1.5 h-1.5 bg-violet-400 rounded-full animate-twinkle [animation-delay:1s]" />
        <div className="absolute top-[60%] left-[20%] w-1 h-1 bg-indigo-300 rounded-full animate-twinkle [animation-delay:2s]" />
        <div className="absolute top-[40%] right-[25%] w-1 h-1 bg-violet-300 rounded-full animate-twinkle [animation-delay:0.5s]" />
        <div className="absolute top-[75%] right-[10%] w-1.5 h-1.5 bg-amber-300 rounded-full animate-twinkle [animation-delay:1.5s]" />
      </div>

      <div className="max-w-3xl text-center animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/50 rounded-full mb-8">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
            Open to opportunities
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="bg-gradient-to-br from-gray-900 via-indigo-900 to-violet-900 dark:from-white dark:via-indigo-200 dark:to-violet-200 bg-clip-text text-transparent">
            Kanika Jakhar
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-4 max-w-2xl mx-auto">
          AI Product Manager &middot; MBA @ Yale &middot; Ex-BCG &amp; ISRO
        </p>

        <p className="text-base text-gray-500 dark:text-gray-500 leading-relaxed mb-10 max-w-xl mx-auto">
          Building AI-powered products at the intersection of space tech,
          enterprise strategy, and emerging technology.
        </p>

        {/* Fun fact */}
        <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-amber-50 to-indigo-50 dark:from-amber-950/30 dark:to-indigo-950/30 border border-amber-200/60 dark:border-amber-800/30 rounded-2xl mb-10 animate-float">
          <span className="text-2xl">&#127769;</span>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Fun fact: My code lives on the moon
          </span>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="group px-7 py-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white rounded-xl font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all"
          >
            View Projects
            <span className="inline-block ml-1 group-hover:translate-x-0.5 transition-transform">&rarr;</span>
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 border border-gray-300 dark:border-gray-700 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:border-gray-400 dark:hover:border-gray-600 transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
