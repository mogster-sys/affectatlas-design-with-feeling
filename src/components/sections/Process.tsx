import Reveal from "@/components/Reveal";
import { EMOTIONS } from "@/lib/emotions";

const steps = [
  {
    n: "01",
    emotion: EMOTIONS.joy,
    title: "Select your emotion",
    body: "Choose from eight primaries on the interactive wheel, then blend them for nuance.",
  },
  {
    n: "02",
    emotion: EMOTIONS.trust,
    title: "We handle the complexity",
    body: "The engine maps your emotion across eleven design dimensions, each grounded in Plutchik's psychoevolutionary theory.",
  },
  {
    n: "03",
    emotion: EMOTIONS.anticipation,
    title: "Export your system",
    body: "Ship to CSS, Tailwind, Figma Tokens, Swift, Kotlin, SCSS, JSON, W3C Design Tokens, or an AI prompt. Nine formats, ready to build.",
  },
];

const Process = () => {
  return (
    <section id="process" className="relative py-28 lg:py-40">
      <div className="atlas">
        <Reveal>
          <p className="label mb-8 flex items-center gap-3 text-muted-foreground">
            <span className="h-px w-10 bg-current opacity-50" />
            Plate Nº 06 — How it works
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-3xl font-display text-[clamp(2rem,4.6vw,3.75rem)] font-extrabold leading-[1.0]">
            From a feeling to a finished system, in three steps.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {steps.map((s, idx) => (
            <Reveal key={s.n} delay={0.08 * idx} className="pt-6">
              <div className="mb-6 h-[2px] w-full" style={{ background: s.emotion.inkVar, opacity: 0.7 }} />
              <span
                className={`${s.emotion.fontClass} block text-[clamp(3rem,7vw,5.5rem)] leading-[0.8]`}
                style={{ color: s.emotion.inkVar }}
              >
                {s.n}
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold">{s.title}</h3>
              <p className="mt-3 text-pretty leading-relaxed text-foreground/70">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
