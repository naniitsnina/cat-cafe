import { ShopContext } from "../../context/shop-context"

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data
    const formattedPrice = price.toFixed(2)
    
    return (
        <div className="product">
            <img src={productImage} alt={productName} /> 
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p>
                    ${formattedPrice}
                </p>
            </div>
            <button className="addToCartBttn"> Add to Cart </button>
        </div>
    )
}