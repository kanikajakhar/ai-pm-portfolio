const highlights = [
  {
    title: "Google AI Hackathon — 2nd Place",
    tag: "Award",
    date: "2025",
    description:
      "Developed an AI agent and companion device for the blind and visually impaired using Gemini. Recognized for innovation in accessibility-focused AI.",
    icon: "&#127942;",
  },
  {
    title: "Speaker & Panelist — Gender Diversity in Space & Tech",
    tag: "Advocacy",
    date: "2022 – Present",
    description:
      "Invited to 20+ events as a speaker and panelist advocating for gender diversity in the space and technology sector.",
    icon: "&#127908;",
  },
  {
    title: "Department Rank 1 — IIT Jodhpur",
    tag: "Academic",
    date: "2018",
    description:
      "Certificate of Academic Distinction for highest CGPA in Electrical Engineering. Microsoft Hackathon Winner for XR app development.",
    icon: "&#127891;",
  },
];

export default function Writing() {
  return (
    <section id="awards" className="py-28 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950/50 dark:to-transparent">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-2">
          Recognition
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Awards & highlights
        </h2>
        <p className="text-gray-500 dark:text-gray-500 mb-12 max-w-2xl">
          Notable achievements in AI innovation, academic excellence, and
          community leadership.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="group bg-white dark:bg-gray-900/60 rounded-2xl border border-gray-200/80 dark:border-gray-800/80 p-7 hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-800/50 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="text-2xl"
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                />
                <div>
                  <span className="text-xs font-semibold px-2 py-0.5 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 rounded-full">
                    {item.tag}
                  </span>
                </div>
                <span className="text-xs text-gray-400 ml-auto">
                  {item.date}
                </span>
              </div>
              <h3 className="font-bold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
