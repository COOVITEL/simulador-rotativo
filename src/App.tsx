import { useEffect } from "react"
import './App.css'
import { getDatas } from "./store/datas/callDatas"
import { useStore } from "./store/datas/store"
import FormSimulacion from "./app/Form"
import Dialog from "./app/ui/dialog-results/Dialog"
import { useDialog } from "./store/ui/store"

function App() {

  const {setDatas} = useStore()
  const { state } = useDialog()

  useEffect(() => {
    const fetchDatas = async () => {
      const response = await getDatas()
      setDatas(response)
    }
    fetchDatas()
  }, [])

  return (
    <main className="h-full w-screen flex justify-center items-center flex-col relative">
      <img 
        src="/images/cr.jpg" 
        alt="Image credito rotativo" 
        className="h-[110px]"
      />
     <FormSimulacion />
     {
       state&&<Dialog />
     }
    </main>
  )
}

export default App
