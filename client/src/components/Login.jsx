import React from 'react'
import { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const [error, setErrors] = useState([])

    function handleSubmit(e){
        e.preventDefault()

        const login = {
            ...formData 
        }

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(login)
        })
        .then(resp => {
            if(resp.ok){
                resp.json().then(user => {
                    localStorage.setItem("user_id", user.id)
                    setErrors([])
                    navigate("/")
                })
            } else{
                resp.json().then(data => {
                    setErrors(data.error.login)
                })
            }
        })

        console.log("Login Submitted")
    }

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    // function enableSubmitButton(){
    //     if (formData.username && formData.password){
    //         return <input className="login-buttons" type='submit' value='Login' />
    //     } else{
    //         return <input className="login-buttons" type='submit' value='Login' disabled/>
    //     }
    // }


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

            {error ? <div className='login-error'>{error}</div> : null}
        </form>

    </div>
    </>
  )
}

export default Login