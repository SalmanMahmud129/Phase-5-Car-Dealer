import React, {useEffect, useState} from 'react'
import CarItem from './CarItem'

function CarContainer({carData, setRenderVehicles, renderVehicles, makesFilters, colorFilters, transmissionFilters, search}) {

  console.log('carData: ', carData)

  const filteredMakes = makesFilters.length > 0 ? carData.filter(car => makesFilters.includes(car.make)) : carData

  const filteredColors = colorFilters.length > 0 ? filteredMakes.filter(car => colorFilters.includes(car.color)) : filteredMakes

  const filteredTransmissions = transmissionFilters.length > 0 ? filteredColors.filter(car => transmissionFilters.includes(car.transmission)) : filteredColors

  

  

  
  const filteredCars = filteredTransmissions.filter((car) => {
    if(car.make_model.toLowerCase().includes(search.toLowerCase())){
      return car
    }
})
  const eachCar = filteredCars.map(car => <CarItem key={car.id} car={car} setRenderVehicles={setRenderVehicles} renderVehicles={renderVehicles}/>)
  
  
  return (
    <>
    <div className='carContainer'>{eachCar}</div>
    </>
  )
}

export default CarContainer