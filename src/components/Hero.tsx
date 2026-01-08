import { Linkedin, Github, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";
const Hero = () => {
  return (
    <section className="min-h-[80vh] pt-16 pb-8 px-6 gap-[7px] flex items-center justify-start">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          {/* Profile Image */}
          <div className="animate-slide-in-left">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-border shadow-xl">
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
          <div className="text-center md:text-left animate-slide-in-right">
            <p className="mb-1 font-extrabold font-serif text-muted-foreground text-left mx-[110px] text-2xl">
              Hello, I'm
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2">Rohith Siliveri</h1>
            <h2 className="text-lg md:text-xl mb-4 font-extrabold font-serif bg-primary-foreground text-muted-foreground text-left px-0 mx-[80px]">
              AI / ML Engineer
            </h2>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start mb-6 gap-[40px]">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full px-5 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all"
                asChild
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                size="sm"
                className="rounded-full px-5 bg-foreground text-background hover:bg-foreground/90 transition-all"
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full px-5 border border-border hover:bg-secondary transition-all flex items-center gap-2"
                asChild
              ></Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-3 -ml-[26px]">
              <a
                href="https://linkedin.com/in/rohiths14"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/rsiliveri14"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:rohith.siliveri14@gmail.com"
                className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
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
