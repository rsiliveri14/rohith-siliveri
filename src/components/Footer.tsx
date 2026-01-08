import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <footer 
      ref={ref}
      className={`py-8 px-6 border-t border-border transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Rohith Vardhan Siliveri. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="#about" 
              className="text-muted-foreground hover:text-foreground text-sm transition-all duration-300 hover:scale-105"
            >
              About
            </a>
            <a 
              href="#experience" 
              className="text-muted-foreground hover:text-foreground text-sm transition-all duration-300 hover:scale-105"
            >
              Experience
            </a>
            <a 
              href="#projects" 
              className="text-muted-foreground hover:text-foreground text-sm transition-all duration-300 hover:scale-105"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-foreground text-sm transition-all duration-300 hover:scale-105"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;