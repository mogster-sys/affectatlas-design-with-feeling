import Reveal from "@/components/Reveal";
import EmotionScreenShowcase from "@/components/EmotionScreenShowcase";
import { EMOTIONS } from "@/lib/emotions";

const trust = EMOTIONS.trust.inkVar;

const Solution = () => {
  return (
    <section id="solution" className="relative py-28 lg:py-40">
      <div className="atlas">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <p className="label mb-8 flex items-center gap-3" style={{ color: trust }}>
                <span className="h-px w-10" style={{ background: trust }} />
                Plate Nº 02 — The flip
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display text-[clamp(2.25rem,4.6vw,3.75rem)] font-extrabold leading-[1.0]">
                What if your design system began with{" "}
                <span style={{ color: trust }}>how you want people to feel?</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 max-w-xl space-y-5 text-lg leading-relaxed text-foreground/70">
                <p>
                  We built AffectAtlas because we had been where you are: staring at colour pickers,
                  wondering why nothing felt right, nudging type scales that looked fine and never
                  landed.
                </p>
                <p>
                  So we did the research, synthesising decades of work in psychology, colour science,
                  and emotional design into one tool that does what intuition wishes it could. It
                  translates a feeling into design tokens.
                </p>
                <p className="font-medium text-foreground">
                  Start with the emotion. Let the design follow.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10">
                <div className="hairline mb-5" style={{ ["--world" as string]: trust }} />
                <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: trust }}>
                  Some feelings run deeper
                </p>
                <p className="mt-2 max-w-lg text-pretty text-muted-foreground">
                  Love alone offers three variant advisories, Love, Passion, and Lust, each a complete
                  design system. One emotion, three radically different visual languages.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="label mt-8 text-muted-foreground">Backed by 40+ years of emotion research</p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <EmotionScreenShowcase />
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Same app, three emotions. The design system transforms everything.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Solution;
