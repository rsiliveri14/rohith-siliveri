import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
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
  FileCode,
  Boxes,
  Rocket,
  GitBranch,
  Activity,
  Layers,
  Container,
  Workflow,
  Zap,
  Shield,
  Scale,
  AlertTriangle,
  Terminal,
  Monitor,
  Bug,
  Eye,
  GitCommit,
  FlaskConical,
  Binary,
  Braces,
  Coffee,
  Wind,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

interface Skill {
  name: string;
  icon: LucideIcon;
  iconColor: string;
  about: string;
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
      { name: 'Generative AI & LLMs', icon: MessageSquare, iconColor: 'text-green-500', about: 'I build and evaluate LLM systems for production workflows, not just chat demos.' },
      { name: 'Agentic AI', icon: Brain, iconColor: 'text-purple-500', about: 'I design and score coding agents that plan, use tools, and complete real engineering tasks.' },
      { name: 'PyTorch', icon: Boxes, iconColor: 'text-orange-500', about: 'Primary deep-learning stack for training, fine-tuning, and serving models.' },
      { name: 'TensorFlow', icon: Cpu, iconColor: 'text-amber-500', about: 'Used for production training and serving alongside the rest of the ML stack.' },
      { name: 'Hugging Face', icon: MessageSquare, iconColor: 'text-yellow-500', about: 'Transformers for document NLP, evaluation datasets, and model inference.' },
      { name: 'XGBoost', icon: Rocket, iconColor: 'text-red-500', about: 'Gradient boosting for fraud, claims, and other tabular prediction problems.' },
      { name: 'scikit-learn', icon: Settings, iconColor: 'text-cyan-500', about: 'Baselines, pipelines, and model comparison before anything reaches production.' },
      { name: 'NLP', icon: Cpu, iconColor: 'text-blue-500', about: 'Extract structure from messy documents, claims, and customer text.' },
    ],
  },
  {
    title: 'Languages & Frameworks',
    icon: Code,
    iconColor: 'text-blue-500',
    skills: [
      { name: 'Python', icon: FileCode, iconColor: 'text-yellow-500', about: 'Main language for ML, evaluation harnesses, verifiers, and backend services.' },
      { name: 'TypeScript', icon: FileCode, iconColor: 'text-blue-500', about: 'Typed frontend and tooling around products and this portfolio.' },
      { name: 'JavaScript', icon: Braces, iconColor: 'text-yellow-400', about: 'Web apps and lightweight tooling around ML services.' },
      { name: 'Go', icon: Code, iconColor: 'text-cyan-500', about: 'Concurrent services and infrastructure around ML systems.' },
      { name: 'Java', icon: Coffee, iconColor: 'text-red-500', about: 'Enterprise services in banking and insurance environments.' },
      { name: 'Rust', icon: Settings, iconColor: 'text-orange-500', about: 'Performance-sensitive tooling where reliability and memory safety matter.' },
      { name: 'SQL', icon: Database, iconColor: 'text-blue-400', about: 'Query, join, and shape production data for models and evaluations.' },
      { name: 'Shell', icon: Terminal, iconColor: 'text-green-500', about: 'Reproducible environments, Docker workflows, and eval-harness scripts.' },
    ],
  },
  {
    title: 'Eval Harnesses',
    icon: Settings,
    iconColor: 'text-gray-500',
    skills: [
      { name: 'SWE-bench', icon: GitBranch, iconColor: 'text-green-500', about: 'Repository-level coding tasks that test whether an agent can actually fix software.' },
      { name: 'Terminal-Bench', icon: Terminal, iconColor: 'text-pink-500', about: 'Command-line agent tasks in pinned terminal environments.' },
      { name: 'Harbor', icon: Layers, iconColor: 'text-blue-500', about: 'Packages an eval as environment, solution, tests, and verifier so another person can rerun it.' },
      { name: 'OSWorld', icon: Monitor, iconColor: 'text-violet-500', about: 'Computer-use evaluation of agents operating real desktop applications.' },
      { name: 'MLE-bench', icon: Binary, iconColor: 'text-orange-500', about: 'GPU machine-learning benchmarks for longer-running agent workflows.' },
      { name: 'pytest', icon: FlaskConical, iconColor: 'text-yellow-500', about: 'Automated tests that decide pass or fail for agent solutions and production code.' },
      { name: 'Claude Code', icon: Bug, iconColor: 'text-amber-500', about: 'CLI coding agent I used in blinded evaluation runs and trajectory review.' },
    ],
  },
  {
    title: 'Evaluation Engineering',
    icon: Target,
    iconColor: 'text-cyan-500',
    skills: [
      { name: 'Benchmark Design', icon: Scale, iconColor: 'text-blue-500', about: 'Turn real engineering work into tasks that measure the capability you actually care about.' },
      { name: 'Verifier Design', icon: Shield, iconColor: 'text-teal-500', about: 'Write checks that fail unless the requested behavior is actually there.' },
      { name: 'Model Evaluation', icon: Activity, iconColor: 'text-indigo-500', about: 'Held-out testing, comparison, and failure analysis for ML systems.' },
      { name: 'Agent Evaluation', icon: Target, iconColor: 'text-cyan-500', about: 'Blinded scoring of coding-agent trajectories and outcomes, not just the final patch.' },
      { name: 'Computer-use Evaluation', icon: Monitor, iconColor: 'text-violet-500', about: 'GUI workflows where the agent has to see and act, not only write code.' },
      { name: 'Model Reliability', icon: Shield, iconColor: 'text-indigo-500', about: 'Reproducible, audit-ready evaluation so a score reflects the model, not a broken setup.' },
    ],
  },
  {
    title: 'Deployment & Services',
    icon: Server,
    iconColor: 'text-indigo-500',
    skills: [
      { name: 'Docker', icon: Container, iconColor: 'text-blue-400', about: 'Pinned, reproducible environments for models and agent benchmarks.' },
      { name: 'Kubernetes', icon: Boxes, iconColor: 'text-blue-600', about: 'Serve models and APIs with container orchestration in production.' },
      { name: 'FastAPI', icon: Zap, iconColor: 'text-teal-500', about: 'Model and evaluation APIs for training, scoring, and product services.' },
      { name: 'GitHub Actions', icon: GitBranch, iconColor: 'text-gray-700', about: 'CI/CD for tests, training jobs, and deploys.' },
      { name: 'Jenkins', icon: Workflow, iconColor: 'text-red-400', about: 'Pipeline automation in enterprise build and release environments.' },
      { name: 'Git', icon: GitCommit, iconColor: 'text-orange-500', about: 'Version control for code, evaluation packages, and infrastructure.' },
      { name: 'REST APIs', icon: Server, iconColor: 'text-indigo-500', about: 'Interfaces between models, agents, and product systems.' },
      { name: 'Microservices', icon: Workflow, iconColor: 'text-violet-500', about: 'Split ML systems into independently deployable services.' },
    ],
  },
  {
    title: 'Cloud & Data',
    icon: Cloud,
    iconColor: 'text-sky-500',
    skills: [
      { name: 'AWS', icon: Cloud, iconColor: 'text-orange-500', about: 'Cloud for training, storage, and serving production ML systems.' },
      { name: 'EC2 / S3 / Lambda', icon: Cloud, iconColor: 'text-amber-500', about: 'Compute, artifacts, and event-driven inference on AWS.' },
      { name: 'PostgreSQL', icon: Database, iconColor: 'text-blue-500', about: 'Relational store behind apps, features, and model services.' },
      { name: 'Apache Kafka', icon: Activity, iconColor: 'text-red-500', about: 'Event streams for production ML and operational pipelines.' },
      { name: 'Apache Airflow', icon: Wind, iconColor: 'text-teal-500', about: 'Scheduled training, data, and evaluation workflows.' },
      { name: 'MLflow', icon: Layers, iconColor: 'text-blue-400', about: 'Experiment tracking and model registry for reproducible training.' },
      { name: 'Pandas', icon: Database, iconColor: 'text-indigo-400', about: 'Tabular analysis and feature work before a model is trained.' },
      { name: 'NumPy', icon: Binary, iconColor: 'text-cyan-500', about: 'Numerical foundations for models, metrics, and evaluation code.' },
    ],
  },
  {
    title: 'Domains & Specialties',
    icon: Target,
    iconColor: 'text-rose-500',
    skills: [
      { name: 'Fraud detection', icon: AlertTriangle, iconColor: 'text-yellow-500', about: 'Rare-class models for banking and insurance, evaluated beyond raw accuracy.' },
      { name: 'Claims intelligence', icon: Eye, iconColor: 'text-blue-500', about: 'Triage and risk scoring from claims, policy, and customer history.' },
      { name: 'Document NLP', icon: FileCode, iconColor: 'text-blue-400', about: 'Pull fields from messy forms and unstructured claim or policy text.' },
      { name: 'Predictive modeling', icon: Activity, iconColor: 'text-indigo-500', about: 'Supervised models for valuation, risk, and operational decisions.' },
      { name: 'Banking AI', icon: Shield, iconColor: 'text-indigo-500', about: 'Applied ML where reliability, security, and auditability matter as much as accuracy.' },
      { name: 'Insurance ML', icon: Scale, iconColor: 'text-blue-500', about: 'Claims, fraud, and document systems in production insurance workflows.' },
      { name: 'GPU ML benches', icon: Cpu, iconColor: 'text-orange-500', about: 'Longer-running ML agent tasks under GPU and resource constraints.' },
    ],
  },
];

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

