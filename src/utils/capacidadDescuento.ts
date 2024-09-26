export function capacidadDescuento(salario: string, descuentos: string, salud: number, ahorro: number) {
  const setSalario = Number(salario.replace(/\./g, ''))
  const setDescuentos = Number(descuentos.replace(/\./g, ''))
  const value = ((setSalario - salud) * 0.5) - setDescuentos - ahorro - 10000
  return value
}