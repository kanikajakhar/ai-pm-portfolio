const experiences = [
  {
    role: "Summer Consultant",
    company: "Boston Consulting Group (BCG)",
    period: "2025",
    bullets: [
      "Architected enterprise-wide AI inclusion framework for a Fortune-500 utility; developed financial model identifying $15M+ in operational efficiencies",
      "Spearheaded change management by building C-suite and Engineering lead alignment, managing executive communications, and driving adoption of strategic organizational shifts",
      "Defined vendor strategy and transformation roadmap, including RFP design covering AI inclusion and technical capability",
    ],
  },
  {
    role: "Scientist-SD (Product Manager, NavIC Applications)",
    company: "Indian Space Research Organisation (ISRO)",
    period: "2022 – 2024",
    bullets: [
      "Led cross-functional sprints to ship 5+ end-to-end software products including a drone tracking platform and IoT enrollment device management platform; drove 27% increase in NavIC user acquisition",
      "Established product development process for NavIC Personal Tracker accessories; launched 5 accessories in two years",
      "Implemented 15% cost reduction in annual transport spending by designing automated billing system for 20,000 government vehicles",
      "Led product strategy and delivery for Bhuvan API geospatial platform to B2B customers; drove 20% increase in API call volume",
    ],
  },
  {
    role: "Scientist-SC (Associate Product Manager, NavIC)",
    company: "Indian Space Research Organisation (ISRO)",
    period: "2018 – 2022",
    bullets: [
      "Developed 1-year and 5-year strategic priorities, investment priorities, and success metrics for the Navigation Applications Group",
      "Led end-to-end lifecycle of NavIC-based hazardous material trackers; architected FOTA pipeline ensuring 99.9% uptime in remote environments",
      "Drove strategic collaboration between ISRO, Qualcomm, and Xiaomi — NavIC integrated into 25%+ of Android handsets sold in India",
      "Built ML models (LSTM) to analyze global satellite signal performance, defining next-gen product strategy",
      "Drove 2.5x increase in market adoption for NavIC Messaging Receiver; led UI/UX redesign using VoC data and A/B testing",
    ],
  },
  {
    role: "Summer Intern",
    company: "IBM Research Laboratory",
    period: "2016",
    bullets: [
      "Generated self-evolving filters for image processing using genetic algorithms (AI/ML), increasing throughput by 40%",
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
            <div key={exp.role + exp.period}>
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
