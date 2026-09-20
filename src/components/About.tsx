import { motion, useInView, useReducedMotion } from "framer-motion";
import { Briefcase, GraduationCap, ShieldCheck } from "lucide-react";
import aboutImage from "@/assets/about.jpg";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";
import { cinematicEase, cinematicSpring, cinematicViewport, fadeUp, staggerContainer } from "@/lib/motion";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, cinematicViewport);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div ref={containerRef} className="w-full py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <SectionHeader eyebrow="Background" title="About" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
        >
          <motion.div
            variants={fadeUp}
            className="lg:w-1/3 flex justify-center"
          >
            <motion.div
              className="w-48 h-60 md:w-56 md:h-72 rounded-2xl overflow-hidden group relative"
              whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
              transition={cinematicSpring}
            >
              <img
                src={aboutImage}
                alt="Rohith Siliveri"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div className="lg:w-2/3 w-full" variants={fadeUp}>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { icon: Briefcase, title: "Experience", value: "4+ years" },
                { icon: ShieldCheck, title: "Focus", value: "Eval + production" },
                { icon: GraduationCap, title: "Education", value: "M.S. CS" },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  className="info-card py-4 px-2 group"
                  whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                  transition={cinematicSpring}
                >
                  <item.icon className="w-5 h-5 mx-auto mb-2 text-foreground" />
                  <h3 className="font-semibold text-xs mb-0.5">{item.title}</h3>
                  <p className="text-muted-foreground text-[11px] leading-snug">{item.value}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-muted-foreground text-sm leading-relaxed text-center lg:text-left space-y-4">
              <p>
                I’m an Applied AI Engineer. I build coding-agent benchmarks and verifiers, and I apply the
                same standard to production ML in banking and insurance — held-out evaluation,
                reproducibility, and auditability, not just a leaderboard score.
              </p>
              <p>
                In 2026 I contributed to Handshake AI and Snorkel AI evaluation programs{' '}
                <span className="text-foreground">alongside my full-time role at PNC</span> — SWE-bench,
                Terminal-Bench, Harbor, computer-use, and GPU ML benches. Earlier work covered fraud,
                claims intelligence, document NLP, and deployed predictive models.
              </p>
            </div>

            <div className="space-y-2 mt-6">
              {[
                { degree: "M.S. Computer Science (AI)", school: "SUNY Binghamton, NY" },
                { degree: "B.Tech Computer Science", school: "Anurag University, India" },
              ].map((edu) => (
                <div
                  key={edu.degree}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-secondary rounded-xl"
                >
                  <p className="font-medium text-sm">{edu.degree}</p>
                  <p className="text-xs text-muted-foreground">{edu.school}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
