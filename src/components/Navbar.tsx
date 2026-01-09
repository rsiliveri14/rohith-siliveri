import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useActiveSection } from "@/hooks/useActiveSection";
import MagneticButton from "./MagneticButton";

const navLinks = [
  { href: "#hero", label: "Home", id: "hero" },
  { href: "#about", label: "About", id: "about" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#contact", label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-xl shadow-lg border-b border-border/50" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <MagneticButton strength={0.2}>
            <motion.a 
              href="#" 
              className="text-lg font-bold text-foreground relative"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Rohith Vardhan Siliveri
            </motion.a>
          </MagneticButton>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <MagneticButton key={link.href} strength={0.15}>
                <motion.a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                    activeSection === link.id 
                      ? 'text-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                  {/* Active indicator */}
                  <AnimatePresence>
                    {activeSection === link.id && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 bg-foreground/5 rounded-full -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-foreground rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>
              </MagneticButton>
            ))}
            <MagneticButton strength={0.2}>
              <motion.button
                onClick={toggleTheme}
                className="p-2.5 ml-2 rounded-full border border-border hover:bg-secondary hover:border-foreground/30 transition-all duration-300"
                aria-label="Toggle theme"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isDark ? 'sun' : 'moon'}
                    initial={{ opacity: 0, rotate: -90, scale: 0 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isDark ? <Sun size={18} /> : <Moon size={18} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
            <motion.button 
              className="p-2" 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="md:hidden overflow-hidden"
            >
              <motion.div 
                className="flex flex-col gap-1 py-4"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: { transition: { staggerChildren: 0.05 } },
                  hidden: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
                }}
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`py-2 px-3 rounded-lg text-sm font-semibold transition-colors ${
                      activeSection === link.id 
                        ? 'text-foreground bg-foreground/5' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-foreground/5'
                    }`}
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: -20 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
