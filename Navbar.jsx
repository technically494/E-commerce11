import React from 'react'
import './Navbar.css'
import logo from "../../assets/logo.jpg";
import cart_logo1 from "../../assets/cart_logo1.jpg"; // relative path
import { useState } from 'react'
import { Link } from "react-router-dom";
import { ShopContext } from '../../Context/ShopContext'
import { useContext } from 'react'

export const Navbar = () => {
    const [menu,setMenu] = useState("shop"); 
    const{getTotalCartItems}=useContext(ShopContext);
  return (
    <div className='navbar'>
        <div className="nav-logo">
            {<img src={logo} alt="logo" width={200} height={150} />}
            <p>SHOPPER</p>
        </div>
        <div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style= {{textDecoration:'none'}} to='./'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("men")}}><Link style= {{textDecoration: 'none'}}to='./men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("women")}}><Link style= {{textDecoration: 'none'}}to='./women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style= {{textDecoration: 'none'}}to='./kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            </div>
            <div className='nav-login-cart'>
                <Link to='./login'><button>Login</button></Link>
                <Link to='./cart'><img src={cart_logo1} alt='Cart' width={120} /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
    </div>
  )
}
export default Navbar
