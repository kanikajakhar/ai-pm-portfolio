import FadeIn from "./FadeIn";

const skillGroups = [
  {
    title: "Product Management",
    color: "bg-blue-500",
    skills: [
      "Product Strategy & Roadmapping",
      "Cross-functional Leadership",
      "Product Requirement Document",
      "Stakeholder Management (C-suite)",
      "UI/UX Design",
      "Competitive Market Analysis",
    ],
  },
  {
    title: "AI / ML",
    color: "bg-violet-500",
    skills: [
      "AI Strategy & Inclusion Frameworks",
      "A/B Testing & Experimentation",
      "Data-Driven Product Decisions",
      "ML Model Development",
      "Gemini / Generative AI",
      "Sensor Fusion & Edge AI",
    ],
  },
  {
    title: "Technical",
    color: "bg-cyan-500",
    skills: [
      "Python",
      "SQL",
      "Power BI",
      "MS Office (Excel-VBA)",
      "JIRA",
      "API Platforms",
    ],
  },
  {
    title: "Leadership",
    color: "bg-orange-500",
    skills: [
      "Gender Diversity Advocacy",
      "Change Management",
      "Public-Private Partnerships",
      
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 px-6 bg-tertiary">
      <div className="max-w-[1024px] mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-wider text-accent uppercase mb-3">
              Skills
            </p>
            <h2 className="text-4xl md:text-[48px] font-bold tracking-tight leading-tight">
              What I work with.
            </h2>
          </div>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.title} delay={i * 100}>
              <div className="bg-background rounded-2xl p-7">
                <div className="flex items-center gap-2 mb-6">
                  <span className={`w-2.5 h-2.5 rounded-full ${group.color}`} />
                  <h3 className="text-sm font-semibold">{group.title}</h3>
                </div>
                <ul className="space-y-3">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-[14px] text-secondary leading-snug">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
