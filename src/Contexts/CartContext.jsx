import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider (props) {

    //setting global cart state
    const [cart , setCart] = useState([]);

    //storing and retrieving cart state from local storage
    useEffect(()=>{
        const storedCartState = localStorage.getItem('cartState');
        if(storedCartState){
            setCart(JSON.parse(storedCartState))
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('cartState', JSON.stringify(cart))
    },[cart])

    //global functions for adding/ removing from global cart state
    const addToCart = item => {
        setCart([...cart , item]);
    };

    const removeFromCart = item => {
        setCart(cart.filter(product => product.id !== item.id))
    };

    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart, setCart}}>
            {props.children}
        </CartContext.Provider>
    )
}