import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/markdown";
import type { BlogListItem } from "@shared/blog";

interface BlogCardProps {
  post: BlogListItem;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="overflow-hidden border-t border-portfolio-border bg-transparent py-6">
      <div className="p-6">
        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-portfolio-accent px-2 py-1 text-xs font-medium text-portfolio-primary"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="rounded-md bg-portfolio-soft-gray px-2 py-1 text-xs text-portfolio-muted">
                +{post.tags.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Title */}
        <h2 className="font-heading text-xl font-semibold text-portfolio-dark-text mb-3">
          <Link to={`/blog/${post.slug}`} className="rounded-sm hover:text-portfolio-primary hover:underline">
            {post.title}
          </Link>
        </h2>

        {/* Description */}
        <p className="text-portfolio-muted mb-4 line-clamp-3">
          {post.description}
        </p>

        {/* Meta info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-portfolio-muted">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" aria-hidden="true" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>

          {/* Read more link */}
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 rounded-sm text-sm font-medium text-portfolio-primary transition-colors hover:text-blue-800"
          >
            Read post
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
