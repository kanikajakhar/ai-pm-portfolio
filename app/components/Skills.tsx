import FadeIn from "./FadeIn";

const skillGroups = [
  {
    title: "Product",
    skills: [
      "Product Strategy",
      "Roadmapping",
      "Cross-functional Leadership",
      "PRD / BRD Writing",
      "Stakeholder Management",
      "Vendor Strategy & RFP",
    ],
  },
  {
    title: "AI / ML",
    skills: [
      "LSTM Model Development",
      "AI Strategy Frameworks",
      "Generative AI / Gemini",
      "Sensor Fusion & Edge AI",
      "A/B Testing",
      "Data-Driven Decisions",
    ],
  },
  {
    title: "Technical",
    skills: [
      "Python",
      "SQL",
      "Power BI",
      "Excel-VBA",
      "JIRA",
      "API Platforms",
    ],
  },
  {
    title: "Leadership",
    skills: [
      "20+ Speaking Engagements",
      "Gender Diversity Advocacy",
      "Change Management",
      "Public-Private Partnerships",
      "UI/UX Redesign",
      "Market Analysis",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-tertiary">
      <div className="max-w-[980px] mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-16">
            Skills
          </h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.title} delay={i * 80}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary/60 mb-5">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-[15px] text-secondary"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
