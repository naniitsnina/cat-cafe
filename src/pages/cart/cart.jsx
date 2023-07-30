import { useContext } from "react"
import { PRODUCTS } from "../../products"
import { ShopContext } from "../../context/shop-context"
import { CartItem } from "./cart-item"
import { useNavigate } from "react-router-dom"
import React from "react"

export const Cart = () => { 
    const { cartItems, getTotalCartAmount } = useContext(ShopContext)
    const totalAmount = getTotalCartAmount().toFixed(2)
    
    const navigate = useNavigate()
    
    return (
    <div className="cart">
        <div>
            <h1 className="cartItemsTitle">
                Your cart items
            </h1>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product}/> 
                    }
                    return null
                })}
            </div>
            {totalAmount > 0 ? 
                <div className="checkout">
                    <p>Subtotal: ${totalAmount}</p>
                    <button onClick={() => navigate('/')}>Continue Shopping </button>
                    <button> Checkout</button>

                </div>
                :
                <h1>Your cart is empty</h1>
            }
        </div>
    </div>
    )
}