import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, MessageCircle, Clock, Coffee } from "lucide-react";

function Contact() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-portfolio-dark-text mb-6">
              Let's Work Together
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Available for consulting, collaboration and project opportunities in automation,
              web development, and AI/ML applications.
            </p>

            {/* Availability Status */}
            <div className="mt-8 inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Open for full-time opportunities after graduation in Spring 2026
            </div>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Primary Contact */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <Mail className="w-8 h-8 text-portfolio-primary mr-3" />
                <h2 className="text-2xl font-semibold text-portfolio-dark-text">Email</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Best for project discussions, collaboration opportunities, and professional inquiries.
              </p>
              <a
                href="mailto:saa24b@fsu.edu"
                className="text-lg font-medium text-portfolio-primary hover:text-blue-600 transition-colors"
              >
                saa24b@fsu.edu
              </a>
              <p className="text-sm text-gray-500 mt-2">
                Response time: Usually within 24 hours
              </p>
            </div>

            {/* LinkedIn */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <MessageCircle className="w-8 h-8 text-portfolio-primary mr-3" />
                <h2 className="text-2xl font-semibold text-portfolio-dark-text">LinkedIn</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Connect with me professionally and see my latest updates and achievements.
              </p>
              <a
                href="https://www.linkedin.com/in/sinbad-adjuik-3a3086171/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-portfolio-primary hover:text-blue-600 transition-colors"
              >
                Sinbad Adjuik
              </a>
              <p className="text-sm text-gray-500 mt-2">
                Great for networking and professional updates
              </p>
            </div>
          </div>

          

          {/* Discussion Topics */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-portfolio-dark-text mb-6 text-center">
              What I'd Love to Discuss
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-portfolio-dark-text mb-2">Professional Projects</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Automation & DevOps solutions</li>
                  <li>• AI/ML implementation strategies</li>
                  <li>• Web accessibility consulting</li>
                  <li>• Full-time opportunities</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-portfolio-dark-text mb-2">Technical Collaboration</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Open source contributions</li>
                  <li>• Research partnerships</li>
                  <li>• AWS AI/ML best practices</li>
                  <li>• Digital accessibility standards</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-portfolio-dark-text mb-2">Professional Networking</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Industry insights and trends</li>
                  <li>• Career development advice</li>
                  <li>• Technology recommendations</li>
                  <li>• Coffee chats and mentoring</li>
                </ul>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
