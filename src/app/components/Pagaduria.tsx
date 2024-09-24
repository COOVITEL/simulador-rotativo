import clsx from "clsx";
import { useStore } from "../../store/store";
import React, { useState } from "react";

export default function Pagaduria() {

  const { typeAsociado, setDescuentos, descuentos } = useStore()
  const [value, setValue] = useState("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    setDescuentos({
      pagaduria: event.target.value,
      ...descuentos
    })
  }

  return (
    <div className="input flex flex-col w-fit static">
      <label
        htmlFor="input"
        className="text-blue-900 text-md font-semibold relative top-2 ml-[7px] px-[10px] bg-white w-fit"
      >
        Nombre de Pagaduria
      </label>
      <input
        required
        id="pagaduria"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Nombre de Pagaduria"
        name="input"
        className={
          clsx(
            "border-blue-300 input px-[10px] py-[5px] text-lg bg-white border-2 rounded-[5px] text-center focus:outline-none placeholder:text-black/45 hover:shadow-xl transition-all duration-300 focus:border-blue-700",
            {
              "w-[400px]": typeAsociado?.name === "Pensionado" || Object.keys(typeAsociado).length === 0,
              "w-[300px]": typeAsociado?.name !== "Pensionado",
            }
          )}
      />
    </div>
  );
}
