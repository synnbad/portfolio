import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
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
      document.title = "Sinbad Adjuik - AWS AI Practitioner & IT Professional";
    };
  }, [post]);

  if (loading) {
    return (
      <BlogLayout showBackButton>
        <div className="flex items-center justify-center min-h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-portfolio-primary"></div>
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
          prose-p:text-gray-700 prose-p:leading-relaxed
          prose-a:text-portfolio-primary prose-a:no-underline hover:prose-a:underline
          prose-strong:text-portfolio-dark-text prose-strong:font-semibold
          prose-code:text-portfolio-primary prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
          prose-pre:bg-gray-900 prose-pre:text-gray-100
          prose-blockquote:border-l-portfolio-primary prose-blockquote:text-gray-700
          prose-img:rounded-lg prose-img:shadow-lg
          prose-hr:border-gray-200"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Post Footer */}
      <div className="mt-16 pt-8 border-t border-gray-200">
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <h3 className="font-heading text-lg font-semibold text-portfolio-dark-text mb-2">
            Enjoyed this article?
          </h3>
          <p className="text-gray-600 mb-4">
            Let's connect and discuss more about AI, automation, and web development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center px-4 py-2 bg-portfolio-primary text-white rounded-lg hover:bg-portfolio-primary/90 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/sinbad-adjuik-3a3086171/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
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