const SkillChip = ({ skill, index }: { skill: Skill; index: number }) => {
  const [open, setOpen] = useState(false);
  const SkillIcon = skill.icon;

  return (
    <HoverCard open={open} onOpenChange={setOpen} openDelay={120} closeDelay={80}>
      <HoverCardTrigger asChild>
        <motion.span
          variants={skillTagVariants}
          custom={index}
          tabIndex={0}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-secondary text-muted-foreground text-xs rounded-full border border-border/50
            hover:border-foreground/40 hover:text-foreground hover:bg-foreground/5
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
            cursor-help transition-all duration-200"
          whileHover={{ scale: 1.06, y: -1 }}
          whileTap={{ scale: 0.97 }}
        >
          <SkillIcon className={`w-3 h-3 ${skill.iconColor}`} />
          {skill.name}
        </motion.span>
      </HoverCardTrigger>
      <HoverCardContent side="top" align="center" className="w-64 p-3">
        <p className="text-xs font-semibold text-foreground">{skill.name}</p>
        <p className="text-xs text-muted-foreground leading-relaxed mt-1">{skill.about}</p>
      </HoverCardContent>
    </HoverCard>
  );
};

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

  return (
    <section id="skills" ref={containerRef} className="w-full py-20 px-6">
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
            Languages, evaluation tooling, and infrastructure for production AI and agent evaluation. Hover a skill for how I use it.
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
                className="group bg-card border border-border rounded-xl p-4 shine-card"
                whileHover={{
                  borderColor: 'hsl(var(--foreground) / 0.3)',
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
                  {category.skills.map((skill, skillIndex) => (
                    <SkillChip key={skill.name} skill={skill} index={skillIndex} />
                  ))}
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
