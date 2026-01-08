import { 
  Brain, 
  Code, 
  Server, 
  Cloud, 
  Shield, 
  Database,
  Cpu,
  GitBranch,
  Container,
  Workflow,
  LineChart,
  Eye
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Machine Learning & AI',
    skills: [
      { name: 'Applied ML', level: 'Experienced', icon: Brain },
      { name: 'NLP & Transformers', level: 'Experienced', icon: Code },
      { name: 'Computer Vision', level: 'Experienced', icon: Eye },
      { name: 'Time-series Forecasting', level: 'Experienced', icon: LineChart },
    ],
  },
  {
    title: 'Programming & Frameworks',
    skills: [
      { name: 'Python', level: 'Experienced', icon: Code },
      { name: 'SQL', level: 'Experienced', icon: Database },
      { name: 'PyTorch', level: 'Experienced', icon: Cpu },
      { name: 'scikit-learn', level: 'Experienced', icon: Brain },
    ],
  },
  {
    title: 'MLOps & Engineering',
    skills: [
      { name: 'CI/CD Pipelines', level: 'Experienced', icon: Workflow },
      { name: 'Model Monitoring', level: 'Experienced', icon: LineChart },
      { name: 'Docker & K8s', level: 'Experienced', icon: Container },
      { name: 'FastAPI', level: 'Experienced', icon: Server },
    ],
  },
  {
    title: 'Cloud & Data',
    skills: [
      { name: 'Azure ML', level: 'Experienced', icon: Cloud },
      { name: 'AWS SageMaker', level: 'Experienced', icon: Cloud },
      { name: 'Apache Spark', level: 'Experienced', icon: Database },
      { name: 'Kafka', level: 'Intermediate', icon: Server },
    ],
  },
  {
    title: 'Domain Expertise',
    skills: [
      { name: 'Fraud Detection', level: 'Experienced', icon: Shield },
      { name: 'Risk Modeling', level: 'Experienced', icon: LineChart },
      { name: 'Model Governance', level: 'Experienced', icon: GitBranch },
      { name: 'Explainable AI', level: 'Experienced', icon: Brain },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="section-title-small">Explore My</p>
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="animate-fade-in-up" style={{ animationDelay: `${catIndex * 0.1}s` }}>
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">{category.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={skillIndex} className="skill-card">
                      <IconComponent className="w-8 h-8 text-foreground" />
                      <h4 className="font-medium text-foreground text-center">{skill.name}</h4>
                      <span className="text-sm text-muted-foreground">{skill.level}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
