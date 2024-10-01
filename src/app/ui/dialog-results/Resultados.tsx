import { useStore } from "../../../store/datas/store";
import { pagoMensual } from "../../../utils/cuota";
import { downloadPDF } from "../../../utils/downloadPDF";
import { setValue } from "../../../utils/setValue";

export default function Resultados() {

  const { descuentos, typeAsociado } = useStore()

  const handleDownload = () => {
    downloadPDF(descuentos, typeAsociado)
  }

  return (
    <div className="mt-12 px-8 flex flex-col items-center gap-1">
      <div className="flex flex-row justify-between bg-slate-200/60 px-6 py-1 border-[1px] rounded-lg border-slate-700 w-full">
        <span className="font-bold text-lg text-blue-900/90 ">Tasa E.A:</span>
        <span className="text-xl font-semibold border-l-2 border-gray-600 w-[320px] text-black text-center">
          {descuentos.credito?.EA} %
        </span>
      </div>
      <div className="flex flex-row justify-between bg-slate-200/60 px-6 py-1 border-[1px] rounded-lg border-slate-700 w-full">
        <span className="font-bold text-lg text-blue-900/90 ">Tasa N.M:</span>
        <span className="text-xl font-semibold border-l-2 border-gray-600 w-[320px] text-black text-center">
          {descuentos.credito?.NMV} %
        </span>
      </div>
      <div className="flex flex-row justify-between bg-slate-200/60 px-6 py-1 border-[1px] rounded-lg border-slate-700 w-full">
        <span className="font-bold text-lg text-blue-900/90 ">Monto Solicitado:</span>
        <span className="text-xl font-semibold border-l-2 border-gray-600 w-[320px] text-black text-center">
          ${setValue(descuentos.monto.toString())}
        </span>
      </div>
      <div className="flex flex-row justify-between bg-slate-200/60 px-6 py-1 border-[1px] rounded-lg border-slate-700 w-full">
        <span className="font-bold text-lg text-blue-900/90 ">Valor Cuota:</span>
        <span className="text-xl font-semibold border-l-2 border-gray-600 w-[320px] text-black text-center">
          ${descuentos.credito?.NMV && setValue(pagoMensual(descuentos.monto, descuentos.credito?.NMV, descuentos.credito?.plazo).toString())}
        </span>
      </div>
      <div className="flex flex-row justify-between bg-slate-200/60 px-6 py-1 border-[1px] rounded-lg border-slate-700 w-full">
        <span className="font-bold text-lg text-blue-900/90 ">Requisitos:</span>
        <span className="text-xl font-semibold border-l-2 border-gray-600 w-[320px] text-black text-center">
          {typeAsociado.requisitos ? typeAsociado.requisitos : 'Firma'}
        </span>
      </div>
      <button
        className="bg-blue-800 w-[260px] text-white text-xl mt-4 px-4 py-1 rounded-lg shadow-colorblack hover:scale-105 transition-all duration-300"
        onClick={handleDownload}
        >  
        Descargar Comprobante
      </button>
    </div>
  );
}
