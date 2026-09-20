import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCaseStudy, caseStudies } from '@/lib/caseStudies';
import Navbar from '@/components/Navbar';
import BackToTop from '@/components/BackToTop';
import ScrollProgress from '@/components/ScrollProgress';
import ParallaxBackground from '@/components/ParallaxBackground';
import NotFound from '@/pages/NotFound';
import { cardHover, cinematicSpring, clipReveal, fadeUp, staggerContainer } from '@/lib/motion';

const CaseStudy = () => {
  const { slug } = useParams();
  const study = slug ? getCaseStudy(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (study) {
      document.title = `${study.company} — Rohith Siliveri`;
    }
    return () => {
      document.title = 'Rohith Siliveri';
    };
  }, [study]);

  if (!study) {
    return <NotFound />;
  }

  const others = caseStudies.filter((item) => item.slug !== study.slug);

  return (
    <div className="min-h-screen bg-background relative">
      <ParallaxBackground />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10 pt-24 pb-20 px-6">
        <motion.article
          className="container mx-auto max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
            >
              <ArrowLeft size={16} />
              Back to work
            </Link>
          </motion.div>

          <motion.header variants={fadeUp} className="mb-10">
            <p className="section-title-small mb-3">
              {study.company} · {study.role}
            </p>
            <motion.h1
              className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4"
              variants={clipReveal}
            >
              {study.title}
            </motion.h1>
            <p className="text-muted-foreground text-sm mb-4">
              {study.period} · {study.location}
            </p>
            <p className="text-sm text-foreground leading-relaxed mb-5">
              {study.result}
            </p>
            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-secondary border border-border text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.header>

          <motion.section variants={fadeUp} className="mb-12">
            <h2 className="text-lg font-semibold mb-3">Overview</h2>
            <div className="space-y-4">
              {study.problem.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="text-muted-foreground text-sm leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.section>

          {study.sections.map((section) => (
            <motion.section
              key={section.heading}
              variants={fadeUp}
              className="mb-10"
            >
              <h2 className="text-lg font-semibold mb-3">{section.heading}</h2>
              <div className="space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="text-muted-foreground text-sm leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.section>
          ))}

          <motion.section
            variants={fadeUp}
            className="mb-16 p-5 rounded-2xl border border-border bg-card"
          >
            <h2 className="text-lg font-semibold mb-4">What I learned</h2>
            <ul className="space-y-3">
              {study.takeaways.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-foreground mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.div variants={fadeUp} className="border-t border-border pt-10">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">The other role</p>
            <div className="grid gap-3">
              {others.map((item) => (
                <motion.div key={item.slug} whileHover={cardHover} transition={cinematicSpring}>
                  <Link
                    to={`/work/${item.slug}`}
                    className="group flex items-center justify-between gap-4 p-4 rounded-xl border border-border bg-card hover:border-foreground/30 transition-colors"
                  >
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">{item.company}</p>
                      <p className="text-sm font-medium">{item.title}</p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-muted-foreground group-hover:text-foreground transition-colors"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.article>
      </main>
      <BackToTop />
    </div>
  );
};

export default CaseStudy;
