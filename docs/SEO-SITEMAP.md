# SEO & Sitemap Documentation

## Overview
This document explains the SEO setup and sitemap configuration for your portfolio website.

## Files Created/Modified

### 1. Sitemap (`/public/sitemap.xml`)
- **Purpose**: Helps search engines index your site effectively
- **Location**: `https://sinbadadjuik.com/sitemap.xml`
- **Auto-generated**: Yes, regenerated on each build

### 2. Robots.txt (`/public/robots.txt`)
- **Purpose**: Tells search engines how to crawl your site
- **Location**: `https://sinbadadjuik.com/robots.txt`
- **References**: Points to your sitemap location

### 3. Sitemap Generator (`/scripts/generate-sitemap.js`)
- **Purpose**: Automatically generates sitemap with current timestamps
- **Usage**: `npm run sitemap`
- **Auto-runs**: Before each build via `prebuild` script

### 4. Enhanced SEO Meta Tags (`/index.html`)
- **Primary meta tags**: Title, description, keywords
- **Open Graph**: Facebook/social media sharing
- **Twitter Cards**: Enhanced Twitter sharing
- **Structured Data**: JSON-LD for rich search results

## Current Site Structure

Your sitemap includes these pages:
- **Homepage** (`/`) - Priority: 1.0
- **Projects** (`/#/projects`) - Priority: 0.9
- **Resume** (`/#/resume`) - Priority: 0.8
- **Certifications** (`/#/certifications`) - Priority: 0.8
- **Contact** (`/#/contact`) - Priority: 0.7
- **Resume PDF** (`/Sinbad_Adjuik_Resume.pdf`) - Priority: 0.6

## NPM Scripts Added

```json
{
  "sitemap": "node scripts/generate-sitemap.js",
  "prebuild": "npm run sitemap"
}
```

- `npm run sitemap`: Manually regenerate sitemap
- `prebuild`: Automatically runs before each build

## Maintenance

### Adding New Pages
1. Edit `/scripts/generate-sitemap.js`
2. Add new page to the `pages` array:
   ```javascript
   {
     url: '/new-page',
     priority: '0.8',
     changefreq: 'monthly',
     lastmod: currentDate
   }
   ```
3. Run `npm run sitemap` or build the project

### Updating Priorities
- **1.0**: Homepage (most important)
- **0.9**: Main content pages (Projects)
- **0.8**: Important pages (Resume, Certifications)
- **0.7**: Secondary pages (Contact)
- **0.6**: Documents/Files

### Change Frequencies
- **weekly**: Homepage, frequently updated content
- **monthly**: Projects, resume, certifications
- **yearly**: Contact info, static content

## SEO Benefits

1. **Search Engine Discovery**: Sitemap helps Google/Bing find all pages
2. **Social Media Sharing**: Open Graph tags for rich previews
3. **Structured Data**: Enhanced search results with person schema
4. **Mobile Optimization**: Responsive meta viewport
5. **Canonical URLs**: Prevents duplicate content issues

## Monitoring

### Google Search Console
1. Submit your sitemap: `https://sinbadadjuik.com/sitemap.xml`
2. Monitor indexing status
3. Check for crawl errors

### Testing Tools
- Google Rich Results Test: Test structured data
- Facebook Sharing Debugger: Test Open Graph tags
- Twitter Card Validator: Test Twitter meta tags

## Deployment

Your sitemap will be automatically:
1. Generated before each build (`prebuild` script)
2. Included in the `/public` folder
3. Deployed to GitHub Pages
4. Available at `https://sinbadadjuik.com/sitemap.xml`

## Next Steps

1. **Submit to Google Search Console**
2. **Submit to Bing Webmaster Tools**
3. **Monitor search performance**
4. **Update sitemap when adding new content**

The sitemap is now fully automated and will stay up-to-date with each deployment!
