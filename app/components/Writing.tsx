import FadeIn from "./FadeIn";

const highlights = [
  {
    title: "Google AI Hackathon — 2nd Place",
    subtitle: "AI agent for the visually impaired using Gemini",
    date: "2026",
  },
  {
    title: "Speaker & Panelist",
    subtitle: "20+ events advocating for gender diversity in space & technology",
    date: "2022 – Present",
  },
  {
    title: "Department Rank 1, IIT Jodhpur",
    subtitle: "Certificate of Academic Distinction, highest CGPA in Electrical Engineering",
    date: "2018",
  },
  {
    title: "Microsoft Hackathon Winner",
    subtitle: "XR app development",
    date: "2016",
  },
];

export default function Writing() {
  return (
    <section id="awards" className="py-28 md:py-36 px-6 bg-tertiary">
      <div className="max-w-[720px] mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-wider text-accent uppercase mb-3">
              Recognition
            </p>
            <h2 className="text-4xl md:text-[48px] font-bold tracking-tight leading-tight">
              Awards & highlights.
            </h2>
          </div>
        </FadeIn>
        <div className="space-y-0 divide-y divide-foreground/5">
          {highlights.map((item, i) => (
            <FadeIn key={item.title} delay={i * 80}>
              <div className="py-7 first:pt-0 last:pb-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-secondary mt-0.5">{item.subtitle}</p>
                  </div>
                  <p className="text-xs text-secondary/60 tabular-nums whitespace-nowrap">{item.date}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
