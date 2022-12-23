import React, { useEffect, useState } from 'react'
import CarContainer from './CarContainer'
import CheckBoxFilter from './CheckBoxFilter'

function Home({carData, setCurrentCart }) {
  const [makeFilter, setMakeFilter] = useState("")
  const [modelFilter, setModelFilter] = useState("")
  const [priceFilter, setPriceFilter] = useState("")
  const [colorFilter, setColorFilter] = useState("")
  const [transmissionFilter, setTransmissionFilter] = useState("")


  

  

  return (
    <>
    <div><CheckBoxFilter/></div>
    <CarContainer carData={carData}/>
    </>
  )
}

export default Home