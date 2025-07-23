import Layout from '@/components/Layout';
import ProjectCard from '@/components/ui/project-card';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('tech');

  const tabs = [
    { id: 'tech', label: '🛠️ Tech Projects' },
    { id: 'gis', label: '🌍 GIS / Automation' },
    { id: 'ai', label: '🤖 AI / Accessibility' },
  ];

  const techProjects = [
    {
      title: 'Omeka Migration Tool',
      description: 'A desktop UI tool to migrate image and metadata records between Omeka platforms using their APIs.',
      tech: 'Python, Tkinter, REST API',
      github: 'https://github.com/synnbad/omeka-migration-tool',
      status: 'completed' as const,
    },
    {
      title: 'System Health Check',
      description: 'Script to monitor system metrics and send email alerts.',
      tech: 'Python, psutil, Cron',
      status: 'completed' as const,
    },
  ];

  const gisProjects = [
    {
      title: 'ADA Slope Compliance Tool',
      description: 'Checks campus paths for ADA slope compliance using DEMs.',
      tech: 'Python, Rasterio, NumPy, Matplotlib',
      github: 'https://github.com/synnbad/ada-slope-tool',
      status: 'completed' as const,
    },
  ];

  const aiProjects = [
    {
      title: 'AI-Powered Web Accessibility Checker',
      description: 'Plugin concept to scan and fix accessibility issues using GPT',
      tech: 'GPT-4, Tesseract, Screenshot APIs',
      status: 'in-progress' as const,
    },
  ];

  const getProjectsForTab = (tabId: string) => {
    switch (tabId) {
      case 'tech':
        return techProjects;
      case 'gis':
        return gisProjects;
      case 'ai':
        return aiProjects;
      default:
        return techProjects;
    }
  };

  return (
    <Layout>
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-portfolio-dark-text mb-6">
              My Projects
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A collection of tools, applications, and solutions I've built across various domains including tech automation, GIS analysis, and accessibility innovation.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12">
            <div className="bg-white rounded-xl p-2 shadow-sm border border-gray-100">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'px-6 py-3 rounded-lg font-medium transition-all duration-200',
                    activeTab === tab.id
                      ? 'bg-portfolio-primary text-white shadow-sm'
                      : 'text-gray-600 hover:text-portfolio-primary hover:bg-gray-50'
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
                github={project.github}
                link={project.link}
                status={project.status}
              />
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-heading font-semibold text-portfolio-dark-text mb-4">
                More Projects Coming Soon
              </h3>
              <p className="text-gray-600 mb-6">
                I'm always working on new projects and experimenting with the latest technologies. Check back regularly for updates, or connect with me to see what I'm currently building.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/synnbad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-portfolio-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  View All on GitHub
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
