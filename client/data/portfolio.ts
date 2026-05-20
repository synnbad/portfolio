export type ProjectStatus = "completed" | "prototype" | "in-progress" | "case-study";

export interface ProjectCaseStudy {
  title: string;
  category: string;
  summary: string;
  problem: string;
  built: string;
  result: string;
  tools: string[];
  status: ProjectStatus;
  github?: string;
  demo?: string;
}

export const contact = {
  email: "adjuiksinbad@gmail.com",
  location: "Tallahassee, FL",
  linkedin: "https://www.linkedin.com/in/sinbad-adjuik-3a3086171/",
  github: "https://github.com/synnbad",
  resumePath: "/Sinbad_Adjuik_Resume.pdf",
};

export const hero = {
  eyebrow: "Python automation, data checks, and accessible web systems.",
  headline: "I turn messy operational workflows into reliable systems people can actually use.",
  subheadline:
    "I build practical tools for repository automation, CMS migrations, accessibility review, and data-quality checks across higher-ed and research environments.",
};

export const proofPoints = [
  {
    value: "10,000+",
    label: "digital assets supported",
    detail: "Batch ingest, validation, packaging, and release workflows for digital collections.",
  },
  {
    value: "6,000+",
    label: "records migrated",
    detail: "API-driven Omeka migration work with metadata checks and duplicate review.",
  },
  {
    value: "70%",
    label: "manual work reduced",
    detail: "Automation around repeatable repository and CMS handoffs.",
  },
];

export const operatingPrinciples = [
  {
    title: "Evidence before polish",
    description:
      "I care about clean interfaces, but the system has to prove the work first: inputs, checks, logs, outputs, and handoff notes.",
  },
  {
    title: "Small tools, real leverage",
    description:
      "The best solution is usually the smallest workflow that removes repeated manual effort without creating new maintenance debt.",
  },
  {
    title: "Accessibility as infrastructure",
    description:
      "Accessible web work is not decoration. It is part of quality control, contributor training, and long-term maintainability.",
  },
];

export const focusAreas = [
  {
    title: "Automation",
    description:
      "Python tools, batch jobs, API checks, logging, and packaging for repeatable work.",
  },
  {
    title: "Data quality",
    description:
      "Validation rules, duplicate checks, metadata review, and clear handoff notes.",
  },
  {
    title: "Accessible web systems",
    description:
      "WCAG review, CMS cleanup, clearer navigation, link text, and contributor-friendly fixes.",
  },
  {
    title: "Practical AI and cloud",
    description:
      "AI, APIs, and cloud tools used only when they make the workflow easier to understand or maintain.",
  },
];

export const projects: ProjectCaseStudy[] = [
  {
    title: "Repository Batch Ingest",
    category: "Python automation",
    summary:
      "A desktop tool for validating, packaging, and tracking digital collection ingest work.",
    problem:
      "Metadata checks, file preparation, packaging, and duplicate review were too manual to scale cleanly.",
    built:
      "Built a Python/Tkinter workflow with validation, logging, duplicate checks, packaging steps, and release automation.",
    result: "Supported a repeatable process for 10,000+ digital assets.",
    tools: ["Python", "Tkinter", "Metadata XML", "GitHub Actions", "PowerShell", "Shell"],
    status: "completed",
    github: "https://github.com/synnbad/cetamura_python_script",
  },
  {
    title: "Omeka Card Archive Migration",
    category: "Repository migration",
    summary:
      "An API-driven migration workflow for moving archive records from Omeka Classic to Omeka S.",
    problem:
      "Manual record handling made it harder to validate metadata, catch duplicates, and keep migration work consistent.",
    built:
      "Built Python/Tkinter tools using the Omeka API, metadata validation, duplicate checks, and structured batch jobs.",
    result: "Migrated 6,000+ records with about 70% less manual work.",
    tools: ["Python", "Tkinter", "Omeka API", "Metadata validation", "Batch jobs"],
    status: "case-study",
  },
  {
    title: "O-Zone Air Quality Platform",
    category: "Web and cloud prototype",
    summary:
      "A prototype that connects live air-quality data with practical user guidance.",
    problem:
      "Air-quality data is easy to display, but harder to translate into a clear decision for a user.",
    built:
      "A React/FastAPI prototype with pollutant calculations, map views, API endpoints, and AI-assisted recommendations.",
    result:
      "The project documents a working cloud prototype with six pollutant calculations and public demo links.",
    tools: ["Python", "FastAPI", "React", "TypeScript", "AWS Amplify", "AWS Lambda", "AWS Bedrock"],
    status: "prototype",
    github: "https://github.com/synnbad/O-Zone",
    demo: "https://main.d32w9y2132m03m.amplifyapp.com",
  },
  {
    title: "Assessment Data Workbench",
    category: "Data review",
    summary:
      "A local-first tool for reviewing, cleaning, and questioning assessment data.",
    problem:
      "Survey results, usage exports, comments, and reports can be hard to review consistently.",
    built:
      "Built a Streamlit workbench for imports, duplicate checks, metadata review, local retrieval, and report drafting.",
    result:
      "Created a privacy-conscious workflow for validating evidence before reporting.",
    tools: ["Python", "Streamlit", "SQLite", "ChromaDB", "Ollama", "Pandas", "NLP"],
    status: "completed",
    github: "https://github.com/synnbad/Library-Assessment-Decision-Support-System",
  },
  {
    title: "FixBot Accessibility Scanner",
    category: "Accessibility prototype",
    summary:
      "A scoped prototype for turning accessibility findings into CMS-aware fixes.",
    problem:
      "Accessibility reports often explain what failed without making the fix clear in the CMS context.",
    built:
      "URL scanning, page evidence, reports, and remediation guidance for WordPress, Drupal, and Umbraco contexts.",
    result:
      "The repo is clearly labeled as a pilot/planning project, with scanner and guidance scope documented.",
    tools: ["TypeScript", "Puppeteer", "AWS Bedrock", "React", "WCAG", "CMS workflows"],
    status: "prototype",
    github: "https://github.com/synnbad/fixbot-accessibility-scanner-AI-Maker",
  },
];

