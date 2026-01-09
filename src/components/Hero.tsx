import { motion, useScroll, useTransform } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";
import MagneticButton from "./MagneticButton";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <motion.section 
      ref={containerRef}
      className="w-full py-8 px-6 flex items-center justify-center relative"
      style={{ opacity, scale }}
    >
      <motion.div 
        className="container mx-auto"
        style={{ y }}
      >
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image with premium animation */}
          <motion.div variants={imageVariants}>
            <MagneticButton strength={0.1}>
              <motion.div 
                className="w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-border shadow-2xl relative group"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                />
                <motion.img
                  src={profileImage}
                  alt="Rohith Vardhan Siliveri"
                  className="w-full h-full object-cover"
                  style={{ imageRendering: "auto" }}
                  loading="eager"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </MagneticButton>
          </motion.div>

          {/* Hero Content */}
          <div className="text-center md:text-left">
            {/* Hello text with clip reveal */}
            <motion.div
              variants={itemVariants}
              className="overflow-hidden"
            >
              <motion.p 
                className="mb-1 font-extrabold font-serif text-muted-foreground text-left mx-[110px] text-2xl"
                initial={{ y: 40 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Hello, I'm
              </motion.p>
            </motion.div>
            
            {/* Name with staggered letter animation */}
            <motion.div
              variants={itemVariants}
              className="overflow-hidden"
            >
              <motion.h1 
                className="text-3xl md:text-5xl font-bold text-foreground mb-2"
                initial={{ clipPath: 'inset(100% 0 0 0)' }}
                animate={{ clipPath: 'inset(0% 0 0 0)' }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              >
                Rohith Siliveri
              </motion.h1>
            </motion.div>
            
            {/* Title with gradient reveal */}
            <motion.div variants={itemVariants}>
              <motion.h2 
                className="text-lg md:text-xl mb-4 font-extrabold font-serif bg-primary-foreground text-muted-foreground text-left px-0 mx-[80px]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                AI / ML Engineer
              </motion.h2>
            </motion.div>

            {/* CTA Buttons with magnetic effect */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center md:justify-start mb-6 gap-[40px]"
            >
              <MagneticButton strength={0.3}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full px-5 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 shadow-lg hover:shadow-xl"
                    asChild
                  >
                    <a href="#projects">View Projects</a>
                  </Button>
                </motion.div>
              </MagneticButton>
              <MagneticButton strength={0.3}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="sm"
                    className="rounded-full px-5 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                    asChild
                  >
                    <a href="#contact">Contact Me</a>
                  </Button>
                </motion.div>
              </MagneticButton>
            </motion.div>

            {/* Social Links with staggered animation */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center gap-3 -ml-[26px]"
            >
              {[
                { href: "https://linkedin.com/in/rohiths14", icon: Linkedin, label: "LinkedIn" },
                { href: "https://github.com/rsiliveri14", icon: Github, label: "GitHub" },
                { href: "mailto:rohith.siliveri14@gmail.com", icon: Mail, label: "Email" },
              ].map((social, index) => (
                <MagneticButton key={social.label} strength={0.4}>
                  <motion.a
                    href={social.href}
                    target={social.href.startsWith('http') ? "_blank" : undefined}
                    rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="p-2 rounded-full border border-border hover:bg-secondary hover:border-foreground/50 transition-all duration-300"
                    aria-label={social.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                </MagneticButton>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
