import React from "react";
import type { ProjectCaseStudy } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: ProjectCaseStudy;
  className?: string;
}

const statusLabels: Record<ProjectCaseStudy["status"], string> = {
  completed: "Completed",
  prototype: "Prototype",
  "in-progress": "In progress",
  "case-study": "Case study",
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  return (
    <article
      className={cn(
        "border-t border-portfolio-border bg-transparent py-8",
        className,
      )}
    >
      <div className="grid gap-7 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-muted">
            {project.category} / {statusLabels[project.status]}
          </p>
          <h3 className="mt-3 font-heading text-2xl font-semibold leading-snug text-portfolio-dark-text">
            {project.title}
          </h3>
          <p className="mt-4 leading-7 text-portfolio-muted">{project.summary}</p>

          {(project.github || project.demo) && (
            <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                  className="rounded-sm text-portfolio-primary hover:text-[#314B5B]"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} demo`}
                  className="rounded-sm text-portfolio-primary hover:text-[#314B5B]"
                >
                  Demo
                </a>
              )}
            </div>
          )}
        </div>

        <dl className="grid gap-5 md:grid-cols-2">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-muted">
              Problem
            </dt>
            <dd className="mt-2 leading-7 text-portfolio-dark-text">{project.problem}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-muted">
              What I built
            </dt>
            <dd className="mt-2 leading-7 text-portfolio-dark-text">{project.built}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-muted">
              Result
            </dt>
            <dd className="mt-2 leading-7 text-portfolio-dark-text">{project.result}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-muted">
              What it proves
            </dt>
            <dd className="mt-2 leading-7 text-portfolio-dark-text">{project.proves}</dd>
          </div>
          <div className="md:col-span-2">
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-muted">
              Tools
            </dt>
            <dd className="mt-2">
              <ul className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-portfolio-muted">
                {project.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
};

export default ProjectCard;
