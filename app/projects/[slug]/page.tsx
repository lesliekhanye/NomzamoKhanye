import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ProjectDetail from "@/components/project-detail"
import { projectsData } from "@/lib/projects-data"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | Natasha Khanye`,
    description: project.description,
    keywords: project.keywords,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  }
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}
