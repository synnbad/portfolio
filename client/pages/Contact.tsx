import Layout from "@/components/Layout";
import CustomButton from "@/components/ui/custom-button";
import { contact } from "@/data/portfolio";

function Contact() {
  return (
    <Layout>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-portfolio-muted">
              Contact
            </p>
            <h1 className="mt-3 font-heading text-4xl font-semibold leading-tight text-portfolio-dark-text sm:text-5xl">
              Need help fixing a workflow, website, or data process?
            </h1>
          </div>

          <div className="space-y-6 text-lg leading-8 text-portfolio-muted">
            <p>
              Open to roles, collaborations, and projects involving automation,
              data quality, accessible web systems, CMS migration, and practical
              AI/cloud tooling.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center justify-center rounded-md bg-portfolio-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#314B5B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-primary focus-visible:ring-offset-2"
              >
                Email me
              </a>
              <CustomButton href="/projects" variant="outline">
                View selected work
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8" aria-labelledby="contact-options-heading">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <h2 id="contact-options-heading" className="sr-only">
            Contact options
          </h2>
          <article className="border-t border-portfolio-border pt-5">
            <h3 className="font-heading text-2xl font-semibold text-portfolio-dark-text">
              Email
            </h3>
            <p className="mt-3 leading-7 text-portfolio-muted">
              Best for project and role conversations.
            </p>
            <a className="mt-5 inline-block text-portfolio-primary hover:text-[#314B5B]" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </article>

          <article className="border-t border-portfolio-border pt-5">
            <h3 className="font-heading text-2xl font-semibold text-portfolio-dark-text">
              LinkedIn
            </h3>
            <p className="mt-3 leading-7 text-portfolio-muted">
              Best for hiring context and quick updates.
            </p>
            <a
              className="mt-5 inline-block text-portfolio-primary hover:text-[#314B5B]"
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn profile
            </a>
          </article>

          <article className="border-t border-portfolio-border pt-5">
            <h3 className="font-heading text-2xl font-semibold text-portfolio-dark-text">
              GitHub
            </h3>
            <p className="mt-3 leading-7 text-portfolio-muted">
              Public repositories, prototypes, and project docs.
            </p>
            <a
              className="mt-5 inline-block text-portfolio-primary hover:text-[#314B5B]"
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub profile
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;
