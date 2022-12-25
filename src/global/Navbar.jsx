import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { BsFillCartFill } from 'react-icons/bs'
import { useSelector } from "react-redux"



const Navbar = () => {

    const cart = useSelector((state) => state.cart);

    const getTotalQuantity=()=>{
        let total = 0;
        cart.forEach((item)=>{
            total += item.quantity;
        })
        return total;
    }

    return (
        <>
            <div className="header">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/cart">Cart <BsFillCartFill /><span>{getTotalQuantity() || 0} </span></Link>
            </div>
        </>
    )
}

export default Navbar