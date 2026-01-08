import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:rohith.siliveri14@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="w-full py-8 px-6 bg-secondary">
      <div className="container mx-auto max-w-4xl">
        {/* Animated section header */}
        <div 
          ref={ref}
          className={`text-center mb-10 transition-all duration-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="section-title-small">Get in Touch</p>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div 
              className={`transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="transition-all duration-300 focus:scale-[1.01]"
                required
              />
            </div>
            <div 
              className={`transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="transition-all duration-300 focus:scale-[1.01]"
                required
              />
            </div>
            <div 
              className={`transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="transition-all duration-300 focus:scale-[1.01]"
                required
              />
            </div>
            <div 
              className={`transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <Button 
                type="submit" 
                className="w-full hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
              >
                <Send size={16} className="mr-2" />
                Send Message
              </Button>
            </div>
          </form>

          <div className="space-y-3">
            <a
              href="mailto:rohith.siliveri14@gmail.com"
              className={`flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-3 
                hover:shadow-lg hover:border-foreground/30 hover:-translate-y-1 hover:scale-[1.02]
                transition-all duration-300 cursor-pointer ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
              }`}
              style={{ transitionDelay: '250ms' }}
            >
              <Mail className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-sm">rohith.siliveri14@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/rohiths14"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-3 
                hover:shadow-lg hover:border-foreground/30 hover:-translate-y-1 hover:scale-[1.02]
                transition-all duration-300 cursor-pointer ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
              }`}
              style={{ transitionDelay: '350ms' }}
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">linkedin.com/in/rohiths14</span>
            </a>
            <a
              href="https://github.com/rsiliveri14"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-3 
                hover:shadow-lg hover:border-foreground/30 hover:-translate-y-1 hover:scale-[1.02]
                transition-all duration-300 cursor-pointer ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
              }`}
              style={{ transitionDelay: '450ms' }}
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">github.com/rsiliveri14</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;