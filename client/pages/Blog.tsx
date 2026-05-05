import { useState, useEffect } from "react";
import BlogLayout from "@/components/blog/BlogLayout";
import BlogCard from "@/components/blog/BlogCard";
import { BlogService } from "@/lib/blogService";
import type { BlogListItem } from "@shared/blog";
import { Search } from "lucide-react";

const Blog = () => {
  const [posts, setPosts] = useState<BlogListItem[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogListItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogData = async () => {
      try {
        const [blogPosts, tags] = await Promise.all([
          BlogService.getAllPosts(),
          BlogService.getAllTags()
        ]);
        
        setPosts(blogPosts);
        setFilteredPosts(blogPosts);
        setAllTags(tags);
      } catch (error) {
        console.error("Error loading blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogData();
  }, []);

  // Filter posts based on search term and selected tag
  useEffect(() => {
    let filtered = posts;

    if (searchTerm) {
      filtered = filtered.filter(
        post =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedTag) {
      filtered = filtered.filter(post =>
        post.tags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  }, [posts, searchTerm, selectedTag]);

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  if (loading) {
    return (
      <BlogLayout>
        <div className="flex min-h-64 items-center justify-center" role="status" aria-live="polite">
          <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-portfolio-primary motion-reduce:animate-none"></div>
          <span className="sr-only">Loading notes</span>
        </div>
      </BlogLayout>
    );
  }

  return (
    <BlogLayout>
      <div className="mb-16">
        <h1 className="font-heading text-4xl font-semibold text-portfolio-dark-text md:text-5xl">
          Blog
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-portfolio-muted">
          Short notes on the GitHub projects I keep pinned: what each repo is
          for, what I was testing, and how it connects to my work.
        </p>
      </div>

      <div className="mb-12 space-y-6">
        <div className="relative max-w-md">
          <label htmlFor="notes-search" className="sr-only">
            Search blog posts
          </label>
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-portfolio-muted" aria-hidden="true" />
          <input
            id="notes-search"
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-md border border-portfolio-border bg-portfolio-surface py-3 pl-10 pr-4 text-portfolio-dark-text focus:border-transparent focus:ring-2 focus:ring-portfolio-primary"
          />
        </div>

        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <span className="mr-2 text-sm text-portfolio-muted">
              Filter:
            </span>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                aria-pressed={selectedTag === tag}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === tag
                    ? "bg-portfolio-primary text-white"
                    : "bg-portfolio-surface text-portfolio-muted hover:bg-portfolio-soft-gray"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {(searchTerm || selectedTag) && (
          <div className="text-sm text-portfolio-muted">
            Showing {filteredPosts.length} of {posts.length} posts
            {searchTerm && (
              <span className="ml-1">
                matching "{searchTerm}"
              </span>
            )}
            {selectedTag && (
              <span className="ml-1">
                tagged with "{selectedTag}"
              </span>
            )}
          </div>
        )}
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          {posts.length === 0 ? (
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No posts yet
              </h3>
              <p className="text-gray-600">
                Blog posts will appear here once they are ready.
              </p>
            </div>
          ) : (
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No posts found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search terms or removing filters.
              </p>
            </div>
          )}
        </div>
      )}
    </BlogLayout>
  );
};

export default Blog;
