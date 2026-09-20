import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useState, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import MagneticButton from './MagneticButton';
import SectionHeader from './SectionHeader';
import { cinematicEase, cinematicSpring, cinematicViewport, fadeUp, staggerContainer } from '@/lib/motion';
import { EMAIL, GITHUB, LINKEDIN } from '@/lib/site';

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, cinematicViewport);
  const prefersReducedMotion = useReducedMotion();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const containerVariants = staggerContainer;

  const itemVariants = fadeUp;

  const socialLinks = [
    { href: `mailto:${EMAIL}`, icon: Mail, label: EMAIL },
    { href: LINKEDIN, icon: Linkedin, label: "linkedin.com/in/rohith1411" },
    { href: GITHUB, icon: Github, label: "github.com/rsiliveri14" },
  ];

  const footerLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#work", label: "Work" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div ref={containerRef} className="w-full py-20">
      <div className="page-shell">
        <SectionHeader eyebrow="Get in Touch" title="Contact" />
        <p className="text-center text-sm text-muted-foreground max-w-xl mx-auto mb-10 -mt-4">
          The form opens your email app with the message filled in. Or write me directly.
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-4"
            variants={itemVariants}
          >
            {[
              { placeholder: "Your Name", key: "name", type: "text" },
              { placeholder: "Your Email", key: "email", type: "email" },
            ].map((field, index) => (
              <motion.div
                key={field.key}
                initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -24 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: prefersReducedMotion ? 0 : -24 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6, ease: cinematicEase }}
              >
                <Input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.key as keyof typeof formData]}
                  onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                  className="transition-all duration-300 focus:scale-[1.01] focus:shadow-lg"
                  required
                />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -24 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: prefersReducedMotion ? 0 : -24 }}
              transition={{ delay: 0.4, duration: 0.6, ease: cinematicEase }}
            >
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="transition-all duration-300 focus:scale-[1.01] focus:shadow-lg"
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
              transition={{ delay: 0.5, duration: 0.6, ease: cinematicEase }}
            >
              <MagneticButton strength={0.2}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    className="w-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send size={16} className="mr-2" />
                    Send Message
                  </Button>
                </motion.div>
              </MagneticButton>
            </motion.div>
          </motion.form>

          <motion.div 
            variants={itemVariants}
            className="space-y-3"
          >
            {socialLinks.map((link, index) => (
              <MagneticButton key={link.label} strength={0.15} className="block w-full">
                <motion.a
                  href={link.href}
                  target={link.href.startsWith('http') ? "_blank" : undefined}
                  rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 w-full bg-card border border-border rounded-xl px-5 py-3 
                    hover:shadow-lg hover:border-foreground/30
                    transition-all duration-300 cursor-pointer group"
                  initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 24 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: prefersReducedMotion ? 0 : 24 }}
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.02, y: -4, transition: cinematicSpring }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ delay: 0.28 + index * 0.1, duration: 0.6, ease: cinematicEase }}
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <link.icon className="w-5 h-5" />
                  </motion.div>
                  <span className="text-sm">{link.label}</span>
                </motion.a>
              </MagneticButton>
            ))}
          </motion.div>
        </motion.div>

        {/* Footer integrated into contact section */}
        <motion.div 
          className="mt-12 pt-6 border-t border-border"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p 
              className="text-muted-foreground text-sm"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              © {currentYear} Rohith Siliveri. All rights reserved.
            </motion.p>
            <motion.div 
              className="flex items-center gap-6"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                visible: { transition: { staggerChildren: 0.05 } },
                hidden: {},
              }}
            >
              {footerLinks.map((link) => (
                <MagneticButton key={link.href} strength={0.2}>
                  <motion.a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-foreground text-sm transition-all duration-300"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.label}
                  </motion.a>
                </MagneticButton>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
