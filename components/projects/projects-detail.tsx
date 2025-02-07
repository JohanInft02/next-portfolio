"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Globe, Github } from "lucide-react"
import Footer from "@/components/footer"

interface Project {
  id: number
  title: string
  category: "Web" | "Mobile" | "Data Analytics"
  image: string
  technologies: string[]
  liveUrl: string
  codeUrl: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Avanzado",
    category: "Web",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    id: 2,
    title: "App de Fitness",
    category: "Mobile",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React Native", "Firebase"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Dashboard de Análisis",
    category: "Data Analytics",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Python", "Tableau"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    id: 4,
    title: "E-commerce principiante",
    category: "Web",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    id: 5,
    title: "App de Fitness principiante",
    category: "Mobile",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React Native", "Firebase"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    id: 6,
    title: "Dashboard de Análisis principiante",
    category: "Data Analytics",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Python", "Tableau"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    id: 7,
    title: "E-commerce Locura",
    category: "Web",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    id: 8,
    title: "App de Fitness Locura",
    category: "Mobile",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React Native", "Firebase"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    id: 9,
    title: "Dashboard de Análisis Locura",
    category: "Data Analytics",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Python", "Tableau"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    id: 10,
    title: "QUEE",
    category: "Web",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    id: 11,
    title: "QUEE",
    category: "Mobile",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React Native", "Firebase"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    id: 12,
    title: "QUEE",
    category: "Data Analytics",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Python", "Tableau"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    id: 13,
    title: "Uff",
    category: "Web",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    id: 14,
    title: "Uff",
    category: "Mobile",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React Native", "Firebase"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    id: 15,
    title: "Uff",
    category: "Data Analytics",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Python", "Tableau"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    id: 16,
    title: "E-commerce Avanzado",
    category: "Web",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    id: 17,
    title: "App de Fitness",
    category: "Mobile",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React Native", "Firebase"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  {
    id: 18,
    title: "Dashboard de Análisis",
    category: "Data Analytics",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Python", "Tableau"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
  },
  // ... (add 15 more projects to reach a total of 18)
]

const ProjectCard = ({ project }: { project: Project }) => (
  <Card className="overflow-hidden bg-white dark:bg-[#252b48] transition-all duration-200 hover:shadow-lg">
    <div className="aspect-video relative">
      <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
    </div>
    <div className="p-4">
      <Badge
        className={`mb-3 ${
          project.category === "Web"
            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
            : project.category === "Mobile"
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
              : "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
        }`}
      >
        {project.category}
      </Badge>
      <h3 className="text-lg font-semibold text-black dark:text-white mb-2 theme-transition">{project.title}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <Badge key={tech} variant="secondary" className="bg-gray-100 dark:bg-gray-800">
            {tech}
          </Badge>
        ))}
      </div>
      <div className="flex gap-3">
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
          <Button variant="outline" size="sm" className="w-full">
            <Globe className="w-4 h-4 mr-2" />
            Ver en Vivo
          </Button>
        </a>
        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
          <Button
            variant="default"
            size="sm"
            className="w-full bg-[#24292e] hover:bg-[#2c3137] dark:bg-[#2d333b] dark:hover:bg-[#353b43]"
          >
            <Github className="w-4 h-4 mr-2" />
            Ver Código
          </Button>
        </a>
      </div>
    </div>
  </Card>
)

export default function ProjectsDetail() {
  const [currentSlides, setCurrentSlides] = useState({
    Web: 0,
    Mobile: 0,
    "Data Analytics": 0,
  })

  const getProjectsByCategory = (category: "Web" | "Mobile" | "Data Analytics") => {
    return projects.filter((project) => project.category === category)
  }

  const handleSlideChange = (category: "Web" | "Mobile" | "Data Analytics", direction: "next" | "prev") => {
    const categoryProjects = getProjectsByCategory(category)
    const maxSlides = Math.ceil(categoryProjects.length / 3)

    setCurrentSlides((prev) => ({
      ...prev,
      [category]:
        direction === "next" ? (prev[category] + 1) % maxSlides : (prev[category] - 1 + maxSlides) % maxSlides,
    }))
  }

  const categories: ("Web" | "Mobile" | "Data Analytics")[] = ["Web", "Mobile", "Data Analytics"]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto p-4 flex-grow">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Regresar al Inicio
            </Button>
          </Link>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-6 theme-transition">
          Mis Proyectos
        </h1>
        {categories.map((category) => {
          const categoryProjects = getProjectsByCategory(category)
          const maxSlides = Math.ceil(categoryProjects.length / 3)
          const hasProjects = categoryProjects.length > 0

          return (
            <div key={category} className="mb-12">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl md:text-2xl font-semibold text-black dark:text-white theme-transition">
                  {category === "Web"
                    ? "Proyectos Web"
                    : category === "Mobile"
                      ? "Aplicaciones Móviles"
                      : "Análisis de Datos"}
                </h2>
                {hasProjects && maxSlides > 1 && (
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleSlideChange(category, "prev")}
                      variant="outline"
                      size="icon"
                      disabled={currentSlides[category] === 0}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      onClick={() => handleSlideChange(category, "next")}
                      variant="outline"
                      size="icon"
                      disabled={currentSlides[category] === maxSlides - 1}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryProjects
                  .slice(currentSlides[category] * 3, (currentSlides[category] + 1) * 3)
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </div>
          )
        })}
      </div>
      <Footer />
    </div>
  )
}

