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
  iconColor: string;
}

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  iconColor: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Machine Learning & AI',
    icon: Brain,
    iconColor: 'text-purple-500',
    skills: [
      { name: 'Machine Learning', icon: Cpu, iconColor: 'text-blue-500' },
      { name: 'Applied AI', icon: Brain, iconColor: 'text-purple-500' },
      { name: 'NLP & LLMs', icon: MessageSquare, iconColor: 'text-green-500' },
      { name: 'Computer Vision', icon: Eye, iconColor: 'text-cyan-500' },
      { name: 'Time-Series', icon: TrendingUp, iconColor: 'text-orange-500' },
    ],
  },
  {
    title: 'Languages & Frameworks',
    icon: Code,
    iconColor: 'text-blue-500',
    skills: [
      { name: 'Python', icon: FileCode, iconColor: 'text-yellow-500' },
      { name: 'SQL', icon: Database, iconColor: 'text-blue-400' },
      { name: 'PyTorch', icon: Boxes, iconColor: 'text-orange-500' },
      { name: 'scikit-learn', icon: Settings, iconColor: 'text-cyan-500' },
      { name: 'XGBoost', icon: Rocket, iconColor: 'text-red-500' },
    ],
  },
  {
    title: 'MLOps & Engineering',
    icon: Settings,
    iconColor: 'text-gray-500',
    skills: [
      { name: 'CI/CD Pipelines', icon: GitBranch, iconColor: 'text-green-500' },
      { name: 'Model Monitoring', icon: Activity, iconColor: 'text-pink-500' },
      { name: 'MLflow', icon: Layers, iconColor: 'text-blue-500' },
      { name: 'Feast', icon: Database, iconColor: 'text-purple-500' },
    ],
  },
  {
    title: 'Deployment & Services',
    icon: Server,
    iconColor: 'text-indigo-500',
    skills: [
      { name: 'Docker', icon: Container, iconColor: 'text-blue-400' },
      { name: 'Kubernetes', icon: Boxes, iconColor: 'text-blue-600' },
      { name: 'FastAPI', icon: Zap, iconColor: 'text-teal-500' },
      { name: 'Microservices', icon: Workflow, iconColor: 'text-violet-500' },
    ],
  },
  {
    title: 'Cloud Platforms',
    icon: Cloud,
    iconColor: 'text-sky-500',
    skills: [
      { name: 'Azure ML', icon: Cloud, iconColor: 'text-blue-500' },
      { name: 'AWS SageMaker', icon: Globe, iconColor: 'text-orange-500' },
    ],
  },
  {
    title: 'Big Data & Streaming',
    icon: Database,
    iconColor: 'text-emerald-500',
    skills: [
      { name: 'Apache Spark', icon: Zap, iconColor: 'text-orange-500' },
      { name: 'Kafka', icon: Activity, iconColor: 'text-red-500' },
    ],
  },
  {
    title: 'Domains & Specialties',
    icon: Target,
    iconColor: 'text-rose-500',
    skills: [
      { name: 'Fraud Detection', icon: AlertTriangle, iconColor: 'text-yellow-500' },
      { name: 'Risk Modeling', icon: Scale, iconColor: 'text-blue-500' },
      { name: 'Explainable AI', icon: BookOpen, iconColor: 'text-green-500' },
      { name: 'Model Governance', icon: Shield, iconColor: 'text-indigo-500' },
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
                    className={`p-1.5 rounded-lg bg-foreground/10 ${category.iconColor} group-hover:bg-foreground/20 transition-colors duration-300`}
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
                        <SkillIcon className={`w-3 h-3 ${skill.iconColor}`} />
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
