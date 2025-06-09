"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  MapPin,
  Users,
  Home,
  Leaf,
  FileText,
  ImageIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Green City Development in South Africa",
      slug: "green-city-development", // ✅ Added slug
      category: "Sustainable Development",
      description:
        "Comprehensive analysis and strategic planning for sustainable urban development incorporating green infrastructure, renewable energy systems, and climate-resilient design principles.",
      image: "/project1.jpeg",
      tools: [
        "GIS Mapping",
        "Environmental Impact Assessment",
        "Stakeholder Analysis",
        "Policy Framework",
      ],
      highlights: [
        "Reduced carbon footprint by 35%",
        "Integrated 50+ green spaces",
        "Sustainable water management system",
        "Community engagement framework",
      ],
      icon: Leaf,
      color: "green",
      reportLink: "https://docs.google.com/document/d/your-green-city-report",
    },
    {
      id: 2,
      title: "Upgrading of Informal Settlements",
      slug: "informal-settlements-upgrading", // ✅ Added slug
      category: "Community Development",
      description:
        "Strategic intervention plan for informal settlement upgrading focusing on infrastructure development, housing improvement, and community empowerment while preserving social networks.",
      image: "/project2.jpg",
      tools: [
        "Participatory Planning",
        "Social Impact Assessment",
        "Infrastructure Design",
        "Community Mapping",
      ],
      highlights: [
        "Improved living conditions for 2000+ families",
        "Enhanced access to basic services",
        "Preserved community social structures",
        "Sustainable livelihood programs",
      ],
      icon: Users,
      color: "blue",
      reportLink:
        "https://docs.google.com/document/d/your-informal-settlements-report",
    },
    {
      id: 3,
      title: "Housing Project in Turffontein",
      slug: "turffontein-housing-project", // ✅ Added slug
      category: "Housing Development",
      description:
        "Comprehensive housing development project aligned with UN Sustainable Development Goals, focusing on affordable housing solutions and integrated community facilities.",
      image: "/project3.png",
      tools: [
        "Housing Policy Analysis",
        "SDG Framework",
        "Financial Modeling",
        "Urban Design",
      ],
      highlights: [
        "500+ affordable housing units",
        "Aligned with SDG 11: Sustainable Cities",
        "Integrated community facilities",
        "Mixed-income housing model",
      ],
      icon: Home,
      color: "purple",
      reportLink: "https://docs.google.com/document/d/your-turffontein-report",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const getColorClasses = (color: string) => {
    const colors = {
      green: {
        bg: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
        border: "border-green-200 dark:border-green-800",
        icon: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400",
        badge:
          "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      },
      blue: {
        bg: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
        border: "border-blue-200 dark:border-blue-800",
        icon: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
        badge: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      },
      purple: {
        bg: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
        border: "border-purple-200 dark:border-purple-800",
        icon: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
        badge:
          "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50"
      ref={ref}
    >
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
            Featured Projects
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
          >
            Explore my academic and professional work in urban planning,
            sustainable development, and community engagement.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-1 gap-8"
        >
          {projects.map((project, index) => {
            const colorClasses = getColorClasses(project.color);
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card
                  className={`overflow-hidden bg-gradient-to-br ${colorClasses.bg} ${colorClasses.border} border-2 hover:shadow-2xl transition-all duration-500`}
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative overflow-hidden">
                      <motion.div
                        animate={{
                          scale: hoveredProject === project.id ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.5 }}
                        className="h-full"
                      >
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                      <div className="absolute top-4 left-4">
                        <Badge className={colorClasses.badge}>
                          {project.category}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <div
                          className={`p-3 rounded-full ${colorClasses.icon}`}
                        >
                          <project.icon className="h-6 w-6" />
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      <CardHeader className="p-0 mb-6">
                        <CardTitle className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
                          {project.title}
                        </CardTitle>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {project.description}
                        </p>
                      </CardHeader>

                      <CardContent className="p-0 space-y-6">
                        <div>
                          <h4 className="font-semibold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            Tools & Methods
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tools.map((tool) => (
                              <Badge
                                key={tool}
                                variant="secondary"
                                className="bg-white/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300"
                              >
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {project.highlights.map((highlight, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-slate-600 dark:text-slate-300"
                              >
                                <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex gap-3 pt-4">
                          <Button
                            asChild
                            className="bg-green-600 hover:bg-green-700 text-white flex-1"
                          >
                            <Link href={`/projects/${project.slug}`}>
                              <ExternalLink className="h-4 w-4 mr-2" />
                              View Full Report
                            </Link>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                          >
                            <Link href={`/projects/${project.slug}#gallery`}>
                              <ImageIcon className="h-4 w-4 mr-2" />
                              Gallery
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
