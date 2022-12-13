import React from 'react'
import { NavLink } from 'react-router-dom'

function LogoutScreen() {
  return (
    <div>Successfully logged out! Return <NavLink to="/">Home</NavLink> </div>
  )
}

export default LogoutScreen