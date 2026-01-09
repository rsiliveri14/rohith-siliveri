import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import MagneticButton from './MagneticButton';
import socialMediaImg from '@/assets/nlp.jpg';
import cyberbullyingImg from '@/assets/fraud-detection.jpg';
import housePriceImg from '@/assets/house-price.jpg';

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
    image: socialMediaImg,
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
    image: cyberbullyingImg,
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
    image: housePriceImg,
  },
];
const Projects = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <section id="projects" ref={containerRef} className="w-full py-8 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        {/* Animated section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-8"
        >
          <motion.p 
            className="section-title-small"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            Browse My
          </motion.p>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Projects
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-sm max-w-2xl mx-auto mt-3"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            A curated selection of data analysis and machine learning projects demonstrating end-to-end problem solving, from data preparation and modeling to evaluation and insights.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-background rounded-xl border border-border cursor-pointer flex flex-col relative overflow-hidden"
              whileHover={{ 
                y: -5,
                boxShadow: '0 20px 40px -12px rgba(0,0,0,0.12)',
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Project Image - larger and more prominent */}
              <div className="relative h-40 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col relative z-10">
                <motion.h3 
                  className="font-bold text-foreground text-base mb-1.5 group-hover:text-primary transition-colors duration-300"
                >
                  {project.title}
                </motion.h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{project.description}</p>
                
                <ul className="text-muted-foreground text-xs space-y-1 mb-3">
                  {project.details.slice(0, 2).map((detail, i) => (
                    <li 
                      key={i} 
                      className="flex items-start gap-2"
                    >
                      <span className="text-foreground mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags - more prominent */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-0.5 bg-secondary text-muted-foreground text-xs rounded-full border border-border/50 hover:border-foreground/30 hover:bg-foreground/5 transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <MagneticButton strength={0.2}>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full flex items-center gap-2 text-xs w-fit hover:shadow-md hover:border-foreground/50 transition-all duration-300"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={14} />
                          View on GitHub
                          <ExternalLink size={12} />
                        </a>
                      </Button>
                    </motion.div>
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
