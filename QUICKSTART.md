# Quick Start Guide

Get your portfolio up and running in 5 minutes!

## 🚀 Fast Setup

### 1. Install Dependencies (1 min)

```bash
npm install
```

### 2. Update Your Info (2 min)

Edit `lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: "Your Name",                              // ← Change this
  role: "Your Role",                              // ← Change this
  email: "your.email@example.com",                // ← Change this
  phone: "+1234567890",                           // ← Change this
  location: "Your Location",                      // ← Change this
  // ... rest stays the same for now
};
```

### 3. Run Development Server (30 sec)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

## ✅ You're Done!

Your portfolio is now running locally. You can:
- Navigate through all sections
- Toggle dark/light theme
- Test responsive design
- See all animations

## 📝 Next Steps

### Add Your Projects

Edit `data/projects.json`:

```json
[
  {
    "id": 1,
    "title": "Your Awesome Project",
    "description": "What it does",
    "image": "/projects/project.jpg",
    "tech": ["React", "Node.js"],
    "liveUrl": "https://your-project.com",
    "githubUrl": "https://github.com/you/project"
  }
]
```

### Add Your Experience

Edit `data/experience.json`:

```json
[
  {
    "id": 1,
    "company": "Your Company",
    "role": "Your Position",
    "duration": "2023 - Present",
    "highlights": [
      "What you achieved",
      "Another achievement"
    ]
  }
]
```

### Customize Services

Edit `data/services.json` to match your offerings.

## 🚀 Deploy to Vercel (2 min)

1. Push to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

Done! Your portfolio is live 🌐

## 🎨 Customization

### Change Colors

Find and replace gradient colors in components:

```tsx
// Current: blue → purple → violet
from-blue-600 via-purple-600 to-violet-600

// Change to your colors:
from-[your-color] via-[your-color] to-[your-color]
```

### Add Your Photo

Replace the emoji in `components/hero.tsx`:

```tsx
// Current
<div className="...">👨‍💻</div>

// Replace with your image
<Image src="/your-photo.jpg" alt="Your Name" ... />
```

## 📚 Full Documentation

For detailed setup and customization:
- [SETUP.md](./SETUP.md) - Complete setup guide
- [FEATURES.md](./FEATURES.md) - All features explained
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment instructions
- [README.md](./README.md) - Project overview

## 🆘 Need Help?

- Check the documentation files above
- Open an issue on GitHub
- Email: techwork.yash0604@gmail.com

## 🎯 Checklist

Before deploying:
- [ ] Updated personal information in `lib/constants.ts`
- [ ] Added your projects in `data/projects.json`
- [ ] Added your experience in `data/experience.json`
- [ ] Customized services in `data/services.json`
- [ ] Updated social media links
- [ ] Added your images to `public/` folder
- [ ] Tested on mobile and desktop
- [ ] Tested dark/light theme
- [ ] Checked all links work

## 🎉 That's It!

You now have a professional, modern portfolio website. Enjoy! 🚀
