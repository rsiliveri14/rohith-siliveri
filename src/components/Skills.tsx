import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
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
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-15%" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const skillTagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <section id="skills" ref={containerRef} className="w-full py-8 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Animated section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-8"
        >
          <motion.p 
            className="section-title-small"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            What I Work With
          </motion.p>
          <motion.h2 
            className="section-title"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={isInView ? { clipPath: 'inset(0 0% 0 0)' } : { clipPath: 'inset(0 100% 0 0)' }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            Technical Arsenal
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-sm mt-2 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Technologies, tools, and frameworks I use to build reliable and production-ready machine learning systems.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillCategories.map((category, catIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={catIndex}
                variants={cardVariants}
                className="group bg-card border border-border rounded-xl p-4 cursor-pointer"
                whileHover={{ 
                  scale: 1.03, 
                  y: -5,
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)',
                  borderColor: 'hsl(var(--foreground) / 0.3)'
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <motion.div 
                    className="p-1.5 rounded-lg bg-foreground/10 text-foreground group-hover:bg-foreground/20 transition-colors duration-300"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="w-4 h-4" />
                  </motion.div>
                  <h3 className="font-semibold text-foreground text-sm">{category.title}</h3>
                </div>
                <motion.div 
                  className="flex flex-wrap gap-2"
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <motion.span
                        key={skillIndex}
                        variants={skillTagVariants}
                        custom={skillIndex}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-secondary text-muted-foreground text-xs rounded-full border border-border/50 
                          hover:border-foreground/40 hover:text-foreground hover:bg-foreground/5
                          transition-all duration-200"
                        whileHover={{ scale: 1.08, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <SkillIcon className="w-3 h-3" />
                        {skill.name}
                      </motion.span>
                    );
                  })}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
