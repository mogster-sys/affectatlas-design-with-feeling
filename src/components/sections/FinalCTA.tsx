import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Ready to design with <span className="gradient-text">intention?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Start with the emotion. Let the design follow.
          </p>
          <Button size="lg" className="text-lg px-10 py-7 glow-primary font-semibold group" asChild>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              Coming to Google Play
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-6">Free forever. All features. No account needed.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
