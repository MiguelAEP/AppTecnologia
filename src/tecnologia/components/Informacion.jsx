import React from 'react'
import { Header } from './Header'
import '../../styles/Informacion.css'
export const Informacion = () => {
    return (
        <>
            <Header />

            <div className='principal'>
                <div className='imgDiv'>
                    <img src='./src/assets/imagenes/70108142.jpg' />
                </div>
                <div className='resumen'>
                    <h2>Resumen</h2>
                    <h4>Me llamo Miguel, en este proyecto hecho con :</h4>

                    <ul>
                        <li>React</li>
                        <li>boostrap</li>
                        <li>CSS</li>
                        <li>HTML</li>
                    </ul>

                    <h4>Se aplico los siguientes conceptos:</h4>
                    <ul>
                        <li>Rutas Protegidas</li>
                        <li>Rutas anidadas</li>
                        <li>Auth</li>
                        <li>Hooks: Context , useState , useEffect </li>
                        <li>Filtros</li>
                        <li>React Print</li>
                        <li>Reutilizacion de componentes</li>
                        <li>Styles, Modales</li>
                        <li>Seccion de impresion</li>
                        <li>Carrusel</li>
                    </ul>
                </div>
            </div>


        </>
    )
}
