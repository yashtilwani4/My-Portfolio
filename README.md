# 🚀 Yash Tilwani - Developer Portfolio

A **world-class, modern, animated, and fully responsive** developer portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

[Live Demo](https://yashtilwani.dev) • [Documentation](./COMPLETE_GUIDE.md) • [Quick Start](./QUICKSTART.md)

## 🚀 Features

- **Modern Design**: Clean, minimal, and premium UI with glassmorphism effects
- **Smooth Animations**: Powered by Framer Motion for seamless transitions
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Dark/Light Theme**: Toggle between themes with persistent storage
- **SEO Optimized**: Complete meta tags, Open Graph, and Twitter cards
- **Performance**: Built with Next.js 14 App Router for optimal performance
- **Type Safe**: Written in TypeScript for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Animations**: Framer Motion
- **Icons**: Lucide Icons
- **Theme**: next-themes

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yashtilwani/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # Sitemap generation
│   └── robots.ts           # Robots.txt generation
├── components/
│   ├── ui/                 # ShadCN UI components
│   ├── navbar.tsx          # Navigation bar
│   ├── hero.tsx            # Hero section
│   ├── about.tsx           # About section
│   ├── projects.tsx        # Projects showcase
│   ├── experience.tsx      # Work experience timeline
│   ├── services.tsx        # Services offered
│   ├── contact.tsx         # Contact form
│   ├── footer.tsx          # Footer
│   ├── theme-provider.tsx  # Theme context provider
│   └── theme-toggle.tsx    # Theme toggle button
├── data/
│   ├── projects.json       # Projects data
│   ├── experience.json     # Experience data
│   └── services.json       # Services data
├── lib/
│   ├── constants.ts        # Site configuration
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## 🎨 Customization

### Update Personal Information

Edit `lib/constants.ts` to update your personal information:

```typescript
export const SITE_CONFIG = {
  name: "Your Name",
  role: "Your Role",
  email: "your.email@example.com",
  // ... other fields
};
```

### Update Projects

Edit `data/projects.json` to add or modify your projects:

```json
{
  "id": 1,
  "title": "Project Name",
  "description": "Project description",
  "image": "/projects/image.jpg",
  "tech": ["Tech1", "Tech2"],
  "liveUrl": "https://...",
  "githubUrl": "https://..."
}
```

### Update Experience

Edit `data/experience.json` to update your work experience.

### Update Services

Edit `data/services.json` to modify the services you offer.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Build for Production

```bash
npm run build
npm start
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Performance

- Lighthouse Score: 95+
- Fully optimized images
- Code splitting and lazy loading
- Minimal bundle size

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Yash Tilwani - techwork.yash0604@gmail.com

Portfolio: [https://yashtilwani.dev](https://yashtilwani.dev)

---

Made with ❤️ by Yash Tilwani
