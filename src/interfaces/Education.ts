//Interfaz para definir la estructura de los datos de la educación
export interface Education {
    degreeTitle: string;
    university: string;
    startDate: string;
    endDate: string;
    description: string;
    technologies: string[];
    completed: boolean;
    url?: string;
}