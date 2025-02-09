"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { ChevronLeft } from "lucide-react";
import Footer from "@/components/footer";
import { formatDate } from "@/utils/format-date";
import { useTheme } from "next-themes";
import type { ChartData } from "chart.js";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

interface WorkExperience {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  category: string;
  description: string;
  technologies: string[];
  workMode: "Remote" | "Hybrid" | "On-Site";
  promotion?: {
    previousTitle: string;
    newTitle: string;
    date: string;
    description: string;
  };
}

const workExperiencesData: WorkExperience[] = [
  {
    jobTitle: "Programador Fullstack",
    company: "Banco General S.A",
    startDate: "2022-09",
    endDate: "Presente",
    category: "Desarrollo Web",
    description:
      "Lideré el desarrollo de una plataforma de comercio electrónico de alto tráfico, mejorando el rendimiento en un 40%. Implementé arquitectura de microservicios y contenerización de la aplicación usando Docker.",
    technologies: ["Angular", "Java", "Sybase", "Ionic", "AWS"],
    workMode: "Hybrid",
    promotion: {
      previousTitle: "Tecnico en Adiestramiento (Programador Jr)",
      newTitle: "Programador Fullstack",
      date: "2023-06",
      description:
        "Promovido a Líder Técnico debido al excelente desempeño y liderazgo demostrado en proyectos críticos.",
    },
  },
  {
    jobTitle: "Consultor de Tecnología",
    company: "Transiciones S.A",
    startDate: "2019-11",
    endDate: "2024-04",
    category: "Desarrollo Web",
    description:
      "Desarrollé y lancé una aplicación de seguimiento de fitness con más de 100 mil descargas. Integré APIs de dispositivos wearables e implementé sincronización de datos en tiempo real.",
    technologies: ["React", "Mysql", "Plugdo.js", "Javascript", "AWS"],
    workMode: "Remote",
  },
  {
    jobTitle: "Administrador de Bases de Datos",
    company: "RichInsights",
    startDate: "2021-03",
    endDate: "2022-06",
    category: "Bases de Datos",
    description:
      "Desarrollé modelos predictivos para la deserción de clientes, aumentando la retención en un 25%. Implementé pipelines de datos y creé dashboards interactivos para inteligencia empresarial.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Tableau", "SQL"],
    workMode: "On-Site",
  },
];

function calculateDuration(startDate: string, endDate: string): string {
  const start = new Date(startDate);
  const end = endDate === "Presente" ? new Date() : new Date(endDate);
  const diffInMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    end.getMonth() -
    start.getMonth();
  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  if (years > 0 && months > 0) {
    return `${years} año${years > 1 ? "s" : ""} y ${months} mes${
      months > 1 ? "es" : ""
    }`;
  } else if (years > 0) {
    return `${years} año${years > 1 ? "s" : ""}`;
  } else {
    return `${months} mes${months > 1 ? "es" : ""}`;
  }
}

