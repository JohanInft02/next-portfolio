import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AchievementsData from "@/data/archievementData.json";
import { Achievement } from "@/interfaces/Achievement";
import { ChevronLeft, Trophy } from "lucide-react";
import Link from "next/link";

const achievements: Achievement[] = AchievementsData.map((data) => data as Achievement);

export default function Achievements() {

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
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
