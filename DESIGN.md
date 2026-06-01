# AffectAtlas — Design system

**Concept: "The Atlas of Feeling."** The page is a drenched, art-directed journey. Each section is
a *plate* in a colour atlas, and the page literally becomes the emotion it describes: a fixed
background interpolates through an emotional arc as you scroll (Joy → colour drains to grey at the
problem → Trust → Surprise → the full spectrum → Anticipation → Fear → resolves to Joy).

The aesthetic lane is a **type-foundry specimen sheet crossed with a scientific colour atlas**
(Werner's Nomenclature, Pantone reference books), *not* generic dark-SaaS and *not* editorial-serif.
Colour strategy is **full palette**: the eight Plutchik primaries are the entire brand voice.

## Colour
- Base is **warm ink**, not navy-dark. `--background: 36 16% 6%`; paper text `--foreground: 40 30% 94%`.
- Eight emotion inks in OKLCH (`--e-*` in `src/index.css`, mirrored in `src/lib/emotions.ts`):
  joy `oklch(0.84 0.16 88)`, trust `.70 .15 152`, fear `.62 .16 252`, surprise `.80 .13 210`,
  sadness `.62 .10 215`, disgust `.56 .17 318`, anger `.61 .21 26`, anticipation `.74 .18 58`.
- Each emotion has a deep "world" background (`world` field) the journey layer interpolates through.
- Legacy HSL `--emotion-*` tokens are retained only for the app-screen showcase + tailwind `emotion.*`.

## Typography
Reflex-default fonts were removed. The system:
- **Display**: Bricolage Grotesque (headings, wordmark).
- **Body**: Hanken Grotesk.
- **Labels/atlas metadata**: Spline Sans Mono (`.label`, uppercase, tracked) — a *deliberate* atlas
  catalog system (plate numbers, blends), not decorative mono.
- **The eight primaries use the app's REAL headline pairings** (from the design-system export):
  joy=Plus Jakarta Sans, trust=Newsreader, fear=Epilogue, surprise=Space Grotesk,
  sadness=Cormorant Garamond, disgust=Syne, anger=Oswald, anticipation=Urbanist. Exposed as
  `.font-joy` … `.font-anticipation` so the catalogue/benefits/process inherit them.
- Fluid `clamp()` headings; the hero word auto-fits to the column (faces vary in width).

## Real design system (source of truth)
- `src/styles/affectatlas-tokens.css` — the app's real MD3 tokens, one `[data-emotion="x"]` block
  per emotion (imported in `main.tsx`). `src/data/affectatlas-design-system.json` — full advisory data.
- Regenerated from the app repo at `../AffectAtlas/affect-atlas-web/design-system-export/`.
- **Live re-theme:** the hero `<section>` carries `data-emotion={activeKey}`; setting it cascades the
  emotion's real `--color-surface`, `--color-on-surface`, `--color-primary`, `--font-headline`,
  `--font-body`, `--radius-*`, `--space-*`, and `--motion-*`. The wheel drives the key, so the whole
  stage morphs into each emotion's shipping world (Joy = warm cream / rounded; Fear = near-black /
  sharp). Transitions use each emotion's own `--motion-easing`. The wheel adapts via `currentColor`
  + `var(--color-surface)`, so it reads on light and dark surfaces alike.

## Layout & components
- `.atlas` = the content container (max 78rem, fluid padding). No global centered-stack.
- `.plate` = a solid mounted surface (replaces glass cards). `.hairline` = an emotion-tinted rule.
- Plate-number system ("Plate Nº 0X — …") is the section grammar, in place of pill badges.
- Sections are asymmetric / editorial / indexed — never identical card grids.

## Motion
- `JourneyBackground` (scroll-linked colour) is the signature for the scroll narrative below the hero.
- `Reveal` component: fade + short rise on ease-out-expo `[0.16, 1, 0.3, 1]`, once, `-80px` margin.
- Hero auto-advances the wheel (and thus the live re-theme) every 2.8s; hover a petal to take control.
- Ambient flowing-ribbon video (`public/hero-ribbons.mp4`, generated) backs the dark final CTA.
- All motion respects `prefers-reduced-motion` (journey freezes; reveals + video disabled).

## Bans honoured
No gradient text, no glass-as-default, no side-stripe borders, no identical card grids, no
rounded-icon-above-heading, no em dashes in copy, no reflex fonts.

## Known follow-ups
- The scroll-journey sections below the hero still use the *approximated* emotion inks + the real
  headline fonts. They could be upgraded to consume the real `data-emotion` token surfaces too.
- `DesignAdvisory` shows one *invented* Anticipation specimen; could be swapped for real advisory
  data from `affectatlas-design-system.json` (colors.palette, motion.bezierPoints, rules, words).
- Section background tints are subtle by design; push saturation if a bolder "drench" is wanted.
