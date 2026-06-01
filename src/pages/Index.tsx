import { useEffect, useState } from "react";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Benefits from "@/components/sections/Benefits";
import EmotionCatalogue from "@/components/sections/EmotionCatalogue";
import DesignAdvisory from "@/components/sections/DesignAdvisory";
import ExportShowcase from "@/components/sections/ExportShowcase";
import Process from "@/components/sections/Process";
import FinalCTA from "@/components/sections/FinalCTA";
import JourneyBackground from "@/components/JourneyBackground";
import { PRIMARIES } from "@/lib/emotions";
import { ActiveEmotionProvider, useActiveEmotion } from "@/lib/active-emotion";

const PLAY_URL = "https://play.google.com/store/apps/details?id=com.mogster.affectatlas";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { key } = useActiveEmotion();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav data-emotion={key} className="fixed inset-x-0 top-0 z-50 text-foreground">
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          scrolled
            ? "border-b border-border/60 bg-background/80 backdrop-blur-md"
            : "bg-gradient-to-b from-background/55 to-transparent"
        }`}
      />
      <div className="atlas relative flex h-16 items-center justify-between">
        <a href="#top" className="group flex items-baseline gap-3">
          <span className="flex items-center gap-[3px]" aria-hidden>
            {PRIMARIES.map((e) => (
              <span
                key={e.key}
                className="h-3.5 w-[3px] rounded-full transition-transform duration-300 group-hover:scale-y-125"
                style={{ background: e.inkVar }}
              />
            ))}
          </span>
          <span
            className="text-[1.05rem] font-extrabold tracking-tight"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            AffectAtlas
          </span>
        </a>

        <div className="flex items-center gap-7" style={{ fontFamily: "var(--font-body)" }}>
          <a href="#catalogue" className="label hidden text-muted-foreground transition-colors hover:text-foreground sm:inline" style={{ fontFamily: "var(--font-body)" }}>
            The atlas
          </a>
          <a href="#process" className="label hidden text-muted-foreground transition-colors hover:text-foreground sm:inline" style={{ fontFamily: "var(--font-body)" }}>
            How it works
          </a>
          <a
            href={PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full border border-foreground/20 px-4 py-1.5 text-sm font-semibold transition-colors hover:border-foreground/50"
          >
            Get the app
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="relative border-t border-border/60">
    <div className="atlas py-16">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-md">
          <div className="mb-4 flex items-center gap-[3px]" aria-hidden>
            {PRIMARIES.map((e) => (
              <span key={e.key} className="h-5 w-1.5 rounded-full" style={{ background: e.inkVar }} />
            ))}
          </div>
          <p className="font-display text-2xl font-extrabold tracking-tight">AffectAtlas</p>
          <p className="mt-2 text-pretty text-muted-foreground">
            An atlas of feeling. Twenty-nine emotions, mapped to complete, research-backed design systems.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-muted-foreground lg:items-end">
          <a
            href={PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-foreground transition-colors hover:text-[var(--e-joy)]"
          >
            Get it on Google Play ↗
          </a>
          <a
            href="https://mogster-sys.github.io/affectatlas-privacy/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Privacy Policy
          </a>
          <p className="label mt-3 text-muted-foreground/70">© 2026 Three Eyed Emu</p>
        </div>
      </div>
    </div>
  </footer>
);

const Index = () => {
  return (
    <ActiveEmotionProvider>
      <div id="top" className="relative min-h-screen">
        <JourneyBackground />
        <Nav />
        <main>
          <Hero />
          <Problem />
          <Solution />
          <Benefits />
          <EmotionCatalogue />
          <DesignAdvisory />
          <ExportShowcase />
          <Process />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </ActiveEmotionProvider>
  );
};

export default Index;
