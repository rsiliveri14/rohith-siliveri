export interface Project {
  title: string;
  repo: string;
  url: string;
  language: string;
  category: string;
  summary: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: 'Autonomous ML Debugging Agent',
    repo: 'autonomous-ml-debugging-agent',
    url: 'https://github.com/rsiliveri14/autonomous-ml-debugging-agent',
    language: 'Python',
    category: 'Agentic ML',
    summary:
      'Sandboxed coding agent that diagnoses, patches, tests, and explains failures in ML repositories — with typed tools, a bounded loop, and a measured evaluation harness.',
    tags: ['Python', 'FastAPI', 'Docker', 'Agents', 'pytest'],
  },
  {
    title: 'Self-Evaluating RAG',
    repo: 'self-evaluating-rag-agent',
    url: 'https://github.com/rsiliveri14/self-evaluating-rag-agent',
    language: 'Python',
    category: 'RAG',
    summary:
      'RAG that scores its own draft, critiques failure classes, regenerates under constraints, and tracks faithfulness, citations, and abstention over time.',
    tags: ['Python', 'RAG', 'Evaluation', 'FastAPI', 'NLP'],
  },
  {
    title: 'Agent Observability Platform',
    repo: 'production-agent-observability-platform',
    url: 'https://github.com/rsiliveri14/production-agent-observability-platform',
    language: 'Python',
    category: 'Observability',
    summary:
      'Production-style tracing for LLM agents: trajectories, cost, latency, quality signals, loop detection, and a waterfall UI with Prometheus and OpenTelemetry.',
    tags: ['Python', 'OpenTelemetry', 'FastAPI', 'Grafana', 'Observability'],
  },
  {
    title: 'Agent Evaluation Framework',
    repo: 'agentgauge',
    url: 'https://github.com/rsiliveri14/agentgauge',
    language: 'Python',
    category: 'Evaluation',
    summary:
      'Reusable benchmark and regression-testing framework for AI agents — tool use, trajectories, quality gates, latency, and cost, built to fail CI on regressions.',
    tags: ['Python', 'Benchmarks', 'CI', 'Agents', 'Evaluation'],
  },
  {
    title: 'Citation-Grounded Financial Research',
    repo: 'citation-grounded-financial-research-agent',
    url: 'https://github.com/rsiliveri14/citation-grounded-financial-research-agent',
    language: 'Python',
    category: 'Research',
    summary:
      'Evidence-first financial research agent: every claim maps to a source span, unsupported claims are dropped, and the system abstains when evidence is insufficient.',
    tags: ['Python', 'RAG', 'Citations', 'FastAPI', 'Finance'],
  },
  {
    title: 'Social Media Data Analysis',
    repo: 'SocialMedia-Data-analysis',
    url: 'https://github.com/rsiliveri14/SocialMedia-Data-analysis',
    language: 'Python',
    category: 'Data',
    summary:
      'Interactive Flask platform for Reddit and 4chan data — sentiment and toxicity analysis, keyword trends, and event-based reactions with TimescaleDB-backed visualizations.',
    tags: ['Python', 'Flask', 'NLP', 'Pandas', 'TimescaleDB'],
  },
];
