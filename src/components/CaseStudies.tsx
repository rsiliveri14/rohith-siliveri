import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { caseStudies } from '@/lib/caseStudies';
import SectionHeader from './SectionHeader';
import { cardHover, cinematicSpring, cinematicViewport, fadeScale, staggerContainer } from '@/lib/motion';

const CaseStudies = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, cinematicViewport);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section ref={containerRef} className="w-full py-20 relative">
      <div className="page-shell relative">
        <SectionHeader eyebrow="Evaluation work" title="Case studies" />

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {caseStudies.map((study, index) => (
            <motion.div key={study.slug} variants={fadeScale}>
              <Link to={`/work/${study.slug}`} className="block h-full group">
                <motion.article
                  className="shine-card h-full bg-card border border-border rounded-2xl p-6 lg:p-8 flex flex-col"
                  whileHover={prefersReducedMotion ? undefined : cardHover}
                  transition={cinematicSpring}
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span className="text-[11px] font-medium tracking-widest uppercase text-muted-foreground">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{study.company}</p>
                  <h3 className="font-semibold text-foreground text-base leading-snug mb-3">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {study.summary}
                  </p>
                  <p className="text-sm text-foreground leading-relaxed flex-1">
                    {study.result}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {study.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2 py-0.5 rounded-full bg-secondary border border-border text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">{study.period}</p>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
