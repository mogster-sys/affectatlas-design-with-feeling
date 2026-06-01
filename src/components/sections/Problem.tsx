import Reveal from "@/components/Reveal";

const painPoints = [
  "Colour palettes generated from a single hex, with no emotional coherence.",
  "Type pairings chosen for how they look, not for what they make people feel.",
  "Spacing systems that are mathematically perfect and emotionally arbitrary.",
  "Motion that is smooth but soulless: technically correct, feeling absent.",
];

// A deliberately lifeless specimen — the colour has drained out of the design.
const deadSwatches = ["hsl(36 4% 22%)", "hsl(36 4% 32%)", "hsl(36 4% 42%)", "hsl(36 3% 54%)", "hsl(36 3% 66%)"];

const Problem = () => {
  return (
    <section id="problem" className="relative py-28 lg:py-40">
      <div className="atlas">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <Reveal>
              <p className="label mb-8 flex items-center gap-3 text-muted-foreground">
                <span className="h-px w-10 bg-current opacity-50" />
                Plate Nº 01 — The problem
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-[0.98]">
                People are emotional.
                <br />
                <span className="text-muted-foreground">Most design tools aren&rsquo;t.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 max-w-xl space-y-5 text-lg leading-relaxed text-foreground/70">
                <p>
                  You have felt it before. A design that looks correct but feels wrong. Colours that
                  pass every accessibility check yet refuse to connect. A UI that is usable and
                  completely forgettable.
                </p>
                <p>
                  Most tools help you build <em className="not-italic text-foreground">things</em>.
                  Almost none help you build{" "}
                  <em className="not-italic text-foreground">feelings</em>. So the work functions,
                  and it does not resonate.
                </p>
              </div>
            </Reveal>

            <ol className="mt-12 max-w-xl">
              {painPoints.map((point, idx) => (
                <Reveal as="li" key={idx} delay={0.15 + idx * 0.07} className="border-t border-border/60 py-5">
                  <div className="flex gap-5">
                    <span className="label shrink-0 pt-1 text-muted-foreground/60">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <p className="text-pretty text-foreground/75">{point}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* The drained specimen */}
          <Reveal delay={0.2} className="lg:sticky lg:top-28">
            <figure className="plate overflow-hidden">
              <figcaption className="label flex items-center justify-between border-b border-border/60 px-6 py-4 text-muted-foreground">
                <span>Specimen — feeling absent</span>
                <span>desaturated</span>
              </figcaption>
              <div className="space-y-8 p-8">
                <div>
                  <p className="label mb-3 text-muted-foreground/70">Palette</p>
                  <div className="flex gap-2">
                    {deadSwatches.map((c) => (
                      <div key={c} className="h-12 flex-1 rounded-sm" style={{ background: c }} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="label mb-3 text-muted-foreground/70">Type</p>
                  <p className="font-display text-5xl font-medium text-muted-foreground">Aa Bb Cc</p>
                  <p className="mt-1 text-sm text-muted-foreground/60">Generic. Correct. Mute.</p>
                </div>
                <div>
                  <p className="label mb-3 text-muted-foreground/70">Mood</p>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[8%] rounded-full bg-muted-foreground/40" />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground/60">No emotional intent detected.</p>
                </div>
              </div>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Problem;
