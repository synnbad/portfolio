import Layout from "@/components/Layout";
import CustomButton from "@/components/ui/custom-button";
import { certifications } from "@/data/portfolio";

const Certifications = () => {
  return (
    <Layout>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-portfolio-muted">
              Certifications
            </p>
            <h1 className="mt-3 font-heading text-4xl font-semibold text-portfolio-dark-text sm:text-5xl">
              Certifications
            </h1>
            <p className="mt-5 text-lg leading-8 text-portfolio-muted">
              Credentials that support cloud, AI, and automation work.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8" aria-labelledby="earned-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="earned-heading" className="font-heading text-3xl font-semibold text-portfolio-dark-text">
            Earned credentials
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {certifications.map((cert) => (
              <article key={cert.title} className="border-t border-portfolio-border pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-portfolio-muted">{cert.year}</p>
                <h3 className="mt-3 font-heading text-2xl font-semibold leading-snug text-portfolio-dark-text">
                  {cert.title}
                </h3>
                <p className="mt-2 font-medium text-portfolio-dark-text">{cert.issuer}</p>
                <p className="mt-4 leading-7 text-portfolio-muted">{cert.relevance}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 border-t border-portfolio-border pt-6">
            <h2 className="font-heading text-2xl font-semibold text-portfolio-dark-text">
              How they connect
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-portfolio-muted">
              These support practical work: automation habits, cloud literacy,
              and careful AI use in real workflows.
            </p>
            <div className="mt-6">
              <CustomButton href="/projects" variant="outline">
                View selected work
              </CustomButton>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Certifications;
