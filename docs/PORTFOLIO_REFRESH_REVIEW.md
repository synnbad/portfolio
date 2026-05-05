# Portfolio Refresh Review Notes

Use this file to review the current wording. The site has not been committed, pushed, or deployed.

## Direction

Theme:

```text
Quiet Systems Portfolio
```

Positioning:

```text
Python automation, data checks, and accessible web systems.
```

## Current Changes

- Simplified page headings and removed clever labels.
- Updated the hero, proof section, project cards, About, Contact, Certifications, footer, and SEO copy.
- Kept the design quiet: warm neutral background, charcoal text, muted slate accent, soft borders, and clear spacing.
- Kept project labels direct: Problem, What I built, Result, What it proves, and Tools.
- Regenerated the sitemap during the production build.

## Home

Hero label:

```text
Python automation, data checks, and accessible web systems.
```

Hero headline:

```text
I build tools that make messy workflows easier to run and maintain.
```

Hero subheadline:

```text
My work focuses on repository automation, CMS migrations, accessibility review, and data-quality checks.
```

CTA labels:

```text
View selected work
Contact me
Resume
```

## Proof

Section heading:

```text
Proof
```

Intro:

```text
Selected outcomes from recent work.
```

| Area | Outcome | Source |
| --- | --- | --- |
| Repository automation | Helped process 10,000+ digital assets through a repeatable workflow | Resume + GitHub |
| Data migration | Migrated 6,000+ records with about 70% less manual effort | Resume |
| Research data | Managed 1,000 REDCap records with validation protocols | Resume |
| Accessibility and CMS | Supported Drupal migration work with WCAG 2.2 review and audit reporting | Resume |

## Selected Work

Heading:

```text
Selected work
```

Intro:

```text
Projects that show how I approach automation, data quality, and web systems.
```

Project labels:

```text
Problem
What I built
Result
What it proves
Tools
```

## Project Wording

### Repository Batch Ingest

```text
Summary: A desktop tool for validating, packaging, and tracking digital collection ingest work.
Problem: Metadata checks, file preparation, packaging, and duplicate review were too manual to scale cleanly.
What I built: Built a Python/Tkinter workflow with validation, logging, duplicate checks, packaging steps, and release automation.
Result: Supported a repeatable process for 10,000+ digital assets.
What it proves: I can turn manual collection workflows into tools other people can run.
```

### Omeka Card Archive Migration

```text
Summary: An API-driven migration workflow for moving archive records from Omeka Classic to Omeka S.
Problem: Manual record handling made it harder to validate metadata, catch duplicates, and keep migration work consistent.
What I built: Built Python/Tkinter tools using the Omeka API, metadata validation, duplicate checks, and structured batch jobs.
Result: Migrated 6,000+ records with about 70% less manual work.
What it proves: I can protect data quality during CMS and repository migrations.
```

### O-Zone Air Quality Platform

```text
Summary: A prototype that connects live air-quality data with practical user guidance.
Problem: Air-quality data is easy to display, but harder to translate into a clear decision for a user.
What I built: A React/FastAPI prototype with pollutant calculations, map views, API endpoints, and AI-assisted recommendations.
Result: The project documents a working cloud prototype with six pollutant calculations and public demo links.
What it proves: I can connect APIs, cloud pieces, and AI support around a practical decision flow.
```

### Assessment Data Workbench

```text
Summary: A local-first tool for reviewing, cleaning, and questioning assessment data.
Problem: Survey results, usage exports, comments, and reports can be hard to review consistently.
What I built: Built a Streamlit workbench for imports, duplicate checks, metadata review, local retrieval, and report drafting.
Result: Created a privacy-conscious workflow for validating evidence before reporting.
What it proves: I can build data tools that keep review, privacy, and evidence in the loop.
```

### FixBot Accessibility Scanner

```text
Summary: A scoped prototype for turning accessibility findings into CMS-aware fixes.
Problem: Accessibility reports often explain what failed without making the fix clear in the CMS context.
What I built: URL scanning, page evidence, reports, and remediation guidance for WordPress, Drupal, and Umbraco contexts.
Result: The repo is clearly labeled as a pilot/planning project, with scanner and guidance scope documented.
What it proves: I can plan accessibility tooling without overstating prototype impact.
```

### Portfolio Refresh

```text
Summary: A cleanup pass that turned a broad portfolio into a clearer systems portfolio.
Problem: The old site spread attention across too many skills and did not make the strongest evidence easy to scan.
What I built: Centralized content, revised project summaries, improved navigation/accessibility details, replaced the resume, and updated SEO metadata.
Result: The site now points reviewers toward the strongest evidence instead of every skill and side project.
What it proves: I can edit systems and content together while keeping claims tied to evidence.
```

## How I Work

```text
I look for repeated steps, missing checks, and handoffs that break under pressure. Then I build the smallest system that makes the work easier to repeat.
```

## Focus Areas

Automation:

```text
Python tools, batch jobs, API checks, logging, and packaging for repeatable work.
```

Data quality:

```text
Validation rules, duplicate checks, metadata review, and clear handoff notes.
```

Accessible web systems:

```text
WCAG review, CMS cleanup, clearer navigation, link text, and contributor-friendly fixes.
```

Practical AI and cloud:

```text
AI, APIs, and cloud tools used only when they make the workflow easier to understand or maintain.
```

## Contact

Heading:

```text
Have a workflow, website, or data problem worth cleaning up?
```

Intro:

```text
I am open to roles, collaborations, and projects involving automation, data quality, accessible web systems, CMS migrations, and practical AI/cloud tooling.
```

## Certifications

Heading:

```text
Certifications
```

Intro:

```text
Credentials that support the work, especially cloud, AI, and automation fundamentals.
```

## SEO

Title:

```text
Sinbad Adjuik | Python Automation, Data Checks & Accessible Web Systems
```

Description:

```text
Portfolio of Sinbad Adjuik, focused on Python automation, data-quality workflows, CMS migration, accessibility review, and practical web systems.
```

Social description:

```text
I build tools that make messy data and web workflows easier to run and maintain.
```

## QA Snapshot

```text
npm run typecheck: passed
npm test: passed, 1 test file and 5 tests
npm run build: passed, sitemap regenerated
```

Build notes:

```text
The build still reports existing advisory warnings for stale browser data, gray-matter eval usage, and a large client chunk.
```
