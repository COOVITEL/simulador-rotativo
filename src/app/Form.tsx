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
import { useStore } from "../store/store";
import React from "react";

export default function FormSimulacion() {

  const { descuentos } = useStore()

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
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
      <div className="w-[50%] flex justify-center">

        <Descuentos />
      {
        descuentos.capacidadDescuento == 0
        &&
        <span>No tiene capacidad de Pago</span>
      }
      {
        (descuentos.capacidadDescuento != 0 && descuentos.capacidadDescuento != undefined)
        &&
        <button
        className="bg-blue-800 text-white rounded-xl w-[200px]"
        >
          Calcular
        </button>
      }
      </div>

    </form>
  );
}
