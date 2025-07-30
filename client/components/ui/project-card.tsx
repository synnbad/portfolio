import React from "react";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  link?: string;
  github?: string;
  status?: "completed" | "in-progress";
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  link,
  github,
  status = "completed",
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 group",
        className,
      )}
    >
      {/* Enhanced Project Visual */}
      <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative group-hover:from-blue-50 group-hover:to-indigo-100 transition-all duration-300">
        {/* Dynamic background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${
                  i % 3 === 0 ? 'from-blue-500 to-purple-500' :
                  i % 3 === 1 ? 'from-green-500 to-blue-500' :
                  'from-purple-500 to-pink-500'
                } opacity-30 m-0.5 rounded-sm`}
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animation: 'pulse 3s infinite'
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Central icon based on project type */}
        <div className="relative z-10 text-center">
          <div className="w-16 h-16 mx-auto mb-2 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            {title.toLowerCase().includes('diginole') ? (
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
              </svg>
            ) : title.toLowerCase().includes('research') || title.toLowerCase().includes('hpv') ? (
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            ) : title.toLowerCase().includes('android') || title.toLowerCase().includes('mobile') ? (
              <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.523 15.3414c-.4995 0-.9047-.4053-.9047-.9047s.4052-.9047.9047-.9047.9047.4053.9047.9047-.4052.9047-.9047.9047m-11.046 0c-.4995 0-.9047-.4053-.9047-.9047s.4052-.9047.9047-.9047.9047.4053.9047.9047-.4052.9047-.9047.9047m11.4615-6.34l1.9073-3.4965c.1659-.3037.0573-.6894-.2464-.8553-.3037-.1659-.6894-.0573-.8553.2464l-1.9252 3.5339c-1.0488-.4714-2.2336-.7334-3.5068-.7334s-2.458.2620-3.5068.7334L7.438 5.3412c-.1659-.3037-.5516-.4123-.8553-.2464-.3037.1659-.4123.5516-.2464.8553L8.2436 8.9c-2.6344 1.1520-4.4868 3.4278-4.4868 6.14h16.4864c0-2.7122-1.8524-4.988-4.4868-6.14"/>
              </svg>
            ) : title.toLowerCase().includes('web') || title.toLowerCase().includes('exam') ? (
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            ) : (
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            )}
          </div>
          <p className="text-xs font-medium text-gray-600 group-hover:text-gray-800 transition-colors">
            {title.toLowerCase().includes('diginole') ? 'Digital Archive' :
             title.toLowerCase().includes('research') ? 'Research & Analytics' :
             title.toLowerCase().includes('android') ? 'Mobile Development' :
             title.toLowerCase().includes('web') ? 'Web Platform' :
             'System Development'}
          </p>
        </div>
      </div>

      <div className="flex items-start justify-between mb-4">
        <h3 className="font-heading font-semibold text-lg text-portfolio-dark-text group-hover:text-portfolio-primary transition-colors">
          {title}
        </h3>

        {status === "in-progress" && (
          <span className="px-2 py-1 text-xs bg-portfolio-accent/10 text-portfolio-accent rounded-full">
            In Progress
          </span>
        )}
      </div>

      <p className="text-gray-600 mb-4">{description}</p>

      <div className="mb-4">
        <span className="text-sm font-medium text-portfolio-primary">
          Tech: {tech}
        </span>
      </div>

      <div className="flex items-center space-x-3">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-gray-600 hover:text-portfolio-primary transition-colors"
          >
            <Github className="w-4 h-4" />
            <span className="text-sm">Code</span>
          </a>
        )}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-gray-600 hover:text-portfolio-primary transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="text-sm">View</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
