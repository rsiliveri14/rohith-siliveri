import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import MagneticButton from './MagneticButton';

const projects = [
  {
    title: 'Social Media Data Analysis',
    description: 'Exploratory data analysis project focused on understanding patterns and engagement in social media datasets.',
    details: [
      'Performed data cleaning and preprocessing on real-world social media data',
      'Analyzed user engagement and content trends',
      'Created visualizations to communicate insights clearly',
    ],
    tags: ['Python', 'Pandas', 'Data Analysis', 'Visualization'],
    github: 'https://github.com/rsiliveri14',
  },
  {
    title: 'Cyberbullying Detection',
    description: 'A machine learning and NLP project to classify cyberbullying content in social media text.',
    details: [
      'Implemented text preprocessing and feature extraction',
      'Trained and evaluated ML-based classifiers',
      'Focused on accuracy, precision, recall, and F1-score',
    ],
    tags: ['Python', 'NLP', 'scikit-learn'],
    github: 'https://github.com/rsiliveri14',
  },
  {
    title: 'House Price Prediction',
    description: 'An end-to-end regression project predicting housing prices using structured datasets.',
    details: [
      'Conducted exploratory data analysis and feature engineering',
      'Built and evaluated regression and tree-based models',
      'Visualized model performance and key insights',
    ],
    tags: ['Python', 'Pandas', 'scikit-learn', 'Matplotlib'],
    github: 'https://github.com/rsiliveri14',
  },
  {
    title: 'Super Bowl Ads Analysis',
    description: 'A data analysis project focused on understanding trends and patterns in Super Bowl advertising campaigns.',
    details: [
      'Cleaned and explored structured datasets related to Super Bowl advertisements',
      'Analyzed engagement, themes, and temporal trends across ads',
      'Used visualizations to communicate insights and patterns clearly',
    ],
    tags: ['Python', 'Pandas', 'Data Analysis', 'Visualization'],
    github: 'https://github.com/rsiliveri14',
  },
];

const Projects = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-15%" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <section id="projects" ref={containerRef} className="w-full py-8 px-6 bg-secondary">
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
            Browse My
          </motion.p>
          <motion.h2 
            className="section-title"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={isInView ? { clipPath: 'inset(0 0% 0 0)' } : { clipPath: 'inset(0 100% 0 0)' }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            Projects
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-sm max-w-2xl mx-auto mt-3"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            A curated selection of data analysis and machine learning projects demonstrating end-to-end problem solving, from data preparation and modeling to evaluation and insights.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-background rounded-xl p-5 border border-border cursor-pointer flex flex-col relative overflow-hidden"
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
              }}
              transition={{ duration: 0.4 }}
            >
              {/* Animated gradient background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              <div className="flex-1 relative z-10">
                <motion.h3 
                  className="font-semibold text-foreground text-base mb-1.5"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                
                <ul className="text-muted-foreground text-xs space-y-1 mb-3">
                  {project.details.map((detail, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: 0.4 + index * 0.1 + i * 0.05 }}
                    >
                      <motion.span 
                        className="text-foreground mt-1"
                        whileHover={{ scale: 1.5 }}
                      >
                        •
                      </motion.span>
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-full transition-all duration-200 group-hover:bg-foreground/10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.5 + index * 0.1 + tagIndex * 0.03 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              <MagneticButton strength={0.2}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full flex items-center gap-2 text-xs w-fit hover:shadow-md hover:border-foreground/50 transition-all duration-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={14} />
                      GitHub
                      <motion.span
                        initial={{ opacity: 0, x: -5 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ExternalLink size={12} />
                      </motion.span>
                    </a>
                  </Button>
                </motion.div>
              </MagneticButton>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
