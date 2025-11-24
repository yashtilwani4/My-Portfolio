# Project Structure

Complete overview of the portfolio project structure.

## 📁 Directory Structure

```
portfolio/
│
├── app/                          # Next.js 14 App Router
│   ├── blog/                     # Blog section
│   │   ├── [slug]/              # Dynamic blog post pages
│   │   │   └── page.tsx         # Individual blog post
│   │   └── page.tsx             # Blog listing page
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page (main portfolio)
│   ├── globals.css              # Global styles and animations
│   ├── sitemap.ts               # Auto-generated sitemap
│   └── robots.ts                # Robots.txt configuration
│
├── components/                   # React components
│   ├── ui/                      # ShadCN UI components
│   │   ├── button.tsx           # Button component
│   │   ├── card.tsx             # Card component
│   │   ├── input.tsx            # Input component
│   │   └── textarea.tsx         # Textarea component
│   ├── about.tsx                # About section
│   ├── contact.tsx              # Contact section with form
│   ├── experience.tsx           # Experience timeline
│   ├── footer.tsx               # Footer component
│   ├── hero.tsx                 # Hero/landing section
│   ├── navbar.tsx               # Navigation bar
│   ├── projects.tsx             # Projects showcase
│   ├── services.tsx             # Services section
│   ├── theme-provider.tsx       # Theme context provider
│   └── theme-toggle.tsx         # Dark/light mode toggle
│
├── data/                        # JSON data files
│   ├── projects.json            # Projects data
│   ├── experience.json          # Work experience data
│   └── services.json            # Services data
│
├── lib/                         # Utility functions
│   ├── constants.ts             # Site configuration & constants
│   └── utils.ts                 # Utility functions (cn helper)
│
├── public/                      # Static assets
│   ├── projects/                # Project images
│   │   └── .gitkeep            # Placeholder
│   └── favicon.ico              # Site favicon
│
├── .env.example                 # Environment variables template
├── .gitignore                   # Git ignore rules
├── components.json              # ShadCN UI configuration
├── DEPLOYMENT.md                # Deployment guide
├── FEATURES.md                  # Features documentation
├── mdx-components.tsx           # MDX components configuration
├── next.config.ts               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── PROJECT_STRUCTURE.md         # This file
├── QUICKSTART.md                # Quick start guide
├── README.md                    # Project overview
├── SETUP.md                     # Detailed setup guide
├── tailwind.config.ts           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

## 🎯 Key Files Explained

### Configuration Files

#### `next.config.ts`
- Next.js configuration
- MDX support setup
- Page extensions configuration

#### `tailwind.config.ts`
- Tailwind CSS configuration
- Custom theme settings
- Plugin configurations

#### `tsconfig.json`
- TypeScript compiler options
- Path aliases configuration
- Module resolution settings

#### `components.json`
- ShadCN UI configuration
- Component styling preferences
- Import aliases

### Application Files

#### `app/layout.tsx`
- Root layout component
- SEO metadata configuration
- Theme provider setup
- Font configuration

#### `app/page.tsx`
- Main portfolio page
- Imports all section components
- Orchestrates the layout

#### `app/globals.css`
- Tailwind CSS imports
- Custom CSS variables
- Animation keyframes
- Global styles

### Component Files

#### Section Components
Each section component follows this pattern:
- Uses Framer Motion for animations
- Implements scroll reveal effects
- Fully responsive design
- Dark mode support

**Components:**
- `hero.tsx` - Landing section with CTA
- `about.tsx` - About me and skills
- `projects.tsx` - Project showcase
- `experience.tsx` - Work timeline
- `services.tsx` - Services offered
- `contact.tsx` - Contact form

#### Layout Components
- `navbar.tsx` - Sticky navigation with scroll spy
- `footer.tsx` - Footer with links
- `theme-toggle.tsx` - Theme switcher

### Data Files

#### `data/projects.json`
```json
{
  "id": number,
  "title": string,
  "description": string,
  "image": string,
  "tech": string[],
  "liveUrl": string,
  "githubUrl": string
}
```

#### `data/experience.json`
```json
{
  "id": number,
  "company": string,
  "role": string,
  "duration": string,
  "highlights": string[]
}
```

#### `data/services.json`
```json
{
  "id": number,
  "title": string,
  "description": string,
  "icon": string
}
```

### Library Files

#### `lib/constants.ts`
- Site configuration object
- Navigation links
- Personal information
- Social media links
- Skills array

#### `lib/utils.ts`
- `cn()` function for class merging
- Utility helper functions

## 🔄 Data Flow

```
JSON Data Files (data/)
    ↓
