import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const checkmarks = [
  "Research-backed palettes",
  "One-click export",
  "Instant transformation",
];

// Emotion ribbons flowing from the wheel - words grouped by emotion color
const ribbonRows = [
  {
    words: [
      { text: "FEROCITY", color: "hsl(4, 90%, 58%)" },
      { text: "DOMINANCE", color: "hsl(33, 100%, 50%)" },
      { text: "FORCE", color: "hsl(4, 90%, 58%)" },
    ],
    offset: 0,
  },
  {
    words: [
      { text: "Vastness", color: "hsl(199, 98%, 48%)" },
      { text: "Wonder", color: "hsl(291, 64%, 42%)" },
      { text: "Infinity", color: "hsl(33, 100%, 50%)" },
    ],
    offset: 0.1,
  },
  {
    words: [
      { text: "Devotion", color: "hsl(88, 50%, 49%)" },
      { text: "Tenderness", color: "hsl(199, 98%, 48%)" },
      { text: "Adoration", color: "hsl(4, 90%, 58%)" },
    ],
    offset: 0.2,
  },
  {
    words: [
      { text: "Obsession", color: "hsl(291, 64%, 42%)" },
      { text: "Fixation", color: "hsl(88, 50%, 49%)" },
    ],
    offset: 0.3,
  },
  {
    words: [
      { text: "dread", color: "hsl(232, 38%, 55%)" },
      { text: "terror", color: "hsl(291, 64%, 42%)" },
      { text: "foreboding", color: "hsl(199, 98%, 48%)" },
    ],
    offset: 0.4,
  },
];

const emotions = [
  { name: "Anger", color: "hsl(4, 90%, 58%)", rotation: 0 },
  { name: "Anticipation", color: "hsl(33, 100%, 50%)", rotation: 45 },
  { name: "Joy", color: "hsl(48, 100%, 50%)", rotation: 90 },
  { name: "Trust", color: "hsl(88, 50%, 49%)", rotation: 135 },
  { name: "Sadness", color: "hsl(232, 38%, 55%)", rotation: 180 },
  { name: "Surprise", color: "hsl(199, 98%, 48%)", rotation: 225 },
  { name: "Fear", color: "hsl(291, 64%, 42%)", rotation: 270 },
  { name: "Disgust", color: "hsl(16, 25%, 38%)", rotation: 315 },
];

const MiniWheel = () => {
  const size = 280;
  const center = size / 2;
  const outerRadius = size * 0.45;
  const innerRadius = size * 0.12;

  const polarToCartesian = (cx: number, cy: number, r: number, angle: number) => {
    const rad = ((angle - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };

  const createWedgePath = (startAngle: number, endAngle: number) => {
    const startOuter = polarToCartesian(center, center, outerRadius, startAngle);
    const endOuter = polarToCartesian(center, center, outerRadius, endAngle);
    const startInner = polarToCartesian(center, center, innerRadius, endAngle);
    const endInner = polarToCartesian(center, center, innerRadius, startAngle);
    return `M ${startOuter.x} ${startOuter.y} A ${outerRadius} ${outerRadius} 0 0 1 ${endOuter.x} ${endOuter.y} L ${startInner.x} ${startInner.y} A ${innerRadius} ${innerRadius} 0 0 0 ${endInner.x} ${endInner.y} Z`;
  };

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <defs>
        <filter id="wheel-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#wheel-glow)">
        {emotions.map((emotion, i) => (
          <path
            key={emotion.name}
            d={createWedgePath(i * 45, (i + 1) * 45)}
            fill={emotion.color}
            stroke="hsla(0,0%,100%,0.15)"
            strokeWidth="1.5"
          />
        ))}
      </g>
      <circle cx={center} cy={center} r={innerRadius - 1} fill="hsla(0,0%,100%,0.9)" />
    </svg>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16">
      {/* Cosmic dark background */}
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 60% 20%, hsla(4, 60%, 15%, 0.6) 0%, transparent 50%), radial-gradient(ellipse at 30% 80%, hsla(232, 40%, 12%, 0.5) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, hsla(187, 50%, 10%, 0.4) 0%, transparent 40%)",
        }}
      />

      {/* Subtle star particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px rounded-full bg-foreground/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.1, 0.6, 0.1] }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
            >
              Design systems for{" "}
              <span className="gradient-text">that feeling.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 text-balance"
            >
              Generate complete design advisories tuned to make your users feel what you want
              them to feel. 29 emotions, 11 design dimensions, 9 export formats — each backed
              by Plutchik's emotion research.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <Button
                size="lg"
                className="text-base px-8 py-6 glow-primary font-semibold group"
                asChild
              >
                <a href="#">
                  Get the app
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 py-6 border-border/50 hover:bg-secondary/50"
              >
                See how it works
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              {checkmarks.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  {item}
                </div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-sm text-muted-foreground"
            >
              Free to use. No account required.
            </motion.p>
          </div>

          {/* Right content - Wheel + Flowing Ribbons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* Glow behind wheel */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] h-[320px] blur-[80px] opacity-30"
              style={{
                background:
                  "conic-gradient(from 0deg, hsl(4, 90%, 58%), hsl(33, 100%, 50%), hsl(48, 100%, 50%), hsl(88, 50%, 49%), hsl(232, 38%, 55%), hsl(199, 98%, 48%), hsl(291, 64%, 42%), hsl(16, 25%, 38%), hsl(4, 90%, 58%))",
                borderRadius: "50%",
              }}
            />

            {/* Emotion wheel */}
            <div className="relative z-10">
              <MiniWheel />
            </div>

            {/* Flowing ribbon words */}
            <div className="relative z-10 mt-2 w-full max-w-md space-y-1">
              {ribbonRows.map((row, rowIdx) => (
                <motion.div
                  key={rowIdx}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + row.offset }}
                  className="flex items-center justify-center gap-4 py-1"
                  style={{
                    background: `linear-gradient(90deg, transparent 0%, hsla(${rowIdx * 40}, 30%, 20%, 0.15) 30%, hsla(${rowIdx * 40}, 30%, 20%, 0.15) 70%, transparent 100%)`,
                    borderRadius: "999px",
                  }}
                >
                  {row.words.map((word, wIdx) => (
                    <span
                      key={wIdx}
                      className="font-display font-semibold tracking-wide"
                      style={{
                        color: word.color,
                        fontSize: rowIdx === 0 ? "1.3rem" : rowIdx < 3 ? "1.1rem" : "0.95rem",
                        opacity: rowIdx < 2 ? 1 : 0.8,
                        textTransform: rowIdx === 0 ? "uppercase" : "none",
                        letterSpacing: rowIdx === 0 ? "0.15em" : "0.05em",
                      }}
                    >
                      {word.text}
                    </span>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Floating label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="glass-card px-6 py-3 rounded-full mt-6"
            >
              <span className="text-sm font-medium text-muted-foreground">
                29 emotions. Infinite feeling.
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
