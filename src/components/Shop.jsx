import {useState, useEffect} from 'react'
import {API_KEY, API_URL} from "../config";

import {Preloader} from "./Preloader";
import {GoodsList} from "./GoodsList";
import {Cart} from "./Cart";
import {CardList} from "./CartList";
import {Alert} from "./Alert";

function Shop() {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    const [isCartShow, setCartShow] = useState(false)
    const [alerName , setAlertName] = useState('')


    const addToCart = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id
        )

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                   return {
                       ...orderItem,
                       quantity: orderItem.quantity + 1
                   }
                }else {
                    return orderItem
                }
            })
            setOrder(newOrder)
        }
        setAlertName(item.displayName)
    }

    const removeFromCart =(itemId) => {
        const newOrder = order.filter(el => el.id !== itemId)
        setOrder(newOrder)
    }

    const incQuantityInCart =(itemId) =>{
        const newOrder = order.map(el =>{
            if (el.id === itemId) {
                const newQuantity = el.quantity + 1
                return {
                    ...el,
                    quantity: newQuantity
                }
            } else {
                return el
            }
        })
        setOrder(newOrder)
    }

    const decQuantityInCart =(itemId) =>{
        const newOrder = order.map(el =>{
            if (el.id === itemId) {
                const newQuantity = el.quantity - 1
                return {
                    ...el,
                    quantity: newQuantity >= 0 ? newQuantity : 0
                }
            } else {
                return el
            }
        })
        setOrder(newOrder)
    }

    const handleCartShow = () =>{
        setCartShow(!isCartShow)
    }

    const closeAlert = () => {
        setAlertName('')
    }

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        })
            .then(response => response.json())
            .then(data => {
                data.shop && setGoods(data.shop)
                setLoading(false)
            })
    }, [])

    return <main className='container content'>
        <Cart quantity={order.length} handleCartShow={handleCartShow}/>
        {loading ? (<Preloader/>) : (<GoodsList goods={goods} addToCart={addToCart}/>)}
        {
            isCartShow && (
            <CardList
                order ={order}
                handleCartShow={handleCartShow}
                removeFromCart={removeFromCart}
                incQuantityInCart={incQuantityInCart}
                decQuantityInCart={decQuantityInCart}
            />
            )
        }
        {alerName && <Alert displayName={alerName} closeAlert={closeAlert}/>}
    </main>
}

export {Shop}