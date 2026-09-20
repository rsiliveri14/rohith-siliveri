import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';
import { useRef } from 'react';
import SectionHeader from './SectionHeader';
import { cinematicEase, cinematicSpring, cinematicViewport, staggerContainer } from '@/lib/motion';

const experiences = [
  {
    company: 'PNC Financial Services',
    role: 'Applied AI Engineer',
    location: 'USA',
    period: 'Jul 2025 – Present',
    highlights: [
      'Own applied ML for banking — risk, fraud, documents, and decision support — with held-out evaluation and audit-ready runs',
      'Build agent evaluations for banking AI with reproducible environments and measurable failure analysis',
      'Separate model quality from prompt, tools, and infrastructure when production AI underperforms',
    ],
  },
  {
    company: 'Handshake AI',
    role: 'AI Fellow / Reviewer / Specialist',
    location: 'Remote',
    period: 'Jan 2026 – Aug 2026',
    note: 'Concurrent with PNC',
    highlights: [
      'Built and evaluated SWE-bench, Terminal-Bench, and Harbor tasks from real software-engineering problems',
      'Conducted blinded coding-agent evaluations and benchmark QA across reproducible environments',
      'Contributed visual debugging and preference-ranking data for agent evaluation',
    ],
  },
  {
    company: 'Snorkel AI',
    role: 'Expert AI Contributor',
    location: 'Remote',
    period: 'Mar 2026 – Aug 2026',
    note: 'Concurrent with PNC',
    highlights: [
      'Validated and repaired Harbor evaluation packages across environments, solutions, and verifiers',
      'Rewrote over-prescriptive instructions into engineering-oriented tasks with objective checks',
      'Authored computer-use GUI evaluations and GPU machine-learning benchmarks',
    ],
  },
  {
    company: 'Binghamton University',
    role: 'Graduate Student Researcher',
    location: 'NY',
    period: 'Jan 2025 – May 2025',
    highlights: [
      'Faculty research: an end-to-end residential property valuation system, from housing data through a deployed app',
      'Benchmarked five regressors; selected XGBoost after it beat a Linear Regression baseline of R² ≈ 0.69',
      'Served the model with FastAPI, PostgreSQL, Docker, AWS EC2/S3, and GitHub Actions CI/CD',
    ],
  },
  {
    company: 'Assurant',
    role: 'AI Engineer',
    location: 'India',
    period: 'Jan 2022 – Jul 2023',
    highlights: [
      'Built claims-triage models for property and auto — features from claims, policy, and customer history, evaluated on precision, recall, and ROC-AUC so ops could flag high-severity and likely-fraud cases earlier',
      'Shipped Airflow training pipelines with MLflow tracking, then served models as FastAPI services on Docker and Kubernetes for claim risk scoring and policy recommendations',
      'Extracted fields from messy claim forms with OCR, spaCy, and Hugging Face, and trained XGBoost fraud models that treated fraud as a rare-class problem rather than raw accuracy',
    ],
  },
];

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, cinematicViewport);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  const cardVariants = (index: number) => ({
    hidden: {
      opacity: 0,
      x: prefersReducedMotion ? 0 : index % 2 === 0 ? -64 : 64,
      y: prefersReducedMotion ? 0 : 24,
      scale: prefersReducedMotion ? 1 : 0.96,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.85,
        ease: cinematicEase,
      },
    },
  });

  return (
    <div ref={containerRef} className="w-full py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <SectionHeader eyebrow="Career" title="Experience" />
        <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto mb-10 -mt-4">
          Handshake AI and Snorkel AI were specialist evaluation engagements in 2026, alongside the full-time Applied AI role at PNC.
        </p>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform -translate-x-1/2 hidden md:block">
            <motion.div
              className="w-full bg-foreground/30 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={cardVariants(index)}
                className={`relative md:w-[calc(50%-20px)] ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
              >
                <motion.div
                  className="hidden md:block absolute top-6 w-3 h-3 rounded-full bg-foreground border-2 border-background z-10"
                  style={{
                    [index % 2 === 0 ? 'right' : 'left']: '-26px',
                  }}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.2 + index * 0.08, duration: 0.45, ease: cinematicEase }}
                />

                <motion.div
                  className="bg-background p-5 rounded-xl shadow-sm border border-border group cursor-default shine-card"
                  whileHover={
                    prefersReducedMotion
                      ? undefined
                      : {
                          scale: 1.02,
                          y: -6,
                          boxShadow: '0 20px 40px -15px hsl(var(--foreground) / 0.28)',
                        }
                  }
                  transition={cinematicSpring}
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
                  {exp.note ? (
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2">
                      {exp.note}
                    </p>
                  ) : null}
                  <ul className="space-y-1">
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="text-foreground mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
