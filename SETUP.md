# Portfolio Setup Guide

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git for version control

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- ShadCN UI components
- Lucide Icons
- next-themes

### 2. Configure Your Information

#### Update Site Configuration

Edit `lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: "Your Name",
  role: "Your Role",
  email: "your.email@example.com",
  phone: "+1234567890",
  location: "Your Location",
  description: "Your description",
  url: "https://yourwebsite.com",
  ogImage: "/og-image.jpg",
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
  skills: [
    // Add your skills here
  ]
};
```

#### Update Projects

Edit `data/projects.json` to add your projects:

```json
[
  {
    "id": 1,
    "title": "Your Project",
    "description": "Project description",
    "image": "/projects/project.jpg",
    "tech": ["Tech1", "Tech2"],
    "liveUrl": "https://project-url.com",
    "githubUrl": "https://github.com/you/project"
  }
]
```

#### Update Experience

Edit `data/experience.json`:

```json
[
  {
    "id": 1,
    "company": "Company Name",
    "role": "Your Role",
    "duration": "2023 - Present",
    "highlights": [
      "Achievement 1",
      "Achievement 2"
    ]
  }
]
```

#### Update Services

Edit `data/services.json` to customize your services.

### 3. Add Your Images

Place your images in the `public` folder:

```
public/
├── projects/
│   ├── project1.jpg
│   ├── project2.jpg
│   └── ...
├── og-image.jpg
└── favicon.ico
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## Customization

### Theme Colors

The portfolio uses a blue → purple → violet gradient. To change colors, update the gradient classes in components:

```tsx
// Current gradient
className="bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600"

// Change to your colors
className="bg-gradient-to-r from-[color1] via-[color2] to-[color3]"
```

### Animations

Framer Motion animations can be customized in each component. Example:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  {/* Content */}
</motion.div>
```

### Adding New Sections

1. Create a new component in `components/`
2. Import and add it to `app/page.tsx`
3. Add navigation link in `lib/constants.ts`

## Contact Form Setup (Optional)

To enable email functionality for the contact form:

### Using Resend

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Install Resend:

```bash
npm install resend
```

4. Create API route `app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL!,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
```

5. Update `components/contact.tsx` to use the API route
6. Add environment variables in `.env.local`:

```
RESEND_API_KEY=your_api_key
CONTACT_EMAIL=your.email@example.com
```

## Blog Posts

To add new blog posts:

1. Add post metadata to `app/blog/page.tsx`
2. Create a new page in `app/blog/[slug]/`
3. Or use MDX files for content management

## SEO Optimization

### Update Metadata

Edit `app/layout.tsx` to update SEO metadata:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Role",
  description: "Your description",
  // ... other metadata
};
```

### Generate Sitemap

The sitemap is automatically generated at `/sitemap.xml`. Update `app/sitemap.ts` if needed.

### Robots.txt

The robots.txt is automatically generated. Update `app/robots.ts` if needed.

## Performance Tips

1. **Optimize Images**: Use WebP format and proper sizing
2. **Lazy Loading**: Components use Framer Motion's `useInView` for lazy loading
3. **Code Splitting**: Next.js handles this automatically
4. **Caching**: Configure caching in `next.config.ts`

## Troubleshooting

### Build Errors

If you encounter build errors:

```bash
# Clear cache
rm -rf .next
npm run build
```

### Type Errors

```bash
# Regenerate types
npm run build
```

### Styling Issues

Make sure Tailwind CSS is properly configured in `tailwind.config.ts`.

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [ShadCN UI Documentation](https://ui.shadcn.com/)

## Support

For issues or questions, please open an issue on GitHub or contact me at techwork.yash0604@gmail.com.
