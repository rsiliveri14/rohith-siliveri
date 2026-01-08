import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'PNC Financial Services',
    role: 'AI/ML Engineer',
    location: 'USA',
    period: 'Jul 2025 – Present',
    highlights: [
      'Real-time fraud detection systems',
      'Scalable MLOps pipelines on Azure',
      'Kubernetes-based deployments with Docker & FastAPI',
      'Model monitoring, drift detection, and governance',
      'Cross-functional collaboration with fraud, risk, and platform teams',
    ],
  },
  {
    company: 'Assurant',
    role: 'AI Engineer',
    location: 'India',
    period: 'Jan 2022 – Jul 2023',
    highlights: [
      'Computer vision for claims automation',
      'ML-based claims triage and churn prediction',
      'AWS SageMaker deployments',
      'Spark pipelines and API-based ML services',
      'Long-term model monitoring and reliability',
    ],
  },
  {
    company: 'Razorpay',
    role: 'Data Scientist',
    location: 'India',
    period: 'May 2020 – Dec 2021',
    highlights: [
      'Fraud detection and risk analytics',
      'Customer segmentation and A/B testing',
      'Time-series forecasting',
      'Dashboards and automated reporting',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="section-title-small">My Journey</p>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 animate-fade-in-up ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-foreground rounded-full border-4 border-background" />

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                  <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 size={18} className="text-muted-foreground" />
                      <span className="font-semibold text-foreground">{exp.company}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-foreground mt-1.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
