import Layout from "@/components/Layout";
import ProjectCard from "@/components/ui/project-card";
import CustomButton from "@/components/ui/custom-button";
import {
  contact,
  experience,
  featuredProjectTitles,
  focusAreas,
  hero,
  projects,
} from "@/data/portfolio";

function Index() {
  const featuredProjects = projects.filter((project) =>
    featuredProjectTitles.includes(project.title),
  );

  return (
    <Layout>
      <section className="px-4 pb-12 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pb-14">
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
                  Contact me
                </CustomButton>
                <a
                  href={contact.resumePath}
                  download
                  className="inline-flex items-center rounded-md px-1 py-3 text-sm font-semibold text-portfolio-primary underline-offset-4 transition-colors hover:text-[#314B5B] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-primary focus-visible:ring-offset-2"
                >
                  Download resume
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="selected-work-heading">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-portfolio-muted">
                Projects
              </p>
              <h2 id="selected-work-heading" className="mt-3 font-heading text-3xl font-semibold text-portfolio-dark-text">
                Selected work
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-portfolio-muted">
                Examples of automation, data quality, accessibility, and
                handoff-ready tooling.
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
              I find repeated steps, missing checks, and brittle handoffs.
              Then I build the smallest system that makes the work repeatable.
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
                Roles focused on automation, CMS migration, data quality, and accessibility.
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
              Want to discuss a project or role?
            </h2>
            <p className="mt-3 max-w-3xl text-white/85">
              Open to roles and projects in automation, data quality,
              accessible web systems, CMS migration, and practical AI/cloud tooling.
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
