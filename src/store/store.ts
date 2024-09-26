import { create } from "zustand";
import { ApiResponse, Datas, Rotativos, State, TypeAsociado } from "./types";

export const useStore = create<State>((set) => ({
  datas: {},  
  typeAsociado: {},
  idAsociado: 0,
  escenario: 0,
  typeCredit: [],
  salario: "",
  desprendibles: "",
  descuentos: {
    score: 0,
    seguridad: 0,
    aportes: 0,
    capacidadDescuento: undefined,
    pagaduria: "",
    dateAfiliacion: "",
    scoreMinimo: 1100,
  },
  setDatas: (newDatas: ApiResponse) => set(() => ({
    datas: newDatas
  })),
  setTypeAsociado: (newTypeAsociado: Partial<TypeAsociado>) => set((state) => ({
    typeAsociado: { ...state.typeAsociado, ...newTypeAsociado }
  })),
  setTypeCredit: (newTypeCredit: Partial<Rotativos>[]) => set(() => ({
    typeCredit: newTypeCredit
  })),
  setIdAsociado: (id: number) => set(() => ({
    idAsociado: id
  })),
  setEscenario: (escenario: number) => set(() => ({
    escenario: escenario
  })),
  setSalario: (newValue: string) => set(() => ({
    salario: newValue
  })),
  setDesprendible: (newValue: string) => set(() => ({
    desprendibles: newValue
  })),
  setDescuentos: (newDescuentos: Datas) => set(() => ({
    descuentos: newDescuentos
  }))
}));
