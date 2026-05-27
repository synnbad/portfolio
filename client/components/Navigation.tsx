import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/blog", label: "Blog" },
  { path: "/about", label: "About" },
  { path: "/resume", label: "Resume" },
  { path: "/certifications", label: "Certifications" },
  { path: "/contact", label: "Contact" },
];

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const linkClasses = (path: string) =>
    cn(
      "border-b border-transparent px-1 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-primary focus-visible:ring-offset-2",
      location.pathname === path
        ? "border-portfolio-primary text-portfolio-primary"
        : "text-portfolio-muted hover:border-portfolio-border hover:text-portfolio-primary",
    );

  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-50 border-b border-portfolio-border bg-portfolio-background"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-16 items-center justify-between gap-4">
          <Link
            to="/"
            className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-primary focus-visible:ring-offset-2"
          >
            <span className="block font-heading text-lg font-semibold text-portfolio-dark-text">
              Sinbad Adjuik
            </span>
            <span className="block text-xs font-medium uppercase tracking-[0.16em] text-portfolio-muted">
              Automation and web systems
            </span>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                aria-current={location.pathname === item.path ? "page" : undefined}
                className={linkClasses(item.path)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            ref={menuButtonRef}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex rounded-md border border-portfolio-border px-3 py-2 text-sm font-medium text-portfolio-dark-text transition-colors hover:border-portfolio-primary hover:text-portfolio-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-primary focus-visible:ring-offset-2 md:hidden"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "border-t border-portfolio-border bg-portfolio-background px-4 py-3 md:hidden",
          isOpen ? "block" : "hidden",
        )}
      >
        <div className="flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              aria-current={location.pathname === item.path ? "page" : undefined}
              className={cn(linkClasses(item.path), "px-3")}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
