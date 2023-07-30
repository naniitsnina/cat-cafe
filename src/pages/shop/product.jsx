import { useContext } from "react"
import { ShopContext } from "../../context/shop-context"
import React from "react"
import { ShoppingCartSimple } from "phosphor-react"

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data
    const formattedPrice = price.toFixed(2)
    const {addToCart, cartItems} = useContext(ShopContext);

    const cartItemAmount = cartItems[id]
    return (
        <div className="product">
            <div className="card">
                <img src={productImage} alt={productName} /> 
                <div className="description">
                    <p>
                        <b>{productName}</b>
                    </p>
                    <p>
                        ${formattedPrice}
                    </p>
                </div>
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}> 
                + <ShoppingCartSimple size={32}/> {cartItemAmount > 0 && <> | {cartItemAmount}</>} 
            </button>
        </div>
    )
}