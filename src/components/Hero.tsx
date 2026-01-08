import { Linkedin, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          {/* Profile Image */}
          <div className="animate-slide-in-left">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-border shadow-xl">
              <img
                src={profileImage}
                alt="Rohith Vardhan Siliveri"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center md:text-left animate-slide-in-right">
            <p className="text-muted-foreground text-lg mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-3">
              Rohith Vardhan Siliveri
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
              AI / ML Engineer
            </h2>
            <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
              Building production-ready machine learning systems for real-world impact.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-8">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all"
                asChild
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                size="lg"
                className="rounded-full px-8 bg-foreground text-background hover:bg-foreground/90 transition-all"
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href="https://linkedin.com/in/rohiths14"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:bg-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/rsiliveri14"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:bg-secondary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:rohith.siliveri14@gmail.com"
                className="p-3 rounded-full border border-border hover:bg-secondary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll to about section">
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-muted-foreground rounded-full" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
