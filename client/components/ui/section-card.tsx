import React from 'react';
import { cn } from '@/lib/utils';

interface SectionCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  description,
  icon,
  className,
  children
}) => {
  return (
    <div className={cn(
      "bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200",
      className
    )}>
      {icon && (
        <div className="w-12 h-12 bg-gradient-to-br from-portfolio-primary to-portfolio-accent rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
      )}
      
      <h3 className="font-heading font-semibold text-xl text-portfolio-dark-text mb-2">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      
      {children}
    </div>
  );
};

export default SectionCard;
