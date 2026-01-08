const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Rohith Vardhan Siliveri. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#about" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              About
            </a>
            <a href="#experience" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
