export default function Cedula() {
  return (
    <div className="input flex flex-col w-fit static">
      <label
        htmlFor="cedula"
        className="text-blue-900 text-md font-semibold relative top-2 ml-[7px] px-[10px] bg-white w-fit"
      >
        Numero de Identificación Asociado
      </label>
      <input
        required
        id="cedula"
        type="number"
        placeholder="Numero de Idenfiticación"
        name="cedula"
        className="border-blue-300 input px-[10px] py-[5px] text-lg bg-white border-2 rounded-[5px] w-[400px] focus:outline-none placeholder:text-black/45
        hover:shadow-xl transition-all duration-300 focus:border-blue-700 text-center"
      />
    </div>
  );
}
