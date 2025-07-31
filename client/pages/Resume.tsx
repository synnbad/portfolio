import Layout from "@/components/Layout";
import { Download, Mail, Phone, MapPin, ExternalLink, Award, Briefcase, GraduationCap, Code } from "lucide-react";

function Resume() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-portfolio-dark-text mb-4">
              Sinbad Adjuik
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Graduate Assistant 
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:adjuiksinbad@gmail.com" className="hover:text-portfolio-primary">adjuiksinbad@gmail.com</a>
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Tallahassee, FL</span>
              </div>
            </div>
            
          </div>

          {/* Professional Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-semibold text-portfolio-dark-text mb-4">Professional Summary</h2>
            <p className="text-gray-700 leading-relaxed">
              I come with expertise in automation,
              web development, and machine learning application. With a proven track record of managing large-scale
              digital repository systems, processing 10,000+ files with 90% accessibility compliance.
              Experience in international research collaboration and developing AI-powered solutions for
              accessibility and data analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Experience */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold text-portfolio-dark-text mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-2 text-portfolio-primary" />
                Professional Experience
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-portfolio-primary pl-4">
                  <h3 className="font-semibold text-lg">Graduate Assistant</h3>
                  <p className="text-portfolio-primary font-medium">Florida State University</p>
                  <p className="text-gray-600 text-sm">August 2024 - Present</p>
                  <ul className="mt-2 text-gray-700 text-sm space-y-1">
                    <li>• Managed digital repository systems processing 10,000+ files</li>
                    <li>• Ensured 90% WCAG 2.1 accessibility compliance across platforms</li>
                    <li>• Developed a Python automation tools for metadata management</li>
                    <li>• Collaborated with cross-functional teams on digital initiatives</li>
                  </ul>
                </div>

                 <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-lg">Data Manager</h3>
                  <p className="text-green-600 font-medium">GLOBE HPV Project</p>
                  <p className="text-gray-600 text-sm">October 2023 – August 2024  </p>
                  <ul className="mt-2 text-gray-700 text-sm space-y-1">
                    <li>• Managed international research data for HPV study</li>
                    <li>• Coordinated data collection across multiple countries</li>
                    <li>• Implemented data quality assurance protocols</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-lg">IT Assistant</h3>
                  <p className="text-blue-600 font-medium">University of Health And Allied Sciences,Hohoe</p>
                  <p className="text-gray-600 text-sm">November 2022 – October 2023 </p>
                  <ul className="mt-2 text-gray-700 text-sm space-y-1">
                    <li>• Maintained IT infrastructure and provided technical support</li>
                    <li>• Developed web-based exam results system</li>
                    <li>• Automated system monitoring and maintenance tasks</li>
                  </ul>
                </div>

               

                
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="space-y-8">
              {/* Education */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-semibold text-portfolio-dark-text mb-6 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2 text-portfolio-primary" />
                  Education
                </h2>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-portfolio-primary pl-4">
                    <h3 className="font-semibold">Master of Science in Information Technology</h3>
                    <p className="text-portfolio-primary font-medium">Florida State University</p>
                    <p className="text-gray-600 text-sm">August 2024 - Present</p>
                    <p className="text-gray-700 text-sm mt-1">
                      Focus: AI/ML Applications, Digital Repository Management, Accessibility Research
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold">Bachelor of Science in Computer Science And Information Systems</h3>
                    <p className="text-blue-600 font-medium">Datalink University, Tema</p>
                    <p className="text-gray-600 text-sm">December 2022</p>
                    <p className="text-gray-700 text-sm mt-1">
                      Capstone: Android Internship Recruitment Application
                    </p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-semibold text-portfolio-dark-text mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-2 text-portfolio-primary" />
                  Professional Certifications
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold">AWS Certified AI Practitioner</h3>
                    <p className="text-gray-600 text-sm">Amazon Web Services • 2025</p>
                    
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold">AWS Certified Cloud Practitioner</h3>
                    <p className="text-gray-600 text-sm">Amazon Web Services • 2025</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold">Google IT Automation with Python</h3>
                    <p className="text-gray-600 text-sm">Google/Coursera • 2025</p>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold">Data Analysis with Python</h3>
                    <p className="text-gray-600 text-sm">FreeCodeCamp • 2024</p>
                  </div>
                  
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h3 className="font-semibold">IBM Machine Learning with Python</h3>
                    <p className="text-gray-600 text-sm">IBM/Coursera • 2024</p>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h3 className="font-semibold">Responsive Web Design</h3>
                    <p className="text-gray-600 text-sm">FreeCodeCamp • 2023</p>
                  </div>
                  
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold">Python Masterclass</h3>
                    <p className="text-gray-600 text-sm">Udemy • 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="bg-white rounded-lg shadow-sm p-6 mt-8">
            <h2 className="text-2xl font-semibold text-portfolio-dark-text mb-6 flex items-center">
              <Code className="w-6 h-6 mr-2 text-portfolio-primary" />
              Technical Skills
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-portfolio-dark-text mb-3">AI & Machine Learning</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">AWS Bedrock</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">SageMaker</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Scikit-learn</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">TensorFlow</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Pandas</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">NumPy</span>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-portfolio-dark-text mb-3">Cloud & Automation</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">AWS Services</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Git</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">CI/CD</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Linux</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Docker</span>
                   <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">EC2</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Lambda</span>
                </div>

              </div>
              
              <div>
                <h3 className="font-semibold text-portfolio-dark-text mb-3">Web Development</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Flask</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">WCAG 2.1</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">REST APIs</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">SQL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-portfolio-dark-text mb-4">Let's Connect</h3>
              <p className="text-gray-600 mb-6">
                Interested in discussing opportunities in automation, AI/ML, or web development?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-portfolio-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Get In Touch
                </a>
                <a
                  href="https://linkedin.com/in/sinbad-asiatewen-adjuik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-portfolio-primary text-portfolio-primary rounded-lg hover:bg-portfolio-primary hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resume;
