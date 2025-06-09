"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react"

const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "063 890 8334",
      href: "tel:+27638908334",
      color: "green",
    },
    {
      icon: Mail,
      label: "Email",
      value: "nomamokhanye72@gmail.com",
      href: "mailto:nomamokhanye72@gmail.com",
      color: "blue",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "South Africa",
      href: "#",
      color: "purple",
    },
  ]

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
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

  const getColorClasses = (color: string) => {
    const colors = {
      green: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400",
      blue: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
      purple: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
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
            Let's Connect
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-8"
          />
          <motion.p variants={itemVariants} className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Ready to collaborate on sustainable urban planning projects? Let's discuss how we can create better
            communities together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <Card className="p-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-green-200 dark:border-green-800">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold text-slate-800 dark:text-white">Get In Touch</CardTitle>
                <p className="text-slate-600 dark:text-slate-300">
                  I'm always open to discussing new opportunities, collaborations, and innovative urban planning
                  projects.
                </p>
              </CardHeader>
              <CardContent className="p-0 space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-white/70 dark:bg-slate-700/70 hover:bg-white dark:hover:bg-slate-700 transition-all duration-300 group"
                  >
                    <div
                      className={`p-3 rounded-full ${getColorClasses(info.color)} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800 dark:text-white">{info.label}</p>
                      <p className="text-slate-600 dark:text-slate-300">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Connect on Social Media</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5 text-slate-600 dark:text-slate-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300" />
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <Card className="p-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-blue-200 dark:border-blue-800">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold text-slate-800 dark:text-white">Send a Message</CardTitle>
                <p className="text-slate-600 dark:text-slate-300">
                  Have a project in mind? Fill out the form below and I'll get back to you soon.
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-white/70 dark:bg-slate-700/70 border-slate-300 dark:border-slate-600 focus:border-green-500 dark:focus:border-green-400"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-white/70 dark:bg-slate-700/70 border-slate-300 dark:border-slate-600 focus:border-green-500 dark:focus:border-green-400"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-white/70 dark:bg-slate-700/70 border-slate-300 dark:border-slate-600 focus:border-green-500 dark:focus:border-green-400"
                      placeholder="Project collaboration, consultation, etc."
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-white/70 dark:bg-slate-700/70 border-slate-300 dark:border-slate-600 focus:border-green-500 dark:focus:border-green-400 resize-none"
                      placeholder="Tell me about your project or how we can work together..."
                    />
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
