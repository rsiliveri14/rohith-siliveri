import { Workflow, Server, Plug, Shield, MessageSquare, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  { icon: Workflow, title: 'End-to-end ML', description: 'Complete ML solutions from data to deployment.' },
  { icon: Server, title: 'MLOps', description: 'CI/CD, monitoring, and infrastructure at scale.' },
  { icon: Plug, title: 'AI Integration', description: 'APIs, cloud services, and containerized deployments.' },
  { icon: Shield, title: 'Fraud & Risk', description: 'Real-time fraud detection and risk assessment.' },
  { icon: MessageSquare, title: 'NLP & Vision', description: 'LLMs, transformers, and computer vision solutions.' },
  { icon: CheckCircle, title: 'Governance', description: 'Explainability, reliability, and compliance.' },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="section-title-small">What I Offer</p>
          <h2 className="section-title">Services</h2>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <IconComponent className="w-8 h-8 text-foreground mx-auto mb-2" />
                <h3 className="font-semibold text-foreground text-sm mb-1">{service.title}</h3>
                <p className="text-muted-foreground text-xs">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
