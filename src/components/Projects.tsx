import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import fraudImage from '@/assets/fraud-detection.jpg';
import mlopsImage from '@/assets/mlops.jpg';
import nlpImage from '@/assets/nlp.jpg';
import cvImage from '@/assets/computer-vision.jpg';

const projects = [
  {
    title: 'Fraud Detection System',
    description: 'Tree-based models and behavioral features focused on performance, scalability, and interpretability for real-time fraud detection.',
    image: fraudImage,
    tags: ['Python', 'XGBoost', 'FastAPI', 'Docker'],
    github: 'https://github.com/rsiliveri14',
  },
  {
    title: 'MLOps Pipeline Framework',
    description: 'Automated training, validation, CI/CD pipelines, and monitoring best practices for production ML systems.',
    image: mlopsImage,
    tags: ['MLflow', 'Kubernetes', 'Azure', 'Python'],
    github: 'https://github.com/rsiliveri14',
  },
  {
    title: 'NLP & LLM Applications',
    description: 'Transformer-based classification, summarization, and LLM API integrations for enterprise use cases.',
    image: nlpImage,
    tags: ['PyTorch', 'Transformers', 'BERT', 'FastAPI'],
    github: 'https://github.com/rsiliveri14',
  },
  {
    title: 'Computer Vision Pipeline',
    description: 'Image-based ML solutions for damage assessment and classification in insurance claims processing.',
    image: cvImage,
    tags: ['OpenCV', 'ResNet', 'AWS SageMaker', 'Python'],
    github: 'https://github.com/rsiliveri14',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="section-title-small">Browse My Recent</p>
          <h2 className="section-title">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of applied machine learning and MLOps projects demonstrating end-to-end 
            workflows, from data preprocessing to deployment and monitoring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full flex items-center gap-2"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
