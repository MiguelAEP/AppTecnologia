import React from 'react'
import '../../Styles/Result.css'
export const Carrusel = ({ productos }) => {
    return (
        <>

            <div id="carouselExampleInterval" className="carousel slide" style={{ height: '35vh', backgroundColor: 'beige' }} data-bs-ride="carousel">
                <div className="carousel-inner carouse">
                    <div className="carousel-item active" data-bs-interval="1000">
                        <img src={productos[0].thumbnail} style={{ height: '35vh' }} className="d-block w-100" />
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img src={productos[1].thumbnail} style={{ height: '35vh' }} className="d-block w-100" />
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img src={productos[2].thumbnail} style={{ height: '35vh' }} className="d-block w-100" />
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img src={productos[3].thumbnail} style={{ height: '35vh' }} className="d-block w-100" />
                    </div>
                </div>
            </div>

        </>
    )
}
