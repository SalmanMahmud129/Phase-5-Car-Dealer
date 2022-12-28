import React, { useEffect, useState } from 'react'
import CarContainer from './CarContainer'
import CheckBox from './CheckBox'
import SearchBar from './SearchBar'

function Home({userData, carData, setCurrentCart }) {
  const currentUser = localStorage.getItem("user_id")
  const [makeFilter, setMakeFilter] = useState("")
  const [modelFilter, setModelFilter] = useState("")
  const [priceFilter, setPriceFilter] = useState("")
  const [colorFilter, setColorFilter] = useState("")
  const [transmissionFilter, setTransmissionFilter] = useState("")
  const [search, setSearch] = useState("")


  const searchedCars = carData.filter((car) => {
    return(
    car.make.toLowerCase().includes(search.toLowerCase()) || car.model.toLowerCase().includes(search.toLowerCase())
  )}
  )




  

  

  //---------------checkbox filter styling ----------\\

  const checkBoxFilterStyle = {
    position: "absolute",
    left: "80px"
  }

  //---------------checkbox filter styling ----------\\

  return (
    <>
    {currentUser ? <h1>Welcome, {userData.username}!</h1> : null }
    <div style={checkBoxFilterStyle}><CheckBox carData={carData}/></div>
    <SearchBar search={search} setSearch={setSearch}/>
    <CarContainer carData={searchedCars}/>
    </>
  )

  
}

export default Home