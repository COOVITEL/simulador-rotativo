import { useState } from "react";
import { setValue } from "../../utils/setValue";
import { useStore } from "../../store/datas/store";

export default function Monto() {
  const [monto, setMonto] = useState("");
  const {descuentos, setDescuentos} = useStore()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setMonto(setValue(value));
    const numValue = Number(value.replace(/\./g, ''))
    let maxValue = numValue
    if (numValue > descuentos.montoMaximo) {
      maxValue = descuentos.montoMaximo
    }
    setMonto(setValue(maxValue.toString()))
    setDescuentos({
      ...descuentos,
      monto: maxValue
    })
  };

  return (
    <div className="input flex flex-row justify-between items-center">
      <label
        htmlFor="input"
        className="text-blue-900 text-left text-md font-semibold bg-white"
      >
        Monto a Solicitar
      </label>
      <input
        required
        onChange={handleChange}
        value={monto != "" ? monto : ""}
        id="monto"
        type="text"
        placeholder="Ingrese el monto"
        name="monto"
        className="border-blue-300 input px-[10px] py-[5px] text-lg bg-white border-2 rounded-[5px] w-[350px] focus:outline-none placeholder:text-black/45 hover:shadow-xl
          transition-all duration-300 focus:border-blue-700 text-center"
      />
    </div>
  );
}
