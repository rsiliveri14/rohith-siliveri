import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
const projects = [{
  title: 'Social Media Data Analysis',
  description: 'Exploratory data analysis project focused on understanding patterns and engagement in social media datasets.',
  details: ['Performed data cleaning and preprocessing on real-world social media data', 'Analyzed user engagement and content trends', 'Created visualizations to communicate insights clearly'],
  tags: ['Python', 'Pandas', 'Data Analysis', 'Visualization'],
  github: 'https://github.com/rsiliveri14'
}, {
  title: 'Cyberbullying Detection',
  description: 'A machine learning and NLP project to classify cyberbullying content in social media text.',
  details: ['Implemented text preprocessing and feature extraction', 'Trained and evaluated ML-based classifiers', 'Focused on accuracy, precision, recall, and F1-score'],
  tags: ['Python', 'NLP', 'scikit-learn'],
  github: 'https://github.com/rsiliveri14'
}, {
  title: 'House Price Prediction',
  description: 'An end-to-end regression project predicting housing prices using structured datasets.',
  details: ['Conducted exploratory data analysis and feature engineering', 'Built and evaluated regression and tree-based models', 'Visualized model performance and key insights'],
  tags: ['Python', 'Pandas', 'scikit-learn', 'Matplotlib'],
  github: 'https://github.com/rsiliveri14'
}];
const Projects = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  return <section id="projects" className="py-16 px-6 bg-secondary">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <p className="section-title-small">Browse My</p>
          <h2 className="section-title">Projects</h2>
          
        </div>

        <div ref={ref} className={`space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {projects.map((project, index) => <div key={index} className="bg-background rounded-xl p-5 border border-border hover:border-foreground/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-out cursor-pointer" style={{
          transitionDelay: `${index * 100}ms`
        }}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground text-base mb-1.5">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                  
                  <ul className="text-muted-foreground text-xs space-y-1 mb-3">
                    {project.details.map((detail, i) => <li key={i} className="flex items-start gap-2">
                        <span className="text-foreground mt-1">•</span>
                        <span>{detail}</span>
                      </li>)}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tagIndex) => <span key={tagIndex} className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-full">
                        {tag}
                      </span>)}
                  </div>
                </div>

                <Button variant="outline" size="sm" className="rounded-full flex items-center gap-2 text-xs shrink-0 self-start" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={14} />
                    GitHub
                    <ExternalLink size={12} />
                  </a>
                </Button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Projects;