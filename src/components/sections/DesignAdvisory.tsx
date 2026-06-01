import Reveal from "@/components/Reveal";
import { EMOTIONS } from "@/lib/emotions";

const dimensions = [
  "Colour tokens",
  "Typography specimens",
  "Spacing scale",
  "Motion curves",
  "Depth & shadow",
  "Shape language",
  "Layout & alignment",
  "Iconography",
  "Do's & don'ts",
  "Word clouds",
  "Emotional context",
];

const ant = EMOTIONS.anticipation;

// Real values pulled from the app's Anticipation advisory (affectatlas-design-system.json).
const real = {
  northStar: "The Forward Lean",
  palette: ["#835000", "#a4670c", "#745a37", "#fff8f1", "#f9f3eb"],
  motionChar: "gathering",
  duration: "280ms",
  bezierPath: "M0 44 C 35 44, 0 0, 100 0", // cubic-bezier(0.35, 0, 0, 1)
  do: "Forward-leaning motion: slow start, fast arrival.",
  dont: "Static, centered grid layouts.",
  words: ["expectation", "eagerness", "excitement", "hope", "curiosity", "readiness", "vigilance", "longing"],
  feel: "Warm, directional, leaning forward: the split second before sunrise.",
};

const DesignAdvisory = () => {
  return (
    <section id="advisory" className="relative py-28 lg:py-40">
      <div className="atlas">
        <Reveal>
          <p className="label mb-8 flex items-center gap-3" style={{ color: ant.inkVar }}>
            <span className="h-px w-10" style={{ background: ant.inkVar }} />
            Plate Nº 05 — Deep guidance
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-3xl font-display text-[clamp(2rem,4.6vw,3.75rem)] font-extrabold leading-[1.0]">
            Not just tokens. A complete{" "}
            <span style={{ color: ant.inkVar }}>design advisory.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-pretty text-lg text-foreground/70">
            Every emotion carries eleven dimensions of guidance, at three intensities, for
            eighty-seven complete advisory entries. Below is the real one for Anticipation,
            straight from the app.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* The eleven dimensions as an atlas index */}
          <Reveal delay={0.1}>
            <p className="label mb-2 text-muted-foreground/70">Eleven dimensions</p>
            <ol>
              {dimensions.map((d, idx) => (
                <li
                  key={d}
                  className="flex items-baseline gap-4 border-b border-border/50 py-3 last:border-b-0"
                >
                  <span className="label w-6 shrink-0 text-muted-foreground/60">{String(idx + 1).padStart(2, "0")}</span>
                  <span className="font-display text-lg font-semibold">{d}</span>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* A real, filled-in advisory specimen */}
          <Reveal delay={0.18}>
            <figure className="plate overflow-hidden" style={{ borderColor: `color-mix(in oklab, ${ant.inkVar} 30%, transparent)` }}>
              <figcaption className="flex items-center justify-between border-b border-border/60 px-6 py-4">
                <span className="font-display text-lg font-bold">Advisory — Anticipation</span>
                <span className="label text-muted-foreground">{real.northStar}</span>
              </figcaption>

              <div className="grid gap-px bg-border/50 sm:grid-cols-2">
                {/* Colour — real palette */}
                <div className="bg-[hsl(var(--background-elevated))] p-6">
                  <p className="label mb-3 text-muted-foreground/70">Colour · real palette</p>
                  <div className="flex gap-1.5">
                    {real.palette.map((c) => (
                      <div key={c} className="h-10 flex-1 rounded-sm ring-1 ring-inset ring-white/10" style={{ background: c }} />
                    ))}
                  </div>
                </div>

                {/* Type — real pairing */}
                <div className="bg-[hsl(var(--background-elevated))] p-6">
                  <p className="label mb-3 text-muted-foreground/70">Type — {ant.font}</p>
                  <p className={`${ant.fontClass} text-4xl leading-none`} style={{ color: ant.inkVar }}>
                    Forward
                  </p>
                </div>

                {/* Motion — real bezier */}
                <div className="bg-[hsl(var(--background-elevated))] p-6">
                  <p className="label mb-3 text-muted-foreground/70">Motion — {real.motionChar} · {real.duration}</p>
                  <svg viewBox="0 0 100 44" className="h-12 w-full" preserveAspectRatio="none" aria-hidden>
                    <path d={real.bezierPath} fill="none" stroke={ant.inkVar} strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>

                {/* Do / Don't — real rules */}
                <div className="bg-[hsl(var(--background-elevated))] p-6">
                  <p className="label mb-3 text-muted-foreground/70">Do · Don't</p>
                  <p className="text-sm text-foreground/80">
                    <span style={{ color: ant.inkVar }}>Do</span> {real.do}
                  </p>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    <span className="text-muted-foreground/80">Don't</span> {real.dont}
                  </p>
                </div>
              </div>

              {/* Voice — real word cloud + feel */}
              <div className="border-t border-border/60 px-6 py-5">
                <p className="label mb-3 text-muted-foreground/70">Voice</p>
                <div className="flex flex-wrap gap-2">
                  {real.words.map((w) => (
                    <span
                      key={w}
                      className="rounded-full px-3 py-1 text-sm"
                      style={{ background: `color-mix(in oklab, ${ant.inkVar} 14%, transparent)`, color: ant.inkVar }}
                    >
                      {w}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm italic text-muted-foreground">{real.feel}</p>
              </div>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default DesignAdvisory;
