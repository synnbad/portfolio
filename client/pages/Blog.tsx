import { useState, useEffect } from "react";
import BlogLayout from "@/components/blog/BlogLayout";
import BlogCard from "@/components/blog/BlogCard";
import { BlogService } from "@/lib/blogService";
import type { BlogListItem } from "@shared/blog";
import { Search, Tag } from "lucide-react";

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
        <div className="flex items-center justify-center min-h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-portfolio-primary"></div>
        </div>
      </BlogLayout>
    );
  }

  return (
    <BlogLayout>
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-portfolio-dark-text mb-6">
          Technical Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Insights on AI/ML, automation, web development, and accessibility from my work and research.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-12 space-y-6">
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-portfolio-primary focus:border-transparent"
          />
        </div>

        {/* Tag Filter */}
        {allTags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2">
            <span className="flex items-center gap-1 text-sm text-gray-600 mr-2">
              <Tag className="w-4 h-4" />
              Filter by tag:
            </span>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === tag
                    ? "bg-portfolio-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {/* Active filters */}
        {(searchTerm || selectedTag) && (
          <div className="text-center text-sm text-gray-600">
            Showing {filteredPosts.length} of {posts.length} articles
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

      {/* Blog Posts Grid */}
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
                No blog posts yet
              </h3>
              <p className="text-gray-600">
                Stay tuned for upcoming articles on AI, automation, and web development!
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