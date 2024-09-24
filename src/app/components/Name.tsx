export default function Name() {
  return (
    <div className="input flex flex-col w-fit static">
      <label
        htmlFor="input"
        className="text-blue-900 text-md font-semibold relative top-2 ml-[7px] px-[10px] bg-white w-fit"
      >
        Nombre de Asociado
      </label>
      <input
        required
        id="name"
        type="text"
        placeholder="Nombre de Asociado"
        name="input"
        className="border-blue-300 input px-[10px] py-[5px] text-lg bg-white border-2 rounded-[5px] w-[400px] focus:outline-none placeholder:text-black/45 hover:shadow-xl
        transition-all duration-300 focus:border-blue-700 text-center"
      />
    </div>
  );
}
