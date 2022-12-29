import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyInput from 'react-currency-input-field'
import { Radio } from 'antd';

function AddVehicle({renderVehicles, setRenderVehicles}) {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        make: '',
        model: '',
        color: '',
    })

    const [year, setYear] = useState( new Date())
    const [transmission, setTransmission] = useState("Automatic")
    console.log(transmission)
    const [price, setPrice] = useState(null)



    function handleChange(e) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const [errors, setErrors] = useState([])

    function handleSubmit(e){
        e.preventDefault()

        const newVehicle = {
            ...formData,
            year: year,
            transmission: transmission,
            price: price
        }

        console.log('newVehicle', newVehicle)

        fetch('/vehicles', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newVehicle)
        })
        .then(resp => {
            if(resp.ok){
                resp.json().then(() => {
                    setRenderVehicles(!renderVehicles)
                    navigate('/')})
            } else{
                resp.json().then(data => {
                    console.log(data.errors)
                    setErrors(data.errors)
                })
            }
        })
    }
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className='login-container'>
        <form className='login-form-container' onSubmit={handleSubmit}>
            <label>
                Enter Make
            </label>
            <input className="login-form-inputs" type='text' name='make' value={formData.make} onChange={handleChange} />

            <label>
                Enter Model
            </label>
            <input className="login-form-inputs" type='text' name='model' value={formData.model} onChange={handleChange} />

            <label>
                Enter Year
            </label>
            <div>
            <DatePicker className="login-form-inputs" selected={year} onChange={(date) => setYear(date)} showYearPicker dateFormat="yyyy" />
            </div>

            <label>
                Enter Price
            </label>
            <CurrencyInput className="login-form-inputs" id='input-example' name='input-name' placeholder='$' prefix="$" defaultValue={0} decimalsLimit={2} onValueChange={(value) => setPrice(value)} />

            <label>
                Enter Color
            </label>
            <input className='login-form-inputs' type='text' name='color' value={formData.color} onChange={handleChange}></input>

            <label>
                Enter Transmission
            </label>
            <br></br>
            
            
            <Radio.Group defaultValue="a" buttonStyle="solid" onChange={(e) => {
                if(e.target.value === "a"){
                setTransmission("Automatic")} else{
                setTransmission("Manual")
                }
                }}>
                <Radio.Button value="a">Automatic</Radio.Button>
                <Radio.Button value="b">Manual</Radio.Button>
            </Radio.Group>

            <br></br>
            <br></br>
            <br></br>
            
            <div>
            <input className="login-buttons" type='submit' value='Add Vehicle' />
            </div>
            {errors ? errors.map(error => <div key={error}className='login-error'>{error}</div>) : null}

        </form>

    </div>
    </>
  )
}

export default AddVehicle