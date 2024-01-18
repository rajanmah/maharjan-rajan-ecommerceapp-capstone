import React from 'react'
import './header.css'
import { Link } from "react-router-dom"

const Header = () => {
 
  return (
    <div className="header">
        <div className="header__links">
            <a href="#">Home</a>
            <a href="#">Menu</a>
            <a href="#">Newari Food and Culture</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            <a href="#">Cart Logo</a>
            <a href="#">Log in</a>
    
        </div>
      {/* <Link to='/'> <img className="header__icon" src="https://www.ethic-ads.com/wp-content/uploads/play-button-png-filename-play-button-png-237.png" /> </Link>
      <Link to='/menu' style={{ textDecoration: "none" }}> <span>Menu</span> </Link>
      <Link to='/history' style={{ textDecoration: "none" }}><span>History</span> </Link>
      <Link to='/aboutus' style={{ textDecoration: "none" }}><span>About Us</span> </Link>
      <Link to='/contact' style={{ textDecoration: "none" }}><span>Contact us</span> </Link> */}
      {/* <Link to='/discover/tv' style={{ textDecoration: "none" }}><span>Television Series</span> </Link> */}
    </div>
  )
}

export default Header