import React from 'react'
import './header.css'
import { Link } from "react-router-dom"

const Header = () => {
 
  return (
    <div className="header">
        <div className="header__links">
            <Link to="/" style={{ textDecoration: 'none' }}><span>Home</span></Link>
            <Link to="/products" style={{ textDecoration: 'none' }}><span>Menu</span></Link>
            <Link to="/newafood" style={{ textDecoration: 'none' }}><span>Newa Food and Tradition</span></Link>
            <Link to="/about" style={{ textDecoration: 'none' }}><span>About Us</span></Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}><span>Contact Us</span></Link>
            <Link to="/cart" style={{ textDecoration: 'none' }}><span>Cart Logo</span></Link>
            <Link to="/login" style={{ textDecoration: 'none' }}><span>Log in</span></Link>
    
        </div>
      </div>
  )
}

export default Header