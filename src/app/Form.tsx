import Afiliacion from "./components/Afiliacion";
import Antiguedad from "./components/Antiguedad";
import Cedula from "./components/Cedula";
import Desprendibles from "./components/Desprendibles";
import Name from "./components/Name";
import Pagaduria from "./components/Pagaduria";
import Salario from "./components/Salario";
import Score from "./components/Score";
import Descuentos from "./descuentos/Descuentos";

export default function FormSimulacion() {
  return (
    <form className="flex flex-col justify-center items-center gap-2 sm:px-60 px-1 mt-10">
      <div className="flex flex-row gap-10">
        <Name />
        <Cedula />
      </div>
      <div className="flex flex-row gap-10">
        <Afiliacion />
        <Pagaduria />
        <Antiguedad />
      </div>
      <div className="flex flex-row gap-10">
        <Salario />
        <Desprendibles />
      </div>
      <div className="">
        <Score />
      </div>

      <Descuentos />
      
      <button
        className="bg-blue-800 text-white rounded-xl w-[200px]"
        type="submit"
      >
        Calcular
      </button>

    </form>
  );
}
