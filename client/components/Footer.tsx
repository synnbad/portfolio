import { Link } from "react-router-dom";
import { contact } from "@/data/portfolio";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-portfolio-border bg-portfolio-background">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div className="space-y-3">
          <p className="font-heading text-xl font-semibold text-portfolio-dark-text">
            Sinbad Adjuik
          </p>
          <p className="max-w-xl text-sm leading-6 text-portfolio-muted">
            Python automation, data checks, and accessible web systems.
          </p>
          <p className="text-sm text-portfolio-muted">{contact.location}</p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wide text-portfolio-dark-text">
            Explore
          </h2>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <Link className="footer-link" to="/projects">
              Projects
            </Link>
            <Link className="footer-link" to="/about">
              About
            </Link>
            <Link className="footer-link" to="/resume">
              Resume
            </Link>
            <Link className="footer-link" to="/blog">
              Notes
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wide text-portfolio-dark-text">
            Connect
          </h2>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <a className="footer-link" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <a
              className="footer-link"
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="footer-link"
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a className="footer-link" href={contact.resumePath} download>
              Download resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
