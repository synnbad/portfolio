#!/usr/bin/env node

/**
 * Sitemap Generator for Portfolio Site
 * Automatically generates sitemap.xml with current timestamp
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://sinbadadjuik.com';
const currentDate = new Date().toISOString().split('T')[0];
const PUBLIC_DIR = path.join(__dirname, '../public');
const BLOG_DIR = path.join(PUBLIC_DIR, 'blog');

// Define your site structure
const pages = [
  {
    url: '/',
    priority: '1.0',
    changefreq: 'weekly',
    lastmod: currentDate
  },
  {
    url: '/#/projects',
    priority: '0.9',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/#/resume',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/#/certifications',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate
  },
  {
    url: '/#/contact',
    priority: '0.7',
    changefreq: 'yearly',
    lastmod: currentDate
  },
  {
    url: '/#/blog',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: currentDate
  },
  {
    url: '/Sinbad_Adjuik_Resume.pdf',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate
  }
];

// Generate XML sitemap
const generateSitemap = () => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  
`;

  // Add static pages
  pages.forEach(page => {
    sitemap += `  <url>
    <loc>${DOMAIN}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
  
`;
  });

  // Add blog posts
  if (fs.existsSync(BLOG_DIR)) {
    const files = fs.readdirSync(BLOG_DIR).filter(file => file.endsWith('.md'));
    
    files.forEach(file => {
      try {
        const filePath = path.join(BLOG_DIR, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContent);
        const slug = file.replace('.md', '');
        
        // Use date from frontmatter or file mtime
        let lastMod = currentDate;
        if (data.date) {
            lastMod = new Date(data.date).toISOString().split('T')[0];
        } else {
            lastMod = new Date(fs.statSync(filePath).mtime).toISOString().split('T')[0];
        }
        
        sitemap += `  <url>
    <loc>${DOMAIN}/#/blog/${slug}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
`;
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    });
  }

  sitemap += `</urlset>`;

  return sitemap;
};

// Write sitemap to public folder
const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
const sitemapContent = generateSitemap();

try {
  fs.writeFileSync(outputPath, sitemapContent, 'utf8');
  console.log('✅ Sitemap generated successfully!');
  console.log(`📄 Sitemap saved to: ${outputPath}`);
  console.log(`🌐 Accessible at: ${DOMAIN}/sitemap.xml`);
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
}
