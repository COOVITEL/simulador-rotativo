export default function seguridadSocial(salary: string, type: string, asociado: string) {
    const setSalario = Number(salary.replace(/\./g, ''))
    // Esta funcion calcula el valor de salud y pension para los asocuados
    const smmlv = 1300000
    let porcentaje = 0
    // El porcentaje de salud y pension depende el tipo de perfil del asociado
    if (asociado === "Pensionado") {
        if (setSalario <= smmlv) {
            porcentaje = 4
        } else if (setSalario > smmlv && setSalario <= (3 * smmlv)) {
            porcentaje = 10
        } else {
            porcentaje = 12
        }
        if (type.toLowerCase() === "fopep") {
            porcentaje = 12
        }
    } else {
        porcentaje = 8
    }
    const value = (setSalario * porcentaje) / 100
    // return value
    return value
}