"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, Trophy } from "lucide-react";
import Footer from "@/components/footer";

interface Achievement {
  title: string;
  description: string;
  year: string;
  institution: string; // New field
}

const achievements: Achievement[] = [
  {
    title: "Lista del Decano",
    description: "Mantuvo excelencia académica durante todo el programa",
    year: "2023",
    institution: "Universidad Tecnológica de Panamá",
  },
  {
    title: "Mejor Proyecto Final",
    description: "Premiado por el proyecto final sobresaliente",
    year: "2023",
    institution: "Banco General S.A",
  },
  {
    title: "Ganador de Competencia de Programación",
    description:
      "Primer lugar en la competencia de codificación a nivel universitario",
    year: "2022",
    institution: "IEEE Computer Society Panamá",
  },
];

export default function Achievements() {
  //const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)
  const [open, setOpen] = useState(false);
  const [selectedAchievement, setSelectedAchievement] =
    useState<Achievement | null>(null);

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
        <h1 className="text-3xl font-bold text-black dark:text-white mb-6 theme-transition">
          Logros
        </h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement) => (
            <Card
              key={achievement.title}
              className="bg-white dark:bg-[#252b48] p-6 theme-transition"
            >
              <Trophy className="h-8 w-8 text-yellow-400 mb-4" />
              <h2 className="text-xl font-semibold text-black dark:text-white mb-2 theme-transition">
                {achievement.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2 theme-transition">
                {achievement.description}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 theme-transition">
                Año: {achievement.year}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 theme-transition">
                Institución: {achievement.institution}
              </p>
              <Button
                variant="outline"
                className="mt-2"
                onClick={() => {
                  setOpen(true);
                  setSelectedAchievement(achievement);
                }}
              >
                Ver Certificado
              </Button>
            </Card>
          ))}
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            {selectedAchievement && (
              <>
                <Image
                  src={`/certificates/${selectedAchievement.title}.jpg`}
                  alt={selectedAchievement.title}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  onError={(e) => {
                    console.error(e);
                  }}
                />
                <Button onClick={() => setOpen(false)} className="mt-4">
                  Cerrar
                </Button>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
      <Footer />
    </div>
  );
}
