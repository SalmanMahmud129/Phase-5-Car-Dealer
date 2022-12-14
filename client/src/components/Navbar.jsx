import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate()


  // function login() {
  //       navigate('/login');
  //   }

  function handleLogout(){
    fetch('/logout', {
      method: 'DELETE'
    })
    .then(() => localStorage.clear())

    // navigate('/logout')

  }

  const isLoggedIn= localStorage.getItem("user_id") ? 
    <li className='active'><NavLink to='logged-out'onClick={handleLogout}>Logout</NavLink></li>
    : <li className='active'><NavLink to='login'>Login</NavLink></li>
  return (
    <nav className='nav'>
        <ul>
        <li className="active"><NavLink to="/">Home</NavLink></li>
        {isLoggedIn}
        <li className="active"><NavLink to="/about">About</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar