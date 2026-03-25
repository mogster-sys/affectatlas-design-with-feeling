import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare } from "lucide-react";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Community</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Coming soon: hear from designers using{" "}
            <span className="gradient-text">AffectAtlas</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            We are building something new. As designers start using AffectAtlas, their stories will live here.
          </p>

          {/* Placeholder cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="glass-card rounded-2xl p-8 flex flex-col items-center justify-center min-h-[200px]"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/50 border border-border/50 mb-4" />
                <div className="h-3 w-24 rounded-full bg-secondary/50 mb-2" />
                <div className="h-2 w-32 rounded-full bg-secondary/30" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
