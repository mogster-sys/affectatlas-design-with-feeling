import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for exploring emotional design",
    features: [
      { text: "Full emotion wheel access", included: true },
      { text: "3 saved presets", included: true },
      { text: "Export to CSS & Tailwind", included: true },
      { text: "Community support", included: true },
      { text: "Emotion blending", included: false },
      { text: "All export formats", included: false },
    ],
    cta: "Start free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    description: "For professional designers",
    features: [
      { text: "Unlimited saved presets", included: true },
      { text: "All 15+ export formats", included: true },
      { text: "Emotion blending & dyads", included: true },
      { text: "Custom color adjustments", included: true },
      { text: "Priority support", included: true },
      { text: "Commercial license", included: true },
    ],
    cta: "Try the wheel",
    popular: true,
  },
  {
    name: "Team",
    price: "$29",
    period: "/user/month",
    description: "For design teams at scale",
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Shared team presets", included: true },
      { text: "Brand guidelines integration", included: true },
      { text: "SSO authentication", included: true },
      { text: "Dedicated support", included: true },
      { text: "Custom onboarding", included: true },
    ],
    cta: "Contact sales",
    popular: false,
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Start feeling <span className="gradient-text">for free</span>
          </h2>
          <p className="text-lg text-muted-foreground">No credit card required. Upgrade when you need more.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className={`relative glass-card rounded-2xl p-8 ${plan.popular ? "border-primary ring-2 ring-primary/20" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                  Most popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="font-display text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-primary shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-muted-foreground/50 shrink-0" />
                    )}
                    <span className={feature.included ? "" : "text-muted-foreground/50"}>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <Button className={`w-full ${plan.popular ? "glow-primary" : ""}`} variant={plan.popular ? "default" : "outline"}>
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
