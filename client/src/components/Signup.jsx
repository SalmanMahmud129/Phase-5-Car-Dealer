import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import PhoneInput from 'react-phone-number-input/input'

function Signup({setToggleLogin}) {
//========================= Styling for Passwords not matching on signup =====================
  const passwordMismatchStyle = {
    textAlign: "center",
    background: "rgba(255, 0, 0, 0.2)",
    marginLeft: "25%",
    marginRight: "25%"
  }
//========================= Styling for Passwords not matching on signup =====================
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    first_name: "",
    last_name: "",
    address: "",
    email: ""
  })

  const [phoneValue, setPhoneValue] = useState()

  const [errors, setErrors] = useState([])

  const navigate = useNavigate()

  const [misMatch, setMisMatch] = useState("")


  function handleChange(e) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
}
  

  function handleSubmit(e){
    e.preventDefault()

    const signup = {
      ...formData,
      phone_num: phoneValue
    }

    if(formData.password === formData.confirmPassword){
      fetch('/users',{
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(signup)
      })
      .then(resp => {
        if(resp.ok){
          resp.json().then(user => {
            localStorage.setItem("user_id", user.id)
            localStorage.setItem("isAdmin", user.admin)
            setToggleLogin(true)
            setErrors([])
            navigate("/")
          })
        } else{
          resp.json().then(data => {
            console.log(data.errors)
            setErrors(data.errors)
          })
        }
      })
    } else{
      setMisMatch("Passwords do not match")
    }
    
    
  }

  const passwordMatch = misMatch ? <p style={passwordMismatchStyle}>PASSWORDS DO NOT MATCH</p> : null
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className='login-container'>
        <form className='login-form-container' onSubmit={handleSubmit}>
        <div>
            <div id='firstColumn'>
            <label>
                Enter Username
            </label>
            <input className="login-form-inputs" type='text' name='username' value={formData.username} onChange={handleChange} />

            <label>
                Enter Password
            </label>
            <input className="login-form-inputs" type='password' name='password' value={formData.password} onChange={handleChange} />

            <label>
                Confirm Password
                {passwordMatch}
            </label>
            <input className="login-form-inputs" type='password' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} />

            <label>
                Email
            </label>
            <input className="login-form-inputs" type='text' name='email' value={formData.email} onChange={handleChange} />

            </div>


            {/* Where it should split into a second column */}
            <div id='secondColumn'>
            <label>
                First Name
            </label>
            <input className="login-form-inputs" type='text' name='first_name' value={formData.first_name} onChange={handleChange} />

            <label>
                Last Name
            </label>
            <input className="login-form-inputs" type='text' name='last_name' value={formData.last_name} onChange={handleChange} />
            <label>
                Address
            </label>
            <input className="login-form-inputs" type='text' name='address' value={formData.address} onChange={handleChange} />

            <label>
                Phone Number (optional)
            </label>
            <PhoneInput className="login-form-inputs" placeholder="+1 *** *** ****" name="phone_num" value={phoneValue} onChange={setPhoneValue} />
            {/* <input className="login-form-inputs" placeholder="ex: XXX-XXX-XXXX" type='text' name='phone_num' value={formData.phone_num} onChange={handleChange} /> */}

            </div>
          </div>
            <input className="login-buttons" type='submit' value='Create Account' />

            {errors ? errors.map(error => <div key={error}className='login-error'>{error}</div>) : null}

            {/* {errors ? <div className='login-error'>{errors[1]}</div> : null} */}
        </form>

    </div>
    </>
  )
}

export default Signup