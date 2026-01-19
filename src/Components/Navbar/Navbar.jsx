import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import shopping from '../Assets/shopping-cart-white-icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import arrows from '../Assets/arrows.png'



const Navbar = () => {
 
        const[menu,setmenu]=useState("shop")
        const{getTotalCartItems}=useContext(ShopContext);
        const menuRef=useRef();

        const dropdown_toggle =(e)=>{
          menuRef.current.classList.toggle('nav-menu-visible');
          e.target.classList.toggle('open');
        }
  return (
    <div className='navbar'>

      <div className="nav-logo">
        <img src={logo} alt="" />
         <p>Shopper</p> 
         </div>
       <img className='nav-dropdown' onClick={dropdown_toggle } src={arrows} alt=''  />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setmenu("shop")}}><Link className='nav-style' to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("mens")}}><Link className='nav-style' to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("womens")}}><Link className='nav-style'  to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("kids")}}><Link className='nav-style' to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
       {
  localStorage.getItem("auth-token") ? (<button  onClick={() => {
          const confirmLogout = window.confirm(
            "Are you sure you want to log out?"
          );

          if (confirmLogout) {
            localStorage.removeItem("auth-token");
            window.location.replace("/");
          } }} > Logout </button> ) : ( <Link to="/login">  <button>Login</button>  </Link>)}

     <Link to='/cart'> <img  className='carts' src={shopping} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
       

    </div>
    
        
    
  )
}

export default Navbar
