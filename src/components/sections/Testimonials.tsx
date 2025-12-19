import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I used to spend hours tweaking colors trying to get the 'vibe' right. Now I select Joy + Trust, adjust the intensity, and I have a complete system that actually feels like what I imagined. Game changer.",
    name: "Sarah Chen",
    role: "Lead Product Designer",
    company: "Stripe",
    avatar: "SC",
    emotion: "Trust",
  },
  {
    quote: "The transformation feature sold me. When I selected 'Calm' and watched the entire interface slow down and soften, I finally understood what my meditation app needed to feel like. This is design empathy in tool form.",
    name: "Marcus Williams",
    role: "Founder & CEO",
    company: "Mindful",
    avatar: "MW",
    emotion: "Joy",
  },
  {
    quote: "As someone who struggles to articulate why certain designs work, having research-backed reasoning for every decision has been transformative. I can finally explain my choices to stakeholders with confidence.",
    name: "Elena Rodriguez",
    role: "Design Systems Lead",
    company: "Notion",
    avatar: "ER",
    emotion: "Anticipation",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Designers who <span className="gradient-text">feel the difference</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of designers creating emotionally intelligent products
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="relative group"
            >
              <div className="glass-card rounded-2xl p-8 h-full flex flex-col">
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-primary/30 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star 
                      key={j} 
                      className="w-4 h-4 fill-primary text-primary" 
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-2">
              Rated 4.9/5 by 2,000+ designers
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
