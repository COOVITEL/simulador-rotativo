export interface State {
    datas: ApiResponse;
    typeAsociado: Partial<TypeAsociado>;
    idAsociado: number;
    escenario: number;
    typeCredit: Partial<Rotativos>;
    salario: string;
    desprendibles: string;
    descuentos: Datas;
    setDatas: (datas: Response) => void;
    setTypeAsociado: (newTypeAsociado: Partial<TypeAsociado>) => void;
    setTypeCredit: (newTypeCredit: Partial<Rotativos>) => void;
    setIdAsociado: (id: number) => void;
    setEscenario: (escenario: number) => void;
    setSalario: (newSalario: string) => void;
    setDesprendible: (newValue: string) => void;
    setDescuentos: (descuentos: Datas) => void
  }
  
  export interface Datas {
    score?: number
    pagaduria?: string; 
    seguridad?: string;
    aportes?: string;
    capacidadDescuento?: string;
  }

  export interface ApiResponse {
    typesAsociados?: TypeAsociado[];
    escenarios?: Escenarios[];
    rotativos?: Rotativos[];
  }
  
  export interface TypeAsociado {
    id: number;
    name: string;
    montoMax: string;
    plazoMax: number;
    requisitos?: string;
  }
  
  export interface Escenarios {
    id: number;
    name: string;
    salarioMin: string;
    salarioMax: string;
  }
  
  export interface Rotativos {
    id: number;
    riesgo: string;
    scoreMin: number;
    scoreMax?: number;
    EA: number;
    NMV: number;
    plazo: number;
    escenario: number;
    typeAsociado: number;
  }