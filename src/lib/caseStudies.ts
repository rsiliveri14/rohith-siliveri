export interface CaseStudySection {
  heading: string;
  body: string[];
}

export interface CaseStudy {
  slug: string;
  company: string;
  role: string;
  period: string;
  location: string;
  title: string;
  summary: string;
  result: string;
  tags: string[];
  problem: string[];
  sections: CaseStudySection[];
  takeaways: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'handshake',
    company: 'Handshake AI',
    role: 'AI Fellow / Reviewer / Specialist',
    period: 'Jan 2026 – Aug 2026',
    location: 'Remote',
    title: 'Building & Evaluating Coding-Agent Benchmarks',
    summary:
      'I authored evaluation tasks, built reproducible Docker environments, designed verification logic, scored coding-agent runs, and reviewed benchmark quality across SWE-bench-style, Terminal-Bench, visual, and preference work.',
    result:
      'Rerunnable SWE-bench and Harbor tasks with independent tests — so another person can score the same agent the same way.',
    tags: [
      'SWE-bench',
      'Terminal-Bench',
      'Harbor',
      'Agentic AI',
      'LLM Evaluation',
      'Docker',
      'Python',
      'pytest',
    ],
    problem: [
      'At Handshake AI, I contributed to frontier-model data and evaluation projects focused on measuring how well AI agents perform real software-engineering tasks.',
      'I worked across the benchmark lifecycle — authoring evaluation tasks, building reproducible environments, designing verification logic, evaluating coding-agent runs, and reviewing benchmark quality. The work spanned repository-level coding tasks, terminal environments, visual debugging, and model preference evaluation.',
    ],
    sections: [
      {
        heading: 'Benchmark Engineering',
        body: [
          'A major part of my work involved building SWE-bench-style and Terminal-Bench-style tasks from real software-engineering problems in open-source repositories.',
          'I evaluated whether candidate tasks represented meaningful engineering work, reconstructed appropriate repository states, developed independent reference solutions, and created automated tests to validate the requested behavior while preserving existing functionality.',
          'I also built Docker-based execution environments with reproducible dependencies and tooling, troubleshooting environment, build, and test issues that could otherwise affect evaluation reliability. Harbor packaging kept the solution patch, the hidden test patch, and the fail-to-pass / pass-to-pass config together so another person could rerun the same task.',
        ],
      },
      {
        heading: 'Agent Evaluation',
        body: [
          'I participated in blinded evaluations of coding agents, analyzing both their final implementations and their execution trajectories. Agents included CLI environments such as Claude Code, OpenCode, and Grok CLI.',
          'The evaluation focused on practical engineering behavior: whether the agent understood the requirements, investigated the codebase appropriately, implemented a working solution, validated its changes, and handled the environment effectively. Pass and fail came with line-cited notes, not a vibe score.',
          'I also compared different CLI-based coding-agent environments, gaining hands-on experience with how tooling, context handling, and execution infrastructure can influence agent behavior independently of the underlying model.',
        ],
      },
      {
        heading: 'Beyond Coding Benchmarks',
        body: [
          'The work expanded into visual bug-fixing benchmarks, human preference evaluation, benchmark QA, and frontier-model evaluation.',
          'For visual tasks, I worked with software defects where screenshots provided important evidence. If the issue text alone gave the bug away, the screenshot was not doing any work.',
          'I also contributed to structured preference evaluations and benchmark-quality reviews, assessing whether tasks were clear, reproducible, behaviorally grounded, and capable of producing meaningful evaluation signals. Preference ranking followed a simple rule: check correctness before style, including running the code when the prompt asked for working code.',
        ],
      },
      {
        heading: 'Reviewer & Specialist Responsibilities',
        body: [
          'As I progressed from Fellow to Reviewer and Specialist, my responsibilities expanded from creating my own tasks to reviewing other submissions and validating benchmark quality.',
          'This included identifying weak tests, ambiguous requirements, evaluation gaps, environment problems, and other issues that could make benchmark results unreliable. A Specialist also reviews and submits; a Reviewer also submits. I worked at each of those layers.',
        ],
      },
    ],
    takeaways: [
      'A benchmark is an engineered system, not simply a collection of questions or coding problems.',
      'Reliable evaluation requires the task, environment, tests, and assessment process to work together so that an agent’s result reflects its actual capability rather than weaknesses in the evaluation itself.',
      'This work sat at the intersection of agentic AI, software engineering, benchmark design, model evaluation, automated testing, and reproducible ML infrastructure.',
    ],
  },
  {
    slug: 'snorkel',
    company: 'Snorkel AI',
    role: 'Expert AI Contributor',
    period: 'Mar 2026 – Aug 2026',
    location: 'Remote',
    title: 'Validating & Repairing Agent Evaluation Packages',
    summary:
      'I contributed to agentic coding benchmarks, evaluation-package validation and repair, rubric-based codebase tasks, computer-use workflows, and GPU-based machine-learning benchmarks.',
    result:
      'Repaired Harbor packages and verifiers so a pass reflected the agent, not leakage or a gameable check.',
    tags: [
      'Harbor',
      'Agentic AI',
      'LLM Evaluation',
      'Computer Use',
      'Docker',
      'Python',
      'pytest',
    ],
    problem: [
      'At Snorkel AI, I contributed to benchmark and evaluation projects used to train and evaluate coding agents and related AI systems.',
      'My work spanned agentic coding benchmarks, evaluation-package validation and repair, rubric-based codebase tasks, computer-use workflows, and GPU-based machine-learning benchmarks.',
      'The common focus across these projects was building evaluation environments where the instruction, execution environment, solution, and verification logic remain aligned and produce meaningful signals about model behavior.',
    ],
    sections: [
      {
        heading: 'Package Validation & Repair',
        body: [
          'A significant part of my work involved validating and repairing Harbor-based agent evaluation packages.',
          'I reviewed task instructions, repository states, execution environments, reference solutions, and test suites to determine whether a package was ready for evaluation or required correction.',
          'When issues were identified, I reproduced them in a controlled environment and traced failures across the package — from environment configuration and dependencies to reference solutions and verification logic.',
          'This included resolving container and dependency issues, correcting evaluation logic, strengthening weak verifiers, and addressing inconsistencies that could produce misleading evaluation results. A recurring focus was ensuring that the evaluation measured the intended engineering behavior rather than an accidental shortcut.',
        ],
      },
      {
        heading: 'Instruction & Evaluation Design',
        body: [
          'Another area of work involved improving task instructions that were too prescriptive or exposed implementation details.',
          'I rewrote these into clearer engineering-oriented requests that communicated the problem, expected behavior, and relevant constraints while leaving the agent to investigate and determine the implementation.',
          'The challenge was finding the right balance: an instruction needs enough context to be solvable, but not so much direction that the task becomes a step-by-step recipe.',
        ],
      },
      {
        heading: 'Tasks Authored from Scratch',
        body: [
          'I also authored evaluation tasks rather than only reviewing existing packages.',
          'These included tasks involving runtime behavior analysis, test creation, and code refactoring, each requiring objective verification of the expected outcome.',
          'For test-oriented tasks, I validated that the tests actually exercised the underlying behavior. For refactoring tasks, I focused on preserving observable behavior while evaluating structural changes. This gave me experience designing both the task and the evaluation criteria rather than treating them as separate concerns.',
        ],
      },
      {
        heading: 'Computer-Use & GPU Benchmarks',
        body: [
          'I also contributed to computer-use evaluations involving realistic workflows inside GUI applications. These tasks required defining a clear objective, creating realistic starting states, documenting the intended workflow, and designing programmatic checks around the final artifact.',
          'In parallel, I contributed to GPU-based machine-learning benchmarks involving longer-running ML workflows and resource-constrained execution. This work exposed me to reproducible containerized environments, deterministic execution, held-out evaluation data, and milestone-based assessment.',
        ],
      },
    ],
    takeaways: [
      'Evaluation quality depends on alignment. An instruction can be clear while the verifier is weak. A test can be correct while the environment is broken. A technically valid task can still fail to measure the capability it was designed to evaluate.',
      'Working across these projects strengthened my experience in AI evaluation, benchmark engineering, containerized infrastructure, automated testing, and agentic AI systems.',
      'The particular focus was making evaluation results reproducible, defensible, and representative of real-world engineering behavior.',
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((study) => study.slug === slug);
