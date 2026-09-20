import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { useRef } from 'react';
import { projects } from '@/lib/projects';
import SectionHeader from './SectionHeader';
import { cardHover, cinematicEase, cinematicSpring, cinematicViewport, fadeScale, staggerContainer } from '@/lib/motion';

const Projects = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, cinematicViewport);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section ref={containerRef} className="w-full py-20 px-6 relative">
      <div className="container mx-auto max-w-5xl relative">
        <SectionHeader eyebrow="Open source" title="Projects" />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project, index) => (
            <motion.div key={project.repo} variants={fadeScale}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full group"
                aria-label={`Open ${project.title} on GitHub`}
              >
                <motion.article
                  className="shine-card h-full bg-card border border-border rounded-2xl p-5 flex flex-col"
                  whileHover={prefersReducedMotion ? undefined : cardHover}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
                  transition={cinematicSpring}
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span className="text-[11px] font-medium tracking-widest uppercase text-muted-foreground">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <Github size={15} />
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{project.category}</p>
                  <h3 className="font-semibold text-foreground text-base leading-snug mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2 py-0.5 rounded-full bg-secondary border border-border text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 inline-flex items-center gap-1">
                    View on GitHub
                    <ArrowUpRight size={12} />
                  </p>
                </motion.article>
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
          transition={{ delay: 0.45, duration: 0.6, ease: cinematicEase }}
        >
          <motion.a
            href="https://github.com/rsiliveri14"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            whileHover={prefersReducedMotion ? undefined : { y: -2 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
          >
            <Github size={16} />
            View all repositories
            <ArrowUpRight size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
