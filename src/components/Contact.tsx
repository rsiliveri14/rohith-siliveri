import { Mail, Linkedin, Github } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-16 px-6 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="section-title-small">Get in Touch</p>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div
          ref={ref}
          className={`flex flex-wrap items-center justify-center gap-4 max-w-2xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="mailto:rohith.siliveri14@gmail.com"
            className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-3 hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <Mail className="w-5 h-5 text-foreground" />
            <span className="text-sm font-medium text-foreground">Email</span>
          </a>

          <a
            href="https://linkedin.com/in/rohiths14"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-3 hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <Linkedin className="w-5 h-5 text-foreground" />
            <span className="text-sm font-medium text-foreground">LinkedIn</span>
          </a>

          <a
            href="https://github.com/rsiliveri14"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-3 hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <Github className="w-5 h-5 text-foreground" />
            <span className="text-sm font-medium text-foreground">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
