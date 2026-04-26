const experiences = [
  {
    role: "Senior Product Manager, AI Platform",
    company: "Tech Company",
    period: "2023 – Present",
    bullets: [
      "Lead product strategy for the company's AI/ML platform serving internal teams across 4 product lines",
      "Defined success metrics and experimentation frameworks for ML model deployments, reducing time-to-production by 40%",
      "Partnered with research scientists to translate SOTA papers into shipping features within one quarter",
    ],
  },
  {
    role: "Product Manager, Applied ML",
    company: "Startup Inc.",
    period: "2021 – 2023",
    bullets: [
      "Owned the end-to-end product lifecycle for NLP-powered features including search, recommendations, and content moderation",
      "Launched a RAG-based knowledge assistant that reduced support ticket volume by 45%",
      "Built and maintained a quarterly roadmap balancing user needs, technical debt, and research bets",
    ],
  },
  {
    role: "Associate Product Manager",
    company: "DataCorp",
    period: "2019 – 2021",
    bullets: [
      "Managed analytics dashboards and data pipeline products used by 200+ internal analysts",
      "Conducted user research and competitive analysis to inform product decisions",
      "Coordinated cross-functional squads of engineers, designers, and data scientists",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-800/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Experience</h2>
        <div className="space-y-10">
          {experiences.map((exp) => (
            <div key={exp.role}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-lg font-bold">{exp.role}</h3>
                  <p className="text-violet-600 dark:text-violet-400 font-medium">
                    {exp.company}
                  </p>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-500">
                  {exp.period}
                </p>
              </div>
              <ul className="space-y-2">
                {exp.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-zinc-600 dark:text-zinc-400 leading-relaxed flex gap-3"
                  >
                    <span className="text-zinc-400 mt-1.5 shrink-0">
                      &bull;
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
