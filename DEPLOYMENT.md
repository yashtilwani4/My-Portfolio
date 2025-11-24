# Deployment Guide

## Quick Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

That's it! Your portfolio will be live in minutes.

## Environment Variables

If you're using the contact form with email functionality, add these environment variables in Vercel:

- `RESEND_API_KEY` - Your Resend API key
- `CONTACT_EMAIL` - Email address to receive contact form submissions

## Custom Domain

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## Performance Optimization

The site is already optimized with:
- Static generation for fast loading
- Image optimization
- Code splitting
- Minimal JavaScript bundle

## SEO Checklist

- ✅ Meta tags configured
- ✅ Open Graph tags
- ✅ Twitter cards
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Semantic HTML
- ✅ Mobile responsive

## Post-Deployment

1. Test all links and forms
2. Verify theme toggle works
3. Check mobile responsiveness
4. Test on different browsers
5. Submit sitemap to Google Search Console
6. Add Google Analytics (optional)

## Monitoring

Consider adding:
- Google Analytics for traffic monitoring
- Vercel Analytics for performance insights
- Sentry for error tracking (optional)
