// Interfaz para definir la estructura de un proyecto
export interface Project {
    id: number;
    title: string;
    category: "Web" | "Mobile" | "Data Analytics";
    image: string;
    technologies: string[];
    liveUrl: string;
    codeUrl: string;
}