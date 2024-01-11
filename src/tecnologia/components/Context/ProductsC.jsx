import { useContext } from "react";
import { createContext } from "react";
import { products } from '../../../Mocks/products.json'
import { useState } from "react";

export const ProductContext = createContext()

export function ProductProvider({ children }) {

    const [getProducts, setgetProducts] = useState(products)
    return (<ProductContext.Provider value={{
        getProducts
    }}
    >
        {children}
    </ProductContext.Provider>)


}

export const ProductAuth = () => useContext(ProductContext)