Components (components/)
    ↓
Page (app/page.tsx)
    ↓
Layout (app/layout.tsx)
    ↓
Browser
```

## 🎨 Styling Architecture

```
Tailwind CSS (tailwind.config.ts)
    ↓
Global Styles (app/globals.css)
    ↓
Component Styles (inline Tailwind classes)
    ↓
ShadCN UI Components (components/ui/)
```

## 🚀 Build Process

```
Source Files (TypeScript/TSX)
    ↓
TypeScript Compilation
    ↓
Next.js Build
    ↓
Optimization (minification, code splitting)
    ↓
Static Files (.next/)
    ↓
Deployment
```

## 📦 Dependencies

### Core Dependencies
- `next` - React framework
- `react` - UI library
- `react-dom` - React DOM renderer
- `typescript` - Type safety

### UI Dependencies
- `tailwindcss` - Utility-first CSS
- `framer-motion` - Animation library
- `lucide-react` - Icon library
- `next-themes` - Theme management

### Component Dependencies
- `@radix-ui/*` - Accessible UI primitives
- `class-variance-authority` - Component variants
- `clsx` - Class name utility
- `tailwind-merge` - Tailwind class merging

### Content Dependencies
- `@next/mdx` - MDX support
- `@mdx-js/loader` - MDX loader
- `@mdx-js/react` - MDX React integration

## 🛠️ Development Workflow

1. **Start Development Server**
   ```bash
   npm run dev
   ```

2. **Make Changes**
   - Edit components in `components/`
   - Update data in `data/`
   - Modify styles in component files

3. **Test Changes**
   - Check in browser at localhost:3000
   - Test responsive design
   - Test dark/light theme
   - Check animations

4. **Build for Production**
   ```bash
   npm run build
   ```

5. **Deploy**
   - Push to GitHub
   - Deploy on Vercel/Netlify

## 📝 Adding New Features

### Add a New Section

1. Create component in `components/new-section.tsx`
2. Import in `app/page.tsx`
3. Add to navigation in `lib/constants.ts`
4. Create data file if needed in `data/`

### Add a New Page

1. Create folder in `app/new-page/`
2. Add `page.tsx` in the folder
3. Add navigation link
4. Update sitemap if needed

### Add New Data

1. Create JSON file in `data/`
2. Define TypeScript interface
3. Import in component
4. Map over data in component

## 🔍 File Naming Conventions

- **Components**: PascalCase (e.g., `HeroSection.tsx`)
- **Utilities**: camelCase (e.g., `utils.ts`)
- **Data Files**: kebab-case (e.g., `projects.json`)
- **Pages**: lowercase (e.g., `page.tsx`)
- **Documentation**: UPPERCASE (e.g., `README.md`)

## 🎯 Best Practices

1. **Component Organization**
   - One component per file
   - Group related components
   - Use index files for exports

2. **Data Management**
   - Keep data separate from components
   - Use TypeScript interfaces
   - Validate data structure

3. **Styling**
   - Use Tailwind utilities
   - Keep styles close to components
   - Use consistent spacing

4. **Performance**
   - Lazy load components
   - Optimize images
   - Minimize bundle size

## 📚 Related Documentation

- [README.md](./README.md) - Project overview
- [QUICKSTART.md](./QUICKSTART.md) - Quick start guide
- [SETUP.md](./SETUP.md) - Detailed setup
- [FEATURES.md](./FEATURES.md) - Feature list
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide
