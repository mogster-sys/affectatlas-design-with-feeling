import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { PRIMARIES, EMOTIONS } from "@/lib/emotions";

const PLAY_URL = "https://play.google.com/store/apps/details?id=com.mogster.affectatlas";
const joy = EMOTIONS.joy;

const FinalCTA = () => {
  const reduce = useReducedMotion();
  return (
    <section id="cta" className="relative overflow-hidden py-32 lg:py-44">
      {/* ambient flowing-ribbon backdrop (repurposed from the original hero idea) */}
      {!reduce && (
        <video
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-[1] h-full w-full object-cover opacity-[0.18] blur-[1px]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero-ribbons.mp4" type="video/mp4" />
        </video>
      )}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-[1] h-[60vmin] w-[90vmin] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: reduce ? 0.12 : 0.2 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
        style={{ background: joy.ink }}
      />

      <div className="atlas text-center">
        <Reveal>
          <p className="label mb-10 flex items-center justify-center gap-3 text-muted-foreground">
            <span className="h-px w-10 bg-current opacity-50" />
            Plate Nº 07 — Begin
            <span className="h-px w-10 bg-current opacity-50" />
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[0.95]">
            Start with a{" "}
            <span className={`${joy.fontClass} font-normal`} style={{ color: joy.ink }}>
              feeling
            </span>
            .
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-xl text-foreground/75">
            Let the design follow. Twenty-nine emotions, ready when you are.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <a
            href={PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-9 py-4 text-lg font-bold text-background transition-transform duration-300 hover:-translate-y-0.5"
          >
            Get the app
            <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
          </a>
          <p className="label mt-6 text-muted-foreground">
            Free to explore · Exports unlock with a one-time purchase
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-14 flex w-fit items-center gap-2" aria-hidden>
            {PRIMARIES.map((e) => (
              <span key={e.key} className="h-2 w-2 rounded-full" style={{ background: e.inkVar }} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FinalCTA;
