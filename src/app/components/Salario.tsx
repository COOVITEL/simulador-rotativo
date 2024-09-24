import React, { useState } from "react";
import { setValue } from "../../utils/setValue";
import { useStore } from "../../store/store";

export default function Salario() {

  const { setSalario } = useStore()
  const [currValue, setCurrValue] = useState("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setValue(event.target.value.replace(/\./g, ''))
    setCurrValue(setValue(event.target.value))
    setSalario(setValue(event.target.value))
  }

  return (
    <div className="input flex flex-col w-fit static">
      <label
        htmlFor="input"
        className="text-blue-900 text-md font-semibold relative top-2 ml-[7px] px-[10px] bg-white w-fit"
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
        className="border-blue-300 input px-[10px] py-[5px] text-lg bg-white border-2 rounded-[5px] w-[400px] focus:outline-none placeholder:text-black/45 hover:shadow-xl
          transition-all duration-300 focus:border-blue-700 text-center"
      />
    </div>
  );
}
