import { motion } from "framer-motion";
import surpriseScreen from "@/assets/screens/surprise-screen.png";
import fearScreen from "@/assets/screens/fear-screen.png";
import angerScreen from "@/assets/screens/anger-screen.png";

const screens = [
  { label: "Surprise", image: surpriseScreen, color: "hsl(var(--emotion-surprise))" },
  { label: "Fear", image: fearScreen, color: "hsl(var(--emotion-fear))" },
  { label: "Anger", image: angerScreen, color: "hsl(var(--emotion-anger))" },
];

interface EmotionScreenShowcaseProps {
  className?: string;
}

const EmotionScreenShowcase = ({ className = "" }: EmotionScreenShowcaseProps) => {
  return (
    <div className={`relative ${className}`}>
      <div className="grid grid-cols-3 gap-4">
        {screens.map((screen, i) => (
          <motion.div
            key={screen.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="flex flex-col items-center gap-3"
          >
            {/* Screen container */}
            <div
              className="relative rounded-xl overflow-hidden border border-border/50 shadow-lg group"
              style={{
                boxShadow: `0 8px 32px -8px ${screen.color}20`,
              }}
            >
              {/* Top bar mimicking a browser/app chrome */}
              <div
                className="flex items-center gap-1.5 px-3 py-2"
                style={{ background: `${screen.color}15` }}
              >
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
              </div>

              {/* Screen image - scrollable preview with fixed max height */}
              <div className="max-h-[420px] overflow-hidden">
                <img
                  src={screen.image}
                  alt={`${screen.label} emotion design system`}
                  className="w-full h-auto transition-transform duration-[3s] ease-in-out group-hover:-translate-y-[30%]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Label */}
            <div className="flex items-center gap-2">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: screen.color }}
              />
              <span className="text-sm font-medium text-muted-foreground">
                {screen.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EmotionScreenShowcase;
