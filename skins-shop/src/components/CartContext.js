import {createContext, useState} from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    console.log('car list',cartList);
    const addToCart = (item, quantity) => {
        if (quantity > 0) {
            const newItem = { ...item, quantity };
            setCartList([...cartList, newItem]);
        }
    };
    const isInCart = (id) => {
        const checkInCart = cartList.filter((i) => i.id === id).length > 0;
        return checkInCart;
    };

    const removeToCart = (itemD) => {
        const newCartList = cartList.filter((i) => i.id !== itemD.id);
        setCartList(newCartList);
    };
    const clear = () => {
        setCartList([]);
    };
    return (
        <CartContext.Provider
            value={{ cartList, addToCart, removeToCart, clear, isInCart }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
