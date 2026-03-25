import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const features = [
  "Full emotion wheel with 29 emotions",
  "All 9 export formats (CSS, JSON, Swift, Kotlin, AI, Figma, Tailwind, SCSS, W3C Tokens)",
  "11 design dimensions per emotion",
  "29 unique font pairings",
  "Deep design advisory panels",
  "No account required",
];

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="pricing" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Completely <span className="gradient-text">free</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            No account required. No credit card. Just open the wheel and start designing.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-10 max-w-lg mx-auto text-left"
          >
            <div className="text-center mb-8">
              <div className="text-5xl font-bold mb-2">$0</div>
              <p className="text-muted-foreground">Free forever. Everything included.</p>
            </div>

            <ul className="space-y-4 mb-10">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="w-full text-base py-6 glow-primary font-semibold group">
              Try the wheel
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
