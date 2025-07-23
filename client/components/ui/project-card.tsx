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
      {/* Project Image Placeholder */}
      <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
        <div className="text-center text-gray-400">
          <div className="w-8 h-8 mx-auto mb-2 bg-gray-300 rounded flex items-center justify-center">
            <span className="text-sm">📷</span>
          </div>
          <p className="text-xs font-medium">Project Image</p>
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
