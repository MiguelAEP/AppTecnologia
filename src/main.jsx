import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './tecnologia/Autenticacion/Context/Auth.jsx'
import { ProductProvider } from './tecnologia/components/Context/ProductsC.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <AuthProvider>
    <ProductProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductProvider>
  </AuthProvider>

)
