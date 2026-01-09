import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParallaxBackground from '@/components/ParallaxBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300 relative">
      <ParallaxBackground />
      <Navbar />
      <main className="relative z-10">
        <section id="hero" className="min-h-screen flex items-center">
          <Hero />
        </section>
        <section id="about" className="min-h-screen flex items-center bg-background">
          <About />
        </section>
        <section id="experience" className="min-h-screen flex items-center">
          <Experience />
        </section>
        <section id="skills" className="min-h-screen flex items-center">
          <Skills />
        </section>
        <section id="projects" className="min-h-screen flex items-center">
          <Projects />
        </section>
        <section id="contact" className="min-h-screen flex flex-col">
          <div className="flex-1 flex items-center">
            <Contact />
          </div>
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Index;
