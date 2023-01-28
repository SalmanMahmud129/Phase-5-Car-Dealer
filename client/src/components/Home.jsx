import React, { useEffect, useState } from 'react'
import CarContainer from './CarContainer'
import CheckBox from './CheckBox'
import SearchBar from './SearchBar'
import ReviewsAtHome from './ReviewsAtHome'


function Home({userData, carData, setCurrentCart, setRenderVehicles, renderVehicles, reviews, renderReviews, setRenderReviews }) {
  const currentUser = localStorage.getItem("user_id")
  
  const [search, setSearch] = useState("")
  const [makesFilters, setMakesFilters] = useState([])
  const [colorFilters, setColorFilters] = useState([])
  const [transmissionFilters, setTransmissionFilters] = useState([])


  const onMakeChange = (action, make) => {
    if(action === "add"){
      setMakesFilters([...makesFilters, make])
    }else{
      setMakesFilters((makes) =>makes.filter(stateMake => stateMake !== make))
    }
  }

  const onColorChange = (action, color) => {
    if(action === "add"){
    setColorFilters([...colorFilters, color])
  }else{
    setColorFilters((colors) => colors.filter(stateColor => stateColor !== color))
  }
  }

  const onTransmissionChange = (action, transmission) => {
    if(action === "add"){
      setTransmissionFilters([...transmissionFilters, transmission])
    }else{
      setTransmissionFilters((transmissions) => transmissions.filter(stateTransmission => stateTransmission !== transmission))
    }
  }


  




// console.log('userData', userData)
// console.log('makeFilter:', makeFilter)
// console.log('colorFilter:', colorFilter)
// console.log('transmissionFilter:', transmissionFilter)

  

  

  //---------------checkbox filter styling ----------\\

  const checkBoxFilterStyle = {
    position: "absolute",
    left: "80px",
    
  }

  //---------------checkbox filter styling ----------\\
    //---------------review box styling ----------\\

    const reviewBoxStyle = {
      position: "absolute",
      right: "80px"
    }
  
    //---------------review box styling ----------\\

    console.log('makesFilters', makesFilters)

  return (
    <div className='home'>
    {currentUser ? <h1>Welcome, {userData.username}!</h1> : null }
    <br></br>
  

    <div style={checkBoxFilterStyle}><CheckBox carData={carData}  onMakeChange={onMakeChange} onColorChange={onColorChange} onTransmissionChange={onTransmissionChange}/></div>
    <div style={reviewBoxStyle}><ReviewsAtHome reviews={reviews} renderReviews={renderReviews} setRenderReviews={setRenderReviews}/></div>
    <br></br>
    <SearchBar search={search} setSearch={setSearch}/>
    <br></br>
    {carData ? <CarContainer carData={carData} setRenderVehicles={setRenderVehicles} renderVehicles={renderVehicles} makesFilters={makesFilters} colorFilters={colorFilters} transmissionFilters={transmissionFilters} search={search}/> : null}
    
    </div>
  )

  
}

export default Home