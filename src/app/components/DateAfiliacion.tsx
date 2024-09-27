import React from "react";
import { useStore } from "../../store/datas/store";

export default function dateAfiliacion() {

  const { setDescuentos, descuentos } = useStore()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescuentos({
      ...descuentos,
      dateAfiliacion: event.target.value
    })
  };

  return (
    <div className="input flex flex-row items-center justify-between">
      <label
        htmlFor="input"
        className="text-blue-900 text-md font-semibold bg-white w-fit"
      >
        Fecha de ultima Afiliación:
      </label>
      <input
        onChange={handleChange}
        className="border-blue-300 input px-[10px] py-[5px] text-lg bg-white border-2 rounded-[5px] w-[350px] focus:outline-none placeholder:text-black/45 hover:shadow-xl
        transition-all duration-300 focus:border-blue-700 text-center"
        type="date"
        id="years"
        min="1940"
        max="2024"
        name="years"
        placeholder="Año de Afiliación"
        required
      />
    </div>
  );
}
