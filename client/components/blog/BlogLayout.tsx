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
            className="mb-8 inline-flex items-center gap-2 rounded-sm text-portfolio-primary transition-colors hover:text-[#314B5B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-primary focus-visible:ring-offset-2 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" aria-hidden="true" />
            Back to Notes
          </Link>
        )}
        
        {title && (
          <header className="mb-12 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-portfolio-dark-text mb-6">
              {title}
            </h1>
            
            {(date || readingTime || tags.length > 0) && (
              <div className="flex flex-wrap items-center justify-center gap-6 text-portfolio-muted">
                {date && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    <span className="text-sm">{formatDate(date)}</span>
                  </div>
                )}
                
                {readingTime && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                    <span className="text-sm">{readingTime} min read</span>
                  </div>
                )}
                
                {tags.length > 0 && (
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" aria-hidden="true" />
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-portfolio-accent px-2 py-1 text-xs font-medium text-portfolio-primary"
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
        
        <article className="prose prose-lg prose-gray max-w-none">
          {children}
        </article>
      </div>
    </Layout>
  );
};

export default BlogLayout;
