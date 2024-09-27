import { useEffect } from "react";
import { setValue } from "../../utils/setValue";
import Monto from "../components/Monto";
import { useStore } from "../../store/datas/store";

export default function Descuentos() {
  const { descuentos } = useStore();

  useEffect(() => {}, [descuentos.score]);

  return (
    <div className="flex flex-col gap-3 w-[90%] rounded-md px-2">
      <div className="flex flex-row justify-between bg-slate-200/60 px-6 py-1 border-[1px] rounded-lg border-slate-700">
        <span className="font-normal text-lg ">
          Descuentos de Seguridad Social:
        </span>
        <span className="text-lg font-normal border-l-2 border-gray-600 w-[150px] text-black text-center">
          ${" "}
          {descuentos.seguridad ? setValue(descuentos.seguridad.toString()) : 0}
        </span>
      </div>
      <div className="flex flex-row justify-between bg-slate-200/60 px-6 py-1 border-[1px] rounded-lg border-slate-700">
        <span className="font-normal text-lg ">Aportes Coovitel:</span>
        <span className="text-xl font-normal border-l-2 border-gray-600 w-[150px] text-black text-center">
          $ {descuentos.aportes ? setValue(descuentos.aportes.toString()) : 0}
        </span>
      </div>
      <div className="flex flex-row justify-between bg-slate-200/60 px-6 py-1 border-[1px] rounded-lg border-slate-700">
        <span className="font-normal text-lg ">
          Capacidad de Descuento (Nómina):
        </span>
        <span className="text-xl font-normal border-l-2 border-gray-600 w-[150px] text-black text-center">
          ${" "}
          {descuentos.capacidadDescuento
            ? setValue(descuentos.capacidadDescuento.toString())
            : 0}
        </span>
      </div>
      <div className="flex flex-row justify-between bg-slate-200/60 px-6 py-1 border-[1px] rounded-lg border-slate-700">
        <span className="font-normal text-lg ">Riesgo:</span>
        <span className="text-xl font-normal border-l-2 border-gray-600 w-[150px] text-black text-center">
          {descuentos.credito ? descuentos.credito?.riesgo : "No aplica"}
        </span>
      </div>
      <div className="flex flex-row justify-between bg-slate-200/60 px-6 py-1 border-[1px] rounded-lg border-slate-700">
        <span className="font-normal text-lg ">Monto de Cupo Maximo:</span>
        <span className="text-xl font-normal border-l-2 border-gray-600 w-[150px] text-black text-center">
          {descuentos.credito && descuentos.capacidadDescuento
            ? `$ ${setValue(descuentos.montoMaximo.toString())}`
            : "$ 0"}
        </span>
      </div>
      <div className="flex flex-row justify-between bg-slate-200/60 px-6 py-1 border-[1px] rounded-lg border-slate-700">
        <span className="font-normal text-lg ">Plazo:</span>
        <span className="text-xl font-normal border-l-2 border-gray-600 w-[150px] text-black text-center">
          {descuentos.credito ? descuentos.credito?.plazo : "No aplica"}
        </span>
      </div>
      {descuentos.montoMaximo > 0 && <Monto />}
    </div>
  );
}
