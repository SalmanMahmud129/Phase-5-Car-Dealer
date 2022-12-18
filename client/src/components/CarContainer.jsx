import React from 'react'
import CarItem from './CarItem'

function CarContainer({carData}) {

  const eachCar = carData.map(car => <CarItem key={car.id} car={car}/>)
  return (
    <div>CarContainer {eachCar}</div>
  )
}

export default CarContainer