import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../components/CSS/classpage.css";

const CartPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    // Only render if the URL has the 'cart' query parameter

    const { cart } = useContext(CartContext);
    return (
        <div className="Card-cantainer">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Cart is empty!!!</p>
            ) : (
                cart.map((item, i) => (
                    <div key={i} className="cart-item">
                        <h4>{item.title}</h4>
                        <p>${item.price}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default CartPage;