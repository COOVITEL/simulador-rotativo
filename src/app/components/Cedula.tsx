export default function Cedula() {
  return (
    <div className="input flex flex-row items-center justify-between">
      <label
        htmlFor="cedula"
        className="text-blue-900 text-md font-semibold bg-white"
      >
        Numero de Identificación
      </label>
      <input
        required
        id="cedula"
        type="number"
        placeholder="Numero de Idenfiticación"
        name="cedula"
        className="border-blue-300 input px-[10px] py-[5px] text-lg bg-white border-2 rounded-[5px] w-[350px] focus:outline-none placeholder:text-black/45
        hover:shadow-xl transition-all duration-300 focus:border-blue-700 text-center"
      />
    </div>
  );
}
