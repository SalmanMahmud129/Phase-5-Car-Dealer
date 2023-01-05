import React, {useState} from 'react'
import IndividualCheckBoxes from './IndividualCheckBoxes'

function CheckBox({ onMakeChange, onColorChange, onTransmissionChange, carData}) {

  // const [makesArr, setMakesArr] = useState([])
  const makesArr = []
  const colorsArr = []
  const transmissionsArr = []

  const [checked, setChecked] = useState(false)
  
  

  //----------- logic for generating make checkboxes -----------------//
  carData.map(car =>{
    console.log(car.make)
    makesArr.push(car.make)
  })

  console.log("makes: ", makesArr)

  const uniqueMakes = [...new Set(makesArr)]


  console.log('uniqueMakes: ', uniqueMakes)

  const makes = uniqueMakes.map(make =>{
    return(
      <IndividualCheckBoxes key={make} data={make} type={"make"} onMakeChange={onMakeChange}/>
    )
  })
  // const makes = uniqueMakes.map(make =>{
  //   return(
  //   <div>
  //     <label>{make}
  //     <input type="checkbox" name={make} checked={checked} onChange={onMakeChange} ></input>
  //     </label>
  //   </div>
  //   )})

  console.log("make checkboxes", makes)
  //----------- logic for generating make checkboxes -----------------//




  //----------- logic for generating color checkboxes -----------------//
  carData.map(car => {
    colorsArr.push(car.color)
  })

  const uniqueColors = [...new Set(colorsArr)]

  const colors = uniqueColors.map(color =>{
    return(
      <IndividualCheckBoxes key={color} data={color} type={"color"} onColorChange={onColorChange}/>
    )
  })

  // const colors = uniqueColors.map(color =>{
  //   return(
  //     <div>
  //       <label>{color}
  //       <input type="checkbox" name={color} checked={checked} onChange={onColorChange}></input>
  //       </label>
  //     </div>
  //   )
  // })
  //----------- logic for generating color checkboxes -----------------//
  

  //----------- logic for generating transmission checkboxes -----------------//
  carData.map(car => {
    transmissionsArr.push(car.transmission)
  })

  const uniqueTransmissions = [...new Set(transmissionsArr)]

  const transmissions = uniqueTransmissions.map(transmission =>{
    return(
      <IndividualCheckBoxes key={transmission} data={transmission} type={"transmission"} onTransmissionChange={onTransmissionChange}/>
    )
  })

  // const transmissions = uniqueTransmissions.map(transmission =>{
  //   return(
  //   <div>
  //     <label>{transmission}
  //     <input type="checkbox" name={transmission} checked={checked} onChange={onTransmissionChange}></input>
  //     </label>
  //   </div>
  //   )
  // })
  //----------- logic for generating transmission checkboxes -----------------//






  return (
    <div>
      <div className='checkboxes'>
      Filter
      <br></br>
        <h5>By Make:</h5>
        {makes}
        <h5>By Color:</h5>
        {colors}
        <h5>By Transmission:</h5>
        {transmissions}
      </div>
    </div>
  )
}

export default CheckBox