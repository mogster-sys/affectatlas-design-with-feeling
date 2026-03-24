import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const primaries = [
  { name: "Joy", color: "hsl(var(--emotion-joy))" },
  { name: "Trust", color: "hsl(var(--emotion-trust))" },
  { name: "Fear", color: "hsl(var(--emotion-fear))" },
  { name: "Surprise", color: "hsl(var(--emotion-surprise))" },
  { name: "Sadness", color: "hsl(var(--emotion-sadness))" },
  { name: "Disgust", color: "hsl(var(--emotion-disgust))" },
  { name: "Anger", color: "hsl(var(--emotion-anger))" },
  { name: "Anticipation", color: "hsl(var(--emotion-anticipation))" },
];

const dyads = [
  { name: "Love", blend: "Joy + Trust" },
  { name: "Submission", blend: "Trust + Fear" },
  { name: "Alarm", blend: "Fear + Surprise" },
  { name: "Disappointment", blend: "Surprise + Sadness" },
  { name: "Remorse", blend: "Sadness + Disgust" },
  { name: "Contempt", blend: "Disgust + Anger" },
  { name: "Aggressiveness", blend: "Anger + Anticipation" },
  { name: "Optimism", blend: "Anticipation + Joy" },
];

const extras = [
  { name: "Contentment", parent: "Joy" },
  { name: "Pride", parent: "Joy" },
  { name: "Awe", parent: "Surprise" },
  { name: "Confusion", parent: "Surprise" },
  { name: "Guilt", parent: "Sadness" },
  { name: "Depression", parent: "Sadness" },
  { name: "Loneliness", parent: "Sadness" },
  { name: "Appalled", parent: "Disgust" },
  { name: "Frustration", parent: "Anger" },
  { name: "Jealousy", parent: "Anger" },
  { name: "Fright", parent: "Fear" },
  { name: "Embarrassment", parent: "Fear" },
  { name: "Inspiration", parent: "Anticipation" },
];

const EmotionCatalogue = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="features" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            <span className="gradient-text">29 emotions.</span> One system.
          </h2>
          <p className="text-lg text-muted-foreground">
            From Plutchik's 8 primaries to blended dyads and deepened nuances — every emotion generates a unique, research-backed design system.
          </p>
        </motion.div>

        {/* Three groups */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Primaries */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="font-display text-lg font-semibold mb-2">8 Primary Emotions</h3>
            <p className="text-sm text-muted-foreground mb-6">Plutchik's foundational wheel</p>
            <div className="flex flex-wrap gap-2">
              {primaries.map((e) => (
                <span
                  key={e.name}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border border-border/50 bg-secondary/50"
                >
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: e.color }} />
                  {e.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Dyads */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="font-display text-lg font-semibold mb-2">8 Blended Dyads</h3>
            <p className="text-sm text-muted-foreground mb-6">Two emotions, one feeling</p>
            <div className="space-y-2.5">
              {dyads.map((d) => (
                <div key={d.name} className="flex items-center justify-between text-sm">
                  <span className="font-medium">{d.name}</span>
                  <span className="text-muted-foreground text-xs">{d.blend}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Extras */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="font-display text-lg font-semibold mb-2">13 Deepened Emotions</h3>
            <p className="text-sm text-muted-foreground mb-6">Nuanced emotional states</p>
            <div className="flex flex-wrap gap-2">
              {extras.map((e) => (
                <span
                  key={e.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm border border-border/50 bg-secondary/50"
                >
                  {e.name}
                  <span className="text-xs text-muted-foreground">· {e.parent}</span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmotionCatalogue;
