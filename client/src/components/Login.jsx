import React from 'react'
import { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    function handleSubmit(e){
        e.preventDefault()

        console.log("Login Submitted")
    }

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }


  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className='login-container'>
        <form className='login-form-container' onSubmit={handleSubmit}>
            <label>
                Enter Username
            </label>
            <input className="login-form-inputs" type='text' name='username' value={formData.username} onChange={handleChange} />

            <label>
                Enter Password
            </label>

            <input className="login-form-inputs" type='password' name='password' value={formData.password} onChange={handleChange} />

            <input className="login-buttons" type='submit' value='Login' />
            <div>
            <p>Dont have an account? Click <NavLink to="/signup">here</NavLink></p>
            </div>
        </form>

    </div>
    </>
  )
}

export default Login