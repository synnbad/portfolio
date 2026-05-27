import Layout from "@/components/Layout";
import CustomButton from "@/components/ui/custom-button";
import { contact, focusAreas, skillGroups } from "@/data/portfolio";

const About = () => {
  return (
    <Layout>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-portfolio-muted">
              About
            </p>
            <h1 className="mt-3 font-heading text-4xl font-semibold leading-tight text-portfolio-dark-text sm:text-5xl">
              Python automation, data checks, and accessible web systems.
            </h1>
          </div>

          <div className="space-y-6 text-lg leading-8 text-portfolio-muted">
            <p>
              I build practical systems that make technical operations easier
              to run and maintain.
            </p>
            <p>
              That can mean a Python tool, API migration workflow,
              accessibility review, CI pipeline, or handoff documentation.
            </p>
            <p>
              The goal is simple: clearer records, fewer avoidable errors,
              and systems that hold up after handoff.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <CustomButton href="/projects">View selected work</CustomButton>
              <CustomButton href="/contact" variant="outline">
                Contact me
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-portfolio-surface px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="work-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="work-heading" className="font-heading text-3xl font-semibold text-portfolio-dark-text">
            What I improve
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="border-t border-portfolio-border pt-5">
              <h3 className="font-heading text-xl font-semibold text-portfolio-dark-text">
                Handoffs
              </h3>
              <p className="mt-3 leading-7 text-portfolio-muted">
                Informal steps become checks, logs, docs, and clear failure
                states others can follow.
              </p>
            </article>
            <article className="border-t border-portfolio-border pt-5">
              <h3 className="font-heading text-xl font-semibold text-portfolio-dark-text">
                Record quality
              </h3>
              <p className="mt-3 leading-7 text-portfolio-muted">
                Metadata, duplicates, migrations, and data entry get
                validation before cleanup becomes the default.
              </p>
            </article>
            <article className="border-t border-portfolio-border pt-5">
              <h3 className="font-heading text-xl font-semibold text-portfolio-dark-text">
                Maintenance
              </h3>
              <p className="mt-3 leading-7 text-portfolio-muted">
                Tools get source control, packaging, tests where useful,
                and plain documentation.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="fit-heading">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 id="fit-heading" className="font-heading text-3xl font-semibold text-portfolio-dark-text">
              Good fit
            </h2>
            <p className="mt-4 leading-7 text-portfolio-muted">
              Best fit: teams cleaning up data automation, research workflows,
              CMS migrations, accessibility review, and small web systems.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {focusAreas.map((area) => (
              <article key={area.title} className="border-t border-portfolio-border pt-5">
                <h3 className="font-heading text-lg font-semibold text-portfolio-dark-text">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-portfolio-muted">{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8" aria-labelledby="skills-heading">
        <div className="mx-auto max-w-7xl border-t border-portfolio-border pt-8">
          <h2 id="skills-heading" className="font-heading text-2xl font-semibold text-portfolio-dark-text">
            Tools
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-semibold text-portfolio-dark-text">{group.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-portfolio-muted">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-portfolio-muted">
            Contact:{" "}
            <a className="text-portfolio-primary hover:text-[#314B5B]" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
