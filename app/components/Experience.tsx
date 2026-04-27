import FadeIn from "./FadeIn";

const experiences = [
  {
    role: "Summer Consultant",
    company: "Boston Consulting Group",
    period: "2025",
    bullets: [
      "Architected enterprise-wide AI inclusion framework for a Fortune-500 utility; identified $15M+ in operational efficiencies",
      "Spearheaded change management with C-suite and Engineering lead alignment, managing executive communications",
      "Defined vendor strategy and transformation roadmap, including RFP design for AI inclusion and technical capability",
    ],
  },
  {
    role: "Product Manager, NavIC Applications",
    company: "Indian Space Research Organisation",
    period: "2022 – 2024",
    bullets: [
      "Shipped 5+ end-to-end software products including drone tracking and IoT platforms; drove 27% increase in user acquisition",
      "Launched 5 NavIC Personal Tracker accessories in two years by establishing a new product development process",
      "Reduced annual transport costs 15% by designing automated billing for 20,000 government vehicles",
      "Led Bhuvan API geospatial platform strategy; increased API call volume 20%",
    ],
  },
  {
    role: "Associate Product Manager, NavIC",
    company: "Indian Space Research Organisation",
    period: "2018 – 2022",
    bullets: [
      "Developed 1-year and 5-year strategic priorities, investment priorities, and success metrics for Navigation Applications Group",
      "Led lifecycle of NavIC hazardous material trackers; architected FOTA pipeline ensuring 99.9% uptime in remote environments",
      "Drove ISRO-Qualcomm-Xiaomi collaboration — NavIC integrated into 25%+ of Android handsets sold in India",
      "Built LSTM models for global satellite signal analysis, defining next-gen product strategy",
      "Achieved 2.5x market adoption increase for NavIC Messaging Receiver; led UI/UX redesign with A/B testing",
    ],
  },
  {
    role: "Summer Intern",
    company: "IBM Research Laboratory",
    period: "2016",
    bullets: [
      "Built self-evolving image processing filters using genetic algorithms, increasing throughput by 40%",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-[720px] mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-16">
            Experience
          </h2>
        </FadeIn>
        <div className="space-y-16">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.role + exp.period} delay={i * 80}>
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <p className="text-sm text-accent">{exp.company}</p>
                  </div>
                  <p className="text-xs text-secondary/60 tabular-nums">
                    {exp.period}
                  </p>
                </div>
                <ul className="space-y-3">
                  {exp.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-[15px] text-secondary leading-relaxed"
                    >
                      {bullet}
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
