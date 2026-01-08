import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="section-title-small">Get in Touch</p>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 max-w-2xl mx-auto">
          <a
            href="mailto:rohith.siliveri14@gmail.com"
            className="info-card flex items-center gap-4 w-full sm:w-auto px-8 py-6 animate-fade-in-up"
          >
            <Mail className="w-8 h-8 text-foreground" />
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium text-foreground">rohith.siliveri14@gmail.com</p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/rohiths14"
            target="_blank"
            rel="noopener noreferrer"
            className="info-card flex items-center gap-4 w-full sm:w-auto px-8 py-6 animate-fade-in-up animation-delay-100"
          >
            <Linkedin className="w-8 h-8 text-foreground" />
            <div className="text-left">
              <p className="text-sm text-muted-foreground">LinkedIn</p>
              <p className="font-medium text-foreground">linkedin.com/in/rohiths14</p>
            </div>
          </a>
        </div>

        <div className="mt-8 flex justify-center animate-fade-in-up animation-delay-200">
          <a
            href="https://github.com/rsiliveri14"
            target="_blank"
            rel="noopener noreferrer"
            className="info-card flex items-center gap-4 px-8 py-6"
          >
            <Github className="w-8 h-8 text-foreground" />
            <div className="text-left">
              <p className="text-sm text-muted-foreground">GitHub</p>
              <p className="font-medium text-foreground">github.com/rsiliveri14</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
