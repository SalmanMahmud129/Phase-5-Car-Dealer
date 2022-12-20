import React, { useEffect } from 'react'
import CarContainer from './CarContainer'

function Home({carData, setCurrentCart }) {

  useEffect(() =>{
    fetch("/current-cart")
    .then(resp => resp.json())
    .then(cartData => setCurrentCart(cartData))
  }, [])

  

  return (
    <>
    <div>Home</div>
    <CarContainer carData={carData}/>
    </>
  )
}

export default Home