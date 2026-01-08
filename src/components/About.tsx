import { Briefcase, GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import aboutImage from '@/assets/about.png';
const About = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  return <section id="about" className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="section-title-small">Get To Know More</p>
          <h2 className="section-title">About Me</h2>
        </div>

        <div ref={ref} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* About Image */}
          <div className="flex-shrink-0">
            <div className="w-56 md:w-64 lg:w-72 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={aboutImage} 
                alt="Rohith Vardhan Siliveri" 
                className="w-full h-auto object-contain border-none" 
                style={{ imageRendering: 'auto' }}
                loading="eager"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="lg:w-3/4">
            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="info-card py-4">
                <Briefcase className="w-6 h-6 mx-auto mb-2 text-foreground" />
                <h3 className="font-semibold text-sm mb-0.5">Experience</h3>
                <p className="text-muted-foreground text-xs">3+ Years</p>
              </div>
              <div className="info-card py-4">
                <GraduationCap className="w-6 h-6 mx-auto mb-2 text-foreground" />
                <h3 className="font-semibold text-sm mb-0.5">Education</h3>
                <p className="text-muted-foreground text-xs">M.S. Computer Science</p>
              </div>
            </div>

            {/* Bio */}
            <p className="text-muted-foreground text-sm leading-relaxed text-center lg:text-left mb-6">
              AI/ML Engineer with 3+ years of experience building and deploying machine learning 
              systems in finance and insurance. Experienced across the full ML lifecycle, with a 
              strong focus on fraud detection, MLOps, and reliable, scalable AI solutions.
            </p>

            {/* Education Details */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-secondary rounded-xl">
                <div>
                  <p className="font-medium text-sm">M.S. Computer Science (AI)</p>
                  <p className="text-xs text-muted-foreground">SUNY Binghamton, NY</p>
                </div>
                <p className="text-xs text-muted-foreground mt-1 sm:mt-0">2023 – 2025</p>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-secondary rounded-xl">
                <div>
                  <p className="font-medium text-sm">B.Tech Computer Science</p>
                  <p className="text-xs text-muted-foreground">Anurag University, India</p>
                </div>
                <p className="text-xs text-muted-foreground mt-1 sm:mt-0">2019 – 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;