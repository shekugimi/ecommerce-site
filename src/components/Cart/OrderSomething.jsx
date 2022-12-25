import React from 'react'
import "./OrderSomething.css"
import { useNavigate } from 'react-router-dom'
const OrderSomething = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="orderSomething">
                <h3>Your Cart is Empty</h3>
                <button
                    onClick={() => navigate('/')}
                >Shop Now</button>
            </div>

        </>
    )
}

export default OrderSomething