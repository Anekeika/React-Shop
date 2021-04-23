function CartItem(props) {
    const {id, displayName, finalPrice, quantity, removeFromCart = Function.prototype, decQuantityInCart = Function.prototype, incQuantityInCart = Function.prototype} = props

    return (
        <li className="collection-item">
            {displayName} ({finalPrice} руб.) x{quantity} = {finalPrice*quantity} руб.
            {' '}
            <i className="material-icons cart-delete cart-quantity" onClick={() => decQuantityInCart(id)}>remove</i>
            {' '}
            <i className="material-icons cart-delete cart-quantity" onClick={() => incQuantityInCart(id)}>add</i>
            <span className='secondary-content' onClick={() => removeFromCart(id)}><i className="material-icons cart-delete">close</i></span>

        </li>
    )
}

export {CartItem}