import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Zap, Target } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Designs that resonate, not just function",
    description: "Create emotional connections with your users from the first interaction. Every element works together to evoke the feeling you intend.",
    features: [
      "Emotion-to-color mappings backed by research",
      "Cohesive palettes that feel intentional",
      "Typography that matches the mood",
    ],
    color: "hsl(0, 80%, 55%)",
  },
  {
    icon: Zap,
    title: "Hours saved, confidence gained",
    description: "Stop second-guessing every design decision. Get a complete, justified design system in minutes instead of days.",
    features: [
      "Complete system in under 5 minutes",
      "No more endless palette iterations",
      "Built-in justification for every choice",
    ],
    color: "hsl(45, 100%, 55%)",
  },
  {
    icon: Target,
    title: "Precision without the guesswork",
    description: "Know exactly why your design works. Every token maps back to psychology research you can reference and share.",
    features: [
      "Research citations for every decision",
      "Shareable design rationale",
      "Consistent emotional language",
    ],
    color: "hsl(207, 85%, 55%)",
  },
];

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden bg-card/30">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Design with <span className="gradient-text">intention</span>, not intuition alone
          </h2>
          <p className="text-lg text-muted-foreground">
            Three ways AffectAtlas transforms how you create design systems
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group relative"
            >
              <div className="glass-card rounded-2xl p-8 h-full transition-all duration-300 hover:border-primary/30">
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${benefit.color}20` }}
                >
                  <benefit.icon 
                    className="w-7 h-7" 
                    style={{ color: benefit.color }} 
                  />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Features list */}
                <ul className="space-y-3">
                  {benefit.features.map((feature, j) => (
                    <li 
                      key={j}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <div 
                        className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                        style={{ backgroundColor: benefit.color }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
