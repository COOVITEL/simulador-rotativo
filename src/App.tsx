import { useEffect } from "react"
import './App.css'
import { getDatas } from "./store/callDatas"
import { useStore } from "./store/store"
import FormSimulacion from "./app/Form"

function App() {

  const {setDatas} = useStore()

  useEffect(() => {
    const fetchDatas = async () => {
      const response = await getDatas()
      setDatas(response)
      console.log(response)
    }
    fetchDatas()
  }, [])

  return (
    <main className="h-full w-screen flex justify-center items-center flex-col ">
      <img 
        src="/images/cr.jpg" 
        alt="Image credito rotativo" 
        className="h-[110px]"
      />
     <FormSimulacion />
    </main>
  )
}

export default App
