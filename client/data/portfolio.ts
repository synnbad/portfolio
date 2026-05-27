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
  headline: "I build reliable systems for automation, data quality, and accessible web work.",
  subheadline: "I turn repetitive workflows into tools teams can run, review, and hand off.",
};

export const projects: ProjectCaseStudy[] = [
  {
    title: "Repository Batch Ingest",
    category: "Python automation",
    summary:
      "A desktop tool to validate, package, and track digital collection ingest work.",
    problem:
      "Metadata checks, packaging, and duplicate review were too manual to scale.",
    built:
      "Built a Python/Tkinter workflow with validation, logs, duplicate checks, packaging, and release automation.",
    result: "Made ingest work easier to repeat, review, and hand off.",
    tools: ["Python", "Tkinter", "Metadata XML", "GitHub Actions", "PowerShell", "Shell"],
    status: "completed",
    github: "https://github.com/synnbad/cetamura_python_script",
  },
  {
    title: "Omeka Card Archive Migration",
    category: "Repository migration",
    summary:
      "An API-driven workflow to migrate archive records from Omeka Classic to Omeka S.",
    problem:
      "Manual record handling made metadata validation and duplicate checks inconsistent.",
    built:
      "Built Python/Tkinter tools using the Omeka API, validation checks, duplicate checks, and batch jobs.",
    result:
      "Turned migration into a consistent batch workflow with validation and duplicate review.",
    tools: ["Python", "Tkinter", "Omeka API", "Metadata validation", "Batch jobs"],
    status: "case-study",
  },
  {
    title: "O-Zone Air Quality Platform",
    category: "Web and cloud prototype",
    summary:
      "A prototype that connects live air-quality data with user guidance.",
    problem:
      "Air-quality data is easy to display but hard to turn into clear user decisions.",
    built:
      "Built a React/FastAPI prototype with pollutant calculations, map views, APIs, and AI-assisted recommendations.",
    result:
      "Documented a cloud prototype that turns air-quality data into practical guidance.",
    tools: ["Python", "FastAPI", "React", "TypeScript", "AWS Amplify", "AWS Lambda", "AWS Bedrock"],
    status: "prototype",
    github: "https://github.com/synnbad/O-Zone",
    demo: "https://main.d32w9y2132m03m.amplifyapp.com",
  },
  {
    title: "Assessment Data Workbench",
    category: "Data review",
    summary:
      "A local-first tool for reviewing, cleaning, and interpreting assessment data.",
    problem:
      "Survey results, exports, comments, and reports were hard to review consistently.",
    built:
      "Built a Streamlit workbench for imports, duplicate checks, metadata review, local retrieval, and draft reporting.",
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
      "Accessibility reports often describe failures without clear CMS-specific fixes.",
    built:
      "Built URL scanning, page evidence reports, and remediation guidance for WordPress, Drupal, and Umbraco.",
    result:
      "Documented pilot scope, scanner behavior, and CMS-specific remediation guidance.",
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
      "Moved research-site content from Umbraco to Drupal with WCAG 2.2 review and repeatable audits.",
    highlights: [
      "Restructured content during migration.",
      "Ran accessibility scans and fixed issues within contributor access.",
      "Tracked ADA Title II and WCAG 2.2 issues for follow-up.",
    ],
  },
  {
    role: "Graduate Assistant, Systems and Automation",
    organization: "Florida State University, Strozier Library",
    dates: "Aug 2024 - May 2026",
    summary:
      "Built Python/Tkinter and API workflows for digital collections, metadata checks, duplicate detection, CI/CD, and handoff.",
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
      "Managed REDCap data and validation protocols for sensitive health records.",
    highlights: [
      "Maintained validation checks for 1,000 sensitive health records.",
      "Supported data ethics, validation protocols, and trustworthy project data.",
    ],
  },
  {
    role: "IT Assistant",
    organization: "School of Public Health",
    dates: "Nov 2022 - Oct 2023",
    summary:
      "Provided technical support, taught web development tutorials, and built a React prototype for exam results.",
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
    "Portfolio of Sinbad Adjuik, focused on Python automation, data-quality workflows, CMS migration, accessibility review, and maintainable web systems.",
  socialDescription: "I turn messy workflows into reliable systems people can use.",
};
