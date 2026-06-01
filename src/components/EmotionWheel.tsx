import { useReducedMotion } from "framer-motion";
import { PRIMARIES, EMOTIONS, DYAD_NAMES, type EmotionKey } from "@/lib/emotions";

interface EmotionWheelProps {
  activeKey: EmotionKey;
  onHover?: (key: EmotionKey | null) => void;
  size?: number;
  className?: string;
}

// top = 0deg, clockwise
const polar = (cx: number, cy: number, r: number, deg: number) => {
  const rad = (deg * Math.PI) / 180;
  return { x: cx + r * Math.sin(rad), y: cy - r * Math.cos(rad) };
};

const sector = (cx: number, cy: number, rin: number, rout: number, a0: number, a1: number) => {
  const o1 = polar(cx, cy, rout, a0);
  const o2 = polar(cx, cy, rout, a1);
  const i2 = polar(cx, cy, rin, a1);
  const i1 = polar(cx, cy, rin, a0);
  return `M ${o1.x} ${o1.y} A ${rout} ${rout} 0 0 1 ${o2.x} ${o2.y} L ${i2.x} ${i2.y} A ${rin} ${rin} 0 0 0 ${i1.x} ${i1.y} Z`;
};

const mix = (ink: string, kind: "intense" | "base" | "mild") =>
  kind === "intense"
    ? `color-mix(in oklab, ${ink}, black 26%)`
    : kind === "mild"
    ? `color-mix(in oklab, ${ink}, white 32%)`
    : ink;

/**
 * Plutchik's wheel, interactive. Eight primary petals, each in three intensity
 * rings (intense at centre → mild at the rim, which is exactly the product's
 * "3 intensities" model). Dyads surface in the gaps between adjacent petals.
 * Controlled: hovering a petal reports up so the hero headline can follow it.
 */
export const EmotionWheel = ({ activeKey, onHover, size = 460, className = "" }: EmotionWheelProps) => {
  const reduce = useReducedMotion();
  const c = size / 2;
  const r0 = size * 0.158;
  const r1 = size * 0.258;
  const r2 = size * 0.348;
  const r3 = size * 0.45;
  const bands: [number, number, "intense" | "base" | "mild"][] = [
    [r0 + size * 0.014, r1, "intense"],
    [r1, r2, "base"],
    [r2, r3, "mild"],
  ];
  const active = EMOTIONS[activeKey];
  const GAP = 1.8;

  return (
    <div className={`relative mx-auto ${className}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
        {/* slow decorative degree ring */}
        <g className={reduce ? undefined : "animate-spin-slow"} style={{ transformOrigin: `${c}px ${c}px` }}>
          {Array.from({ length: 72 }).map((_, k) => {
            const a = k * 5;
            const p1 = polar(c, c, r3 + size * 0.022, a);
            const p2 = polar(c, c, r3 + size * 0.038, a);
            return (
              <line
                key={k}
                x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
                stroke="currentColor"
                strokeWidth={k % 2 ? 0.5 : 1}
                opacity={0.25}
              />
            );
          })}
        </g>

        {/* petals */}
        {PRIMARIES.map((e, i) => {
          const a0 = i * 45;
          const a1 = (i + 1) * 45;
          const isActive = e.key === activeKey;
          const bis = (a0 + a1) / 2;
          const rad = (bis * Math.PI) / 180;
          const d = isActive ? size * 0.022 : 0;
          return (
            <g
              key={e.key}
              role="button"
              tabIndex={0}
              aria-label={`${e.name} — ${e.levels.join(", ")}`}
              transform={`translate(${Math.sin(rad) * d} ${-Math.cos(rad) * d})`}
              onMouseEnter={() => onHover?.(e.key)}
              onMouseLeave={() => onHover?.(null)}
              onFocus={() => onHover?.(e.key)}
              onBlur={() => onHover?.(null)}
              style={{
                cursor: "pointer",
                opacity: isActive ? 1 : 0.36,
                transition: "opacity .4s ease, transform .55s cubic-bezier(.16,1,.3,1)",
              }}
            >
              {bands.map(([rin, rout, kind]) => (
                <path key={kind} d={sector(c, c, rin, rout - 2, a0 + GAP, a1 - GAP)} style={{ fill: mix(e.ink, kind) }} />
              ))}
            </g>
          );
        })}

        {/* dyads in the gaps — names surface when an adjacent primary is active */}
        {DYAD_NAMES.map((name, k) => {
          const a = (k + 1) * 45;
          const A = PRIMARIES[k];
          const B = PRIMARIES[(k + 1) % 8];
          const adj = A.key === activeKey || B.key === activeKey;
          const dot = polar(c, c, (r0 + r1) / 2, a);
          const lab = polar(c, c, r3 * 0.7, a);
          return (
            <g key={name} style={{ transition: "opacity .3s" }} opacity={adj ? 1 : 0.5}>
              <circle cx={dot.x} cy={dot.y} r={size * 0.013} style={{ fill: `color-mix(in oklab, ${A.ink}, ${B.ink})` }} />
              {adj && (
                <text
                  x={lab.x} y={lab.y}
                  textAnchor="middle" dominantBaseline="middle"
                  fontSize={size * 0.026}
                  style={{ fill: "currentColor", fontFamily: "var(--font-body, 'Spline Sans Mono')" }}
                >
                  {name}
                </text>
              )}
            </g>
          );
        })}

        {/* primary labels outside the rim */}
        {PRIMARIES.map((e, i) => {
          const bis = i * 45 + 22.5;
          const p = polar(c, c, r3 + size * 0.085, bis);
          const isActive = e.key === activeKey;
          const anchor = p.x < c - 2 ? "end" : p.x > c + 2 ? "start" : "middle";
          return (
            <text
              key={e.key}
              x={p.x} y={p.y}
              textAnchor={anchor} dominantBaseline="middle"
              fontSize={size * 0.029}
              letterSpacing="0.08em"
              style={{
                fill: isActive ? e.ink : "currentColor",
                opacity: isActive ? 1 : 0.5,
                fontWeight: isActive ? 700 : 500,
                fontFamily: "var(--font-body, 'Spline Sans Mono')",
                textTransform: "uppercase",
                transition: "fill .3s ease, opacity .3s ease",
                pointerEvents: "none",
              }}
            >
              {e.name}
            </text>
          );
        })}

        {/* hub */}
        <circle cx={c} cy={c} r={r0} fill="var(--color-surface, hsl(36 16% 6%))" stroke={active.ink} strokeOpacity={0.55} strokeWidth={1.5} />
      </svg>

      {/* hub legend: the active emotion's three intensities */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-1 text-center">
        <span className="label" style={{ fontSize: size * 0.023, color: active.ink, opacity: 0.9, fontFamily: "var(--font-body)" }}>
          {active.levels[2]}
        </span>
        <span className="font-bold" style={{ fontSize: size * 0.052, lineHeight: 1, color: "currentColor", fontFamily: "var(--font-headline)", letterSpacing: "var(--tracking-headline, 0)" }}>
          {active.levels[1]}
        </span>
        <span className="label" style={{ fontSize: size * 0.023, color: "currentColor", opacity: 0.6, fontFamily: "var(--font-body)" }}>
          {active.levels[0]}
        </span>
      </div>
    </div>
  );
};

export default EmotionWheel;
