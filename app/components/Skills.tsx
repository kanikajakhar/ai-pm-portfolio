const skillGroups = [
  {
    title: "Product Management",
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
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Skills & Tools</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-bold mb-4 text-violet-600 dark:text-violet-400">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-violet-500 rounded-full shrink-0" />
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
