import React, { useEffect, useState } from "react";
import { setValue } from "../../utils/setValue";
import { useStore } from "../../store/store";
import { replaceNum } from "../../utils/repalceNum";

export default function Desprendibles() {

  const { setDesprendible, salario, datas, typeAsociado, setTypeCredit, setDescuentos, descuentos } = useStore()
  const { escenarios, rotativos } = datas
  const [currValue, setCurrValue] = useState("")

  useEffect(() => {
    setCurrValue("")
  }, [salario])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCurrValue(setValue(value))
    setDesprendible(setValue(value))
    const escenario = escenarios?.filter(val => {
      const salarioNum = replaceNum(salario);
      const salarioMinNum = replaceNum(val.salarioMin);
      const salarioMaxNum = val.salarioMax ? replaceNum(val.salarioMax) : null;
      return salarioNum >= salarioMinNum && (!salarioMaxNum || salarioNum < salarioMaxNum);
    });
    if (escenario) {
      const rotativo = rotativos?.filter(rot => rot.typeAsociado === typeAsociado.id && escenario[0].id === rot.escenario)
      if (rotativo ) {
        setTypeCredit(rotativo)
        let scoreMin = 1100
        rotativo.map((credit) => {
          if (credit.scoreMin) {
            if (credit.scoreMin < scoreMin) {
              scoreMin = credit.scoreMin;
            }
          }
        });
        setDescuentos({
          ...descuentos,
          scoreMinimo: scoreMin
        })
      }
    }
  }

  return (
    <div className="input flex flex-row justify-between items-center">
      <label
        htmlFor="input"
        className="text-blue-900 text-md font-semibold bg-white w-fit"
      >
        Valor Descuentos Desprendibles
      </label>
      <input
        required
        value={currValue}
        onChange={handleChange}
        id="salario"
        type="text"
        placeholder="Ingrese valor"
        name="input"
        className="border-blue-300 input px-[10px] py-[5px] text-lg bg-white border-2 rounded-[5px] w-[350px] focus:outline-none placeholder:text-black/45 hover:shadow-xl
          transition-all duration-300 focus:border-blue-700 text-center"
      />
    </div>
  );
}
