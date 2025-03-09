"use client";

import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import workdata from "@/data/workExperiencesData.json";
import { calculateDuration } from "@/lib/calculateDuration";
import { formatDate } from "@/lib/formatDate";
import type { ChartData } from "chart.js";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { ChevronLeft } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

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

let workExperiencesData: WorkExperience[] = workdata.map((data) => data as WorkExperience);

export default function WorkExperiencesDetail() {
  const { theme } = useTheme();
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
 