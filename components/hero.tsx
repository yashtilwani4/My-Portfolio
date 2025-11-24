"use client"

import { motion } from "framer-motion"
import { Download, Github, Linkedin, Mail, Code2 } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"
import { SITE_CONFIG } from "@/lib/constants"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-60 animate-blob animate-glow" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-60 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-violet-400 dark:bg-violet-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-60 animate-blob animation-delay-4000 animate-glow" />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-violet-600/10 border border-purple-200 dark:border-purple-800 text-sm font-medium">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Hi, I'm{" "}
              <span className="gradient-text animate-gradient">
                {SITE_CONFIG.name}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium"
            >
              {SITE_CONFIG.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-xl"
            >
              {SITE_CONFIG.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 hover:shadow-glow transition-all duration-300" asChild>
                <a href="/resume.pdf" download="YashTilwani_Resume.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
              <Button size="lg" variant="outline" className="glass-dark hover:shadow-glow-blue transition-all duration-300" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4"
            >
              <a href={SITE_CONFIG.links.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:shadow-glow transition-all duration-300 group">
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href={SITE_CONFIG.links.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:shadow-glow-blue transition-all duration-300 group">
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href={SITE_CONFIG.links.leetcode} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:shadow-glow transition-all duration-300 group">
                <Code2 className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="p-3 rounded-full glass hover:shadow-glow-blue transition-all duration-300 group">
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="relative animate-float"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Enhanced Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 rounded-full blur-3xl opacity-40 animate-glow" />
              
              {/* Rotating Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-purple-500/20 animate-spin" style={{ animationDuration: '20s' }} />
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-violet-500 p-1 shadow-glow">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 overflow-hidden flex items-center justify-center">
                  <Image
                    src="/profile.jpg"
                    alt={SITE_CONFIG.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    priority
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="text-8xl">👨‍💻</div>';
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
