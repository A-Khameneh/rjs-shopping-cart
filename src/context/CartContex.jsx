import { createContext, useContext, useReducer } from "react"
import { sumProducts } from "../helper/helper";

const initialState = { 

    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false,

}

const reducer = ( state, action ) => {
 
    switch ( action.type ) {

        case "ADD_ITEM":
            if( !state.selectedItems.find( item => item.id === action.payload.id ) ) {

                state.selectedItems.push({ ... action.payload, quantity: 1 })

            }

            return {

                selectedItems: [ ... state.selectedItems ],            
                ... sumProducts( state.selectedItems ),
                checkout: false,

            }

        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(
    
                item => item.id !== action.payload.id
    
            );

            return {

                ... state,
                selectedItems: [ ... newSelectedItems ],
                ... sumProducts( newSelectedItems ),

            }

        case "INCREASE":
            const increaseIndex = state.selectedItems.findIndex( item => item.id === action.payload.id );
            state.selectedItems[ increaseIndex ].quantity++;

            return {

                ... state,
                ... sumProducts( state.selectedItems ),

            }

        case "DECREASE":
            const decreaseIndex = state.selectedItems.findIndex( item => item.id === action.payload.id );
            state.selectedItems[ decreaseIndex ].quantity--;
    
            return {
    
                ... state,
                ... sumProducts( state.selectedItems ),
    
            }

        case "CHECKOUT":
            return {

                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: true,

            }
             
        default:
            throw new Error("Invalid Action!");
    }

    console.log(state);

}

const cartContext = createContext();

export default function CartProvider({ children }) {

    const [ state, dispatch ] = useReducer( reducer, initialState )

    return (

        <cartContext.Provider value={{ state, dispatch }} >

            { children }

        </cartContext.Provider>

    )

}
export const useCart = () => {

    const { state, dispatch } = useContext( cartContext );
    return [ state, dispatch ];

}


