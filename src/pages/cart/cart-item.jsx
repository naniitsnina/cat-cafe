export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const formattedPrice = price.toFixed(2)

    return (
        <div className="cartItem">
            <img src={productImage}/>
            <div className="description">
                <p>
                    <b>
                        {productName}
                    </b>
                </p>
                <p>
                    ${formattedPrice}
                </p>

            </div>
        </div>
    )
}