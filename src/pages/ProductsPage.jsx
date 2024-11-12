import { useProducts } from "../context/ProductContext"

export default function ProductsPage() {

    const products = useProducts();
    console.log(products)

    return (

        <p>products page</p>

    )

}