import FadeIn from "./FadeIn";

const projects = [
  {
    title: "NavIC AI/ML Platform",
    tag: "AI / ML Platform",
    description:
      "Led product strategy for the NavIC AI/ML platform serving 4 cross-functional segments. Designed the roadmap for a centralized platform to process GNSS telemetry and signal data across Space, Ground, User, and Research segments. Harmonized data requirements between hardware engineers and data scientists to support real-time satellite monitoring and long-term ionospheric modeling.",
    metrics: ["4 segments", "Real-time + ML"],
    color: "bg-indigo-500",
  },
  {
    title: "NavIC Drone Tracking Platform",
    tag: "IoT / Geospatial",
    description:
      "Led cross-functional sprints to ship an end-to-end drone tracking platform and IoT device management platform, driving a 27% increase in NavIC user acquisition.",
    metrics: ["5+ products shipped", "27% user growth"],
    color: "bg-blue-500",
  },
  {
    title: "AI Inclusion Framework",
    tag: "AI Strategy",
    description:
      "Architected an enterprise-wide AI inclusion framework for a Fortune-500 utility at BCG, identifying $15M+ in operational efficiencies.",
    metrics: ["$15M+ identified", "C-suite alignment"],
    color: "bg-violet-500",
  },
  {
    title: "Hazardous Material Tracker",
    tag: "Edge AI",
    description:
      "Led end-to-end lifecycle of NavIC-based trackers with integrated cameras. Architected FOTA pipeline with 99.9% uptime in remote environments.",
    metrics: ["99.9% uptime", "FOTA pipeline"],
    color: "bg-cyan-500",
  },
  {
    title: "NavIC on Android",
    tag: "Partnerships",
    description:
      "Drove ISRO-Qualcomm-Xiaomi collaboration integrating NavIC into 25%+ of Android handsets sold in India.",
    metrics: ["25%+ handsets", "Qualcomm + Xiaomi"],
    color: "bg-emerald-500",
  },
  {
    title: "Satellite Signal ML Analytics",
    tag: "Data Science",
    description:
      "Developed LSTM models to analyze global satellite signal performance, defining next-gen product strategy and competitive positioning.",
    metrics: ["LSTM models", "Global analysis"],
    color: "bg-orange-500",
  },
  {
    title: "AI for the Visually Impaired",
    tag: "Generative AI",
    description:
      "Won 2nd place at the Google AI Hackathon building an AI agent and companion device for the blind using Gemini.",
    metrics: ["2nd place", "Gemini AI"],
    color: "bg-pink-500",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-36 px-6">
      <div className="max-w-[1024px] mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-wider text-accent uppercase mb-3">
              Projects
            </p>
            <h2 className="text-4xl md:text-[48px] font-bold tracking-tight leading-tight">
              Products I&apos;ve shipped.
            </h2>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 80}>
              <article className="group bg-tertiary rounded-2xl p-8 hover:bg-foreground/[0.03] dark:hover:bg-foreground/[0.04] transition-colors duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`w-2 h-2 rounded-full ${project.color}`} />
                  <span className="text-xs font-medium text-secondary uppercase tracking-wider">
                    {project.tag}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[15px] text-secondary leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  {project.metrics.map((m) => (
                    <span key={m} className="text-sm font-semibold text-accent">
                      {m}
                    </span>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
