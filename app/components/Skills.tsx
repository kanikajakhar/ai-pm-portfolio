const skillGroups = [
  {
    title: "Product Management",
    skills: [
      "Product Strategy & Roadmapping",
      "User Research & Jobs-to-be-Done",
      "A/B Testing & Experimentation",
      "PRDs & Technical Specs",
      "Stakeholder Management",
      "Agile / Scrum",
    ],
  },
  {
    title: "AI / ML",
    skills: [
      "ML Product Lifecycle",
      "Model Evaluation & Metrics",
      "Prompt Engineering",
      "RAG & Fine-tuning",
      "Responsible AI & Bias Mitigation",
      "MLOps & Model Monitoring",
    ],
  },
  {
    title: "Technical",
    skills: [
      "Python / SQL",
      "Data Analysis & Visualization",
      "API Design (REST/GraphQL)",
      "Cloud Platforms (AWS/GCP)",
      "Jupyter / Notebooks",
      "Git & CI/CD",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Jira / Linear",
      "Figma",
      "Amplitude / Mixpanel",
      "Notion / Confluence",
      "Miro / Whimsical",
      "Looker / Tableau",
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
