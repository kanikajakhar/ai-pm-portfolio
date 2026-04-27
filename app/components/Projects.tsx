import FadeIn from "./FadeIn";

const projects = [
  {
    title: "Marketing Strategy",
    tag: "Strategy",
    description:
      "Developing the ‘Notification to Trust’ framework for a marketplace delivery platform to move from generic promotional pings to high-value, real-time updates (e.g., precise delivery windows and stock alerts).",
    metrics: ["Improving CSAT", "C-suite alignment"],
    color: "bg-violet-500",
  },
  {
    title: "AI Inclusion Framework",
    tag: "AI Strategy",
    description:
      "Architected an enterprise-wide AI inclusion framework for a Fortune-500 utility, identifying $15M+ in operational efficiencies.",
    metrics: ["$15M+ identified", "C-suite alignment"],
    color: "bg-violet-500",
  },
  {
    title: "NavIC AI/ML Platform",
    tag: "AI / ML Platform",
    description:
      "Led product strategy for the NavIC AI/ML platform serving 4 cross-functional segments. Designed the roadmap for a centralized platform to process GNSS telemetry and signal data across Space, Ground, User, and Research segments. Harmonized data requirements between hardware engineers and data scientists to support real-time satellite monitoring and long-term ionospheric modeling.",
    metrics: ["Cross-functional leadership", "ML Product"],
    color: "bg-indigo-500",
  },
  {
    title: "NavIC Drone Tracking Platform",
    tag: "IoT Management Platform",
    description:
      "Led cross-functional sprints to ship drone tracking platform reducing operational overhead by 20%",
    metrics: ["5+ products shipped", "27% user growth"],
    color: "bg-blue-500",
  },
  {
    title: "Cloud Data Migration & Cost Optimization",
    tag: "Cloud / Infrastructure",
    description:
      "Directed the migration of mission-critical datasets to a unified cloud storage platform, deprecating high-maintenance legacy systems. Optimized cloud resource allocation and data lifecycle policies, reducing engineering overhead and MTTR by 60%, ensuring 24/7 data access",
    metrics: ["MTTR reduced by 60%", "System Availability improved"],
    color: "bg-slate-500",
  },
  {
    title: "Marine Navigation Mobile Strategy",
    tag: "Market Strategy",
    description:
      "Drove $1M ARR opportunity by developing marine navigation mobile strategy through competitive analysis, market sizing, customer interviews, and data insights. Delivered an execution plan that led to leadership buy-in.",
    metrics: ["$1M ARR opportunity", "Leadership buy-in"],
    color: "bg-teal-500",
  },
  {
    title: "Remote Sensing Customer Zero Analysis",
    tag: "Data Insights",
    description:
      "Analyzed customer zero data across Remote Sensing Application teams to deliver insights about emerging features, such as automated change detection and sub-meter object classification. Iterated with stakeholders to drive product improvements prior to public releases.",
    metrics: ["Customer zero insights", "Pre-release iteration"],
    color: "bg-amber-500",
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
  {
    title: "Hazardous Material Tracker",
    tag: "Edge AI",
    description:
      "Led end-to-end lifecycle of NavIC-based trackers with integrated cameras. Architected FOTA pipeline with 99.9% uptime in remote environments.",
    metrics: ["99.9% uptime", "FOTA pipeline"],
    color: "bg-cyan-500",
  },
];

const sideProjects = [
  {
    title: "Nemo Drifter — Aquatic IoT Monitor",
    tag: "IoT / Embedded",
    description:
      "Arduino-based environmental monitoring system integrating pH, conductivity, dissolved oxygen, and temperature sensors with GSM/GPRS cellular data transmission and GPS tracking for real-time aquatic data logging.",
    metrics: ["Multi-sensor", "GSM + GPS"],
    color: "bg-sky-500",
    url: "https://github.com/kanikajakhar/nemo_drifter",
  },
  {
    title: "SQL Analytics — Gift Store Database",
    tag: "SQL / Databases",
    description:
      "Built complex SQL queries across a multi-table relational database — analyzing purchase patterns, customer segmentation, top products, and coupon usage using JOINs, aggregations, and date filtering.",
    metrics: ["10 exercises", "SQLite + Python"],
    color: "bg-lime-500",
    url: "https://github.com/kanikajakhar/homework",
  },
  {
    title: "NoSQL Analytics — Restaurant Database",
    tag: "MongoDB / NoSQL",
    description:
      "Queried a MongoDB restaurants collection using projections, regex, nested array filters, and complex document queries — from basic lookups to advanced multi-criteria search for dining recommendations.",
    metrics: ["13 exercises", "MongoDB"],
    color: "bg-fuchsia-500",
    url: "https://github.com/kanikajakhar/homework",
  },
  {
    title: "NBA 3-Point Shot Selection Analytics",
    tag: "Sports Analytics",
    description:
      "Analyzed 5 seasons of NBA shooting data using the nba_api to evaluate whether midrange jumpers are underutilized. Compared Expected Points Per Shot (EPPS) across defender distances, explored playoff efficiency shifts, and proposed rule changes to rebalance shot selection.",
    metrics: ["5 seasons", "EPPS modeling"],
    color: "bg-red-500",
    url: "https://github.com/MGT817-F2025/project-nba-3-point-shot-selection",
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

        <FadeIn>
          <div className="text-center mt-20 mb-16">
            <h3 className="text-2xl md:text-[32px] font-bold tracking-tight">
              Side projects.
            </h3>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-5">
          {sideProjects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 80}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-tertiary rounded-2xl p-8 hover:bg-foreground/[0.03] dark:hover:bg-foreground/[0.04] transition-colors duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`w-2 h-2 rounded-full ${project.color}`} />
                  <span className="text-xs font-medium text-secondary uppercase tracking-wider">
                    {project.tag}
                  </span>
                </div>
                <h4 className="text-lg font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-sm text-secondary leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  {project.metrics.map((m) => (
                    <span key={m} className="text-sm font-semibold text-accent">
                      {m}
                    </span>
                  ))}
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
