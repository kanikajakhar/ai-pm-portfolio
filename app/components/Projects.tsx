const projects = [
  {
    title: "NavIC Drone Tracking Platform",
    tag: "IoT / Geospatial",
    description:
      "Led cross-functional sprints to ship an end-to-end drone tracking platform and IoT enrollment device management platform at ISRO, driving a 27% increase in NavIC user acquisition.",
    metrics: ["5+ products shipped", "27% user growth", "End-to-end delivery"],
    technologies: ["NavIC", "IoT", "Cross-functional Sprints", "Product Strategy"],
  },
  {
    title: "AI Inclusion Framework for Fortune-500 Utility",
    tag: "AI Strategy",
    description:
      "Architected an enterprise-wide AI inclusion framework at BCG, developing financial models that identified $15M+ in operational efficiencies by optimizing fragmented infrastructure and restructuring the organization.",
    metrics: ["$15M+ identified", "C-suite alignment", "Vendor RFP design"],
    technologies: ["Financial Modeling", "Change Management", "AI Strategy", "Stakeholder Alignment"],
  },
  {
    title: "NavIC Hazardous Material Tracker with FOTA",
    tag: "Edge / Embedded AI",
    description:
      "Led end-to-end lifecycle of NavIC-based hazardous material trackers with integrated cameras. Architected a FOTA pipeline to deploy sensor-fusion updates and security patches, ensuring 99.9% uptime in remote environments.",
    metrics: ["99.9% uptime", "FOTA pipeline", "Sensor fusion"],
    technologies: ["FOTA", "Sensor Fusion", "Edge Deployment", "Security"],
  },
  {
    title: "NavIC Integration into Android Devices",
    tag: "Strategic Partnerships",
    description:
      "Drove strategic public-private collaboration between ISRO, Qualcomm, and Xiaomi, resulting in the successful integration of NavIC into Android devices — enabling market penetration in 25%+ of handsets sold in India.",
    metrics: ["25%+ handset penetration", "Qualcollab + Xiaomi", "Market expansion"],
    technologies: ["Strategic Partnerships", "Android Integration", "Market Analysis"],
  },
  {
    title: "Satellite Signal ML Analytics (LSTM)",
    tag: "ML / Data Science",
    description:
      "Developed ML models using LSTM to analyze global satellite signal performance, delivering data-driven insights that defined next-gen product strategy and competitive market positioning.",
    metrics: ["LSTM models", "Global signal analysis", "Next-gen strategy"],
    technologies: ["Python", "LSTM", "Power BI", "Data-Driven Insights"],
  },
  {
    title: "Google AI Hackathon — AI Agent for the Visually Impaired",
    tag: "Generative AI",
    description:
      "Won 2nd place at the Google AI Hackathon by developing an AI agent and companion device for the blind and visually impaired using Gemini.",
    metrics: ["2nd place", "Gemini AI", "Accessibility"],
    technologies: ["Gemini", "AI Agents", "Accessibility", "Rapid Prototyping"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-800/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Projects & Case Studies</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl">
          Highlights from products I&apos;ve defined, shipped, and scaled across
          space tech, enterprise AI, and accessibility.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-8 hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="mb-4">
                <span className="text-xs font-medium px-2.5 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full">
                  {project.tag}
                </span>
                <h3 className="text-xl font-bold mt-3">{project.title}</h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 flex-1">
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
