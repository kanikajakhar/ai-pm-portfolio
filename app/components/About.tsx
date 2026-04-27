export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>
              I&apos;m an AI Product Manager with a unique blend of space
              technology, management consulting, and hands-on ML experience.
              At ISRO, I led cross-functional teams to ship satellite
              navigation products and drone-tracking platforms used across
              India.
            </p>
            <p>
              At BCG, I architected enterprise-wide AI inclusion frameworks
              for Fortune-500 clients, identifying $15M+ in operational
              efficiencies. I thrive on translating complex technical
              capabilities into products that drive measurable business
              outcomes.
            </p>
            <p>
              Currently pursuing my MBA at Yale School of Management, I&apos;m
              deepening my expertise in AI product strategy while serving as a
              speaker and panelist advocating for gender diversity in space and
              technology. 2nd place at the Google AI Hackathon building an AI
              agent for the visually impaired.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-4">
              <p className="text-sm text-zinc-500 dark:text-zinc-500">
                Location
              </p>
              <p className="font-medium">New Haven, CT</p>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-4">
              <p className="text-sm text-zinc-500 dark:text-zinc-500">
                Education
              </p>
              <p className="font-medium">MBA, Yale SOM</p>
              <p className="text-sm text-zinc-500">B.Tech EE, IIT Jodhpur</p>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-4">
              <p className="text-sm text-zinc-500 dark:text-zinc-500">
                Focus
              </p>
              <p className="font-medium">AI Products & Strategy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
