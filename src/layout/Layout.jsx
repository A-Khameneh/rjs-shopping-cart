import { PiShoppingCartSimpleBold } from "react-icons/pi"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContex"

import styles from "./Layout.module.css"

export default function Layout({ children }) {

    const [ state ] = useCart();

    return (

        <>
        
            <header className={ styles.header } >

                <Link to="/products" > Shop </Link>
                <Link to="/checkout" > 

                    <div>    

                        <PiShoppingCartSimpleBold /> 
                        { !!state.itemsCounter && <span> { state.itemsCounter } </span>}

                    </div>

                </Link>

            </header>

            { children }

            <footer className={ styles.footer } > <p> Developed </p> </footer>
        
        </>

    )

}