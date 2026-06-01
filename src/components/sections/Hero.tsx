import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import EmotionWheel from "@/components/EmotionWheel";
import { EMOTIONS, PRIMARIES, type EmotionKey } from "@/lib/emotions";

const PLAY_URL = "https://play.google.com/store/apps/details?id=com.mogster.affectatlas";

const BASE = 200; // px the hidden measurer renders at
const MAX_PX = 188;
const MIN_PX = 44;

const Hero = () => {
  const reduce = useReducedMotion();
  const [activeKey, setActiveKey] = useState<EmotionKey>("joy");
  const [paused, setPaused] = useState(false);

  // The wheel is the source of truth: it auto-advances and re-themes the stage.
  useEffect(() => {
    if (reduce || paused) return;
    const id = setInterval(() => {
      setActiveKey((k) => {
        const idx = PRIMARIES.findIndex((p) => p.key === k);
        return PRIMARIES[(idx + 1) % PRIMARIES.length].key;
      });
    }, 2800);
    return () => clearInterval(id);
  }, [reduce, paused]);

  const e = EMOTIONS[activeKey];

  // Auto-fit the headline word to the column width (the real faces vary wildly).
  const lineRef = useRef<HTMLSpanElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [size, setSize] = useState(120);
  useLayoutEffect(() => {
    const fit = () => {
      const line = lineRef.current;
      const m = measureRef.current;
      if (!line || !m) return;
      const avail = line.clientWidth;
      const w = m.getBoundingClientRect().width;
      if (!w || !avail) return;
      setSize(Math.max(MIN_PX, Math.min(MAX_PX, (avail * 0.99 * BASE) / w)));
    };
    fit();
    const ro = new ResizeObserver(fit);
    if (lineRef.current) ro.observe(lineRef.current);
    if (typeof document !== "undefined" && document.fonts) document.fonts.ready.then(fit);
    return () => ro.disconnect();
  }, [activeKey]);

  // Responsive wheel sizing.
  const wheelWrap = useRef<HTMLDivElement>(null);
  const [wheelSize, setWheelSize] = useState(420);
  useEffect(() => {
    const fit = () => {
      const w = wheelWrap.current?.clientWidth;
      if (w) setWheelSize(Math.max(280, Math.min(440, w)));
    };
    fit();
    const ro = new ResizeObserver(fit);
    if (wheelWrap.current) ro.observe(wheelWrap.current);
    return () => ro.disconnect();
  }, []);

  const handleHover = (k: EmotionKey | null) => {
    if (k) {
      setActiveKey(k);
      setPaused(true);
    } else {
      setPaused(false);
    }
  };

  return (
    <section
      data-emotion={activeKey}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
      style={{
        background: "var(--color-surface)",
        color: "var(--color-on-surface)",
        paddingBottom: "var(--space-xl, 2rem)",
        // Each emotion arrives in its own motion character (Anger slams, Sadness drifts).
        transition:
          "background-color calc(var(--motion-duration, 350ms) + 250ms) var(--motion-easing, ease), color calc(var(--motion-duration, 350ms) + 250ms) var(--motion-easing, ease)",
      }}
    >
      <div className="atlas grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Left: headline, re-themed live to the active emotion's real system */}
        <div style={{ fontFamily: "var(--font-body)" }}>
          <p
            className="label flex items-center gap-3 opacity-70"
            style={{ fontFamily: "var(--font-body)", marginBottom: "var(--space-xl, 2rem)" }}
          >
            <span className="h-px w-10 bg-current opacity-50" />
            {e.name} · {e.northStar}
          </p>

          <h1
            style={{
              fontFamily: "var(--font-headline)",
              letterSpacing: "var(--tracking-headline, -0.02em)",
              lineHeight: "var(--leading-headline, 1.05)",
            }}
          >
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[clamp(1.6rem,3.4vw,2.7rem)] font-semibold leading-[1.05] opacity-90"
            >
              Design systems that start with
            </motion.span>

            <span ref={lineRef} className="relative mt-2 block w-full" style={{ height: `${size * 0.84}px` }}>
              <AnimatePresence initial={false}>
                <motion.span
                  key={e.key}
                  initial={reduce ? false : { opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -22 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 top-0 whitespace-nowrap font-extrabold leading-[0.84]"
                  style={{ color: "var(--color-primary)", fontFamily: "var(--font-headline)", fontSize: `${size}px`, letterSpacing: "var(--tracking-headline, -0.02em)" }}
                >
                  {e.name.toLowerCase()}.
                </motion.span>
              </AnimatePresence>
              <span
                ref={measureRef}
                aria-hidden
                className="pointer-events-none invisible absolute whitespace-nowrap font-extrabold"
                style={{ fontFamily: "var(--font-headline)", fontSize: `${BASE}px`, letterSpacing: "var(--tracking-headline, -0.02em)", left: -99999, top: 0 }}
              >
                {e.name.toLowerCase()}.
              </span>
            </span>
          </h1>

          <p
            className="max-w-lg text-pretty text-lg opacity-80"
            style={{
              fontFamily: "var(--font-body)",
              lineHeight: "var(--leading-body, 1.6)",
              letterSpacing: "var(--tracking-body, 0)",
              marginTop: "var(--space-lg, 1.5rem)",
            }}
          >
            AffectAtlas couples Plutchik's emotion wheel to a full design engine. Pick a feeling and
            the whole system follows, surface, type, colour, spacing, and motion. This page is the demo.
          </p>

          <div
            className="flex flex-wrap items-center"
            style={{ marginTop: "var(--space-xl, 2rem)", gap: "var(--space-md, 1rem)" }}
          >
            <a
              href={PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-base font-bold transition-transform duration-300 hover:-translate-y-0.5"
              style={{
                background: "var(--color-primary)",
                color: "var(--color-on-primary)",
                borderRadius: "var(--radius-lg, 12px)",
                fontFamily: "var(--font-body)",
              }}
            >
              Get the app
              <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </a>
            <a
              href="#catalogue"
              className="group inline-flex items-center gap-2 text-base font-semibold opacity-80 transition-opacity hover:opacity-100"
              style={{ fontFamily: "var(--font-body)" }}
            >
              See the atlas
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>

          <p
            className="label opacity-60"
            style={{ fontFamily: "var(--font-body)", marginTop: "var(--space-lg, 1.5rem)" }}
          >
            Free to explore · {e.font} + {e.levels.join(" / ")}
          </p>
        </div>

        {/* Right: the interactive wheel drives it all */}
        <motion.div
          ref={wheelWrap}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <EmotionWheel activeKey={activeKey} onHover={handleHover} size={wheelSize} />
          <p className="label mt-6 text-center opacity-70" style={{ fontFamily: "var(--font-body)" }}>
            Plutchik's wheel · hover a petal to explore
          </p>
        </motion.div>
      </div>

      {/* fade the (possibly light) hero into the dark journey below */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--background)))" }}
      />
    </section>
  );
};

export default Hero;
