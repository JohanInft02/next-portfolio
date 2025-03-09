import { Icon } from "@iconify/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 px-4 bg-transparent mt-2">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
        <p suppressHydrationWarning>
          &copy; {currentYear} Johan Infante. All rights reserved.
        </p>
        <p className="flex items-center gap-2">
          Portafolio construido con
          <Icon
            icon="skill-icons:nextjs-light"
            width={20}
            height={20}
            className="inline-block"
          />
        </p>
      </div>
    </footer>
  );
}
