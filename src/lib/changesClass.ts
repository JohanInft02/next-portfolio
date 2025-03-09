//funcion para combinar clases de tailwind y clases de css

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function changesClass(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
