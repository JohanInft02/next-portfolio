import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

export default function EducationSection() {
  return (
    <Card className="h-full bg-[rgba(183,199,201,0.63)] dark:bg-[#252b48] p-6 flex flex-col card theme-transition hover:bg-[#c9cbcba1] dark:hover:bg-[#2a3152]">
      <div className="flex items-start justify-between mb-auto">
        <div>
          <h3 className="text-lg font-semibold text-black dark:text-white mb-1 theme-transition">
            Educación
          </h3>
          <p className="text-sm text-black dark:text-gray-300 theme-transition">
            Mis títulos y certificaciones académicas.
          </p>
        </div>
        <Icon
          icon="fluent-emoji:graduation-cap"
          width={40}
          height={40}
          className="flex-shrink-0"
        />
      </div>
      <Link href="/education/detail" className="mt-4">
        <Button className="w-full bg-blue-600/20 hover:bg-blue-600/30 text-black dark:text-blue-300 theme-transition">
          Ver Más
        </Button>
      </Link>
    </Card>
  );
}
