import { useStore } from "../../store/datas/store";
import React, { useState } from "react";

export default function Pagaduria() {

  const { setDescuentos, descuentos } = useStore()
  const [value, setValue] = useState("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    setDescuentos({
      ...descuentos,
      pagaduria: event.target.value,
    })
  }

  return (
    <div className="input flex flex-row justify-between items-center">
      <label
        htmlFor="input"
        className="text-blue-900 text-md font-semibold bg-white"
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
        name="pagaduria"
        className="border-blue-300 input px-[10px] py-[5px] w-[350px] text-lg bg-white border-2 rounded-[5px] text-center focus:outline-none placeholder:text-black/45 hover:shadow-xl transition-all duration-300 focus:border-blue-700"
      />
    </div>
  );
}
