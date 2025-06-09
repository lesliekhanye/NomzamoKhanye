"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  User,
  Target,
  Lightbulb,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  FileText,
  Download,
  Share2,
  MailIcon,
} from "lucide-react";
import type { ProjectData } from "@/lib/projects-data";
import ProjectGallery from "@/components/project-gallery";

interface ProjectDetailProps {
  project: ProjectData;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const router = useRouter();

  const getColorClasses = (color: string) => {
    const colors = {
      green: {
        bg: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
        border: "border-green-200 dark:border-green-800",
        accent: "text-green-600 dark:text-green-400",
        badge:
          "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      },
      blue: {
        bg: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
        border: "border-blue-200 dark:border-blue-800",
        accent: "text-blue-600 dark:text-blue-400",
        badge: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      },
      purple: {
        bg: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
        border: "border-purple-200 dark:border-purple-800",
        accent: "text-purple-600 dark:text-purple-400",
        badge:
          "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      },
    };
    return colors[color as keyof typeof colors];
  };

  const colorClasses = getColorClasses(project.color);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 sm:mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="mb-4 sm:mb-6 hover:bg-green-100 dark:hover:bg-green-900 text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>

          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Mobile-first layout - image first on mobile */}
            <div className="block lg:hidden">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl mb-6"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 sm:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              <div className="lg:w-2/3">
                <Badge
                  className={`${colorClasses.badge} mb-3 sm:mb-4 text-xs sm:text-sm`}
                >
                  {project.category}
                </Badge>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-3 sm:mb-4 leading-tight">
                  {project.title}
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-4 sm:mb-6">
                  {project.fullDescription}
                </p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                    <User className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span className="truncate">{project.client}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button className="bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base py-2 sm:py-3">
                    <MailIcon className="h-4 w-4 mr-2" />
                    Email For Full Report
                  </Button>
                </div>
              </div>

              {/* Desktop image */}
              <div className="hidden lg:block lg:w-1/3">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-2xl shadow-2xl"
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Tabs defaultValue="overview" className="space-y-6 sm:space-y-8">
            {/* Mobile-optimized tabs */}
            <div className="overflow-x-auto">
              <TabsList className="grid grid-cols-6 min-w-[480px] sm:min-w-0 sm:w-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-xs sm:text-sm">
                <TabsTrigger value="overview" className="px-2 sm:px-4">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="methodology" className="px-2 sm:px-4">
                  Method
                </TabsTrigger>
                <TabsTrigger value="findings" className="px-2 sm:px-4">
                  Findings
                </TabsTrigger>
                <TabsTrigger value="gallery" className="px-2 sm:px-4">
                  Gallery
                </TabsTrigger>
                <TabsTrigger value="report" className="px-2 sm:px-4">
                  Report
                </TabsTrigger>
                <TabsTrigger value="impact" className="px-2 sm:px-4">
                  Impact
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="overview" className="space-y-6 sm:space-y-8">
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                <Card
                  className={`bg-gradient-to-br ${colorClasses.bg} ${colorClasses.border} border-2`}
                >
                  <CardHeader className="pb-3 sm:pb-6">
                    <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                      <Target className="h-5 w-5 sm:h-6 sm:w-6" />
                      Project Objectives
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 sm:space-y-3">
                      {project.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-slate-700 dark:text-slate-300">
                            {objective}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <CardHeader className="pb-3 sm:pb-6">
                    <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                      Key Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 sm:space-y-3">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-slate-700 dark:text-slate-300">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <FileText className="h-5 w-5 sm:h-6 sm:w-6" />
                    Tools & Technologies Used
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.tools.map((tool) => (
                      <Badge
                        key={tool}
                        variant="secondary"
                        className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 sm:px-3 py-1 text-xs sm:text-sm"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800">
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />
                    UN Sustainable Development Goals Alignment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {project.sdgs.map((sdg) => (
                      <div
                        key={sdg}
                        className="p-3 sm:p-4 bg-white/70 dark:bg-slate-800/70 rounded-lg border border-green-200 dark:border-green-700"
                      >
                        <p className="font-medium text-sm sm:text-base text-slate-800 dark:text-white">
                          {sdg}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="methodology" className="space-y-6 sm:space-y-8">
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <CardHeader className="pb-3 sm:pb-6">
                    <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                      <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6" />
                      Research Methodology
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 sm:space-y-4">
                      {project.methodology.map((method, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">
                            {index + 1}
                          </div>
                          <span className="text-sm sm:text-base text-slate-700 dark:text-slate-300">
                            {method}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <CardHeader className="pb-3 sm:pb-6">
                    <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                      <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6" />
                      Challenges Addressed
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 sm:space-y-3">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-slate-700 dark:text-slate-300">
                            {challenge}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="findings" className="space-y-6 sm:space-y-8">
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <CardHeader className="pb-3 sm:pb-6">
                    <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                      <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6" />
                      Solutions Implemented
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 sm:space-y-3">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-slate-700 dark:text-slate-300">
                            {solution}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <CardHeader className="pb-3 sm:pb-6">
                    <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                      <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />
                      Project Outcomes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 sm:space-y-3">
                      {project.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-slate-700 dark:text-slate-300">
                            {outcome}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <Target className="h-5 w-5 sm:h-6 sm:w-6" />
                    Recommendations for Future Implementation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
                    {project.recommendations.map((recommendation, index) => (
                      <div
                        key={index}
                        className="p-3 sm:p-4 bg-white/70 dark:bg-slate-800/70 rounded-lg border border-purple-200 dark:border-purple-700"
                      >
                        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300">
                          {recommendation}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="gallery">
              <ProjectGallery images={project.gallery} title={project.title} />
            </TabsContent>

            <TabsContent value="report" className="space-y-6 sm:space-y-8">
              <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <FileText className="h-5 w-5 sm:h-6 sm:w-6" />
                    Full Project Report
                  </CardTitle>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2">
                    Comprehensive documentation of the project methodology,
                    findings, and recommendations.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6 sm:space-y-8">
                  {project.reportSections.map((section, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-green-600 pl-4 sm:pl-6"
                    >
                      <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white mb-2 sm:mb-3">
                        {section.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  ))}

                  <div className="pt-6 sm:pt-8 border-t border-slate-200 dark:border-slate-700">
                    <Button
                      className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base py-3"
                      size="lg"
                    >
                      <MailIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      Email For Full Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="impact" className="space-y-6 sm:space-y-8">
              <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                      {project.id === 1
                        ? "35%"
                        : project.id === 2
                        ? "200+"
                        : "500+"}
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300">
                      {project.id === 1
                        ? "Carbon Footprint Reduction"
                        : project.id === 2
                        ? "Families Impacted"
                        : "Housing Units Planned"}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {project.id === 1
                        ? "50+"
                        : project.id === 2
                        ? "100+"
                        : "200+"}
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300">
                      {project.id === 1
                        ? "Green Spaces Integrated"
                        : project.id === 2
                        ? "Livelihood Programs"
                        : "Jobs Created"}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800 sm:col-span-2 lg:col-span-1">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                      {project.id === 1
                        ? "60%"
                        : project.id === 2
                        ? "80%"
                        : "30%"}
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300">
                      {project.id === 1
                        ? "Renewable Energy Integration"
                        : project.id === 2
                        ? "Community Participation"
                        : "Environmental Impact Reduction"}
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardHeader className="pb-3 sm:pb-6">
                  <CardTitle className="text-lg sm:text-xl">
                    Long-term Impact and Sustainability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-4 sm:mb-6">
                    This project demonstrates significant potential for
                    long-term positive impact on urban development in South
                    Africa. The methodologies and frameworks developed can be
                    replicated and scaled across similar contexts, contributing
                    to sustainable urban development goals at national and
                    regional levels.
                  </p>
                  <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold text-base sm:text-lg text-slate-800 dark:text-white mb-2 sm:mb-3">
                        Environmental Benefits
                      </h4>
                      <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-slate-700 dark:text-slate-300">
                        <li>
                          • Reduced carbon emissions and environmental footprint
                        </li>
                        <li>
                          • Enhanced biodiversity and green infrastructure
                        </li>
                        <li>• Improved air and water quality</li>
                        <li>• Climate resilience and adaptation measures</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-base sm:text-lg text-slate-800 dark:text-white mb-2 sm:mb-3">
                        Social Benefits
                      </h4>
                      <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-slate-700 dark:text-slate-300">
                        <li>• Improved quality of life for residents</li>
                        <li>• Enhanced community cohesion and participation</li>
                        <li>
                          • Increased access to services and opportunities
                        </li>
                        <li>• Strengthened local governance structures</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
