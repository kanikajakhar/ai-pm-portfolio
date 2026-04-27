import FadeIn from "./FadeIn";

const highlights = [
  {
    title: "Google AI Hackathon",
    subtitle: "2nd Place — AI agent for the visually impaired using Gemini",
    date: "2025",
  },
  {
    title: "Speaker & Panelist",
    subtitle: "20+ events advocating for gender diversity in space and technology",
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
    date: "2017",
  },
];

export default function Writing() {
  return (
    <section id="awards" className="py-32 px-6 bg-tertiary">
      <div className="max-w-[720px] mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-16">
            Recognition
          </h2>
        </FadeIn>
        <div className="divide-y divide-foreground/5">
          {highlights.map((item, i) => (
            <FadeIn key={item.title} delay={i * 60}>
              <div className="py-6 first:pt-0 last:pb-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-secondary mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                  <p className="text-xs text-secondary/60 tabular-nums whitespace-nowrap">
                    {item.date}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
