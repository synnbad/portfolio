import { parseMarkdown, extractBlogListItem, sortPostsByDate } from '@/lib/markdown';
import type { BlogPost, BlogListItem } from '@shared/blog';

// In a real app, this would be replaced with a CMS or API
// For now, we'll simulate fetching from static markdown files
export class BlogService {
  private static blogPosts: Map<string, string> = new Map();
  
  // Initialize with sample blog posts (will be replaced with real data)
  static async initialize() {
    // This will be populated when we create the blog posts
    return true;
  }

  // Fetch a single blog post by slug
  static async getPost(slug: string): Promise<BlogPost | null> {
    try {
      // Try to fetch from public/blog folder
      const response = await fetch(`${import.meta.env.BASE_URL}blog/${slug}.md`);
      if (!response.ok) {
        return null;
      }
      
      const markdownContent = await response.text();
      return await parseMarkdown(markdownContent, slug);
    } catch (error) {
      console.error(`Error fetching blog post "${slug}":`, error);
      return null;
    }
  }

  // Fetch all blog posts (just metadata for listing)
  static async getAllPosts(): Promise<BlogListItem[]> {
    try {
      // In a real implementation, you'd have an index file or API endpoint
      // For now, we'll try to fetch a few known posts
      const knownSlugs = [
        'agent-lab',
        'repository-batch-ingest',
        'assessment-data-workbench',
        'o-zone',
        'ilpd-liver-disease-project',
        'how-to-exit-vim'
      ];
      
      const posts: BlogListItem[] = [];
      
      for (const slug of knownSlugs) {
        try {
          const post = await this.getPost(slug);
          if (post) {
            posts.push(extractBlogListItem(post));
          }
        } catch (error) {
          // Skip posts that don't exist yet
          console.warn(`Blog post "${slug}" not found, skipping...`);
        }
      }
      
      return sortPostsByDate(posts);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      return [];
    }
  }

  // Search posts by tag
  static async getPostsByTag(tag: string): Promise<BlogListItem[]> {
    const allPosts = await this.getAllPosts();
    return allPosts.filter(post => 
      post.tags.some(postTag => 
        postTag.toLowerCase() === tag.toLowerCase()
      )
    );
  }

  // Get all unique tags
  static async getAllTags(): Promise<string[]> {
    const allPosts = await this.getAllPosts();
    const tagSet = new Set<string>();
    
    allPosts.forEach(post => {
      post.tags.forEach(tag => tagSet.add(tag));
    });
    
    return Array.from(tagSet).sort();
  }
}
