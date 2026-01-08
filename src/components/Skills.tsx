import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const skillCategories = [
  {
    title: 'ML & AI',
    skills: ['Applied ML', 'NLP', 'Computer Vision', 'Time-series'],
  },
  {
    title: 'Languages',
    skills: ['Python', 'SQL', 'PyTorch', 'scikit-learn'],
  },
  {
    title: 'MLOps',
    skills: ['CI/CD', 'Docker', 'Kubernetes', 'FastAPI'],
  },
  {
    title: 'Cloud',
    skills: ['Azure ML', 'AWS SageMaker', 'Spark', 'Kafka'],
  },
  {
    title: 'Domain',
    skills: ['Fraud Detection', 'Risk Modeling', 'Model Governance'],
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="section-title-small">Explore My</p>
          <h2 className="section-title">Skills</h2>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="bg-card border border-border rounded-xl p-4"
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              <h3 className="font-semibold text-foreground text-sm mb-3 text-center">{category.title}</h3>
              <div className="flex flex-wrap gap-1.5 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 bg-secondary text-muted-foreground text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
