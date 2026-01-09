import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import aboutImage from "@/assets/about.jpg";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-15%" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const contentY = useTransform(scrollYProgress, [0, 1], [30, -30]);

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

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, clipPath: 'inset(100% 0 0 0)' },
    visible: {
      opacity: 1,
      scale: 1,
      clipPath: 'inset(0% 0 0 0)',
      transition: {
        duration: 0.9,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <section id="about" ref={containerRef} className="w-full py-8 px-6">
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
            Get To Know More
          </motion.p>
          <motion.h2 
            className="section-title"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={isInView ? { clipPath: 'inset(0 0% 0 0)' } : { clipPath: 'inset(0 100% 0 0)' }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            About Me
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
        >
          {/* About Image with parallax */}
          <motion.div 
            className="lg:w-1/4"
            style={{ y: imageY }}
          >
            <motion.div
              variants={imageVariants}
              className="w-48 h-60 md:w-56 md:h-72 rounded-2xl overflow-hidden shadow-xl cursor-pointer group relative"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
              />
              <motion.img 
                src={aboutImage} 
                alt="Rohith Siliveri" 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          </motion.div>

          {/* About Content with parallax */}
          <motion.div 
            className="lg:w-3/4"
            style={{ y: contentY }}
          >
            {/* Info Cards with stagger */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { icon: Briefcase, title: "Experience", value: "3+ Years" },
                { icon: GraduationCap, title: "Education", value: "M.S. Computer Science" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="info-card py-4 group"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="w-6 h-6 mx-auto mb-2 text-foreground" />
                  </motion.div>
                  <h3 className="font-semibold text-sm mb-0.5">{item.title}</h3>
                  <p className="text-muted-foreground text-xs">{item.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Bio */}
            <motion.p 
              variants={itemVariants}
              className="text-muted-foreground text-sm leading-relaxed text-center lg:text-left mb-6"
            >
              AI/ML Engineer with 3+ years of experience building and deploying machine learning systems in finance and
              insurance. Experienced across the full ML lifecycle, with a strong focus on fraud detection, MLOps, and
              reliable, scalable AI solutions.
            </motion.p>

            {/* Education Details */}
            <div className="space-y-2">
              {[
                { degree: "M.S. Computer Science (AI)", school: "SUNY Binghamton, NY", period: "2023 – 2025" },
                { degree: "B.Tech Computer Science", school: "Anurag University, India", period: "2019 – 2023" },
              ].map((edu, index) => (
                <motion.div 
                  key={edu.degree}
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-secondary rounded-xl group cursor-default"
                  whileHover={{ scale: 1.01, x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <p className="font-medium text-sm">{edu.degree}</p>
                    <p className="text-xs text-muted-foreground">{edu.school}</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 sm:mt-0">{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
