import { useStore } from "../../store/store"
import { setValue } from "../../utils/setValue"

export default function Descuentos() {

    const { descuentos } = useStore()

    return (
        <div className="flex flex-col w-[78%] h-[200px] rounded-md px-2 border-[1px] border-gray-500 mt-6">
            <div className="flex flex-row justify-between">
                <span className="font-semibold text-lg ">Descuentos de Seguridad Social</span>
                <span className="text-xl text-black">$ {descuentos.seguridad ? setValue(descuentos.seguridad.toString()) : 0}</span>
            </div>
            <div className="flex flex-row justify-between">
                <span className="font-semibold text-lg ">Aportes Coovitel</span>
                <span className="text-xl text-black">$ {descuentos.aportes ? setValue(descuentos.aportes.toString()) : 0 }</span>
            </div>
            <div className="flex flex-row justify-between">
                <span className="font-semibold text-lg ">Capacidad de Descuento (Nómina)</span>
                <span className="text-xl text-black">$ {descuentos.capacidadDescuento ? setValue(descuentos.capacidadDescuento.toString()) : 0}</span>
            </div>
        </div>
    )
}