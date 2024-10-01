import React, { useEffect, useState } from "react";
import { useStore } from "../../store/datas/store";
import { capacidadDescuento } from "../../utils/capacidadDescuento";
import { Rotativos } from "../../store/datas/types";
import { montoMax } from "../../utils/cupoMaximo";

export default function Score() {
  const [value, setValue] = useState<number>(0);
  const { desprendibles, salario, setDescuentos, descuentos, typeCredit } = useStore();
  const [controlValue, setControlValue] = useState(false);

  useEffect(() => {
    setValue(0);
  }, [salario, desprendibles]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setControlValue(false);
    let val = Number(event.target.value);
    setValue(val);
    if (val > 1100) {
      setValue(1100);
    }
    if (!salario || !desprendibles) {
      val = 0;
      setControlValue(true);
      setValue(val);
    }
    setDescuentos({
      ...descuentos,
      score: val,
    });
    if (descuentos.seguridad && descuentos.aportes) {
      let capacidad = capacidadDescuento(
        salario,
        desprendibles,
        descuentos.seguridad,
        descuentos.aportes
      );
      if (capacidad < 0) {
        capacidad = 0;
      }
      setDescuentos({
        ...descuentos,
        capacidadDescuento: capacidad,
        score: val,
      });
    }
    const credit = typeCredit?.filter(credito => {
      if (credito.scoreMin) {
        const minScore = credito.scoreMin
        const maxScore = credito.scoreMax ? credito.scoreMax : 1100
        return val >= minScore && val <= maxScore
      }
    })
    if (credit.length > 0 && descuentos.capacidadDescuento) {
      const filterCredito = credit[0] as Rotativos
      const montoMaximo = montoMax(descuentos.capacidadDescuento, filterCredito.NMV, filterCredito.plazo)
      setDescuentos({
        ...descuentos,
        credito: filterCredito,
        montoMaximo: montoMaximo
      })
    }
  };

  return (
    <div className="input flex flex-row justify-between items-center">
      <label
        htmlFor="score"
        className="text-blue-900 text-md font-semibold bg-white w-fit"
      >
        Puntaje Score
      </label>
      <input
        required
        value={value != 0 ? value : ""}
        onChange={handleChange}
        id="score"
        type="number"
        placeholder="Score"
        name="score"
        min={descuentos?.scoreMinimo}
        className="border-blue-300 input px-[10px] py-[5px] text-lg bg-white border-2 rounded-[5px] w-[350px] focus:outline-none placeholder:text-black/45
          hover:shadow-xl transition-all duration-300 focus:border-blue-700 text-center"
      />
      {controlValue && (
        <span className="text-red-700 font-semibold">
          Por favor ingrese Salario y Descuentos
        </span>
      )}
      {descuentos.scoreMinimo && value < descuentos.scoreMinimo && descuentos.scoreMinimo != 1100 &&<span className="text-red-500 underline">El score minimo es de {descuentos.scoreMinimo}</span>}
    </div>
  );
}
