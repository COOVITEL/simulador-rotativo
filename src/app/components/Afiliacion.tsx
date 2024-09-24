import React, { useState } from "react";
import { useStore } from "../../store/store";
import clsx from "clsx";

export default function Afiliacion() {
  const { datas, setTypeAsociado, typeAsociado } = useStore();
  const listOptionsAsociados = datas.typesAsociados;
  const [valueSelect, setValueSelect] = useState("")

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValueSelect(event.target.value)
    const currentAseciado = listOptionsAsociados?.filter(asociado => asociado.id == Number(event.target.value))
    if (currentAseciado) setTypeAsociado(currentAseciado[0])
  }

  return (
    <div className="input flex flex-col w-fit static">
      <label
        htmlFor="input"
        className="text-blue-900 text-md font-semibold relative top-2 ml-[7px] px-[10px] bg-white w-fit"
      >
        Tipo de Asociado
      </label>
      <select
        value={valueSelect}
        required
        id="asociado"
        name="input"
        onChange={handleChange}
        className={
          clsx(
            "border-blue-300 input px-[10px] py-[5px] text-lg bg-white border-2 rounded-[5px] focus:outline-none placeholder:text-black/45 hover:shadow-xl transition-all duration-300 focus:border-blue-700",
            {
              "w-[400px]": typeAsociado?.name === "Pensionado" || Object.keys(typeAsociado).length == 0,
              "w-[300px]": typeAsociado?.name !== "Pensionado"
            }
          )}
      >
        <option value="" className="text-center">
          -- Seleccione tipo de Asociado --
        </option>
        {listOptionsAsociados?.map((option) => (
          <option
            key={option.id}
            value={option.id}
            className="text-center font-bold">
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
