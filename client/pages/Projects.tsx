import Layout from "@/components/Layout";
import ProjectCard from "@/components/ui/project-card";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("automation");

  const tabs = [
    { id: "automation", label: "⚡ Automation & DevOps" },
    { id: "web", label: "🌐 Web Development" },
    { id: "ai", label: "🤖 AI & Machine Learning" },
    { id: "research", label: "📊 Research & Data" },
  ];

  const automationProjects = [
    {
      title: "FSU DigiNole Batch Ingest Tool",
      description:
        "Python-based automation tool for FSU Digital Repository, processing 10,000+ files with automated metadata management and quality control.",
      tech: "Python, Digital Repository APIs, Automation, Metadata Processing",
      github: "https://github.com/synnbad/cetamura_python_script",
      status: "completed" as const,
    },
    {
      title: "ADA Slope Compliance Tool",
      description:
        "Automated tool for calculating and verifying ADA slope compliance in architectural designs, ensuring accessibility standards are met with precise measurements.",
      tech: "Python, Automation, Accessibility, Compliance Checking, Mathematical Calculations",
      github: "https://github.com/synnbad/ADA-Slope-Compliance-Tool",
      status: "completed" as const,
    },
   
  ];

  const webProjects = [
    {
      title: "Web-based Exam Results System",
      description: "Front-end web application for managing and displaying exam results with user authentication and data visualization.",
      tech: "Web Development, Database Design, System Integration, WCAG 2.1",
      github: "https://github.com/synnbad/declaration-app",
      status: "completed" as const,
    },
    {
      title: "Android Internship Recruitment App",
      description: "Capstone project: Android application for internship recruitment in Ghana with user matching and application management.",
      tech: "Android Development, Java/Kotlin, Database Design, API Integration",
      github: "https://github.com/synnbad/Project_App",
      status: "completed" as const,
    },
  
    {
      title: "Portfolio Website (This Site)",
      description: "Professional portfolio built with modern web technologies, optimized for performance and accessibility.",
      tech: "React, TypeScript, Tailwind CSS, Vite",
      status: "completed" as const,
    },
  ];

  const aiProjects = [
    {
      title: "AI-Powered Accessibility Analyzer",
      description:
        "Machine learning tool that automatically detects and suggests fixes for web accessibility issues using computer vision and NLP.",
      tech: "AWS AI Services, Python, Computer Vision, NLP",
      status: "in-progress" as const,
    },
    
  ];

  const researchProjects = [
    {
      title: "Globe HPV Research Data Management",
      description:
        "Comprehensive data management system for Bill and Melinda Gates funded international research project with advanced analytics.",
      tech: "Data Management, RedCap, Statistical Analysis, International Collaboration",
      status: "completed" as const,
    },
   
  ];

  const getProjectsForTab = (tabId: string) => {
    switch (tabId) {
      case "automation":
        return automationProjects;
      case "web":
        return webProjects;
      case "ai":
        return aiProjects;
      case "research":
        return researchProjects;
      default:
        return automationProjects;
    }
  };

  return (
    <Layout>
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-portfolio-dark-text mb-8">
              Project Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Showcasing automation systems, web applications, AI/ML solutions, and research tools 
              that solve real-world problems and drive measurable impact.
            </p>
            
            {/* Project Stats */}
            <div className="flex justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-primary">7</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-primary">4</div>
                <div className="text-sm text-gray-600">Technical Domains</div>
              </div>
              
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12">
            <div className="bg-white rounded-xl p-2 shadow-sm border border-gray-100">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-6 py-3 rounded-lg font-medium transition-all duration-200",
                    activeTab === tab.id
                      ? "bg-portfolio-primary text-white shadow-sm"
                      : "text-gray-600 hover:text-portfolio-primary hover:bg-gray-50",
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getProjectsForTab(activeTab).map((project, index) => (
              <ProjectCard
                key={`${activeTab}-${index}`}
                title={project.title}
                description={project.description}
                tech={project.tech}
                github={(project as any).github}
                link={(project as any).link}
                status={project.status}
              />
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-heading font-semibold text-portfolio-dark-text mb-4">
                Ready to Collaborate
              </h3>
              <p className="text-gray-600 mb-6">
                Interested in working together on automation, web development, or AI/ML projects? 
                I'm available for collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/synnbad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-portfolio-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  View GitHub Portfolio
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-portfolio-primary text-portfolio-primary rounded-lg hover:bg-portfolio-primary hover:text-white transition-colors"
                >
                  Discuss a Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
