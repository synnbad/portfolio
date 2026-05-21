import { useMemo, useState } from "react";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ui/project-card";
import CustomButton from "@/components/ui/custom-button";
import { projects, proofPoints, type ProjectCaseStudy } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const projectFilters: Array<{
  id: string;
  label: string;
  matches: (project: ProjectCaseStudy) => boolean;
}> = [
  {
    id: "all",
    label: "All",
    matches: () => true,
  },
  {
    id: "automation",
    label: "Automation",
    matches: (project) =>
      project.category === "Python automation" || project.category === "Repository migration",
  },
  {
    id: "data-quality",
    label: "Data quality",
    matches: (project) =>
      project.category === "Data review" || project.category === "Repository migration",
  },
  {
    id: "web-cms",
    label: "Web and CMS",
    matches: (project) =>
      project.category === "Accessibility prototype" ||
      project.category === "Repository migration" ||
      project.category === "Web and cloud prototype",
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleProjects = useMemo(() => {
    const filter = projectFilters.find((item) => item.id === activeFilter);
    return filter ? projects.filter(filter.matches) : projects;
  }, [activeFilter]);

  return (
    <Layout>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-portfolio-muted">
                Project evidence
              </p>
              <h1 className="mt-3 font-heading text-4xl font-semibold leading-tight text-portfolio-dark-text sm:text-5xl">
                Selected work
              </h1>
            </div>
            <div>
              <p className="text-lg leading-8 text-portfolio-muted">
                These are systems-focused projects: automation, data checks,
                accessible web work, CMS workflows, and practical cloud prototypes.
              </p>
            </div>
          </div>

          <div className="mt-10 grid border-y border-portfolio-border md:grid-cols-3">
            {proofPoints.map((point) => (
              <article
                key={point.label}
                className="border-b border-portfolio-border py-6 last:border-b-0 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <p className="font-heading text-2xl font-semibold text-portfolio-dark-text">
                  {point.value}
                </p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-portfolio-primary">
                  {point.label}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10" role="group" aria-label="Project filters">
            <div className="flex flex-wrap gap-3">
              {projectFilters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  aria-pressed={activeFilter === filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-primary focus-visible:ring-offset-2",
                    activeFilter === filter.id
                      ? "border-portfolio-primary bg-portfolio-primary text-white"
                      : "border-portfolio-border bg-transparent text-portfolio-muted hover:border-portfolio-primary hover:text-portfolio-primary",
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8" aria-labelledby="selected-work-list-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="selected-work-list-heading" className="sr-only">
            Selected work
          </h2>
          <div className="space-y-6">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-portfolio-surface px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-portfolio-dark-text">
              Want implementation details?
            </h2>
            <p className="mt-2 max-w-2xl text-portfolio-muted">
              I can talk through the decisions behind these projects: what was automated,
              what stayed manual, and how I kept the workflow maintainable.
            </p>
          </div>
          <CustomButton href="/contact" variant="outline">
            Contact me
          </CustomButton>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
