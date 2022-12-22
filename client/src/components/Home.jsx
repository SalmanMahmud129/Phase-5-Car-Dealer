import React, { useEffect } from 'react'
import CarContainer from './CarContainer'
import CheckBoxFilter from './CheckBoxFilter'

function Home({carData, setCurrentCart }) {

  

  

  return (
    <>
    <div><CheckBoxFilter/></div>
    <CarContainer carData={carData}/>
    </>
  )
}

export default Home