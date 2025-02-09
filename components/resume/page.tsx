import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileDown, Clock } from "lucide-react";

export default function ResumeSection() {
  const lastUpdate = "2024-02-04"; // You can make this dynamic

  return (
    <Card className="h-full bg-[#b7c7c9a1] dark:bg-[#252b48] p-6 hover:bg-[#c9cbcba1] dark:hover:bg-[#2a3152] transition-colors card theme-transition">
      <div className="flex flex-col h-full justify-between">
        <div>
          <h3 className="text-xl font-bold text-black dark:text-white mb-2 theme-transition">
            Curriculum Vitae
          </h3>
          <p className="text-black dark:text-gray-300 theme-transition">
            Descarga mi CV más reciente y revisa mi experiencia profesional.
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div
            className="flex items-center text-sm text-black dark:text-gray-400 theme-transition"
            suppressHydrationWarning
          >
            <Clock className="w-4 h-4 mr-1" />
            Última actualización: {lastUpdate}
          </div>
          <Button className="bg-[#0ce0ad] hover:bg-[#0bc399] text-white dark:bg-blue-600 dark:hover:bg-blue-700 theme-transition">
            <FileDown className="w-4 h-4 mr-2" />
            Descargar CV
          </Button>
        </div>
      </div>
    </Card>
  );
}
