import React from 'react'
import CarContainer from './CarContainer'

function Home({carData, setClickedCar}) {
  return (
    <>
    <div>Home</div>
    <CarContainer carData={carData} setClickedCar={setClickedCar}/>
    </>
  )
}

export default Home