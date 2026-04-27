const skillGroups = [
  {
    title: "Product Management",
    icon: "&#128640;",
    skills: [
      "Product Strategy & Roadmapping",
      "Cross-functional Leadership",
      "PRD / BRD Writing",
      "Stakeholder Management (C-suite)",
      "Agile Sprints & Delivery",
      "Vendor Strategy & RFP Design",
    ],
  },
  {
    title: "AI / ML",
    icon: "&#129504;",
    skills: [
      "ML Model Development (LSTM)",
      "AI Strategy & Inclusion Frameworks",
      "Gemini / Generative AI",
      "Sensor Fusion & Edge AI",
      "A/B Testing & Experimentation",
      "Data-Driven Product Decisions",
    ],
  },
  {
    title: "Technical",
    icon: "&#128187;",
    skills: [
      "Python",
      "SQL",
      "MS Office (Excel-VBA, PowerPoint)",
      "Power BI",
      "JIRA",
      "API Platforms (Bhuvan)",
    ],
  },
  {
    title: "Leadership & Impact",
    icon: "&#127941;",
    skills: [
      "20+ Speaking Engagements",
      "Gender Diversity Advocacy",
      "Change Management",
      "Public-Private Partnerships",
      "UI/UX Redesign",
      "Competitive Market Analysis",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950/50 dark:to-transparent">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-2">
          Skills
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          What I work with
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-white dark:bg-gray-900/60 rounded-2xl border border-gray-200/80 dark:border-gray-800/80 p-6 hover:shadow-lg hover:border-indigo-200 dark:hover:border-indigo-800/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="text-2xl"
                  dangerouslySetInnerHTML={{ __html: group.icon }}
                />
                <h3 className="font-bold text-sm">{group.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2.5"
                  >
                    <span className="w-1 h-1 bg-indigo-500 rounded-full shrink-0 mt-2" />
                    {skill}
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
