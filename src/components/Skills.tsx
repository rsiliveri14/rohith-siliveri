import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Brain, Code, Settings, Cloud, Server, Database, Target } from 'lucide-react';

const skillCategories = [
  {
    title: 'Machine Learning & AI',
    icon: Brain,
    skills: [
      'Machine Learning',
      'Applied AI',
      'NLP (BERT, Transformers, LLMs)',
      'Computer Vision (OpenCV, ResNet)',
      'Time-Series Forecasting',
    ],
  },
  {
    title: 'Languages & Frameworks',
    icon: Code,
    skills: ['Python', 'SQL', 'PyTorch', 'scikit-learn', 'XGBoost'],
  },
  {
    title: 'MLOps & Engineering',
    icon: Settings,
    skills: ['CI/CD Pipelines', 'Automated Retraining', 'Model Monitoring', 'MLflow', 'Feast'],
  },
  {
    title: 'Deployment & Services',
    icon: Server,
    skills: ['Docker', 'Kubernetes', 'FastAPI', 'Model APIs', 'Microservices'],
  },
  {
    title: 'Cloud Platforms',
    icon: Cloud,
    skills: ['Azure Machine Learning', 'AWS SageMaker'],
  },
  {
    title: 'Big Data & Streaming',
    icon: Database,
    skills: ['Apache Spark', 'Kafka'],
  },
  {
    title: 'Domains & Specialties',
    icon: Target,
    skills: ['Fraud Detection', 'Risk Modeling', 'Explainable AI', 'Model Governance', 'Regulated Systems'],
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-16 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <p className="section-title-small">What I Work With</p>
          <h2 className="section-title">Technical Arsenal</h2>
          <p className="text-muted-foreground text-sm mt-3 max-w-2xl mx-auto">
            Technologies, tools, and frameworks I use to build reliable and production-ready machine learning systems.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {skillCategories.map((category, catIndex) => {
            const IconComponent = category.icon;
            return (
              <div
                key={catIndex}
                className="group bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer"
                style={{ transitionDelay: `${catIndex * 50}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-secondary text-muted-foreground text-xs rounded-full border border-border/50 hover:border-primary/40 hover:text-foreground transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
