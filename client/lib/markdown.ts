import { marked } from 'marked';
import hljs from 'highlight.js';
import matter from 'gray-matter';
import type { BlogPost, BlogPostFrontmatter, BlogListItem } from '@shared/blog';

// Custom renderer with syntax highlighting
const renderer = new marked.Renderer();
renderer.code = function({ text, lang }: { text: string; lang?: string }) {
  if (lang && hljs.getLanguage(lang)) {
    try {
      const highlighted = hljs.highlight(text, { language: lang }).value;
      return `<pre><code class="hljs language-${lang}">${highlighted}</code></pre>`;
    } catch (err) {
      console.warn('Syntax highlighting failed:', err);
    }
  }
  const highlighted = hljs.highlightAuto(text).value;
  return `<pre><code class="hljs">${highlighted}</code></pre>`;
};

// Configure marked
marked.setOptions({
  renderer,
  breaks: true,
  gfm: true,
});

// Calculate reading time (average 200 words per minute)
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

// Parse markdown content with frontmatter
export async function parseMarkdown(
  markdownContent: string,
  slug: string,
): Promise<BlogPost | null> {
  const { data, content } = matter(markdownContent);
  const frontmatter = data as BlogPostFrontmatter;

  if (frontmatter.published === false) {
    return null;
  }

  // Convert markdown to HTML
  const htmlContent = await marked(content);
  
  return {
    slug,
    title: frontmatter.title,
    date: frontmatter.date,
    description: frontmatter.description,
    tags: frontmatter.tags || [],
    content: htmlContent as string,
    readingTime: calculateReadingTime(content),
  };
}

// Extract blog list item from parsed post
export function extractBlogListItem(post: BlogPost): BlogListItem {
  return {
    slug: post.slug,
    title: post.title,
    date: post.date,
    description: post.description,
    tags: post.tags,
    readingTime: post.readingTime,
  };
}

// Format date for display
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Sort posts by date (newest first)
export function sortPostsByDate(posts: BlogListItem[]): BlogListItem[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}