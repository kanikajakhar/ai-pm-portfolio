const experiences = [
  {
    role: "Summer Consultant",
    company: "Boston Consulting Group (BCG)",
    period: "2025",
    color: "from-blue-500 to-indigo-500",
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
    color: "from-indigo-500 to-violet-500",
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
    color: "from-violet-500 to-purple-500",
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
    color: "from-purple-500 to-pink-500",
    bullets: [
      "Generated self-evolving filters for image processing using genetic algorithms (AI/ML), increasing throughput by 40%",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-2">
          Experience
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Where I&apos;ve worked
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-300 via-violet-300 to-purple-300 dark:from-indigo-800 dark:via-violet-800 dark:to-purple-800" />

          <div className="space-y-10">
            {experiences.map((exp) => (
              <div key={exp.role + exp.period} className="relative pl-8 md:pl-14">
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-4 top-1 w-3 h-3 -translate-x-[6.5px] rounded-full bg-gradient-to-r ${exp.color} ring-4 ring-white dark:ring-gray-950`}
                />

                <div className="bg-white dark:bg-gray-900/60 rounded-2xl border border-gray-200/80 dark:border-gray-800/80 p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                    <div>
                      <h3 className="font-bold">{exp.role}</h3>
                      <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex gap-3"
                      >
                        <span className="text-gray-300 dark:text-gray-600 mt-1 shrink-0">
                          &bull;
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
