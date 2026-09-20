import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";
import MagneticButton from "./MagneticButton";
import { useRef, useState } from "react";
import { cinematicEase, cinematicSpring, getIntroDelay } from "@/lib/motion";
import { EMAIL, GITHUB, LINKEDIN } from "@/lib/site";
import ResumeDownload from "./ResumeDownload";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [introDelay] = useState(() => getIntroDelay());
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, prefersReducedMotion ? 1 : 0]);
  const scale = useTransform(scrollYProgress, [0, 0.55], [1, prefersReducedMotion ? 1 : 0.96]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: introDelay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: cinematicEase,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: cinematicEase,
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      className="w-full py-16 md:py-8 flex items-center relative"
      style={{ opacity, scale }}
    >
      <motion.div className="page-shell" style={{ y }}>
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={imageVariants} className="shrink-0">
            <MagneticButton strength={0.08}>
              <div className="relative">
                {!prefersReducedMotion && (
                  <>
                    <motion.div
                      className="absolute -inset-3 rounded-full border border-foreground/15"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                    />
                    <motion.div
                      className="absolute -inset-6 rounded-full border border-dashed border-foreground/10"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
                    />
                  </>
                )}
                <motion.div
                  className="w-52 h-52 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-border relative group"
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
                  transition={cinematicSpring}
                >
                  <img
                    src={profileImage}
                    alt="Rohith Siliveri"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </motion.div>
              </div>
            </MagneticButton>
          </motion.div>

          <div className="w-full flex-1 text-center md:text-left">
            <motion.p
              variants={itemVariants}
              className="text-xs font-medium tracking-[0.22em] uppercase text-muted-foreground mb-3"
            >
              Applied AI Engineer
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl xl:text-6xl font-bold text-foreground leading-tight"
            >
              Rohith Siliveri
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-sm md:text-base lg:text-[17px] text-muted-foreground leading-relaxed max-w-xl md:max-w-none"
            >
              I design coding-agent evaluations and ship production ML for banking —
              so a score reflects the model, not a broken setup.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center md:justify-start mt-7 mb-6 gap-3"
            >
              <MagneticButton strength={0.25}>
                <Button
                  size="sm"
                  className="rounded-full px-5 bg-foreground text-background hover:bg-foreground/90"
                  asChild
                >
                  <a href="#work">Work</a>
                </Button>
              </MagneticButton>
              <MagneticButton strength={0.25}>
                <ResumeDownload>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full px-5 border-2 border-foreground/40"
                  >
                    Resume
                  </Button>
                </ResumeDownload>
              </MagneticButton>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center md:justify-start gap-3"
            >
              {[
                { href: LINKEDIN, icon: Linkedin, label: "LinkedIn" },
                { href: GITHUB, icon: Github, label: "GitHub" },
                { href: `mailto:${EMAIL}`, icon: Mail, label: "Email" },
              ].map((social) => (
                <MagneticButton key={social.label} strength={0.35}>
                  <a
                    href={social.href}
                    target={social.href.startsWith('http') ? "_blank" : undefined}
                    rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-foreground/25 hover:bg-foreground hover:text-background hover:border-foreground transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} strokeWidth={2} />
                  </a>
                </MagneticButton>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
