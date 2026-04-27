import FadeIn from "./FadeIn";

const projects = [
  {
    title: "NavIC Drone Tracking Platform",
    tag: "IoT / Geospatial",
    description:
      "Led cross-functional sprints to ship an end-to-end drone tracking platform and IoT device management platform, driving a 27% increase in NavIC user acquisition.",
    metrics: ["5+ products shipped", "27% user growth"],
  },
  {
    title: "AI Inclusion Framework — Fortune 500",
    tag: "AI Strategy",
    description:
      "Architected an enterprise-wide AI inclusion framework at BCG, developing financial models that identified $15M+ in operational efficiencies by optimizing fragmented infrastructure.",
    metrics: ["$15M+ identified", "C-suite alignment"],
  },
  {
    title: "NavIC Hazardous Material Tracker",
    tag: "Edge AI",
    description:
      "Led end-to-end lifecycle of NavIC-based hazardous material trackers with integrated cameras. Architected a FOTA pipeline deploying sensor-fusion updates with 99.9% uptime in remote environments.",
    metrics: ["99.9% uptime", "FOTA pipeline"],
  },
  {
    title: "NavIC Integration into Android",
    tag: "Partnerships",
    description:
      "Drove strategic public-private collaboration between ISRO, Qualcomm, and Xiaomi — integrating NavIC into 25%+ of Android handsets sold in India.",
    metrics: ["25%+ handsets", "Qualcomm + Xiaomi"],
  },
  {
    title: "Satellite Signal ML Analytics",
    tag: "Data Science",
    description:
      "Developed LSTM models to analyze global satellite signal performance, delivering data-driven insights that defined next-gen product strategy and competitive market positioning.",
    metrics: ["LSTM models", "Global analysis"],
  },
  {
    title: "AI Agent for the Visually Impaired",
    tag: "Generative AI",
    description:
      "Won 2nd place at the Google AI Hackathon developing an AI agent and companion device for the blind and visually impaired using Gemini.",
    metrics: ["2nd place", "Gemini AI"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-[980px] mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-4">
            Projects
          </h2>
        </FadeIn>
        <FadeIn delay={50}>
          <p className="text-lg text-secondary mb-16 max-w-lg">
            Products I&apos;ve defined, shipped, and scaled across space tech, enterprise AI, and accessibility.
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-px bg-foreground/5 rounded-2xl overflow-hidden">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 60}>
              <article className="bg-background p-8 md:p-10 group">
                <p className="text-xs text-secondary/60 uppercase tracking-wider mb-3">
                  {project.tag}
                </p>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  {project.metrics.map((m) => (
                    <span key={m} className="text-xs font-medium text-accent">
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
