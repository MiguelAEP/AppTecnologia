import React, { useState } from 'react'
import { Header } from './Header'
import { products as InitialProduct } from '../../Mocks/products.json'
import { Filter } from './Filter';
import { ProductsResult } from './ProductsResult';
import '../../Styles/Principal.css'


export const Principal = () => {


    const [productos, setproductos] = useState(InitialProduct)
    const [categoria, setcategoria] = useState('all')



    function filterCategory() {
        return productos.filter(element => {
            return (categoria === 'all' ||
                element.category === categoria)
        })
    }

    let newProductFiltered = filterCategory()

    return (
        <>
            <Header />

            <section className='pb-3'>
                <h3 className='mt-4'>Buscar por categoria</h3>
                <Filter setcategoria={setcategoria} categoria={categoria} />
            </section>

            <ProductsResult productos={newProductFiltered} filterCategory={filterCategory} />

        </>
    )
}
