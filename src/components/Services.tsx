import { 
  Workflow, 
  Server, 
  Plug, 
  Shield, 
  MessageSquare, 
  CheckCircle 
} from 'lucide-react';

const services = [
  {
    icon: Workflow,
    title: 'End-to-end ML Development',
    description: 'From data exploration to model deployment, building complete machine learning solutions tailored to your business needs.',
  },
  {
    icon: Server,
    title: 'Production ML & MLOps',
    description: 'Deployment pipelines, model monitoring, CI/CD automation, and infrastructure for reliable ML systems at scale.',
  },
  {
    icon: Plug,
    title: 'AI System Integration',
    description: 'Integrating AI capabilities into existing systems via APIs, cloud services, and containerized deployments.',
  },
  {
    icon: Shield,
    title: 'Fraud Detection & Risk Modeling',
    description: 'Specialized solutions for financial services including real-time fraud detection and risk assessment systems.',
  },
  {
    icon: MessageSquare,
    title: 'NLP, LLM & Computer Vision',
    description: 'Custom solutions using transformers, LLMs, and computer vision for text and image-based applications.',
  },
  {
    icon: CheckCircle,
    title: 'Model Governance & Explainability',
    description: 'Ensuring model reliability, interpretability, and compliance with regulatory requirements.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="section-title-small">What I Offer</p>
          <h2 className="section-title">Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="info-card text-left animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <IconComponent className="w-10 h-10 text-foreground mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
