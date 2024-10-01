import React, { useState } from "react";
import { antiguedad } from "../../utils/antiguedad";
import { useStore } from "../../store/datas/store";

export default function Antiguedad() {
  const { typeAsociado } = useStore()
  const [control, setControl] = useState<boolean>();
  const [value, setValue] = useState("")
  // const [time, setTime] = useState("")

  const handleTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    const days = antiguedad(event.target.value);
    // setTime(days.message)
    setControl(false)
    setValue(event.target.value)
    if (days.number < 3) {
      setControl(true)
      setValue("")
    }
  };

  if (!typeAsociado?.name || typeAsociado.name === "Pensionado") {
    return null;
  }

  return (
    <div className="flex flex-col inside">
      <div className="flex flex-row justify-between items-center">

      <label
        htmlFor="input"
        className="text-blue-900 text-md font-semibold bg-white w-fit"
        >
        Antiguedad Laboral
      </label>
      <input
        required
        value={value}
        id="antiguedad"
        type="date"
        name="antiguedad"
        onChange={handleTime}
        className="border-blue-300 input px-[10px] py-[5px] text-lg bg-white border-2 rounded-[5px] w-[350px] focus:outline-none placeholder:text-black/45 hover:shadow-xl
        transition-all duration-300 focus:border-blue-700 text-center"
        />
      </div>
      {/* {!control&&<span>{time}</span>} */}
      {control&&<span className="text-red-500 font-semibold text-sm">La antiguedad laboral debe ser mayor o igual a 3 meses</span>}
    </div>
  );
}
