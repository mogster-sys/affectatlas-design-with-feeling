import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, Palette, Type, Move, Zap } from "lucide-react";

const painPoints = [
  {
    icon: Palette,
    text: "Color palettes generated from a single hex, with no emotional coherence",
  },
  {
    icon: Type,
    text: "Typography pairings based on looks, not on what feels right together",
  },
  {
    icon: Move,
    text: "Spacing systems that are mathematically perfect but emotionally arbitrary",
  },
  {
    icon: Zap,
    text: "Motion that is smooth but soulless — technically correct, emotionally empty",
  },
];

const Problem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
              <AlertCircle className="w-4 h-4 text-destructive" />
              <span className="text-sm font-medium text-destructive">The problem</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              Design is emotional.{" "}
              <span className="text-muted-foreground">Your process probably is not.</span>
            </h2>
          </motion.div>

          {/* Problem narrative */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-2xl p-8 lg:p-12 mb-12"
          >
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                You have felt it before. A design that looks "correct" but feels wrong. 
                Colors that pass accessibility checks but do not connect. A UI that is 
                usable but forgettable.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                That is because most design tools help you build <em>things</em>. 
                They do not help you build <em>feelings</em>.
              </p>
              <p className="text-xl text-foreground font-medium">
                The result? Designs that work but do not resonate. Products that function 
                but do not connect.
              </p>
            </div>
          </motion.div>

          {/* Pain points grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {painPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-card/50 border border-border/50 hover:border-border transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                  <point.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {point.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
