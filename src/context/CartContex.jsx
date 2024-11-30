import { createContext, useContext, useReducer } from "react"

const initialState = {  }

const reducer = ( state, action ) => {

    console.log(action);

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

