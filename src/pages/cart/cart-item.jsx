import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import "./cart.css"
import React from "react";

export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const formattedPrice = price.toFixed(2)
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext)
    
    return (
        <div className="cartItem">
            <img src={productImage} alt={productName}/>
            <div className="description">
                <p>
                    <b>
                        {productName}
                    </b>
                </p>
                <p>
                    ${formattedPrice}
                </p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number (e.target.value), id)}/>
                    <button onClick={() => addToCart(id)}> + </button>
                </div>

            </div>
        </div>
    )
}