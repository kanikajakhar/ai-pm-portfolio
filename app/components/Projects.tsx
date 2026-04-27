const projects = [
  {
    title: "NavIC Drone Tracking Platform",
    tag: "IoT / Geospatial",
    description:
      "Led cross-functional sprints to ship an end-to-end drone tracking platform and IoT enrollment device management platform at ISRO, driving a 27% increase in NavIC user acquisition.",
    metrics: ["5+ products shipped", "27% user growth", "End-to-end delivery"],
    technologies: ["NavIC", "IoT", "Cross-functional Sprints", "Product Strategy"],
    color: "indigo",
  },
  {
    title: "AI Inclusion Framework — Fortune-500",
    tag: "AI Strategy",
    description:
      "Architected an enterprise-wide AI inclusion framework at BCG, developing financial models that identified $15M+ in operational efficiencies by optimizing fragmented infrastructure and restructuring the organization.",
    metrics: ["$15M+ identified", "C-suite alignment", "Vendor RFP design"],
    technologies: ["Financial Modeling", "Change Management", "AI Strategy", "Stakeholder Alignment"],
    color: "violet",
  },
  {
    title: "NavIC Hazardous Material Tracker",
    tag: "Edge / Embedded AI",
    description:
      "Led end-to-end lifecycle of NavIC-based hazardous material trackers with integrated cameras. Architected a FOTA pipeline to deploy sensor-fusion updates and security patches, ensuring 99.9% uptime in remote environments.",
    metrics: ["99.9% uptime", "FOTA pipeline", "Sensor fusion"],
    technologies: ["FOTA", "Sensor Fusion", "Edge Deployment", "Security"],
    color: "cyan",
  },
  {
    title: "NavIC Integration into Android",
    tag: "Strategic Partnerships",
    description:
      "Drove strategic public-private collaboration between ISRO, Qualcomm, and Xiaomi — NavIC integrated into 25%+ of Android handsets sold in India.",
    metrics: ["25%+ handset share", "Qualcomm + Xiaomi", "Market expansion"],
    technologies: ["Strategic Partnerships", "Android Integration", "Market Analysis"],
    color: "emerald",
  },
  {
    title: "Satellite Signal ML Analytics",
    tag: "ML / Data Science",
    description:
      "Developed ML models using LSTM to analyze global satellite signal performance, delivering data-driven insights that defined next-gen product strategy and competitive market positioning.",
    metrics: ["LSTM models", "Global signal analysis", "Next-gen strategy"],
    technologies: ["Python", "LSTM", "Power BI", "Data-Driven Insights"],
    color: "rose",
  },
  {
    title: "AI Agent for the Visually Impaired",
    tag: "Generative AI",
    description:
      "Won 2nd place at the Google AI Hackathon by developing an AI agent and companion device for the blind and visually impaired using Gemini.",
    metrics: ["2nd place", "Gemini AI", "Accessibility"],
    technologies: ["Gemini", "AI Agents", "Accessibility", "Rapid Prototyping"],
    color: "amber",
  },
];

const colorMap: Record<string, { tag: string; border: string }> = {
  indigo: {
    tag: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300",
    border: "hover:border-indigo-300 dark:hover:border-indigo-700/50",
  },
  violet: {
    tag: "bg-violet-50 text-violet-700 dark:bg-violet-950/50 dark:text-violet-300",
    border: "hover:border-violet-300 dark:hover:border-violet-700/50",
  },
  cyan: {
    tag: "bg-cyan-50 text-cyan-700 dark:bg-cyan-950/50 dark:text-cyan-300",
    border: "hover:border-cyan-300 dark:hover:border-cyan-700/50",
  },
  emerald: {
    tag: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300",
    border: "hover:border-emerald-300 dark:hover:border-emerald-700/50",
  },
  rose: {
    tag: "bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300",
    border: "hover:border-rose-300 dark:hover:border-rose-700/50",
  },
  amber: {
    tag: "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300",
    border: "hover:border-amber-300 dark:hover:border-amber-700/50",
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-2">
          Projects
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Products I&apos;ve shipped
        </h2>
        <p className="text-gray-500 dark:text-gray-500 mb-12 max-w-2xl">
          From satellite navigation to enterprise AI — highlights from products
          I&apos;ve defined, shipped, and scaled.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const colors = colorMap[project.color] || colorMap.indigo;
            return (
              <article
                key={project.title}
                className={`group bg-white dark:bg-gray-900/60 rounded-2xl border border-gray-200/80 dark:border-gray-800/80 p-7 hover:shadow-xl transition-all duration-300 flex flex-col ${colors.border}`}
              >
                <div className="mb-4">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colors.tag}`}
                  >
                    {project.tag}
                  </span>
                  <h3 className="text-lg font-bold mt-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm mb-5 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.metrics.map((m) => (
                    <span
                      key={m}
                      className="text-xs font-semibold px-2.5 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg"
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 border border-gray-200 dark:border-gray-700 rounded-md text-gray-500 dark:text-gray-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
