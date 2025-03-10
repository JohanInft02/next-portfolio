"use client";

import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ProjectData from "@/data/projectsData.json";
import { Project } from "@/interfaces/Project";
import { ChevronLeft, Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects: Project[] = ProjectData.map((data) => data as Project);

const ProjectCard = ({ project }: { project: Project }) => (
  <Card className="overflow-hidden bg-white dark:bg-[#252b48] dark:border-gray-700 transition-all duration-200 hover:shadow-lg">
    <div className="aspect-video relative">
      <Image
        src={project.image}
        alt={project.title}
        fill
        loading = 'eager'
        quality={60}
        className="object-cover"
      />
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
      <h3 className="text-lg font-semibold text-black dark:text-white mb-2 theme-transition">
        {project.title}
      </h3>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            className="bg-gray-100 dark:bg-gray-800"
          >
            {tech}
          </Badge>
        ))}
      </div>
      {project.institution && (
      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Proyecto realizado para <a href={project.institutionUrl} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline dark:text-blue-500">{project.institution}</a>
      </div> )}
      <span className="mb-4 text-sm text-gray-500 dark:text-gray-400">Elaborado: {project.year}</span>
      <div className="flex gap-3 mt-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-initial"
        >
          <Button variant="outline" size="sm" className="w-full">
            <Globe className="w-4 h-4 mr-2" />
            Ver en Vivo
          </Button>
        </a>
        {project.codeUrl && (
        <a
          href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-auto"
        >
          <Button
            variant="default"
            size="sm"
            className="w-full text-white bg-[#24292e] hover:bg-[#2c3137] dark:bg-[#2d333b] dark:hover:bg-[#353b43]"
          >
            <Github className="w-4 h-4 mr-2" />
            Ver Código
          </Button>
        </a> )}
      </div>
    </div>
  </Card>
);

export default function ProjectsDetail() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto p-4 flex-grow">
        <div className="mb-6">
          <Link href="/">
            <Button
              variant="ghost"
              className="text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Regresar al Inicio
            </Button>
          </Link>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-6 theme-transition">
          Proyectos Trabajados
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
