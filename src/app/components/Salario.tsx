import React, { useEffect, useState } from "react";
import { setValue } from "../../utils/setValue";
import { useStore } from "../../store/datas/store";
import seguridadSocial from "../../utils/seguridadSocial";
import { ahorroMensual } from "../../utils/aportes";

export default function Salario() {

  const { setSalario, typeAsociado, descuentos, setDescuentos } = useStore()
  const [currValue, setCurrValue] = useState("")
  const [controlValues, setControlValues] = useState(false)

  useEffect(() => {
    setCurrValue("")
  }, [typeAsociado])


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setControlValues(false)
    const salary = event.target.value
    setCurrValue(setValue(salary))
    setSalario(setValue(salary))
    const { pagaduria, dateAfiliacion } = descuentos
    const { name } = typeAsociado
    if (pagaduria && name && dateAfiliacion) {
      const saludypension = seguridadSocial(setValue(salary), pagaduria, name)
      const aportes = ahorroMensual(Number(salary.replace(/\./g, '')), dateAfiliacion)
      setDescuentos({
        ...descuentos,
        seguridad: saludypension,
        aportes: aportes
      })
    }
    if (!descuentos.dateAfiliacion && !descuentos.pagaduria) {
      setCurrValue("")
      setControlValues(true)
    }
  }

  return (
    <div className="input flex flex-row justify-between items-center">
      <label
        htmlFor="input"
        className="text-blue-900 text-md font-semibold bg-white w-fit"
      >
        Salario o Pension
      </label>
      <input
        required
        value={currValue}
        onChange={handleChange}
        id="salario"
        type="text"
        placeholder="Salario o Pension"
        name="input"
        className="border-blue-300 input px-[10px] py-[5px] text-lg bg-white border-2 rounded-[5px] w-[350px] focus:outline-none placeholder:text-black/45 hover:shadow-xl
          transition-all duration-300 focus:border-blue-700 text-center"
      />

      {controlValues&&<span className="text-red-700 font-semibold">Por favor ingrese fecha de Afiliacion y Pagaduria</span>}
    </div>
  );
}
