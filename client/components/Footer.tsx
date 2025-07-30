import { Github, Linkedin, Download, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6 md:col-span-2">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-portfolio-primary to-portfolio-accent rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">SA</span>
              </div>
              <div>
                <span className="font-heading font-bold text-2xl text-portfolio-dark-text block">
                  Sinbad Adjuik
                </span>
                <span className="text-sm text-gray-600">Graduate Research Assistant & IT Professional</span>
              </div>
            </div>
            <p className="text-gray-600 max-w-md leading-relaxed">
              Currently building accessible tech at FSU while figuring out why my Python scripts 
              work perfectly at 2 AM but break mysteriously the next morning. Equal parts curious 
              researcher and caffeine-dependent developer.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="w-4 h-4 text-portfolio-primary" />
                <span className="text-sm">adjuiksinbad@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-4 h-4 text-portfolio-primary" />
                <span className="text-sm">Tallahassee, FL</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-heading font-semibold text-portfolio-dark-text text-lg">
              Explore
            </h3>
            <div className="space-y-3">
              <a
                href="/projects"
                className="block text-gray-600 hover:text-portfolio-primary transition-colors hover:translate-x-1 transform duration-200"
              >
                → Projects
              </a>
              <a
                href="/resume"
                className="block text-gray-600 hover:text-portfolio-primary transition-colors hover:translate-x-1 transform duration-200"
              >
                → Professional Experience
              </a>
              <a
                href="/certifications"
                className="block text-gray-600 hover:text-portfolio-primary transition-colors hover:translate-x-1 transform duration-200"
              >
                → Certifications
              </a>
              <a
                href="/3d-modeling"
                className="block text-gray-600 hover:text-portfolio-primary transition-colors hover:translate-x-1 transform duration-200"
              >
                → 3D Portfolio
              </a>
              <a
                href="/contact"
                className="block text-gray-600 hover:text-portfolio-primary transition-colors hover:translate-x-1 transform duration-200"
              >
                → Get In Touch
              </a>
            </div>
          </div>

          {/* Social Links & Resources */}
          <div className="space-y-6">
            <h3 className="font-heading font-semibold text-portfolio-dark-text text-lg">
              Connect
            </h3>
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4">
                <a
                  href="https://github.com/synnbad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white shadow-sm hover:shadow-md hover:bg-portfolio-primary hover:text-white transition-all duration-300 border border-gray-100"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white shadow-sm hover:shadow-md hover:bg-portfolio-primary hover:text-white transition-all duration-300 border border-gray-100"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              
              {/* Download Resume */}
              <a
                href="/Sinbad_Adjuik_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-portfolio-primary text-white rounded-lg hover:bg-portfolio-primary/90 transition-colors text-sm font-medium"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>using React, TypeScript & Tailwind CSS</span>
            </div>
            <div className="text-gray-600 text-sm">
              © 2025 Sinbad Asiatewen Adjuik. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
