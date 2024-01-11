import React from 'react'
import { useParams } from 'react-router-dom'

import '../../Styles/Result.css'

import { ProductAuth } from './Context/ProductsC'
import { useState } from 'react'
import { Header } from './Header'
import { ModalToBuy } from './ModalToBuy'

export const ProductBuy = () => {

    const { getProducts } = ProductAuth()
    let { nombre } = useParams()

    function obtenerProductoSeleccionado() {
        let producto = getProducts.filter(elemento => elemento.id === parseInt(nombre))
        return producto[0]
    }
    const [productoSeleccionado, setproductoSeleccionado] = useState(obtenerProductoSeleccionado())

    return (
        <>

            <Header />

            <div >
                <div className='especi'>
                    <img className='imgEspecificacion' src={productoSeleccionado.thumbnail} />
                    <div className='especificaciones'>

                        <div className='divEspecificacion'>
                            <h2>{productoSeleccionado.title}</h2>
                        </div>

                        <div className='divEspecificacion'>
                            <h5 style={{ color: 'rgb(216, 215, 45)' }}>S/.{productoSeleccionado.price}</h5>
                        </div>

                        <div className='divEspecificacion'>
                            <h5>Categoria : </h5>
                            <h5>{productoSeleccionado.category}</h5>
                        </div>

                        <div className='divEspecificacion'>
                            <h5>Stock : </h5>
                            <h5>{productoSeleccionado.stock}</h5>
                        </div>

                        <div className='divEspecificacion'>
                            <h5>Descripcion : </h5>
                            <h5>{productoSeleccionado.description.substring(0, 16)}</h5>
                        </div>

                        <button className='buttonBuy' data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar</button>
                    </div>


                </div>

                <ModalToBuy productoSeleccionado={productoSeleccionado} />


            </div >
        </>
    )
}
