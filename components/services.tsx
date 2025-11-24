"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Brain, Webhook, Zap, Cloud, Lightbulb, LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import services from "@/data/services.json"

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Brain,
  Webhook,
  Zap,
  Cloud,
  Lightbulb,
}

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full magnetic hover:shadow-glow transition-all duration-500 border-gray-200 dark:border-gray-800 group glass-dark hover:border-purple-500/50">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-violet-500 flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-glow">
                      {Icon && <Icon className="h-7 w-7 text-white group-hover:scale-110 transition-transform" />}
                    </div>
                    <CardTitle className="text-xl group-hover:text-purple-500 transition-colors">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
