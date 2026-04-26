const projects = [
  {
    title: "AI-Powered Content Recommendations",
    tag: "Recommendation System",
    description:
      "Led the product strategy for a personalized content recommendation engine serving 2M+ users. Improved click-through rate by 35% through A/B testing and model iteration.",
    metrics: ["2M+ users", "35% CTR lift", "3 model iterations"],
    technologies: ["Collaborative Filtering", "A/B Testing", "Python", "Spark"],
  },
  {
    title: "NLP Customer Support Automation",
    tag: "Natural Language Processing",
    description:
      "Owned the roadmap for an NLP pipeline that automated 60% of tier-1 support tickets. Designed the human-in-the-loop feedback system to continuously improve model accuracy.",
    metrics: ["60% automation", "45% cost reduction", "< 2s latency"],
    technologies: ["Transformers", "LangChain", "Fine-tuning", "RAG"],
  },
  {
    title: "Computer Vision Quality Inspection",
    tag: "Computer Vision",
    description:
      "Managed the development of a real-time defect detection system for manufacturing. Coordinated between ML engineers and domain experts to achieve 98% accuracy on edge cases.",
    metrics: ["98% accuracy", "80% faster", "Zero false negatives"],
    technologies: ["Object Detection", "Edge Deployment", "TensorRT", "MLOps"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-800/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Projects & Case Studies</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl">
          Highlights from AI products I&apos;ve defined, shipped, and scaled.
        </p>
        <div className="grid gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between flex-wrap gap-2 mb-4">
                <div>
                  <span className="text-xs font-medium px-2.5 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full">
                    {project.tag}
                  </span>
                  <h3 className="text-xl font-bold mt-3">{project.title}</h3>
                </div>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                {project.metrics.map((m) => (
                  <span
                    key={m}
                    className="text-sm font-medium px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg"
                  >
                    {m}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 border border-zinc-200 dark:border-zinc-700 rounded text-zinc-500 dark:text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
