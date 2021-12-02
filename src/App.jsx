import { Formulario } from "./components/Formulario"
import { Header } from "./components/Header"
import { ListPatiente } from "./components/ListPatiente"


function App() {

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex " >
        <Formulario />
        <ListPatiente />
      </div>
    </div>
  )
}

export default App
