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
}

const educationData: Education[] = [
  {
    degreeTitle: "Licenciatura en Desarrollo de Software",
    university: "Universidad Tecnológica",
    startDate: "2018-09",
    endDate: "2022-06",
    description:
      "Programa integral que cubre los fundamentos del desarrollo de software, incluyendo programación, diseño de sistemas, bases de datos y metodologías ágiles.",
    technologies: ["Java", "Python", "JavaScript", "SQL", "Git"],
    completed: true,
  },
  {
    degreeTitle: "Maestría en Ciencias de la Computación",
    university: "Universidad Nacional",
    startDate: "2022-09",
    endDate: "Cursando",
    description:
      "Programa avanzado que profundiza en inteligencia artificial, aprendizaje automático y computación en la nube.",
    technologies: ["TensorFlow", "PyTorch", "AWS", "Docker", "Kubernetes"],
    completed: false,
  },
  {
    degreeTitle: "Diplomado en Desarrollo Web Full Stack",
    university: "Instituto de Tecnología Web",
    startDate: "2021-03",
    endDate: "2021-09",
    description:
      "Programa intensivo que cubre el desarrollo web tanto en el frontend como en el backend, con énfasis en tecnologías modernas.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "GraphQL"],
    completed: true,
  },
  {
    degreeTitle: "Certificación en DevOps",
    university: "Academia de DevOps",
    startDate: "2022-01",
    endDate: "2022-04",
    description:
      "Programa especializado en prácticas y herramientas de DevOps para mejorar la colaboración entre desarrollo y operaciones.",
    technologies: [
      "Jenkins",
      "Ansible",
      "Terraform",
      "Prometheus",
      "ELK Stack",
    ],
    completed: true,
  },
  {
    degreeTitle: "Curso de Especialización en Ciberseguridad",
    university: "Centro de Seguridad Informática",
    startDate: "2023-06",
    endDate: "Cursando",
    description:
      "Programa enfocado en las últimas técnicas y herramientas de seguridad informática y protección de datos.",
    technologies: [
      "Kali Linux",
      "Wireshark",
      "Metasploit",
      "Nmap",
      "Burp Suite",
    ],
    completed: false,
  },
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
                            "https://udemy-certificate.s3.amazonaws.com/image/UC-b13a3fb2-f0bf-4105-8431-f21d23f5ed92.jpg?v=1715619564000"
                          )
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
