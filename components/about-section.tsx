"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Target, Users, Lightbulb, Clock, BarChart3 } from "lucide-react"

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    { name: "Critical Thinking", icon: Lightbulb },
    { name: "Time Management", icon: Clock },
    { name: "Regional Analysis", icon: BarChart3 },
    { name: "Research & Analytics", icon: Target },
    { name: "Public Participation", icon: Users },
    { name: "Urban Design", icon: GraduationCap },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-8"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <Card className="p-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-green-200 dark:border-green-800">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                    <GraduationCap className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Education</h3>
                    <p className="text-green-600 dark:text-green-400 font-medium">BSc Urban and Regional Planning</p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Graduate from Northwest University (2023) with a Bachelor of Science in Urban and Regional Planning.
                  My academic journey has equipped me with comprehensive knowledge in sustainable development, spatial
                  planning, and community engagement strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-blue-200 dark:border-blue-800">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Professional Focus</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-slate-600 dark:text-slate-300">
                      Sustainable Planning & Green Infrastructure
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-slate-600 dark:text-slate-300">Informal Settlement Upgrading</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-slate-600 dark:text-slate-300">Housing Development & Urban Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span className="text-slate-600 dark:text-slate-300">Community Participation & Engagement</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Core Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group"
                  >
                    <Card className="p-4 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300 cursor-pointer">
                      <CardContent className="p-0 text-center">
                        <div className="p-3 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-full w-fit mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                          <skill.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                        </div>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Mission Statement</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  "I am committed to creating sustainable, inclusive urban environments that enhance quality of life
                  while preserving our natural resources. Through innovative planning solutions and community-centered
                  approaches, I strive to build cities that work for everyone."
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
