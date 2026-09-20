import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import CaseStudies from '@/components/CaseStudies';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import ParallaxBackground from '@/components/ParallaxBackground';
import BackToTop from '@/components/BackToTop';
import LoadingScreen from '@/components/LoadingScreen';
import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  useEffect(() => {
    if (!window.location.hash) return;
    const timer = window.setTimeout(() => {
      document.querySelector(window.location.hash)?.scrollIntoView({ behavior: 'smooth' });
    }, sessionStorage.getItem('rs-visited') ? 80 : 2200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-background transition-colors duration-300 relative">
        <ParallaxBackground />
        <ScrollProgress />
        <Navbar />
        <main className="relative z-10 bg-background">
          <section id="hero" className="min-h-screen flex items-center pt-24 overflow-hidden">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="work">
            <CaseStudies />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <BackToTop />
      </div>
    </>
  );
};

export default Index;
