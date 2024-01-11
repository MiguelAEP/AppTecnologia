import React from 'react'
import '../../Styles/Result.css'
import { useAuth } from '../Autenticacion/Context/Auth'
import { useNavigate } from 'react-router-dom'
import { Carrusel } from './Carrusel'
export const ProductsResult = ({ productos }) => {

    const navigate = useNavigate()
    const { isAutenticated } = useAuth()

    const botonHabilitado = {
        'display': 'block'
    }

    const botonDesHabilitado = {
        'display': 'none'
    }

    const goToCarrito = (id) => {
        navigate(`/${id}`)
    }

    return (
        <>

            <Carrusel productos={productos} />

            <div className='row'>
                <div className='productsPrincipal'>
                    {
                        productos.map(element => (


                            <div key={element.id} className='elementCards'>
                                <img src={element.thumbnail} />
                                <div>
                                    <h4>{element.title}</h4>
                                    <h5>{element.category}</h5>
                                    <h5>{element.price}</h5>
                                    <h5>{element.description.substring(0, 16)}</h5>
                                </div>
                                <button onClick={() => goToCarrito(element.id)}
                                    className='btn btn-success '
                                    style={isAutenticated ? botonHabilitado : botonDesHabilitado} >
                                    Agregar
                                </button>
                            </div>



                        ))
                    }
                </div>



            </div >

        </>
    )
}
