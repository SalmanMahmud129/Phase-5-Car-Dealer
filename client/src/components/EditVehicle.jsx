import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyInput from 'react-currency-input-field'
import { Radio } from 'antd';

function EditVehicle({carDetails, id, setRenderEditForm, renderEditForm}) {

    const [formData, setFormData] = useState({
        make: carDetails.make,
        model: carDetails.model,
        color: carDetails.color
    })

    const [year, setYear] = useState( carDetails.year)
    const [transmission, setTransmission] = useState(carDetails.transmission)
    console.log(transmission)
    const [price, setPrice] = useState(carDetails.price)


    const [errors, setErrors] = useState([])

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(e){
        e.preventDefault()

        const vehicleEdit = {
            ...formData,
            year: year,
            transmission: transmission,
            price: price
        }

        fetch(`/vehicles/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(vehicleEdit)
        })
        .then(resp => resp.json())
        .then(() => setRenderEditForm(!renderEditForm))
        console.log("Submitted")
    }

    console.log('carDetails after clicking edit form', carDetails)

    const radioDefaultValue = carDetails.transmission === "Automatic" ? "a" : "b"

  return (
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
            <CurrencyInput className="login-form-inputs" id='input-example' name='input-name' placeholder='$' prefix="$" defaultValue={price} decimalsLimit={2} onValueChange={(value) => setPrice(value)} />

            <label>
                Enter Color
            </label>
            <input className='login-form-inputs' type='text' name='color' value={formData.color} onChange={handleChange}></input>

            <label>
                Enter Transmission
            </label>
            <br></br>
            
            
            <Radio.Group defaultValue={radioDefaultValue} buttonStyle="solid" onChange={(e) => {
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
            <input className="login-buttons" type='submit' value='Edit Vehicle' />
            </div>
            {errors ? errors.map(error => <div key={error}className='login-error'>{error}</div>) : null}

        </form>
  )
}

export default EditVehicle