import { useEffect, useState } from "react"
import { useStore } from "../../store/store"
import SeguridadSocial from "../../utils/seguridadSocial"

export default function Descuentos() {

    const { setDescuentos, descuentos, typeAsociado, salario } = useStore()
    const [seguridad, setSeguridad] = useState<number>()

    useEffect(() => {
        if (typeAsociado.name && descuentos.pagaduria) {
            setSeguridad(SeguridadSocial(salario, typeAsociado.name, descuentos.pagaduria))
        }
    }, [descuentos.score])



    return (
        <div className="flex flex-row gap-5">
            <div>
                <span>Descuentos de Seguridad Social</span>
                <span>$ {seguridad}</span>
            </div>
            <div>
                <span>Aportes Coovitel</span>
                <span>$</span>
            </div>
            <div>
                <span>Capacidad de Descuento (Nómina)</span>
                <span></span>
            </div>
        </div>
    )
}