import Link from "next/link";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <Link href="/projects/detail" className="block h-full">
      <Card className="h-full bg-[#252b48] relative overflow-hidden group">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbWFjaW9ufGVufDB8fDB8fHww"
            alt="Programming background"
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 p-4 md:p-6">
          <h3 className="text-xl font-bold text-white mb-2">Mis Proyectos</h3>
          <p className="text-sm md:text-base text-gray-300">
            💡¡Aquí es donde la magia del código cobra vida! Explora mis
            proyectos web, móviles y más. ¿Listo para ver qué se esconde tras
            cada línea de código? 🔥✨
          </p>
        </div>
      </Card>
    </Link>
  );
}
