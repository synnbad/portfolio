import React from 'react';
import { Construction } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title, description }) => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="w-16 h-16 bg-portfolio-primary/10 rounded-full flex items-center justify-center mx-auto">
          <Construction className="w-8 h-8 text-portfolio-primary" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-3xl font-heading font-bold text-portfolio-dark-text">
            {title}
          </h1>
          {description && (
            <p className="text-gray-600">
              {description}
            </p>
          )}
        </div>
        
        <div className="space-y-4">
          <p className="text-sm text-gray-500">
            This page is currently under construction. Please check back soon!
          </p>
          <p className="text-xs text-gray-400">
            💡 Continue prompting to have this page content generated
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;
