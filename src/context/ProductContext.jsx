import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

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

        <ProductsProvider value={ products } > { children } </ProductsProvider>

    )

}