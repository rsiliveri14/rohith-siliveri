import { Briefcase, GraduationCap } from 'lucide-react';
import aboutImage from '@/assets/about.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="section-title-small">Get To Know More</p>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* About Image */}
          <div className="lg:w-1/3 animate-fade-in-up">
            <div className="w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutImage}
                alt="Rohith Vardhan Siliveri"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="lg:w-2/3 animate-fade-in-up animation-delay-200">
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="info-card">
                <Briefcase className="w-8 h-8 mx-auto mb-3 text-foreground" />
                <h3 className="font-semibold text-lg mb-1">Experience</h3>
                <p className="text-muted-foreground">3+ Years</p>
                <p className="text-sm text-muted-foreground">AI / ML Engineer</p>
              </div>
              <div className="info-card">
                <GraduationCap className="w-8 h-8 mx-auto mb-3 text-foreground" />
                <h3 className="font-semibold text-lg mb-1">Education</h3>
                <p className="text-muted-foreground">M.S. in Computer Science</p>
                <p className="text-sm text-muted-foreground">SUNY Binghamton</p>
              </div>
            </div>

            {/* Bio */}
            <p className="text-muted-foreground leading-relaxed text-center lg:text-left">
              AI/ML Engineer with 3+ years of experience building and deploying machine learning 
              systems in finance and insurance. Experienced across the full ML lifecycle, with a 
              strong focus on fraud detection, MLOps, and reliable, scalable AI solutions. I'm 
              passionate about turning experimental models into dependable production systems 
              that drive real business value.
            </p>

            {/* Education Details */}
            <div className="mt-8 space-y-4">
              <h3 className="font-semibold text-lg">Education</h3>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 bg-secondary rounded-xl">
                  <div>
                    <p className="font-medium">Master's in Computer Science (AI)</p>
                    <p className="text-sm text-muted-foreground">SUNY Binghamton University, New York</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 sm:mt-0">Aug 2023 – May 2025</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 bg-secondary rounded-xl">
                  <div>
                    <p className="font-medium">Bachelor's in Computer Science & Engineering</p>
                    <p className="text-sm text-muted-foreground">Anurag University, Hyderabad</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 sm:mt-0">Aug 2019 – Mar 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
