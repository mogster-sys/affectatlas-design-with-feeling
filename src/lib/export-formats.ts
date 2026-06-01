import type { EmotionExport } from "@/data/emotion-exports";

export interface ExportFormat {
  id: string;
  label: string;
  code: string;
}

const hexToARGB = (hex: string) => "0xFF" + hex.replace("#", "").toUpperCase();

/**
 * Produces the app's real export formats from a curated token subset, so a
 * designer sees the exact, familiar output for the active emotion.
 */
export const buildExports = (e: EmotionExport): ExportFormat[] => {
  const c = e.colors;
  const f = e.fonts;
  return [
    {
      id: "css",
      label: "CSS",
      code: `:root {
  --color-primary: ${c.primary};
  --color-surface: ${c.surface};
  --color-on-surface: ${c.onSurface};
  --color-secondary: ${c.secondary};
  --font-headline: "${f.headline}";
  --font-body: "${f.body}";
  --radius: ${e.radius};
  --motion: ${e.motionDuration} ${e.motionEasing};
}`,
    },
    {
      id: "tailwind",
      label: "Tailwind",
      code: `// tailwind.config.js
theme: { extend: {
  colors: {
    primary: "${c.primary}",
    surface: "${c.surface}",
    "on-surface": "${c.onSurface}",
  },
  fontFamily: {
    headline: ["${f.headline}"],
    body: ["${f.body}"],
  },
  borderRadius: { DEFAULT: "${e.radius}" },
}}`,
    },
    {
      id: "scss",
      label: "SCSS",
      code: `$color-primary: ${c.primary};
$color-surface: ${c.surface};
$color-on-surface: ${c.onSurface};
$font-headline: "${f.headline}";
$font-body: "${f.body}";
$radius: ${e.radius};`,
    },
    {
      id: "json",
      label: "JSON",
      code: `{
  "color": {
    "primary": "${c.primary}",
    "surface": "${c.surface}",
    "onSurface": "${c.onSurface}"
  },
  "font": { "headline": "${f.headline}", "body": "${f.body}" },
  "radius": "${e.radius}"
}`,
    },
    {
      id: "w3c",
      label: "W3C Tokens",
      code: `{
  "color": {
    "primary": { "$type": "color", "$value": "${c.primary}" },
    "surface": { "$type": "color", "$value": "${c.surface}" }
  },
  "fontFamily": {
    "headline": { "$type": "fontFamily", "$value": "${f.headline}" }
  }
}`,
    },
    {
      id: "figma",
      label: "Figma Tokens",
      code: `{
  "primary":  { "value": "${c.primary}", "type": "color" },
  "surface":  { "value": "${c.surface}", "type": "color" },
  "onSurface":{ "value": "${c.onSurface}", "type": "color" },
  "headline": { "value": "${f.headline}", "type": "fontFamilies" },
  "radius":   { "value": "${e.radius}", "type": "borderRadius" }
}`,
    },
    {
      id: "swift",
      label: "Swift",
      code: `extension Color {
  static let primary   = Color(hex: "${c.primary}")
  static let surface   = Color(hex: "${c.surface}")
  static let onSurface = Color(hex: "${c.onSurface}")
}
let headlineFont = "${f.headline}"
let cornerRadius: CGFloat = ${parseInt(e.radius, 10)}`,
    },
    {
      id: "kotlin",
      label: "Kotlin",
      code: `object AffectAtlas {
  val Primary   = Color(${hexToARGB(c.primary)})
  val Surface   = Color(${hexToARGB(c.surface)})
  val OnSurface = Color(${hexToARGB(c.onSurface)})
  val Headline  = "${f.headline}"
  val Radius    = ${parseInt(e.radius, 10)}.dp
}`,
    },
    {
      id: "ai",
      label: "AI Prompt",
      code: `Design in the "${e.name}" emotional system.
Primary ${c.primary} on surface ${c.surface}; text ${c.onSurface}.
Headline font "${f.headline}", body "${f.body}".
Corner radius ${e.radius}; motion ${e.motionDuration} ${e.motionEasing}.
Keep every element true to this single feeling.`,
    },
  ];
};

export const FORMAT_LIST = ["CSS", "Tailwind", "SCSS", "JSON", "W3C", "Figma Tokens", "Swift", "Kotlin", "AI Prompt"];
