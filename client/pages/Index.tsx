import Layout from "@/components/Layout";
import CustomButton from "@/components/ui/custom-button";
import SectionCard from "@/components/ui/section-card";
import { Code, Cloud, Palette, ArrowRight, CheckCircle, Zap, Award, Users, Globe } from "lucide-react";

function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-portfolio-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-portfolio-accent/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto text-center space-y-12">
          <div className="space-y-8">
            {/* Profile Image with enhanced styling - Responsive sizes for better quality */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto mb-12">
              <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary to-portfolio-accent rounded-full animate-pulse"></div>
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 bg-white rounded-full flex items-center justify-center top-2 left-2 shadow-xl overflow-hidden">
                <img 
                  src="/profile-picture.jpg" 
                  srcSet="/profile-picture-ultra.jpg 4x, /profile-picture-hq.jpg 3x, /profile-picture.jpg 2x, /profile-picture.jpg 1x"
                  sizes="(max-width: 640px) 176px, (max-width: 1024px) 208px, 240px"
                  alt="Sinbad Asiatewen Adjuik - Profile Picture"
                  className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full object-cover object-center profile-image"
                  style={{
                    filter: 'contrast(1.005) saturate(1.01)',
                    maxWidth: '100%',
                    height: 'auto',
                    imageRendering: 'auto',
                  }}
                  loading="eager"
                  decoding="sync"
                  fetchPriority="high"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-gray-400 text-sm font-medium">
                    That's me! 👋
                  </span>
                </div>
              </div>
              {/* Floating indicators */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight">
                <span className="block text-portfolio-dark-text mb-2">
                  Sinbad
                </span>
                <span className="block bg-gradient-to-r from-portfolio-primary via-blue-600 to-portfolio-accent bg-clip-text text-transparent mb-2">
                  Adjuik
                </span>
                <span className="block text-2xl md:text-3xl lg:text-4xl text-gray-600 font-normal mt-4">
                  Graduate Research Assistant & IT Professional
                </span>
              </h1>

              {/* Dynamic Role Tags */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm font-medium shadow-lg">
                  🎓 Florida State University
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full text-sm font-medium shadow-lg">
                  ☁️ AWS Certified
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg">
                  🤖 AI Practitioner (In Progress)
                </span>
              </div>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-2xl text-gray-700 leading-relaxed font-light">
                From Ghana to Florida State University—I turn complex challenges into 
                elegant solutions through 
                <span className="font-semibold text-portfolio-primary"> data analysis</span>, 
                <span className="font-semibold text-portfolio-primary"> software development</span>, and 
                <span className="font-semibold text-portfolio-primary"> accessibility advocacy</span>.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not optimizing digital repositories or ensuring 90% accessibility compliance, 
                you'll find me crafting 3D worlds in Blender or exploring Tallahassee's trails with my camera. 
                Currently diving deep into AI while pursuing my Master's—because the future of tech 
                should be both intelligent and inclusive.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-primary">10K+</div>
                <div className="text-sm text-gray-600">Files Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-primary">6K+</div>
                <div className="text-sm text-gray-600">Records Migrated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-primary">90%</div>
                <div className="text-sm text-gray-600">Accessibility Compliance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-primary">6+</div>
                <div className="text-sm text-gray-600">Certifications</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <CustomButton
              variant="primary"
              size="lg"
              href="/projects"
              className="text-lg px-10 py-5 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Explore My Work
              <ArrowRight className="ml-3 w-5 h-5" />
            </CustomButton>
            <CustomButton
              variant="outline"
              size="lg"
              href="/contact"
              className="text-lg px-10 py-5 border-2 hover:bg-portfolio-primary hover:text-white transition-all duration-300"
            >
              Let's Connect
            </CustomButton>
          </div>
        </div>
      </section>

      {/* Enhanced About Me Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-portfolio-dark-text mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bridging the gap between technical excellence and human-centered design
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  My journey started with a simple curiosity: how can technology make life better for everyone? 
                  This question led me from the classrooms of Ghana to the research labs of Florida State University, 
                  where I spend my days ensuring that digital tools are not just powerful, but accessible to all.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  There's something deeply satisfying about automating a process that used to take hours, 
                  or seeing a website become usable for someone with disabilities. Whether I'm processing 
                  10,000+ files for FSU's digital repository or collaborating on international health research, 
                  I believe the best technology is invisible—it just works, beautifully.
                </p>
              </div>

              {/* Journey Highlights */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-portfolio-dark-text mb-4">My Story</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-portfolio-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">Built my first Android app in Ghana—an internship platform that actually got used</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-portfolio-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">Managed health data for 6,000+ patients on a Gates Foundation project</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-portfolio-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">Now teaching accessibility while learning AI—because growth never stops</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Workspace Visual */}
            <div className="relative">
              {/* Enhanced Code Editor Mockup */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
                {/* VS Code-like header */}
                <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-gray-400 text-sm">portfolio.py</div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="w-16"></div>
                </div>
                
                {/* Code content */}
                <div className="p-6 font-mono text-sm leading-relaxed">
                  <div className="text-gray-500 mb-2"># Building meaningful solutions</div>
                  <div className="text-blue-400 mb-1">class <span className="text-yellow-400">PortfolioOwner</span>:</div>
                  <div className="ml-4">
                    <div className="text-gray-300 mb-1">def <span className="text-green-400">__init__</span>(self):</div>
                    <div className="ml-4 space-y-1">
                      <div className="text-gray-300">self.name = <span className="text-orange-400">"Sinbad Asiatewen Adjuik"</span></div>
                      <div className="text-gray-300">self.passion = <span className="text-orange-400">"accessibility + data"</span></div>
                      <div className="text-gray-300">self.mission = <span className="text-orange-400">"making tech inclusive"</span></div>
                      <div className="text-gray-300">self.tools = [<span className="text-orange-400">"Python"</span>, <span className="text-orange-400">"AWS"</span>, <span className="text-orange-400">"React"</span>]</div>
                    </div>
                  </div>
                  <div className="ml-4 mt-3">
                    <div className="text-gray-300 mb-1">def <span className="text-green-400">solve_problems</span>(self):</div>
                    <div className="ml-4 text-gray-300">return <span className="text-orange-400">"with creativity and code ✨"</span></div>
                  </div>
                </div>
                
                {/* Status bar */}
                <div className="bg-blue-600 px-4 py-1 text-xs text-white flex justify-between items-center">
                  <span>Ready to collaborate</span>
                  <span>Python 3.11 | UTF-8</span>
                </div>
              </div>
              
              {/* Floating tech icons */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-portfolio-primary rounded-full flex items-center justify-center shadow-lg">
                <Code className="w-4 h-4 text-white" />
              </div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-portfolio-accent rounded-full flex items-center justify-center shadow-lg">
                <Zap className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="text-center">
            <h3 className="text-2xl font-heading font-semibold text-portfolio-dark-text mb-12">
              What Keeps Me Motivated
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-portfolio-dark-text mb-3">Making Tech Human</h4>
                <p className="text-gray-600">Every line of code should serve a person. I've seen how accessibility changes lives—it's not just compliance, it's compassion.</p>
              </div>
              
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-portfolio-dark-text mb-3">Curiosity Over Comfort</h4>
                <p className="text-gray-600">From 3D art to AI algorithms—I learn because I'm genuinely fascinated, not because I have to.</p>
              </div>
              
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-portfolio-dark-text mb-3">Global Perspective</h4>
                <p className="text-gray-600">Working across continents taught me that good ideas come from everywhere, and technology should bridge divides, not create them.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-portfolio-dark-text mb-6">
              Focus Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specializing in the intersection of technology, creativity, and
              accessibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SectionCard
              title="Tech / DevOps / Python"
              description="I specialize in Python-driven automation and DevOps workflows that power scalable systems."
              icon={<Code className="w-6 h-6 text-white" />}
            >
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">
                    Python Automation
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">
                    DevOps Workflows
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">
                    System Integration
                  </span>
                </div>
              </div>
            </SectionCard>

            <SectionCard
              title="GIS / Cloud"
              description="I develop GIS-integrated tools and cloud-native solutions that enhance real-world accessibility."
              icon={<Cloud className="w-6 h-6 text-white" />}
            >
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">
                    AWS Cloud Solutions
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">
                    ArcGIS Development
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">
                    Spatial Analysis
                  </span>
                </div>
              </div>
            </SectionCard>

            <SectionCard
              title="Accessibility & Innovation"
              description="I focus on building accessible solutions and exploring emerging technologies to create inclusive digital experiences."
              icon={<Palette className="w-6 h-6 text-white" />}
            >
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">
                    Web Accessibility
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">
                    Digital Research
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">
                    Innovation Solutions
                  </span>
                </div>
              </div>
            </SectionCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-portfolio-dark-text mb-6">
            Ready to Collaborate?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you need cloud automation, GIS solutions, or want to discuss
            the latest in accessibility tech, I'd love to connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomButton
              variant="primary"
              size="lg"
              href="/projects"
              className="text-lg px-8 py-4"
            >
              Explore My Work
            </CustomButton>
            <CustomButton
              variant="accent"
              size="lg"
              href="/contact"
              className="text-lg px-8 py-4"
            >
              Let's Connect
            </CustomButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Index;
