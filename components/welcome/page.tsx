import { Card } from "@/components/ui/card";
import { Icon } from "@iconify/react";

export default function WelcomeSection() {
  return (
    <Card className="bg-[#b7c7c9a1] dark:bg-[#252b48] p-4 md:p-6 relative overflow-hidden card theme-transition hover:bg-[#c9cbcba1] dark:hover:bg-[#2a3152]">
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 md:mr-4">
          <h1 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-2 theme-transition">
            Bienvenidos a mi espacio!
          </h1>
          <p className="text-sm md:text-base text-black dark:text-gray-300 max-w-[600px] theme-transition">
            🚀 Explora mi portafolio y descubre cómo combino Fullstack, DevOps y
            Data para crear apps y soluciones increíbles. 💡🔥
          </p>
        </div>
        <Icon
          icon="fluent-emoji:man-technologist-medium"
          width={80}
          height={80}
          className="flex-shrink-0 md:w-[120px] md:h-[120px]"
        />
      </div>
    </Card>
  );
}
