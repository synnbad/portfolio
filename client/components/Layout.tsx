import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-portfolio-background text-portfolio-dark-text">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-portfolio-surface focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-portfolio-primary focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-portfolio-primary"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
