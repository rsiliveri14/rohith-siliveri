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
          <section id="about" className="py-20 flex items-center bg-background">
            <About />
          </section>
          <section id="experience" className="py-20 flex items-center">
            <Experience />
          </section>
          <section id="skills" className="py-20 flex items-center">
            <Skills />
          </section>
          <section id="projects" className="py-16 flex items-center">
            <Projects />
          </section>
          <section id="contact" className="pt-20">
            <Contact />
          </section>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Index;
