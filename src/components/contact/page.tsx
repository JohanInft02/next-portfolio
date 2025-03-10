import { Card } from "@/components/ui/card";
import { Icon } from "@iconify/react";

export default function ContactSection() {
  return (
    <Card className="col-span-4 row-span-2 h-full bg-[rgba(183,199,201,0.63)] dark:bg-[#252b48] p-6 hover:bg-[#c9cbcba1] dark:hover:bg-[#2a3152] transition-colors card theme-transition">
      <h3 className="text-lg font-bold text-black dark:text-white mb-4 theme-transition">
        Contactos
      </h3>
      <p className="text-sm text-black dark:text-gray-300 theme-transition mb-4">
        Puedes dar un vistazo a mis redes.
      </p>
      <div className="flex space-x-4">
        <a
          href="https://github.com/JohanInft02"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <Icon
            icon="skill-icons:github-dark"
            className="w-8 h-8 dark:text-white"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/johan-a-infante-11bb1a28b/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <Icon icon="skill-icons:linkedin" className="w-8 h-8" />
        </a>
        <a
          href="https://wa.me/50762688384"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <Icon icon="logos:whatsapp-icon" className="w-8 h-8" />
        </a>
      </div>
    </Card>
  );
}
