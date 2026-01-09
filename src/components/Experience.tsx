import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';
import { useRef } from 'react';

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
      'Built predictive models for transaction scoring',
    ],
  },
];

const Experience = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-15%" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = (index: number) => ({
    hidden: { 
      opacity: 0, 
      x: index % 2 === 0 ? -80 : 80,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  });

  return (
    <section id="experience" ref={containerRef} className="w-full py-8 px-6 relative overflow-hidden" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="container mx-auto">
        {/* Animated section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-10"
        >
          <motion.p 
            className="section-title-small"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Journey
          </motion.p>
          <motion.h2 
            className="section-title"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={isInView ? { clipPath: 'inset(0 0% 0 0)' } : { clipPath: 'inset(0 100% 0 0)' }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            Experience
          </motion.h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Animated timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform -translate-x-1/2 hidden md:block">
            <motion.div
              className="w-full bg-foreground/30"
              style={{ height: lineHeight }}
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={cardVariants(index)}
                className={`relative md:w-[calc(50%-20px)] ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  className="hidden md:block absolute top-6 w-3 h-3 rounded-full bg-foreground border-2 border-background z-10"
                  style={{
                    [index % 2 === 0 ? 'right' : 'left']: '-26px',
                  }}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.3 + index * 0.2, duration: 0.4 }}
                />

                <motion.div
                  className="bg-background p-5 rounded-xl shadow-sm border border-border group cursor-default"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 20px 40px -15px rgba(0,0,0,0.3)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <motion.div 
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
                    >
                      <Building2 size={16} className="text-muted-foreground" />
                      <span className="font-semibold text-foreground text-sm">{exp.company}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-2 text-xs text-muted-foreground mt-1 sm:mt-0"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                    >
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </motion.div>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{exp.role}</h3>
                  <ul className="space-y-1">
                    {exp.highlights.map((highlight, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-2 text-muted-foreground text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: 0.6 + index * 0.2 + i * 0.1, duration: 0.4 }}
                      >
                        <span className="text-foreground mt-1">•</span>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
