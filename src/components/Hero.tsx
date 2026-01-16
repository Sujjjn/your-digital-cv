import { Github, Linkedin, Mail, MapPin, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-foreground">Sujan</span>{" "}
            <span className="text-gradient">Bhattarai</span>
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-mono">
            <span className="text-primary">&lt;</span>
            Data Analyst & Developer
            <span className="text-primary">/&gt;</span>
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Lalitpur, Nepal</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-primary"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/50 text-foreground hover:bg-primary/10"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4">
            <a 
              href="https://github.com/Sujjjn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sujan-bhattaraib3027b252/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:sujanbhattarai603@gmail.com"
              className="p-3 rounded-full bg-secondary/50 border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="tel:+9779840731759"
              className="p-3 rounded-full bg-secondary/50 border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
