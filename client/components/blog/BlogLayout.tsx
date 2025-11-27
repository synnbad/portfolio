import Layout from "@/components/Layout";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDate } from "@/lib/markdown";

interface BlogLayoutProps {
  children: React.ReactNode;
  title?: string;
  date?: string;
  readingTime?: number;
  tags?: string[];
  showBackButton?: boolean;
}

const BlogLayout = ({ 
  children, 
  title, 
  date, 
  readingTime, 
  tags = [], 
  showBackButton = false 
}: BlogLayoutProps) => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {showBackButton && (
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-portfolio-primary hover:text-portfolio-primary/80 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        )}
        
        {title && (
          <header className="mb-12 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-portfolio-dark-text mb-6">
              {title}
            </h1>
            
            {(date || readingTime || tags.length > 0) && (
              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600">
                {date && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{formatDate(date)}</span>
                  </div>
                )}
                
                {readingTime && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{readingTime} min read</span>
                  </div>
                )}
                
                {tags.length > 0 && (
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </header>
        )}
        
        <main className="prose prose-lg prose-gray max-w-none">
          {children}
        </main>
      </div>
    </Layout>
  );
};

export default BlogLayout;