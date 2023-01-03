import React from 'react'
import CarItem from './CarItem'

function CarContainer({carData, setRenderVehicles, renderVehicles}) {

  const eachCar = carData.map(car => <CarItem key={car.id} car={car} setRenderVehicles={setRenderVehicles} renderVehicles={renderVehicles}/>)
  return (
    <>
    <div className='carContainer'>{eachCar}</div>
    </>
  )
}

export default CarContainer