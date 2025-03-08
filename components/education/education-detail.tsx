"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft } from "lucide-react";
import { Icon } from "@iconify/react";
import Footer from "@/components/footer";

interface Education {
  degreeTitle: string;
  university: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  completed: boolean;
  url?: string;
}

const educationData: Education[] = [
  {
    degreeTitle: "Licenciatura en Desarrollo de Software",
    university: "Universidad Tecnológica",
    startDate: "2016-03",
    endDate: "Cursando",
    description:
      "Programa integral que cubre los fundamentos del desarrollo de software, incluyendo programación, diseño de sistemas, bases de datos y metodologías ágiles.",
    technologies: ["Microservice", "AWS", "Typescript", "SQL", "Azure Devops"],
    completed: false,
  },
  {
    degreeTitle: "Tecnico en Desarrollo de Software",
    university: "Universidad Tecnológica de Panamá",
    startDate: "2016-03",
    endDate: "2020-12",
    description:
      "Programa de formación técnica que cubre los fundamentos del desarrollo de software, incluyendo programación, diseño de sistemas, bases de datos y metodologías ágiles.",
    technologies: ["Java", "HTML", "JavaScript", "SQL", "Git"],
    completed: true,
    url: "https://udemy-certificate.s3.amazonaws.com/image/UC-b13a3fb2-f0bf-4105-8431-f21d23f5ed92.jpg?v=1715619564000",
  }
];

export default function EducationDetail() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null
  );

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
        <h1 className="text-3xl font-bold text-black dark:text-white mb-6 theme-transition">
          Educación y Certificaciones
        </h1>
        <div className="grid gap-6">
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className="p-6 bg-[#b7c7c9a1] dark:bg-[#252b48] theme-transition"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-black dark:text-white mb-2 theme-transition">
                    {edu.degreeTitle}
                  </h2>
                  <h3 className="text-lg text-gray-700 dark:text-gray-300 mb-2 theme-transition">
                    {edu.university}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 theme-transition">
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
                {edu.completed && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="mt-2 md:mt-0"
                        onClick={() =>
                          setSelectedCertificate(
                            edu.url || "/placeholder.svg")
                        }
                      >
                        <Icon icon="mdi:certificate" className="mr-2 h-4 w-4" />
                        Ver Certificado
                      </Button>
                    </DialogTrigger>
                    <DialogContent aria-describedby="education-certificate-description">
                      <div
                        id="education-certificate-description"
                        className="sr-only"
                      >
                        Vista detallada del certificado educativo
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
                )}
              </div>
              <p className="text-black dark:text-gray-300 mb-4 theme-transition">
                {edu.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {edu.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
