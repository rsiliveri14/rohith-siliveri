import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Brain,
  Code,
  Cloud,
  Target,
  MessageSquare,
  FileCode,
  Boxes,
  Rocket,
  Settings,
  Database,
  Terminal,
  GitBranch,
  Layers,
  Monitor,
  Binary,
  FlaskConical,
  Shield,
  Container,
  Zap,
  Activity,
  Wind,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import SectionHeader from './SectionHeader';
import { cardHover, cinematicEase, cinematicSpring, cinematicViewport, fadeScale, staggerContainer } from '@/lib/motion';

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
    title: 'Evaluation',
    icon: Target,
    iconColor: 'text-cyan-500',
    skills: [
      { name: 'SWE-bench', icon: GitBranch, iconColor: 'text-green-500', about: 'Repository-level coding tasks that test whether an agent can actually fix software.' },
      { name: 'Terminal-Bench', icon: Terminal, iconColor: 'text-pink-500', about: 'Command-line agent tasks in pinned terminal environments.' },
      { name: 'Harbor', icon: Layers, iconColor: 'text-blue-500', about: 'Packages an eval as environment, solution, tests, and verifier so another person can rerun it.' },
      { name: 'OSWorld', icon: Monitor, iconColor: 'text-violet-500', about: 'Computer-use evaluation of agents operating real desktop applications.' },
      { name: 'MLE-bench', icon: Binary, iconColor: 'text-orange-500', about: 'GPU machine-learning benchmarks for longer-running agent workflows.' },
      { name: 'Verifier design', icon: Shield, iconColor: 'text-teal-500', about: 'Write checks that fail unless the requested behavior is actually there.' },
      { name: 'pytest', icon: FlaskConical, iconColor: 'text-yellow-500', about: 'Automated tests that decide pass or fail for agent solutions and production code.' },
    ],
  },
  {
    title: 'Machine Learning',
    icon: Brain,
    iconColor: 'text-purple-500',
    skills: [
      { name: 'LLMs', icon: MessageSquare, iconColor: 'text-green-500', about: 'I build and evaluate LLM systems for production workflows, not just chat demos.' },
      { name: 'Agentic AI', icon: Brain, iconColor: 'text-purple-500', about: 'I design and score coding agents that plan, use tools, and complete real engineering tasks.' },
      { name: 'PyTorch', icon: Boxes, iconColor: 'text-orange-500', about: 'Primary deep-learning stack for training, fine-tuning, and serving models.' },
      { name: 'Hugging Face', icon: MessageSquare, iconColor: 'text-yellow-500', about: 'Transformers for document NLP, evaluation datasets, and model inference.' },
      { name: 'XGBoost', icon: Rocket, iconColor: 'text-red-500', about: 'Gradient boosting for fraud, claims, and other tabular prediction problems.' },
      { name: 'scikit-learn', icon: Settings, iconColor: 'text-cyan-500', about: 'Baselines, pipelines, and model comparison before anything reaches production.' },
    ],
  },
  {
    title: 'Languages',
    icon: Code,
    iconColor: 'text-blue-500',
    skills: [
      { name: 'Python', icon: FileCode, iconColor: 'text-yellow-500', about: 'Main language for ML, evaluation harnesses, verifiers, and backend services.' },
      { name: 'TypeScript', icon: FileCode, iconColor: 'text-blue-500', about: 'Typed frontend and tooling around products and this portfolio.' },
      { name: 'SQL', icon: Database, iconColor: 'text-blue-400', about: 'Query, join, and shape production data for models and evaluations.' },
      { name: 'Go', icon: Code, iconColor: 'text-cyan-500', about: 'Concurrent services and infrastructure around ML systems.' },
      { name: 'Shell', icon: Terminal, iconColor: 'text-green-500', about: 'Reproducible environments, Docker workflows, and eval-harness scripts.' },
    ],
  },
  {
    title: 'Production',
    icon: Cloud,
    iconColor: 'text-sky-500',
    skills: [
      { name: 'Docker', icon: Container, iconColor: 'text-blue-400', about: 'Pinned, reproducible environments for models and agent benchmarks.' },
      { name: 'Kubernetes', icon: Boxes, iconColor: 'text-blue-600', about: 'Serve models and APIs with container orchestration in production.' },
      { name: 'FastAPI', icon: Zap, iconColor: 'text-teal-500', about: 'Model and evaluation APIs for training, scoring, and product services.' },
      { name: 'AWS', icon: Cloud, iconColor: 'text-orange-500', about: 'Cloud for training, storage, and serving production ML systems.' },
      { name: 'Airflow', icon: Wind, iconColor: 'text-teal-500', about: 'Scheduled training, data, and evaluation workflows.' },
      { name: 'MLflow', icon: Layers, iconColor: 'text-blue-400', about: 'Experiment tracking and model registry for reproducible training.' },
      { name: 'PostgreSQL', icon: Database, iconColor: 'text-blue-500', about: 'Relational store behind apps, features, and model services.' },
      { name: 'Kafka', icon: Activity, iconColor: 'text-red-500', about: 'Event streams for production ML and operational pipelines.' },
    ],
  },
];

const skillTagVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.4,
      ease: cinematicEase,
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
          whileHover={{ scale: 1.04, y: -1 }}
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
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, cinematicViewport);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div ref={containerRef} className="w-full py-20">
      <div className="page-shell">
        <SectionHeader
          eyebrow="Stack"
          title="Skills"
          subtitle="What I actually use for evaluation harnesses and production ML. Hover a skill for how."
          className="mb-8"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={fadeScale}
                className="group bg-card border border-border rounded-xl p-4 shine-card"
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        ...cardHover,
                        borderColor: 'hsl(var(--foreground) / 0.3)',
                      }
                }
                transition={cinematicSpring}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className={`p-1.5 rounded-lg bg-foreground/10 ${category.iconColor}`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
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
    </div>
  );
};

export default Skills;
