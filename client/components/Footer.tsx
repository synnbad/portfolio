import { Github, Linkedin, Download } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-portfolio-primary to-portfolio-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-heading font-semibold text-xl text-portfolio-dark-text">
                Synnbad
              </span>
            </div>
            <p className="text-gray-600 max-w-md">
              Multidisciplinary technologist bridging code, creativity, and accessibility through cloud computing, automation, and 3D storytelling.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-portfolio-dark-text">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="/projects" className="text-gray-600 hover:text-portfolio-primary transition-colors">
                Projects
              </a>
              <a href="/resume" className="text-gray-600 hover:text-portfolio-primary transition-colors">
                Resume
              </a>
              <a href="/certifications" className="text-gray-600 hover:text-portfolio-primary transition-colors">
                Certifications
              </a>
              <a href="/3d-modeling" className="text-gray-600 hover:text-portfolio-primary transition-colors">
                3D Modeling
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-portfolio-dark-text">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/synnbad"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 hover:bg-portfolio-primary hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 hover:bg-portfolio-primary hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-100 hover:bg-portfolio-accent hover:text-white transition-colors"
              >
                <Download className="w-5 h-5" />
              </a>
            </div>
            <div className="text-sm text-gray-500">
              <p>📧 yourname@domain.com</p>
              <p>🎨 <a href="https://sketchfab.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-primary">Sketchfab Portfolio</a></p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2024 Synnbad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
