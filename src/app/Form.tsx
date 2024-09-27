import Afiliacion from "./components/Afiliacion";
import Antiguedad from "./components/Antiguedad";
import Cedula from "./components/Cedula";
import Desprendibles from "./components/Desprendibles";
import Name from "./components/Name";
import Pagaduria from "./components/Pagaduria";
import Salario from "./components/Salario";
import Score from "./components/Score";
import DateAfiliacion from "./components/DateAfiliacion";
import Descuentos from "./descuentos/Descuentos";
import { useStore } from "../store/datas/store";
import React from "react";
import { useDialog } from "../store/ui/store";

export default function FormSimulacion() {

  const { descuentos, setDescuentos } = useStore()
  const { setState } = useDialog()

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    setState(true)
    const fields = Object.fromEntries(new window.FormData(event.target))
    setDescuentos({
      ...descuentos,
      formulario: fields
    })
  }

  return (
    <form className="flex flex-row w-full justify-between sm:px-16 px-1 mt-10 gap-10" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2 w-[50%]">
          <Name />
          <Cedula />
          <DateAfiliacion />
          <Afiliacion />
          <Pagaduria />
          <Antiguedad />
          <Salario />
          <Desprendibles />
          <Score />
      </div>
      <div className="h-[450px] w-[2px] rounded-full bg-slate-400"></div>
      <div className="w-[50%] flex flex-col justify-start items-center">

        <Descuentos />
      {
        descuentos.capacidadDescuento == 0
        &&
        <span className="mt-5 text-red-600 font-bold text-2xl">No tiene capacidad de Pago</span>
      }
      {
        (descuentos.montoMaximo > 0)
        &&
        <button
        className="bg-blue-800 text-white text-xl py-2 rounded-xl w-[200px] mt-10 hover:bg-blue-600 hover:scale-95 transition-all duration-300 hover:shadow-6xl hover:shadow-coloblue"
        >
          Calcular
        </button>
      }
      </div>

    </form>
  );
}
