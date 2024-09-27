import { IoCloseOutline } from "react-icons/io5";
import { useDialog } from "../../../store/ui/store";
import Resultados from "./Resultados";

export default function Dialog() {

  const { setState } = useDialog()

  return (
<div className="absolute h-screen w-screen top-0 left-0 z-10">
  <div 
    onClick={() => setState(false)} 
    className="h-full w-full backdrop-filter backdrop-blur-sm backdrop-brightness-75 z-10"
  ></div>

  <div className="bg-white h-[350px] w-[800px] border-2 border-slate-600 z-20 rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl">
    <button className="absolute right-0 m-2" onClick={() => setState(false)}>
      <IoCloseOutline size={30} />
    </button>
    <Resultados />
  </div>
</div>
  );
}
