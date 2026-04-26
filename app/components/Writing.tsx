const posts = [
  {
    title: "How to Evaluate an ML Model Beyond Accuracy",
    tag: "ML Metrics",
    date: "Mar 2025",
    description:
      "A practical guide to choosing the right evaluation metrics for your AI product, covering precision-recall tradeoffs, business-aligned metrics, and when to use offline vs. online evaluation.",
  },
  {
    title: "Building RAG Products That Actually Work",
    tag: "LLMs",
    date: "Jan 2025",
    description:
      "Lessons learned from shipping retrieval-augmented generation features: chunking strategies, evaluation frameworks, and the product decisions that matter most.",
  },
  {
    title: "The AI PM's Guide to Responsible AI",
    tag: "Ethics",
    date: "Nov 2024",
    description:
      "How to embed fairness, transparency, and accountability into your AI product development process from day one.",
  },
];

export default function Writing() {
  return (
    <section id="writing" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Writing & Thought Leadership</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl">
          Articles and frameworks I&apos;ve shared with the AI product community.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium px-2 py-0.5 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full">
                  {post.tag}
                </span>
                <span className="text-xs text-zinc-400">{post.date}</span>
              </div>
              <h3 className="font-bold mb-2">{post.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1">
                {post.description}
              </p>
              <p className="mt-4 text-sm text-violet-600 dark:text-violet-400 font-medium">
                Read more &rarr;
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
