"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import ChartDataLabels from "chartjs-plugin-datalabels"
import { ChevronLeft } from "lucide-react"
import Footer from "@/components/footer"

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels)

interface WorkExperience {
  jobTitle: string
  company: string
  startDate: string
  endDate: string
  category: string
  description: string
  technologies: string[]
  promotion?: {
    previousTitle: string
    newTitle: string
    date: string
    description: string
  }
}

const workExperiencesData: WorkExperience[] = [
  {
    jobTitle: "Líder Técnico",
    company: "TechCorp",
    startDate: "2021-01",
    endDate: "Presente",
    category: "Desarrollo Web",
    description:
      "Lideré el desarrollo de una plataforma de comercio electrónico de alto tráfico, mejorando el rendimiento en un 40%. Implementé arquitectura de microservicios y contenerización de la aplicación usando Docker.",
    technologies: ["React", "Node.js", "MongoDB", "Docker", "AWS"],
    promotion: {
      previousTitle: "Desarrollador Fullstack",
      newTitle: "Líder Técnico",
      date: "2023-06",
      description:
        "Promovido a Líder Técnico debido al excelente desempeño y liderazgo demostrado en proyectos críticos.",
    },
  },
  {
    jobTitle: "Desarrollador de Aplicaciones Móviles",
    company: "AppInnovate",
    startDate: "2019-06",
    endDate: "2020-12",
    category: "Desarrollo Móvil",
    description:
      "Desarrollé y lancé una aplicación de seguimiento de fitness con más de 100 mil descargas. Integré APIs de dispositivos wearables e implementé sincronización de datos en tiempo real.",
    technologies: ["React Native", "Firebase", "Redux", "Jest"],
  },
  {
    jobTitle: "Científico de Datos",
    company: "DataInsights",
    startDate: "2018-03",
    endDate: "2019-05",
    category: "Análisis de Datos",
    description:
      "Desarrollé modelos predictivos para la deserción de clientes, aumentando la retención en un 25%. Implementé pipelines de datos y creé dashboards interactivos para inteligencia empresarial.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Tableau", "SQL"],
  },
  {
    jobTitle: "Ingeniero DevOps",
    company: "CloudSolutions",
    startDate: "2017-01",
    endDate: "2018-02",
    category: "DevOps",
    description:
      "Implementé pipelines de CI/CD, reduciendo el tiempo de despliegue en un 70%. Gestioné infraestructura en la nube en AWS e implementé infraestructura como código usando Terraform.",
    technologies: ["Jenkins", "Kubernetes", "Terraform", "AWS", "Prometheus"],
  },
  {
    jobTitle: "Desarrollador Frontend",
    company: "UXMasters",
    startDate: "2015-09",
    endDate: "2016-12",
    category: "Desarrollo Web",
    description:
      "Desarrollé aplicaciones web responsivas y accesibles. Implementé pruebas A/B y mejoré las tasas de conversión en un 15% a través de mejoras en la UI/UX.",
    technologies: ["JavaScript", "Vue.js", "SASS", "Webpack", "Jest"],
  },
]

export default function WorkExperiencesDetail() {
  const [chartData, setChartData] = useState<any>(null)

  useEffect(() => {
    const categoryCount: { [key: string]: number } = {}
    workExperiencesData.forEach((exp) => {
      categoryCount[exp.category] = (categoryCount[exp.category] || 0) + 1
    })

    setChartData({
      labels: Object.keys(categoryCount),
      datasets: [
        {
          data: Object.values(categoryCount),
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
        },
      ],
    })
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto p-4 flex-grow">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="text-black dark:text-white">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Regresar al Inicio
            </Button>
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-black dark:text-white mb-6 theme-transition">Experiencias Laborales</h1>
        <div className="grid gap-6">
          {workExperiencesData.map((exp, index) => (
            <Card key={index} className="p-6 bg-[#b7c7c9a1] dark:bg-[#252b48] theme-transition">
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-black dark:text-white mb-2 theme-transition">
                    {exp.jobTitle}
                  </h2>
                  <h3 className="text-lg text-gray-700 dark:text-gray-300 mb-2 theme-transition">{exp.company}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 theme-transition">
                    {exp.startDate} - {exp.endDate}
                  </p>
                </div>
                <Badge className="mb-4 self-start">{exp.category}</Badge>
              </div>
              <p className="text-black dark:text-gray-300 mb-4 theme-transition">{exp.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              {exp.promotion && (
                <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 rounded-lg">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                    <h4 className="text-lg font-semibold text-green-800 dark:text-green-200">
                      {exp.promotion.newTitle}
                    </h4>
                    <Badge variant="outline" className="mt-2 md:mt-0">
                      Promoción
                    </Badge>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-300 mb-2">Desde {exp.promotion.date}</p>
                  <p className="text-green-700 dark:text-green-300 mb-2">{exp.promotion.description}</p>
                  <p className="text-sm text-green-600 dark:text-green-400">
                    Cargo anterior: {exp.promotion.previousTitle}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
        {chartData && (
          <div className="mt-12 max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4 text-center theme-transition">
              Distribución de Categorías
            </h2>
            <Pie
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: (context: { label: string; parsed: number; dataset: { data: any[] } }) => {
                        const label: string = context.label || ""
                        const value: number = context.parsed || 0
                        const total: number = context.dataset.data.reduce((a: number, b: number) => a + b, 0)
                        const percentage: string = ((value / total) * 100).toFixed(2)
                        return `${label}: ${percentage}%`
                      },
                    },
                  },
                  datalabels: {
                    formatter: (value: number, ctx: any) => {
                      const total: number = ctx.dataset.data.reduce((a: number, b: number) => a + b, 0)
                      const percentage: string = ((value / total) * 100).toFixed(2) + "%"
                      return percentage
                    },
                    color: "#fff",
                    font: {
                      weight: "bold",
                      size: 12,
                    },
                  },
                },
              }}
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}
