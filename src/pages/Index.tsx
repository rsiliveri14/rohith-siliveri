import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParallaxBackground from '@/components/ParallaxBackground';
import BackToTop from '@/components/BackToTop';
import LoadingScreen from '@/components/LoadingScreen';

const Index = () => {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-background transition-colors duration-300 relative">
        <ParallaxBackground />
        <Navbar />
        <main className="relative z-10">
          <section id="hero" className="min-h-screen flex items-center">
            <Hero />
          </section>
          <section id="about" className="py-12 md:py-16">
            <About />
          </section>
          <section id="experience" className="py-12 md:py-16">
            <Experience />
          </section>
          <section id="skills" className="py-12 md:py-16">
            <Skills />
          </section>
          <section id="projects" className="py-12 md:py-16">
            <Projects />
          </section>
          <section id="contact" className="pt-12 md:pt-16">
            <Contact />
          </section>
        </main>
        <BackToTop />
      </div>
    </>
  );
};

export default Index;
