export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  content: string;
  readingTime: number;
}

export interface BlogPostFrontmatter {
  title: string;
  date: string;
  description: string;
  tags: string[];
  published?: boolean;
}

export interface BlogListItem {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readingTime: number;
}