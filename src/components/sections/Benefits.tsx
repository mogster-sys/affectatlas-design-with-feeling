import Reveal from "@/components/Reveal";
import { EMOTIONS } from "@/lib/emotions";

const benefits = [
  {
    n: "01",
    emotion: EMOTIONS.joy,
    title: "Designs that resonate, not just function",
    body: "Build an emotional connection from the first interaction. Every element pulls in the same direction, toward the feeling you actually intend.",
    points: [
      "Emotion-to-colour mappings backed by research",
      "Cohesive palettes that feel intentional",
      "Typography tuned to the mood",
    ],
  },
  {
    n: "02",
    emotion: EMOTIONS.anticipation,
    title: "Eleven dimensions of guidance",
    body: "Every emotion ships a deep advisory. Not just colour, but a complete creative direction across the whole system.",
    points: [
      "Colour tokens, type specimens, spacing scales",
      "Motion curves, depth, shape, layout alignment",
      "Iconography, do's and don'ts, emotional context",
    ],
  },
  {
    n: "03",
    emotion: EMOTIONS.surprise,
    title: "Twenty-nine typographic identities",
    body: "Each emotion carries its own headline and body face, drawn from a curated library of fifty-eight Google Fonts. No two feelings read alike.",
    points: [
      "29 curated font pairings",
      "Research-backed type-to-emotion mapping",
      "A complete system in under five minutes",
    ],
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="relative py-28 lg:py-40">
      <div className="atlas">
        <Reveal>
          <p className="label mb-8 flex items-center gap-3 text-muted-foreground">
            <span className="h-px w-10 bg-current opacity-50" />
            Plate Nº 03 — Why it works
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-3xl font-display text-[clamp(2rem,4.4vw,3.5rem)] font-extrabold leading-[1.02]">
            Design with intention, not intuition alone.
          </h2>
        </Reveal>

        <div className="mt-16">
          {benefits.map((b, idx) => {
            const ink = b.emotion.inkVar;
            return (
              <Reveal key={b.n} delay={0.05 + idx * 0.08} className="border-t border-border/60 py-12 first:border-t-0 lg:py-16">
                <div className="grid gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-baseline lg:gap-14">
                  <span
                    className={`${b.emotion.fontClass} text-[clamp(3.5rem,9vw,8rem)] leading-[0.8]`}
                    style={{ color: ink }}
                  >
                    {b.n}
                  </span>

                  <div className="max-w-2xl">
                    <h3 className="font-display text-2xl font-bold sm:text-3xl">{b.title}</h3>
                    <p className="mt-4 text-pretty text-lg leading-relaxed text-foreground/70">{b.body}</p>
                  </div>

                  <ul className="space-y-3 lg:w-64">
                    {b.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: ink }} />
                        <span className="text-pretty">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
