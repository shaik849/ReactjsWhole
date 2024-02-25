import React, { useState } from 'react'
import { LOGO_URL } from '../../utils/UrlData'
import { Link } from 'react-router-dom';

function Header() {
 
    let [btnState, useBtnState] = useState("Login");
    
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/" relative="path">Home</Link></li>
                    <li><Link to="/about" relative="path">About</Link></li>
                    <li><Link to="/contact-us" relative="path">Contact Us</Link></li>
                    <li>Cart</li>
                    <li><button className='login-btn' onClick={() =>
                        {btnState === "Login"? useBtnState("Logout") : useBtnState("Login")}}>{btnState}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header