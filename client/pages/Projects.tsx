import { useMemo, useState } from "react";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ui/project-card";
import CustomButton from "@/components/ui/custom-button";
import { projects, proofPoints } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const Projects = () => {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((project) => project.category)))],
    [],
  );
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

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

          <div className="mt-10" aria-label="Project filters">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-primary focus-visible:ring-offset-2",
                    activeCategory === category
                      ? "border-portfolio-primary bg-portfolio-primary text-white"
                      : "border-portfolio-border bg-transparent text-portfolio-muted hover:border-portfolio-primary hover:text-portfolio-primary",
                  )}
                >
                  {category}
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
              Want the practical version?
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