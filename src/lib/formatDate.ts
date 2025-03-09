/* 
  ## Funcion que recibe una fecha en formato "YYYY-MM" y la convierte a "MMM-YYYY"
   Ejemplo: formatDate("2021-01") => "Ene-2021"
*/
const MONTHS_ES = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
];

export function formatDate(dateString: string): string {
  if (dateString === "Presente") return dateString;

  const [year, month] = dateString.split("-");
  const monthIndex = Number.parseInt(month) - 1;
  return `${MONTHS_ES[monthIndex]}-${year}`;
}
