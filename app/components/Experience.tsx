import FadeIn from "./FadeIn";

const experiences = [
  {
    role: "Summer Consultant",
    company: "Boston Consulting Group",
    period: "2025",
    bullets: [
      "Architected enterprise-wide AI inclusion framework for a Fortune-500 utility; identified $15M+ in operational efficiencies",
      "Spearheaded change management with C-suite and Engineering lead alignment",
      "Defined vendor strategy and transformation roadmap, including RFP design",
    ],
  },
  {
    role: "Product Manager, NavIC Applications",
    company: "Indian Space Research Organisation",
    period: "2022 – 2024",
    bullets: [
      "Shipped 5+ end-to-end products including drone tracking and IoT platforms; 27% user growth",
      "Launched 5 NavIC Personal Tracker accessories in two years",
      "Reduced annual transport costs 15% with automated billing for 20,000 government vehicles",
      "Led Bhuvan API geospatial platform; increased API call volume 20%",
    ],
  },
  {
    role: "Associate Product Manager, NavIC",
    company: "Indian Space Research Organisation",
    period: "2018 – 2022",
    bullets: [
      "Developed 1-year and 5-year strategic priorities for Navigation Applications Group",
      "Led NavIC hazardous material trackers with FOTA pipeline at 99.9% uptime",
      "Drove ISRO-Qualcomm-Xiaomi collaboration — 25%+ Android handset penetration",
      "Built LSTM models for satellite signal analysis, defining next-gen product strategy",
      "Achieved 2.5x market adoption for NavIC Messaging Receiver",
    ],
  },
  {
    role: "Summer Intern",
    company: "IBM Research Laboratory",
    period: "2016",
    bullets: [
      "Built self-evolving image processing filters using genetic algorithms, 40% throughput increase",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 md:py-36 px-6">
      <div className="max-w-[720px] mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-wider text-accent uppercase mb-3">
              Experience
            </p>
            <h2 className="text-4xl md:text-[48px] font-bold tracking-tight leading-tight">
              Where I&apos;ve worked.
            </h2>
          </div>
        </FadeIn>
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.role + exp.period} delay={i * 80}>
              <div className="relative pl-6 border-l-2 border-accent/20">
                <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-accent" />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <p className="text-sm text-accent font-medium">{exp.company}</p>
                  </div>
                  <p className="text-xs text-secondary tabular-nums">{exp.period}</p>
                </div>
                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet} className="text-[15px] text-secondary leading-relaxed">
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
