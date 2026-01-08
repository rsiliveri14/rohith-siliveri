import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      <main>
        <section className="min-h-screen flex items-center">
          <Hero />
        </section>
        <section className="min-h-screen flex items-center bg-background">
          <About />
        </section>
        <section className="min-h-screen flex items-center">
          <Experience />
        </section>
        <section className="min-h-screen flex items-center">
          <Skills />
        </section>
        <section className="min-h-screen flex items-center">
          <Projects />
        </section>
        <section className="min-h-screen flex items-center">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
