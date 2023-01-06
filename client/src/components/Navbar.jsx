import { BorderRightOutlined } from '@ant-design/icons'
import React from 'react'
import { NavLink, useNavigate, useLocation} from 'react-router-dom'
import {ShoppingCartOutlined } from '@ant-design/icons'
import { Badge } from 'antd'

function Navbar({setToggleLogin, cartLength}) {

  const navigate = useNavigate()

  const location = useLocation()



  function handleLogout(){
    fetch('/logout', {
      method: 'DELETE'
    })
    .then(() => {
      localStorage.clear()
      setToggleLogin(false)
    })
      
  }

  //======================= Nav Styling ==========================\\
  const navStyle = {
    backgroundColor: "#282c34",
    paddingBottom: "10px"
  }

  //======================= Nav Link Styling ==========================\\
  const cartLinkStyle = {
    position: "absolute",
    right: "100px",
    top: "0px",
  }

  const cartStyle = {
    position: "absolute",

  }

  const isLoggedIn= localStorage.getItem("user_id") ? 
    <NavLink to='logged-out'onClick={handleLogout}>Logout</NavLink>
    : <NavLink to='login'>Login</NavLink>

  const isAdmin = localStorage.getItem("isAdmin") === "true" ? 
    <NavLink to='add-vehicle'>Add Vehicle</NavLink> : null
  
  const isLoggedInCart= localStorage.getItem("user_id") ? 
  <NavLink style={cartLinkStyle} to="/cart"><ShoppingCartOutlined style={cartStyle}/><Badge count={cartLength}></Badge></NavLink>
    : null


  const renderNavBar = location.pathname === "/logged-out" || location.pathname === "/login" || location.pathname === "/payment-complete" || location.pathname === "/signup" ? null : 
  <nav style={navStyle} >
    <NavLink to="/">Home</NavLink>
    
    {isAdmin}
    {isLoggedIn}
    {isLoggedInCart}   
  </nav>

console.log("location.pathname", location.pathname === "/logged-out")
  return (
    <>
    {renderNavBar}
    </>
    // <nav style={navStyle} >
    //     <NavLink to="/">Home</NavLink>
    //     <NavLink style={cartLinkStyle} to="/cart"><ShoppingCartOutlined style={cartStyle}/><Badge count={cartLength}></Badge></NavLink>
    //     {isAdmin}
    //     {isLoggedIn}
        
    // </nav>
  )
}

export default Navbar