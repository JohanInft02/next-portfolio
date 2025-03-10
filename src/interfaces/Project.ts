// Interfaz para definir la estructura de un proyecto
export interface Project {
    id: number;
    title: string;
    description: string;
    category: "Web" | "Mobile" | "Data Analytics" | "API"  ;
    image: string;
    technologies: string[];
    institution?: string;
    institutionUrl?: string;
    year: string;
    liveUrl: string;
    codeUrl?: string;
}