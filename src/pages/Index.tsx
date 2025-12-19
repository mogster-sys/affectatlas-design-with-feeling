import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Benefits from "@/components/sections/Benefits";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import FinalCTA from "@/components/sections/FinalCTA";
import logo from "@/assets/affectatlas-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src={logo} alt="AffectAtlas" className="h-10 w-auto" />
              <span className="font-display font-bold text-xl">AffectAtlas</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <a href="#" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">Try the wheel →</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Benefits />
        <Testimonials />
        <Process />
        <Pricing />
        <FinalCTA />
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="AffectAtlas" className="h-8 w-auto" />
              <span className="font-display font-semibold">AffectAtlas</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Made with 💛 and research. © 2024 AffectAtlas.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