export const featuredProjectTitles = [
  "Repository Batch Ingest",
  "Omeka Card Archive Migration",
  "Assessment Data Workbench",
];

export const experience = [
  {
    role: "CMS Migration Specialist Intern",
    organization: "National High Magnetic Field Laboratory",
    dates: "Jan 2026 - Apr 2026",
    summary:
      "Helped move research-site content from Umbraco into Drupal, with WCAG 2.2 review and repeatable audit reporting.",
    highlights: [
      "Restructured content during CMS migration work.",
      "Ran accessibility scans and fixed issues within contributor access.",
      "Tracked ADA Title II and WCAG 2.2 items for follow-up.",
    ],
  },
  {
    role: "Graduate Assistant, Systems and Automation",
    organization: "Florida State University, Strozier Library",
    dates: "Aug 2024 - May 2026",
    summary:
      "Built Python/Tkinter and API workflows for digital collections, metadata checks, duplicate detection, CI/CD, runbooks, and staff handoff.",
    highlights: [
      "Automated ingest and metadata processing for 10,000+ assets.",
      "Migrated and batch-ingested 6,000+ records with about 70% less manual work.",
      "Implemented GitHub Actions for tests, packaging, and releases.",
    ],
  },
  {
    role: "Assistant Data Manager",
    organization: "School of Public Health research project",
    dates: "Oct 2023 - Aug 2024",
    summary:
      "Managed REDCap research data and validation protocols for sensitive health records.",
    highlights: [
      "Maintained the integrity of 1,000 sensitive health records.",
      "Supported data ethics, validation protocols, and trustworthy project data.",
    ],
  },
  {
    role: "IT Assistant",
    organization: "School of Public Health",
    dates: "Nov 2022 - Oct 2023",
    summary:
      "Provided technical support, taught web development tutorials, and created a React prototype for an exam-results workflow.",
    highlights: [
      "Built a React prototype that informed improvements to a live results system.",
      "Led HTML, CSS, JavaScript, and Python tutorials for undergraduate students.",
    ],
  },
];

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2025",
    relevance: "Cloud fundamentals, security, pricing, and AWS service literacy.",
  },
  {
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    year: "2025",
    relevance: "AI concepts, responsible AI foundations, and AWS AI service awareness.",
  },
  {
    title: "Google IT Automation with Python",
    issuer: "Google/Coursera",
    year: "2025",
    relevance: "Python automation, troubleshooting, Git, and repeatable IT workflows.",
  },
];

export const skillGroups = [
  {
    title: "Automation",
    skills: ["Python", "Tkinter", "APIs", "Bash", "PowerShell", "GitHub Actions"],
  },
  {
    title: "Data",
    skills: ["SQL", "NoSQL", "REDCap", "Pandas", "NumPy", "Tableau", "Power BI"],
  },
  {
    title: "Web and CMS",
    skills: ["React", "TypeScript", "Drupal", "WordPress", "Omeka", "Umbraco", "WCAG 2.2"],
  },
  {
    title: "Cloud and AI",
    skills: ["AWS", "Google Cloud Platform", "Azure", "Docker", "Linux", "Scikit-learn", "SpaCy"],
  },
];

export const seo = {
  title: "Sinbad Adjuik | Automation, Data Quality & Accessible Web Systems",
  description:
    "Portfolio of Sinbad Adjuik, focused on Python automation, data-quality workflows, CMS migration, accessibility review, and practical web systems for higher-ed and research environments.",
  socialDescription:
    "I turn messy data and web workflows into reliable systems people can actually use.",
};