import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import fraudImage from '@/assets/fraud-detection.jpg';
import mlopsImage from '@/assets/mlops.jpg';
import nlpImage from '@/assets/nlp.jpg';
import cvImage from '@/assets/computer-vision.jpg';

const projects = [
  {
    title: 'Fraud Detection System',
    description: 'Real-time fraud detection with tree-based models and behavioral features.',
    image: fraudImage,
    tags: ['XGBoost', 'FastAPI', 'Docker'],
    github: 'https://github.com/rsiliveri14',
  },
  {
    title: 'MLOps Pipeline',
    description: 'Automated training, validation, and CI/CD for production ML.',
    image: mlopsImage,
    tags: ['MLflow', 'Kubernetes', 'Azure'],
    github: 'https://github.com/rsiliveri14',
  },
  {
    title: 'NLP Applications',
    description: 'Transformer-based classification and LLM integrations.',
    image: nlpImage,
    tags: ['PyTorch', 'BERT', 'Transformers'],
    github: 'https://github.com/rsiliveri14',
  },
  {
    title: 'Computer Vision',
    description: 'Image-based solutions for damage assessment in insurance.',
    image: cvImage,
    tags: ['OpenCV', 'ResNet', 'SageMaker'],
    github: 'https://github.com/rsiliveri14',
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-16 px-6 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="section-title-small">Browse My</p>
          <h2 className="section-title">Projects</h2>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-foreground mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full flex items-center gap-2 text-xs"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={14} />
                    View Code
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
