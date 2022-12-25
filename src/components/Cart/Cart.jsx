import React from 'react'
import { useSelector } from 'react-redux'
import "./Cart.css"
import CartItem from "./CartItem"
import OrderSomething from './OrderSomething'

const Cart = () => {

  const cart = useSelector((state) => state.cart)
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return { totalPrice, totalQuantity }
  }

  return (
    <>
      <h3 className="cart-heading">Shopping Cart</h3>
      <div className='cart-container-data'>
        <h3>ORDER SUMMARY</h3>
        <p>Total-Items: {getTotal().totalQuantity} </p>
        <h3>Total Price: ${getTotal().totalPrice.toFixed()}</h3>
      </div>
      <div className="cart-container">

        <div className="cart-container-producs">
          {
            (getTotal().totalQuantity===0)? <OrderSomething />:
            cart?.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.img}
                price={item.price}
                quantity={item.quantity}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Cart