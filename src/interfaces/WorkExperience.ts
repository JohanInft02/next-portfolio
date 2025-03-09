// Interfaz para definir la estructura de un objeto de experiencia laboral
interface WorkExperience {
    jobTitle: string;
    company: string;
    startDate: string;
    endDate: string;
    category: string;
    description: string;
    technologies: string[];
    workMode: "Remoto" | "Hibrido" | "Presencial";
    promotion?: {
      previousTitle: string;
      newTitle: string;
      date: string;
      description: string;
    };
}