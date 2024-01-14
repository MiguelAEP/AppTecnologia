import React from 'react'
import '../../styles/Result.css'
export const Carrusel = ({ productos }) => {
    return (
        <>

            <div id="carouselExampleInterval" className="carousel slide" style={{ height: '35vh', backgroundColor: 'beige' }} data-bs-ride="carousel">
                <div className="carousel-inner carouse">
                    <div className="carousel-item active" data-bs-interval="1000">
                        <img src={`/imagenes/${productos[0].thumbnail}.jpg`} style={{ height: '35vh' }} className="d-block w-100" />

                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img src={`/imagenes/${productos[1].thumbnail}.jpg`} style={{ height: '35vh' }} className="d-block w-100" />
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img src={`/imagenes/${productos[2].thumbnail}.jpg`} style={{ height: '35vh' }} className="d-block w-100" />
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img src={`/imagenes/${productos[3].thumbnail}.jpg`} style={{ height: '35vh' }} className="d-block w-100" />
                    </div>
                </div>
            </div>

        </>
    )
}
