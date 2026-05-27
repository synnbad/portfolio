import { useState, useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import BlogLayout from "@/components/blog/BlogLayout";
import { BlogService } from "@/lib/blogService";
import type { BlogPost } from "@shared/blog";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      try {
        const blogPost = await BlogService.getPost(slug);
        if (blogPost) {
          setPost(blogPost);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error("Error loading blog post:", error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  // Update document title when post loads
  useEffect(() => {
    if (post) {
      document.title = `${post.title} - Sinbad Adjuik`;
    }
    
    return () => {
      document.title =
        "Sinbad Adjuik | Python Automation, Data Checks & Accessible Web Systems";
    };
  }, [post]);

  if (loading) {
    return (
      <BlogLayout showBackButton>
        <div className="flex min-h-64 items-center justify-center" role="status" aria-live="polite">
          <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-portfolio-primary motion-reduce:animate-none"></div>
          <span className="sr-only">Loading note</span>
        </div>
      </BlogLayout>
    );
  }

  if (notFound || !post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <BlogLayout
      title={post.title}
      date={post.date}
      readingTime={post.readingTime}
      tags={post.tags}
      showBackButton
    >
      {/* Blog Content */}
      <div 
        className="prose prose-lg prose-gray max-w-none
          prose-headings:font-heading prose-headings:text-portfolio-dark-text
          prose-p:text-portfolio-muted prose-p:leading-relaxed
          prose-a:text-portfolio-primary prose-a:no-underline hover:prose-a:underline
          prose-strong:text-portfolio-dark-text prose-strong:font-semibold
          prose-code:text-portfolio-primary prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
          prose-pre:bg-gray-900 prose-pre:text-gray-100
          prose-blockquote:border-l-portfolio-primary prose-blockquote:text-portfolio-muted
          prose-img:rounded-md
          prose-hr:border-portfolio-border"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Post Footer */}
      <div className="mt-16 pt-8 border-t border-gray-200">
        <div className="border-t border-portfolio-border pt-6 text-center">
          <h3 className="font-heading text-lg font-semibold text-portfolio-dark-text mb-2">
            Want to talk through this?
          </h3>
          <p className="text-portfolio-muted mb-4">
            Reach out to discuss automation, accessibility, cloud workflows,
            or data-integrity tooling.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-md bg-portfolio-primary px-4 py-2 text-white transition-colors hover:bg-[#314B5B]"
            >
              Get in Touch
            </Link>
            <a
              href="https://www.linkedin.com/in/sinbad-adjuik-3a3086171/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border border-portfolio-border px-4 py-2 text-portfolio-muted transition-colors hover:bg-portfolio-surface"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
};

export default BlogPost;
