import { Building2, Calendar } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const experiences = [
  {
    company: 'PNC Financial Services',
    role: 'AI/ML Engineer',
    location: 'USA',
    period: 'Jul 2025 – Present',
    highlights: [
      'Real-time fraud detection systems',
      'Scalable MLOps pipelines on Azure',
      'Kubernetes deployments with Docker & FastAPI',
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
    ],
  },
];

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-16 px-6 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="section-title-small">My Journey</p>
          <h2 className="section-title">Experience</h2>
        </div>

        <div
          ref={ref}
          className={`max-w-3xl mx-auto space-y-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card p-5 rounded-xl shadow-sm border border-border"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Building2 size={16} className="text-muted-foreground" />
                  <span className="font-semibold text-foreground text-sm">{exp.company}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1 sm:mt-0">
                  <Calendar size={12} />
                  <span>{exp.period}</span>
                </div>
              </div>
              <h3 className="font-bold text-foreground mb-2">{exp.role}</h3>
              <ul className="space-y-1">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="text-foreground mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
