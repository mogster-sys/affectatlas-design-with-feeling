import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Compass, Type, Palette, Move, Box, Layout, Pen, ShieldCheck, BookOpen, Layers, MessageSquare } from "lucide-react";

const dimensions = [
  { icon: Palette, label: "Color tokens" },
  { icon: Type, label: "Typography specimens" },
  { icon: Layout, label: "Spacing scales" },
  { icon: Move, label: "Motion curves" },
  { icon: Layers, label: "Depth & shadow" },
  { icon: Box, label: "Shape rules" },
  { icon: Layout, label: "Layout alignment" },
  { icon: Pen, label: "Iconography" },
  { icon: ShieldCheck, label: "Do's & don'ts" },
  { icon: MessageSquare, label: "Word clouds" },
  { icon: BookOpen, label: "Emotional context" },
];

const DesignAdvisory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden bg-card/30">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Compass className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Deep guidance</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Not just tokens. <span className="gradient-text">Design advisory.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every emotion includes a deep design advisory — not just colors, but 11 dimensions 
            of design guidance. 29 emotions, 3 intensities each, 87 complete design guidance 
            entries backed by emotion research.
          </p>
        </motion.div>

        {/* Dimensions grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {dimensions.map((dim, i) => (
            <motion.div
              key={dim.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="glass-card rounded-xl p-5 flex flex-col items-center gap-3 text-center"
            >
              <dim.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{dim.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom stat */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          Each advisory includes typography rationale, color philosophy, spacing approach, motion character, and contextual do/don't rules.
        </motion.p>
      </div>
    </section>
  );
};

export default DesignAdvisory;
