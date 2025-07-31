import Layout from "@/components/Layout";
import CustomButton from "@/components/ui/custom-button";
import SectionCard from "@/components/ui/section-card";
import { Code, Globe, Brain, ArrowRight, CheckCircle, Award, Users, Zap } from "lucide-react";

function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50"></div>
        
        <div className="relative max-w-5xl mx-auto text-center space-y-10">
          {/* Profile Header Image - Enhanced */}
          <header className="flex flex-col items-center space-y-6">
            <div className="relative">
              {/* Gradient background ring */}
              <div className="absolute -inset-4 bg-gradient-to-br from-portfolio-primary via-portfolio-accent to-blue-600 rounded-full blur-lg opacity-20 animate-pulse"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] mx-auto">
                <div className="w-full h-full bg-white rounded-full shadow-2xl border-4 border-white overflow-hidden relative">
                  {/* Primary high-quality image */}
                  <picture className="w-full h-full">
                    <source 
                      media="(min-width: 1024px)" 
                      srcSet={`${import.meta.env.BASE_URL}profile-picture-ultra.jpg`}
                      type="image/jpeg"
                    />
                    <source 
                      media="(min-width: 640px)" 
                      srcSet={`${import.meta.env.BASE_URL}profile-picture-hq.jpg`}
                      type="image/jpeg"
                    />
                    <img 
                      src={`${import.meta.env.BASE_URL}profile-picture.jpg`}
                      alt="Sinbad Asiatewen Adjuik - Graduate Research Assistant & AI Practitioner"
                      className="w-full h-full object-cover object-center rounded-full"
                      loading="eager"
                      fetchPriority="high"
                      decoding="sync"
                      style={{
                        imageRendering: 'auto',
                        minWidth: '100%',
                        minHeight: '100%'
                      } as React.CSSProperties}
                      onLoad={(e) => {
                        const target = e.currentTarget;
                        target.style.opacity = '1';
                        console.log('Profile image loaded successfully');
                        const fallback = target.closest('.w-full')?.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'none';
                      }}
                      onError={(e) => {
                        const target = e.currentTarget;
                        console.error('Profile image failed to load:', target.src);
                        target.style.display = 'none';
                        const fallback = target.closest('.w-full')?.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'flex';
                        }
                      }}
                    />
                  </picture>
                  
                  {/* Enhanced fallback */}
                  <div 
                    className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-100 via-gray-50 to-blue-50 rounded-full flex flex-col items-center justify-center" 
                    style={{display: 'none'}}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}profile-picture.jpg`}
                      alt="Sinbad Asiatewen Adjuik"
                      className="w-full h-full object-cover object-center rounded-full"
                      style={{
                        imageRendering: 'auto',
                        maxWidth: '100%'
                      }}
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const textFallback = target.nextElementSibling as HTMLElement;
                        if (textFallback) textFallback.style.display = 'flex';
                      }}
                    />
                    <div 
                      className="absolute inset-0 flex flex-col items-center justify-center text-center"
                      style={{display: 'none'}}
                    >
                      <div className="w-24 h-24 bg-portfolio-primary rounded-full flex items-center justify-center mb-4">
                        <span className="text-4xl font-bold text-white">SA</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-700">Sinbad Adjuik</h3>
                      <p className="text-sm text-gray-500">AI Practitioner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-portfolio-dark-text">
              Sinbad Adjuik
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-medium">
              Graduate Research Assistant & AI Practitioner
            </p>
            <p className="text-lg text-gray-500">
              Florida State University | AWS Certified | Aspiring AI/ML Specialist
            </p>
          </div>

          {/* Updated Role Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm font-medium shadow-lg">
              🎓 Florida State University
            </span>
          
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg">
              🤖 Cloud & AI Practitioner Certified
            </span>
          </div>

          {/* Professional Summary */}
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              I love to develop automated systems, web applications, and AI-powered solutions that solve real-world problems. 
              Currently I help manage a digital repository system, as well as manage content management systems at FSU. In my free time I like applying machine learning and AI to solve practical problems
            </p>
          </div>

     
          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton
              variant="primary"
              size="lg"
              href="/projects"
              className="px-8 py-3"
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </CustomButton>
            <CustomButton
              variant="outline"
              size="lg"
              href="/contact"
              className="px-8 py-3"
            >
              Contact Me
            </CustomButton>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-portfolio-dark-text mb-4">
              Technical Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized in automation, web development, and AI/ML applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SectionCard
              title="Automation & DevOps"
              description="Python-based automation systems, CI/CD pipelines, and cloud infrastructure management with AWS."
              icon={<Code className="w-6 h-6 text-white" />}
            >
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Python Automation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">AWS Cloud Services</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">System Integration</span>
                </div>
              </div>
            </SectionCard>

            <SectionCard
              title="Web Development"
              description="Full-stack applications with React, Flask, and modern web technologies focused on accessibility and user experience."
              icon={<Globe className="w-6 h-6 text-white" />}
            >
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">React & TypeScript, Python & Flask</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">WCAG 2.1 Guidelines</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">API Development</span>
                </div>
              </div>
            </SectionCard>

            <SectionCard
              title="AI & Machine Learning"
              description="AI/ML applications, data analysis, and intelligent automation tools for research and practical implementation."
              icon={<Brain className="w-6 h-6 text-white" />}
            >
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">AWS AI/ML Services</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Data Analysis & ML</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">AI Accessibility Tools</span>
                </div>
              </div>
            </SectionCard>
          </div>
        </div>
      </section>

      {/* Current Work */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-portfolio-dark-text mb-4">
              Current Work
            </h2>
            <p className="text-lg text-gray-600">
              Active projects and research at Florida State University
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-portfolio-primary mr-3" />
                <h3 className="text-xl font-semibold text-portfolio-dark-text">Graduate Research</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Managing FSU's digital repository systems, processing 10,000+ files and ensuring 
                90% accessibility compliance across university platforms.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Digital repository automation</li>
                <li>• Web accessibility auditing</li>
                <li>• Metadata management systems</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Brain className="w-6 h-6 text-portfolio-primary mr-3" />
                <h3 className="text-xl font-semibold text-portfolio-dark-text">AI/ML Applications</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Applying machine learning to accessibility research and developing 
                AI-powered tools for data analysis and automation.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• AWS AI/ML services implementation</li>
                <li>• Intelligent accessibility automation</li>
                <li>• Research data analysis with ML</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-portfolio-dark-text mb-8">
            Professional Certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-portfolio-dark-text mb-2">AWS & Cloud (2025)</h3>
              <ul className="space-y-2 text-gray-600 text-left">
                <li>• AWS Certified AI Practitioner </li>
                <li>• AWS Certified Cloud Practitioner</li>
                <li>• Google IT Automation with Python</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-portfolio-dark-text mb-2">Development & Data (2024)</h3>
              <ul className="space-y-2 text-gray-600 text-left">
                <li>• Data Analysis with Python (FreeCodeCamp)</li>
                <li>• IBM Machine Learning with Python</li>
                <li>• Responsive Web Design (FreeCodeCamp)</li>
                <li>• Python Masterclass (Udemy)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-portfolio-dark-text mb-6">
            Let's Build Something Great Together
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Available for consulting, collaboration, and projects in automation,
            web development, and AI/ML applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton
              variant="primary"
              size="lg"
              href="/projects"
              className="px-8 py-3"
            >
              View My Work
            </CustomButton>
            <CustomButton
              variant="accent"
              size="lg"
              href="/contact"
              className="px-8 py-3"
            >
              Get In Touch
            </CustomButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Index;
