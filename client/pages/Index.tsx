import Layout from "@/components/Layout";
import ProjectCard from "@/components/ui/project-card";
import CustomButton from "@/components/ui/custom-button";
import {
  contact,
  experience,
  featuredProjectTitles,
  focusAreas,
  hero,
  operatingPrinciples,
  projects,
  proofPoints,
} from "@/data/portfolio";

function Index() {
  const featuredProjects = projects.filter((project) =>
    featuredProjectTitles.includes(project.title),
  );

  return (
    <Layout>
      <section className="px-4 pb-16 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-portfolio-muted">
                {hero.eyebrow}
              </p>
              <h1 className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-[1.05] text-portfolio-dark-text sm:text-5xl lg:text-6xl">
                {hero.headline}
              </h1>
            </div>

            <div className="lg:pb-2">
              <p className="max-w-2xl text-lg leading-8 text-portfolio-muted sm:text-xl sm:leading-9">
                {hero.subheadline}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <CustomButton href="/projects" size="lg">
                  View selected work
                </CustomButton>
                <CustomButton href="/contact" variant="outline" size="lg">
                  Start a conversation
                </CustomButton>
                <a
                  href={contact.resumePath}
                  download
                  className="inline-flex items-center justify-center rounded-md bg-portfolio-soft-gray px-6 py-3 text-base font-medium text-portfolio-dark-text transition-colors hover:bg-portfolio-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-primary focus-visible:ring-offset-2"
                >
                  Download resume
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 grid border-y border-portfolio-border md:grid-cols-3">
            {proofPoints.map((point) => (
              <article
                key={point.label}
                className="border-b border-portfolio-border py-7 last:border-b-0 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <p className="font-heading text-3xl font-semibold text-portfolio-dark-text">
                  {point.value}
                </p>
                <h2 className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-portfolio-primary">
                  {point.label}
                </h2>
                <p className="mt-3 text-sm leading-6 text-portfolio-muted">
                  {point.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="selected-work-heading">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-portfolio-muted">
                Proof of work
              </p>
              <h2 id="selected-work-heading" className="mt-3 font-heading text-3xl font-semibold text-portfolio-dark-text">
                Selected systems, not decorative projects
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-portfolio-muted">
                Work that shows how I reduce manual effort, make messy data safer to handle,
                and turn accessibility checks into maintainable workflows.
              </p>
            </div>
            <CustomButton href="/projects" variant="outline">
              View all work
            </CustomButton>
          </div>

          <div className="mt-8 space-y-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-portfolio-surface px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="work-heading">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-portfolio-muted">
              Operating style
            </p>
            <h2 id="work-heading" className="mt-3 font-heading text-3xl font-semibold text-portfolio-dark-text">
              How I work
            </h2>
            <p className="mt-4 leading-7 text-portfolio-muted">
              I look for repeated steps, missing checks, and handoffs that break under pressure.
              Then I build the smallest system that makes the work easier to repeat.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {focusAreas.map((area) => (
              <article key={area.title} className="border-t border-portfolio-border pt-5">
                <h3 className="font-heading text-xl font-semibold text-portfolio-dark-text">
                  {area.title}
                </h3>
                <p className="mt-3 leading-7 text-portfolio-muted">{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="principles-heading">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-portfolio-muted">
              Quality bar
            </p>
            <h2 id="principles-heading" className="mt-3 font-heading text-3xl font-semibold text-portfolio-dark-text">
              The standard I build against
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {operatingPrinciples.map((principle) => (
              <article
                key={principle.title}
                className="rounded-lg border border-portfolio-border bg-portfolio-surface p-6"
              >
                <h3 className="font-heading text-xl font-semibold text-portfolio-dark-text">
                  {principle.title}
                </h3>
                <p className="mt-3 leading-7 text-portfolio-muted">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="recent-heading">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-portfolio-muted">
                Experience
              </p>
              <h2 id="recent-heading" className="mt-3 font-heading text-3xl font-semibold text-portfolio-dark-text">
                Recent experience
              </h2>
              <p className="mt-4 leading-7 text-portfolio-muted">
                Roles where I worked on automation, CMS migration, data quality, and accessibility.
              </p>
            </div>

            <div className="space-y-6">
              {experience.slice(0, 3).map((item) => (
                <article key={`${item.role}-${item.dates}`} className="border-t border-portfolio-border pt-5">
                  <h3 className="font-heading text-xl font-semibold text-portfolio-dark-text">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-portfolio-muted">
                    {item.organization} / {item.dates}
                  </p>
                  <p className="mt-3 leading-7 text-portfolio-muted">{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-portfolio-primary px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-heading text-2xl font-semibold">
              Have a workflow, website, or data problem worth cleaning up?
            </h2>
            <p className="mt-3 max-w-3xl text-white/85">
              I am open to roles, collaborations, and projects involving automation,
              data quality, accessible web systems, CMS migrations, and practical
              AI/cloud tooling.
            </p>
          </div>
          <CustomButton href="/contact" variant="secondary" size="lg">
            Contact me
          </CustomButton>
        </div>
      </section>
    </Layout>
  );
}

export default Index;