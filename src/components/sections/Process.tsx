import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MousePointer, Cog, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MousePointer,
    title: "Select your emotion",
    description: "Choose from 8 primary emotions on the interactive wheel. Blend them for nuance.",
  },
  {
    number: "02", 
    icon: Cog,
    title: "We handle the complexity",
    description: "Our engine maps your emotion across 11 design dimensions — colors, typography, spacing, motion, depth, shapes, layout, iconography, and rules — each backed by research from Plutchik's psychoevolutionary theory and curated by AI design tools.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Export your design system",
    description: "Download to CSS, JSON, Tailwind, SCSS, Figma Tokens, Swift, Kotlin, W3C Design Tokens, or AI Prompt format. Start designing immediately.",
  },
];

const Process = () => {
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
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            From emotion to export in <span className="gradient-text">3 simple steps</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-20 left-1/6 right-1/6 h-px bg-gradient-to-r from-primary via-accent to-emotion-trust" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="relative text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary mx-auto mb-6 flex items-center justify-center relative z-10">
                <step.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-sm text-primary font-semibold mb-2">Step {step.number}</div>
              <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
