import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, BookOpen, Users, Shield } from "lucide-react";

const credentials = [
  { icon: BookOpen, text: "Backed by 40+ years of emotion research" },
];

const Solution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Lightbulb className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">The solution</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              What if your design system started with{" "}
              <span className="gradient-text">how you want people to feel?</span>
            </h2>

            <div className="space-y-6 text-muted-foreground mb-10">
              <p className="text-lg leading-relaxed">
                We built AffectAtlas because we have been where you are — staring at 
                color pickers, wondering why nothing feels right. Tweaking type scales 
                that look fine but do not land.
              </p>
              <p className="text-lg leading-relaxed">
                So we did the research. We synthesized decades of work in psychology, 
                color science, and emotional design into a single tool that does what 
                your intuition wishes it could: translate feelings into design tokens.
              </p>
              <p className="text-lg leading-relaxed font-medium text-foreground">
                AffectAtlas flips the process. Instead of starting with colors and 
                hoping they evoke the right emotion, you start with the emotion and 
                let the design follow.
              </p>
            </div>

            {/* Credentials */}
            <div className="flex flex-wrap gap-4">
              {credentials.map((cred, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <cred.icon className="w-4 h-4 text-primary" />
                  {cred.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Visual representation */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative glass-card rounded-2xl p-8 lg:p-10 overflow-hidden">
              {/* Gradient background */}
              <div className="absolute inset-0 opacity-10">
                <div 
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(135deg, hsl(45, 100%, 55%) 0%, hsl(122, 40%, 50%) 50%, hsl(207, 85%, 55%) 100%)",
                  }}
                />
              </div>

              <div className="relative z-10 space-y-8">
                {/* Step visualization */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                      1
                    </div>
                    <div>
                      <h4 className="font-display font-semibold mb-1">Choose your emotion</h4>
                      <p className="text-sm text-muted-foreground">Select from 8 primary emotions</p>
                    </div>
                  </div>

                  <div className="ml-6 pl-6 border-l-2 border-dashed border-border">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center text-accent font-bold text-lg">
                        2
                      </div>
                      <div>
                        <h4 className="font-display font-semibold mb-1">Consider the intensity</h4>
                        <p className="text-sm text-muted-foreground">Adjust how strongly the emotion comes through</p>
                      </div>
                    </div>
                  </div>

                  <div className="ml-6 pl-6 border-l-2 border-dashed border-border">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-emotion-trust/20 border-2 border-emotion-trust flex items-center justify-center text-emotion-trust font-bold text-lg">
                        3
                      </div>
                      <div>
                        <h4 className="font-display font-semibold mb-1">Blend for nuance</h4>
                        <p className="text-sm text-muted-foreground">Joy + Trust = Love</p>
                      </div>
                    </div>
                  </div>

                  <div className="ml-6 pl-6 border-l-2 border-dashed border-border">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-emotion-joy/20 border-2 border-emotion-joy flex items-center justify-center text-emotion-joy font-bold text-lg">
                        4
                      </div>
                      <div>
                        <h4 className="font-display font-semibold mb-1">Export everywhere</h4>
                        <p className="text-sm text-muted-foreground">CSS, Tailwind, Figma, AI-friendly generator prompts, and more</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