export default function WorkExperiencesDetail() {
  const { theme } = useTheme();
  /* const [chartData, setChartData] = useState<ChartData<
    "pie",
    number[],
    string
  > | null>(null); */
  const [skillsChartData, setSkillsChartData] = useState<ChartData<
    "bar",
    number[],
    string
  > | null>(null);

  useEffect(() => {
    const categoryCount: { [key: string]: number } = {};
    const skillsCount: { [key: string]: number } = {};

    workExperiencesData.forEach((exp) => {
      categoryCount[exp.category] = (categoryCount[exp.category] || 0) + 1;
      exp.technologies.forEach((tech) => {
        skillsCount[tech] = (skillsCount[tech] || 0) + 1;
      });
    });

    /*setChartData({
      labels: Object.keys(categoryCount),
      datasets: [
        {
          data: Object.values(categoryCount),
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    });*/

    const totalSkillsCount = Object.values(skillsCount).reduce(
      (a, b) => a + b,
      0
    );
    const sortedSkills = Object.entries(skillsCount)
      .map(([skill, count]) => ({
        skill,
        count,
        percentage: (count / totalSkillsCount) * 100,
      }))
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 5);

    setSkillsChartData({
      labels: sortedSkills.map((item) => item.skill),
      datasets: [
        {
          data: sortedSkills.map((item) => item.percentage),
          backgroundColor:
            theme === "dark"
              ? [
                  "#4a69bd", // Darker Navy Blue
                  "#10ac84", // Darker Teal
                  "#ee5253", // Darker Pink
                  "#e58e26", // Darker Orange
                  "#b8e994", // Darker Lime Green
                ]
              : [
                  "#1e3799", // Navy Blue
                  "#00b894", // Teal
                  "#ff7675", // Pink
                  "#ffa502", // Orange
                  "#c4e538", // Lime Green
                ],
          borderColor: "transparent",
          borderRadius: 4,
          barThickness: 40,
        },
      ],
    });
  }, [theme]);

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
          Experiencias Laborales
        </h1>
        <div className="grid gap-6">
          {workExperiencesData.map((exp, index) => {
            const duration = calculateDuration(exp.startDate, exp.endDate);
            const totalDuration = exp.promotion
              ? calculateDuration(exp.startDate, "Presente")
              : duration;

            return (
              <Card
                key={index}
                className="p-6 bg-[#b7c7c9a1] dark:bg-[#252b48] theme-transition"
              >
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-black dark:text-white mb-2 theme-transition">
                      {exp.jobTitle}
                    </h2>
                    <h3 className="text-lg text-gray-700 dark:text-gray-300 mb-2 theme-transition">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 theme-transition">
                      {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 theme-transition">
                      Duración en el cargo: {duration}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 theme-transition">
                      Tiempo total en la empresa: {totalDuration}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <Badge className="mb-2">{exp.category}</Badge>
                    <Badge variant="outline" className="mb-2">
                      {exp.workMode}
                    </Badge>
                  </div>
                </div>
                <p className="text-black dark:text-gray-300 mb-4 theme-transition">
                  {exp.description}
                </p>
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
                    <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                      Desde {formatDate(exp.promotion.date)}
                    </p>
                    <p className="text-green-700 dark:text-green-300 mb-2">
                      {exp.promotion.description}
                    </p>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Cargo anterior: {exp.promotion.previousTitle}
                    </p>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        <div className="mt-12 space-y-12">
          <div className="w-full">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-6 text-center theme-transition">
              Distribución de Habilidades
            </h2>
            <div className="h-[400px] w-full">
              {skillsChartData && (
                <Bar
                  data={skillsChartData}
                  options={{
                    indexAxis: "y",
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: false,
                      },
                      tooltip: {
                        callbacks: {
                          label: (context) => {
                            return `${context.parsed.x.toFixed(1)}%`;
                          },
                        },
                      },
                      datalabels: {
                        anchor: "end",
                        align: "right",
                        color: (context) => {
                          const value = context.dataset.data[
                            context.dataIndex
                          ] as number;
                          return value < 50
                            ? theme === "dark"
                              ? "#fff"
                              : "#000"
                            : "#fff";
                        },
                        font: {
                          weight: "bold",
                          size: 14,
                        },
                        formatter: (value) => `${value.toFixed(1)}%`,
                      },
                    },
                    scales: {
                      x: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                          display: false,
                          color:
                            theme === "dark"
                              ? "rgba(255, 255, 255, 0.1)"
                              : "rgba(0, 0, 0, 0.1)",
                        },
                        ticks: {
                          callback: (value) => `${value}%`,
                          color: theme === "dark" ? "#fff" : "#000",
                        },
                        border: {
                          display: false,
                        },
                      },
                      y: {
                        grid: {
                          display: false,
                        },
                        ticks: {
                          color: theme === "dark" ? "#fff" : "#000",
                          font: {
                            size: 14,
                            weight: 500,
                          },
                        },
                        border: {
                          display: false,
                        },
                      },
                    },
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
 