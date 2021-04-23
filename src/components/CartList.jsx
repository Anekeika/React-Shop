import {CartItem} from "./CartItem";

function CardList(props) {
    const {
        order = [],
        handleCartShow = Function.prototype,
        removeFromCart = Function.prototype,
        incQuantityInCart,
        decQuantityInCart
    } = props


    const totalPrice = order.reduce((sum, el) => {
        return sum +el.finalPrice * el.quantity
    }, 0)

    return <ul className="collection card-list">
        <li className="collection-item active">Корзина</li>
        {
            order.length ? order.map(item =>(
                <CartItem key={item.id}
                          removeFromCart={removeFromCart}
                          incQuantityInCart={incQuantityInCart}
                          decQuantityInCart={decQuantityInCart}
                          {...item} />
            )) : <li className="collection-item">Корзина пуста</li>
        }
        <li className="collection-item active">Общая стоимость: {totalPrice} руб. <button className='secondary-content button-buy'>Оплатить</button></li>
        <i className='material-icons cart-close' onClick={handleCartShow}>close</i>
    </ul>

}

export {CardList}