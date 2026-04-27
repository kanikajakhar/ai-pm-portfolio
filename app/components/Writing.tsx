const highlights = [
  {
    title: "Google AI Hackathon — 2nd Place",
    tag: "Award",
    date: "2025",
    description:
      "Developed an AI agent and companion device for the blind and visually impaired using Gemini. Recognized for innovation in accessibility-focused AI.",
  },
  {
    title: "Speaker & Panelist — Gender Diversity in Space & Tech",
    tag: "Advocacy",
    date: "2022 – Present",
    description:
      "Invited to 20+ events as a speaker and panelist advocating for gender diversity in the space and technology sector.",
  },
  {
    title: "Department Rank 1 — IIT Jodhpur",
    tag: "Academic",
    date: "2018",
    description:
      "Certificate of Academic Distinction for highest CGPA in Electrical Engineering. Microsoft Hackathon Winner for XR app development.",
  },
];

export default function Writing() {
  return (
    <section id="writing" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Awards & Recognition</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl">
          Notable achievements in AI innovation, academic excellence, and
          community leadership.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium px-2 py-0.5 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full">
                  {item.tag}
                </span>
                <span className="text-xs text-zinc-400">{item.date}</span>
              </div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
