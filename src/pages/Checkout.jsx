import { useCart } from "../context/CartContex";

import BascketCard from "../components/BasketCard";
import BasketSideBar from "../components/BasketSideBar";

import styles from "./Checkout.module.css";

export default function Checkout() {

    const [ state, dispatch ] = useCart();

    const clickHandler = ( type, payload ) => dispatch({ type, payload });

    if( !state.itemsCounter ) {

        return (

            <div className={ styles.container } >

                <p> EMPTY!!! </p>

            </div>

        )

    }

    return (

        <div className={ styles.container } >

            <BasketSideBar state={ state } clickHandler={ clickHandler } />

            <div className={ styles.products } >

                { state.selectedItems.map( product => ( <BascketCard key={ product.id } data={ product } clickHandler={ clickHandler } /> ) ) }

            </div>

        </div>

    )

}