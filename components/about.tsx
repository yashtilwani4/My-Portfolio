"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { SITE_CONFIG } from "@/lib/constants"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate about creating innovative solutions and pushing the boundaries of technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                I'm a passionate developer with expertise in building scalable web applications, 
                integrating AI capabilities including Generative AI, and creating automation solutions 
                that solve real-world problems. I specialize in leveraging cutting-edge AI technologies 
                like LangChain, OpenAI, and custom machine learning models to build intelligent applications.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                With a strong foundation in the MERN stack and modern technologies like Next.js, 
                I specialize in creating seamless user experiences and robust backend systems. 
                My expertise spans from developing AI-powered chatbots and recommendation systems to 
                building full-stack applications with advanced automation workflows. My journey in tech 
                has been driven by curiosity and a constant desire to learn and innovate.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                When I'm not coding, you'll find me exploring new AI technologies, experimenting with 
                generative models, contributing to open-source projects, or sharing knowledge with the 
                developer community about the latest advancements in AI and web development.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-lg glass magnetic hover:shadow-glow-blue transition-all duration-300 group">
                <div className="text-4xl font-bold gradient-text animate-gradient group-hover:scale-110 transition-transform">20+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Projects Completed</div>
              </div>
              <div className="p-6 rounded-lg glass magnetic hover:shadow-glow transition-all duration-300 group">
                <div className="text-4xl font-bold gradient-text animate-gradient group-hover:scale-110 transition-transform">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Technologies Mastered</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SITE_CONFIG.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="p-4 rounded-lg glass magnetic text-center hover:shadow-glow transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-sm font-medium group-hover:text-purple-500 transition-colors">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
