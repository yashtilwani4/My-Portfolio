"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function BlogPost() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Jan 15, 2024
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                8 min read
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">
              Building Scalable Web Applications with Next.js 14
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {["Next.js", "React", "Web Development"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Next.js 14 introduces powerful features that make building scalable web applications easier than ever. 
                In this article, we'll explore the App Router, Server Components, and best practices for creating 
                high-performance applications.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4">Introduction</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The web development landscape is constantly evolving, and Next.js 14 brings significant improvements 
                that help developers build faster, more efficient applications. Let's dive into the key features.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4">Server Components</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Server Components are a game-changer for React applications. They allow you to render components on 
                the server, reducing the JavaScript bundle size sent to the client and improving initial page load times.
              </p>

              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-6">
                <code>{`// app/page.tsx
export default async function Page() {
  const data = await fetch('https://api.example.com/data')
  const json = await data.json()
  
  return <div>{json.title}</div>
}`}</code>
              </pre>

              <h2 className="text-3xl font-bold mt-8 mb-4">App Router Benefits</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Improved performance with automatic code splitting</li>
                <li>Better SEO with server-side rendering by default</li>
                <li>Simplified data fetching with async/await</li>
                <li>Enhanced developer experience with file-based routing</li>
              </ul>

              <h2 className="text-3xl font-bold mt-8 mb-4">Best Practices</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                When building with Next.js 14, keep these best practices in mind:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Use Server Components by default, Client Components when needed</li>
                <li>Implement proper error boundaries for better error handling</li>
                <li>Optimize images using the Next.js Image component</li>
                <li>Leverage caching strategies for improved performance</li>
              </ol>

              <h2 className="text-3xl font-bold mt-8 mb-4">Conclusion</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Next.js 14 provides a solid foundation for building modern web applications. By following these 
                practices and leveraging the new features, you can create fast, scalable, and maintainable applications.
              </p>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
