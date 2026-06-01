// Single source of truth for the eight Plutchik primaries used across the site.
// `ink` is the vivid accent (mirrors the --e-* CSS vars); `world` is the deep,
// readable background the journey layer interpolates through; `fontClass` is the
// specimen face that demonstrates the product's emotion-to-typeface thesis.

export type EmotionKey =
  | "joy" | "trust" | "fear" | "surprise"
  | "sadness" | "disgust" | "anger" | "anticipation";

export interface Emotion {
  key: EmotionKey;
  name: string;
  ink: string;        // vivid oklch ink, matches --e-*
  inkVar: string;     // css var reference for styling
  world: string;      // deep tinted background (hsl, interpolation-friendly)
  fontClass: string;  // headline typeface utility (real per-emotion pairing)
  font: string;       // real headline face name (shown as a spec)
  levels: [string, string, string]; // Plutchik intensities: mild → base → intense
  northStar: string;  // the app's one-line design metaphor for this emotion
}

export const EMOTIONS: Record<EmotionKey, Emotion> = {
  joy: {
    key: "joy", name: "Joy",
    ink: "oklch(0.84 0.16 88)", inkVar: "var(--e-joy)",
    world: "hsl(41 34% 9%)", fontClass: "font-joy", font: "Plus Jakarta Sans",
    levels: ["Serenity", "Joy", "Ecstasy"],
    northStar: "The Radiant Conservatory",
  },
  trust: {
    key: "trust", name: "Trust",
    ink: "oklch(0.70 0.15 152)", inkVar: "var(--e-trust)",
    world: "hsl(150 26% 8%)", fontClass: "font-trust", font: "Newsreader",
    levels: ["Acceptance", "Trust", "Admiration"],
    northStar: "The Architectural Anchor",
  },
  fear: {
    key: "fear", name: "Fear",
    ink: "oklch(0.62 0.16 252)", inkVar: "var(--e-fear)",
    world: "hsl(224 28% 9%)", fontClass: "font-fear", font: "Epilogue",
    levels: ["Apprehension", "Fear", "Terror"],
    northStar: "The Clinical Void",
  },
  surprise: {
    key: "surprise", name: "Surprise",
    ink: "oklch(0.80 0.13 210)", inkVar: "var(--e-surprise)",
    world: "hsl(200 30% 9%)", fontClass: "font-surprise", font: "Space Grotesk",
    levels: ["Distraction", "Surprise", "Amazement"],
    northStar: "The Sudden Flash",
  },
  sadness: {
    key: "sadness", name: "Sadness",
    ink: "oklch(0.62 0.10 215)", inkVar: "var(--e-sadness)",
    world: "hsl(212 26% 8%)", fontClass: "font-sadness", font: "Cormorant Garamond",
    levels: ["Pensiveness", "Sadness", "Grief"],
    northStar: "The Fragile Editorial",
  },
  disgust: {
    key: "disgust", name: "Disgust",
    ink: "oklch(0.56 0.17 318)", inkVar: "var(--e-disgust)",
    world: "hsl(300 22% 8%)", fontClass: "font-disgust", font: "Syne",
    levels: ["Boredom", "Disgust", "Loathing"],
    northStar: "The Organic Ruin",
  },
  anger: {
    key: "anger", name: "Anger",
    ink: "oklch(0.61 0.21 26)", inkVar: "var(--e-anger)",
    world: "hsl(8 32% 9%)", fontClass: "font-anger", font: "Oswald",
    levels: ["Annoyance", "Anger", "Rage"],
    northStar: "The Kinetic Furnace",
  },
  anticipation: {
    key: "anticipation", name: "Anticipation",
    ink: "oklch(0.74 0.18 58)", inkVar: "var(--e-anticipation)",
    world: "hsl(28 42% 9%)", fontClass: "font-anticipation", font: "Urbanist",
    levels: ["Interest", "Anticipation", "Vigilance"],
    northStar: "The Forward Lean",
  },
};

// Dyads sit between adjacent primaries on the wheel (Plutchik order).
export const DYAD_NAMES = [
  "Love", "Submission", "Alarm", "Disappointment",
  "Remorse", "Contempt", "Aggressiveness", "Optimism",
];

export const PRIMARIES: Emotion[] = [
  EMOTIONS.joy, EMOTIONS.trust, EMOTIONS.fear, EMOTIONS.surprise,
  EMOTIONS.sadness, EMOTIONS.disgust, EMOTIONS.anger, EMOTIONS.anticipation,
];

// The emotional arc of the page, as background-colour stops keyed to scroll
// progress (0 = top, 1 = bottom). The desaturated grey at the Problem fold is
// the colour literally draining out of an "emotionally empty" design process.
const NEUTRAL = "hsl(36 7% 7%)";
export const JOURNEY: { at: number; color: string }[] = [
  { at: 0.00, color: EMOTIONS.joy.world },          // Hero — Joy
  { at: 0.13, color: EMOTIONS.joy.world },
  { at: 0.22, color: NEUTRAL },                      // Problem — colour drains
  { at: 0.30, color: NEUTRAL },
  { at: 0.40, color: EMOTIONS.trust.world },         // Solution — Trust returns
  { at: 0.52, color: EMOTIONS.surprise.world },      // Benefits — Surprise
  { at: 0.64, color: "hsl(288 16% 8%)" },            // Catalogue — the full spectrum
  { at: 0.78, color: EMOTIONS.anticipation.world },  // Advisory — Anticipation
  { at: 0.90, color: EMOTIONS.fear.world },          // Process — forward-leaning calm
  { at: 1.00, color: EMOTIONS.joy.world },           // CTA — resolves to Joy
];
