import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Brain, 
  Code, 
  Settings, 
  Cloud, 
  Server, 
  Database, 
  Target,
  Cpu,
  MessageSquare,
  Eye,
  TrendingUp,
  FileCode,
  Boxes,
  Rocket,
  GitBranch,
  Activity,
  Layers,
  Container,
  Workflow,
  Globe,
  Zap,
  Shield,
  Scale,
  AlertTriangle,
  BookOpen
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  icon: LucideIcon;
}

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Machine Learning & AI',
    icon: Brain,
    skills: [
      { name: 'Machine Learning', icon: Cpu },
      { name: 'Applied AI', icon: Brain },
      { name: 'NLP & LLMs', icon: MessageSquare },
      { name: 'Computer Vision', icon: Eye },
      { name: 'Time-Series', icon: TrendingUp },
    ],
  },
  {
    title: 'Languages & Frameworks',
    icon: Code,
    skills: [
      { name: 'Python', icon: FileCode },
      { name: 'SQL', icon: Database },
      { name: 'PyTorch', icon: Boxes },
      { name: 'scikit-learn', icon: Settings },
      { name: 'XGBoost', icon: Rocket },
    ],
  },
  {
    title: 'MLOps & Engineering',
    icon: Settings,
    skills: [
      { name: 'CI/CD Pipelines', icon: GitBranch },
      { name: 'Model Monitoring', icon: Activity },
      { name: 'MLflow', icon: Layers },
      { name: 'Feast', icon: Database },
    ],
  },
  {
    title: 'Deployment & Services',
    icon: Server,
    skills: [
      { name: 'Docker', icon: Container },
      { name: 'Kubernetes', icon: Boxes },
      { name: 'FastAPI', icon: Zap },
      { name: 'Microservices', icon: Workflow },
    ],
  },
  {
    title: 'Cloud Platforms',
    icon: Cloud,
    skills: [
      { name: 'Azure ML', icon: Cloud },
      { name: 'AWS SageMaker', icon: Globe },
    ],
  },
  {
    title: 'Big Data & Streaming',
    icon: Database,
    skills: [
      { name: 'Apache Spark', icon: Zap },
      { name: 'Kafka', icon: Activity },
    ],
  },
  {
    title: 'Domains & Specialties',
    icon: Target,
    skills: [
      { name: 'Fraud Detection', icon: AlertTriangle },
      { name: 'Risk Modeling', icon: Scale },
      { name: 'Explainable AI', icon: BookOpen },
      { name: 'Model Governance', icon: Shield },
    ],
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-12 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-8">
          <p className="section-title-small">What I Work With</p>
          <h2 className="section-title">Technical Arsenal</h2>
          <p className="text-muted-foreground text-sm mt-2 max-w-2xl mx-auto">
            Technologies, tools, and frameworks I use to build reliable and production-ready machine learning systems.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {skillCategories.map((category, catIndex) => {
            const IconComponent = category.icon;
            return (
              <div
                key={catIndex}
                className="group bg-card border border-border rounded-xl p-4 hover:border-primary/30 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer"
                style={{ transitionDelay: `${catIndex * 50}ms` }}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <span
                        key={skillIndex}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-secondary text-muted-foreground text-xs rounded-full border border-border/50 hover:border-primary/40 hover:text-foreground transition-colors duration-200"
                      >
                        <SkillIcon className="w-3 h-3" />
                        {skill.name}
                      </span>
                    );
                  })}
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
