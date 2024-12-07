import { useCart } from "../context/CartContex";

import BascketCard from "../components/BasketCard";

export default function Checkout() {

    const [ state, dispatch ] = useCart();

    const clickHandler = ( type, payload ) => dispatch({ type, payload });

    if( !state.itemsCounter ) return {

        

    }

    return (

        <div>

            <div>

                { state.selectedItems.map( product => ( <BascketCard key={ product.id } data={ product } clickHandler={ clickHandler } /> ) ) }

            </div>

        </div>

    )

}