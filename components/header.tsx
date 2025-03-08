
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full bg-transparent theme-transition">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white theme-transition flex items-center">
            Mi Portafolio{" "}
            <Icon
              icon="mdi:briefcase-outline"
              className="ml-2 h-5 w-5 md:h-6 md:w-6"
            />
          </h1>
          <Button
            variant="ghost"
            size="lg"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative h-10 w-10 md:h-12 md:w-12 hover:bg-transparent"
          >
            <div className="relative w-full h-full flex justify-center items-center">
              <Icon
                icon="fluent-emoji-flat:sun"
                className={`absolute h-8 w-8 md:h-12 md:w-12 transition-all duration-300 ${
                  theme === "dark"
                    ? "opacity-0 scale-50"
                    : "opacity-100 scale-100"
                }`}
              />
              <Icon
                icon="noto:full-moon"
                className={`absolute h-8 w-8 md:h-12 md:w-12 transition-all duration-300 ${
                  theme === "dark"
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-50"
                }`}
              />
            </div>
            <span className="sr-only">Cambiar tema</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
