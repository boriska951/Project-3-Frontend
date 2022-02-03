import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

import CartItem from '../components/cartitem'
import { addToCart, removeFromCart } from '../redux/actions/cartActions'
import Paypal from './Paypal'

const Cart = () => {

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart 

    const [checkout,setCheckOut] = useState(false)

    const remove = (id) => {
        dispatch(removeFromCart(id))
    }

    const cartTotal = () => {
        return cartItems
          .reduce((price, item) => Number(item.price), 0)
      };

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <div>
                Your cart is empty
                </div>
            ) : cartItems.map(item => (
                <CartItem item={item}
                remove={remove}
                />
            ))
            }
 
                <div className="cartscreen__info">
                    <p>Subtotal of your cart is ${cartTotal()}.</p>
                </div>
                {checkout ? (<Paypal/>):(
                    <button onClick={()=>{
                        setCheckOut(true)
                    }}>Checkout</button>
                )}
        </div>
    )
}

export default Cart