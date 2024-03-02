import React, { useState, useContext } from 'react'
import { LOGO_URL } from '../../utils/UrlData'
import { Link } from 'react-router-dom';
import UsersContext from '../../utils/UsersContext';
import { useSelector } from 'react-redux';

function Header() {
 
    let [btnState, useBtnState] = useState("Login");

    const data= useContext(UsersContext)
 const cartItems = useSelector((store) => store.cart.items)
    
    return (
        <div className="flex max-h-[100px] drop-shadow-sm shadow-sm justify-between bg-green-300">
            <div className="">
            <Link to="/" relative="path"><img className="w-[100px] mx-[30px] h-[100px] bg-white" src={LOGO_URL}></img></Link>
            </div>
            <div className="flex items-center ">
                <ul className="flex p-4">
                <li className='"block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"'><Link to="/forms" relative="path">Form</Link></li>
                    <li className='"block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"'><Link to="/" relative="path">Home</Link></li>
                    <li className='"block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"'><Link to="/about" relative="path">About</Link></li>
                    <li className='"block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"'><Link to="/contact-us" relative="path">Contact Us</Link></li>
                    <li className='"block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"'><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
                    <li className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0"><button className='login-btn' onClick={() =>
                        {btnState === "Login"? useBtnState("Logout") : useBtnState("Login")}}>{btnState}</button></li>
                          <li className='"block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"'>{data.user}</li>
                          {/* <li className='"block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"'><Link to="/forms">Form</Link></li> */}
                </ul>
            </div>
        </div>
    )
}

export default Header