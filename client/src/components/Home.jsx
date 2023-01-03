import React, { useEffect, useState } from 'react'
import CarContainer from './CarContainer'
import CheckBox from './CheckBox'
import SearchBar from './SearchBar'
import ReviewsAtHome from './ReviewsAtHome'

function Home({userData, carData, setCurrentCart, setRenderVehicles, renderVehicles }) {
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


console.log('userData', userData)

  

  

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
    <div style={checkBoxFilterStyle}><CheckBox carData={carData}/></div>
    <div style={reviewBoxStyle}><ReviewsAtHome/></div>
    <SearchBar search={search} setSearch={setSearch}/>
    <br></br>
    <CarContainer carData={searchedCars} setRenderVehicles={setRenderVehicles} renderVehicles={renderVehicles}/>
    </>
  )

  
}

export default Home