export function antiguedad(time: string) {
   const current = new Date()
   const start = new Date(time)
   
   const different = current.getTime() - start.getTime()

   const daysDifferences = Math.floor(different / (1000 * 60 * 60 * 24))

   const startYear = start.getFullYear();
   const endYear = current.getFullYear();
   const startMonth = start.getMonth();
   const endMonth = current.getMonth();
 
   // Calcula el numero de meses
   const month = (endYear - startYear) * 12 + (endMonth - startMonth);
 
   return { message: `Antiguedad ${month} Meses / ${daysDifferences} Días`, number: month };
}