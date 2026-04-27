import FadeIn from "./FadeIn";

const principles = [
  {
    number: "01",
    title: "Listen to the customer",
  },
  {
    number: "02",
    title: "Listen to the data",
  },
  {
    number: "03",
    title: "Create MVP before full launches",
  },
];

export default function Philosophy() {
  return (
    <section className="py-28 md:py-36 px-6 bg-black dark:bg-black">
      <div className="max-w-[720px] mx-auto text-center">
        <FadeIn>
          <p className="text-sm font-medium tracking-wider text-accent uppercase mb-3">
            Approach
          </p>
          <h2 className="text-4xl md:text-[48px] font-bold tracking-tight leading-tight text-white mb-14">
            My product philosophy.
          </h2>
        </FadeIn>
        <div className="space-y-10">
          {principles.map((p, i) => (
            <FadeIn key={p.number} delay={i * 100}>
              <div className="text-left">
                <span className="text-xs text-accent font-medium tabular-nums">{p.number}</span>
                <p className="text-2xl md:text-3xl font-semibold text-white mt-2 leading-snug">
                  {p.title}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
