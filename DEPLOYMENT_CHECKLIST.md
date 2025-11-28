# ✅ Pre-Deployment Checklist

## Quick Start (5 minutes)

```bash
# 1. Install dependencies
npm install

# 2. Run build to check for errors
npm run build

# 3. Start local server to test
npm run start
```

Then visit: `http://localhost:3000`

---

## Configuration Checklist

### 🔴 CRITICAL - Must Do Before Deployment

-   [ ] **Google Analytics ID**

    -   [ ] Go to [analytics.google.com](https://analytics.google.com)
    -   [ ] Create GA4 property for your domain
    -   [ ] Copy Measurement ID (format: `G-XXXXXXXXXX`)
    -   [ ] Replace 2 instances of `GA_MEASUREMENT_ID` in `src/app/layout.tsx`

-   [ ] **Google Search Console Verification**

    -   [ ] Go to [search.google.com/search-console](https://search.google.com/search-console)
    -   [ ] Add property for your domain
    -   [ ] Get verification code
    -   [ ] Replace `google-site-verification-code` in `src/app/layout.tsx` metadata

-   [ ] **OG Image**
    -   [ ] Verify `/public/og-image.png` exists
    -   [ ] Size: 1200x630 pixels
    -   [ ] Optimized (< 300KB)
    -   [ ] Shows portfolio preview

### 🟡 HIGH PRIORITY - Strongly Recommended

-   [ ] **Image Optimization**

    -   [ ] Compress all images in `/public/projects/`
    -   [ ] Target size: < 200KB per image
    -   [ ] Tools: TinyPNG, Cloudinary, ImageOptim
    -   [ ] Formats: JPG/WebP (for photos)

-   [ ] **Build & Local Testing**

    -   [ ] `npm run build` - completes without errors
    -   [ ] `npm run start` - runs without warnings
    -   [ ] Localhost loads in < 2s
    -   [ ] All images display correctly
    -   [ ] Dark mode works properly
    -   [ ] Responsive design on mobile

-   [ ] **Lighthouse Audit**

    -   [ ] Open Chrome DevTools (F12)
    -   [ ] Lighthouse → Generate Report
    -   [ ] Performance: > 85
    -   [ ] Accessibility: > 85
    -   [ ] Best Practices: > 85
    -   [ ] SEO: > 95

-   [ ] **Mobile Testing**
    -   [ ] Chrome DevTools → Device Toolbar
    -   [ ] Test on iPhone 12 / Pixel 5
    -   [ ] Tap targets > 44px
    -   [ ] No horizontal scroll
    -   [ ] Images load properly

### 🟢 MEDIUM PRIORITY - Good To Have

-   [ ] **Sitemap Submission**

    -   [ ] Google Search Console
    -   [ ] Add your sitemap.xml URL
    -   [ ] Monitor indexing status

-   [ ] **robots.txt Verification**

    -   [ ] Visit `yourdomain.com/robots.txt`
    -   [ ] Verify content loads correctly
    -   [ ] Check crawl rules

-   [ ] **OpenGraph Testing**

    -   [ ] Use [ogp.me](https://ogp.me) validator
    -   [ ] OR paste URL in Facebook/LinkedIn share dialog
    -   [ ] Verify image and description display

-   [ ] **Twitter Card Testing**

    -   [ ] Use [Twitter Card Validator](https://cards-dev.twitter.com/validator)
    -   [ ] Paste your domain URL
    -   [ ] Verify large image format displays

-   [ ] **Schema.org Testing**
    -   [ ] Use [Google Rich Results Test](https://search.google.com/test/rich-results)
    -   [ ] Paste your domain URL
    -   [ ] Verify Person schema appears

### 🔵 LOW PRIORITY - Nice To Have

-   [ ] **Performance Monitoring**

    -   [ ] Set up Google Analytics alerts
    -   [ ] Configure Core Web Vitals tracking
    -   [ ] Create dashboard for metrics

-   [ ] **SEO Monitoring**

    -   [ ] Add Search Console notifications
    -   [ ] Monitor search rankings
    -   [ ] Track click-through rates

-   [ ] **Analytics Setup**
    -   [ ] Create conversion goals
    -   [ ] Set up event tracking
    -   [ ] Configure funnels

---

## Testing Commands

```bash
# Install dependencies
npm install

# Development mode
npm run dev
# Visit: http://localhost:3000

# Production build
npm run build

# Production server
npm run start
# Visit: http://localhost:3000

# Check for TypeScript errors
npm run build

# Check for security issues
npm audit

# Check file sizes
npm run build
# Check .next folder size
du -sh .next
```

---

## File Changes Made

### Configuration Files

-   ✅ `next.config.ts` - Performance & security
-   ✅ `package.json` - Added web-vitals

### Application Files

-   ✅ `src/app/layout.tsx` - Metadata & GA
-   ✅ `src/app/page.tsx` - Page metadata
-   ✅ `src/app/globals.css` - CSS optimization
-   ✅ `src/app/_components/projects.tsx` - Image optimization

### New Utility Files

-   ✅ `src/lib/analytics.ts` - Web Vitals tracking
-   ✅ `src/lib/metadata.ts` - Metadata utilities
-   ✅ `src/lib/performance-utils.ts` - Performance helpers

### Public Files

-   ✅ `public/robots.txt` - Search engine rules

### Documentation

-   ✅ `SEO_PERFORMANCE_OPTIMIZATIONS.md` - Detailed guide
-   ✅ `IMPLEMENTATION_GUIDE.md` - Setup instructions
-   ✅ `OPTIMIZATION_SUMMARY.md` - Overview
-   ✅ `DEPLOYMENT_CHECKLIST.md` - This file

---

## Deployment Steps

### 1. Local Verification (10 minutes)

```bash
npm install
npm run build
npm run start
# Test at http://localhost:3000
```

### 2. Configuration (5 minutes)

-   Update GA ID in `src/app/layout.tsx`
-   Update GSC verification code
-   Verify OG image exists

### 3. Final Build (2 minutes)

```bash
npm run build
```

### 4. Deploy to Production

-   Push to your repository
-   Deploy via your hosting (Vercel, Netlify, etc.)

### 5. Post-Deployment (5 minutes)

-   Wait 5 minutes for site to be live
-   Test production URL in browser
-   Submit sitemap to Google Search Console
-   Run Lighthouse on production URL

---

## Performance Targets

| Metric           | Target  | How to Check                 |
| ---------------- | ------- | ---------------------------- |
| Lighthouse Score | 90+     | Chrome DevTools → Lighthouse |
| FCP              | < 1.5s  | PageSpeed Insights           |
| LCP              | < 2.5s  | PageSpeed Insights           |
| CLS              | < 0.1   | PageSpeed Insights           |
| INP              | < 200ms | PageSpeed Insights           |
| SEO Score        | 95+     | Lighthouse audit             |
| Mobile Score     | 85+     | PageSpeed Insights           |

---

## Troubleshooting

### Build Fails

```bash
# Clear cache and try again
rm -rf .next
npm run build
```

### Port 3000 Already in Use

```bash
# Use different port
npm run start -- -p 3001
```

### Images Not Loading

-   Check `/public/projects/` exists
-   Verify image paths in `projects/data.ts`
-   Ensure images are < 200KB

### Analytics Not Tracking

-   Verify GA_MEASUREMENT_ID is correct
-   Check GA property is created
-   Allow 24-48 hours for data to appear
-   Check browser console for errors

### Lighthouse Errors

-   Run: `npm run build`
-   Delete `.next` folder
-   Run: `npm run build` again

---

## Support URLs

-   **Docs**: SEO_PERFORMANCE_OPTIMIZATIONS.md
-   **Setup**: IMPLEMENTATION_GUIDE.md
-   **Summary**: OPTIMIZATION_SUMMARY.md
-   **Google**: https://developers.google.com/search
-   **Analytics**: https://analytics.google.com
-   **Search Console**: https://search.google.com/search-console

---

## Final Checklist Before Going Live

-   [ ] All dependencies installed (`npm install`)
-   [ ] No build errors (`npm run build`)
-   [ ] Production build successful
-   [ ] GA measurement ID configured
-   [ ] GSC verification code configured
-   [ ] OG image exists and optimized
-   [ ] All project images optimized
-   [ ] Lighthouse score > 85 in all categories
-   [ ] Mobile responsive verified
-   [ ] Dark mode tested and working
-   [ ] All links tested and working
-   [ ] SEO title and description updated
-   [ ] Robots.txt verified
-   [ ] Sitemap accessible
-   [ ] Ready to deploy ✅

---

**Total Setup Time**: ~30 minutes including testing
**Status**: ✅ Ready for Deployment

**Next**: Run `npm install` and follow the deployment steps above.
