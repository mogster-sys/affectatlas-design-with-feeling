import { useScroll, useTransform, motion, useReducedMotion } from "framer-motion";
import { JOURNEY } from "@/lib/emotions";

/**
 * Fixed background that makes the whole page "become" each emotion as you
 * scroll: the base colour interpolates through the emotional arc defined in
 * JOURNEY. Sits behind all content; sections layer their own accents on top.
 */
const JourneyBackground = () => {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();

  const color = useTransform(
    scrollYProgress,
    JOURNEY.map((s) => s.at),
    JOURNEY.map((s) => s.color),
  );

  // Faint film grain keeps large flat colour fields from banding on wide gamuts.
  const grain =
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")";

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor: reduce ? JOURNEY[0].color : color }}
      />
      {/* vignette: pulls focus to the centre column, deepens the edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, transparent 40%, hsl(36 40% 2% / 0.55) 100%)",
        }}
      />
      {/* grain */}
      <div
        className="absolute inset-0 mix-blend-overlay"
        style={{ backgroundImage: grain, opacity: 0.06 }}
      />
    </div>
  );
};

export default JourneyBackground;
