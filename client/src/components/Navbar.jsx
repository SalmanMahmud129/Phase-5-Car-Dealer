import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar({setToggleLogin}) {

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

  const isLoggedIn= localStorage.getItem("user_id") ? 
    <li className='active'><NavLink to='logged-out'onClick={handleLogout}>Logout</NavLink></li>
    : <li className='active'><NavLink to='login'>Login</NavLink></li>

  const isAdmin = localStorage.getItem("isAdmin") === "true" ? 
    <li className='active'><NavLink to='add-vehicle'>Add Vehicle</NavLink></li> : null
  return (
    <nav className='nav'>
        <ul>
        <li className="active"><NavLink to="/">Home</NavLink></li>
        {isLoggedIn}
        <li className="active"><NavLink to="/about">About</NavLink></li>
        <li className="active"><NavLink to="/cart">Your Cart</NavLink></li>
        {isAdmin}
        </ul>
    </nav>
  )
}

export default Navbar