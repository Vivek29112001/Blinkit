import { createContext , useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart,setCart]= useState([]);
    const addToCart = (product, callback)=>{
        setCart((prev)=> {
            const updatedCart = [...prev, product];
            if(callback) callback(updatedCart);
            return updatedCart;
        })
    }
    return(
        <CartContext.Provider
        value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

