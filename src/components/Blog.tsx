import { Calendar, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const blogPosts = [
  {
    title: 'Building Scalable Fraud Detection Systems',
    excerpt: 'Best practices for deploying real-time ML models in financial services.',
    date: 'Dec 2024',
    tags: ['MLOps', 'Fraud Detection'],
    link: '#',
  },
  {
    title: 'MLOps Best Practices for Production',
    excerpt: 'Lessons learned from deploying ML systems at scale.',
    date: 'Nov 2024',
    tags: ['MLOps', 'CI/CD'],
    link: '#',
  },
  {
    title: 'LLMs in Enterprise Applications',
    excerpt: 'Integrating large language models into business workflows.',
    date: 'Oct 2024',
    tags: ['NLP', 'LLM'],
    link: '#',
  },
];

const Blog = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="blog" className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="section-title-small">Insights</p>
          <h2 className="section-title">Blog</h2>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              className="group bg-card border border-border rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <Calendar size={12} />
                <span>{post.date}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-sm font-medium text-foreground flex items-center gap-1 group-hover:gap-2 transition-all">
                Read more <ArrowRight size={14} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
