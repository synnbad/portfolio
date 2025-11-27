import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/markdown";
import type { BlogListItem } from "@shared/blog";

interface BlogCardProps {
  post: BlogListItem;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden group">
      <div className="p-6">
        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-portfolio-primary/10 text-portfolio-primary rounded-md text-xs font-medium"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">
                +{post.tags.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Title */}
        <h2 className="font-heading text-xl font-semibold text-portfolio-dark-text mb-3 group-hover:text-portfolio-primary transition-colors">
          <Link to={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.description}
        </p>

        {/* Meta info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>

          {/* Read more link */}
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-portfolio-primary hover:text-portfolio-primary/80 transition-colors text-sm font-medium group"
          >
            Read more
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;