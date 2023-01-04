import React, {useEffect, useState} from 'react'
import CarItem from './CarItem'

function CarContainer({carData, setRenderVehicles, renderVehicles, makesFilters, colorFilters, transmissionFilters, search}) {

  // const [availableCars, setAvailableCars] = useState(carData ? carData : "Not here!!!!!")

  const [availableCars, setAvailableCars] = useState(carData)

  const [filteredMakes, setFilteredMakes] = useState(carData)

  const [filteredColors, setFilteredColors] = useState(carData)

  const [filteredTransmissions, setFilteredTransmissions] = useState(carData)


  // useEffect(() =>{
  //   let searchedCars = availableCars
  //   if(makesFilters?.length > 0){
  //     const searchedByMakes = availableCars.filter(car =>makesFilters.includes(car.make))
  //     setFilteredMakes(searchedByMakes)
  //   }
  //   if(colorFilters?.length > 0){
  //     const searchedByColor = availableCars.filter(car =>colorFilters.includes(car.color))
  //     setFilteredColors(searchedByColor)
  //   }
  //   if(transmissionFilters?.length > 0){
  //     searchedByTransmissions = availableCars.filter(car =>transmissionFilters.includes(car.transmission))
  //     setFilteredTransmissions(searchedByTransmissions)
  //   }
  //   setAvailableCars(searchedCars)
  // }, [makesFilters, colorFilters, transmissionFilters])

  useEffect(() =>{
    console.log('availableCars:', availableCars)
    if(makesFilters.length > 0){
      const searchedByMakes = availableCars.filter(car =>{
        console.log('car.make:', car.make)
        return makesFilters.includes(car.make)}
        )
        console.log('makesFilters.length:', makesFilters.length)
      setFilteredMakes(searchedByMakes)
    }else{
      setFilteredMakes(carData)
    }
  }, [makesFilters])
  console.log('filteredMakes:', filteredMakes)
  
  useEffect(() =>{
    if(colorFilters.length > 0){
      const searchedByColor = availableCars.filter(car =>colorFilters.includes(car.color))
      setFilteredColors(searchedByColor)
    }else{
      setFilteredColors(carData)
    }
  }, [colorFilters])

  useEffect(() =>{
    if(transmissionFilters.length > 0){
      const searchedByTransmissions = availableCars.filter(car =>transmissionFilters.includes(car.transmission))
      setFilteredTransmissions(searchedByTransmissions)
    }else{
      setFilteredTransmissions(carData)
    }
  },[transmissionFilters])

  useEffect(() =>{

    const searchedCars = carData.filter((car) =>{
      return (
        filteredMakes.includes(car.make) && filteredColors.includes(car.color) && filteredTransmissions.includes(car.transmission)
      )
    })

    setAvailableCars(searchedCars)

  }, [filteredColors, filteredMakes, filteredTransmissions])

  
  // console.log('availableCars:', availableCars)
  
  const filteredCars = availableCars.filter((car) => {
    if(car.make.toLowerCase().includes(search.toLowerCase()) || car.model.toLowerCase().includes(search.toLowerCase())){
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