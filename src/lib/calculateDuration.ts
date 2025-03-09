/*
  ## Funcion para calcular la duracion de un trabajo
  Recibe dos fechas en formato string y devuelve un string con la duracion en años y meses
*/
export function calculateDuration(startDate: string, endDate: string): string {
  const start = new Date(startDate);
  const end = endDate === "Presente" ? new Date() : new Date(endDate);
  const diffInMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    end.getMonth() -
    start.getMonth();
  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  if (years > 0 && months > 0) {
    return `${years} año${years > 1 ? "s" : ""} y ${months} mes${
      months > 1 ? "es" : ""
    }`;
  } else if (years > 0) {
    return `${years} año${years > 1 ? "s" : ""}`;
  } else {
    return `${months} mes${months > 1 ? "es" : ""}`;
  }
}
