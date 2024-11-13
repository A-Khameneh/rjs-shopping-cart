import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductContext";

import styles from "./ProductsPage.module.css";

export default function ProductsPage() {

    const products = useProducts();

    return (

        <div className={ styles.container } >

            <div className={ styles.products } > 

                { !products.length && <Loader /> }
                { products.map( p => <Card key={ p.id }  data={ p }  /> ) } 
                
            </div>
            <div>sidebar</div>

        </div>

    )

}