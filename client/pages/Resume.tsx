import Layout from "@/components/Layout";
import CustomButton from "@/components/ui/custom-button";
import { certifications, contact, experience, skillGroups } from "@/data/portfolio";

function Resume() {
  return (
    <Layout>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-portfolio-muted">
                Resume
              </p>
              <h1 className="mt-3 font-heading text-4xl font-semibold text-portfolio-dark-text sm:text-5xl">
                Sinbad Adjuik
              </h1>
              <p className="mt-5 text-lg leading-8 text-portfolio-muted">
                I build practical tools and checks for data, CMS, accessibility,
                and web workflows with too many manual failure points.
                My work spans repository automation, research data validation,
                CMS migration, accessibility review, and clear handoffs.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-portfolio-muted">
                <a className="text-portfolio-primary hover:text-white" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
                <span>{contact.location}</span>
                <a
                  className="text-portfolio-primary hover:text-white"
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="text-portfolio-primary hover:text-white"
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
            <a
              href={contact.resumePath}
              download
              className="inline-flex items-center justify-center rounded-md bg-portfolio-primary px-6 py-3 text-sm font-medium text-portfolio-background transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-primary focus-visible:ring-offset-2 focus-visible:ring-offset-portfolio-background"
            >
              Download resume
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="experience-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="experience-heading" className="font-heading text-3xl font-semibold text-portfolio-dark-text">
            Experience
          </h2>
          <div className="mt-8">
            {experience.map((item) => (
              <article key={`${item.role}-${item.dates}`} className="border-t border-portfolio-border py-6">
                <div className="grid gap-2 md:grid-cols-[1fr_auto] md:items-start">
                  <div>
                    <h3 className="font-heading text-2xl font-semibold text-portfolio-dark-text">
                      {item.role}
                    </h3>
                    <p className="mt-1 font-medium text-portfolio-primary">{item.organization}</p>
                  </div>
                  <p className="text-sm font-medium text-portfolio-muted">{item.dates}</p>
                </div>
                <p className="mt-4 leading-7 text-portfolio-muted">{item.summary}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-portfolio-muted">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-portfolio-surface px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="education-heading">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <h2 id="education-heading" className="font-heading text-3xl font-semibold text-portfolio-dark-text">
              Education
            </h2>
            <div className="mt-6 space-y-6">
              <article className="border-t border-portfolio-border pt-5">
                <h3 className="font-heading text-xl font-semibold text-portfolio-dark-text">
                  M.S., Information Technology
                </h3>
                <p className="mt-1 text-portfolio-muted">Florida State University</p>
                <p className="mt-1 text-sm text-portfolio-muted">Aug 2024 - May 2026</p>
              </article>
              <article className="border-t border-portfolio-border pt-5">
                <h3 className="font-heading text-xl font-semibold text-portfolio-dark-text">
                  B.S., Computer Science, Information Systems
                </h3>
                <p className="mt-1 text-portfolio-muted">Datalink University</p>
                <p className="mt-1 text-sm text-portfolio-muted">Aug 2018 - Dec 2022</p>
              </article>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-3xl font-semibold text-portfolio-dark-text">
              Certifications
            </h2>
            <div className="mt-6 space-y-6">
              {certifications.map((cert) => (
                <article key={cert.title} className="border-t border-portfolio-border pt-5">
                  <h3 className="font-heading text-xl font-semibold text-portfolio-dark-text">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-portfolio-primary">
                    {cert.issuer} / {cert.year}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-portfolio-muted">{cert.relevance}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="skills-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="skills-heading" className="font-heading text-3xl font-semibold text-portfolio-dark-text">
            Technical skills
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.title} className="border-t border-portfolio-border pt-5">
                <h3 className="font-heading text-lg font-semibold text-portfolio-dark-text">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-portfolio-muted">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <CustomButton href="/contact" variant="outline">
              Contact me
            </CustomButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Resume;
