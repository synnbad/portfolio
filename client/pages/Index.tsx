import Layout from "@/components/Layout";
import CustomButton from "@/components/ui/custom-button";
import { Award, Users, Code } from "lucide-react";

function Index() {
  return (
    <Layout>
      {/* Hero Section - Minimal Design */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Header */}
          <header className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-portfolio-dark-text leading-tight">
              Sinbad Adjuik
            </h1>
            <div className="space-y-3">
              <p className="text-2xl md:text-3xl text-gray-700 font-medium">
                AWS AI Practitioner & Graduate Research Assistant
              </p>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Specializing in AI/ML applications, automation systems, and accessible web development solutions at Florida State University.
              </p>
            </div>
          </header>

          {/* Credentials - Minimal */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4 text-portfolio-primary" />
              AWS AI Practitioner Certified
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4 text-portfolio-primary" />
              Graduate Research Assistant
            </span>
            <span className="flex items-center gap-2">
              <Code className="w-4 h-4 text-portfolio-primary" />
              Python & React Developer
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <CustomButton 
              href="/projects" 
              variant="primary"
              className="px-6 py-3"
            >
              View Projects
            </CustomButton>
            <CustomButton 
              href="/blog" 
              variant="outline"
              className="px-6 py-3"
            >
              Read Blog
            </CustomButton>
            <CustomButton 
              href="/contact" 
              variant="secondary"
              className="px-6 py-3"
            >
              Get In Touch
            </CustomButton>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-portfolio-primary text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Let's Build Something Great Together
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Available for consulting, collaboration, and projects in automation, web development, and AI/ML applications.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CustomButton 
              href="/projects" 
              variant="secondary"
              className="px-8 py-3"
            >
              View My Work
            </CustomButton>
            <CustomButton 
              href="/contact" 
              variant="outline"
              className="px-8 py-3 border-white text-white hover:bg-white hover:text-portfolio-primary"
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
