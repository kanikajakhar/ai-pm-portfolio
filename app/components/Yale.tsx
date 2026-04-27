import FadeIn from "./FadeIn";

export default function Yale() {
  return (
    <section id="yale" className="py-28 md:py-36 px-6">
      <div className="max-w-[720px] mx-auto text-center">
        <FadeIn>
          <p className="text-sm font-medium tracking-wider text-accent uppercase mb-3">
            Campus
          </p>
          <h2 className="text-4xl md:text-[48px] font-bold tracking-tight leading-tight mb-14">
            My time at Yale.
          </h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-8 text-left">
          <FadeIn delay={80}>
            <div>
              <h3 className="text-lg font-semibold mb-4">Teaching & Research</h3>
              <ul className="space-y-3 text-[15px] text-secondary leading-relaxed">
                <li><span className="text-foreground font-medium">TA:</span> Customer, Business Experiments, Behavioral Economics, IE Norway</li>
                <li><span className="text-foreground font-medium">RA:</span> Marketing</li>
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={160}>
            <div>
              <h3 className="text-lg font-semibold mb-4">Clubs & Leadership</h3>
              <ul className="space-y-3 text-[15px] text-secondary leading-relaxed">
                <li>Honor Committee</li>
                <li>Admissions Interviewer</li>
                <li>Yale Table Tech (AI) VC Lead</li>
                <li>B&amp;E Conference Lead</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
