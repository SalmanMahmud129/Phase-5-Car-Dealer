import React, { useEffect, useState } from 'react'
import CarContainer from './CarContainer'
import CheckBoxFilter from './CheckBoxFilter'
import SearchBar from './SearchBar'

function Home({userData, carData, setCurrentCart }) {
  const [makeFilter, setMakeFilter] = useState("")
  const [modelFilter, setModelFilter] = useState("")
  const [priceFilter, setPriceFilter] = useState("")
  const [colorFilter, setColorFilter] = useState("")
  const [transmissionFilter, setTransmissionFilter] = useState("")
  const [search, setSearch] = useState("")


  

  

  return (
    <>
    <h1>Welcome, {userData.username}!</h1>
    <div><CheckBoxFilter/></div>
    <SearchBar search={search} setSearch={setSearch}/>
    <CarContainer carData={carData}/>
    </>
  )
}

export default Home