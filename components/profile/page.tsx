"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";

export default function ProfileSection() {
  const [isOpen, setIsOpen] = useState(false);

  const primaryTechnologies = [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Docker",
    "Kubernetes",
    "AWS",
    "GraphQL",
  ];

  return (
    <Card className="bg-[#b7c7c9a1] dark:bg-[#252b48] p-4 md:p-6 flex flex-col items-center justify-center relative overflow-hidden card theme-transition hover:bg-[#c9cbcba1] dark:hover:bg-[#2a3152]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-4 left-4 w-4 h-4 rounded-full bg-blue-400/20" />
        <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-blue-400/20" />
      </div>
      <div className="relative flex flex-col items-center text-center">
        <Image
          src="https://avatars.githubusercontent.com/u/57459541?v=4"
          alt="Perfil"
          width={120}
          height={120}
          className="rounded-full mb-4 md:mb-6 object-cover"
          priority
        />
        <h2 className="text-xl font-bold text-black dark:text-white mb-1 theme-transition">
          Johan Infante
        </h2>
        <p className="text-blue-800 dark:text-blue-300 text-sm mb-4 theme-transition">
          Lic. Desarrollo Software
        </p>
        <p className="text-xs text-black italic dark:text-gray-300 text-center mb-6 max-w-[250px] theme-transition">
          El que no se anima a trabajar, empobrece: el que trabaja duro, se
          enriquece. Proverbios 10:4 PDT
        </p>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[rgb(64,188,244)] hover:bg-[#c084fc] dark:bg-purple-600 dark:hover:bg-purple-700 text-white theme-transition">
              Saber Más
            </Button>
          </DialogTrigger>
          <DialogContent
            className="sm:max-w-[425px]"
            aria-describedby="profile-dialog-description"
          >
            <DialogHeader>
              <DialogTitle>Perfil Profesional</DialogTitle>
            </DialogHeader>
            <div id="profile-dialog-description" className="sr-only">
              Información detallada del perfil profesional
            </div>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-bold">Nombre:</span>
                <span className="col-span-3">Johan Alberto Infante Joseph</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-bold">Título:</span>
                <span className="col-span-3">Lic. Desarrollo de Software</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-bold">Ubicación:</span>
                <span className="col-span-3 flex items-center">
                  Panamá, Ciudad de Panamá
                  <Icon icon="cif:pa" className="ml-2 w-6 h-6" />
                </span>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <span className="font-bold">Descripción:</span>
                <p className="col-span-3">
                  Desarrollador apasionado por crear soluciones innovadoras.
                  Especializado en tecnologías web y DevOps, siempre buscando
                  aprender y aplicar las últimas tendencias en el mundo del
                  desarrollo de software.
                </p>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <span className="font-bold">Tecnologías:</span>
                <div className="col-span-3 flex flex-wrap gap-2">
                  {primaryTechnologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-bold">Pasatiempo:</span>
                <span className="col-span-3">
                  Diseño de interfaces de usuario (UI/UX)
                </span>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Card>
  );
}
