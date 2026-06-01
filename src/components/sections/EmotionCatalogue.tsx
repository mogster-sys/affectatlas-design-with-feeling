import Reveal from "@/components/Reveal";
import { EMOTIONS, PRIMARIES, type EmotionKey } from "@/lib/emotions";

const dyads: { name: string; blend: [EmotionKey, EmotionKey]; note?: string }[] = [
  { name: "Love", blend: ["joy", "trust"], note: "3 variants — Love · Passion · Lust" },
  { name: "Submission", blend: ["trust", "fear"] },
  { name: "Alarm", blend: ["fear", "surprise"] },
  { name: "Disappointment", blend: ["surprise", "sadness"] },
  { name: "Remorse", blend: ["sadness", "disgust"] },
  { name: "Contempt", blend: ["disgust", "anger"] },
  { name: "Aggressiveness", blend: ["anger", "anticipation"] },
  { name: "Optimism", blend: ["anticipation", "joy"] },
];

const deepened: { name: string; parent: EmotionKey }[] = [
  { name: "Contentment", parent: "joy" },
  { name: "Pride", parent: "joy" },
  { name: "Awe", parent: "surprise" },
  { name: "Confusion", parent: "surprise" },
  { name: "Guilt", parent: "sadness" },
  { name: "Depression", parent: "sadness" },
  { name: "Loneliness", parent: "sadness" },
  { name: "Appalled", parent: "disgust" },
  { name: "Frustration", parent: "anger" },
  { name: "Jealousy", parent: "anger" },
  { name: "Fright", parent: "fear" },
  { name: "Embarrassment", parent: "fear" },
  { name: "Inspiration", parent: "anticipation" },
];

const EmotionCatalogue = () => {
  return (
    <section id="catalogue" className="relative py-28 lg:py-40">
      <div className="atlas">
        <Reveal>
          <p className="label mb-8 flex items-center gap-3 text-muted-foreground">
            <span className="h-px w-10 bg-current opacity-50" />
            Plate Nº 04 — The atlas
          </p>
        </Reveal>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal delay={0.05}>
            <h2 className="font-display text-[clamp(2.25rem,5.5vw,4.5rem)] font-extrabold leading-[0.95]">
              Twenty-nine feelings.
              <br />
              One system each.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-pretty text-muted-foreground lg:text-right">
              From Plutchik's eight primaries to blended dyads and deepened nuances. Every entry
              generates its own research-backed design system, in its own colour and type.
            </p>
          </Reveal>
        </div>

        {/* Primaries — name in its own specimen face, with its three intensities */}
        <div className="mt-16">
          <p className="label mb-6 text-muted-foreground/70">Eight primaries · Plutchik's wheel</p>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-border/60 sm:grid-cols-4">
            {PRIMARIES.map((e, idx) => (
              <Reveal
                key={e.key}
                delay={0.03 * idx}
                className="group relative flex min-h-[11rem] flex-col justify-between bg-[hsl(var(--background-elevated))] p-5"
              >
                <div className="label flex items-center justify-between text-muted-foreground/70">
                  <span>Nº {String(idx + 1).padStart(2, "0")}</span>
                  <span className="h-3 w-3 rounded-full" style={{ background: e.inkVar }} />
                </div>
                <div>
                  <span
                    className={`${e.fontClass} block break-words text-[clamp(1.5rem,3.4vw,2.4rem)] leading-[0.95] transition-transform duration-300 group-hover:-translate-y-0.5`}
                    style={{ color: e.inkVar }}
                  >
                    {e.name}
                  </span>
                  <p className="label mt-2 text-[0.62rem] text-muted-foreground/60">{e.levels.join(" · ")}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Dyads — each one shown as the literal blend of its two parents */}
        <div className="mt-14">
          <p className="label mb-6 text-muted-foreground/70">Eight dyads · two feelings, one mood</p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {dyads.map((d, idx) => {
              const from = EMOTIONS[d.blend[0]];
              const to = EMOTIONS[d.blend[1]];
              return (
                <Reveal key={d.name} delay={0.03 * idx} className="plate overflow-hidden">
                  <div
                    className="h-16 w-full"
                    style={{ background: `linear-gradient(105deg, ${from.inkVar}, ${to.inkVar})` }}
                  />
                  <div className="p-4">
                    <p className="font-display text-lg font-bold leading-tight">{d.name}</p>
                    <p className="label mt-1 text-muted-foreground">
                      {from.name} + {to.name}
                    </p>
                    {d.note && (
                      <p className="mt-2 text-xs" style={{ color: EMOTIONS.joy.inkVar }}>
                        {d.note}
                      </p>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Deepened — each tinted by its parent emotion's colour */}
        <div className="mt-14">
          <p className="label mb-6 text-muted-foreground/70">Thirteen deepened · nuanced states</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {deepened.map((e, idx) => {
              const parent = EMOTIONS[e.parent];
              return (
                <Reveal
                  key={e.name}
                  delay={0.02 * idx}
                  className="flex items-center gap-3 rounded-lg border border-border/50 p-3"
                >
                  <span
                    className="h-9 w-9 shrink-0 rounded-md"
                    style={{
                      background: parent.inkVar,
                      boxShadow: `0 0 0 4px color-mix(in oklab, ${parent.inkVar}, transparent 82%)`,
                    }}
                  />
                  <div className="min-w-0">
                    <p className="truncate font-display font-semibold leading-tight">{e.name}</p>
                    <p className="label text-muted-foreground/70">{parent.name}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <p className="mt-8 text-pretty text-sm text-muted-foreground">
            Each runs at three intensities, for eighty-seven complete advisories in total.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmotionCatalogue;
