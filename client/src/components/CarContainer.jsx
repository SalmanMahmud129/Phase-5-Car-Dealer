import React from 'react'
import CarItem from './CarItem'

function CarContainer({carData, setClickedCar}) {

  const eachCar = carData.map(car => <CarItem key={car.id} car={car} setClickedCar={setClickedCar}/>)
  return (
    <div>CarContainer {eachCar}</div>
  )
}

export default CarContainer