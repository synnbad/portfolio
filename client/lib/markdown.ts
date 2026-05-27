import { marked } from 'marked';
import hljs from 'highlight.js';
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

function parseFrontmatter(markdownContent: string): {
  data: BlogPostFrontmatter;
  content: string;
} {
  if (!markdownContent.startsWith('---')) {
    return {
      data: {
        title: '',
        date: '',
        description: '',
        tags: [],
      },
      content: markdownContent,
    };
  }

  const endIndex = markdownContent.indexOf('---', 3);
  if (endIndex === -1) {
    return {
      data: {
        title: '',
        date: '',
        description: '',
        tags: [],
      },
      content: markdownContent,
    };
  }

  const yamlBlock = markdownContent.slice(3, endIndex).trim();
  const content = markdownContent.slice(endIndex + 3).trim();

  const data: Partial<BlogPostFrontmatter> = { tags: [] };

  for (const line of yamlBlock.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    const tagsMatch = trimmed.match(/^tags:\s*\[(.*)\]\s*$/);
    if (tagsMatch) {
      data.tags = tagsMatch[1]
        .split(',')
        .map((tag) => tag.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean);
      continue;
    }

    const keyValue = trimmed.match(/^([\w-]+):\s*(.+)$/);
    if (!keyValue) continue;

    const [, key, rawValue] = keyValue;
    let value: string | boolean = rawValue.trim();

    if (value === 'true') {
      value = true;
    } else if (value === 'false') {
      value = false;
    } else if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    (data as Record<string, unknown>)[key] = value;
  }

  return {
    data: {
      title: data.title ?? '',
      date: data.date ?? '',
      description: data.description ?? '',
      tags: data.tags ?? [],
      published: data.published,
    },
    content,
  };
}

// Calculate reading time (average 200 words per minute)
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

// Parse markdown content with frontmatter (no gray-matter — safe in browser builds)
export async function parseMarkdown(
  markdownContent: string,
  slug: string,
): Promise<BlogPost | null> {
  const { data, content } = parseFrontmatter(markdownContent);
  const frontmatter = data;

  if (frontmatter.published === false) {
    return null;
  }

  const htmlContent = await marked.parse(content);

  return {
    slug,
    title: frontmatter.title,
    date: frontmatter.date,
    description: frontmatter.description,
    tags: frontmatter.tags || [],
    content: htmlContent,
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
