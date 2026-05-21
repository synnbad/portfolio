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
        "rounded-lg border border-portfolio-border bg-portfolio-surface p-6 shadow-[0_1px_0_rgba(30,30,27,0.04)] sm:p-7",
        className,
      )}
    >
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-muted">
              {project.category}
            </p>
            <span className="rounded-full border border-portfolio-border bg-portfolio-background px-3 py-1 text-xs font-medium text-portfolio-primary">
              {statusLabels[project.status]}
            </span>
          </div>
          <h3 className="mt-4 font-heading text-2xl font-semibold leading-snug text-portfolio-dark-text">
            {project.title}
          </h3>
          <p className="mt-4 leading-7 text-portfolio-muted">{project.summary}</p>

          {(project.github || project.demo) && (
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
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
          <div className="rounded-md border border-portfolio-border bg-portfolio-background p-4 md:col-span-2">
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-primary">
              Result
            </dt>
            <dd className="mt-2 font-medium leading-7 text-portfolio-dark-text">
              {project.result}
            </dd>
          </div>
          <div className="border-t border-portfolio-border pt-4">
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-muted">
              Problem
            </dt>
            <dd className="mt-2 leading-7 text-portfolio-dark-text">{project.problem}</dd>
          </div>
          <div className="border-t border-portfolio-border pt-4">
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-muted">
              What I built
            </dt>
            <dd className="mt-2 leading-7 text-portfolio-dark-text">{project.built}</dd>
          </div>
          <div className="border-t border-portfolio-border pt-4 md:col-span-2">
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-muted">
              Tools
            </dt>
            <dd className="mt-3">
              <ul className="flex flex-wrap gap-2 text-sm text-portfolio-muted">
                {project.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full bg-portfolio-background px-3 py-1 text-xs font-medium text-portfolio-muted"
                  >
                    {tool}
                  </li>
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
