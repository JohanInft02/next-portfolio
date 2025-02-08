"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ChevronLeft, Trophy } from "lucide-react"
import Footer from "@/components/footer"

interface Achievement {
  title: string
  description: string
  year: string
  institution: string
  certificate?: string
}

const achievements: Achievement[] = [
  {
    title: "Lista del Decano",
    description: "Mantuvo excelencia académica durante todo el programa",
    year: "2023",
    institution: "Universidad Tecnológica de Panamá",
    certificate: "https://udemy-certificate.s3.amazonaws.com/image/UC-b13a3fb2-f0bf-4105-8431-f21d23f5ed92.jpg?v=1715619564000"
  },
  {
    title: "Mejor Proyecto Final",
    description: "Premiado por el proyecto final sobresaliente",
    year: "2023",
    institution: "Banco General S.A",
    certificate: "https://udemy-certificate.s3.amazonaws.com/image/UC-b13a3fb2-f0bf-4105-8431-f21d23f5ed92.jpg?v=1715619564000"
  },
  {
    title: "Ganador de Competencia de Programación",
    description: "Primer lugar en la competencia de codificación a nivel universitario",
    year: "2022",
    institution: "IEEE Computer Society Panamá",
    certificate: "https://udemy-certificate.s3.amazonaws.com/image/UC-b13a3fb2-f0bf-4105-8431-f21d23f5ed92.jpg?v=1715619564000"
  },
]

export default function Achievements() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

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
        <h1 className="text-3xl font-bold text-black dark:text-white mb-6 theme-transition">Logros</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement) => (
            <Card key={achievement.title} className="bg-white dark:bg-[#252b48] p-6 theme-transition">
              <Trophy className="h-8 w-8 text-yellow-400 mb-4" />
              <h2 className="text-xl font-semibold text-black dark:text-white mb-2 theme-transition">
                {achievement.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2 theme-transition">{achievement.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 theme-transition">Año: {achievement.year}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 theme-transition">
                Institución: {achievement.institution}
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="mt-2"
                    onClick={() =>
                      setSelectedCertificate(
                        achievement.certificate || "/placeholder.svg"
                        )
                    }
                  >
                    Ver Certificado
                  </Button>
                </DialogTrigger>
                <DialogContent aria-describedby="achievement-certificate-description">
                  <div id="achievement-certificate-description" className="sr-only">
                    Vista detallada del certificado de logro
                  </div>
                  {selectedCertificate && (
                    <Image
                      src={selectedCertificate || "/placeholder.svg"}
                      alt="Certificado"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  )}
                </DialogContent>
              </Dialog>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}