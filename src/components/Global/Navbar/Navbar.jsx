import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="navbar-main">
        <div className="navbar-wrap">
          <div className="navbar-left">
            <p className='logo'>Your Shop</p>
          </div>
          <div className="navbar-right">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar