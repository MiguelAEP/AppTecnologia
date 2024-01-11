
import { Route, Routes } from "react-router-dom"
import { Principal } from "./tecnologia/components/Principal"
import { Register } from "./tecnologia/Autenticacion/Register"
import { Login } from "./tecnologia/Autenticacion/Login"
import { Informacion } from "./tecnologia/components/Informacion"
import { ProtectedRoute } from "./tecnologia/Autenticacion/ProtectedRoute"
import { ProductBuy } from "./tecnologia/components/ProductBuy"

function App() {


  return (
    <>

      <Routes>
        <Route path='/' element={<Principal />}>

          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />

        </Route>
        <Route path='/action' element={<ProtectedRoute> <Informacion /></ProtectedRoute>} />
        <Route path='/:nombre' element={<ProtectedRoute> <ProductBuy /></ProtectedRoute>} />
        <Route path='*' element={<h1>No se encuentra la pag</h1>} />
      </Routes>

    </>
  )
}

export default App
