import { useState } from "react";
import Reveal from "@/components/Reveal";
import { PRIMARIES, EMOTIONS } from "@/lib/emotions";
import { useActiveEmotion } from "@/lib/active-emotion";
import { EMOTION_EXPORTS } from "@/data/emotion-exports";
import { buildExports } from "@/lib/export-formats";

const VALUE_RE = /(#[0-9a-fA-F]{3,8}|0xFF[0-9A-F]{6}|"[^"]*"|\b\d+(?:px|ms|dp)?\b)/g;

// Light, dependency-free syntax tint: colour the values (hex, strings, numbers)
// in the emotion's ink so the output reads like a real, themed token file.
const Highlighted = ({ code, ink }: { code: string; ink: string }) => {
  const parts = code.split(VALUE_RE);
  return (
    <>
      {parts.map((p, i) =>
        VALUE_RE.test(p) && /^(#|0xFF|"|\d)/.test(p) ? (
          <span key={i} style={{ color: ink }}>{p}</span>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
};

const EXT: Record<string, string> = {
  css: "css", tailwind: "js", scss: "scss", json: "json", w3c: "tokens.json",
  figma: "figma.json", swift: "swift", kotlin: "kt", ai: "txt",
};

const ExportShowcase = () => {
  const { key, setKey } = useActiveEmotion();
  const [fmt, setFmt] = useState("css");
  const [copied, setCopied] = useState(false);

  const data = EMOTION_EXPORTS[key] ?? EMOTION_EXPORTS.joy;
  const e = EMOTIONS[key] ?? EMOTIONS.joy;
  const formats = buildExports(data);
  const active = formats.find((x) => x.id === fmt) ?? formats[0];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(active.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard blocked; ignore */
    }
  };

  return (
    <section id="export" className="relative py-28 lg:py-40">
      <div className="atlas">
        <Reveal>
          <p className="label mb-8 flex items-center gap-3" style={{ color: e.inkVar }}>
            <span className="h-px w-10" style={{ background: e.inkVar }} />
            Plate Nº 06 — Export
          </p>
        </Reveal>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl font-display text-[clamp(2rem,4.6vw,3.75rem)] font-extrabold leading-[1.0]">
              Pick a feeling. Ship <span style={{ color: e.inkVar }}>real tokens.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-pretty text-muted-foreground lg:text-right">
              Every emotion exports to nine formats. This is the actual output, not a mock-up. Pick an
              emotion and a format.
            </p>
          </Reveal>
        </div>

        {/* emotion picker — shares the wheel's selection */}
        <Reveal delay={0.12}>
          <div className="mt-12 flex flex-wrap gap-2">
            {PRIMARIES.map((p) => {
              const on = p.key === key;
              return (
                <button
                  key={p.key}
                  onClick={() => setKey(p.key)}
                  className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors"
                  style={{
                    borderColor: on ? p.inkVar : "hsl(var(--border))",
                    background: on ? `color-mix(in oklab, ${p.inkVar} 16%, transparent)` : "transparent",
                    color: on ? p.inkVar : "hsl(var(--muted-foreground))",
                  }}
                >
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: p.inkVar }} />
                  {p.name}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* the editor */}
        <Reveal delay={0.16}>
          <div className="mt-6 overflow-hidden rounded-xl border" style={{ borderColor: `color-mix(in oklab, ${e.inkVar} 28%, hsl(var(--border)))` }}>
            {/* format tabs */}
            <div className="flex flex-wrap items-center gap-1 border-b border-border/60 bg-[hsl(var(--background-elevated))] p-2">
              {formats.map((ff) => {
                const on = ff.id === fmt;
                return (
                  <button
                    key={ff.id}
                    onClick={() => setFmt(ff.id)}
                    className="label rounded-md px-3 py-1.5 transition-colors"
                    style={{
                      background: on ? `color-mix(in oklab, ${e.inkVar} 18%, transparent)` : "transparent",
                      color: on ? e.inkVar : "hsl(var(--muted-foreground))",
                    }}
                  >
                    {ff.label}
                  </button>
                );
              })}
            </div>

            {/* filename bar + copy */}
            <div className="flex items-center justify-between border-b border-border/60 bg-[hsl(var(--background))] px-4 py-2.5">
              <span className="label text-muted-foreground/80">
                {e.name.toLowerCase()}.{EXT[active.id]}
              </span>
              <button
                onClick={copy}
                className="label rounded-md border border-border/60 px-2.5 py-1 text-muted-foreground transition-colors hover:text-foreground"
              >
                {copied ? "Copied ✓" : "Copy"}
              </button>
            </div>

            {/* code */}
            <pre className="overflow-x-auto bg-[hsl(var(--background))] px-5 py-5 text-[0.82rem] leading-relaxed">
              <code className="font-label text-foreground/85">
                <Highlighted code={active.code} ink={e.inkVar} />
              </code>
            </pre>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 text-sm text-muted-foreground">
            Plus W3C Design Tokens, Figma Tokens, Swift, Kotlin, and an AI prompt, twenty-nine emotions ×
            nine formats, every value research-backed.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default ExportShowcase;
