export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-2">
          About
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          A little about me
        </h2>
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3 space-y-5 text-gray-600 dark:text-gray-400 leading-relaxed text-[15px]">
            <p>
              I&apos;m an AI Product Manager with a unique blend of{" "}
              <span className="text-foreground font-medium">space technology</span>,{" "}
              <span className="text-foreground font-medium">management consulting</span>, and{" "}
              <span className="text-foreground font-medium">hands-on ML</span> experience.
              At ISRO, I led cross-functional teams to ship satellite navigation
              products and drone-tracking platforms used across India.
            </p>
            <p>
              At BCG, I architected enterprise-wide AI inclusion frameworks for
              Fortune-500 clients, identifying $15M+ in operational efficiencies.
              I thrive on translating complex technical capabilities into products
              that drive measurable business outcomes.
            </p>
            <p>
              Currently pursuing my MBA at Yale School of Management, I&apos;m
              deepening my expertise in AI product strategy while serving as a
              speaker and panelist advocating for gender diversity in space and
              technology.
            </p>
          </div>
          <div className="md:col-span-2 space-y-4">
            <div className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-900/80 rounded-2xl p-5 border border-gray-200/80 dark:border-gray-800/80 hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-800/50 transition-all">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-lg">&#128205;</span>
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Location
                </p>
              </div>
              <p className="font-semibold pl-8">New Haven, CT</p>
            </div>
            <div className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-900/80 rounded-2xl p-5 border border-gray-200/80 dark:border-gray-800/80 hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-800/50 transition-all">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-lg">&#127891;</span>
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Education
                </p>
              </div>
              <p className="font-semibold pl-8">MBA, Yale School of Management</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 pl-8">
                B.Tech EE, IIT Jodhpur
              </p>
            </div>
            <div className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-900/80 rounded-2xl p-5 border border-gray-200/80 dark:border-gray-800/80 hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-800/50 transition-all">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-lg">&#127919;</span>
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Focus
                </p>
              </div>
              <p className="font-semibold pl-8">AI Products &amp; Strategy</p>
            </div>
            <div className="group bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-2xl p-5 border border-amber-200/60 dark:border-amber-800/30 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-lg">&#127769;</span>
                <p className="text-xs font-medium text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                  Fun Fact
                </p>
              </div>
              <p className="font-semibold text-amber-900 dark:text-amber-200 pl-8">
                My code lives on the moon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
