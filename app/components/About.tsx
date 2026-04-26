export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>
              I&apos;m a product manager specializing in AI/ML products with
              experience spanning recommendation systems, NLP platforms, and
              computer vision applications. I thrive at the intersection of user
              research, data science, and engineering.
            </p>
            <p>
              My approach: start with the problem, not the technology. I focus on
              measurable outcomes, rapid experimentation, and building feedback
              loops that make products smarter over time.
            </p>
            <p>
              Previously, I&apos;ve worked with cross-functional teams to ship AI
              features used by millions. I&apos;m passionate about responsible AI,
              explainability, and making complex ML systems accessible to
              everyone.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-4">
              <p className="text-sm text-zinc-500 dark:text-zinc-500">
                Location
              </p>
              <p className="font-medium">San Francisco, CA</p>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-4">
              <p className="text-sm text-zinc-500 dark:text-zinc-500">
                Education
              </p>
              <p className="font-medium">MBA, CS Degree</p>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-4">
              <p className="text-sm text-zinc-500 dark:text-zinc-500">Focus</p>
              <p className="font-medium">AI/ML Products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
