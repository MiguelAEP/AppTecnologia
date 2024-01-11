import React from 'react'
import { useRef } from 'react';
import { useReactToPrint } from "react-to-print";

import '../../styles/Result.css'
export const ModalToBuy = ({ productoSeleccionado }) => {

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <>

            <div ref={componentRef} className="modal fade " id="exampleModal" aria-labelledby="exampleModalLabel" >
                <div className="modal-dialog" >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">EPSON ELECTRO SAC: </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" >
                            <div className='divEspecificacion' style={{ width: '23vw' }}>
                                <h2>{productoSeleccionado.title}</h2>
                            </div>

                            <div className='divEspecificacion' style={{ width: '23vw' }}>
                                <h5 style={{ color: 'rgb(216, 215, 45)' }}>S/.{productoSeleccionado.price}</h5>
                            </div>

                            <div className='divEspecificacion' style={{ width: '23vw' }}>
                                <h5>Categoria : </h5>
                                <h5>{productoSeleccionado.category}</h5>
                            </div>

                            <div className='divEspecificacion' style={{ width: '23vw' }}>
                                <h5>Descripcion : </h5>
                                <h5>{productoSeleccionado.description.substring(0, 24)}</h5>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                            <button type="button" className="btn btn-danger" onClick={handlePrint}>Imprimir factura</button>





                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
