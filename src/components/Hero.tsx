import { Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="w-full py-8 px-6 flex items-center justify-center">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          {/* Profile Image with fade-in + zoom animation */}
          <div 
            className={`transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-border shadow-xl">
              <img
                src={profileImage}
                alt="Rohith Vardhan Siliveri"
                className="w-full h-full object-cover"
                style={{
                  imageRendering: "auto",
                }}
                loading="eager"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center md:text-left">
            {/* Hello text */}
            <p 
              className={`mb-1 font-extrabold font-serif text-muted-foreground text-left mx-[110px] text-2xl transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Hello, I'm
            </p>
            
            {/* Name with staggered animation */}
            <h1 
              className={`text-3xl md:text-5xl font-bold text-foreground mb-2 transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Rohith Siliveri
            </h1>
            
            {/* Title with more delay */}
            <h2 
              className={`text-lg md:text-xl mb-4 font-extrabold font-serif bg-primary-foreground text-muted-foreground text-left px-0 mx-[80px] transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              AI / ML Engineer
            </h2>

            {/* CTA Buttons with animation */}
            <div 
              className={`flex flex-wrap items-center justify-center md:justify-start mb-6 gap-[40px] transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <Button
                variant="outline"
                size="sm"
                className="rounded-full px-5 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background hover:scale-105 hover:shadow-lg transition-all duration-300"
                asChild
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                size="sm"
                className="rounded-full px-5 bg-foreground text-background hover:bg-foreground/90 hover:scale-105 hover:shadow-lg transition-all duration-300"
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Social Links with animation */}
            <div 
              className={`flex items-center justify-center gap-3 -ml-[26px] transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <a
                href="https://linkedin.com/in/rohiths14"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:bg-secondary hover:scale-110 hover:border-foreground/50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/rsiliveri14"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:bg-secondary hover:scale-110 hover:border-foreground/50 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:rohith.siliveri14@gmail.com"
                className="p-2 rounded-full border border-border hover:bg-secondary hover:scale-110 hover:border-foreground/50 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;