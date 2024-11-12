import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

import api from "../services/config";

const PruductContext = createContext();

export default function ProductsProvider( { children } ) {

    const [ products, setProducts ] = useState([]);

    useEffect( () => {

        const fetchProducts = async () => {

            try {
                
                const res = await api.get("/products");
                setProducts(res);

            } catch (error) {

                console.log(error);
                
            }

        }

        fetchProducts();

    }, [] )

    return (

        <PruductContext.Provider value={ products } > { children } </PruductContext.Provider>

    )

}

const useProducts = () => {

    const products = useContext( PruductContext );
    return products;

}

export { useProducts };