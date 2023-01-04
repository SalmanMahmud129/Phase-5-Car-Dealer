import { BorderRightOutlined } from '@ant-design/icons'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {ShoppingCartOutlined } from '@ant-design/icons'
import { Badge } from 'antd'

function Navbar({setToggleLogin, cartLength}) {

  const navigate = useNavigate()



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
  return (
    <nav style={navStyle} >
        <NavLink to="/">Home</NavLink>
        <NavLink style={cartLinkStyle} to="/cart"><ShoppingCartOutlined style={cartStyle}/><Badge count={cartLength}></Badge></NavLink>
        {isAdmin}
        {isLoggedIn}
        
    </nav>
  )
}

export default Navbar