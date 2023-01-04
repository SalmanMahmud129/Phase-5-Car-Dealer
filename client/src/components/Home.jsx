import React, { useEffect, useState } from 'react'
import CarContainer from './CarContainer'
import CheckBox from './CheckBox'
import SearchBar from './SearchBar'
import ReviewsAtHome from './ReviewsAtHome'


function Home({userData, carData, setCurrentCart, setRenderVehicles, renderVehicles }) {
  const currentUser = localStorage.getItem("user_id")
  const [makeFilter, setMakeFilter] = useState(false)
  const [colorFilter, setColorFilter] = useState(false)
  const [transmissionFilter, setTransmissionFilter] = useState(false)
  const [search, setSearch] = useState("")


  const onMakeChange = () => {
    setMakeFilter(!makeFilter)
  }

  const onColorChange = () => {
    setColorFilter(!colorFilter)
  }

  const onTransmissionChange = () => {
    setTransmissionFilter(!transmissionFilter)
  }


  const searchedCars = carData.filter((car) => {
    if(car.make.toLowerCase().includes(search.toLowerCase()) || car.model.toLowerCase().includes(search.toLowerCase())){
      return car
    }
    // if(car)
  }
  )


console.log('userData', userData)
console.log('makeFilter:', makeFilter)
console.log('colorFilter:', colorFilter)
console.log('transmissionFilter:', transmissionFilter)

  

  

  //---------------checkbox filter styling ----------\\

  const checkBoxFilterStyle = {
    position: "absolute",
    left: "80px"
  }

  //---------------checkbox filter styling ----------\\
    //---------------review box styling ----------\\

    const reviewBoxStyle = {
      position: "absolute",
      right: "80px"
    }
  
    //---------------review box styling ----------\\

  return (
    <>
    {currentUser ? <h1>Welcome, {userData.username}!</h1> : null }
    <div style={checkBoxFilterStyle}><CheckBox carData={carData} makeFilter={makeFilter} setMakeFilter={setMakeFilter} colorFilter={colorFilter} setColorFilter={setColorFilter} transmissionFilter={transmissionFilter} setTransmissionFilter={setTransmissionFilter} onMakeChange={onMakeChange} onTransmissionChange={onTransmissionChange} onColorChange={onColorChange} /></div>
    <div style={reviewBoxStyle}><ReviewsAtHome/></div>
    <SearchBar search={search} setSearch={setSearch}/>
    <br></br>
    <CarContainer carData={searchedCars} setRenderVehicles={setRenderVehicles} renderVehicles={renderVehicles}/>
    
    </>
  )

  
}

export default Home