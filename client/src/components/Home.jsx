import React from 'react'
import CarContainer from './CarContainer'

function Home({carData}) {
  return (
    <>
    <div>Home</div>
    <CarContainer carData={carData}/>
    </>
  )
}

export default Home